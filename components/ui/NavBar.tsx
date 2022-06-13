import { Text, useTheme, Spacer } from "@nextui-org/react";
import Image from "next/image";

export const NavBar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        backgroundColor: theme?.colors.gray700.value,
        padding: "0px 15px",
      }}
    >
      <Image
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        }
        alt="Icono App"
        width={70}
        height={70}
      />
      <Text color="white" h2>
        P
      </Text>
      <Text color="white" h3>
        okemón
      </Text>

      <Spacer css={{ flex: 1 }} />

      <Text> Favoritos </Text>
    </div>
  );
};
