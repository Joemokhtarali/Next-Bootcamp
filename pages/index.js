import styles from "../styles/Home.module.css";
import { getFeaturedEvents } from "../helpers/api_util";
import EventList from "../components/events/event-list";


function HomePage(props) {
  // const featuredEvents = getFeaturedEvents();

  return ( 
    <div className={styles.container}>
      <EventList items={props.events} />
    </div>
  );
}
 
export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents()
  
  return {
    props: {
      events: featuredEvents
    },
  };
}

export default HomePage;
