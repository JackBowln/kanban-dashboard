import ArrowLeftIcon from "../assets/ArrowLeftIcon"
import ArrowRightIcon from "../assets/ArrowRightIcon"
import DeleteIcon from "../assets/DeleteIcon"
import UpdateIcon from "../assets/UpdateIcon"
import { Card, CardType } from "../types/cards"
import CardFormModal from "@/app/components/CardFormModal"
import {
  Card as NextCard,
  CardHeader,
  CardBody,
  Chip,
  Tooltip,
  CardFooter,
  Button,
  ButtonGroup,
  CircularProgress,
} from "@nextui-org/react"
import MDEditor from "@uiw/react-md-editor"
import { useFetch } from "../hooks/useFetch"
import { useContext, useEffect, useState } from "react"
import { ContextProvider } from "../ContextProvider"
import CardViewModal from "./CardViewModal"

interface BoardCardPropsType {
  card: Card
}

export default function BoardCard({ card }: BoardCardPropsType) {
  const boardTypes: CardType[] = ["ToDo", "Doing", "Done"]
  const [direction, setDirection] = useState(0)

  const { getData } = useContext(ContextProvider)

  const [fetchData, responseData, isLoading] = useFetch<Card>(
    "/cards/" + card.id,
    {
      method: "PUT",
      body: JSON.stringify({
        titulo: card.titulo,
        conteudo: card?.conteudo,
        lista: boardTypes[boardTypes.indexOf(card.lista) + direction],
        id: card.id,
      }),
    },
    false,
    () => {
      getData()
    }
  )

  const [deleteCard, deleteResponse, deleteLoading] = useFetch<Card>(
    "/cards/" + card.id,
    {
      method: "DELETE",
    },
    false,
    () => {
      getData()
    }
  )

  useEffect(() => {
    if (direction !== 0) {
      fetchData()
    }
  }, [direction])

  if (card) {
    return (
      <NextCard
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7 mb-4"
      >
        {isLoading || deleteLoading ? (
          <CircularProgress aria-label="Loading..." className="m-auto" />
        ) : (
          <>
            <CardHeader className=" z-10 top-1 items-start flex justify-between">
              <h4 className="text-black/90 font-medium text-xl">
                {card.titulo}
              </h4>
              <Chip
                color={card.lista !== "Doing" ? "warning" : "danger"}
                variant="shadow"
                className="text-white"
              >
                {card.lista}
              </Chip>
            </CardHeader>
            <CardBody className="min-h-80">
              <MDEditor.Markdown source={card.conteudo} />
            </CardBody>
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 flex justify-between gap-4">
              <Button
                isIconOnly
                color="primary"
                radius="full"
                aria-label="previous"
                onPress={() =>
                  setDirection(boardTypes.indexOf(card.lista) === 0 ? 0 : -1)
                }
              >
                <ArrowLeftIcon />
              </Button>
              <div className="flex gap-4">
                <Tooltip
                  key="Delete"
                  color="danger"
                  content="Deletar card"
                  className="capitalize"
                >
                  <Button
                    isIconOnly
                    color="danger"
                    aria-label="Deletar"
                    onPress={deleteCard}
                  >
                    <DeleteIcon />
                  </Button>
                </Tooltip>
                <ButtonGroup>
                  <CardFormModal card={card}>
                    <Tooltip
                      key="Update"
                      color="default"
                      content="Atualizar card"
                      className="capitalize text-black"
                    >
                      <UpdateIcon />
                    </Tooltip>
                  </CardFormModal>
                  <CardViewModal card={card} />
                </ButtonGroup>
              </div>
              <Button
                isIconOnly
                color="primary"
                radius="full"
                aria-label="next"
                onPress={() =>
                  setDirection(boardTypes.indexOf(card.lista) === 2 ? 0 : +1)
                }
              >
                <ArrowRightIcon />
              </Button>
            </CardFooter>
          </>
        )}
      </NextCard>
    )
  }
}
