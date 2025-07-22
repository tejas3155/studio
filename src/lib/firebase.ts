// @ts-nocheck
import {initializeApp} from 'firebase/app';

// TODO: Replace with your actual config from the Firebase console
export const firebaseConfig = {
  apiKey: 'REPLACE_WITH_YOUR_API_KEY',
  authDomain: 'REPLACE_WITH_YOUR_AUTH_DOMAIN',
  projectId: 'REPLACE_WITH_YOUR_PROJECT_ID',
  storageBucket: 'REPLACE_WITH_YOUR_STORAGE_BUCKET',
  messagingSenderId: 'REPLACE_WITH_YOUR_MESSAGING_SENDER_ID',
  appId: 'REPLACE_WITH_YOUR_APP_ID',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
