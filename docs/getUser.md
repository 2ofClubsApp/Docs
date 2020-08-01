---
id: get_user
title: Get
sidebar_label: Get
---
## Obtain all user info
export const Endpoint = ({children, color}) => ( <span style={{
      borderRadius: '2px',
      color: '#E83E8C',
    }}>{children}</span> );

<Endpoint>GET /users/{"{username}"} </Endpoint>: Obtain all user information

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
	"Message": "User Found",
	"Data": {
        "Email": "",
		"Manages": [],
		"Tags": [],
        "Attends": []
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
---

## Obtain user managed clubs

<Endpoint>GET /users/{"{username}"}/manages </Endpoint>: Obtain all clubs that a user manages

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
	"Message": "User Found",
	"Data": {
		"Manages": []
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

---
## Obtain user attended events

<Endpoint>GET /users/{"{username}"}/events </Endpoint>: Obtain all events that a user will attend

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
	"Message": "User Found",
	"Data": {
		"Attends": []
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

