import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  Form,
  Input,
  Switcher,
  Title,
  Wrapper,
  Error,
} from "../components/auth-components";
import GithubButton from "../components/github-btn";

const errors = {
  "auth/email-already-in-use": "이미 존재하는 이메일 입니다.",
};

export default function CreateAccount() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (isLoading || email === "" || password === "") {
      return;
    }
    try {
      setLoading(true);

      await signInWithEmailAndPassword(auth, email, password); // 로그인 한 사람은 누군가?
      navigate("/"); // 리다이렉트
    } catch (e) {
      // 에러 설정
      // console.log("🚀 ~ file: create-account.tsx:94 ~ onSubmit ~ e:", e);
      if (e instanceof FirebaseError) {
        console.log(
          "🚀 ~ file: create-account.tsx:98 ~ onSubmit ~ e:",
          e.code,
          e.message
        );
        setError(e.message);
      }
    } finally {
      setLoading(false);
    }
    console.log(name, email, password);
  };
  return (
    <Wrapper>
      <Title>Log into 𝕏</Title>
      <Title>일어나고 있는 일</Title>
      <Form onSubmit={onSubmit}>
        <Input
          onChange={onChange}
          name="email"
          value={email}
          placeholder="Email"
          type="email"
          required
        />
        <Input
          onChange={onChange}
          name="password"
          value={password}
          placeholder="Password"
          type="password"
          required
        />
        <Input type="submit" value={isLoading ? "Loding..." : "Log in"} />
      </Form>
      {error !== "" ? <Error>{error}</Error> : null}
      <Switcher>
        계정이 없으신가요?
        <Link to="/create-account">Create one &rarr;</Link>
      </Switcher>
      <GithubButton />
    </Wrapper>
  );
}
