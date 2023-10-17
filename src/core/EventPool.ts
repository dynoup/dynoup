interface EventPoolProps {
  eventPool: EventType;
}

type EventType = {
  [eventKey: string]: {
    eventName: string;
    eventFunction: any;
  };
};

export default class EventPool implements EventPoolProps {
  eventPool: EventType;
  constructor() {
    this.eventPool = {};
  }
  setEvent(eventKey: string, eventName: string, eventFunction: any) {
    this.eventPool[eventKey] = { eventName, eventFunction };
  }
}
