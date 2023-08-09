import styled from "styled-components";
import { Link } from "react-router-dom";

import Logo from "../assets/logo.svg";
import DevLinks from "../assets/devlinks.svg";

export default function Login() {
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

const Login_RegisterContainer = styled.div`
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

const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media only screen and (min-width: 48rem) {
    align-self: center;
  }
`;

const Container = styled.div`
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

const Introduction = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const LoginTitle = styled.h2`
  font-size: 2.4rem;
  line-height: 150%;
  font-weight: 700;
  color: var(--gray-dark);

  @media only screen and (min-width: 48rem) {
    font-size: 3.2rem;
  }
`;

const LoginText = styled.p`
  font-size: 1.6rem;
  line-height: 150%;
  font-weight: 400;
  color: var(--gray);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-top: 4rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: start;
`;

const Label = styled.label`
  font-size: 1.2rem;
  line-height: 150%;
  font-weight: 400;
  color: var(--gray-dark);
`;

const Input = styled.input`
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
  background-image: url("/email icon.svg");
  background-repeat: no-repeat;
  background-position: top 50% left 1.6rem;

  &::placeholder {
    opacity: 0.5;
  }

  &:hover {
    border: 1px solid var(--purple, #633cff);
    box-shadow: 0px 0px 32px 0px rgba(99, 60, 255, 0.25);
  }
`;

const LoginButton = styled.button`
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

const Footer = styled.footer`
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

const Create = styled.p`
  color: var(--purple);
  cursor: pointer;
`;
