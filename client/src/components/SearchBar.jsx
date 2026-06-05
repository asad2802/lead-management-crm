function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search by Name, Email or Company..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="
        w-full
        p-3
        rounded-xl
        bg-slate-900
        border
        border-slate-700
        text-white
        mb-6
      "
    />
  );
}

export default SearchBar;