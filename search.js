// ===========================
// Header Search Injection & Smart Dropdown
// ===========================
document.addEventListener('DOMContentLoaded', () => {
  const pages = [
    { name: 'Home', url: 'home.html' },
    { name: 'About', url: 'about.html' },
    { name: 'Programmes', url: 'programme.html' },
    { name: 'Gallery', url: 'albums.html' },
    { name: 'Enrolment', url: 'enrolment.html' },
    { name: 'Contact', url: 'contacts.html' },
  ];

  // Inject search form into header
  const header = document.querySelector('.site-header-inner');
  if (!header) return;

  const searchForm = document.createElement('form');
  searchForm.id = 'header-search';
  searchForm.setAttribute('role', 'search');
  searchForm.style.position = 'relative';
  searchForm.style.marginTop = '0.5em';

  const searchInput = document.createElement('input');
  searchInput.type = 'search';
  searchInput.id = 'search-input';
  searchInput.placeholder = 'Search...';
  searchInput.autocomplete = 'off';
  searchInput.setAttribute('aria-label', 'Search site');
  Object.assign(searchInput.style, {
    padding: '6px 12px',
    borderRadius: '20px',
    border: '1px solid rgba(0,0,0,0.2)',
    width: '200px',
    fontSize: '0.95rem'
  });

  searchForm.appendChild(searchInput);
  header.appendChild(searchForm);

  // Function to remove any existing dropdown
  function removeDropdown() {
    const oldDropdown = document.querySelector('.search-dropdown');
    if (oldDropdown) oldDropdown.remove();
  }

  // small debounce helper
  function debounce(fn, wait = 200) {
    let t;
    return function (...args) {
      clearTimeout(t);
      t = setTimeout(() => fn.apply(this, args), wait);
    };
  }

  // Show suggestions / handle submit
  function handleSearch(query) {
    removeDropdown();
    if (!query) return;

    const matches = pages.filter(page => page.name.toLowerCase().includes(query));

    if (matches.length === 1) {
      // Single match: direct redirect
      window.location.href = matches[0].url;
    } else if (matches.length > 1) {
      // Multiple matches: show dropdown with ARIA roles
      const dropdown = document.createElement('div');
      dropdown.className = 'search-dropdown';
      dropdown.setAttribute('role', 'listbox');
      dropdown.setAttribute('aria-label', 'Search suggestions');
      Object.assign(dropdown.style, {
        position: 'absolute',
        background: '#fff',
        color: '#000',
        padding: '0.25em',
        borderRadius: '6px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        top: (searchInput.offsetHeight + 6) + 'px',
        left: '0',
        zIndex: '9999',
        minWidth: '200px'
      });

      matches.forEach((page, idx) => {
        const option = document.createElement('div');
        option.textContent = page.name;
        option.setAttribute('role', 'option');
        option.tabIndex = 0;
        Object.assign(option.style, {
          padding: '8px 10px',
          cursor: 'pointer'
        });
        option.addEventListener('click', () => window.location.href = page.url);
        option.addEventListener('keydown', (ev) => {
          if (ev.key === 'Enter' || ev.key === ' ') {
            ev.preventDefault();
            window.location.href = page.url;
          }
        });
        option.addEventListener('mouseenter', () => option.style.background = '#f0f0f0');
        option.addEventListener('mouseleave', () => option.style.background = '#fff');
        dropdown.appendChild(option);
      });

      searchForm.appendChild(dropdown);
    } else {
      // No match feedback (non-blocking)
      // optionally show inline message instead of alert
      // alert(`No results found for: "${query}"`);
    }
  }

  // Handle input event: live suggestions (debounced)
  searchInput.addEventListener('input', debounce(() => {
    const query = searchInput.value.trim().toLowerCase();
    removeDropdown();
    if (!query) return;
    handleSearch(query);
  }, 180));

  // Handle form submission
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = searchInput.value.trim().toLowerCase();
    handleSearch(query);
  });

  // Hide dropdown if clicked outside
  document.addEventListener('click', (e) => {
    if (!searchForm.contains(e.target)) removeDropdown();
  });

  // keyboard handling: Enter when one suggestion
  searchInput.addEventListener('keydown', (e) => {
    const items = searchForm.querySelectorAll('.search-dropdown [role="option"]');
    if (e.key === 'Enter' && items.length === 1) {
      window.location.href = pages.find(p => p.name === items[0].textContent).url;
      e.preventDefault();
    }
    // Escape to collapse
    if (e.key === 'Escape') removeDropdown();
  });
});
