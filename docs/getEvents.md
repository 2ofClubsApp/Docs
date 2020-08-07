---
id: get_event
title: Get
sidebar_label: Get
---
## Obtain all user info
export const Endpoint = ({children, color}) => ( <span style={{
      borderRadius: '2px',
      color: '#E83E8C',
    }}>{children}</span> );

<Endpoint>GET /events </Endpoint>: Obtain all events


### Possible Responses
#### Immediate Success
```json
{
	"Code": 1,
	"Message": "All Events Found",
	"Data": {
        "ID": 1,
		"Name": "Fantastic Event",
		"Description": "This is a fantastic event!",
        "Fee": 0
	}
}
```
---

## Obtain all club hosted events

<Endpoint>GET /clubs/{"{clubID}"}/events </Endpoint>: Obtain all club hosted events

### Possible Responses
#### Immediate Success
```json
{
	"Code": 1,
	"Message": "All Events Found",
	"Data": {
        "Hosts": [
            {
                "ID": 1,
        		"Name": "Fantastic Event",
        		"Description": "This is a fantastic event!",
                "Fee": 0
            },
            {
                "ID": 2,
        		"Name": "Another Fantastic Event",
        		"Description": "This is another fantastic event!",
                "Fee": 0
            }
        ]
	}
}
```

---
## Obtain a specific event

<Endpoint>GET /events/{"{eventID}"} </Endpoint>: Obtain a specific event by ID

### Possible Responses
#### Immediate Success
```json
{
	"Code": 1,
	"Message": "Event Found",
	"Data": {
        "Hosts": [
            {
                "ID": 1,
        		"Name": "Fantastic Event",
        		"Description": "This is a fantastic event!",
                "Fee": 0
            }
        ]
	}
}
```
#### Failure
```json
{
	"Code": -1,
	"Message": "Event not found",
	"Data": {}
}
```

