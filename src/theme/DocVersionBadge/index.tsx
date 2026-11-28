import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import type {Props} from '@theme/DocVersionBadge';
import TagsListInline from '@theme/TagsListInline';

export default function DocVersionBadge({
  className,
}: Props): JSX.Element | null {
  const {metadata} = useDoc();
  const {tags} = metadata;

  if (tags.length === 0) {
    return null;
  }

  return (
    <div
      className={clsx(
        className,
        ThemeClassNames.docs.docVersionBadge,
        'badge badge--secondary',
      )}>
      <div
        className={clsx(
          'row margin-top--sm',
          ThemeClassNames.docs.docFooterTagsRow,
        )}>
        <div className="col">
          <TagsListInline tags={tags} />
        </div>
      </div>
    </div>
  );
}
