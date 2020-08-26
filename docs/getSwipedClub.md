---
id: get_swiped_clubs
title: Get Swiped Clubs
sidebar_label: Get Swiped Clubs
---

export const Endpoint = ({children, color}) => ( <span style={{
      borderRadius: '2px',
      color: '#E83E8C',
    }}>{children}</span> );

<Endpoint>GET /users/{"{username}"}/clubs/swipe </Endpoint>: Obtains all clubs that were swiped

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
    "message": "obtained all swiped clubs",
    "data": [
        {
            "id": 200,
            "name": "Amazing Club"
        },
        {
            "id": 201,
            "name": "Extraordinary Club"
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




