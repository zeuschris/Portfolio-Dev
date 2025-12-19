"use client"

import { useState, useEffect } from "react"

export function useTypingEffect(text: string, speed = 50) {
  const [displayedText, setDisplayedText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    setDisplayedText("")
    setIsComplete(false)
    let index = 0

    const timeoutId = setTimeout(() => {
      const intervalId = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.substring(0, index + 1))
          index++
        } else {
          setIsComplete(true)
          clearInterval(intervalId)
        }
      }, speed)

      return () => clearInterval(intervalId)
    }, 100)

    return () => clearTimeout(timeoutId)
  }, [text, speed])

  return { displayedText, isComplete }
}
