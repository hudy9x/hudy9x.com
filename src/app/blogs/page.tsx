import { getAllBlogPosts } from '../_services/notion';
import HighlightedBlog from '../_containers/HighlightedBlog';
import BlogList from '../_containers/BlogList';
import Link from 'next/link';

export default async function BlogsPage() {
  const numberOfHighlightedPosts = 1;
  const allPosts = await getAllBlogPosts();
  const highlightedPosts = allPosts.slice(0, numberOfHighlightedPosts);
  const remainingPosts = allPosts.slice(numberOfHighlightedPosts);

  return (
    <main>
      <HighlightedBlog posts={highlightedPosts} />
      
      <section className="py-16">
        <div className="max-w-[750px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">All Articles</h2>
          <BlogList posts={remainingPosts} />
        </div>
      </section>
    </main>
  );
}
