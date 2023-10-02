import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #fffefd;
`;

export const Subtitle = styled.h1`
  margin-bottom: 0;
  padding-left: 5px;
  text-align: start;
  filter: drop-shadow(4px 4px 2px rgba(0, 0, 0, 0.35));
  border-left: 3px solid #f87b1b;
`;

export const TechGrid = styled.section`
  display: flex;
  padding: 16px;
  width: 100%;
  flex-wrap: wrap;
  gap: 16px;
`;

export const TechCard = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 324px;
  padding: 16px;
  gap: 16px;
  color: #f2f0e5;
  border: 1px solid #333;
  cursor: pointer;

  .icon {
    width: 40px;
    height: 40px;
  }
`;

export const TechName = styled.h3``;
