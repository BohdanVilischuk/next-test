import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../schemas/form-schema";
import {
  FormControl,
  Box,
  FormLabel,
  Input,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import useCardStore from "../store/useCardStore";
import { ICard } from "../types/card";
import React, { FC } from "react";
import { IFormData } from "../types/form";
import { FormFieldsEnum } from "../constants/form";

const Form: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
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
    <Box as="form" margin="0 auto" maxW={500} padding={15} onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.title || !!errors.description}>
        <FormLabel htmlFor={FormFieldsEnum.TITLE}>
          {FormFieldsEnum.TITLE}
        </FormLabel>
        <Input
          id={FormFieldsEnum.TITLE}
          placeholder="Card title"
          {...register(FormFieldsEnum.TITLE)}
        />
        {errors.title && (
          <FormErrorMessage>{errors.title.message}</FormErrorMessage>
        )}

        <FormLabel htmlFor={FormFieldsEnum.DESCRIPTION}>
          {FormFieldsEnum.DESCRIPTION}
        </FormLabel>
        <Input
          id={FormFieldsEnum.DESCRIPTION}
          placeholder="Card description"
          {...register(FormFieldsEnum.DESCRIPTION)}
        />
        {errors.description && (
          <FormErrorMessage>{errors.description.message}</FormErrorMessage>
        )}
      </FormControl>
      <Input type="submit" color="green" mt={4} />
    </Box>
  );
};

export default Form;
