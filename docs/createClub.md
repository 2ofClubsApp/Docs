---
id: create_club
title: Create
sidebar_label: Create
---

export const Endpoint = ({children, color}) => ( <span style={{
      borderRadius: '2px',
      color: '#E83E8C',
    }}>{children}</span> );

<Endpoint>POST /clubs </Endpoint>: Creating a club owned by the given user provided by the JWT

```json
{
    "Name": string,
    "Email": string,
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
    "Name": "Fantastic Club",
    "Email": "FantasticClub@gmail.com",
    "Bio": "Fantastic!",
    "Size": 20
}
```

### Parameters
---
**Name** (Required, Unique)

Min: 3 characters <br></br>
Max: 50 characters

---
**Email** (Required, Unique)

Emails must be valid (i.e. Must include @ and a valid TLD)

---
**Bio** (Required)

Min: 0 characters (**Note**: If 0, the `Bio` field would be left as `"Bio": ""`)<br></br>
Max: 300 characters

---
**Size** (Required)

Value: Club size must be greater than 0 

---
### Possible Responses
#### Immediate Success
```json
{
	"Code": 1,
	"Message": "Club successfully created",
	"Data": {}
}
```
#### Failure
```json
{
	"Code": -1,
	"Message": "Unable to create the Club",
	"Data": {}
}
```



