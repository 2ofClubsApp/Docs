---
id: status
title: Structure
sidebar_label: Structure
---

Upon a CRUD success, the operation response will be returned in the following structure:
```json
Status Struct
{
    "code": int
    "message": string
    "data": {}
} 
```

## Code

Status codes are either `1` or `-1` representing an API call `success` or a `failure` respectively.

## Data

Depending on the request, various forms of the data can be returned. <br></br>

You can find the structure and format of the return type (if applicable) for the available server requests throughout the documentation.

---
:::note
2ofClubs is under active development. This page is subject to change.
:::

