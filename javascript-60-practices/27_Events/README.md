# Events & Event Objects

Handle user interactions: clicks, keyboard shortcuts, inputs, form submits, and event objects.


### Browser Events
Events represent signals that something occurred (user clicked, typed, scrolled, or loaded).

### The Event Object (`e` / `event`):
Passed automatically to event handlers with rich contextual metadata:
- `e.target`: The exact element that triggered the event.
- `e.currentTarget`: The element to which the event listener is attached.
- `e.preventDefault()`: Cancels default browser behavior (e.g. stops form submit page refresh).
- `e.stopPropagation()`: Halts event bubbling up the DOM tree.
    
