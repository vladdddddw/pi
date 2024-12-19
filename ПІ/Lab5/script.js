function tabSwitch(newTabId, newContentId) {
    // Hide all content
    document.querySelectorAll('.content').forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all tabs
    document.querySelectorAll('.tabs li a').forEach(tab => {
        tab.classList.remove('active');
    });

    // Show the new content
    document.getElementById(newContentId).classList.add('active');

    // Set the new tab as active
    document.getElementById(newTabId).classList.add('active');
}
