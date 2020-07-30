import React from "react";

import logo from "../../assets/Nubank_Logo.png";

import { Feather as Icon } from "@expo/vector-icons";

import { Container, Top, Logo, Title } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Guilherme</Title>
      </Top>
      <Icon name="chevron-down" size={20} color="#FFF" />
    </Container>
  );
};

export default Header;
