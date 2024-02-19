const circles = Array.from(document.querySelectorAll('[data-circle]'));
const assets = document.querySelectorAll('[data-asset]');

window.addEventListener('scroll', () => {
    requestAnimationFrame(moveAssets)
  }, false);

  function moveAssets() {
    document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));

    assets.forEach(asset => {
      const circle = circles.find(circle => circle.dataset.circle === asset.dataset.asset)
      const {left, top, width, height} = circle.getBoundingClientRect();
      asset.style.left = `${left + (width / 2)}px`;
      asset.style.top = `${top + (height / 2)}px`;
    })
  }