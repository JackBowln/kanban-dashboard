export type Cards = Card[]

export interface Card {
  id: string
  titulo: string
  conteudo: string
  lista: CardType
}

export type CardType = "ToDo" | "Doing" | "Done"
export type PostCard = Omit<Card, "id">
