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

export default BottomBar;