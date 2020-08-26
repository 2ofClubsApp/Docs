---
id: update_event
title: Update
sidebar_label: Update
---

export const Endpoint = ({children, color}) => ( <span style={{
      borderRadius: '2px',
      color: '#E83E8C',
    }}>{children}</span> );

<Endpoint>POST /clubs/{"{clubID}"}/events/{"{eventID}"}</Endpoint>: Updating a club event <br></br>

**Note**: Only a club owner or club managers can update a club event

```json
{ 
    "Name": string,
    "Description": string,
    "DateTime": DateTime,
    "Location": string,
    "Fee": number
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
    "Name": "Fantastic Event",
    "Description": "Updated Event Description",
    "DateTime": "2020-09-30T010:40:20+00:00",
    "Location": "In-Person",
    "Fee": 30
}
```

### Parameters
---
**Name** (Required)

Min: 1 character <br></br>
Max: 50 characters

---
**Description** (Required)

Min: 0 characters <br></br>
(**Note**: If no description is specified, then the `Description` field would be left as `"Description": ""`)<br></br>
Max: 300 characters

---
**DateTime** (Required)

**Note**: DateTime must be in the RFC3339 format. (i.e. YYYY-MM-DDTHH-MM-SS+00:00) 

--- 
**Location** (Required)

Min: 0 characters <br></br>
(**Note**: If no location is specified, then the `Location` field would be left as `"Location": ""`)<br></br>
Max: 300 characters

---
**Fee** (Optional)

Value: The event fee must be greater or equal to 0 

**Note**: If the fee value isn't provided, then the event fee will be set to `0`

---
### Possible Responses
#### Immediate Success
```json
{
    "code": 1,
    "message": "successfully updated event",
    "data": {}
}
```
#### Failure
```json
{
    "code": -1,
    "message": "unable to update event",
    "data": {
        "admin": "you must be a manager or owner of the club",
        "name": "event name must be at least 1 character and a maximum of 50 characters",
        "description": "event description must be a maximum of 300 characters or less",
        "datetime": "datetime must be in the RFC3339 format and the event must occur later than the current time",
        "location": "event location must be a maximum of 100 characters or less",
        "fee": "fee must be greater or equal to 0"
    }
}
```
```json
{
    "code": -1,
    "message": "event not found",
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
    "message": "user not found",
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


