import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router'
import { CustomNavigationClient } from './router/NavigationClient';
import { msalInstance } from './authConfig';
import { AuthenticationResult, EventType } from '@azure/msal-browser';
import { msalPlugin } from './plugins/msalPlugin';

const navigationClient = new CustomNavigationClient(router);
msalInstance.setNavigationClient(navigationClient);

// Account selection logic is app dependent. Adjust as needed for different use cases.
const accounts = msalInstance.getAllAccounts();
if (accounts.length > 0) {
    msalInstance.setActiveAccount(accounts[0]);
}
msalInstance.addEventCallback((event) => {
  if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
    const payload = event.payload as AuthenticationResult;
    const account = payload.account;
    msalInstance.setActiveAccount(account);
  }
});

const app = createApp(App).use(router).use(msalPlugin, msalInstance);

router.isReady().then(() => {
  app.mount('#app');
});
