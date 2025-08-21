chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [1],
    addRules: [
      {
        id: 1,
        priority: 2,
        action: {
          type: "allow"
        },
        condition: {
          regexFilter: "udm=14",
          resourceTypes: ["main_frame"]
        }
      }
    ]
  });
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [2],
    addRules: [
      {
        id: 2,
        priority: 1,
        action: {
          type: "redirect",
          redirect: {
            regexSubstitution: "https://www.google.com/search?q=\\1\\2&udm=14"
          }
        },
        condition: {
          regexFilter: "^https://www\\.google\\.com/search\\?q=([^&]+)(&.*)?$",
          resourceTypes: ["main_frame"]
        }
      }
    ]
  });
});