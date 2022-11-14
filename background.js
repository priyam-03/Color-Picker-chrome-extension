//this is for some initial data
let color = "red";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
});
