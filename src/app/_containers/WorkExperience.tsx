import RandomTextReveal from "../_components/RandomTextReveal"

export default function WorkExperience() {
  const workExperience = [
    { logo: '/fpt-software.png', companyName: "FPT Software", position: "Technical Leader", workingTime: "Dec 2024 - Present" },
    { logo: '/ecomgrows.png', companyName: "Ecomgrows", position: "Technical Leader", workingTime: "June 2021 - Dec 2024" },
    { logo: '/fpt-software.png', companyName: "FPT Software", position: "Senior Web Developer", workingTime: "May 2016 - June 2021" },
    { logo: '/1office.png', companyName: "1Office", position: "Web Developer", workingTime: "Jan 2013 - Mar 2016" },
  ]
  return <section className="section">
    <h3 className="flex justify-between items-center">
      <div><RandomTextReveal onHover={true} text="Work Experience" /></div>

      <a href="https://drive.google.com/file/d/1v_64QAyUbD9XZOpX3C5mneha3SUHu4dF/view" target="_blank">
        <button className="btn">Download CV</button>
      </a>
    </h3>
    <div className="space-y-3">
      {workExperience.map((work, workIndex) => {
        return <div key={workIndex} className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-10 h-10 border shadow-md bg-black rounded-full" src={work.logo} />
            <div className="pt-2">
              <h4>{work.companyName}</h4>
              <small>{work.position}</small>
            </div>
          </div>
          <small>{work.workingTime}</small>
        </div>
      })}
    </div>
  </section>
}
