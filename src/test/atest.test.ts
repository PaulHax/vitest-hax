globalThis.Event = window.Event
const EVENT_TYPE = 'asdf'
class TestEventTarget extends EventTarget {}
test('Adds an event listener and triggers it when calling dispatchEvent().', () => {
  const eventTarget = new TestEventTarget()
  let recievedEvent: Event = null
  const listener = (event: Event): void => {
    recievedEvent = event
  }
  const dispatchedEvent = new Event(EVENT_TYPE)
  eventTarget.addEventListener(EVENT_TYPE, listener)
  eventTarget.dispatchEvent(dispatchedEvent)
  expect(recievedEvent).toBe(dispatchedEvent)
})