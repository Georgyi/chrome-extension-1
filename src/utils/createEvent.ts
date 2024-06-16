export const createEvent = (event: string) =>
  new Event(event, {
    bubbles: true,
    cancelable: true,
  });
