import authenticate from './auth';

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.from === 'popup' && message.action === 'authenticate') {
    authenticate();
  }
});
