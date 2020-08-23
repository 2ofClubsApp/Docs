---
id: get_user
title: Get
sidebar_label: Get
---
## Obtain all user info
export const Endpoint = ({children, color}) => ( <span style={{
      borderRadius: '2px',
      color: '#E83E8C',
    }}>{children}</span> );

<Endpoint>GET /users/{"{username}"} </Endpoint>: Obtain all user information

### Example Request
This is a **protected route**, a **valid JWT is required** in the header field

#### Header
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1OTU4MjQyNzUsImlhdCI6IjIwMjAtMDctMjdUMDA6MjY6MTUuNzg5NTg0Mi0wNDowMCIsInN1YiI6ImNocmlzIn0.5US2_ITKcfgkpEbfsR-gxXbGPFY6XsgJPcGA5qaBD1M
```

### Possible Responses
#### Immediate Success
```json
{
    "code": 1,
    "message": "user found",
    "data": {
        "email": "example@email.com",
        "manages": [
            {
                "id": 1,
                "name": "Cool Club",
                "email": "coolClub@email.com",
                "bio": "Cool Club",
                "size": 15,
                "tags": [
                    {
                        "id": 4,
                        "name": "Computer Science",
                        "isActive": true
                    },
                    {
                        "id": 10,
                        "name": "Arts",
                        "isActive": true
                    }
                ],
                "hosts": [
                    {
                        "id": 40,
                        "name": "Annual Barbecue",
                        "description": "Burgers, Hotdogs and more!",
                        "location": "The Park",
                        "fee": 10
                    }
                ],
                "isOwner": true
            },
            {
                "id": 2,
                "name": "Club2",
                "email": "club2@email.com",
                "bio": "Club2!",
                "size": 20,
                "tags": [],
                "hosts": [],
                "isOwner": false
            }
        ],
        "tags": [
            {
                "id": 1,
                "name": "Mathematics",
                "isActive": true
            },
            {
                "id": 3,
                "name": "Physics",
                "isActive": true
            },
            {
                "id": 10,
                "name": "Arts",
                "isActive": true
            }
        ],
        "attends": [
            {
                "id": 40,
                "name": "Annual Barbecue",
                "description": "Burgers, Hotdogs and more!",
                "location": "The Park",
                "fee": 10
            },
            {
                "id": 41,
                "name": "Cheese Festival",
                "description": "Cheese Cheese Cheese!",
                "location": "Cheeseland",
                "fee": 0
            }
        ]
    }
}
```
#### Failure
```json
{
	"code": -1,
	"message": "Forbidden",
	"data": {}
}
```
---

## Obtain user managed clubs

<Endpoint>GET /users/{"{username}"}/manages </Endpoint>: Obtain all clubs that a user manages

### Example Request
This is a **protected route**, a **valid JWT is required** in the header field

#### Header
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1OTU4MjQyNzUsImlhdCI6IjIwMjAtMDctMjdUMDA6MjY6MTUuNzg5NTg0Mi0wNDowMCIsInN1YiI6ImNocmlzIn0.5US2_ITKcfgkpEbfsR-gxXbGPFY6XsgJPcGA5qaBD1M
```

### Possible Responses
#### Immediate Success
```json
{
	"code": 1,
	"message": "user found",
	"data": {
		"manages": [
			{
				"id": 4,
				"name": "Fantastic Club",
				"email": "FantasticClub@email.com",
				"bio": "Fantastic!",
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
				],
				"isOwner": true
			}
		]
	}
}
```
#### Failure
```json
{
	"code": -1,
	"message": "Forbidden",
	"data": {}
}
```

---
## Obtain user attended events

<Endpoint>GET /users/{"{username}"}/attends </Endpoint>: Obtain all events that a user will attend

### Example Request
This is a **protected route**, a **valid JWT is required** in the header field

#### Header
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1OTU4MjQyNzUsImlhdCI6IjIwMjAtMDctMjdUMDA6MjY6MTUuNzg5NTg0Mi0wNDowMCIsInN1YiI6ImNocmlzIn0.5US2_ITKcfgkpEbfsR-gxXbGPFY6XsgJPcGA5qaBD1M
```

### Possible Responses
#### Immediate Success
```json
{
	"code": 1,
	"message": "user found",
	"data": {
		"attends": [
            {
                "id": 40,
                "name": "Annual Barbecue",
                "description": "Burgers, Hotdogs and more!",
                "location": "The Park",
                "fee": 10
            }	
        ]
	}
}
```
#### Failure
```json
{
	"code": -1,
	"message": "Forbidden",
	"data": {}
}
```

