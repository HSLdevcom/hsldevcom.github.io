---
title: GTFS-RT feeds
---

HSL provides [GTFS-RT](https://developers.google.com/transit/gtfs-realtime) feeds for service alerts, trip updates and vehicle positions that complement the static GTFS data.

Note that if you are not using the static GTFS package, you most likely want to use [Digitransit APIs](https://digitransit.fi/en/developers/) which provide the same data in a more ready-to-use format.

## Endpoints

The API supports only GET requests to these endpoints. There is are no parameters for filtering data etc.

| Data type         | Endpoint
|-------------------|----------------
| Service alerts    | `https://realtime.hsl.fi/realtime/service-alerts/v2/hsl`
| Trip updates      | `https://realtime.hsl.fi/realtime/trip-updates/v2/hsl`
| Vehicle positions | `https://realtime.hsl.fi/realtime/vehicle-positions/v2/hsl`

### Update intervals

GTFS-RT feeds are updated with the following intervals:

| Data type         | Update interval
|-------------------|----------------
| Service alerts    | 5 minutes and when new alerts are published
| Trip updates      | 15 seconds
| Vehicle positions | 1 second

## Data format

The feeds are using version 2.0 of GTFS-RT specification. See [Google's documentation](https://developers.google.com/transit/gtfs-realtime/reference) for more details about GTFS-RT format.

The feeds should conform to the GTFS-RT specification, but there are some HSL-specific implementation details that could be useful to know.

### Trip updates

* Trip IDs are not available
  * Combination of `route_id`, `start_date`, `start_time` and `direction_id` should be used to uniquely identify trips
  * This is because trip IDs in the static GTFS feed are not stable and will change when the static feed is regenerated
* `uncertainty` is set to `0` for stops which the vehicle has passed

### Vehicle positions

* Trip IDs are not available (explained in previous section)
* `schedule_relationship` is either `SCHEDULED` (default) or `ADDED` (used for buses when there is more than one bus serving the same trip)
* `occupancy_status` is only available for vehicles that have passenger counting available
  * `NOT_ACCEPTING_PASSENGERS` is never used as a value
* `current_status` depends on whether the vehicle has [HFP events](https://digitransit.fi/en/developers/apis/4-realtime-api/vehicle-positions/#event-types) available
  * If the vehicle has events: `IN_TRANSIT_TO` when vehicle is traveling to the next stop, `INCOMING_AT` when the vehicle has entered the stop radius (i.e. after `DUE` event), `STOPPED_AT` when the vehicle has stopped to the stop (i.e. after `ARS` event)
  * If the vehicle does not have events: only `IN_TRANSIT_TO` and `STOPPED_AT` are used. `STOPPED_AT` is used when the corresponding HFP message contains stop ID, e.g. when the vehicle is close to the stop
* Vehicle `id` is in format `<operator_id>/<vehicle_id>`
  * Operators are listed in the HFP documentation

### Service alerts
* Each `informed_entity` contains a single `agency_id`, `route_id` or `stop_id`
  * `agency_id` is always `HSL` and is present when the alert affects all HSL traffic
