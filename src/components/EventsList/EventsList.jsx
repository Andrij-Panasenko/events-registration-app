import { Event } from '../Event/Event';
import { EventList } from './EventsList.styled';

export const EventsList = ({ events }) => {
  return (
    <>
      <EventList>
        {events.map((event) => (
          <Event key={event._id} event={event} />
        ))}
      </EventList>
    </>
  );
};
