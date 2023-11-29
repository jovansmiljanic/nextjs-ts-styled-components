"use client";

// Core types
import type { FC } from "react";

// Vendors
import styled, { css } from "styled-components";

const Header = styled.div`
  ${({ theme: { defaults, colors, font, ...theme } }) => css``}
`;

interface Header {}

const index: FC<Header> = () => {
  return <Header></Header>;
};

export { index as Header };
