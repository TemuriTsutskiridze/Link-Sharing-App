import styled from "styled-components";
import { Link } from "react-router-dom";

import Logo from "../assets/logo.svg";
import DevLinks from "../assets/devlinks.svg";
import { TUser } from "../types";

import {
  Login_RegisterContainer,
  Header,
  Container,
  Introduction,
  LoginTitle,
  LoginText,
  Form,
  InputContainer,
  Label,
  Input,
  LoginButton,
  Footer,
  Create,
} from "./Login";

type RegisterProps = {
  users: TUser[];
};

export default function Register(props: RegisterProps) {
  console.log(props.users);
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
        <Form>
          <InputContainer>
            <Label>Email address</Label>
            <Input placeholder="e.g. alex@email.com"></Input>
          </InputContainer>
          <InputContainer>
            <Label>Password</Label>
            <Input
              placeholder="Enter your password"
              style={{ backgroundImage: 'url("/password icon.svg")' }}
            ></Input>
          </InputContainer>
          <InputContainer>
            <Label>Confirm password</Label>
            <Input
              placeholder="At least .8 characters"
              style={{ backgroundImage: 'url("/password icon.svg")' }}
            ></Input>
          </InputContainer>
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
