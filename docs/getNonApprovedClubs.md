---
id: get_non_approved_clubs
title: Get Non Approved Clubs
sidebar_label: Get Non Approved Clubs
---

export const Endpoint = ({children, color}) => ( <span style={{
      borderRadius: '2px',
      color: '#E83E8C',
    }}>{children}</span> );

<Endpoint>GET /clubs/toggle </Endpoint>: Obtain all clubs that require admin approval


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
    "message": "retrieved all clubs that require approval",
    "data": [
        {
            "id": 37,
            "name": "Cheese Club"
        },
        {
            "id": 38,
            "name": "Potato Club"
        }
    ]
}
```
#### Failure
```json
{
	"code": -1,
	"message": "please contact an administrator",
	"data": {}
}
```

