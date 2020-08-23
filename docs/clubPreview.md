---
id: club_preview
title: Club Preview
sidebar_label: Club Preview
---

export const Endpoint = ({children, color}) => ( <span style={{
      borderRadius: '2px',
      color: '#E83E8C',
    }}>{children}</span> );

<Endpoint>GET /clubs/{"{clubID}"}/preview </Endpoint>: Preview a club before approving it


### Example Request
This is an **admin protected route**, a **valid admin JWT is required** in the header field

#### Header
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1OTU4Mjg1MDQsImlhdCI6IjIwMjAtMDctMjdUMDE6MzY6NDQuNDYwMTkyOS0wNDowMCIsInN1YiI6ImFkbWluIn0.jfC8lgQEcEQxUaG0mNibzeX5BD1uUQ7wQdM0LhxHrBQ
```

### Possible Responses
#### Immediate Success
```json
{
    "code": 1,
    "message": "club found",
    "data": {
        "id": 50,
        "name": "Super CLub",
        "email": "SuperClub@email.com",
        "bio": "Super!",
        "size": 20,
        "tags": [],
        "hosts": []
    }
}
```
#### Failure
```json
{
	"code": -1,
	"message": "sorry, this club is already active",
	"data": {}
}
```
```json
{
	"code": -1,
	"message": "club not found",
	"data": {}
}
```
```json
{
	"code": -1,
	"message": "please contact an administrator",
	"data": {}
}
```

