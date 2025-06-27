import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper, Card, CuteButton } from "../components/Styled";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

// 답변 인덱스별로 결과 타입 매핑
const answerTypeMap = [
  ["highball", "wine", "soju", "whisky"],
  ["somaek", "wine", "soju", "whisky"],
  ["somaek", "wine", "soju", "whisky"],
  ["highball", "makgeolli", "whisky", "wine"],
  ["highball", "wine", "soju", "makgeolli"],
  ["whisky", "somaek", "highball", "wine"],
  ["somaek", "wine", "soju", "whisky"],
  ["highball", "wine", "somaek", "whisky"],
  ["highball", "wine", "soju", "makgeolli"],
  ["highball", "soju", "makgeolli", "wine"]
];

const QNum = styled.div`
  font-size: 1.1rem;
  color: #fa7e7e;
  margin-bottom: 0.5rem;
`;

const QTitle = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 2rem;
  color: #333;
`;

const ResultButton = styled(CuteButton)`
  margin-top: 2rem;
  background: linear-gradient(90deg, #ff7e5f 0%, #ff3f5e 100%) !important;
  color: #fff !important;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${props => (props.disabled ? 0.6 : 1)};
  &:hover {
    background: linear-gradient(90deg, #ff3f5e 0%, #ff7e5f 100%) !important;
  }
`;

export default function Question() {
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState({});
  const [selected, setSelected] = useState(null);
  const [lastType, setLastType] = useState(null);
  const { t } = useTranslation();
  const questions = t("question", { returnObjects: true });
  const navigate = useNavigate();

  const handleAnswer = (i) => {
    setSelected(i);
    setLastType(answerTypeMap[idx][i]);
    if (idx < questions.length - 1) {
      setTimeout(() => {
        setScore((prev) => ({
          ...prev,
          [answerTypeMap[idx][i]]: (prev[answerTypeMap[idx][i]] || 0) + 1
        }));
        setIdx(idx + 1);
        setSelected(null);
        setLastType(null);
      }, 250);
    }
  };

  const handleShowResult = () => {
    const finalScore = {
      ...score,
      [lastType]: (score[lastType] || 0) + 1
    };
    const maxType = Object.entries(finalScore)
      .sort((a, b) => b[1] - a[1])[0][0];
    navigate("/result", { state: { type: maxType } });
  };

  return (
    <Wrapper>
      <Card>
        <QNum>Q{idx + 1} / {questions.length}</QNum>
        <QTitle>{questions[idx].q}</QTitle>
        {questions[idx].a.map((text, i) => (
          <CuteButton
            key={i}
            onClick={() => handleAnswer(i)}
            style={{
              opacity: selected === null || selected === i ? 1 : 0.5,
              background: selected === i
                ? "linear-gradient(90deg, #fa7e7e 0%, #70c1b3 100%)"
                : undefined,
              color: selected === i ? "#fff" : undefined,
              pointerEvents: idx === questions.length - 1 && selected !== null ? "none" : "auto"
            }}
          >
            {text}
          </CuteButton>
        ))}
        {idx === questions.length - 1 && (
          <ResultButton
            onClick={handleShowResult}
            disabled={selected === null}
          >
            {t("common.show_result")}
          </ResultButton>
        )}
      </Card>
    </Wrapper>
  );
}