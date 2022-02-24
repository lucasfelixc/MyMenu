import { Container, Title, Subtitle } from './TagInfo.style';
import { TagInfoProps } from './types';

export const TagInfo = ({ title, lines }: TagInfoProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      {lines.map((line, index) => (
        <Subtitle isSmall={line.isSmall} key={index}>
          {line.line}
        </Subtitle>
      ))}
    </Container>
  );
};
