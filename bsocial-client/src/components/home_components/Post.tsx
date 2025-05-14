import ProfilePic from "../ProfilePic.tsx"

interface TopBarProps {
    pfpUrl: string;
    username: string;
    datetime: string;
}

function TopBar({pfpUrl, username, datetime}: TopBarProps) {

    return <>
        <div className="background d-flex gap-3 my-3" >
            <ProfilePic url={pfpUrl} />
            <div className="d-flex flex-wrap align-items-center">
                <h5 className="">{username} •&nbsp;</h5>
                <h5 className="">{datetime}</h5>
            </div>
        </div>
    </>
}



import UIButton from "../UIButton.tsx"
import heart from "../../assets/heart.svg"
import comments from "../../assets/comments.svg"

interface BottomBarProps {
    postid: number;
}

function BottomBar({postid}: BottomBarProps) {

    return (
        <div className="d-flex gap-2 mt-2">
            <UIButton icon={heart} size={27} onClick={() => console.log("Like clicked")}/>
            <UIButton icon={comments} size={27} onClick={() => console.log("Comment clicked")}/>
        </div>
    )
}



interface CaptionBoxProps {
    username: string;
    caption: string;
}

function CaptionBox({username,caption}: CaptionBoxProps) {

    return (
        <>
            <div className="m-1">
                <h4 className="d-inline "><b>{username}</b>&nbsp;</h4>
                <h5 className="d-inline ">{caption}</h5>
            </div>
        </>
    );

}



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
            {contenturl &&  <img src={contenturl} className="post-content"></img>}
            <BottomBar postid={postid} />
            {caption && <CaptionBox caption={caption} username={username}/>}
        </div>
    )
}

export default Post;