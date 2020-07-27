---
id: get_club
title: Get
sidebar_label: Get
---

export const Endpoint = ({children, color}) => ( <span style={{
      borderRadius: '2px',
      color: '#E83E8C',
      padding: '0.2rem',
    }}>{children}</span> );

<Endpoint>GET /clubs/{"{clubName}"} </Endpoint>: Getting a club and its associated information


### Possible Responses
#### Immediate Success
```json
{
	"Code": 1,
	"Message": "Club Found",
	"Data": {
		"Name": "Fantastic Club",
		"Email": "FantasticClub@gmail.com",
		"Bio": "Fantastic!",
		"Size": 20,
		"Tags": []
	}
}
```
#### Failure
```json
{
	"Code": -1,
	"Message": "Club Not Found",
	"Data": {}
}
```


