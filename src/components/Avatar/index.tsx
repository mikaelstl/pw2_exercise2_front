import { Container, NoImage } from "./style";

interface AvatarProps {
  path?: string;
  alt: string;
}

export default function Avatar(props: AvatarProps) {
  return (
    <Container className="chat-avatar">
      { props.path
          ? <img src={props.path} alt={props.alt} className="image" />
          : <NoImage />
      }
    </Container>
  )
}