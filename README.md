# REST API

This is a Resful API that has the folowing endpoints

Endpoint `<HOST:PORT>/api/v1/stage`

## GET `/`

- Input `none`
- Output with status of `200 - OK`

```json
 {
   "slackUsername": String,
   "backend": Boolean,
   "age": Integer,
   "bio": String
 }
```

## POST `/`

- Input

```json
{
  "operation_type": Enum<addition|subtration|multiplication>,
  "x":Integer,
  "y":Integer

}
```

- Output with status of `201 - OK`

```json
{
  "slackUsername": String,
  "operation_type": Enum.value,
  "result": Integer

}
```
