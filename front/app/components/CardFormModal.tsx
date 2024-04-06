import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react"
import "@uiw/react-md-editor/markdown-editor.css"
import "@uiw/react-markdown-preview/markdown.css"
import dynamic from "next/dynamic"
import { ReactNode, useContext, useEffect, useState } from "react"
import { Card, PostCard } from "@/app/types/cards"
import { useFetch } from "@/app/hooks/useFetch"
import { ContextProvider } from "../ContextProvider"

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false })

interface CardFormModalPropsType {
  card?: Card
  children?: ReactNode
}

export default function CardFormModal(props: CardFormModalPropsType) {
  const { onOpen, onOpenChange, isOpen } = useDisclosure()
  const [$isOpen, setOpen] = useState(false)
  const { getData } = useContext(ContextProvider)
  const [conteudo, setConteudo] = useState(props.card?.conteudo)
  const [titulo, setTitulo] = useState(props.card?.titulo)
  const [id] = useState(props.card?.id || "")

  const [fetchData, cards, isLoading] = useFetch<PostCard | Card>(
    id ? "/cards/" + id : "/cards",
    {
      method: id ? "PUT" : "POST",
      body: JSON.stringify({
        titulo,
        conteudo,
        lista: props.card?.lista ? props.card?.lista : "ToDo",
        id,
      }),
    },
    false,
    () => {
      toggleModal(false)
      getData()
    }
  )

  const toggleModal = (isOpen: boolean) => {
    setOpen(isOpen)
    onOpenChange()
  }

  return (
    <>
      <Button onPress={onOpen} color={!props.children ? "primary" : undefined}>
        {props.children || "Criar Card"}
      </Button>
      <Modal
        isOpen={isOpen || $isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        size="4xl"
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-black">
                {id ? "Edite seu card" : "Crie o seu card!"}
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Título"
                  placeholder="Insira o título"
                  variant="bordered"
                  className="text-black"
                  value={titulo}
                  onValueChange={setTitulo}
                />
                <MDEditor value={conteudo} onChange={setConteudo} />
              </ModalBody>
              <ModalFooter className="gap-0">
                <Button color="danger" variant="flat" onPress={onClose}>
                  Fechar
                </Button>
                <Button
                  color="primary"
                  onPress={fetchData}
                  isLoading={isLoading}
                >
                  Enviar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
