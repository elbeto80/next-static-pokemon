import React, { PropsWithChildren, FC } from "react";

import Head from "next/head";
import { NavBar } from "../ui";

type Props = {
  title?: string;
};

export const MainLayout: FC<PropsWithChildren<Props>> = ({
  children,
  title,
}) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Alberto Alvarez" />
        <meta name="description" content="Información de Pokemon XXX" />
        <meta name="keywords" content="XXX, pokemon, pokedex" />
      </Head>

      <NavBar />

      <main style={{ padding: "0px 35px" }}>{children}</main>
    </>
  );
};
