export async function getAllEvents() {
  console.log('data')
  const response = await fetch(
    "https://react-meetup-59fc3-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();

  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key]
    });
  }
  return events 
}

export async function getFeaturedEvents() {
    const allEvents = await getAllEvents()
    return allEvents.filter((event) => event.isFeatured);
  }
