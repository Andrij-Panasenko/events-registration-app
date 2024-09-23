import {
  Card,
  Descr,
  Title,
  Date,
  Organizer,
  ButtonReg,
  ButtonView,
} from './Event.styled';

export const Event = ({ event }) => {
  const { title, description, eventDate, organizer } = event;

  return (
    <>
      <Card>
        <Title>{title}</Title>
        <Descr>{description}</Descr>
        <Date>{eventDate}</Date>
        <Organizer>From: {organizer}</Organizer>

        <ButtonReg>register</ButtonReg>
        <ButtonView>View</ButtonView>
      </Card>
    </>
  );
};
