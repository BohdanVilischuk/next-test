import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/app/schemas/form-schema";
import { Box, Input, useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import useCardStore from "@/app/store/useCardStore";
import { ICard } from "@/app/types/card";
import React, { FC } from "react";
import { IFormData } from "@/app/types/form";
import { FormFieldsEnum } from "@/app/constants/form";
import {FormField}  from "./form-field"; 
import { ToastStatusesEnum, ToastMessagesEnum, ToastTitlesEnum } from "@/app/constants/statuses";

const Form: FC = () => {
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
      title: ToastTitlesEnum.CARD_TITLE,
      description: ToastMessagesEnum.CARD_SUCCESS,
      status: ToastStatusesEnum.SUCCESS,
      duration: 3000,
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
