import Link from "next/link";
import { Dock, DockIcon } from "../_components/Dock";
import { CodeIcon, GithubIcon, HomeIcon, LinkedinIcon, SunIcon, TwitterIcon, YoutubeIcon } from "lucide-react";
import Separator from "../_components/Separator";

export default function Navigation() {
  return <div className="fixed bottom-8 left-1/2 -translate-x-1/2 text-zinc-500">
    <Dock direction="middle">
      <DockIcon>
        <Link href={'#about '}>
          <HomeIcon size={20} />
        </Link>
      </DockIcon>
      <DockIcon>
        <Link href={'#about '}>
          <CodeIcon size={20} />
        </Link>
      </DockIcon>
      <Separator />
      <DockIcon>
        <Link href={'#about '}>
          <GithubIcon size={20} />
        </Link>
      </DockIcon>
      <DockIcon>
        <Link href={'#about '}>
          <LinkedinIcon size={20} />
        </Link>
      </DockIcon>
      <DockIcon>
        <Link href={'#about '}>
          <TwitterIcon size={20} />
        </Link>
      </DockIcon>
      <DockIcon>
        <Link href={'#about '}>
          <YoutubeIcon size={20} />
        </Link>
      </DockIcon>
      <Separator />
      <DockIcon>
        <Link href={'#about '}>
          <SunIcon size={20} />
        </Link>
      </DockIcon>
    </Dock>
  </div>
}
