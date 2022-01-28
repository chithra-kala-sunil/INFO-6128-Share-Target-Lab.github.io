window.addEventListener('DOMContentLoaded', () => {
    const getUrl = new URL(window.location);
    document.getElementById('receivedText').textContent = getUrl.searchParams.get('title');
    document.getElementById('recievedTitle').textContent = getUrl.searchParams.get('text');
    document.getElementById('receivedUrl').textContent = getUrl.searchParams.get('url');
  });