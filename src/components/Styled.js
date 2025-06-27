import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  background: transparent;
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 2rem;
  box-shadow: 0 4px 24px rgba(255,182,185,0.15);
  padding: 2.5rem 2rem;
  margin: 1rem 0;
  max-width: 400px;
  width: 90vw;
  text-align: center;
`;

export const CuteButton = styled.button`
  background: linear-gradient(90deg, #ffb6b9 0%, #b5ead7 100%);
  color: #fff;
  border: none;
  border-radius: 2rem;
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  font-family: 'Jua', 'Gowun Dodum', 'sans-serif';
  margin: 1rem 0;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(255,182,185,0.15);
  transition: 0.2s;
  &:hover {
    background: linear-gradient(90deg, #fa7e7e 0%, #70c1b3 100%);
    transform: scale(1.05);
  }
`;