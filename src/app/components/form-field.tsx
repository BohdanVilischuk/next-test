import React from 'react';
import { FieldValues, Path, FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react';

interface IFormFieldProps<TFieldValues extends FieldValues> {
  id: Path<TFieldValues>;
  label: string;
  placeholder?: string;
  errors: FieldErrors<TFieldValues>;
  register: UseFormRegister<TFieldValues>;
  type?: React.HTMLInputTypeAttribute;
}

export const FormField = <TFieldValues extends FieldValues>({
  id,
  label,
  placeholder = '',
  errors,
  register,
  type = 'text',
}: IFormFieldProps<TFieldValues>) => (
  <FormControl isInvalid={!!errors[id]}>
    <FormLabel htmlFor={id}>{label}</FormLabel>
    <Input
      id={id}
      placeholder={placeholder}
      {...register(id)}
      type={type}
    />
    {errors[id] && <FormErrorMessage>{errors[id]?.message as string}</FormErrorMessage>}
  </FormControl>
);