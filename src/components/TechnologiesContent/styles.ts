import styled from "styled-components";

export const Container = styled.section`
  padding: 16px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #fffefd;
`;

export const Subtitle = styled.h1`
  margin-bottom: 16px;
  padding-left: 5px;
  text-align: start;
  filter: drop-shadow(4px 4px 2px rgba(0, 0, 0, 0.35));
  border-left: 3px solid #f87b1b;
`;

export const TechGrid = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 16px;
`;

export const TechCard = styled.div`
  padding: 16px;
  display: flex;
  flex: 1 1 300px;
  justify-content: start;
  align-items: center;
  color: #f2f0e5;
  background: rgba(41, 40, 49, 0.5);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  cursor: pointer;

  .icon {
    width: 40px;
    height: 40px;
    filter: drop-shadow(4px 4px 2px rgba(0, 0, 0, 0.35));
  }

  .js {
    color: #efd81d;
  }

  .ts {
    color: #2f74c0;
  }

  .react {
    color: #5ed3f3;
  }

  .node {
    color: #3c873a;
  }

  .graphql {
    color: #e535ab;
  }

  .mysql {
    color: #1e4c68;
  }

  .git {
    color: #e94e31;
  }
`;

export const TechName = styled.h3`
  filter: drop-shadow(4px 4px 2px rgba(0, 0, 0, 0.35));
  padding-left: 8px;
`;
