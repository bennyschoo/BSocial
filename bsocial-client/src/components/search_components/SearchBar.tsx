
interface SearchBarProps {
    onSearch: (query: string) => void;
}

function SearchBar({onSearch}: SearchBarProps) {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        onSearch(inputValue);
    };

    return (
        <div className="input-group my-3 search-bar">
            <input type="text" className="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" onChange={handleInputChange}/>
            <span className="input-group-text" id="basic-addon1"><strong>⌕</strong></span>
        </div>
    )

}

export default SearchBar;