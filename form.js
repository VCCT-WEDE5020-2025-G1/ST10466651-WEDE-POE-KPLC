// ===========================
// Calendar Setup
// ===========================
document.addEventListener('DOMContentLoaded', () => {
  const calendarBody = document.getElementById('calendar-body');
  const calendarMonth = document.getElementById('calendar-month');
  const visitDateInput = document.getElementById('visit-date');
  const prevMonthBtn = document.getElementById('prev-month');
  const nextMonthBtn = document.getElementById('next-month');
  const form = document.getElementById('enrolment-form');
  const formStatus = document.getElementById('form-status');

  if (!calendarBody || !calendarMonth || !visitDateInput || !prevMonthBtn || !nextMonthBtn || !form || !formStatus) {
    // Page doesn't include enrolment components; nothing to do.
    return;
  }

  let selectedDate = null;
  const today = new Date();
  let currentMonth = today.getMonth();
  let currentYear = today.getFullYear();

  // ===========================
  // Helper: Format date
  // ===========================
  const formatDate = date => date.toLocaleDateString();

  // ===========================
  // Helper: Is selectable (weekday + future)
  // ===========================
  const isSelectable = date => {
    const day = date.getDay();
    return date >= today && day !== 0 && day !== 6;
  };

  // ===========================
  // Render Calendar
  // ===========================
  function renderCalendar(month, year) {
    calendarBody.innerHTML = '';
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    calendarMonth.textContent = `${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`;

    let date = 1;

    for (let i = 0; i < 6; i++) {
      const row = document.createElement('tr');

      for (let j = 0; j < 7; j++) {
        const cell = document.createElement('td');

        if ((i === 0 && j < firstDay) || date > daysInMonth) {
          cell.textContent = '';
        } else {
          const cellDate = new Date(year, month, date);

          cell.textContent = date;
          if (isSelectable(cellDate)) {
            cell.className = 'available';
            cell.tabIndex = 0;

            cell.addEventListener('click', () => selectDate(cell, cellDate));
          } else {
            cell.className = 'unavailable';
          }

          date++;
        }

        row.appendChild(cell);
      }

      calendarBody.appendChild(row);
      if (date > daysInMonth) break;
    }
  }

  // ===========================
  // Select a date
  // ===========================
  function selectDate(cell, date) {
    calendarBody.querySelectorAll('td').forEach(td => td.classList.remove('selected'));
    cell.classList.add('selected');
    selectedDate = date;
    visitDateInput.value = formatDate(date);
    formStatus.textContent = '';
  }

  // ===========================
  // Navigate months
  // ===========================
  function changeMonth(increment) {
    currentMonth += increment;

    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    } else if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }

    // Prevent navigating to past months
    if (currentYear < today.getFullYear() || (currentYear === today.getFullYear() && currentMonth < today.getMonth())) {
      currentMonth = today.getMonth();
      currentYear = today.getFullYear();
    }

    renderCalendar(currentMonth, currentYear);
  }

  prevMonthBtn.addEventListener('click', () => changeMonth(-1));
  nextMonthBtn.addEventListener('click', () => changeMonth(1));

  // ===========================
  // Scroll to Calendar
  // ===========================
  visitDateInput.addEventListener('focus', () => {
    document.getElementById('calendar').scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  // ===========================
  // Form submission
  // ===========================
  form.addEventListener('submit', e => {
    e.preventDefault();

    if (!selectedDate) {
      formStatus.textContent = 'Please select a visit date from the calendar.';
      return;
    }

    formStatus.textContent = "Thank you for booking your visit! We'll contact you soon to confirm.";
    form.reset();
    selectedDate = null;
    calendarBody.querySelectorAll('td').forEach(td => td.classList.remove('selected'));
  });

  // ===========================
  // Initial Render
  // ===========================
  renderCalendar(currentMonth, currentYear);
});
