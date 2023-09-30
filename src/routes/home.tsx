import { styled } from "styled-components";
import PostTweetForm from "../components/post-tweet-form";
import { auth } from "../firebase";
import Timeline from "../components/timeline";

const Wrapper = styled.div`
  display: grid;
  gap: 50px;
  grid-template-rows: 1fr 5fr;
  overflow-y: scroll;
`;

export default function Home() {
  // const logOut = () => {
  //   auth.signOut();
  // };
  return (
    <Wrapper className="timeline">
      <PostTweetForm />
      <Timeline />
    </Wrapper>
  );
}
