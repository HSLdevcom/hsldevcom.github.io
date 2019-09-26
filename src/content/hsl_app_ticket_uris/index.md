---
title: HSL app ticket URIs
---

[HSL app](https://www.hsl.fi/en/app) can be opened to ticket purchasing view with special URIs.

## Ticket URI format

`hslapp://ticketWizard/zoneTicketWizard/:ticketType/:zoneId`

where:
* `ticketType` can be either `TICKET_TYPE_SINGLE_TICKET`, `TICKET_TYPE_DAY_TICKET`, `TICKET_TYPE_SEASONAL_TICKET`
* `zoneId` is ID of the zone where the ticket is valid, e.g. `AB`
  * Zone IDs can be queried from [Digitransit API](https://api.digitransit.fi/graphiql/hsl?query=%257B%250A%2520%2520ticketTypes%2520%257B%250A%2520%2520%2520%2520fareId%250A%2520%2520%2520%2520zones%250A%2520%2520%2520%2520price%250A%2520%2520%2520%2520currency%250A%2520%2520%257D%250A%257D)
      * Note that Digitransit API returns zone IDs with `HSL:` prefix