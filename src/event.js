chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: "designModeOn",
    type: "normal",
    contexts: ["all"],
    title: "ON",
  });
  chrome.contextMenus.create({
    id: "designModeOff",
    type: "normal",
    contexts: ["all"],
    title: "OFF",
  });
});

chrome.contextMenus.onClicked.addListener(function (info) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (info.menuItemId === "designModeOn") {
      chrome.tabs.sendMessage(tabs[0].id, { message: "on" }, function (
        response
      ) {
        console.log(response);
      });
    }
    if (info.menuItemId === "designModeOff") {
      chrome.tabs.sendMessage(tabs[0].id, { message: "off" }, function (
        response
      ) {
        console.log(response);
      });
    }
  });
});
