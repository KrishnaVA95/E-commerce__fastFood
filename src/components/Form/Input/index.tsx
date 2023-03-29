import { forwardRef, InputHTMLAttributes } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';

interface iInputProps extends InputHTMLAttributes<HTMLInputElement>{
  id: string;
  label: string;
  error?:  string;
  register: UseFormRegisterReturn<string>;
  type: "text" | "password" | "email"
}

const Input = forwardRef<HTMLInputElement, iInputProps>(( { label, id , error, register, type}) => 
    <fieldset>
      <StyledTextField  variant='outlined' type={type} label={label}  id={id}  {...register} />
      {error? <StyledParagraph fontColor='red'>{error}</StyledParagraph> : null}
    </fieldset>
)

export default Input;



/* 
//error?: FieldError;
*/