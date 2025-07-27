import Image from 'next/image';
import Link from 'next/link';
import SocialMediaLinks from '../_components/SocialMediaLinks';
import { BlogPost } from '../_services/notion';
import { formatDate } from '../_utils/date';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface HighlightedBlogProps {
  posts: BlogPost[];
}

export default function HighlightedBlog({ posts }: HighlightedBlogProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Join my journey!</h2>
          <p className="text-gray-600 mb-6 max-w-[400px] mx-auto">Follow my tech adventures and learn about web development, productivity, and personal growth.</p>
          <div className="flex justify-center">
            <SocialMediaLinks className="justify-center" />
          </div>
        </div>

        <div className="max-w-[900px] mx-auto">
          {posts.map((post) => (
            <Link 
              href={`/blog/${post.id}`} 
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row"
            >
              <div className="relative w-full md:w-[400px] h-[300px] md:h-[300px]">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 p-8 flex flex-col justify-start">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">{formatDate(post.date)}</span>
                  <span className="px-3 py-1 text-sm bg-gray-100 rounded-full text-gray-600">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{post.description}</p>
                <div className="flex items-center">
                  {post.author.avatar && (
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={40}
                      height={40}
                      className="rounded-full mr-3"
                    />
                  )}
                  <div>
                    <p className="font-medium">{post.author.name}</p>
                    <p className="text-sm text-gray-500">{post.author.role}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

<div className="flex justify-center mt-12">
<Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
        >
          <ArrowLeft />  Back to Home
        </Link>
</div>
      

      </div>
    </section>
  );
}
