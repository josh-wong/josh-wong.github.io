import React, {useContext} from 'react';
import SearchBar from '@theme-original/SearchBar';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {ConsentContext} from '@site/src/components/ConsentContext';

export default function SearchBarWrapper(props) {
  const consent = useContext(ConsentContext);
  const {siteConfig} = useDocusaurusContext();
  return (
    <SearchBar
      {...props}
      insights={consent}
      searchParameters={{
        ...siteConfig.themeConfig.algolia.searchParameters,
        ...props.searchParameters,
        analytics: consent,
      }}
    />
  );
}
