const myAccountUrl =
  "https://gist.githubusercontent.com/himchan94/a539fd8c884477a314044e8b423b9653/raw/4703f3ad54d707c1baec154783d3f1f382671d5a/myAccount.json";
const gmAccountUrl =
  "https://gist.githubusercontent.com/himchan94/283d5837431bec8d5cb88a6e3525c35f/raw/c498bf3113a9f32c03c484aaaae6ade5f86b4eb7/grandmotherAccount.json";

const getData = async () => {
  await fetch(myAccountUrl)
    .then((res) => res.json())
    .then((data) => accountArray.push(data));

  await fetch(gmAccountUrl)
    .then((res) => res.json())
    .then((data) => accountArray.push(data))
    .then(() => {
      const script = document.createElement("script");
      script.type = "module";
      script.src = "./script/main.js";
      document.getElementsByTagName("head")[0].appendChild(script);
    });
};

getData();
