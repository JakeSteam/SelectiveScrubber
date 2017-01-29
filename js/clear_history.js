chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.history.search(
		{
			text: '*google.com*', 
			startTime: 0,
			endTime: 2147485546999,
			maxResults: 9999}, 
		function(results) {
			var itemsDeleted = 0;
			for (itemsDeleted; itemsDeleted < results.length; itemsDeleted++) {
				chrome.history.deleteUrl({ url: results[itemsDeleted].url });
			}
			
			if (itemsDeleted > 0) {
				alert("Deleted " + itemsDeleted + " items.");
			} else {
				alert("Nothing to delete!");
			}
		})
});