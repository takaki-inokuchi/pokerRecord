import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Header = () => {
  return (
    <SHeader>
      <SLink to="/">入力</SLink>
      <SLink to="/Results">記録</SLink>
      <SLink to="/Graph">グラフ</SLink>
      <SLink to="/Rate">勝率</SLink>
    </SHeader>
  );
};

const SHeader = styled.header`
  display: flex;
  width: 100%;
   justify-content: center;
  background-color: #0a2540;
  align-items: center;
  padding: 8px 0px;
  color: white;
   gap: 50px
`;

const SLink = styled(Link)`
  text-decoration: none;
  background-color: transparent;
  transition: background 0.3s;
  margin: 20px;
  color: white;
  
`;
