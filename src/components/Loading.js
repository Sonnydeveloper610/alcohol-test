import styled, { keyframes } from "styled-components";
import { useTranslation } from "react-i18next";

const spin = keyframes`
  0% { transform: rotate(0deg);}
  100% { transform: rotate(360deg);}
`;

const Loader = styled.div`
  border: 8px solid #ffe0e6;
  border-top: 8px solid #ffb6b9;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin: 2rem auto;
  animation: ${spin} 1s linear infinite;
`;

const Text = styled.div`
  font-size: 1.2rem;
  color: #fa7e7e;
  margin-top: 1rem;
  font-family: 'Jua', cursive;
`;

export default function Loading() {
  const { t } = useTranslation();
  return (
    <div>
      <Loader />
      <Text>{t("common.result_loading")}</Text>
    </div>
  );
}