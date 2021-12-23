const myAccountUrl =
  " https://gist.githubusercontent.com/himchan94/a539fd8c884477a314044e8b423b9653/raw/045a98969d43f50cacd168835d4b83b985658478/myAccount.json";
const gmAccountUrl =
  "https://gist.githubusercontent.com/himchan94/283d5837431bec8d5cb88a6e3525c35f/raw/12fda6b36c8dd6e29a9b878a236a363d4c85d561/grandmotherAccount.json";

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
