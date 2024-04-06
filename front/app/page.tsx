"use client"
import { useFetch } from "./hooks/useFetch"
import Board from "@/app/components/Board"
import { Cards } from "./types/cards"
import Header from "@/app/components/Header"
import { ContextProvider } from "./ContextProvider"
import { useEffect, useState } from "react"
import { CircularProgress } from "@nextui-org/react"
export default function Home() {
  const [getData, cards, isLoading] = useFetch<Cards>("/cards")
  const [data, setData] = useState(0)
  useEffect(() => {
    getData()
  }, [data])
  return (
    <>
      <ContextProvider.Provider value={{ data, getData }}>
        <Header />
        <main className="bg-black">
          {isLoading ? (
            <CircularProgress aria-label="Loading..." className="m-auto h-full mt-12" />
          ) : (
            <Board data={cards}></Board>
          )} 
        </main>
      </ContextProvider.Provider>
    </>
  )
}
