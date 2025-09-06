import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Header = () => {
  return (
    <SHeader>
      <p>人生</p>
      <SLink to="/">入力</SLink>
      <SLink to="/Results">記録</SLink>
      <SLink to="/Graph">グラフ</SLink>
      <SLink to="/Rate">勝率</SLink>
    </SHeader>
  );
};

const SHeader = styled.header`
  background-color: red;
  text-align: center;
  padding: 8px 0;
`;

const SLink = styled(Link)`
  margin: 20px;
  color: green;
`;
