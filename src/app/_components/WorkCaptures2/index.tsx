import './style.css'
export default function WorkCaptures2({ thumbs }: { thumbs: string[] }) {
  return <div className="work-captures h-[450px]">
    {thumbs.map((thumb, thumbIndex) => {
      return <div key={thumbIndex} className="work-capture-item">
        <img src={thumb} />
      </div>
    })}
  </div>
}
