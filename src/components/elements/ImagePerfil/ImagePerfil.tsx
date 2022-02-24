import { Container } from './ImagePerfil.style';
import { ImagePerfilProps } from './types';

export const ImagePerfil = ({ img }: ImagePerfilProps) => {
  return <Container data-testid="container-image" img={img} />;
};
