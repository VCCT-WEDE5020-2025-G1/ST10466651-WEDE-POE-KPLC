// ===========================
// 🔍 Smart Header Search (Bottom-Right Header Version)
// ===========================
// Author: Moses Ezeh ✨

document.addEventListener('DOMContentLoaded', () => {
  const PAGES = [
    { name: 'Home', url: 'home.html' },
    { name: 'About', url: 'about.html' },
    { name: 'Programmes', url: 'programme.html' },
    { name: 'Gallery', url: 'albums.html' },
    { name: 'Enrolment', url: 'enrolment.html' },
    { name: 'Contact', url: 'contacts.html' },
  ];

  const header = document.querySelector('.site-header-inner');
  if (!header) return;

  // 🔧 Create search form
  const form = document.createElement('form');
  form.id = 'header-search';
  form.className = 'header-search';
  form.setAttribute('role', 'search');
  form.setAttribute('aria-label', 'Site Search');
  form.innerHTML = `
    <input type="search" id="search-input" placeholder="Search..." aria-label="Search site" autocomplete="off"/>
  `;
  header.appendChild(form);

  const input = form.querySelector('#search-input');

  // 🎨 Styles
  const style = document.createElement('style');
  style.textContent = `
    .site-header-inner { position: relative; }
    .header-search {
      position: absolute;
      bottom: -32px;
      right: 0px;
      display: flex;
      align-items: center;
      gap: 0.5em;
      padding: 0.5em 1em;
      z-index: 999;
      color: #000;
    }
    .header-search input {
      border-radius: 30px;
      border: 1.5px solid rgba(0,0,0,0.25);
      padding: 0.5em 1em;
      width: 250px;
      outline: none;
      transition: all 0.25s ease;
    }
    .header-search input:focus {
      border-color: var(--primary-orange);
      box-shadow: 0 0 0 3px rgba(255,106,0,0.25);
    }
    .search-dropdown {
      position: absolute;
      top: calc(100% + 6px);
      left: 0;
      right: 0;
      border-radius: 10px;
      background: #fff;
      box-shadow: 0 6px 20px rgba(0,0,0,0.18);
      opacity: 0;
      transform: translateY(-6px);
      transition: all 0.25s ease;
      z-index: 1000;
    }
    .search-dropdown.show {
      opacity: 1;
      transform: translateY(0);
    }
    .search-option {
      padding: 10px 14px;
      cursor: pointer;
    }
    .search-option:hover,
    .search-option.active {
      background: #f2f2f2;
    }
  `;
  document.head.appendChild(style);

  // 🧠 Dropdown & keyboard logic
  let activeIndex = -1;

  const removeDropdown = () => {
    document.querySelector('.search-dropdown')?.remove();
    activeIndex = -1;
  };

  const createDropdown = (matches) => {
    removeDropdown();
    const dropdown = document.createElement('div');
    dropdown.className = 'search-dropdown';

    matches.forEach((page, i) => {
      const option = document.createElement('div');
      option.className = 'search-option';
      option.textContent = page.name;
      option.dataset.url = page.url;

      option.addEventListener('mouseenter', () => {
        input.value = page.name;
        highlightOption(i);
      });
      option.addEventListener('click', () => window.location.href = page.url);

      dropdown.appendChild(option);
    });

    form.appendChild(dropdown);
    requestAnimationFrame(() => dropdown.classList.add('show'));
  };

  const highlightOption = (index) => {
    const options = document.querySelectorAll('.search-option');
    options.forEach((opt, i) => opt.classList.toggle('active', i === index));
    activeIndex = index;
  };

  const debounce = (fn, delay = 150) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  };

  const handleSearch = (query) => {
    if (!query) return removeDropdown();
    const matches = PAGES.filter(p => p.name.toLowerCase().includes(query));
    matches.length ? createDropdown(matches) : removeDropdown();
  };

  input.addEventListener('input', debounce(() => handleSearch(input.value.trim().toLowerCase())));

  input.addEventListener('keydown', (e) => {
    const options = [...document.querySelectorAll('.search-option')];
    if (!options.length) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      activeIndex = (activeIndex + 1) % options.length;
      highlightOption(activeIndex);
      input.value = options[activeIndex].textContent;
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      activeIndex = (activeIndex - 1 + options.length) % options.length;
      highlightOption(activeIndex);
      input.value = options[activeIndex].textContent;
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      e.preventDefault();
      window.location.href = options[activeIndex].dataset.url;
    } else if (e.key === 'Escape') removeDropdown();
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = input.value.trim().toLowerCase();
    const match = PAGES.find(p => p.name.toLowerCase() === query);
    match ? window.location.href = match.url : handleSearch(query);
  });

  document.addEventListener('click', e => { if (!form.contains(e.target)) removeDropdown(); });
});
