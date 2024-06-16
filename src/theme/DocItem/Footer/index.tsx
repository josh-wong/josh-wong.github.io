import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/theme-common/internal';
import TagsListInline from '@theme/TagsListInline';
import EditMetaRow from '@theme/EditMetaRow';
import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0.2/dist/web.js';

export default function DocItemFooter(): JSX.Element | null {
  const {metadata} = useDoc();
  const {editUrl, lastUpdatedAt, lastUpdatedBy, tags} = metadata;

  const canDisplayTagsRow = tags.length > 0;
  const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);

  const canDisplayFooter = canDisplayTagsRow || canDisplayEditMetaRow;

  if (!canDisplayFooter) {
    return null;
  }

  return (
    <>
      {
        Typebot.initBubble({
          typebot: 'faq-o3dwttn',
          theme: {
            button: { backgroundColor: 'var(--ifm-color-primary)' },
          },"@typebot.io/js": "0.2.87",
    "@typebot.io/react": "0.2.87",
        })
      }
      <footer
        className={clsx(ThemeClassNames.docs.docFooter, 'docusaurus-mt-lg')}>
        {/* Commented out tags since we've added them to the top of docs. (See src/theme/DocVersionBadge/index.tsx) */}
        {/* {canDisplayTagsRow && (
          <div
            className={clsx(
              'row margin-top--sm',
              ThemeClassNames.docs.docFooterTagsRow,
            )}>
            <div className="col">
              <TagsListInline tags={tags} />
            </div>
          </div>
        )} */}
        {canDisplayEditMetaRow && (
          <EditMetaRow
            className={clsx(
              'margin-top--sm',
              ThemeClassNames.docs.docFooterEditMetaRow,
            )}
            editUrl={editUrl}
            lastUpdatedAt={lastUpdatedAt}
            lastUpdatedBy={lastUpdatedBy}
          />
        )}
      </footer>
    </>
  );
}
