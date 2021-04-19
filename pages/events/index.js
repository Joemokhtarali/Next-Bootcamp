import { getAllEvents } from "../../dummy_data";
import EventList from "../../components/events/event-list";
import EventSearch from "../../Components/events/events-search";

function Events(){
    const events = getAllEvents()

    return (
        <div>
            <EventSearch />
            <EventList items={events} /> 
        </div>
    )
}

export default Events