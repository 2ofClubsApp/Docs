---
id: logout
title: Logout
sidebar_label: Logout
---

export const Endpoint = ({children, color}) => ( <span style={{
      borderRadius: '2px',
      color: '#E83E8C',
    }}>{children}</span> );

<Endpoint>POST /logout/{"{username}"}</Endpoint>: Logging out a user

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
	"message": "successfully logged out",
	"data": {}
}
```
**Note**: Once logged out, all **access** tokens will be revoked
#### Failure
```json
{
	"code": -1,
	"message": "unable to logout user",
	"data": {}
}
```


