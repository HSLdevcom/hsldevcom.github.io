---
title: Beacon API
---

HSL Beacon API can be used to fetch locations of [Bluetooth beacons](https://en.wikipedia.org/wiki/Bluetooth_low_energy_beacon) that have been installed to vehicles and stops in HSL area.

The API is a simple REST interface that returns data in JSON format.

## Endpoint

`https://dev.hsl.fi/beacons`

The API supports only one type of request that is HTTP GET to above endpoint. There are no query parameters for filtering etc.

### Authentication

The API is currently publicly available and requires no authentication.

Note that in the future the API will be using API management and requiring API keys to use.

### Usage

Data returned by the API should be cached and subsequent queries to the API should use HTTP header `If-Modified-Since` as beacon data is rarely updated.

### Response

The API returns an JSON array that contains beacon data.  
Each beacon has following fields:

| Field            | Type      | Description |
|------------------|-----------|-------------|
| `serial`         | String    | Serial number of the beacon. Unique for each beacon.
| `uuid`           | String    | UUID of the beacon. All HSL beacons use shared UUID.<br/>Note that `uuid` does not contain dashes.
| `major`          | String    | Major value identifying the beacon in hexadecimal format, e.g. `"0015"`. Major values are shared between multiple beacons. See descriptions for major values [below](#major-values).
| `minor`          | String    | Minor value identifying the beacon in hexadecimal format, e.g. `"012C"`. Minor value can be shared between multiple beacons with different major values.
| `location`       | Integer   | Location type of the beacon. Possible values: <ul><li>`1` = vehicle</li><li>`2` = stop</li></ul>
| `status`         | Integer   | Status of the beacon. Status of the beacon is always `2` (active) as the public API returns only active beacons.
| `stop`           | Integer   | ID of the stop where the beacon is installed. Corresponds to `stop_id` in GTFS and `Stop.gtfsId` in [Digitransit API](https://digitransit.fi/en/developers/apis/1-routing-api/stops/).<br/>`null` if location type is `1`.<br/><br/>**Note:** stop ID can also refer to a station, which have a different query in the Digitransit API.
| `operator`       | String    | Operator ID of the vehicle where the beacon is installed. Corresponds to `operator_id` in [HFP API](https://digitransit.fi/en/developers/apis/4-realtime-api/vehicle-positions/).<br/>`null` if location type is `2`.
| `vehicle_number` | String    | Vehicle number of the vehicle where the beacon is installed. Corresponds to `vehicle_number` in [HFP API](https://digitransit.fi/en/developers/apis/4-realtime-api/vehicle-positions/).<br/>`null` if location type is `2`.
| `responsible`    | String    | ID of the organization responsible for the beacon.
| `modified_on`    | Integer   | Timestamp (in milliseconds) when the beacon data was modified.

Note that currently the response also contains fields `note`, `created_by`, `created_on` and `modified_by` that always have `null` value. These fields will be removed from the response later.

#### Major values

Major value of a beacon depends on where it is installed. Note that all major values are not currently in use.

List of major values:

| Major  | Description    |
|--------|----------------|
| `0001` | Stop
| `0002` | Tram
| `0003` | Metro
| `0004` | Train
| `0005` | Train station
| `0007` | Ferry
| `0010` | Bus
| `0011` | Bus
| `0012` | Bus
| `0013` | Bus
| `0014` | Bus
| `0015` | Bus
| `0020` | Test beacon

### Identifying beacons

Beacons are identified by combination of their `uuid`, `major` and `minor` properties.  

Libraries such as [Core Location (iOS)](https://developer.apple.com/documentation/corelocation/) and [Android Beacon Library](https://altbeacon.github.io/android-beacon-library/) can be used to detect nearby beacons, which can then be matched to a corresponding beacon from the API with their `uuid`, `major` and `minor` values.

## FAQ

### Which stops have beacons installed?

> Currently beacons have been installed to most stops in Helsinki. There are no beacons installed to stops in other cities.

### Which vehicles have beacons installed?

> Currently beacons have been installed to most buses and commuter trains and all trams and metros. Beacons have been also installed to Suomenlinna ferries, but ferries don't produce HFP data, so it is not possible to match ferry beacon data with HFP data.

## Terms of use

Beacon data is licensed under [Creative Commons BY 4.0](https://creativecommons.org/licenses/by/4.0/). When using the data, please add an attribution where you mention the licensee and the year when the data was fetched (e.g. © Helsinki Region Transport 2019).
