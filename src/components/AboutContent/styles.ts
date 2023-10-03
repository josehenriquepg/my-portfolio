import styled from "styled-components";

export const Container = styled.section`
  padding: 16px;
  display: flex;
  flex-direction: column;
  color: #fffefd;
`;

export const Subtitle = styled.h2`
  margin-bottom: 16px;
  padding-left: 5px;
  text-align: start;
  filter: drop-shadow(4px 4px 2px rgba(0, 0, 0, 0.35));
  border-left: 3px solid #f87b1b;
`;

export const Content = styled.div`
  padding: 16px;
  background: rgba(41, 40, 49, 0.5);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
`;

export const Text = styled.p`
  margin: 10px 0;
  text-align: justify;
  text-indent: 10px;
`;
