import React, { useState } from 'react';
import './box.scss';

const SearchBox = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      console.log('검색어:', searchTerm);
      // 실제 검색 API 호출을 위한 로직 추가
      if (onSearch) {
        onSearch(searchTerm);
      }
      setSearchTerm(''); // 검색 후 입력창 초기화
    } else {
      alert('검색어를 입력해주세요.');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress} // 키보드 이벤트 추가
        placeholder='검색어를 입력해주세요'
      />
      <button onClick={handleSearch}>검색</button>
    </div>
  );
};

export default SearchBox;
