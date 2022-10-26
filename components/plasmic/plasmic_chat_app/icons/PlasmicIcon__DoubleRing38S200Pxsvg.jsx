// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function DoubleRing38S200PxsvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      style={{
        background: '#f1f2f3"',
        ...(style || {}),
      }}
      viewBox={"0 0 100 100"}
      preserveAspectRatio={"xMidYMid"}
      display={"block"}
      shapeRendering={"auto"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"50"}
        cy={"50"}
        r={"32"}
        strokeWidth={"8"}
        stroke={"#912623"}
        strokeDasharray={"50.26548245743669 50.26548245743669"}
        fill={"none"}
        strokeLinecap={"round"}
      >
        <animateTransform
          attributeName={"transform"}
          type={"rotate"}
          dur={"3.846153846153846s"}
          repeatCount={"indefinite"}
          keyTimes={"0;1"}
          values={"0 50 50;360 50 50"}
        ></animateTransform>
      </circle>

      <circle
        cx={"50"}
        cy={"50"}
        r={"23"}
        strokeWidth={"8"}
        stroke={"#f0f5f6"}
        strokeDasharray={"36.12831551628262 36.12831551628262"}
        strokeDashoffset={"36.128"}
        fill={"none"}
        strokeLinecap={"round"}
      >
        <animateTransform
          attributeName={"transform"}
          type={"rotate"}
          dur={"3.846153846153846s"}
          repeatCount={"indefinite"}
          keyTimes={"0;1"}
          values={"0 50 50;-360 50 50"}
        ></animateTransform>
      </circle>
    </svg>
  );
}

export default DoubleRing38S200PxsvgIcon;
/* prettier-ignore-end */
