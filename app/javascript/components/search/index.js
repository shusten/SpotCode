import React, { Fragment, useEffect, useState } from 'react';
import SearchBar from './search_bar';
import Categories from '../common/categories';
import { Columns } from 'react-bulma-components';

const Search = () => {
    return (
        <Fragment>
            <Columns>
        <Columns.Column desktop={{ size: 6, offset: 3 }} mobile={{ size: 12 }}>
          <SearchBar fetchSearch={fetchSearch}/>
        </Columns.Column>
      </Columns>

      <ResultsTabs albums={albums} artists={artists} songs={songs} />
      <Categories fetchCategorySearch={fetchCategorySearch}/>

        </Fragment>
    );
}
export default Search;