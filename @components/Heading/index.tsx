"use client";

// Vendors
import styled, { css } from "styled-components";

// Global types
import {
  Colors,
  FontWeights,
  TextAlign as TextAligntype,
  Breakpoints,
  PaddingTypes,
  Spaces,
} from "@types";

interface TextAlign {
  xs?: TextAligntype;
  sm?: TextAligntype;
  md?: TextAligntype;
  lg?: TextAligntype;
  xl?: TextAligntype;
}

interface HeadingProps {
  weight?: FontWeights;
  padding?: PaddingTypes;
  textAlign?: TextAlign;
  color?: Colors;
}

const generatePaddingCSS = (
  padding: PaddingTypes,
  spaces: Record<Spaces, number>,
  breakpoints: Record<Breakpoints, number>
) =>
  Object.entries(padding)
    .map(
      ([bp, spaceTypes]) =>
        css`
          @media (${bp === "sm" ? "max" : "min"}-width: ${breakpoints[
              bp as Breakpoints
            ]}) {
            ${Object.entries(spaceTypes)
              .map(([side, space]) => `padding-${side}: ${spaces[space]}px;`)
              .join("\n")}
          }
        `
    )
    .join("");

const generateTextAlignCSS = (
  textAlign: TextAlign,
  breakpoints: Record<Breakpoints, number>
) =>
  Object.entries(textAlign)
    .map(
      ([bp, align]) =>
        css`
          @media (${bp === "sm" ? "max" : "min"}-width: ${breakpoints[
              bp as Breakpoints
            ]}) {
            text-align: ${align};
          }
        `
    )
    .join("");

const Heading = styled.h1<HeadingProps>`
  ${({
    weight,
    color,
    textAlign,
    padding,
    theme: { font, colors, spaces, breakpoints },
  }) => css`
    ${padding && generatePaddingCSS(padding, spaces, breakpoints)}
    ${textAlign && generateTextAlignCSS(textAlign, breakpoints)}
    ${weight && `font-weight: ${font.weight[weight]};`}
    ${color && `color: ${colors[color]};`}
  `}
`;

export { Heading };
