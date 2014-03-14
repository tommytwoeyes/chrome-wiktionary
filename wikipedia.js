// Copyright (c) 2014 Tom Malone. All rights reserved.
// Use of this source code is governed by a MIT-style license.

var menuConfig = {
    title: "Look up '%s' in Wikipedia", 
    contexts: ['selection'], 
    onclick: handleClick
};

function doLookup(query) {
  chrome.tabs.create({
        url: 'http://en.wikipedia.org/wiki/' + query
  });
}

function handleClick(info, tab) {
  console.time("WikiMenu Click Event");
  doLookup(info.selectionText);
  
  console.warn("item " + info.menuItemId + " was clicked");
  console.log("info: " + JSON.stringify(info));
  console.log("tab: " + JSON.stringify(tab));
  
  console.time("WikiMenu Click Event");
}

var wikiMenu = chrome.contextMenus.create(menuConfig, function() {
  console.log("Last Error: " + chrome.runtime.lastError);
});
