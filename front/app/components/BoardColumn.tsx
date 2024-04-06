import { Cards, Card } from "../types/cards";
import BoardCard from "@/app/components/BoardCard";

interface BoardColumnPropsType { boardType: string, cards?: Cards }
export default function BoardColumn(props: BoardColumnPropsType) {
  
  if(props.cards) {
    return <div className={props.boardType === "Doing" ? "bg-gray w-1/3 h-auto min-h-screen p-4" : "w-1/3 h-auto min-h-screen p-4"}>
      {props.cards.map((card: Card) => (<BoardCard card={card} key={card.id} />))}
    </div>     
ƒ
  } 
}
