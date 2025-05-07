import ProfilePic from "../ProfilePic.tsx"


interface TopBarProps {
    pfpUrl: string;
    username: string;
    datetime: string;
}

function TopBar({pfpUrl, username, datetime}: TopBarProps) {
    return <>
        <div className="background d-flex gap-3" >
            <ProfilePic url={pfpUrl} />
            <div className="d-flex flex-wrap">
                <h5 className="m-0 p-0">{username} •&nbsp;</h5>
                <h5 className="m-0 p-0">{datetime}</h5>
            </div>
        </div>
    </>
}

export default TopBar;