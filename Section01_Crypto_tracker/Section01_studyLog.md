# Type Script With React

## 테마에 타입을 포함시키기

- styled.d.ts 파일 만들기

```JS
import "styled-components";

declare module "styled-components" {

export interface DefaultTheme {

textColor: string;

bgColor: string;

} }
```

스타일 관련한 타입을 만들어준다.

- theme.ts

```JS
import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {

bgColor: "yellow",

textColor: "black",

};


export const darkTheme: DefaultTheme = {

bgColor: "black",

textColor: "white",

};

```

타입에 맞는 css 속성을 지정해준다.

- index.tsx

```JS
import React from "react";

import ReactDOM from "react-dom";

import { ThemeProvider } from "styled-components";

import App from "./App";

import { lightTheme, darkTheme } from "./theme";



ReactDOM.render(

<ThemeProvider theme={lightTheme}>

<App />

</ThemeProvider>,

document.getElementById("root")

);

```

- App.tsx

```JS

const Container = styled.div`

background-color: ${(props) => props.theme.bgColor};

`;


const H1 = styled.h1`

color: ${(props) => props.theme.textColor};

`;


function App() {

return (

<Container>

<H1>Protected</H1>

</Container>

);

}

```

이렇게 가져다가 써주면 됨.

---

## Route-States

- parameter 가져오기 = useParams 사용하면 url 뒤의 파라미터 값을 가져올 수있다.

```JS
const params = useParams();
console.log(params);
```

- Link 를 통해 state를 보내기
  Link 를 사용하여 state를 전달할 수있다. (v5 와 v6 에서 문법이 살짝 달라졌음에 유의. )

```JS
<Link
to={{ pathname: `/${coin.id}`, state: { name: coin.name } }} >
```

[리액트 라우터 돔](https://reactrouter.com/docs/en/v6/upgrading/v5#use-usenavigate-instead-of-usehistory)

- Link 를 통해 전달한 state를 사용하기
  react router DOM 이 보내주는 location object 에 접근하여 값을 가져오는 방법
  useLocation 훅을 사용하여 전달받는 state를 받아서 사용할 수있다.

```JS
const { state } = useLocation<RouteState>();
```

JS-Optional Chaining
만약 state가 있으면? name을 가져오고 없으면 "Loading" 을 띄운다.

```JS
{state?.name || "Loading"}
```

---

## Nested Routes

nested route 는 route 안에 있는 또 다른 route 로 탭을 사용할때 매우 유용함. 혹은 스크린 안에 많은 섹션이 나뉘어진 곳에서도 유용하다.

1. Switch 를 사용하여 두개의 route를 렌더할 수있게 한다.
2. route를 만든다.
3. route에 path를 부여한다.

### Tab 만들기

1. 탭을 누르면 링크로 이동하게 만든다.

```JS
<Tabs>

<Tab>

<Link to={`/${coinId}/chart`}>Chart</Link>

</Tab>

<Tab>

<Link to={`/${coinId}/price`}>Price</Link>

</Tab>

</Tabs>
```

onClick event 없이 `Link` 를 사용하여 URL을 변경해준다.
