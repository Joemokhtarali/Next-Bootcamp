import EventItem from "./event-item"

function EventList(props){
    return(
        <ul>
            {props.map((event, index) => <EventItem key={index}/>)}
        </ul>
    )
}

export default EventList