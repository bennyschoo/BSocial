
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


export default CaptionBox;