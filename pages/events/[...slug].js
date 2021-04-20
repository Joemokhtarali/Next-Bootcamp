import { useRouter } from "next/router"
import { getFilteredEvents } from "../../dummy_data"
import EventList from "../../components/events/event-list"
import ResultsTitle from "../../Components/events/results-title"
import { Fragment } from "react"
import Button from "../../Components/ui/button"

function FilteredEventsPage() {
  const router = useRouter()

  const filterData = router.query.slug

  if (!filterData) {
    return <p className="center">Loading...</p>
  }

  const filteredYear = filterData[0]
  const filteredMonth = filterData[1]

  const numYear = +filteredYear // turning string to number
  const numMonth = +filteredMonth

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <p className="center">Invalid filter, please adjust your value! </p>
        <br/>
        <div className="center">
          <Button link="/events">All Events</Button>
        </div>
      </Fragment>
    )
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  })

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <p>No events found for the chosen filter</p>
        <div className="center">
          <Button link="/events">All Events</Button>
        </div>
      </Fragment>
    )
  }

  const date = new Date(numYear, numMonth - 1)
  return (
    <div>
      <Fragment>
        <ResultsTitle date={date} />
        <EventList items={filteredEvents} />
      </Fragment>
    </div>
  )
}

export default FilteredEventsPage
