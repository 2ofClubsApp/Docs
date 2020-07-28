---
id: status
title: Structure
sidebar_label: Structure
---

Upon a CRUD success, the operation response will be returned in the following structure:
```json
Status Struct
{
    "Code": int
    "Message": string
    "Data": {}
} 
```

## Data
In the `Data` portion of `Status`, one or more of the following structs will belong to it
```json
Manages/Attends Struct
{
    "ID": int
    "Name": string
    "Email": string
    "Size": int
    "Tags": []string,
    "IsOwner": bool
}
```
---
:::note
Since 2ofClubs is under active development, this page is subject to change.
:::

