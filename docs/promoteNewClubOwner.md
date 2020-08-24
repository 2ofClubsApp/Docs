---
id: promote_new_club_owner
title: Promote New Club Owner
sidebar_label: Promote New Club Owner
---

export const Endpoint = ({children, color}) => ( <span style={{
      borderRadius: '2px',
      color: '#E83E8C',
    }}>{children}</span> );

<Endpoint>POST /clubs/{"{clubID}"}/promote/{"{username}"} </Endpoint>: Promoting a new club owner and demoting the current one <br></br><br></br>

**Note**: Once the current owner is demoted to a manager, they can now leave the club. <br></br>
See [Leave Club](leave_club) for more info.

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
	"message": "successfully promoted new owner",
	"data": {}
}
```

#### Failure
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
	"message": "user not found",
	"data": {}
}
```
```json
{
	"code": -1,
	"message": "you must be the owner of the club in order to promote a new owner",
	"data": {}
}
```
```json
{
	"code": -1,
	"message": "the user you're trying to promote must be a club manager",
	"data": {}
}
```
```json
{
	"code": -1,
	"message": "you can't promote yourself to be the club owner if you're already the owner",
	"data": {}
}
```


