import About from "./_containers/About";
import GetInTouch from "./_containers/GetInTouch";
import Header from "./_containers/Header";
import Mywork from "./_containers/Mywork";
import Skills from "./_containers/Skills";
import WorkExperience from "./_containers/WorkExperience";
import WorkList from "./_containers/WorkList";
import Navigation from "./_containers/Navigation";
import Blurry from "./_components/Blurry";

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
      <Navigation />
      <Blurry />
    </main>
  );
}
