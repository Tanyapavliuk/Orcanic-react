import Button from 'ui/Button/Button';
import { SubTitle, Title } from 'ui/Title/Title';
import { HeroWrap } from './Hero.styled';
import { Container } from 'components/SharedLayout.styled';

function Hero() {
  return (
    <HeroWrap>
      <Container>
        <SubTitle>100% Natural Food</SubTitle>
        <Title style={{ width: 530 }}>
          Choose the best healthier way of life
        </Title>
        <Button></Button>
      </Container>
    </HeroWrap>
  );
}

export default Hero;
