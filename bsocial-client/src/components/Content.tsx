import Posts from './Posts.tsx';

function Main() {
    return (
        // style={{"min-height": "100vh", "width": "calc(100% - var(--sidebar-width)) !important"}}
        <div className='content bg-secondary ms-auto d-flex flex-column align-items-center'>
            <Posts />
        </div>
    )
}

export default Main;