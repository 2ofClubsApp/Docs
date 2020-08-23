---
id: update_club_tags
title: Update Club Tags
sidebar_label: Update Club Tags
---

export const Endpoint = ({children, color}) => ( <span style={{
      borderRadius: '2px',
      color: '#E83E8C',
    }}>{children}</span> );

<Endpoint>POST /clubs/{"{clubID}"}/tags </Endpoint>: Updating a clubs tags <br></br>

**Note**: Only a club owner or club managers can update club tags

```json
{
    "Tags": []string
}
```

### Example Request
This is a **protected route**, a **valid JWT is required** in the header field

#### Header
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1OTU4MjQyNzUsImlhdCI6IjIwMjAtMDctMjdUMDA6MjY6MTUuNzg5NTg0Mi0wNDowMCIsInN1YiI6ImNocmlzIn0.5US2_ITKcfgkpEbfsR-gxXbGPFY6XsgJPcGA5qaBD1M
```

#### Body
All previous tags will be replaced with the new updated list of tags <br></br>
**Note**: Tag IDs are available through [GET /tags](get_tags)
```json
{
    "Tags": ["Arts", "Mathematics", "Physics", "Cooking"]
}
```
**Note**: Repeated tags will only count once

### Possible Responses
#### Immediate Success
```json
{
	"code": 1,
	"message": "tags updated",
	"data": {}
}
```
#### Failure
```json
{
	"code": -1,
	"message": "Forbidden",
	"data": {}
}
```
```json
{
	"code": -1,
	"message": "club not found",
	"data": {}
}
```


