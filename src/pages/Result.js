import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Wrapper, Card, CuteButton } from "../components/Styled";
import Loading from "../components/Loading";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Emoji = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #fa7e7e;
  margin-bottom: 0.5rem;
`;

const Summary = styled.p`
  font-size: 1.1rem;
  color: #70c1b3;
  margin-bottom: 1.5rem;
`;

const Desc = styled.pre`
  font-size: 1rem;
  background: #fff0f3;
  padding: 1.5rem;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
  white-space: pre-wrap;
  color: #333;
  font-family: 'Gowun Dodum', sans-serif;
`;

const Tip = styled.div`
  font-size: 1rem;
  background: #ffe0e6;
  padding: 1rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
  color: #fa7e7e;
`;

const ShareBtn = styled(CuteButton)`
  background: linear-gradient(90deg, #ffb6b9 0%, #b5ead7 100%);
  color: #fff;
  margin: 0.5rem 0;
  font-size: 1rem;
  padding: 0.8rem 2rem;
`;

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const type = location.state?.type;
  const result = t(`result.${type}`, { returnObjects: true });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  const emojiMap = {
    soju: "🍶",
    somaek: "🍺",
    makgeolli: "🍶",
    wine: "🍷",
    whisky: "🥃",
    highball: "🥂",
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    alert(t("common.copied"));
  };

  if (!result) return <Wrapper>결과를 불러올 수 없습니다.</Wrapper>;

  return (
    <Wrapper>
      <Card>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Emoji>{emojiMap[type]}</Emoji>
            <Title>{result.title}</Title>
            <Summary>{result.summary}</Summary>
            <Desc>{result.desc}</Desc>
            <Tip>💡 {result.tip}</Tip>
            <ShareBtn onClick={handleCopy}>{t("common.share_result")}</ShareBtn>
            <ShareBtn onClick={handleCopy}>{t("common.share_app")}</ShareBtn>
            <CuteButton onClick={() => navigate("/")}>{t("common.retry")}</CuteButton>
          </>
        )}
      </Card>
    </Wrapper>
  );
}