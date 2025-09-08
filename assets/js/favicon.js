(function() {
  if (document.querySelector('link[rel="icon"]')) return;
  const link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/x-icon';
  link.href = './assets/image/Artboard 1-8.png'; 
  document.head.appendChild(link);
})();
