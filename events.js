const API_KEY = 'AIzaSyCnbVIGj81hfJOm1kdRb-wKopspbB9LXkA'; // Replace with your real key
const CALENDAR_ID = '9924013282cc24a7b4b8c4a69f696b1aa8ad843e06201c747eee14c004aca8a9@group.calendar.google.com'; // Your calendar ID

async function fetchEvents() {
  const now = new Date().toISOString();
  const maxResults = 10;

  const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events?key=${API_KEY}&timeMin=${now}&maxResults=${maxResults}&singleEvents=true&orderBy=startTime`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const eventsList = document.getElementById('events-list');

    if (!data.items || data.items.length === 0) {
      eventsList.innerHTML = '<p>No upcoming events found.</p>';
      return;
    }

    // Store the event data in a variable
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

    // Display the events on the page
    const eventsHTML = upcomingEvents.map(event => 
      <div class="event">
        <h3>${event.title}</h3>
        <p><strong>Date:</strong> ${event.date}</p>
        <p>${event.description}</p>
      </div>
    ).join('');

    eventsList.innerHTML = eventsHTML;

  } catch (error) {
    console.error('Error fetching events:', error);
    document.getElementById('events-list').innerHTML = <p>Failed to load events.</p>;
  }
}

fetchEvents();
