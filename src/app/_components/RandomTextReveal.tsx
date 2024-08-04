'use client'
import { useEffect, useRef } from "react"

const alphabet = '!@#$%^&*()_+qwertyuiiop[]asdfghjklzxcvbnm,./;'.split('');
function RandomText({ text, time }: { text: string, time: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const randomAlphabet = () => {
    const len = alphabet.length

    return alphabet[Math.round(Math.random() * len)] || 'a'
  }

  useEffect(() => {
    const run = (element: HTMLSpanElement) => {
      let start: number
      const animate = (timestamp: number) => {
        if (!start) {
          start = timestamp
        }

        const elapsed = timestamp - start
        const randText = randomAlphabet()
        if (!randText) {
          console.log(randText)
        }
        element.innerText = randText

        if (elapsed < time) {
          window.requestAnimationFrame(animate)
          return
        } else {
          element.innerText = text
        }
      }

      window.requestAnimationFrame(animate)
    }

    if (ref.current) {
      run(ref.current)
    }
  }, [ref, text, time])
  return <span ref={ref}>{text}</span>
}

export default function RandomTextReveal({ text, duration = 2 }: { duration?: number, text: string }) {

  const words = text.split('')
  const len = words.length
  const totalTime = duration * 1000
  const minTime = totalTime / len


  return <>
    {words.map((w, windex) => {
      return <RandomText key={windex} text={w} time={minTime * (windex + 1)} />
    })}
  </>
}
