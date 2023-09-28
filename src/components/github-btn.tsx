import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { styled } from "styled-components";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Button = styled.button`
  margin-top: 50px;
  background-color: white;
  width: 100%;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 50px;
  border: 0;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  /* 무지개 색상 애니메이션 */
  background-image: linear-gradient(
    45deg,
    #f06,
    #ff6a00,
    #ff3f3f,
    #c96af0,
    #3fcaff,
    #3fffaf
  );
  background-size: 600% 100%;
  transition: background-position 0.5s;

  &:hover {
    animation: rainbow 3s linear infinite;
  }

  @keyframes rainbow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const Logo = styled.img`
  height: 25px;
`;

export default function GithubButton() {
  const navigate = useNavigate();
  const onClick = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      console.log("🚀 ~ file: github-btn.tsx:30 ~ onClick ~ error:", error);
    }
  };
  return (
    <Button onClick={onClick}>
      <Logo src="/github-logo.png" />
      Continue with Github
    </Button>
  );
}
