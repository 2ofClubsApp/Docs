---
id: update_user_tags
title: Update Tags
sidebar_label: Update Tags
---

export const Endpoint = ({children, color}) => ( <span style={{
      borderRadius: '2px',
      color: '#E83E8C',
      padding: '0.2rem',
    }}>{children}</span> );

<Endpoint>POST /users/{"{username}"}/tags </Endpoint>: Updating a users tags

```
{
    "Tags": []string
}
```

### Request
This is a **protected route**, a **valid JWT is required** in the header field

#### Header
```
token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1OTU4MjQyNzUsImlhdCI6IjIwMjAtMDctMjdUMDA6MjY6MTUuNzg5NTg0Mi0wNDowMCIsInN1YiI6ImNocmlzIn0.5US2_ITKcfgkpEbfsR-gxXbGPFY6XsgJPcGA5qaBD1M
```

#### Body
All previous tags will be replaced with the new updated list of tags
```json
{
    "Tags": ["Computer Science", "Arts"]
}
```
**Note**: Repeated tags will only count once

### Possible Responses
#### Immediate Success
```json
{
	"Code": 1,
	"Message": "Tags Updated",
	"Data": {}
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


