import { ComponentProps } from "react";
import styled, { css } from "styled-components";

type TInputContainer = ComponentProps<"input"> & {
  label: string;
  inputType: string;
  placeholder: string;
  errorMessage: string | undefined;
  icon: string;
  name: "email" | "password" | "repeatedPassword";
  register: any;
  // register: UseFormRegister<{
  //   email: string;
  //   password: string;
  //   repeatedPassword: string;
  // }>;
};

export default function InputComponent({
  label,
  inputType,
  placeholder,
  errorMessage,
  icon,
  name,
  register,
}: TInputContainer) {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <Input
        type={inputType}
        placeholder={placeholder}
        icon={icon}
        {...register(name)}
      ></Input>
      {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
    </InputContainer>
  );
}

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: start;
`;

export const Label = styled.label`
  font-size: 1.2rem;
  line-height: 150%;
  font-weight: 400;
  color: var(--gray-dark);
`;

type TInput = {
  icon: string;
};

export const Input = styled.input<TInput>`
  ${(props) => css`
    width: 100%;
    padding: 1.2rem 1.6rem 1.2rem 4.4rem;
    border-radius: 8px;
    border: 1px solid var(--borders);
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 150%;
    color: var(--gray-dark);
    font-family: inherit;
    outline: none;
    cursor: pointer;
    transition: 0.3s;
    background-image: url("${props.icon}");
    background-repeat: no-repeat;
    background-position: top 50% left 1.6rem;
    position: relative;

    &::placeholder {
      opacity: 0.5;
    }

    &::after {
      content: "Can’t be empty";
      color: var(--red);
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 150%;
    }

    &:hover {
      border: 1px solid var(--purple, #633cff);
      box-shadow: 0px 0px 32px 0px rgba(99, 60, 255, 0.25);
    }
  `}
`;

export const ErrorMessage = styled.p`
  font-size: 1.5rem;
  line-height: 150%;
  font-weight: 400;
  color: var(--red);
`;
