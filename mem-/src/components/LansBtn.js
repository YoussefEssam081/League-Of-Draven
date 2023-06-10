
import React from 'react';

export default function LansBtn({ onFilter, onSearch, searchQuery }) {
  const handleFilter = (role) => {
    onFilter(role);
  };

  const handleInputChange = (event) => {
    const query = event.target.value;
    onSearch(query);
  };

  return (
    <div className="lans--btn--container">
      <div className="lans-btn">

        <img className="lans--icon" src="images/content_type_icon_champion__3nwJQ.png" />
        <input
             value={searchQuery}
             onChange={handleInputChange}
          className="lans--search-input"
          type="text"
          placeholder="FIND A CHAMPION">
        </input>

        <button onClick={() => handleFilter('TANK')}>Tank</button>
        <button onClick={() => handleFilter('MAGE')}>Mage</button>
        <button onClick={() => handleFilter('MARKSMEN')}>Marksman</button>
        <button onClick={() => handleFilter('SUPPORT')}>Support</button>
        <button onClick={() => handleFilter('FIGHTER')}>Fighter</button>
        <button onClick={() => handleFilter('ASSASSIN')}>Assassin</button>
      </div>
      <div className="lans--icon--title">
        <img className="lans--icon" src="images/content_type_icon_champion__3nwJQ.png" />
        <h1 className="lans--title">CHAMPIONS</h1>
      </div>
    </div>
  );
}




