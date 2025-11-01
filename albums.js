(function () {
  'use strict';

  const albums = [
  {
    title: "Play Day Highlights",
    desc: "Outdoor play, games, and laughter in the sunshine.",
    cover: "./images/backyard.jpeg",
    photos: [
      "./images/Play Day Highlights/backyard.jpeg",
      "./images/Play Day Highlights/backyard.jpeg",
      "./images/Play Day Highlights/backyard.jpeg",
      "./images/Play Day Highlights/backyard.jpeg",
      "./images/Play Day Highlights/backyard.jpeg",
      "./images/Play Day Highlights/backyard.jpeg",
      "./images/Play Day Highlights/backyard.jpeg",
      "./images/Play Day Highlights/backyard.jpeg",
      "./images/Play Day Highlights/backyard.jpeg",
      "./images/Play Day Highlights/backyard.jpeg"
    ]
  },
  {
    title: "Art & Creativity",
    desc: "Paint, crafts, and colourful hands everywhere!",
    cover: "./images/backyard.jpeg",
    photos: [
      "./images/Art & Creativity/backyard.jpeg",
      "./images/Art & Creativity/backyard.jpeg",
      "./images/Art & Creativity/backyard.jpeg",
      "./images/Art & Creativity/backyard.jpeg",
      "./images/Art & Creativity/backyard.jpeg",
      "./images/Art & Creativity/backyard.jpeg",
      "./images/Art & Creativity/backyard.jpeg",
      "./images/Art & Creativity/backyard.jpeg",
      "./images/Art & Creativity/backyard.jpeg",
      "./images/Art & Creativity/backyard.jpeg"
    ]
  },
  {
    title: "Learning in Action",
    desc: "A look into our classroom fun and learning moments.",
    cover: "./images/backyard.jpeg",
    photos: [
      "./images/Learning in Action/backyard.jpeg",
      "./images/Learning in Action/backyard.jpeg",
      "./images/Learning in Action/backyard.jpeg",
      "./images/Learning in Action/backyard.jpeg",
      "./images/Learning in Action/backyard.jpeg",
      "./images/Learning in Action/backyard.jpeg",
      "./images/Learning in Action/backyard.jpeg",
      "./images/Learning in Action/backyard.jpeg",
      "./images/Learning in Action/backyard.jpeg",
      "./images/Learning in Action/backyard.jpeg"
    ]
  },
    {
    title: "Special Events",
    desc: "A glance at our special moments and annual celebrations.",
    cover: "./images/backyard.jpeg",
    photos: [
      "./images/Special Events/backyard.jpeg",
      "./images/Special Events/backyard.jpeg",
      "./images/Special Events/backyard.jpeg",
      "./images/Special Events/backyard.jpeg",
      "./images/Special Events/backyard.jpeg",
      "./images/Special Events/backyard.jpeg",
      "./images/Special Events/backyard.jpeg",
      "./images/Special Events/backyard.jpeg",
      "./images/Special Events/backyard.jpeg",
      "./images/Special Events/backyard.jpeg"
    ]
  },
];

  const albumListEl = document.getElementById('album-list');
  const photoGridEl = document.getElementById('photo-grid');
  const albumViewEl = document.getElementById('album-view');
  const modalEl = document.getElementById('image-modal');
  const modalImgEl = document.getElementById('modal-img');
  let lastFocusedEl = null;

  if (!albumListEl || !photoGridEl || !albumViewEl || !modalEl || !modalImgEl) {
    // Required DOM nodes missing (page may not include albums). Fail silently.
    return;
  }

function openAlbum(title) {
  const album = albums.find(a => a.title === title);
  if (!album) return;

  albumListEl.classList.add('hidden');
  albumViewEl.classList.remove('hidden');

  photoGridEl.innerHTML = "";
  album.photos.forEach(photo => {
    const img = document.createElement("img");
    img.src = photo;
    img.alt = title;
    img.className = "grid-photo";
    img.loading = 'lazy';
    img.addEventListener('click', () => openModal(photo));
    // make images keyboard accessible
    img.tabIndex = 0;
    img.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(photo);
      }
    });
    photoGridEl.appendChild(img);
  });
}

function closeAlbum() {
  albumViewEl.classList.add('hidden');
  albumListEl.classList.remove('hidden');
}

function openModal(photoUrl) {
  // Save last focused element to restore later
  lastFocusedEl = document.activeElement;

  modalImgEl.src = photoUrl;
  modalImgEl.alt = 'Expanded photo';
  modalEl.classList.remove('hidden');
  modalEl.setAttribute('aria-hidden', 'false');
  modalEl.tabIndex = -1;
  try { modalEl.focus(); } catch (e) { /* ignore focus errors on some browsers */ }

  // Add Escape key listener and trap focus
  document.addEventListener('keydown', onKeyDown);
}

function closeModal() {
  modalEl.classList.add('hidden');
  modalEl.setAttribute('aria-hidden', 'true');
  modalImgEl.src = '';
  // remove key handler
  document.removeEventListener('keydown', onKeyDown);
  // restore focus
  if (lastFocusedEl && typeof lastFocusedEl.focus === 'function') lastFocusedEl.focus();
}

  albums.forEach(album => {
    const card = document.createElement('div');
    card.className = 'album-card';
    card.innerHTML = `
      <img src="${album.cover}" alt="${album.title}" class="album-cover" />
      <div class="album-title">${album.title}</div>
      <div class="album-desc">${album.desc}</div>
      <button class="button" data-album="${album.title}">View Album</button>
    `;
    const btn = card.querySelector('button');
    if (btn) {
      btn.addEventListener('click', () => openAlbum(btn.dataset.album));
      // keyboard accessible already as button
    }
    albumListEl.appendChild(card);
  });

  // expose close/open for debugging if needed
  window.__albums = { openAlbum, closeAlbum };
})();

// Keyboard handler for modal (Escape to close)
function onKeyDown(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
}
