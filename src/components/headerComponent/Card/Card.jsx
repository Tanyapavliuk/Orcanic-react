import LogoIcon from '../../../images/symbol-defs.svg'; //імпорт свг спрайту
import { CardWrap, IconCard, ValueCard } from './Card.styled';

function Card() {
  return (
    <CardWrap>
      <IconCard>
        <svg style={{ width: 56, height: 56 }}>
          <use xlinkHref={`${LogoIcon}#icon-cart`}></use>
        </svg>
      </IconCard>
      <ValueCard>
        Cart (<span>0</span>)
      </ValueCard>
    </CardWrap>
  );
}

export default Card;
