import { object, string } from 'zod';
import { FormErrorsEnum } from '../constants/form';

export const formSchema = object({
  title: string().min(2,  FormErrorsEnum.TITLE_SHORT).max(20, FormErrorsEnum.TITLE_LONG),
  description: string().min(2,  FormErrorsEnum.DESCRIPTION_SHORT).max(20, FormErrorsEnum.DESCRIPTION_LONG)
})
