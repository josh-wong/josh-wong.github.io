import React, { useState } from 'react';
import { Widget } from '@happyreact/react';
import styles from './styles.module.css';
import '@happyreact/react/theme.css';
 
const VotedYes = () => {
  return <span>Thanks for your feedback. I'm glad you found this page useful.</span>;
};
 
const VotedNo = () => {
  return <span>Thanks for your feedback. I'll try to improve the content on this page.</span>;
};
 
export default function Feedback({ resource }) {
  const [reaction, setReaction] = useState(null);
 
  const isReacted = reaction === 'Yes' || reaction === 'No';
  const _resource = String(resource).replace(/\//g, '-');
 
  const handleReaction = (params) => {
    setReaction(params.icon);
  };
 
  return (
    <div>
      <h3>Was this page helpful?</h3>
      {!isReacted ? (
        <div>
          <Widget
            token="d4fe10d5-ec46-4fb2-97c3-6931f90dd491"
            resource={_resource}
            classes={{
              root: styles.widget,
              container: styles.container,
              grid: styles.grid,
              cell: styles.cell,
              reaction: styles.reaction,
            }}
            onReaction={handleReaction}
          />
        </div>
      ) : reaction === 'No' ? (
        <VotedNo />
      ) : (
        <VotedYes />
      )}
    </div>
  );
}
