import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Container } from './styles';

type Post = {
  id: number
  title: string
  content: string
  user_id: number
  comments: {
    content: string
    id: number
    user_id: number
  }[]
}
interface ModalProps {
  post: Post
}

export const ModalContent = ({ post }: ModalProps) => {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay />
      <Container>
        <form className="boxConteudoModal">
          <h2>{post.title}</h2>
          <DialogPrimitive.Close aria-label="Close" className="close">X</DialogPrimitive.Close>
          <input value={post.title} />
          <input value={post.content} />
          {post.comments.map(comment => (
            <input key={comment.id} value={comment.content} />
          ))}
          <div className="action">
            <button>Salvar</button>
            <DialogPrimitive.Close aria-label="Close">Cancelar</DialogPrimitive.Close>
          </div>
        </form>
      </Container>
    </DialogPrimitive.Portal>
  )
}

export const Modal = DialogPrimitive.Root
export const ModalTrigger = DialogPrimitive.Trigger
