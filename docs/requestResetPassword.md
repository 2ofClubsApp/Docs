---
id: request_reset_password
title: Request Reset Password
sidebar_label: Request Reset Password
---

export const Endpoint = ({children, color}) => ( <span style={{
      borderRadius: '2px',
      color: '#E83E8C',
    }}>{children}</span> );

<Endpoint>POST /resetpassword/{"{username}"}</Endpoint>: Requesting a password reset <br></br>

**Note**: The password reset link sent in the email is only valid for 10 minutes.

### Possible Responses
#### Immediate Success
```json
{
	"code": 1,
	"message": "successfully sent email if user exists",
	"data": {}
}
```
**Note**: This route has a silent fail (this is to ensure that malicious users can't determine account usernames)
