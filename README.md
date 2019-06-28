## Node/Typescript program to read a CSV file and produce a report

### Type definition for ALL Node standard Libraries:

- \$ npm install @types/node

### To Run the Program:

- \$ npm install
- \$ npm start

### Design Patterns:

## Generics:

- Pass in types as parameter to a class which can be passed in later to define them

```
class HoldAnything<T> {
  data: T
}

const holdNumber = new HoldAnything<number>();
```

- Makes for more reusable code and generic classes
