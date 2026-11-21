import algoliaSearchHelper from 'algoliasearch-helper';
import {getCookieConsentValue} from 'react-cookie-consent';
import {consentCookieName} from './ConsentContext';

// The upstream search page doesn't pass the configured search parameters.
export default function searchPageHelper(client, index, options, searchResultsOptions) {
  const searchClient = {
    ...client,
    search(queries, ...args) {
      const analytics = getCookieConsentValue(consentCookieName) === 'true';
      return client.search(
        queries.map((query) => ({...query, params: {...query.params, analytics}})),
        ...args,
      );
    },
  };
  return algoliaSearchHelper(searchClient, index, options, searchResultsOptions);
}
