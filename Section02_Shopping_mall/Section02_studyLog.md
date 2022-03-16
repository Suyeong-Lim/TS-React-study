# React Shopping-mall

##  Vite + React + ts 로 쇼핑몰 만들어보기

- SASS로 스타일링
`yarn add -dev sass`

* 폴더구조 : pages 에서는 query 만 날리는 역할을 한다. 
받은 query 를 컴포넌트로 던져서 컴포넌트와 페이지 두 개의 기능을 분리한다. 

* api 내용

```JSON

category: "men's clothing"

description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"

id: 1

image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"

price: 109.95

rating: {rate: 3.9, count: 120}

title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"

```

### React-query 옵션 설정
[공식문서 - 옵션][https://react-query.tanstack.com/guides/caching] 을 참고하여 옵션을 설정하기

```JS
client = new QueryClient({

	defaultOptions: {
	
	queries: {

	
	},
	
	},

});

```

defaultOprions의 queries 에 옵션을 설정해준다. 
