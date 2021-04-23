import { getAllEvents } from "../../helpers/api_util";
import { useRouter } from 'next/router'
import EventList from "../../components/events/event-list";
import EventSearch from "../../Components/events/events-search";

function Events(props){
    const router = useRouter()
    const { events } = props

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

export async function getStaticProps(){
    const events = await getAllEvents()

    return {
        props: {
            events: events
        },
        revalidate: 60
    }
}

export default Events