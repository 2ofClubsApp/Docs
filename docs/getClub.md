---
id: get_club
title: Get
sidebar_label: Get Club
---
## Obtain info from a specific club

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

---
## Obtain nonswiped, tag filtered clubs 

<Endpoint>GET /users/{"{username}"}/clubs </Endpoint>: Obtain all clubs that are nonswiped and that are tag filtered <br></br> <br></br>

**Note**: If all tags in a given set are invalid or if an empty set is provided, then the tag filter will be skipped. 

### Example Request
This is a **protected route**, a **valid JWT is required** in the header field

#### Header
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1OTU4MjQyNzUsImlhdCI6IjIwMjAtMDctMjdUMDA6MjY6MTUuNzg5NTg0Mi0wNDowMCIsInN1YiI6ImNocmlzIn0.5US2_ITKcfgkpEbfsR-gxXbGPFY6XsgJPcGA5qaBD1M
```
#### Body
```json
{
    "Tags": ["Arts"]
}
```
### Possible Responses
#### Immediate Success
```json
{
    "code": 1,
    "message": "obtained all filtered non swiped clubs",
    "data": [
        {
            "id": 578,
            "name": "Food Club",
            "email": "foodClub@email.com",
            "bio": "Food!",
            "size": 50,
            "logo": "/photos/club/578",
            "tags": [
                {
                    "id": 10,
                    "name": "Arts",
                    "isActive": true
                }
            ],
            "hosts": []
        }
    ]
}
```

#### Failure
```json
{
	"code": -1,
	"message": "user not found",
	"data": {}
}
```
```json
{
	"code": -1,
	"message": "Forbidden",
	"data": {}
}
```
