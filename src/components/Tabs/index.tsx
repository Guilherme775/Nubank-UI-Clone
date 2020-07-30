import React from "react";

import { Feather as Icon } from "@expo/vector-icons";

import { Container, TabsContainer, TabItem, TabText } from "./styles";

const Tabs: React.FC = ({ translateY }) => {
  return (
    <Container
      style={{
        transform: [
          {
            translateY: translateY.interpolate({
              inputRange: [0, 500],
              outputRange: [0, 30],
              extrapolate: "clamp",
            }),
          },
        ],
        opacity: translateY.interpolate({
          inputRange: [0, 500],
          outputRange: [1, 0.3],
          extrapolate: "clamp",
        }),
      }}
    >
      <TabsContainer>
        <TabItem>
          <Icon name="user-plus" size={24} color="#FFF" />
          <TabText>Indicar amigos</TabText>
        </TabItem>
        <TabItem>
          <Icon name="message-circle" size={24} color="#FFF" />
          <TabText>Cobrar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-down" size={24} color="#FFF" />
          <TabText>Depositar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-up" size={24} color="#FFF" />
          <TabText>Transferir</TabText>
        </TabItem>
        <TabItem>
          <Icon name="lock" size={24} color="#FFF" />
          <TabText>Bloquear cartão</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
};

export default Tabs;
