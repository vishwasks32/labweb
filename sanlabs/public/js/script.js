document.addEventListener('DOMContentLoaded', () => {
    const sidebarLinks = document.querySelectorAll('.list-group-item');
    const mainContent = document.getElementById('main-content');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', async () => {
            const contentURL = link.getAttribute('data-content');
            const response = await fetch(contentURL);
            const content = await response.text();
            const renderedContent = ejs.render(content);
            mainContent.innerHTML = renderedContent;
        });
    });
});