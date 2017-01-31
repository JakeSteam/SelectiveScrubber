chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.storage.sync.get({
        sites: 'supersecretsite.com',
		popup: false
    }, deleteBySites);
});

function deleteBySites(storage) {
    var allSites = storage.sites.split("\n");
	numSites = allSites.length;
    for (var i = 0; i < allSites.length; i++) {
        deleteBySite(allSites[i], storage.popup);
    }
}

function deleteBySite(site, popup) {
    chrome.history.search({
            text: site,
			startTime: 0,
            maxResults: 999999
        },
        function(results) {
            var itemsDeleted = 0;
            for (itemsDeleted; itemsDeleted < results.length; itemsDeleted++) {
                chrome.history.deleteUrl({
                    url: results[itemsDeleted].url
                });
            }
			
			if (popup) {
				siteDeleted(site, itemsDeleted);
			}
        });
}

var numSites = 0;
var sitesProcessed = 0;
var siteString = "Scrub complete:\n";
function siteDeleted(site, count) {
	sitesProcessed++;
	siteString += (count + "x " + site + "\n");
	if (sitesProcessed >= numSites) {
		alert(siteString);
		sitesProcessed = 0;
		siteString = "Scrub complete:\n";
	}
}