import React from "react";
import Skeleton from "react-loading-skeleton";
import { SkeletonDiv } from "./styles";

export default function SkeletonContent() {
  return (
    <>
      <Skeleton
        baseColor="#545976"
        width="104px"
        height="11px"
        style={{ opacity: 0.3 }}
      />
      <SkeletonDiv>
        <Skeleton
          baseColor="#545976"
          width="104px"
          height="11px"
          style={{ opacity: 0.3 }}
        />
        <Skeleton
          baseColor="#0AADFF"
          width="104px"
          height="11px"
          style={{ opacity: 0.3, borderRadius: "25px" }}
        />
      </SkeletonDiv>
    </>
  );
}
