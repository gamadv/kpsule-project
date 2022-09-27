import styled from "styled-components";

export const Container = styled.header`
  background: linear-gradient(165.98deg, #3135c6 14.08%, #00aaff 89.86%);
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1rem;

    height: auto;
    max-height: 64px;
    
    @media screen and (min-width: 1024px) {
      max-width: 1200px;
      margin-inline: auto;
    }
  }
`;
