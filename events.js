async function fetchEvents() {
  try {
  const response = await fetch('http://localhost:3001/api/events');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const eventsList = document.getElementById('events-list');
    if (!data.items || data.items.length === 0) {
      eventsList.innerHTML = '<p>No upcoming events found.</p>';
      return;
    }
    const upcomingEvents = data.items.map(event => {
      const start = event.start.dateTime || event.start.date;
      const dateObj = new Date(start);
      const formattedDate = dateObj.toLocaleString('en-ZA', {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
      return {
        title: event.summary || 'Untitled Event',
        date: formattedDate,
        description: event.description || ''
      };
    });
    const eventsHTML = upcomingEvents.map(event => 
      `<div class="event">
        <h3>${event.title}</h3>
        <p><strong>Date:</strong> ${event.date}</p>
        <p>${event.description}</p>
      </div>`
    ).join('');
    eventsList.innerHTML = eventsHTML;
  } catch (error) {
    console.error('Error fetching events:', error);
    document.getElementById('events-list').innerHTML = '<p>Failed to load events.</p>';
  }
}

fetchEvents();


