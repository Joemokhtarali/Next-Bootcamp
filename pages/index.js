import Head from 'next/head'
import styles from "../styles/Home.module.css";
import { getFeaturedEvents } from "../helpers/api_util";
import EventList from "../components/events/event-list";


function HomePage(props) {
  // const featuredEvents = getFeaturedEvents();

  return ( 
    <div className={styles.container}>
      <Head>
        <title>Events Page NextJS</title>
        <meta name='description' content='I created this app using NextJS' />
      </Head>
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
    revalidate: 1800
  };
}

export default HomePage;
