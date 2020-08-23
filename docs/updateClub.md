---
id: update_club
title: Update
sidebar_label: Update
---

export const Endpoint = ({children, color}) => ( <span style={{
      borderRadius: '2px',
      color: '#E83E8C',
    }}>{children}</span> );

<Endpoint>POST /clubs/{"{clubID}"} </Endpoint>: Updating a club

**Note**: Only a club owner or club managers can update a club
```json
{
    "Bio": string,
    "Size": int
}
```

### Example Request
This is a **protected route**, a **valid JWT is required** in the header field
#### Header
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1OTU4MjQyNzUsImlhdCI6IjIwMjAtMDctMjdUMDA6MjY6MTUuNzg5NTg0Mi0wNDowMCIsInN1YiI6ImNocmlzIn0.5US2_ITKcfgkpEbfsR-gxXbGPFY6XsgJPcGA5qaBD1M
```

#### Body
```json
{
    "Bio": "Updated Club biography!",
    "Size": 20
}
```

### Parameters
---

**Bio** (Required)

Min: 1 character <br></br>
Max: 300 characters

---
**Size** (Required)

Value: Club size must be greater than 0 

---
### Possible Responses
#### Immediate Success
```json
{
	"code": 1,
	"message": "successfully updated club",
	"data": {}
}
```
#### Failure
```json
{
	"code": -1,
	"message": "unable to update club",
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
```json
{
	"code": -1,
	"message": "Forbidden",
	"data": {}
}
```


