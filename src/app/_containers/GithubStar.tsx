import { GithubIcon, StarIcon } from "lucide-react";
import Separator from "../_components/Separator";

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
  const starThousand = (starCounter / 1000).toPrecision(3)
  const starStr = +starThousand >= 1 ? `${starThousand}k` : starCounter

  return <div title="Github Star" className="absolute top-8 right-10">
    <div className="flex items-center gap-1 font-normal rounded-full shadow-lg bg-zinc-900 text-zinc-100 border border-zinc-700 p-1 px-4">
      <StarIcon className="text-yellow-500" size={12} />
      <span className="text-sm pr-2">Star</span>
      <Separator size="sm" dark={true} />
      <span className="text-sm pl-2">{starStr}</span>
    </div>
  </div>
}
