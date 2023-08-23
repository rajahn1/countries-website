export function verifyInputSearch(country: string, inputSearch: string) {
    for (let i = 0; i <= country.length - inputSearch.length; i++) {
      if (country.substr(i, inputSearch.length) === inputSearch) {
        return true;
      }
    }
    return false;
  }