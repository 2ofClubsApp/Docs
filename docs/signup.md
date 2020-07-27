---
id: signup
title: Signup
sidebar_label: Signup
---

export const Endpoint = ({children, color}) => ( <span style={{
      borderRadius: '2px',
      color: '#E83E8C',
    }}>{children}</span> );

<Endpoint>POST /signup</Endpoint>: Signs up the user provided a unique username, email and password

```json
{
    "username": string,
    "password": string,
    "email": string
}
```
### Example Request
#### Body
```json
{
    "Username": "Chris",
    "Email": "hello@2ofClubs.app",
    "Password": "password"
}
```
### Parameters
---
**Username** (Required, Unique)

Usernames must start with a letter and can only contain the following characters: a-zA-Z0-9_ and must be 50 characters or less

Min: 2 characters <br></br>
Max: 15 characters 

---
**Email** (Required, Unique)

Emails must be valid (i.e. Must include @ and a valid TLD)

---
**Password** (Required)

Min: 3 characters <br></br>
Max: 45 characters (**See note below**)

**Note**: Since bcrypt is used to hash the passwords, there is a 50 character string length limitation.

---
### Possible Responses
#### Immediate Success
```json
{
	"Code": 1,
	"Message": "Signup Successful",
	"Data": {}
}
```
#### Failure
```json
{
	"Code": -1,
	"Message": "Unable to Sign Up User",
	"Data": {
		"Username": "Username already exists",
		"Email": "Email already exists"
	}
}
```
```json
{
	"Code": -1,
	"Message": "Unable to Sign Up User",
	"Data": {
		"Username": "Username must start with a letter and can only contain the following characters: a-zA-Z0-9_ and must be 50 characters or less",
		"Email": "Must be a valid email"
	}
}
```



