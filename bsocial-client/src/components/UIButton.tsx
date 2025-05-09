
interface SideBarButtonProps {
    icon: string;
    onClick?: () => void;
}

function SideBarButton({ icon, onClick }: SideBarButtonProps) {
    
    return <>
        <button className="btn sidebar-button p-1 my-3" onClick={onClick}>
            <img src={icon} height={30}></img>
        </button>
    </>
}
export default SideBarButton;