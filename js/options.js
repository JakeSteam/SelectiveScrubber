function save() {
    var sitesToSave = document.getElementById('sites').value;
    chrome.storage.sync.set({
        sites: sitesToSave
    }, displaySavedMessage);
}

function load() {
    chrome.storage.sync.get({
        sites: 'supersecretsite.com'
    }, function(items) {
        document.getElementById('sites').value = items.sites;
    });
}

function displaySavedMessage() {
    var status = document.getElementById('status');
    status.textContent = 'Sites saved.';
    setTimeout(function() {
        status.textContent = '';
    }, 2000);
}

document.addEventListener('DOMContentLoaded', load);
document.getElementById('save').addEventListener('click', save);