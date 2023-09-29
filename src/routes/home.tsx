import { styled } from "styled-components";
import PostTweetForm from "../components/post-tweet-form";
import { auth } from "../firebase";
import Timeline from "../components/timeline";
import "../css/scroll.css";

const Wrapper = styled.div`
  display: grid;
  gap: 50px;
  grid-template-rows: 1fr 5fr;
`;

export default function Home() {
  // const logOut = () => {
  //   auth.signOut();
  // };
  return (
    <Wrapper>
      <PostTweetForm />
      <Timeline />
    </Wrapper>
  );
}
