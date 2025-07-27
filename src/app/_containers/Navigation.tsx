import Link from "next/link";
import { Dock, DockIcon } from "../_components/Dock";
import { BookOpenIcon, CodeIcon, GithubIcon, HomeIcon, LinkedinIcon, SunIcon, TwitterIcon, YoutubeIcon } from "lucide-react";
import Separator from "../_components/Separator";

export default function Navigation() {
  return <div className="fixed bottom-8 left-1/2 -translate-x-1/2 text-zinc-500">
    <Dock direction="middle">
      <DockIcon>
        <Link href={'#about'}>
          <HomeIcon size={20} />
        </Link>
      </DockIcon>
      <DockIcon>
        <Link href={'#work'}>
          <CodeIcon size={20} />
        </Link>
      </DockIcon>
      <DockIcon>
        <Link href={'/blogs'}>
          <BookOpenIcon size={20} />
        </Link>
      </DockIcon>
      <Separator />
      <DockIcon>
        <Link target="_blank" href={'https://github.com/hudy9x'}>
          <GithubIcon size={20} />
        </Link>
      </DockIcon>
      <DockIcon>
        <Link target="_blank" href={'https://www.linkedin.com/in/hudy9x/'}>
          <LinkedinIcon size={20} />
        </Link>
      </DockIcon>
      <DockIcon>
        <Link target="_blank" href={'https://x.com/hudy09'}>
          <TwitterIcon size={20} />
        </Link>
      </DockIcon>
      <DockIcon>
        <Link target="_blank" href={'https://www.youtube.com/@hudy9x'}>
          <YoutubeIcon size={20} />
        </Link>
      </DockIcon>
      {/* <Separator /> */}
      {/* <DockIcon> */}
      {/*   <SunIcon size={20} /> */}
      {/* </DockIcon> */}
    </Dock>
  </div>
}
