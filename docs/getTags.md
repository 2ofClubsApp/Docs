---
id: get_tags
title: Get
sidebar_label: Get
---

export const Endpoint = ({children, color}) => ( <span style={{
      borderRadius: '2px',
      color: '#E83E8C',
    }}>{children}</span> );

<Endpoint>GET /tags </Endpoint>: Get all tags

### Possible Responses
#### Immediate Success
```json
{
	"code": 1,
	"message": "tags found",
	"data": [
		{
			"id": 1,
			"name": "Computer Sciences",
			"isActive": true
		},
		{
			"id": 2,
			"name": "Mathematics",
			"isActive": false
		},
		{
			"id": 3,
			"name": "Chemistry",
			"isActive": false
		}
	]
}
```

