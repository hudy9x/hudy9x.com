import { Github } from "lucide-react";
import { Dock, DockIcon } from "./_components/Dock";
import About from "./_containers/About";
import GetInTouch from "./_containers/GetInTouch";
import Header from "./_containers/Header";
import Mywork from "./_containers/Mywork";
import Skills from "./_containers/Skills";
import WorkExperience from "./_containers/WorkExperience";
import WorkList from "./_containers/WorkList";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <WorkExperience />
      <Skills />
      <Mywork />
      <WorkList />
      <GetInTouch />
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2">
        <Dock direction="middle">
          <DockIcon>
            <Github size={24} />
          </DockIcon>
          <DockIcon>
            <Github size={24} />
          </DockIcon>
          <DockIcon>
            <Github size={24} />
          </DockIcon>
          <DockIcon>
            <Github size={24} />
          </DockIcon>
        </Dock>
      </div>
    </main>
  );
}
