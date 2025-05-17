import SearchBar from "./SearchBar.tsx";
import SearchResult from "./SearchResult.tsx";  

function Search() {
    return (
        <div className="search">
            <SearchBar onSearch={(input)=>{console.log(input)}} />
            <SearchResult pfpurl="/img/traccie.jpg" username="Traccie" following={true}/>
            <SearchResult pfpurl="/img/traccie.jpg" username="Traccie" following={false}/>

        </div>
    );
}

export default Search;