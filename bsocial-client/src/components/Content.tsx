import Posts from './Posts.tsx';


interface ContentProps {
    isDesktop: boolean;
}

function Content({isDesktop}: ContentProps) {
    return (
        // style={{"min-height": "100vh", "width": "calc(100% - var(--sidebar-width)) !important"}}
        <div className='desktop-content bg-secondary ms-auto d-flex flex-column align-items-center'>
            <Posts isDesktop={isDesktop}/>
        </div>
    )
}

export default Content;