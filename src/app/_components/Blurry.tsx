import RandomTextReveal from "./RandomTextReveal";

export default function Blurry() {
  return <div className="fixed z-10 hide-element top-0 left-0 w-screen h-screen">
    <div className="h-screen flex items-center justify-center">
      <h3>
        <RandomTextReveal duration={1} text="Initializing ..." />
      </h3>
    </div>
  </div>
}
