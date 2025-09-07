import styled from "styled-components";
import { RegisterButton } from "../Button/RegiterButton";
import { HalfButton } from "../Button/HalfButton";

const ButtonContainer = styled.div`
  display: flex; /* 横並び */
  gap: 16px; /* ボタン間のスペース */
  justify-content: center; /* 中央寄せ */
  margin-top: 16px;
`;

export const ButtonDesign = () => {
  return (
    <ButtonContainer>
      <RegisterButton />
      <HalfButton />
    </ButtonContainer>
  );
};
