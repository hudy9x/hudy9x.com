import { Metadata } from 'next'
import Link from "next/link";
import SocialMediaLinks from "../_components/SocialMediaLinks";

export const metadata: Metadata = {
  title: 'My $1000 in 60 Days Journey',
  description: 'Follow my journey of making $1000 in 60 days - documenting progress, learnings, and milestones.',
}

export default function JourneyPage() {
  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="mx-auto pb-[200px]">
        <div className="mt-8 bg-gradient-to-r flex flex-col gap-5 items-center max-w-[550px] mx-auto p-6 rounded-lg">
            <span className='text-7xl p-5 rounded-[30px] bg-red-50'>🚀</span>
          <h2 className="text-4xl font-bold mb-4 text-gray-800 text-center">Follow My Journey!</h2>
          <p className="text-gray-700 text-lg mb-6 text-center">I&apos;m documenting my entire journey of making $1000 in 60 days. Follow me on social media to get daily updates, behind-the-scenes content, and valuable insights!</p>
          <SocialMediaLinks className="justify-center" />
          <Link
              href="/"
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              Back to Home
            </Link>
        </div>

        <div className="mt-8 bg-[#191919] rounded-lg shadow-lg overflow-hidden">
          <iframe src="https://clear-crow-8e0.notion.site/ebd/23dddbd574348045b955e509c131cfeb?v=23dddbd57434816bade7000c3bb33fa5" width="100%" height="600" allowFullScreen />
        </div>


        {/* <div className="mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
          <h2 className="text-2xl font-bold p-6 border-b">Latest Update</h2>
          <div className="aspect-video">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed?listType=user_uploads&list=@hudy9x" 
              title="Latest Journey Update"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>
        </div> */}

      </div>
    </main>
  )
}
