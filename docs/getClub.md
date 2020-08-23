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
		"name": "Fantastic Clubs",
		"email": "FantasticClubs@gmail.com",
		"bio": "Fantastis!",
		"size": 20,
		"tags": [],
		"hosts": [
			{
				"id": 2,
				"name": "Fantastic Event",
				"description": "A very good event",
				"location": "In-Person",
				"fee": 30
			}
		]
	}
}
```
**Note**: Club IDs are accessible through `GET /clubs`
#### Failure
```json
{
	"code": -1,
	"message": "club not found",
	"data": {}
}
```


