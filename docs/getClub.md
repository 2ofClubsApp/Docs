---
id: get_club
title: Get Club
sidebar_label: Get Club
---

export const Endpoint = ({children, color}) => ( <span style={{
      borderRadius: '2px',
      color: '#E83E8C',
    }}>{children}</span> );

<Endpoint>GET /clubs/{"{clubID}"} </Endpoint>: Getting a club and its associated information


### Possible Responses
#### Immediate Success
```json
{
	"code": 1,
	"message": "club found",
	"data": {
		"id": 4,
		"name": "Fantastic Club",
		"email": "FantasticClub@email.com",
		"bio": "Fantastic!",
		"size": 20,
        "logo": "/photos/club/4",
		"tags": [],
		"hosts": [
			{
				"id": 2,
				"name": "Fantastic Event",
				"description": "A very good event",
                "datetime": "2020-08-24T04:10:30-04:00",
				"location": "In-Person",
				"fee": 30
			}
		]
	}
}
```
**Note**: DateTimes are returned in the RFC3339 format in UTC (with the EST time difference).

**Note**: Club IDs are accessible through `GET /clubs`


#### Failure
```json
{
	"code": -1,
	"message": "club not found",
	"data": {}
}
```


