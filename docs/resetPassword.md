---
id: reset_password
title: Reset Password
sidebar_label: Reset Password
---

export const Endpoint = ({children, color}) => ( <span style={{
      borderRadius: '2px',
      color: '#E83E8C',
    }}>{children}</span> );

<Endpoint>POST /resetpassword/{"{username}"}/{"{resetToken}"}</Endpoint>: Resetting a forgotten user's password

```json
{
    "Password": string,
}
```
**Note**: The resetToken is only valid for a **single time use**. (i.e. Once the email expires (10 minute expiry) or you reset your password, you can't reuse this token)

### Example Request
#### Body
```json
{
    "Password": "newPassword"
}
```
### Possible Responses
#### Immediate Success
```json
{
	"code": 1,
	"message": "successfully updated password",
	"data": {}
}
```
#### Failure
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

