---
id: create_tag
title: Create Tag
sidebar_label: Create Tag
---

export const Endpoint = ({children, color}) => ( <span style={{
      borderRadius: '2px',
      color: '#E83E8C',
    }}>{children}</span> );

<Endpoint>POST /tags </Endpoint>: Creating a tag

```json
{
    "Name": string
}
```

**Note**: Tags with spaces at the front or at the end will be stripped out.
### Example Request
This is an **admin protected route**, a **valid admin JWT is required** in the header field
#### Header
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1OTU4Mjg1MDQsImlhdCI6IjIwMjAtMDctMjdUMDE6MzY6NDQuNDYwMTkyOS0wNDowMCIsInN1YiI6ImFkbWluIn0.jfC8lgQEcEQxUaG0mNibzeX5BD1uUQ7wQdM0LhxHrBQ
```
#### Body
```json
{
    "Name": "Computer Science"
}
```
### Possible Responses
**Note**: Tags that are created would be active by default (`is_active: TRUE`). <br></br>
See [Toggle](/toggle) to deactivate a tag (`is_active: FALSE`)
#### Immediate Success
```json
{
	"code": 1,
	"message": "successfully created tag",
	"data": {}
}
```
#### Failure
```json
{
	"code": -1,
	"message": "tag already exists",
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


