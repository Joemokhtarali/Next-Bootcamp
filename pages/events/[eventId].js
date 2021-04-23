// import { useRouter } from "next/router";
import { getEventById, getAllEvents } from "../../helpers/api_util";
import { Fragment } from "react";
import EventSummary from "../../Components/event-detail/event-summary";
import EventLogistics from "../../Components/event-detail/event-logistics";
import EventContent from "../../Components/event-detail/event-content";

function EventPage(props) {
  
  const event = props.event

  if (!event) {
    return <p>No Event found</p>;
  }
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export async function getStaticProps(context){
  const eventId = context.params.eventId

  const event = await getEventById(eventId)

  return {
    props: {
      event: event
    },
    revalidate: 30
  }
}

export async function getStaticPaths(){
  const events = await getAllEvents()

  const paths = events.map(event => ({ params: { eventId: event.id } }))

  return {
    paths: paths,
    fallback: false
  }
}

export default EventPage;
