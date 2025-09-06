import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Header = () => {
  return (
    <SHeader>
      <SNav>
      <SLogo>人生</SLogo>
      <SLink to="/">入力</SLink>
      <SLink to="/Results">記録</SLink>
      <SLink to="/Graph">グラフ</SLink>
      <SLink to="/Rate">勝率</SLink>
      </SNav>
    </SHeader>
  );
};

const SHeader = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #0a2540;
  align-items: center;
  padding: 8px 0px;
  color: white;
`;

const SLink = styled(Link)`
  margin: 20px;
  color: green;
`;

const SLogo = styled.p`
font-size:20px;
font-weight:bold
margin:0;
`;
const SNav = styled.nav`
  display: flex;
  gap: 16px;
`;