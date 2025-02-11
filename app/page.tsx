'use client';

import { useEffect, useState } from 'react';
import { AmazonConnectApp } from '@amazon-connect/app';

export default function Home() {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const { provider } = AmazonConnectApp.init({
      onCreate: async (event) => {
        const { appInstanceId } = event.context;
        console.log('App initialized: ', appInstanceId);
        setIsInitialized(true);
      },
      onDestroy: async () => {
        console.log('App being destroyed');
      },
    });
  }, []);

  return (
    <div>
      <h1>Amazon Connect Agent Workspace</h1>
      {isInitialized ? (
        <p>Agent Workspace OK</p>
      ) : (
        <p>Loading Agent Workspace...</p>
      )}
    </div>
  );
}
