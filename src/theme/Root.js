import React from 'react';
import Clarity from '@microsoft/clarity';

const projectId = "p9179dcazx"
Clarity.init(projectId);

// Default implementation, that you can customize
export default function Root({children}) {
  return <>{children}</>;
}
