---
id: update_club_tags
title: Update Tags
sidebar_label: Update Tags
---

export const Endpoint = ({children, color}) => ( <span style={{
      borderRadius: '2px',
      color: '#E83E8C',
    }}>{children}</span> );

<Endpoint>POST /clubs/{"{clubID}"}/tags </Endpoint>: Updating a club's tags

```json
{
    "Tags": []int
}
```

### Example Request
This is a **protected route**, a **valid JWT is required** in the header field

#### Header
```
token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1OTU4MjQyNzUsImlhdCI6IjIwMjAtMDctMjdUMDA6MjY6MTUuNzg5NTg0Mi0wNDowMCIsInN1YiI6ImNocmlzIn0.5US2_ITKcfgkpEbfsR-gxXbGPFY6XsgJPcGA5qaBD1M
```

#### Body
All previous tags will be replaced with the new updated list of tags <br></br>
**Note**: Tag IDs are available through [GET /tags](get_tags)
```json
{
    "Tags": [1, 2, 3, 4]
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


