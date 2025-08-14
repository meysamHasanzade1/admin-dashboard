import { MdSearch } from "react-icons/md";

function Search({ placeholder, searchQuery, setSearchQuary }) {
  return (
    <div className="flex items-center gap-[10px] bg-[#2e374a] p-[10px] rounded-md w-max">
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        className="bg-transparent border-none text-white outline-none"
        onChange={(e) => setSearchQuary(e.target.value)}
      />
    </div>
  );
}

export default Search;
