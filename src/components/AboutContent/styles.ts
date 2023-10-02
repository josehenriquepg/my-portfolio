import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  color: #fffefd;
`;

export const Title = styled.h1`
  font-size: 32px;
  justify-content: start;
  color: #f87b1b;
  filter: drop-shadow(4px 4px 2px rgba(0, 0, 0, 0.35));
`;

export const Subtitle = styled.h1`
  margin-bottom: 0;
  padding-left: 5px;
  text-align: start;
  filter: drop-shadow(4px 4px 2px rgba(0, 0, 0, 0.35));
  border-left: 3px solid #f87b1b;
`;

export const Text = styled.p`
  text-align: justify;
  padding: 0 16px;
`;
