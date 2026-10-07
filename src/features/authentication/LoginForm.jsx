import { useState } from "react";
import styled from "styled-components";
import { HiOutlineSparkles } from "react-icons/hi2";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import SpinnerMini from "../../ui/SpinnerMini";
import { useLogin } from "./useLogin";

// Pre-configured demo credentials for recruiters and reviewers
// Can be customized via VITE_DEMO_EMAIL and VITE_DEMO_PASSWORD in .env
const DEMO_EMAIL = import.meta.env.VITE_DEMO_EMAIL || "demo@ouraheaven.com";
const DEMO_PASSWORD = import.meta.env.VITE_DEMO_PASSWORD || "pass1234";

const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 1.2rem 0;
  color: var(--color-grey-400);
  font-size: 1.2rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid var(--color-grey-200);
  }

  span {
    padding: 0 1rem;
  }
`;

const DemoCard = styled.div`
  background-color: var(--color-grey-50);
  border: 1px dashed var(--color-brand-500);
  border-radius: var(--border-radius-sm);
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 0.4rem;
`;

const DemoHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: var(--color-brand-600);
  font-weight: 600;
  font-size: 1.3rem;

  & svg {
    width: 1.8rem;
    height: 1.8rem;
    color: var(--color-brand-600);
  }
`;

const DemoDescription = styled.p`
  font-size: 1.2rem;
  color: var(--color-grey-500);
  line-height: 1.4;
`;

const DemoCredentials = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-size: 1.2rem;
  color: var(--color-grey-600);
`;

const DemoCredRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & span {
    color: var(--color-grey-500);
  }

  & code {
    font-family: "Sono", monospace;
    background-color: var(--color-grey-200);
    padding: 0.2rem 0.6rem;
    border-radius: var(--border-radius-tiny);
    color: var(--color-grey-700);
    font-size: 1.2rem;
  }
`;

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, login } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;
    login({ email, password });
  }

  function handleDemoLogin() {
    if (isLoading) return;
    setEmail(DEMO_EMAIL);
    setPassword(DEMO_PASSWORD);
    login({ email: DEMO_EMAIL, password: DEMO_PASSWORD });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical>
        <Button disabled={isLoading} size="large">
          {!isLoading ? "Login" : <SpinnerMini />}
        </Button>
      </FormRowVertical>

      <Divider>
        <span>or quick access</span>
      </Divider>

      <DemoCard>
        <DemoHeader>
          <HiOutlineSparkles />
          <span>Quick Demo Access</span>
        </DemoHeader>

        <DemoDescription>
          Reviewing the portfolio? Pre-fill credentials and sign in directly:
        </DemoDescription>

        <DemoCredentials>
          <DemoCredRow>
            <span>Email:</span>
            <code>{DEMO_EMAIL}</code>
          </DemoCredRow>
          <DemoCredRow>
            <span>Password:</span>
            <code>••••••••</code>
          </DemoCredRow>
        </DemoCredentials>

        <Button
          type="button"
          variation="secondary"
          size="large"
          disabled={isLoading}
          onClick={handleDemoLogin}
        >
          {!isLoading ? "Log in as Demo Staff" : <SpinnerMini />}
        </Button>
      </DemoCard>
    </Form>
  );
}

export default LoginForm;
