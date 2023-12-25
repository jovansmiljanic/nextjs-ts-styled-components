"use client";

// Core types
import type { FC } from "react";

// Vendors
import styled, { css } from "styled-components";

const Footer = styled.div`
  ${({ theme: { defaults, colors, font, ...theme } }) => css``}
`;

interface Footer {}

const index: FC<Footer> = () => {
  return <Footer>Footer</Footer>;
};

export { index as Footer };
