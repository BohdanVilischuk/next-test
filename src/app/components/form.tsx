import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../schemas/form-schema";
import { Box, Input, useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import useCardStore from "../store/useCardStore";
import { ICard } from "../types/card";
import React from "react";
import { IFormData } from "../types/form";
import { FormFieldsEnum } from "../constants/form";
import {FormField}  from "./form-field"; 

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormData>({
    resolver: zodResolver(formSchema),
  });
  const addCard = useCardStore((state) => state.addCard);
  const toast = useToast();
  const router = useRouter();

  const onSubmit = (data: IFormData) => {
    const card: ICard = {
      id: Date.now(),
      title: data.title,
      description: data.description,
    };

    addCard(card);
    toast({
      title: "Element added",
      description: "You've successfully added a new element.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    reset();

    router.push("/");
  };

  return (
    <Box
      as="form"
      margin="0 auto"
      maxW={500}
      padding={15}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormField
        id={FormFieldsEnum.TITLE}
        label="Card title"
        placeholder="Enter card title"
        errors={errors}
        register={register}
      />
      <FormField
        id={FormFieldsEnum.DESCRIPTION}
        label="Card description"
        placeholder="Enter card description"
        errors={errors}
        register={register}
        type="text"
      />
      <Input type="submit" color="green" mt={4} />
    </Box>
  );
};

export default Form;
