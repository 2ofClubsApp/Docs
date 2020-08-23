---
id: refresh
title: Refresh
sidebar_label: Refresh
---

export const Endpoint = ({children, color}) => ( <span style={{
      borderRadius: '2px',
      color: '#E83E8C',
    }}>{children}</span> );

<Endpoint>POST /refreshToken</Endpoint>: Obtaining a new pair of access and refresh tokens provided a valid refresh token

### Example Request
This is a **protected route**, a **valid Refresh JWT is required** in the header field
#### Header
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1OTgzMDI1MzAsImlhdCI6IjIwMjAtMDgtMjNUMjA6NTU6MzAuNjAxNjg4N1oiLCJzdWIiOiJoaWltY2hyaXNsaW0ifQ.uFszgLJ6J-THHnRD7uAhmu7qlFGnrPHDq5kZ3cxXQdY
```

### Possible Responses
#### Immediate Success
```json
{
    "code": 1,
    "message": "generated new token pair",
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1OTgyMjMzNjMsImlhdCI6IjIwMjAtMDgtMjNUMjI6NTE6MDMuMzk5NjU3MloiLCJzdWIiOiJoaWltY2hyaXNsaW0ifQ.2SnEuCF28RUCXZ_q0L1MYNwm-xI6Xy5AZA5bSgrb_ss"
    }
}
```
**Note**: Once a new pair of access and refresh tokens are generated, all previous tokens (access and refresh) will be revoked

**Note**: The new access token will be returned in `data.token`. The new refresh token will be returned as an HTTPOnly, Secure, SameSite Cookie.

#### Failure
```json
{
	"code": -1,
	"message": "Forbidden",
	"data": {}
}
```


