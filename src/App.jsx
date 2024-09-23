import { useEffect, useState } from 'react';
import { AppWrapper } from './AppWrapper.styled';
import { EventsList } from './components/EventsList/EventsList';
import { getEvents } from './api/getEvents';

export default function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const resp = await getEvents();
      setEvents(resp);
    };
    fetch();
  }, []);

  return (
    <AppWrapper>
      <EventsList events={events} />
    </AppWrapper>
  );
}
