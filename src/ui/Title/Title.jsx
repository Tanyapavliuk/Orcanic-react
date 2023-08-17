import { SubTitleSt, TitleSt } from './Title.styled';
export const Title = ({ children, ...props }) => {
  return <TitleSt {...props}>{children}</TitleSt>;
};

export const SubTitle = ({ children, ...props }) => {
  return <SubTitleSt {...props}>{children}</SubTitleSt>;
};
