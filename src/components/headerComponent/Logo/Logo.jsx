import LogoIcon from '../../../images/symbol-defs.svg'; //імпорт свг спрайту
import { LogoWrap, LogoText } from './Logo.styled';

function Logo() {
  return (
    <LogoWrap>
      <span style={{ width: 36, height: 36 }}>
        <svg style={{ width: 36, height: 36 }}>
          <use xlinkHref={`${LogoIcon}#icon-logo`}></use>
        </svg>
      </span>
      <LogoText>Organick</LogoText>
    </LogoWrap>
  );
}

export default Logo;
