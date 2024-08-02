const images = document.getElementsByClassName("image");

let globalIndex = 0,
    last = { x: 0, y: 0 };

const activate = (image, x, y) => {
  image.style.left = `${x}px`;
  image.style.top = `${y}px`;
  image.style.zIndex = globalIndex;

  image.dataset.status = "active";

  last = { x, y };
}

const deactivateAll = () => {
  for (let image of images) {
    image.dataset.status = "inactive";
  }
}

const distanceFromLast = (x, y) => {
  return Math.hypot(x - last.x, y - last.y);
}

const handleOnMove = e => {
  const container = document.querySelector('.container');
  const containerRect = container.getBoundingClientRect();

  // Deactivate all images if the mouse is over the container or within 170px from the top
  if ((e.clientX > containerRect.left && e.clientX < containerRect.right && e.clientY > containerRect.top && e.clientY < containerRect.bottom) || e.clientY < 170) {
    deactivateAll();
    return; // Skip activation if the mouse is over the container or within 170px from the top
  }

  if (distanceFromLast(e.clientX, e.clientY) > (window.innerWidth / 20)) {
    const lead = images[globalIndex % images.length],
          tail = images[(globalIndex - 5) % images.length];

    activate(lead, e.clientX, e.clientY);

    if (tail) tail.dataset.status = "inactive";
    
    globalIndex++;
  }
}

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);
