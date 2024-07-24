export default async function Languages({ link }: { link: string }) {
  const res = await fetch(link, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
    }
  })
  const data = await res.json()
  if (!data) return null

  const languages = Object.keys(data)
  console.log(languages)
  return <div className="flex items-center gap-2 mt-3">{
    languages.map(lang => {
      return <button key={lang} className="btn lowercase">{lang}</button>
    })
  }</div>
}
