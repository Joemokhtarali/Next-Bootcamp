import classes from "../../styles/event-item.module.css";
import Link from "next/link";
import Button from "../ui/button";

function EventItem(props) {
  const { title, image, date, location, id } = props.event;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(",", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button>Explore Event</Button>
          {/* <Link href={exploreLink}></Link> */}
        </div>
      </div>
    </li>
  );
}

export default EventItem;
