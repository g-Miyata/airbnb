import { IconSearch } from '@/assets/icons/icon';

const SearchBar = () => {
  return (
    <div className="border rounded-full px-3 py-2 border-gray-200 flex items-center w-full max-w-2xl mx-auto shadow-lg shadow-gray-200">
      <input className="px-3 w-full focus:outline-none" type="text" placeholder="Search for your next stay" />
      <button className="bg-red-500 rounded-full p-2">
        <IconSearch size={32} aria-label="Search Icon" color="white" />
      </button>
    </div>
  );
};

export default SearchBar;
