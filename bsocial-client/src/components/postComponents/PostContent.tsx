
interface PostContentProps {
    contenturl: string;
}

function PostContent({contenturl}: PostContentProps) {


    return (
        <>
            <img src={contenturl} className="post-content"></img>
        </>

    )
}


export default PostContent;