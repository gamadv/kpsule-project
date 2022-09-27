import styled, { css } from "styled-components";

type THeaderContainer = {
  hasWindowScrolled: boolean;
};

export const Container = styled.header<THeaderContainer>`
  background: linear-gradient(165.98deg, #3135c6 14.08%, #00aaff 89.86%);
  transition: all 0.5s ease-in-out;

  ${(props) =>
    props.hasWindowScrolled &&
    css`
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 5;
    `}

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1rem;

    height: auto;
    max-height: 64px;

    button {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    @media screen and (min-width: 1024px) {
      max-width: 1200px;
      margin-inline: auto;
    }
  }
`;
