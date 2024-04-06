"use client"
import BoardColumn from "@/app/components/BoardColumn"
import { Cards, CardType } from "../types/cards"

interface BoardPropsType {
  data?: Cards
}

export default function Board(props: BoardPropsType) {
  const boardTypes: CardType[] = ["ToDo", "Doing", "Done"]

  function getColumnByType(type: CardType) {
    return props?.data?.filter((card) => card.lista === type)
  }
  return (
    <section className="flex justify-between h-full max-w-full w-[1284px] mx-auto">
      {/* {!props.data &&
        <div>no cards yet create</div>
      } */}
      {boardTypes.map((boardType: CardType, index) => (
        <BoardColumn
          key={boardType}
          boardType={boardType}
          cards={getColumnByType(boardType)}
        />
      ))}
    </section>
  )
}
