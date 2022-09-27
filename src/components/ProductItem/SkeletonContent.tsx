import React from "react";
import Skeleton from "react-loading-skeleton";
import { SkeletonDiv, SkeletonDiv2, SkeletonDiv3, SkeletonDiv4 } from "./styles";

export default function SkeletonContent() {
  return (
    <>
      <SkeletonDiv>
        <Skeleton
          baseColor="#F5F7FE"
          width="24px"
          height="24px"
          style={{ borderRadius: "3px" }}
        />
        <Skeleton
          baseColor="#F5F7FE"
          width="24px"
          height="24px"
          style={{ borderRadius: "3px" }}
        />
        <Skeleton
          baseColor="#F5F7FE"
          width="45px"
          height="24px"
          style={{ opacity: 0.3, borderRadius: "25px" }}
        />
      </SkeletonDiv>
      <SkeletonDiv2>
        <div>
          <Skeleton
            baseColor="#545976"
            width="220px"
            height="11px"
            style={{ opacity: 0.3, borderRadius: "25px" }}
          />
          <Skeleton
            baseColor="#545976"
            width="220px"
            height="11px"
            style={{ opacity: 0.3, borderRadius: "25px" }}
          />
        </div>
        <Skeleton
          baseColor="#F5F7FE"
          width="85px"
          height="85px"
          style={{ opacity: 0.3, borderRadius: "50%" }}
        />
      </SkeletonDiv2>
      <SkeletonDiv3>
        <div>
          <Skeleton
            baseColor="#545976"
            width="143px"
            height="11px"
            style={{ opacity: 0.3, borderRadius: "25px" }}
          />
          <Skeleton
            baseColor="#545976"
            width="143px"
            height="11px"
            style={{ opacity: 0.3, borderRadius: "25px" }}
          />
        </div>
        <div>
          <Skeleton
            baseColor="#F5F7FE"
            width="44px"
            height="44px"
            style={{
              opacity: 0.3,
              borderRadius: "50%",
              border: "1.5px solid #BDBDBD",
            }}
          />
          <Skeleton
            baseColor="#F5F7FE"
            width="44px"
            height="44px"
            style={{
              opacity: 0.3,
              borderRadius: "50%",
              border: "1.5px solid #BDBDBD",
            }}
          />
        </div>
      </SkeletonDiv3>
      <SkeletonDiv4>
        <Skeleton
          baseColor="#B5F7EB"
          width="172px"
          height="28px"
          style={{
            marginLeft: "auto",
            borderRadius: "30px",
          }}
        />
      </SkeletonDiv4>
    </>
  );
}
