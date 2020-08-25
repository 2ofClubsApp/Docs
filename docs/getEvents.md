---
id: get_event
title: Get
sidebar_label: Get
---
## Obtain all user info
export const Endpoint = ({children, color}) => ( <span style={{
      borderRadius: '2px',
      color: '#E83E8C',
    }}>{children}</span> );

<Endpoint>GET /events </Endpoint>: Obtain all events <br></br>

### Possible Responses
#### Immediate Success
```json
{
	"code": 1,
	"message": "all events found",
	"data": {
		"events": [
			{
				"id": 1,
				"name": "Fantastic Event",
				"description": "A very good event",
                "datetime": "2020-08-24T04:10:30-04:00",
				"location": "In-Person",
				"fee": 30
			},
			{
				"id": 2,
				"name": "Another Fantastic Event",
				"description": "Another very good event",
                "datetime": "2020-09-24T04:10:30-04:00",
				"location": "Online",
				"fee": 40
			},
			{
				"id": 3,
				"name": "Cool Event",
				"description": "A very cool event",
                "datetime": "2020-10-24T04:10:30-04:00",
				"location": "In-Person",
				"fee": 50
			}
		]
	}
}
```
**Note**: DateTimes are returned in the RFC3339 format in UTC (with the EST time difference).

---

## Obtain all club hosted events

<Endpoint>GET /clubs/{"{clubID}"}/events </Endpoint>: Obtain all club hosted events

### Possible Responses
#### Immediate Success
```json
{
	"code": 1,
	"message": "all club events found",
	"data": {
		"hosts": [
			{
				"id": 1,
				"name": "Fantastic Event",
				"description": "A very good event",
                "datetime": "2020-08-24T04:10:30-04:00",
				"location": "In-Person",
				"fee": 30
			},
			{
				"id": 2,
				"name": "Another Fantastic Event",
				"description": "Another very good event",
                "datetime": "2020-09-24T04:10:30-04:00",
				"location": "Online",
				"fee": 40
			}
		]
	}
}
```
**Note**: DateTimes are returned in the RFC3339 format in UTC (with the EST time difference).

---
## Obtain a specific event

<Endpoint>GET /events/{"{eventID}"} </Endpoint>: Obtain a specific event by ID

### Possible Responses
#### Immediate Success
```json
{
	"code": 1,
	"message": "event found",
	"data": {
		"id": 1,
		"name": "Fantastic Event",
		"description": "A very good event",
        "datetime": "2020-08-24T04:10:30-04:00",
		"location": "In-Person",
		"fee": 30
	}
}
```
**Note**: DateTimes are returned in the RFC3339 format in UTC (with the EST time difference).

#### Failure
```json
{
	"code": -1,
	"message": "event not found",
	"data": {}
}
```

