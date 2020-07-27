---
id: delete_manager
title: Delete Manager
sidebar_label: Delete Manager
---

export const Endpoint = ({children, color}) => ( <span style={{
      borderRadius: '2px',
      color: '#E83E8C',
    }}>{children}</span> );

<Endpoint>DELETE /clubs/{"{clubID}"}/manages/{"{userName}"} </Endpoint>: Deleting a club manager


### Example Request
This is a **protected route**, a **valid JWT is required** in the header field

#### Header
```
token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1OTU4MjQyNzUsImlhdCI6IjIwMjAtMDctMjdUMDA6MjY6MTUuNzg5NTg0Mi0wNDowMCIsInN1YiI6ImNocmlzIn0.5US2_ITKcfgkpEbfsR-gxXbGPFY6XsgJPcGA5qaBD1M
```

### Possible Responses
#### Immediate Success
```json
{
	"Code": 1,
	"Message": "Successfully removed manager",
	"Data": {}
}
```
#### Failure
```json
{
	"Code": -1,
	"Message": "Unable to remove manager",
	"Data": {}
}
```


