import ProfilePic from "../ProfilePic";


interface SearchResultProps {
  pfpurl: string;
  username: string;
  following: boolean;
}

function SearchResults({pfpurl, username, following}: SearchResultProps) {
  return (
    <div className={"search-result m-4 d-flex"+ (following ? "" : " align-items-center")}>
        <ProfilePic url={pfpurl} size={48} alt="Profile Picture" />
        <div>
          <h5 className="my-0 ms-3">{username}</h5>
          {following ? <p className="my-0 ms-3">• Following •</p> : following}
        </div>
    </div>
  );
}

export default SearchResults;