import styled from "styled-components";
import { Link } from "react-router-dom";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../assets/logo.svg";
import DevLinks from "../assets/devlinks.svg";
import { TUser } from "../types";
import InputComponent from "../components/InputComponent";
import { ErrorMessage } from "../components/InputComponent";

type LoginProps = {
  users: TUser[];
  setUsers: Dispatch<SetStateAction<TUser[]>>;
};

export default function Login(props: LoginProps) {
  const [correctInfo, setCorrectInfo] = useState(false);

  const navigate = useNavigate();
  const schema = yup
    .object({
      email: yup
        .string()
        .required("Email is required")
        .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Enter valid email"),
      password: yup
        .string()
        .required("Password is required")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
    })
    .required();
  type FormData = yup.InferType<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  console.log(errors);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const currentUser = props.users.find((user) => user.email === data.email);
    if (currentUser?.password === data.password) {
      navigate("/");
      setCorrectInfo(true);
    } else {
      setCorrectInfo(false);
      console.log(correctInfo);
    }
  };
  return (
    <Login_RegisterContainer>
      <Header>
        <img src={Logo} alt="devlinks logo" />
        <img src={DevLinks} alt="devlinks title" />
      </Header>
      <Container>
        <Introduction>
          <LoginTitle>Login</LoginTitle>
          <LoginText>Add your details below to get back into the app</LoginText>
        </Introduction>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputComponent
            label="Email address"
            inputType="email"
            placeholder="e.g. alex@email.com"
            errorMessage={errors.email?.message}
            register={register}
            icon="/email icon.svg"
            name="email"
          />
          <InputComponent
            label="Password"
            inputType="password"
            placeholder="Enter your password"
            errorMessage={errors.password?.message}
            register={register}
            icon="./password icon.svg"
            name="password"
          />
          {!correctInfo ? (
            <ErrorMessage>
              Email or password is incorrect, try again.
            </ErrorMessage>
          ) : null}
          <LoginButton>Login</LoginButton>
        </Form>
        <Footer>
          <p>Don't have an account?</p>
          <Link to="/register">
            <Create>Create account</Create>
          </Link>
        </Footer>
      </Container>
    </Login_RegisterContainer>
  );
}

export const Login_RegisterContainer = styled.div`
  width: 31.1rem;
  display: flex;
  flex-direction: column;
  padding-top: 3.2rem;
  margin: 0 auto;

  @media only screen and (min-width: 48rem) {
    width: 47.6rem;
    align-self: center;
    padding: 3rem 0;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media only screen and (min-width: 48rem) {
    align-self: center;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 6.4rem;

  @media only screen and (min-width: 48rem) {
    background-color: var(--white);
    border-radius: 12px;
    padding: 4rem;
  }
`;

export const Introduction = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const LoginTitle = styled.h2`
  font-size: 2.4rem;
  line-height: 150%;
  font-weight: 700;
  color: var(--gray-dark);

  @media only screen and (min-width: 48rem) {
    font-size: 3.2rem;
  }
`;

export const LoginText = styled.p`
  font-size: 1.6rem;
  line-height: 150%;
  font-weight: 400;
  color: var(--gray);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-top: 4rem;
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 1.1rem 0;
  color: var(--white);
  font-size: 1.6rem;
  line-height: 150%;
  font-weight: 600;
  border-radius: 8px;
  background: var(--purple, #633cff);
  border: none;
  font-family: inherit;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: var(--purple-hover);
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
  line-height: 150%;
  font-weight: 400;
  color: var(--gray);
  margin-top: 24px;
  align-items: center;

  @media only screen and (min-width: 48rem) {
    flex-direction: row;
    justify-content: center;
    gap: 0.5rem;
  }
`;

export const Create = styled.p`
  color: var(--purple);
  cursor: pointer;
`;
