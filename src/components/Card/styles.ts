import styled from 'styled-components';

export const Container = styled.div`
  margin: 15px;
`;

export const Article = styled.article`
  flex: 1 1 300px;
  padding: 16px;
  max-width: 356px;
  border-radius: 16px;
  box-shadow: 4px 4px 2px rgba(0,0,0,0.35);
  border: 1px solid #fff;
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