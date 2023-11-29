

// Global styles
import GlobalStyle from "globalStyles";

// Global context
import { Layout } from "@components";
import Providers from "providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body >
        <Providers>
          <GlobalStyle />

          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
