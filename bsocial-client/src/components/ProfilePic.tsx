
interface ProfilePicProps {
    url: string;
    size?: number;
    alt?: string;
}


function ProfilePic({url, size=40, alt="Profile Picture"}: ProfilePicProps) {
    return (
        <img src={url} alt={alt} className="profile-pic rounded-circle" height={size}/>
    );
}

export default ProfilePic;