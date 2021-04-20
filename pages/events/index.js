import { getAllEvents } from "../../dummy_data";
import { useRouter } from 'next/router'
import EventList from "../../components/events/event-list";
import EventSearch from "../../Components/events/events-search";

function Events(){
    const events = getAllEvents()
    const router = useRouter()

    function findEventsHandler(year, month){
        const fullPath = `/events/${year}/${month}`
        router.push(fullPath)
    }

    return (
        <div>
            <EventSearch onSearch={findEventsHandler}/>
            <EventList items={events} /> 
        </div>
    )
}

export default Events