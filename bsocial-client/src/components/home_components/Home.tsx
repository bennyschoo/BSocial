import Posts from './Posts.tsx';


interface ContentProps {
    isDesktop: boolean;
}

function Content({isDesktop}: ContentProps) {
    return (
        <Posts isDesktop={isDesktop}/>
    )
}

export default Content;