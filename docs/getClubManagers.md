---
id: get_club_managers
title: Get Club Managers
sidebar_label: Get Club Managers
---

export const Endpoint = ({children, color}) => ( <span style={{
      borderRadius: '2px',
      color: '#E83E8C',
    }}>{children}</span> );

<Endpoint>GET /clubs/{"{clubID}"}/manages </Endpoint>: Obtaining all club managers (Not including the club owner)

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
    "message": "retrieved all club managers",
    "data": [
        {
            "id": 893,
            "username": "hiimchrislim"
        },
        {
            "id": 900,
            "username": "bobby"
        }
    ]
}
```
#### Failure
```json
{
	"code": -1,
	"message": "club not found",
	"data": {}
}
```



