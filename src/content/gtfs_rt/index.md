---
title: GTFS-RT feeds
---

HSL provides [GTFS-RT](https://developers.google.com/transit/gtfs-realtime) feeds for service alerts, trip updates and vehicle positions that complement the static GTFS data. The feeds are using version 2.0 of GTFS-RT specification. See [Google's documentation](https://developers.google.com/transit/gtfs-realtime/reference) for more details.

Note that if you are not using the static GTFS package, you most likely want to use [Digitransit APIs](https://digitransit.fi/en/developers/) which provide the same data in a more ready-to-use format.

## Endpoints

* Service alerts:  
`https://api.digitransit.fi/realtime/service-alerts/v2/hsl`
* Trip updates:  
`https://api.digitransit.fi/realtime/trip-updates/v2/hsl`
* Vehicle positions:  
`https://api.digitransit.fi/realtime/vehicle-positions/v2/hsl`