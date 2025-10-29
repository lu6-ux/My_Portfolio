document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Open project modal
function openProjectModal(url) {
  const modal = document.getElementById('projectModal');
  const iframe = document.getElementById('projectIframe');

  if(modal.classList.contains('open')) return; // prevent multiple opens
  modal.classList.add('open');            

  let loaded = false;
  iframe.src = url;

  const onLoad = () => {
    loaded = true;
    iframe.removeEventListener('load', onLoad);
  };

  iframe.addEventListener('load', onLoad);

  // Fallback if embedding is blocked
  const fallbackTimer = setTimeout(() => {
    if(!loaded){
      closeProjectModal();
      window.open(url, '_blank', 'noopener');
      alert('Preview blocked from embedding — opened the site in a new tab.');
    }
  }, 1500);

  
  modal.querySelector('.modal-overlay').addEventListener('click', closeProjectModal);

  document.addEventListener('keydown', function escHandler(e) {
    if(e.key === "Escape") {
      closeProjectModal();
      document.removeEventListener('keydown', escHandler);
    }
  });
}

ss
function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  const iframe = document.getElementById('projectIframe');
  iframe.src = 'about:blank';
  modal.classList.remove('open');
}
