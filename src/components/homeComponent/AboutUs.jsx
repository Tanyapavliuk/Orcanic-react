import { SubTitle, Title } from 'ui/Title/Title';
import LogoIcon from '../../images/symbol-defs.svg'; //імпорт свг спрайту
import Button from 'ui/Button/Button';
import MailImg from '../../images/mailboxquality.png';
import FoodImg from '../../images/veganfood.png';
import Text from 'ui/Text/Text';
import { AboutWrap } from './AboutUs.styled';
import { Container } from 'components/SharedLayout.styled';

const AboutUs = () => {
  return (
    <AboutWrap>
      <Container style={{ gridColumnStart: 2 }}>
        <SubTitle>About Us</SubTitle>
        <Title>We Believe in Working Accredited Farmers</Title>
        <Text class="text">
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </Text>
        <div class="about__info-wrapper">
          <span class="about__icon">
            <img src={FoodImg} alt="icon food" />
          </span>
          <div class="about__info">
            <h3 class="product">Organic Foods Only</h3>
            <p class="text">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
            </p>
          </div>
          <span class="about__icon">
            <img src={MailImg} alt="icon mail box" />
          </span>
          <div class="about__info">
            <h3 class="product">Quality Standards</h3>
            <p class="text">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
            </p>
          </div>
        </div>
        <Button type="button" class="btn categories__btn about__btn">
          Shop Now
          <span class="categories__stars">
            <svg style={{ width: 19, height: 19 }}>
              <use href={`${LogoIcon}#icon-aerrow`}></use>
            </svg>
          </span>
        </Button>
      </Container>
    </AboutWrap>
  );
};

export default AboutUs;
