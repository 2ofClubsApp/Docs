---
id: login
title: Login
sidebar_label: Login
---

export const Endpoint = ({children, color}) => ( <span style={{
      borderRadius: '2px',
      color: '#E83E8C',
      padding: '0.2rem',
    }}>{children}</span> );

<Endpoint>POST /login</Endpoint>: Login to the app provided the correct user credentials

```
{
    "username": string,
    "password": string,
}
```

### Request
#### Body
```json
{
    "Username": "Chris",
    "Password": "password"
}
```
### Possible Responses
#### Immediate Success
```
token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1OTU4MjQyNzUsImlhdCI6IjIwMjAtMDctMjdUMDA6MjY6MTUuNzg5NTg0Mi0wNDowMCIsInN1YiI6ImNocmlzIn0.5US2_ITKcfgkpEbfsR-gxXbGPFY6XsgJPcGA5qaBD1M
```
#### Failure
```json
{
	"Code": -1,
	"Message": "Username or Password is Incorrect",
	"Data": {}
}
```

