import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 16px;
`;

export const CardContent = styled.div`
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f2f0e5;
  background: rgba(41, 40, 49, 0.5);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 50%;
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 16px;
`;

export const Description = styled.div`
  padding-left: 16px;
  width: 100%;
  max-width: 50%;
`;

export const Title = styled.h3`
  filter: drop-shadow(4px 4px 2px rgba(0, 0, 0, 0.35));
`;

export const Text = styled.p`
  max-width: 100%;
  text-align: justify;
`;
