---
id: upload_tags
title: Upload Tags
sidebar_label: Upload Tags
---

export const Endpoint = ({children, color}) => ( <span style={{
      borderRadius: '2px',
      color: '#E83E8C',
    }}>{children}</span> );

<Endpoint>POST /upload/tags </Endpoint>: Uploading a file containing multiple tags <br></br>

```json
file: {FileName}.txt
```
**Note**: Repeated tags won't be created again

### Example Request
This is an **admin protected route**, a **valid admin JWT is required** in the header field
#### Header
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1OTU4Mjg1MDQsImlhdCI6IjIwMjAtMDctMjdUMDE6MzY6NDQuNDYwMTkyOS0wNDowMCIsInN1YiI6ImFkbWluIn0.jfC8lgQEcEQxUaG0mNibzeX5BD1uUQ7wQdM0LhxHrBQ
```
#### Body
```json
file: {FileName}.txt
```
#### File Format: 

The file must be in the format of
```
Tag1
Tag2
Tag3
Tag4
...
```
where each tag is separated by a newline. Tags with spaces at the front or at the end will be stripped out.

### Possible Responses
#### Immediate Success
```json
{
	"Code": 1,
	"Message": "Successfully created tags",
	"Data": {}
}
```
#### Failure
```json
{
	"Code": -1,
	"Message": "Please contact an administrator.",
	"Data": {}
}
```


