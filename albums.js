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
    img.addEventListener('click', () => openModal(photo));
    photoGridEl.appendChild(img);
  });
}

function closeAlbum() {
  albumViewEl.classList.add('hidden');
  albumListEl.classList.remove('hidden');
}

function openModal(photoUrl) {
  modalImgEl.src = photoUrl;
  modalEl.classList.remove('hidden');
}

function closeModal() {
  modalEl.classList.add('hidden');
  modalImgEl.src = '';
}

albums.forEach(album => {
  const card = document.createElement('div');
  card.className = 'album-card';
  card.innerHTML = `
    <img src="${album.cover}" alt="${album.title}" class="album-cover" />
    <div class="album-title">${album.title}</div>
    <div class="album-desc">${album.desc}</div>
    <button class="button" onclick="openAlbum('${album.title}')">View Album</button>
  `;
  albumListEl.appendChild(card);
});
