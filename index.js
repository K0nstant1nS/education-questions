import quizData from "./scripts/quiz-data.js";

const quizContainer = document.querySelector("main");
const quizTemplate = document.querySelector("#quiz-template");
const radioTemplate = document.querySelector("#quiz-radio");
const selectTemplate = document.querySelector("#quiz-select");
const formTemplate = document.querySelector("#quiz-form");
const inputTemplate = document.querySelector("#quiz-input");

const userData = {};

const renderTypes = {
  radio: prepareRadio,
  select: renderSelect,
  form: renderForm,
};

function prepareRadio({ text, name }, forward) {
  const radioElem = radioTemplate.content
    .cloneNode(true)
    .querySelector(".quiz__radio-label");
  const radioTextElem = radioElem.firstElementChild;
  const radioInputElem = radioElem.lastElementChild;

  radioElem.addEventListener("change", ({ target }) => {
    userData[target.name] = target.value;
    forward.disabled = false;
  });

  radioInputElem.name = name;
  radioInputElem.value = text;
  radioTextElem.textContent = text;

  return radioElem;
}

function renderSelect({ holder, options, name }, forward) {
  const selectContainerElem = selectTemplate.content
    .cloneNode(true)
    .querySelector(".quiz__select-container");

  const selectElem = selectContainerElem.querySelector(".quiz__select");
  const selectTextElem =
    selectContainerElem.querySelector(".quiz__select-span");

  selectTextElem.textContent = holder;
  selectElem.name = name;

  options.forEach((item) => {
    const optionElem = document.createElement("option");
    optionElem.classList.add("quiz__option");
    optionElem.value = item;
    optionElem.textContent = item;
    selectElem.appendChild(optionElem);
  });

  selectElem.addEventListener("change", ({ target }) => {
    userData[target.name] = target.value;
    forward.disabled = false;
  });

  return selectContainerElem;
}

function renderForm(item) {
  const formElem = formTemplate.content
    .cloneNode(true)
    .querySelector(".quiz__form");

  item.inputs.forEach((item) => {
    const inputElem = inputTemplate.content
      .cloneNode(true)
      .querySelector(".quiz__input");
    inputElem.type = item.type;
    inputElem.placeholder = item.placeholder;
    formElem.prepend(inputElem);
  });

  formElem.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(userData);
  });

  return formElem;
}

function renderQuiz(page) {
  const data = quizData[page - 1];
  const quiz = quizTemplate.content.cloneNode(true);
  const contentContainer = quiz.querySelector(".quiz__container");
  const titleElement = quiz.querySelector(".quiz__title");
  const counterElement = quiz.querySelector(".quiz__counter");
  const navElement = quiz.querySelector(".quiz__nav");
  const forwardButton = quiz.querySelector(".quiz__forward");
  const backButton = quiz.querySelector(".quiz__back");

  // button block
  if (page === quizData.length) {
    navElement.style.display = "none";
  } else if (!quizData[page - 2]) {
    backButton.style.zIndex = "-1";
  }

  forwardButton.addEventListener("click", () => {
    renderQuiz(page + 1);
  });

  backButton.addEventListener("click", () => {
    renderQuiz(page - 1);
  });

  forwardButton.disabled = true;

  //

  titleElement.textContent = data.title;
  titleElement.style.paddingBottom = data.paddings[0];

  contentContainer.style.paddingBottom = data.paddings[1];
  contentContainer.style.flexDirection = data.direction;

  counterElement.textContent = `Шаг ${page}/${quizData.length}`;

  data.inputs.forEach((item) => {
    const elem = renderTypes[item.type](item, forwardButton);
    contentContainer.appendChild(elem);
  });

  quizContainer.lastElementChild.remove();
  quizContainer.appendChild(quiz);
}

renderQuiz(1);
