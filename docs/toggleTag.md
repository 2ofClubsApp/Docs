---
id: toggle_tag
title: Toggle Tag
sidebar_label: Toggle Tag
---

export const Endpoint = ({children, color}) => ( <span style={{
      borderRadius: '2px',
      color: '#E83E8C',
    }}>{children}</span> );

<Endpoint>POST /toggle/tags/{"{tagName}"} </Endpoint>: Toggling a tag on/off

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
	"message": "tag toggled",
	"data": {}
}
```
#### Failure
```json
{
	"code": -1,
	"message": "tag doesn't exist",
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

