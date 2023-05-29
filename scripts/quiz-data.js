const quizData = [
  {
    title: "Для кого вы ищете учебное заведение?",
    direction: "row",
    paddings: ["24px", "56px"],
    inputs: [
      {
        type: "radio",
        text: "Себе",
        name: "me",
      },
      {
        type: "radio",
        text: "Родственнику",
        name: "me",
      },
      {
        type: "radio",
        text: "Ребенку",
        name: "me",
      },
      {
        type: "radio",
        text: "Супругу/супруге",
        name: "me",
      },
      {
        type: "radio",
        text: "Коллеге",
        name: "me",
      },
      {
        type: "radio",
        text: "Другое",
        name: "me",
      },
    ],
  },
  {
    title: "В каком городе планируете поступать?",
    direction: "row",
    paddings: ["24px", "184px"],
    inputs: [
      {
        type: "select",
        holder: "Город",
        name: "city",
        options: [
          "Санкт-Петербург",
          "Москва",
          "Тамбов",
          "Саратов",
          "Воронеж",
          "Пермь",
          "Владивосток",
          "Новгород",
        ],
      },
    ],
  },
  {
    title: "Какое образование уже есть?",
    direction: "row",
    paddings: ["24px", "56px"],
    inputs: [
      {
        type: "radio",
        text: "9 классов",
        name: "education",
      },
      {
        type: "radio",
        text: "Колледж/техникум",
        name: "education",
      },
      {
        type: "radio",
        text: "11 классов",
        name: "education",
      },
      {
        type: "radio",
        text: "11 классов",
        name: "education",
      },
      {
        type: "radio",
        text: "Училище",
        name: "education",
      },
      {
        type: "radio",
        text: "Неоконченное высшее",
        name: "education",
      },
    ],
  },
  {
    title: "Куда планируете поступать?",
    direction: "column",
    paddings: ["24px", "56px"],
    inputs: [
      {
        type: "radio",
        text: "Вуз",
        name: "target",
      },
      {
        type: "radio",
        text: "Колледж/техникум",
        name: "target",
      },
      {
        type: "radio",
        text: "Училище",
        name: "target",
      },
    ],
  },
  {
    title: "Какую форму обучения предпочитаете?",
    direction: "column",
    paddings: ["24px", "56px"],
    inputs: [
      {
        type: "radio",
        text: "Очную",
        name: "form",
      },
      {
        type: "radio",
        text: "Заочную",
        name: "form",
      },
      {
        type: "radio",
        text: "Дистанционную",
        name: "form",
      },
    ],
  },
  {
    title: "Рассматриваете платное обучение?",
    direction: "column",
    paddings: ["24px", "56px"],
    inputs: [
      {
        type: "radio",
        text: "Нет, только бюджет",
        name: "pay",
      },
      {
        type: "radio",
        text: "Да, планирую учиться платно",
        name: "pay",
      },
      {
        type: "radio",
        text: "Возможны оба варианта",
        name: "pay",
      },
    ],
  },
  {
    title: "Какая специальность интересует?",
    direction: "row",
    paddings: ["24px", "184px"],
    inputs: [
      {
        type: "select",
        holder: "Специальность",
        name: "speciality",
        options: [
          "Любая",
          "Физика",
          "Философия",
          "Инженерия",
          "Экономика",
          "Социология",
          "Юриспруденция",
          "Творчество",
          "IT",
        ],
      },
    ],
  },
  {
    title: "Как скоро планируете поступать?",
    direction: "row",
    paddings: ["24px", "56px"],
    inputs: [
      {
        type: "radio",
        text: "Как можно быстрее",
        name: "duration",
      },
      {
        type: "radio",
        text: "Месяц",
        name: "duration",
      },
      {
        type: "radio",
        text: "Квартал",
        name: "duration",
      },
      {
        type: "radio",
        text: "Полгода",
        name: "duration",
      },
      {
        type: "radio",
        text: "Год",
        name: "duration",
      },
    ],
  },
  {
    title: "Ваша подборка готова! 🥳 Куда нам отправить её?",
    direction: "row",
    paddings: ["24px", "8px"],
    inputs: [
      {
        type: "form",
        inputs: [
          {
            type: "text",
            placeholder: "Как вас зовут?",
            name: "me",
          },
          {
            type: "tel",
            placeholder: "Номер телефона",
            name: "me",
          },
          {
            type: "email",
            placeholder: "E-mail",
            name: "me",
          },
        ],
      },
    ],
  },
];

export default quizData;
