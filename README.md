# firebase-schema

A lightweight Firebase ORM

- Cascade Deletes
- Efficient child subscription

### Example

```javascript
import firebase from 'firebase'
import FirebaseConfig from './FirebaseConfig'
import { Schema, SchemaTypes, makeSchema } from 'firebase-schema'

firebase.initalizeApp(FirebaseConfig)

// schema.js

export class Team extends Schema {
  constructor () {
    super()
    this.schema = {
      name: SchemaTypes.string().isRequired(),
      picks: SchemaTypes.arrayOf(SchemaTypes.json()).isRequired()
    }
    this.belongsTo = [
      League
    ]
  }
}

export class League extends Schema {
  constructor () {
    super()
    this.schema = {
      name: SchemaTypes.string().isRequired(),
      teams: SchemaTypes.arrayOf(Team).default([])
    }
  }
}

const allSchemas = [
  Team,
  League
]

export default makeSchema(firebase, allSchemas)

```