const getData = () => {
  const data = fetch(
    "https://gist.githubusercontent.com/himchan94/a539fd8c884477a314044e8b423b9653/raw/9ef92298659dee864e899bd14babf83cc8f603da/myAccount.json"
  )
    .then((res) => res.json())
    .then((data) => console.log(data));
};

getData();
