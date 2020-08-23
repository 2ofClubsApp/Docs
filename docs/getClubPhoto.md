---
id: get_club_photo
title: Get Club Photo
sidebar_label: Get Club Photo
---

export const Endpoint = ({children, color}) => ( <span style={{
      borderRadius: '2px',
      color: '#E83E8C',
    }}>{children}</span> );

<Endpoint>GET /photos/clubs/{"{clubID}"} </Endpoint>: Getting a club's photo


### Possible Responses
#### Immediate Success
The associate club photo will be displayed as a .jpg or .png
#### Failure
```json
{
	"code": -1,
	"message": "unable to find a photo for the club",
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


