---
id: create_tag
title: Create
sidebar_label: Create
---

export const Endpoint = ({children, color}) => ( <span style={{
      borderRadius: '2px',
      color: '#E83E8C',
    }}>{children}</span> );

<Endpoint>POST /tags </Endpoint>: Creating a tag

```json
{
    "Tag": string
}
```

**Note**: Tags with spaces at the front or at the end will be stripped out.
### Example Request
This is an **admin protected route**, a **valid admin JWT is required** in the header field
#### Header
```
token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1OTU4Mjg1MDQsImlhdCI6IjIwMjAtMDctMjdUMDE6MzY6NDQuNDYwMTkyOS0wNDowMCIsInN1YiI6ImFkbWluIn0.jfC8lgQEcEQxUaG0mNibzeX5BD1uUQ7wQdM0LhxHrBQ
```
#### Body
```json
{
    "Tag": "Computer Science"
}
```
### Possible Responses
#### Immediate Success
```json
{
	"Code": 1,
	"Message": "Successfully created tag",
	"Data": {}
}
```
#### Failure
```json
{
	"Code": -1,
	"Message": "Tag already exists",
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


