import styled, { css } from "styled-components";

type THeaderContainer = {
  hasWindowScrolled: boolean;
};

type TProgressBorder = {
  progressValue?: number;
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

  #headerContent {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1rem;

    height: auto;
    max-height: 64px;

    #cartContainer {
      display: flex;
      align-items: center;
      justify-content: space-between;

      gap: 0.5rem;
    }

    @media screen and (min-width: 1024px) {
      max-width: 1200px;
      margin-inline: auto;
    }
  }
`;

export const ProgressBorder = styled.div<TProgressBorder>`
  position: relative;
  height: 42px;
  width: 42px;
  border-radius: 50%;
  display: grid;
  place-items: center;

  transition: all 0.5s ease-in-out;

  background: conic-gradient(
    ${(props) => "#2EFFAF"} ${(props) => props.progressValue * 3.6}deg,
    #00AAFF ${(props) => props.progressValue * 3.6}deg
  );

  &:before {
    content: "";
    position: absolute;
    height: 34px;
    width: 34px;
    background-color: #ffffff;
    border-radius: 50%;
  }

  #progressContent {
    position: relative;
  }
`;
