import { StarIcon } from "lucide-react";

export default async function GithubStar({ link }: { link: string }) {
  const res = await fetch(link, {
    headers: {
      'authorization': `Bearer ${process.env.GITHUB_TOKEN}`
    }
  })
  const data = await res.json()

  if (!data) return null
  if (data.status === '401') return null

  const starCounter = data.stargazers_count

  return <div title="Github Star" className="flex items-center gap-1 font-normal rounded-full bg-zinc-100 p-1 px-1.5">
    <StarIcon className="text-yellow-500" size={10} />
    <span className="text-[10px]">{starCounter}</span>
  </div>
}
