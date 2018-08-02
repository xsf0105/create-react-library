# react-to-npm
该项目基于[create-react-app](https://github.com/facebook/create-react-app)，您可以使用该项目去构建属于您自己的ui组件库，并发送到 `npm` 平台。

## 开始
安装依赖
```
yarn install
or 
npm install
```

启动项目
```
yarn start
or 
npm start
```
浏览器将弹出并显示该项目： http://localhost:3000

## 项目构建
```
yarn run build
or 
npm run build
```

## 发布到npm平台[(有关 npm 发布)](#有关npm发布)
```
npm publish
```

## 他人使用
```
npm install react-to-npm（自定义您的项目名）
```

```
import { MyButton } from "react-to-npm";

<MyButton
    type="default"
    text="this is a examle component"
    onClick={()=>{console.log("clicked")}}
/>
```

## 有关npm发布
1、在[npm](https://www.npmjs.com/)注册账号，并邮箱验证。然后输入：
```
npm adduser
```
接下来会以问答的形式向你了解你的用户名、密码以及公开的邮箱，之后输入
2、在自己项目根目录执行：
```
npm publish
```
3、发布成功！


ps: 有其他问题可以提 issue 


## License

MIT
