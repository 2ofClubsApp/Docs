---
id: toggle
title: Toggle
sidebar_label: Toggle
---

export const Endpoint = ({children, color}) => ( <span style={{
      borderRadius: '2px',
      color: '#E83E8C',
      padding: '0.2rem',
    }}>{children}</span> );

<Endpoint>POST /tags/{"{tagName}"}/toggle </Endpoint>: Toggling a tag on/off

### Request
This is an **admin protected route**, a **valid admin JWT is required** in the header field
#### Header
```
token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1OTU4Mjg1MDQsImlhdCI6IjIwMjAtMDctMjdUMDE6MzY6NDQuNDYwMTkyOS0wNDowMCIsInN1YiI6ImFkbWluIn0.jfC8lgQEcEQxUaG0mNibzeX5BD1uUQ7wQdM0LhxHrBQ
```

### Possible Responses
#### Immediate Success
```json
{
	"Code": 1,
	"Message": "Tag Updated",
	"Data": {}
}
```
#### Failure
```json
{
	"Code": -1,
	"Message": "Tag doesn't exist",
	"Data": {}
}
```
```json
{
	"Code": -1,
	"Message": "Error Updating Tag.",
	"Data": {}
}
```
```json
{
	"Code": -1,
	"Message": "Please contact an administrator.",
	"Data": {}
}
```

