export function fetchCoins() {
  //json Data 를 리턴 해줘야한다.
  return fetch("https://api.coinpaprika.com/v1/coins").then((response) =>
    response.json()
  );
}
