import {
  createAmplifyAuthAdapter,
  createStorageBrowser,
} from '@aws-amplify/ui-react-storage/browser';
import '@aws-amplify/ui-react-storage/styles.css';
import './App.css';

import config from '../amplify_outputs.json';
import { Amplify } from 'aws-amplify';
import { Authenticator, Button, Heading } from '@aws-amplify/ui-react';
Amplify.configure(config);

const { StorageBrowser } = createStorageBrowser({
  config: createAmplifyAuthAdapter(),
});

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <>
          {/* <Flex direction="row" alignItems="center" wrap="nowrap" gap="1rem"> */}
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'nowrap', gap: '1rem' }}>
            <Heading level={4}>{`Hello ${user?.username}`}</Heading>
            <Button onClick={signOut}>Sign out</Button>
          </div>
        </>
      )}
    </Authenticator>
  );
}

export default App;