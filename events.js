// Events loader — keep API key server side. This file only runs a graceful fallback client-side.
(function () {
  'use strict';

  // Intentionally left blank for security; proxy from server instead.
  const API_KEY = '';
  const CALENDAR_ID = '9924013282cc24a7b4b8c4a69f696b1aa8ad843e06201c747eee14c004aca8a9@group.calendar.google.com';

  async function fetchEvents() {
    const eventsList = document.getElementById('events-list');
    if (!eventsList) return;

    if (!API_KEY) {
      eventsList.innerHTML = '<p>Live events are not enabled. To enable live events, configure an API key on the server and proxy the Calendar API requests. See README for instructions.</p>';
      return;
    }

    const now = new Date().toISOString();
    const maxResults = 10;
    const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events?key=${encodeURIComponent(API_KEY)}&timeMin=${encodeURIComponent(now)}&maxResults=${maxResults}&singleEvents=true&orderBy=startTime`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
      const data = await response.json();

      if (!data.items || data.items.length === 0) {
        eventsList.innerHTML = '<p>No upcoming events found.</p>';
        return;
      }

      const upcomingEvents = data.items.map(event => {
        const start = event.start?.dateTime || event.start?.date || '';
        const dateObj = start ? new Date(start) : null;
        const formattedDate = dateObj ? dateObj.toLocaleString(undefined, {
          weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
        }) : 'TBA';

        return {
          title: event.summary || 'Untitled Event',
          date: formattedDate,
          description: event.description || ''
        };
      });

      const eventsHTML = upcomingEvents.map(ev => {
        return `<div class="event">
          <h3>${escapeHtml(ev.title)}</h3>
          <p><strong>Date:</strong> ${escapeHtml(ev.date)}</p>
          <p>${escapeHtml(ev.description)}</p>
        </div>`;
      }).join('');

      eventsList.innerHTML = eventsHTML;

    } catch (error) {
      console.error('Error fetching events:', error);
      eventsList.innerHTML = '<p>Failed to load events.</p>';
    }
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // Kick off
  try { fetchEvents(); } catch (e) { console.error(e); }
})();
