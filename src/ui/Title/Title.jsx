import { SubTitleSt, TitleSt } from './Title.styled';

export function Title({ text, ...props }) {
  return <TitleSt {...props}>{text}</TitleSt>;
}

export function SubTitle({ text }) {
  return <SubTitleSt>{text}</SubTitleSt>;
}
