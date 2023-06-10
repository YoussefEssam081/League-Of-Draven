import React, { useState } from 'react';
import Navbar from './components/NavBar';
import CardData from './components/CardData';
import Card from './components/Card';
import LansBtn from './components/LansBtn';

function App() {
  const [filteredRole, setFilteredRole] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleFilter = (role) => {
    if (role === filteredRole) {
      setFilteredRole(''); // Remove filter if the same role is clicked again
    } else {
      setFilteredRole(role);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
   
  }; 

  const filteredData = CardData.filter((data) => {
    if (filteredRole === '' && searchQuery === '') {
      return true; // Show all cards if no filter or search query is applied
    }
    const matchesRole = filteredRole === '' || data.role.includes(filteredRole);
    const matchesSearch = data.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRole && matchesSearch;
  });

  const CHAMPIONS = filteredData.map((data) => (
    <Card key={data.id} {...data} />
  ));

  return (
    <div className="meme-Generator">
      <Navbar />
      <LansBtn onFilter={handleFilter} onSearch={handleSearch} />
      <div className="card-row">{CHAMPIONS}</div>
    </div>
  );
}

export default App;
