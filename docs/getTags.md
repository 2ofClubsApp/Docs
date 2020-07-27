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
	"Code": 1,
	"Message": "Tags Found",
	"Data": {
		"Tags": [
            {
                "ID": 1,
                "Name": "Computer Science"
            },
            {
                "ID": 2,
                "Name": "Mathematics"
            }            
		]
	}
}
```

