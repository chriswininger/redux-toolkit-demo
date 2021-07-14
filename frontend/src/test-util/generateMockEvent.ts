import { CurrentEvent } from '../dto/currentEvent';
import faker from 'faker';

export function generateMockEvents(): CurrentEvent [] {
  return [
    generateMockEvent(),
    generateMockEvent(),
    generateMockEvent()
  ];
}

export function generateMockEvent(): CurrentEvent {
  return {
    id: faker.datatype.uuid(),
    title: faker.lorem.sentence(),
    briefDescription: faker.lorem.sentence(),
    slug: faker.lorem.slug(3)
  }
}
