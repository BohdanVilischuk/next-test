"use client";
import {
  Box,
  Button,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useRouter } from "next/navigation";


const enum UserStatusEnum {
  LOGIN = "Login",
  LOGOUT = "Logout",
}
export const Header: FC = () => {
  const { isAuthenticated, login, logout } = useAuthStore();
	const router = useRouter();
	const loginHandler = () => {
		router.push("/")
		isAuthenticated ? logout() : login()
	}
  return (
    <Box padding={5} margin={5}>
      <Button
        onClick={loginHandler}
        size="lg"
        colorScheme="green"
        mt="24px"
      >
        {isAuthenticated ? UserStatusEnum.LOGOUT : UserStatusEnum.LOGIN}
      </Button>
    </Box>
  );
};
