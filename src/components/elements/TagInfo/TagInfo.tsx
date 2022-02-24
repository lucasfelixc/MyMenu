import { Container, Title, Subtitle } from './TagInfo.style';
import { TagInfoProps } from './types';

export const TagInfo = ({ title, subtitle, isSmall }: TagInfoProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle isSmall={isSmall}>{subtitle}</Subtitle>
    </Container>
  );
};
