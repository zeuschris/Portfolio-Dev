"use client"

import { useState, useEffect, useRef } from "react"

const animationRegistry = new Map<string, boolean>()

export function useTypingEffect(text: string, speed: number = 50) {
  const [displayedText, setDisplayedText] = useState("")
  const [isComplete, setIsComplete] = useState(false)
  
  const hookId = useRef<string>()
  
  if (!hookId.current) {
    hookId.current = `typing-${Date.now()}-${Math.random()}`
  }

  useEffect(() => {

    if (animationRegistry.get(hookId.current!)) {
      setDisplayedText(text)
      setIsComplete(true)
      return
    }

    animationRegistry.set(hookId.current!, true)
    
    let currentIndex = 0
    setDisplayedText("")
    setIsComplete(false)

    const timer = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        setIsComplete(true)
        clearInterval(timer)
      }
    }, speed)

    return () => clearInterval(timer)
  }, [text, speed])

  return { displayedText, isComplete }
}