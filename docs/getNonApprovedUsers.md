---
id: get_non_approved_users
title: Get Non Approved Users
sidebar_label: Get Non Approved Users
---

export const Endpoint = ({children, color}) => ( <span style={{
      borderRadius: '2px',
      color: '#E83E8C',
    }}>{children}</span> );

<Endpoint>GET /users/toggle </Endpoint>: Obtain all users that require admin approval


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
    "message": "retrieved all users that require approval",
    "data": [
        {
            "id": 197,
            "name": "Sam"
        },
        {
            "id": 800,
            "name": "Joe"
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

