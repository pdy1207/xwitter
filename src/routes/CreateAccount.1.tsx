import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Form, Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { FirebaseError } from "firebase/app";
import { Input, Switcher, Title, Wrapper } from "../components/auth-components";

export default function CreateAccount() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (isLoading || name === "" || email === "" || password === "") {
      return;
    }
    try {
      setLoading(true);
      // 사용자 프로필
      // 사용자 아이디 ETC
      // 홈페이지리 다이렉트
      const credentials = await createUserWithEmailAndPassword(
        // 계정이생성되면 자동으로 로그인이 된다
        auth,
        email,
        password
      );
      console.log(credentials.user); // 유저 정보 확인
      await updateProfile(credentials.user, {
        // 유저 정보 제작
        displayName: name,
      });
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
      <Title>Join 𝕏</Title>
      <Title>지금 가입하세요.</Title>
      <Form onSubmit={onSubmit}>
        <Input
          onChange={onChange}
          name="name"
          value={name}
          placeholder="Name"
          type="text"
          required
        />
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
        <Input
          type="submit"
          value={isLoading ? "Loding..." : "Create Account"}
        />
      </Form>
      {error !== "" ? <Error>{error}</Error> : null}
      <Switcher>
        이미 계정이 있으세요?
        <Link to="/login">Log in &rarr;</Link>
      </Switcher>
    </Wrapper>
  );
}
