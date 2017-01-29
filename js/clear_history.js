chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.storage.sync.get({
        sites: 'supersecretsite.com'
    }, deleteBySites);
});

function deleteBySites(storage) {
    alert(storage.sites);
    var allSites = storage.sites.split("\n");
    for (var i = 0; i < allSites.length; i++) {
        deleteBySite(allSites[i]);
    }
}

function deleteBySite(site) {
    chrome.history.search({
            text: site,
            startTime: 0,
            endTime: 2147485546999,
            maxResults: 9999
        },
        function(results) {
            var itemsDeleted = 0;
            for (itemsDeleted; itemsDeleted < results.length; itemsDeleted++) {
                chrome.history.deleteUrl({
                    url: results[itemsDeleted].url
                });
            }

            if (itemsDeleted > 0) {
                alert("Deleted " + itemsDeleted + " items for: " + site);
            }
        })
}