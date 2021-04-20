import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy_data";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../Components/events/results-title";
import { Fragment } from "react";

function FilteredEventsPage() {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear; // turning string to number
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p className="center">Invalid filter, please adjust your value! </p>;
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No events found for the chosen filter</p>;
  }

  const date = new Date(numYear, numMonth - 1)
  return (
    <div>
      <Fragment>
        <ResultsTitle date={date}/>
        <EventList items={filteredEvents} />
      </Fragment>
    </div>
  );
}

export default FilteredEventsPage;
