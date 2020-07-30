import React from "react";

import qrcode from "../../assets/qr-code.png";

import { Feather as Icon } from "@expo/vector-icons";

import {
  Container,
  Code,
  QRCode,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText,
} from "./styles";

const Menu: React.FC = ({ translateY }) => {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 1],
        }),
      }}
    >
      <Code>
        <QRCode source={qrcode} />
      </Code>

      <Nav>
        <NavItem>
          <Icon name="help-circle" size={20} color="#FFF" />
          <NavText>Ajuda</NavText>
        </NavItem>
        <NavItem>
          <Icon name="user" size={20} color="#FFF" />
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <Icon name="credit-card" size={20} color="#FFF" />
          <NavText>Cartão</NavText>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" size={20} color="#FFF" />
          <NavText>Configurações</NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>Sair do App</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
};

export default Menu;
