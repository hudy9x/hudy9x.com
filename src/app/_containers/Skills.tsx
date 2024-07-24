export default function Skills() {
  // API to get languages from repo
  // https://api.github.com/repos/hudy9x/namviek/languages
  const skills = ['Next.js', 'Node.js', 'Docker', 'MongoDB', 'Typescript', 'React']
  return <section className="section">
    <h3>Skills</h3>
    <div className="flex items-center gap-2">
      {skills.map(skill => {
        return <button className="btn dark">{skill}</button>
      })}
    </div>
  </section>
}