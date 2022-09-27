import { ReactNode } from "react";
import { ProgressBorder } from "./styles";

export function ProgressBar({
  progressValue,
  progressWidth,
  children,
  bgColor,
  progressTrack,
  trackColor
}) {
  return (
    <ProgressBorder
      progressValue={progressValue}
      progressWidth={progressWidth}
      progressTrack={progressTrack}
      bgColor={bgColor}
      trackColor={trackColor}
    >
      <div id="progressContent">{children}</div>
    </ProgressBorder>
  );
}
