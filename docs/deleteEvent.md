---
id: delete_event
title: Delete
sidebar_label: Delete
---

export const Endpoint = ({children, color}) => ( <span style={{
      borderRadius: '2px',
      color: '#E83E8C',
    }}>{children}</span> );

<Endpoint>Delete /clubs/{"{clubID}"}/events/{"eventID"}</Endpoint>: Creating a club event <br></br>

**Note**: Only a club owner or club managers can delete a club event

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
	"Code": 1,
	"Message": "Event Deleted",
	"Data": {}
}
```
#### Failure
```json
{
	"Code": -1,
	"Message": "User Not Found",
	"Data": {}
}
```
```json
{
	"Code": -1,
	"Message": "Club Not Found",
	"Data": {}
}
```
```json
{
	"Code": -1,
	"Message": "Event Not Found",
	"Data": {}
}
```
```json
{
	"Code": -1,
	"Message": "Forbidden",
	"Data": {}
}
```



