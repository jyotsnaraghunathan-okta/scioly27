import { useState, useRef, useCallback, useEffect } from 'react'

export function useTimer(durationMinutes, onExpire) {
  const [timeLeft, setTimeLeft] = useState(durationMinutes * 60)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef(null)
  const onExpireRef = useRef(onExpire)
  onExpireRef.current = onExpire

  useEffect(() => {
    if (!isRunning) return
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current)
          setIsRunning(false)
          onExpireRef.current?.()
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(intervalRef.current)
  }, [isRunning])

  const start = useCallback(() => setIsRunning(true), [])
  const pause = useCallback(() => setIsRunning(false), [])
  const reset = useCallback(() => {
    setIsRunning(false)
    setTimeLeft(durationMinutes * 60)
  }, [durationMinutes])

  const formatted = `${Math.floor(timeLeft / 60)}:${String(timeLeft % 60).padStart(2, '0')}`

  return { timeLeft, formatted, isRunning, start, pause, reset }
}
