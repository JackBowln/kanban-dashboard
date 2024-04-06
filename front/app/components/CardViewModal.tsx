import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Chip,
  useDisclosure,
  Tooltip,
  Divider,
} from "@nextui-org/react"
import "@uiw/react-md-editor/markdown-editor.css"
import "@uiw/react-markdown-preview/markdown.css"
import { Card, PostCard } from "@/app/types/cards"
import { EyeFilledIcon } from "../login/assets/EyeFilledIcon"
import MDEditor from "@uiw/react-md-editor"

interface CardFormModalPropsType {
  card: Card
}

export default function CardViewModal({ card }: CardFormModalPropsType) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()

  return (
    <>
      <Tooltip
        key="Update"
        color="default"
        content="visualizar card"
        className="capitalize text-black"
      >
        <Button
          isIconOnly
          color="default"
          aria-label="Deletar"
          onPress={onOpen}
        >
          <EyeFilledIcon height="22px" width="22px" />
        </Button>
      </Tooltip>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        size="4xl"
        backdrop="blur"
        className="text-black"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col text-black">
                <p>{card.titulo}</p>
                <Chip
                  color={card.lista !== "Doing" ? "warning" : "danger"}
                  variant="shadow"
                  className="text-white"
                >
                  {card.lista}
                </Chip>
              </ModalHeader>
              <Divider />
              <ModalBody>
                <MDEditor.Markdown source={card?.conteudo} />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Fechar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
