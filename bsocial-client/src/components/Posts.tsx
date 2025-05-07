import { useMediaQuery } from "react-responsive";
import Post from './Post.tsx';

function Posts() {
  const isDesktop = useMediaQuery({ minWidth: 541});

  return (
    <div className="posts d-flex flex-column gap-3" style={{width: isDesktop ? "450px" : "100%"}}>
      <Post postid={2} pfpUrl='/img/traccie.jpg' username='traccie' datetime='november 1, 2019' contenturl='traccie.jpg' caption='HI MY NAME IS TRACCIE'/>
    </div>
  );
}

export default Posts;