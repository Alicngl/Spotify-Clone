import Header from "./header";
import type { ReactNode } from "react";
import Main from "./col/main";
import { Grid, GridItem, Stack } from "@chakra-ui/react";
import { Navigation } from "./col/navigation";
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Stack bg={"black"}>
      <Grid>
        <GridItem colSpan={1}>
          <Header />
          <Navigation />
        </GridItem>
        <GridItem colStart={2} colEnd={6}>
          <Main>{children}</Main>
        </GridItem>
      </Grid>
    </Stack>
  );
}
