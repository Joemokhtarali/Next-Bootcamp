import EventItem from "./event-item"
import classes from "../../styles/event-list.module.css";

function EventList(props){
    const { items } = props 
    if(!items){
        return<p>Loading....</p>
    }
    console.log(items, 'items in event-list component')
    return(
        <ul className={classes.list} >
            {items.map(event => <li><EventItem key={event.id} event={event}/> </li>)}
        </ul>
    )
}

export default EventList 