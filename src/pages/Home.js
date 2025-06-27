import { useNavigate } from "react-router-dom";
import { Wrapper, Card, CuteButton } from "../components/Styled";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Emoji = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 1rem;
  color: #fa7e7e;
  font-family: 'Jua', cursive;
`;

const Desc = styled.p`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 2rem;
  font-family: 'Gowun Dodum', sans-serif;
  white-space: pre-line;
`;

export default function Home() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Card>
        <Emoji>🍶🍷🍺🥃🥂</Emoji>
        <Title>{t("home.title")}</Title>
        <Desc>{t("home.desc")}</Desc>
        <CuteButton onClick={() => navigate("/question")}>{t("home.start")}</CuteButton>
      </Card>
    </Wrapper>
  );
}