import { CurrentEvent } from '../../../dto/currentEvent';

export default function filterByTitle(filterValue: string, events: CurrentEvent []): CurrentEvent [] {
  return events.filter(event => event.title.indexOf(filterValue) >= 0);
}
