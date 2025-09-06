import styled from "styled-components";

export const Footer = () => {
  return <SFooter>&copy;2025 gambler Inc</SFooter>;
};

const SFooter = styled.div`
  background-color: #0a2540;
  width: 100%;
  color: white;
  text-align: center;
  align-items: center;
  padding: 5px 0;
  bottom: 0;
`;
