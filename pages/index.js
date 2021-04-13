import styles from '../styles/Home.module.css'
import { getFeaturedEvents } from "../dummy_data";


function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div className={styles.container}>
      {/* <ul>
        { getFeaturedEvents.map((event) => <EventPage />
        )}
      </ul> */}
    </div>
  )
}
export default HomePage