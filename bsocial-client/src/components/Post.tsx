import TopBar from "./postComponents/TopBar.tsx"
import PostContent from "./postComponents/PostContent.tsx"
import CaptionBox from "./postComponents/CaptionBox.tsx"
import BottomBar from "./postComponents/BottomBar.tsx"

interface PostProps {
    postid: number;
    pfpUrl?: string;
    username: string;
    datetime: string;
    contenturl?: string;
    caption?: string;
}


function Post({postid, pfpUrl="/img/default_pfp.jpg", username, datetime, contenturl, caption}: PostProps) {


    return (
        <div className="post d-flex flex-column pb-4 pt-2" key={postid} style={{width:"100%"}}>
            <TopBar pfpUrl={pfpUrl} username={username} datetime={datetime} />
            {contenturl && <PostContent contenturl={contenturl} />}
            <BottomBar postid={postid} />
            {caption && <CaptionBox caption={caption} username={username}/>}
        </div>
    )
}

export default Post;