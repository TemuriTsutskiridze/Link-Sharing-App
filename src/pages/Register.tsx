import { Link } from "react-router-dom";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { v4 as uuidV4 } from "uuid";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../assets/logo.svg";
import DevLinks from "../assets/devlinks.svg";
import { TUser } from "../types";
import InputComponent from "../components/InputComponent";

import {
  Login_RegisterContainer,
  Header,
  Container,
  Introduction,
  LoginTitle,
  LoginText,
  Form,
  LoginButton,
  Footer,
  Create,
} from "./Login";

import { Label } from "../components/InputComponent";

type RegisterProps = {
  users: TUser[];
  setUsers: Dispatch<SetStateAction<TUser[]>>;
};

export default function Register(props: RegisterProps) {
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
      repeatedPassword: yup
        .string()
        .required("Password confirmation is required")
        .oneOf([yup.ref("password")], "Passwords must match"),
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

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const newUser: TUser = {
      id: uuidV4(),
      email: data.email,
      password: data.password,
    };
    props.setUsers([newUser, ...props.users]);
    navigate("/login");
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(props.users));
  }, [props.users]);

  return (
    <Login_RegisterContainer>
      <Header>
        <img src={Logo} alt="devlinks logo" />
        <img src={DevLinks} alt="devlinks title" />
      </Header>
      <Container>
        <Introduction>
          <LoginTitle>Create account</LoginTitle>
          <LoginText>Let’s get you started sharing your links!</LoginText>
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
            icon="/password icon.svg"
            name="password"
          />
          <InputComponent
            label="Confirm password"
            inputType="password"
            placeholder="At least 8 characters"
            errorMessage={errors.repeatedPassword?.message}
            register={register}
            icon="/password icon.svg"
            name="repeatedPassword"
          />
          <Label style={{ color: "var(--grey)" }}>
            Password must contain at least 8 characters
          </Label>
          <LoginButton>Create new account</LoginButton>
        </Form>
        <Footer>
          <p>Already have an account?</p>
          <Link to="/login">
            <Create>Login</Create>
          </Link>
        </Footer>
      </Container>
    </Login_RegisterContainer>
  );
}
