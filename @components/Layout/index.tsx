"use client";

// Core types
import type { FC } from "react";

// Vendors
import styled, { css } from "styled-components";

// Local components
import { Header } from "./Header";
import { Footer } from "./Footer";

const Layout = styled.div``;

interface Layout {
  children: React.ReactNode;
}

const index: FC<Layout> = ({ children }) => {
  return (
    <Layout>
      <Header />

      {children}

      <Footer />
    </Layout>
  );
};

export { index as Layout };
