import { Calendar, Github, Globe, StarIcon } from "lucide-react"
import Link from "next/link"
import Languages from "./Languages"
import GithubStar from "./GithubStar"

function WorkInfo({ title, type, link = false }: { title: string, type: 'duration' | 'website' | 'github', link?: boolean }) {
  const getLink = () => {
    if (type === 'github')
      return `https://github.com/${title}`

    if (type === 'website')
      return `https://${title}`

    return ''
  }
  return <div className="flex items-center gap-1.5 text-zinc-500 text-xs">
    {type === 'duration' ? <Calendar className="p-0.5 rounded bg-green-100 text-green-500" size={15} />
      : null}
    {type === 'github' ? <Github className="p-0.5 rounded bg-orange-100 text-orange-500" size={15} />
      : null}
    {type === 'website' ? <Globe className="p-0.5 rounded bg-blue-100 text-blue-500" size={15} />
      : null}
    <div className="truncate">

      {link ? <Link className="hover:underline transition-all" target="_blank" href={getLink()}>{title}</Link> : title}
    </div>
  </div>
}

export default function WorkList() {
  const works = [
    {
      thumb: '/namviek-2.png',
      logo: '/namviek-logo.png',
      name: 'Namviek',
      duration: 'May 2023 - Present',
      website: 'namviek.com',
      github: 'hudy9x/namviek.git',
      star: 'https://api.github.com/repos/hudy9x/namviek',
      techstacks: 'https://api.github.com/repos/hudy9x/namviek/languages',
      desc: 'This is an open-source project management built for small teams with low budget. So If you’ve running 10-15 members like me and only have $20 buck per month, it matches for you.'
    },
    {
      thumb: '/kompad-2.png',
      logo: '/kompad-logo.png',
      name: 'Kompad',
      duration: 'Dec 2022 - Nov 2023',
      website: 'kompad.vercel.app',
      github: 'hudy9x/kompad.git',
      star: 'https://api.github.com/repos/hudy9x/kompad',
      techstacks: 'https://api.github.com/repos/hudy9x/kompad/languages', desc: `A beautiful app that allows you to create, edit, synchonize your techinal document. Even custom your own look.`
    },
    {
      thumb: '/keyreader.png',
      logo: '/keyreader-logo.png',
      name: 'Keyreader',
      duration: 'Apr 2023 - May 2023',
      website: 'hudy9x.github.io/keyreader',
      github: 'hudy9x/keyreader',
      star: 'https://api.github.com/repos/hudy9x/keyreader',
      techstacks: 'https://api.github.com/repos/hudy9x/keyreader/languages',
      desc: `KeyReader enables you to share your keystroke when streaming your screen. And yes, it looks like KeyCastr. The only difference is that it supports Windows.

` },
  ]
  return <section className="section-large">
    {works.map((work, workIndex) => {
      return <div key={workIndex} className="mb-[70px] relative">
        <img className="" width={700} src={work.thumb} />
        <GithubStar link={work.star} />
        <header className="flex items-center gap-4 section pt-[10px]">
          <img className="p-1.5 rounded-full border shadow-md" src={work.logo} width={40} height={40} />
          <div className="space-y-2">
            <h4 className="flex items-center gap-2">{work.name} </h4>
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
              <WorkInfo type="duration" title={work.duration} />
              <WorkInfo type="website" link={true} title={work.website} />
              <WorkInfo type="github" link={true} title={work.github} />
            </div>
          </div>
        </header>
        <section className="section pt-[20px]">
          <p className="para-sm">{work.desc}</p>
          <Languages link={work.techstacks} />
        </section>
      </div>
    })}
  </section>
}
