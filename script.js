document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

function openProjectModal(url){
  const modal = document.getElementById('projectModal');
  const iframe = document.getElementById('projectIframe');
  modal.classList.add('open');            
  let loaded = false;

  iframe.src = url;

 
  const onLoad = () => {
    loaded = true;
    iframe.removeEventListener('load', onLoad);
  };
  iframe.addEventListener('load', onLoad);
  const fallbackTimer = setTimeout(() => {
    if(!loaded){
      closeProjectModal();
      window.open(url, '_blank', 'noopener');
      alert('Preview blocked from embedding — opened the site in a new tab.');
    }
  }, 1500);
}

function closeProjectModal(){
  const modal = document.getElementById('projectModal');
  const iframe = document.getElementById('projectIframe');
  iframe.src = 'about:blank';
  modal.style.display = 'none';
}
