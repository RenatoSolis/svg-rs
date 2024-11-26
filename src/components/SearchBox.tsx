// components/SearchBox.tsx
import React from 'react';

interface SearchBoxProps {
  onSearch: (value: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Buscar ícono..."
      onChange={handleInputChange}
      className="p-2 border rounded"
    />
  );
};

export default SearchBox;
