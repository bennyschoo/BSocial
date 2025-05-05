
interface ProfilePicProps {
    url: string;
    size: number;
    alt?: string;
}


function ProfilePic({url, size, alt="Profile Picture"}: ProfilePicProps) {
    return (
        
        <img src={url} alt={alt} className="rounded-circle border border-light" height={size}/>
    );
}

export default ProfilePic;