# react-to-npm
This project is based on [create-react-app](https://github.com/facebook/create-react-app), in this project you can create your own UI library, and publish it to [NPM](https://www.npmjs.com/).

[中文版本](./README-ZH.md)

## Getting Started
Install dependencies
```
yarn install
or 
npm install
```

Start development server
```
yarn start
or 
npm start
```
Then you can run this project in your browser http://localhost:3000

## Build library
```
yarn run build
or 
npm run build
```

### Publish library to NPM
```
npm publish
```

## Example Usage
```
npm install react-to-npm
```

```
import { MyButton } from "react-to-npm";

<MyButton
    type="default"
    text="this is a examle component"
    onClick={()=>{console.log("clicked")}}
/>
```


## License

MIT
