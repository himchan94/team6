let accountArray = [];

const myAccountUrl =
  "https://gist.githubusercontent.com/himchan94/a539fd8c884477a314044e8b423b9653/raw/d721b447772084c4e51c26daaf73b9c75c410780/myAccount.json";
const gmAccountUrl =
  "https://gist.githubusercontent.com/himchan94/283d5837431bec8d5cb88a6e3525c35f/raw/0db5aa5a950082ea84a13b2146e40ef0ec3c8eaf/grandmotherAccount.json";

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
