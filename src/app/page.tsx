"use client"
import useCardStore from "./store/useCardStore";
import { CardComponent } from "./components/card";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { FC } from 'react';
import { ButtonComponent } from "./components/add-button";
import { useAuthStore } from "./store/useAuthStore";

const Home:FC = () => {
  const cards = useCardStore((state) => state.cards)
  const router = useRouter();
	const { isAuthenticated } = useAuthStore();
  const addItemHandler = () => {
    router.push('/add')
  }
  const renderContent = () => {
    return (
      <Box padding={15} margin={15}>
        {cards.map((card, index) => (
          <CardComponent title={card.title} key={index} id={index} description={card.description}/>
        ))}
          <ButtonComponent onClick={addItemHandler} />
      </Box>
    )
  }
  return (
      <main>
        {isAuthenticated && renderContent()}
      </main>
  );
}
export default Home;
