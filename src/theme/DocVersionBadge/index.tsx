import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDocsVersion, useDoc} from '@docusaurus/plugin-content-docs/client';
import type {Props} from '@theme/DocVersionBadge';
import TagsListInline from '@theme/TagsListInline';

export default function DocVersionBadge({
  className,
}: Props): JSX.Element | null {

  {/* The following was added to show tags in the header instead of in the footer. */}
  const {metadata} = useDoc();
  const {tags} = metadata;

  {/* The following lines is commented out since my projects don't have versioned docs. */}
  {/* const versionMetadata = useDocsVersion();
  if (versionMetadata.badge) { */}
    return (
      <span
        className={clsx(
          className,
          ThemeClassNames.docs.docVersionBadge,
          'badge badge--secondary',
        )}>
        {/* The following is commented out since my projects don't have versioned docs. */}
        {/* <Translate
          id="theme.docs.versionBadge.label"
          values={{versionLabel: versionMetadata.label}}>
          {'Version: {versionLabel}'}
        </Translate> */}
        <div
          className={clsx(
            'row margin-top--sm',
            ThemeClassNames.docs.docFooterTagsRow,
          )}>
          <div className="col">
            <TagsListInline tags={tags} />
          </div>
        </div>
      </span>
    );
  // }
  return null;
}
