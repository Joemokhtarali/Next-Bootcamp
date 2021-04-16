import { Link } from "next/link";
import classes from "../../styles/event-item.module.css";

function EventItem(props) {
    const { title, image, date, location, id } = props.event
    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })

    const formattedAddress = location.replace(',', '\n')

  return (
    <li className={classes.item}>
      <img src={'/' + image} alt={title} />
      <div>
        <div className={classes.content}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div >
            <address className={classes.address}>{formattedAddress}</address>
          </div>
        </div>
        <div>
            {/* <Link href={`"/events/${id}"`}>Explore Event</Link> */}
        </div>
      </div>
    </li>
  );
}

export default EventItem;
