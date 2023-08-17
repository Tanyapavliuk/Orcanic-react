import { useSearchParams } from 'react-router-dom';

import LogoIcon from '../../../images/symbol-defs.svg'; //імпорт свг спрайту
import { SearchWpar, InputSearch, IconSearch } from './Search.styled';

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.get('product') ?? ''; //отримуємо значення параметру, якщо немає значення = ""

  //------
  const checkSearchParam = evt => {
    const checkParam =
      evt.target.value !== '' ? { product: evt.target.value } : {};
    setSearchParams(checkParam);
  };
  return (
    <SearchWpar>
      <label>
        <InputSearch
          type="text"
          name="search"
          value={params} //значення в параметрах запиту контролює значення інпуту
          onChange={checkSearchParam} //значення параметру перезаписується на поточний ввод даних
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
