"use client";

// Core
import type { ComponentPropsWithoutRef, ElementType } from "react";

// Theme types
import {
  Colors,
  MarginTypes,
  Spaces as Spacestype,
  Breakpoints as Breakpointstype,
} from "@types";

// Vendors
import { darken, lighten } from "polished";
import styled, { css, keyframes } from "styled-components";

// Animation for Loading
const Loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Default style for the button
const defaultStyle = css`
  border-width: 1px;
  border-style: solid;
  text-decoration: none;
  display: inline-flex;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.2s;
  border-radius: 5px;
  justify-content: center;

  svg {
    margin-right: 7px;
  }
`;

// Loading Button Style
const LoadingButton = styled.div`
  position: relative;
  border-radius: 50%;
  animation: ${Loading} 1s infinite linear;
  width: 20px;
  height: 20px;
  border-width: 1px;
  border-color: #333;
  border-style: solid;
  border-bottom-color: #eee;
  margin-right: 10px;
`;

// Helper function for responsive padding
const responsivePadding = (size: any, defaults: any, breakpoints: any) => css`
  padding: ${size === "small"
    ? `${defaults.gutter / 2}rem ${defaults.gutter}rem`
    : size === "medium"
    ? `${defaults.gutter / 1.5}rem ${defaults.gutter * 3}rem`
    : `${defaults.gutter / 1}rem ${defaults.gutter * 4}rem`};

  @media (max-width: ${breakpoints.md}px) {
    padding: ${defaults.gutter / 1.2}rem ${defaults.gutter * 2}rem;
  }
`;

// StyledButtonProps Interface
interface StyledButtonProps {
  isLoading?: boolean;
  isCompleted?: boolean;
  disabled?: boolean;
  variant?: Colors;
  size?: "small" | "medium" | "large";
  margin?: MarginTypes;
}

// CustomButton Styled Component
const CustomButton = styled.button<StyledButtonProps>`
  ${defaultStyle}
  ${({ theme: { defaults, breakpoints }, size }) =>
    responsivePadding(size, defaults, breakpoints)}
  
  ${({ isLoading }) =>
    isLoading &&
    css`
      ${LoadingButton}
    `}

  ${({ variant, theme: { colors, font }, isLoading, disabled, isCompleted }) =>
    variant &&
    css`
      background-color: ${colors[variant]};
      border-color: ${colors[variant]};
      font-weight: ${font.weight.semiBold};
      color: ${colors.white};

      &:hover {
        ${!isLoading &&
        !disabled &&
        !isCompleted &&
        css`
          background-color: ${darken(0.1, colors[variant])};
        `}
      }

      &:focus {
        ${!isLoading &&
        !disabled &&
        !isCompleted &&
        css`
          &:focus-visible {
            outline: none;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
              rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
          }
        `}
      }

      &:active {
        ${!isLoading &&
        !disabled &&
        !isCompleted &&
        css`
          background-color: ${lighten(0.07, colors[variant])};
        `}
      }

      &:disabled {
        cursor: not-allowed;
        background-color: rgb(229, 229, 229);
      }

      ${isCompleted &&
      css`
        background-color: ${colors.success};
      `}
    `}

  ${({ margin, theme: { breakpoints, spaces } }) =>
    margin &&
    Object.entries(margin).map(
      ([key, val]) => css`
        @media (${key === "sm" ? "max" : "min"}-width: ${breakpoints[
            key as Breakpointstype
          ]}px) {
          ${Object.entries(val).reduce((acc, [mKey, mVal]) => {
            return acc + `; margin-${mKey}: ${spaces[mVal as Spacestype]}px`;
          }, "")}
        }
      `
    )}
`;

// ButtonProps Type
type ButtonProps<T extends ElementType> = {
  as?: T | keyof JSX.IntrinsicElements;
  isLoading?: boolean;
  isCompleted?: boolean;
  disabled?: boolean;
  variant?: Colors;
  size?: "small" | "medium" | "large";
  margin?: MarginTypes;
  children: React.ReactNode;
} & ComponentPropsWithoutRef<T>;

// Button Component
export const Button = <T extends ElementType = "button">({
  as,
  isLoading,
  isCompleted,
  variant,
  size,
  margin,
  children,
  ...rest
}: ButtonProps<T>): JSX.Element => (
  <CustomButton
    as={as}
    isLoading={isLoading}
    isCompleted={isCompleted}
    disabled={rest.disabled}
    variant={variant}
    size={size}
    margin={margin}
    {...rest}
  >
    {isLoading && <LoadingButton />}
    {children}
  </CustomButton>
);
