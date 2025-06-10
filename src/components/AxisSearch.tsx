import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface AxisSearchProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onSearch: (value: string) => void;
  className?: string;
}

export const AxisSearch: React.FC<AxisSearchProps> = ({
  placeholder = 'Search...',
  value,
  onChange,
  onSearch,
  className = '',
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch(value);
    }
  };

  return (
    <div
      className={`
        flex items-center gap-2 
        bg-white rounded-lg border 
        px-3 py-2
        ${isFocused ? 'border-[#97144d] ring-1 ring-[#97144d]/20' : 'border-gray-200'} 
        transition-all duration-200 ease-in-out
        ${className}
      `}
    >
      <Search className="h-5 w-5 text-gray-400" />
      
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="flex-1 outline-none border-none bg-transparent"
      />
      
      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          className="text-xs text-gray-400 hover:text-gray-600"
        >
          Clear
        </button>
      )}
    </div>
  );
};