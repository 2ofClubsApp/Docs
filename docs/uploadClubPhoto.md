---
id: upload_club_photo
title: Upload Club Photo
sidebar_label: Upload Club Photo
---

export const Endpoint = ({children, color}) => ( <span style={{
      borderRadius: '2px',
      color: '#E83E8C',
    }}>{children}</span> );

<Endpoint>POST /upload/photos/clubs/{"{clubID}"} </Endpoint>: Uploading a club photo

**Note**: Only a club owner or club managers can upload a club photo

### Example Request
This is an **protected route**, a **valid JWT is required** in the header field
#### Header
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1OTU4MjQyNzUsImlhdCI6IjIwMjAtMDctMjdUMDA6MjY6MTUuNzg5NTg0Mi0wNDowMCIsInN1YiI6ImNocmlzIn0.5US2_ITKcfgkpEbfsR-gxXbGPFY6XsgJPcGA5qaBD1M
```
#### Body
```json
file: {FileName}.png (or jpg)
```
#### File Restrictions: 

The file must be **max** 10 MB

### Possible Responses
#### Immediate Success
```json
{
	"code": 1,
	"message": "successfully uploaded file",
	"data": {}
}
```
**Note**: For any existing club photos, they will be overridden with the new photo (assuming the photo adheres to the file size restrictions)

**Note**: For any first time photo uploads, the logo resource link will be added to the Club struct under `logo`.

(e.g. When you upload a photo to Club1 and perform a GET, the `logo` field will be populated with the resource link to the club image)

**Note**: The `logo` resource link will be in the format of <Endpoint>/photos/clubs/{clubID}</Endpoint>
#### Failure
```json
{
	"code": -1,
	"message": "file doesn't exist",
	"data": {}
}
```
```json
{
	"code": -1,
	"message": "invalid file: A .jpg or .png file of 10 MB or less is required",
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
