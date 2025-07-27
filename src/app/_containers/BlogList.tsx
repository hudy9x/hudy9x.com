import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '../_services/notion';
import { formatDate } from '../_utils/date';

interface BlogListProps {
  posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  console.log('posts', posts)
  return (
    <div className="grid gap-12">
      {posts.map((post) => (
        <Link
          href={`/blog/${post.id}`}
          key={post.id}
          className="group bg-white rounded-lg overflow-hidden transition-shadow duration-300"
        >
          <div className="flex flex-col md:flex-row">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-500">{formatDate(post.date)}</span>
                <span className="px-3 py-1 text-sm bg-gray-100 rounded-full text-gray-600">
                  {post.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{post.description}</p>
              <div className="flex items-center">
                {post.author.avatar && (
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={25}
                    height={25}
                    className="rounded-full mr-3"
                  />
                )}
                <div>
                  <p className="text-xs">{post.author.name}</p>
                  <p className="text-xs text-gray-500">{post.author.role}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
