import React, {useContext} from 'react';
import SearchBar from '@theme-original/SearchBar';
import {ConsentContext} from '@site/src/components/ConsentContext';

export default function SearchBarWrapper(props) {
  const consent = useContext(ConsentContext);
  return <SearchBar {...props} insights={consent} />;
}
