---
id: get_user
title: Get
sidebar_label: Get
---

export const Endpoint = ({children, color}) => ( <span style={{
      borderRadius: '2px',
      color: '#E83E8C',
      padding: '0.2rem',
    }}>{children}</span> );

<Endpoint>GET /users/{"{username}"} </Endpoint>: Obtain user information

### Request
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
	"Message": "User Found",
	"Data": {
		"Manages": [],
		"Tags": []
	}
}
```
#### Failure
```json
{
	"Code": -1,
	"Message": "Forbidden",
	"Data": {}
}
```

