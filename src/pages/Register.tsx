import { Link } from "react-router-dom";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
  Label,
  LoginButton,
  Footer,
  Create,
} from "./Login";

type RegisterProps = {
  users: TUser[];
};

export default function Register(props: RegisterProps) {
  console.log(props);

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
    console.log(data);
  };

  console.log(errors);

  console.log(errors);
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
