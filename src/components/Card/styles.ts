import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  padding: 16px;
  width: 100%;
  flex-wrap: wrap;
  gap: 16px;
`;

export const CardContent = styled.div`
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 43%;
  gap: 16px;
  color: #f2f0e5;
  border: 1px solid #333;
  cursor: pointer;
`;

export const ProjectImage = styled.img`
  width: 100%;
  max-width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 16px;
`;

export const Description = styled.div``;

export const ProjectTitle = styled.h3``;

export const ProjectText = styled.p`
  max-width: 100%;
`;
