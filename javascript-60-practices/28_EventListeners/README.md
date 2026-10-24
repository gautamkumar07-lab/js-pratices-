# Event Listeners & Event Delegation

addEventListener, removal cleanup, bubbling/capturing phases, and high-performance event delegation.


### Event Propagation Phases:
1. **Capturing Phase**: Travels down from `window` to target.
2. **Target Phase**: Reaches the target element.
3. **Bubbling Phase**: Bubbles back up to `window` (default phase for listeners).

### Event Delegation Pattern:
Instead of attaching 1,000 listeners to 1,000 list items, attach **one single listener** to the parent container and inspect `e.target.closest('selector')`!
    
