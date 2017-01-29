// Saves options to chrome.storage.sync.
function save() {
    var site = document.getElementById('site').value;
    chrome.storage.sync.set({siteList: site}, function() {
        var status = document.getElementById('status');
        status.textContent = 'Sites saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
}

function load() {
    chrome.storage.sync.get({
        siteList: 'supersecretsite.com'
    }, function(items) {
        document.getElementById('site').value = items.siteList;
    });
}

document.addEventListener('DOMContentLoaded', load);
document.getElementById('save').addEventListener('click',
        save);