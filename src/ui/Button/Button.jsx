import LogoIcon from '../../images/symbol-defs.svg'; //імпорт свг спрайту
import { Btn } from './Button.styled';

function Button() {
  return (
    <Btn type="button">
      <p>Explore Now</p>
      <span>
        <svg style={{ width: 19, height: 19 }}>
          <use xlinkHref={`${LogoIcon}#icon-aerrow`}></use>
        </svg>
      </span>
    </Btn>
  );
}

export default Button;
