# Date Object & Time Formatting

Work with dates, UNIX timestamps, ISO strings, timezone offsets, and modern Intl.DateTimeFormat.


### The JavaScript Date Object
Dates represent a single moment in time measured in milliseconds since the Unix Epoch (January 1, 1970 00:00:00 UTC).

### Important Quirks:
- **0-indexed months**: January is `0`, December is `11`!
- **Days of week**: Sunday is `0`, Saturday is `6`.

### Modern Internationalization API:
Use `Intl.DateTimeFormat` for localized, locale-aware date and time formatting without third-party libraries.
    
