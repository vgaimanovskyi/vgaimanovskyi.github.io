import store from "../store";

const locale = {
  "ru": {
    "textLine": 'Если Вам нужен ответственный, работоспособный специалист, который готов много и усердно работать, то обратите на меня внимание.',

    "aboutPageHello": "Привет",
    "aboutPageP1": "Спасибо, что посетили мое ",
    "aboutPageP2-1": "Меня зовут ",
    "aboutPageP2-name": "Вадим",
    "aboutPageP2-2": " и я начинающий",
    "aboutPageP3-1": "В 2020 закончил обучение в ",
    "aboutPageP3-2": "и сейчас",
    "aboutPageP3-3": "нахожусь ",
    "aboutPageP3-4": "в поиске ",
    "aboutPageP3-5": "своей первой ",
    "aboutPageP3-6": "работы в IT",
    "aboutPageP3-7": "Паралельно продолжаю изучать новое и совершенствовать",
    "aboutPageP3-8": "свои знания",
    "aboutPageP4-1": "Можете погулять по другим каналам или скачать ",
    "aboutPageP4-2": "чтоб узнать больше",

    "contactPageName": "Имя",
    "contactPageTextarea": "Сообщение",
    "contactPageSubmit": "Отправить",
  },
  "en": {
    "textLine": 'If you need a responsible, hard-working specialist who is ready to work hard and to learn much, then pay attention to me.',

    "aboutPageHello": "Hello",
    "aboutPageP1": "Thank you for visiting mine ",
    "aboutPageP2-1": "My name is ",
    "aboutPageP2-name": "Vadym",
    "aboutPageP2-2": " and I'm a junior",
    "aboutPageP3-1": "In 2020 I graduated from ",
    "aboutPageP3-2": "and now",
    "aboutPageP3-3": "I'm ",
    "aboutPageP3-4": "looking for ",
    "aboutPageP3-5": "my first ",
    "aboutPageP3-6": "IT job",
    "aboutPageP3-7": "Also I continue to learn new things and improve",
    "aboutPageP3-8": "my own skills",
    "aboutPageP4-1": "You can walk on other channels or download ",
    "aboutPageP4-2": "to find out more information",

    "contactPageName": "Name",
    "contactPageTextarea": "Message",
    "contactPageSubmit": "Send",
  }
}

export default function langToggle(key) {
  const language = store.getters.getLanguage || "ru";
  return locale[language][key] || `[Localize error]: key ${key} not found`;
}