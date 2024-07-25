export default async function Languages({ link }: { link: string }) {
  const res = await fetch(link, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
    }
  })
  const data = await res.json()

  if (!data) return null

  console.log('language data', data)
  if (data.status === '401') {
    console.log('Fetch languages error:', data.message)
    return null
  }

  const languages = Object.keys(data)
  console.log(languages)
  return <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 mt-3">{
    languages.map(lang => {
      return <button key={lang} className="btn lowercase">{lang}</button>
    })
  }</div>
}
