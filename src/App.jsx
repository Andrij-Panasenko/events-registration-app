import { useEffect, useState } from 'react';
import { AppWrapper } from './AppWrapper.styled';
import { EventsList } from './components/EventsList/EventsList';
import { getEvents } from './api/requests/eventsrequests';

export default function App() {
  const [events, setEvents] = useState([]);
  console.log(events);

  useEffect(() => {
    const fetch = async () => {
      const resp = await getEvents();
      setEvents(resp.data);
    };
    fetch();
  }, [events]);

  return (
    <AppWrapper>
      <EventsList />
    </AppWrapper>
  );
}
