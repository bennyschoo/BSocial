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

export default TopBar;