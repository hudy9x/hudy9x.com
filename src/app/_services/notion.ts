import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  coverImage: string;
  category: string;
}

interface NotionQueryOptions {
  pageSize?: number;
}

async function queryNotionDatabase(options: NotionQueryOptions = {}): Promise<BlogPost[]> {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_BLOG_DATABASE_ID!,
      filter: {
        property: 'Status',
        select: {
          equals: 'Published'
        }
      },
      sorts: [
        {
          property: 'Date',
          direction: 'descending',
        },
      ],
      page_size: options.pageSize || 100,
    });

    return response.results.map((page: any) => ({
      id: page.id,
      title: page.properties.Title.title[0]?.plain_text || '',
      description: page.properties.Description.rich_text.map((text: { plain_text: string }) => text.plain_text).join(' ') || '',
      date: page.properties.Date.date?.start || '',
      author: {
        name: page.properties.Author.people[0]?.name || '',
        role: page.properties.AuthorRole.rich_text[0]?.plain_text || '',
        avatar: page.properties.Author.people[0]?.avatar_url,
      },
      coverImage: page.properties.CoverImage.files[0]?.file?.url || '',
      category: page.properties.Category.select?.name || '',
    }));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  return queryNotionDatabase();
}

export async function getHighlightedBlogPosts(): Promise<BlogPost[]> {
  return queryNotionDatabase({ pageSize: 3 });
}
