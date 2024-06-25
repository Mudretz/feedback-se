import terrible from "../../assets/terrible.png";
import bad from "../../assets/bad.png";
import neutral from "../../assets/neutral.png";
import good from "../../assets/good.png";
import excelent from "../../assets/excelent.png";
import { Stages } from "../types";

export const GREEN_COLOR = "#66B22C";

export const MASK_PLACEHOLDER = '+7 (___) ___-__-__';

export const RATES = [
    {
        id: 1,
        value: 1,
        image: terrible,
        text: "Ужасно",
    },
    {
        id: 2,
        value: 2,
        image: bad,
        text: "Плохо",
    },
    {
        id: 3,
        value: 3,
        image: neutral,
        text: "Нейтрально",
    },
    {
        id: 4,
        value: 4,
        image: good,
        text: "Хорошо",
    },
    {
        id: 5,
        value: 5,
        image: excelent,
        text: "Отлично",
    },
];

export const STAGES: Stages[] = [
    {
        id: "1",
        title: "Насколько легко пользоваться нашим сайтом?",
        text: "Оцените наш сайт, чтобы помочь нам сделать сервис еще лучше",
        button: null,
        placeholder: null,
        borderColor: "#66B22C",
        buttonColor: "#66B22C",
    },
    {
        id: "2",
        title: "Что нужно сделать лучше?",
        text: null,
        button: "оставить обратную связь",
        placeholder: "Мне бы хотелось, чтобы",
        borderColor: "#66B22C",
        buttonColor: "#66B22C",
    },
    {
        id: "3",
        title: "Спасибо за отзыв",
        text: "Если хотите получить обратную связь по вашему отклику, пожалуйста оставьте свой номер телефона",
        button: "получить обратную связь",
        placeholder: "+7 (___) ___-__-__",
        borderColor: "#66B22C",
        buttonColor: "#66B22C",
    },
];
