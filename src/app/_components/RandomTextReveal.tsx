'use client'
import { useEffect, useId, useRef, useState } from "react"

// const alphabet = '!@#$%^&*()_+qwertyuiiop[]asdfghjklzxcvbnm,./;'.split('');
const alphabet = '_+qwertyuiiopasdfghjklzxcvbnm,.;'.split('');
const alphabetLen = alphabet.length

function RandomText({
  text,
  time,
  onHover = false,
  trigger
}:
  {
    text: string,
    time: number,
    onHover?: boolean,
    trigger?: number
  }) {
  const ref = useRef<HTMLSpanElement>(null)

  const id = useId()
  const elemId = `rand-text-${id}`

  const randomAlphabet = () => {
    return alphabet[Math.round(Math.random() * alphabetLen)] || 'a'
  }

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

  useEffect(() => {
    // make sure that effect does not run as hover config is on
    if (onHover) return

    const element = document.querySelector(`[id="${elemId}"]`) as HTMLSpanElement
    if (element) {
      run(element)
    }
  }, [])

  useEffect(() => {
    if (!trigger || trigger < 1) return

    const element = document.querySelector(`[id="${elemId}"]`) as HTMLSpanElement
    if (element) {
      run(element)
    }
  }, [trigger])

  return <span id={elemId} ref={ref}>{text}</span>
}

export default function RandomTextReveal({ text, onHover, duration = 0.7 }: { duration?: number, text: string, onHover?: boolean }) {

  const id = useId()
  const elemId = `rand-text-container-${id}`
  const words = text.split('')
  const len = words.length
  const totalTime = duration * 1000
  const minTime = totalTime / len
  const [trigger, setTrigger] = useState(0)

  return <div
    onTouchEnd={() => {
      if (onHover) {
        setTrigger(prev => prev + 1)
      }
    }}
    onMouseEnter={() => {
      if (onHover) {
        setTrigger(prev => prev + 1)
      }
    }}
    id={elemId}>
    {words.map((w, windex) => {
      return <RandomText key={windex} onHover={onHover} trigger={trigger} text={w} time={minTime * (windex + 1)} />
    })}
  </div>
}
