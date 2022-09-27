import styled from "styled-components";

type TProgressBorder = {
  progressValue?: number;
  progressWidth?: number;
  progressTrack?: number;
  bgColor?: string;
  trackColor?: string;
};

export const ProgressBorder = styled.div<TProgressBorder>`
  position: relative;
  height: ${(props) => props.progressWidth}px;
  width: ${(props) => props.progressWidth}px;
  border-radius: 50%;
  display: grid;
  place-items: center;

  transition: all 0.5s ease-in-out;

  background: conic-gradient(
    ${(props) => "#2EFFAF"} ${(props) => props.progressValue * 3.6}deg,
    ${(props) => props.trackColor} ${(props) => props.progressValue * 3.6}deg
  );

  &:before {
    content: "";
    position: absolute;
    height: ${(props) => props.progressTrack}px;;
    width: ${(props) => props.progressTrack}px;;
    border-radius: 50%;
    background: ${(props) => props.bgColor};
  }

  #progressContent {
    position: relative;
    display: flex;
  }
`;
