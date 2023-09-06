import Header from "./header";
import type { ReactNode } from "react";
import Main from "./col/main";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
}
