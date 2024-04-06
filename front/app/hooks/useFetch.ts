"use client"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const UNAUTHORIZED = 401

export function useFetch<T>(endpoint: string, options?: any, autoRun: boolean = true, callback?: any,): [
  fetchData: () => Promise<void>,
  data: T,
  isLoading?: boolean,
  error?: boolean
] {
  const { push } = useRouter();

  const [data, setData] = useState<T>()
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  async function fetchData() {

    const token = localStorage.getItem("token")
    try {
      setIsLoading(true)
      const response = await fetch(`http://localhost:5050${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        ...options
      })

      if (response.ok) {
        const responseData = await response.json()
        setData(responseData)
        callback()
      }

      if (response.status === UNAUTHORIZED) {
        push('/login');
        localStorage.clear();
      }
    } catch {
      setError(true)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (autoRun) {
      fetchData()
    }
  }, [])

  return [
    fetchData, data, isLoading, error
  ]

}
