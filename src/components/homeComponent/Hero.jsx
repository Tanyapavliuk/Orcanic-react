import Button from 'ui/Button/Button';
import { SubTitle, Title } from 'ui/Title/Title';
import { HeroWrap } from './Hero.styled';
import { Container } from 'components/SharedLayout.styled';

function Hero() {
  return (
    <HeroWrap>
      <Container>
        <SubTitle text="100% Natural Food" />
        <Title
          text="Choose the best healthier way of life"
          style={{ width: 530 }}
        />
        <Button></Button>
      </Container>
    </HeroWrap>
  );
}

export default Hero;
