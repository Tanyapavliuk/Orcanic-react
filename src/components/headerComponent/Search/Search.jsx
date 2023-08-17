import { useState } from 'react';

import LogoIcon from '../../../images/symbol-defs.svg'; //імпорт свг спрайту
import { SearchWpar, InputSearch, IconSearch } from './Search.styled';

function Search() {
  const [search, setSearch] = useState('');
  return (
    <SearchWpar>
      <label>
        <InputSearch
          type="text"
          name="search"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <IconSearch>
          <svg style={{ width: 56, height: 56 }}>
            <use xlinkHref={`${LogoIcon}#icon-search`}></use>
          </svg>
        </IconSearch>
      </label>
    </SearchWpar>
  );
}

export default Search;
