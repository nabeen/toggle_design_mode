chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message == "on") {
    document.designMode = "on";
    var elements = document.querySelectorAll("a");
    elements.forEach(function (element) {
      element.addEventListener("click", myHandler, false);
    });
    sendResponse({ message: "on" });
  }
  if (request.message == "off") {
    document.designMode = "off";
    var elements = document.querySelectorAll("a");
    elements.forEach(function (element) {
      element.removeEventListener("click", myHandler, false);
    });
    sendResponse({ message: "off" });
  }
});

const myHandler = (e) => {
  e.preventDefault();
};
