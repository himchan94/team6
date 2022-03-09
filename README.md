# Bank webapp project

<p align="center" width="100%">
    <img width="30%" height="30%" src="https://user-images.githubusercontent.com/71649055/157490501-175d5d1f-68b3-42cd-9b2a-e0d70a097156.gif">
</p>



## About this project

통합적인 계좌관리를 위한 모바일용 웹 앱을 위한 디자인 시안을 라이브러리 없이, Vanilla Js로 구현

### Tools
Design : Figma
Development:Html, Css, Js

### Description
#### 1) structure
```bash
 ┣ component
 ┃ ┣ accountSection.js
 ┃ ┣ dayCont.js
 ┃ ┣ dayList.js
 ┃ ┣ footer.js
 ┃ ┣ header.js
 ┃ ┣ saveCont.js
 ┃ ┗ spendSection.js
 ┣ css
 ┃ ┗ style.css
 ┣ element
 ┃ ┣ dragbar.js
 ┃ ┣ saveAdd.js
 ┃ ┣ saveList.js
 ┃ ┗ saveProgress.js
 ┣ images
 ┣ script
 ┃ ┣ findDay.js
 ┃ ┣ getData.js
 ┃ ┣ globalVariable.js
 ┃ ┗ main.js
 ┣ README.md
 ┣ index.html
```
#### 2) component using vaniila JS

spendSection 컴포넌트
```js
const spendSection = (saveList, bankList) => {
  const _spendSection = document.createElement("section");
  _spendSection.classList.add("spend-section");

  // Adding dragbar
  const _dragBar = dragBar();
  _spendSection.appendChild(_dragBar);

  // Adding saveCont
  const _saveCont = saveCont(saveList);
  _spendSection.appendChild(_saveCont);

export default spendSection;
```
함수선언형으로 컴포넌트를 만들었으며, parameter를 받아온 매개 변수를 사용해서 동적으로 DOM 요소를 만들어냈다.
반복된 및 재사용성이 있는 요소의 컴포넌트화를 통해 DOM 요소를 생성하여, 중복요소가 적고 통합적인 수정이 편한 이점이 있었다.

결과적으로, 모든 DOM 요소를 컴포넌트화 했고, script 폴더 내의 main.js에서 동작시켜 DOM 요소를 생성화 했기 때문에 index.html 파일의 body 태그에는 아무것도 없다.

**하지만 JS 스크립트가 실행되기 전에 화면에 아무것도 보이지 않는다는 단점**


## Getting Started

- depolyed site
  https://himchantoypj1.netlify.app/

## Roadmap

- v1.0.0(2022 Q1)
  - first version deployed

## Contributing

- If you have a good idea, leave pr to this project
- Report me bug

## License

- MIT License
