import { NextPage, GetStaticProps } from "next";

import { MainLayout } from "../components/layouts";

const HomePage: NextPage = (props) => {
  console.log({ props });

  return <MainLayout title="Listado de Pokemons">Hola mundo</MainLayout>;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {},
  };
};

export default HomePage;
