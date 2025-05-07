import TopBar from "./postComponents/TopBar.tsx"

interface PostProps {
    postid: number;
    pfpUrl?: string;
    username: string;
    datetime: string;
    contenturl: string;
    caption: string;
}


function Post({postid, pfpUrl="/img/default_pfp.jpg", username, datetime, contenturl, caption}: PostProps) {

    return (
        <div className="m-4 d-flex flex-column" key={postid} style={{width:"100%"}}>
            <TopBar pfpUrl={pfpUrl} username={username} datetime={datetime} />
        </div>
    )
}

export default Post;