import styled from "styled-components";

export const Container = styled.section`
  padding: 1.688rem 1rem;

  > p {
    font-weight: 900;
  }

  span strong {
    margin-left: 0.25rem;
    color: #00aaff;
  }

  @media screen and (min-width: 1024px) {
    max-width: 1200px;
    margin-inline: auto;
  }
`;
export const Content = styled.div`
  margin-top: 1rem;
`;

export const SkeletonDiv = styled.div`
  display: flex;
  gap: 1rem;

  margin-top: 1rem;
`;
