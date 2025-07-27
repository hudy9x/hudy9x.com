import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'My $1000 in 60 Days Journey',
  description: 'Follow my journey of making $1000 in 60 days - documenting progress, learnings, and milestones.',
}

export default function JourneyPage() {
  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="mx-auto">
        <div className="flex gap-4 mb-6">
          <Link
            href="/"
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          My $1000 in 60 Days Journey
        </h1>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <iframe src="https://clear-crow-8e0.notion.site/ebd/23dddbd574348045b955e509c131cfeb?v=23dddbd57434816bade7000c3bb33fa5" width="100%" height="600" allowFullScreen />
        </div>
      </div>
    </main>
  )
}
