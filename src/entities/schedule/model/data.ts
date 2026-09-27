export type ScheduleSlot = {
  day: string;
  time: string;
  title: string;
  level: string;
  place: string;
};

export type PricePlan = {
  id: string;
  name: string;
  price: string;
  unit: string;
  description: string;
  features: string[];
  featured?: boolean;
};

export const weekSchedule: ScheduleSlot[] = [
  {
    day: "Пн",
    time: "10:00",
    title: "",
    level: "",
    place: "",
  },
  {
    day: "Пн",
    time: "10:00",
    title: "",
    level: "",
    place: "",
  },
  {
    day: "Вт",
    time: "10:00",
    title: "",
    level: "",
    place: "",
  },
  {
    day: "Ср",
    time: "10:00",
    title: "",
    level: "",
    place: "",
  },
  {
    day: "Чт",
    time: "10:00",
    title: "",
    level: "",
    place: "",
  },
  {
    day: "Пт",
    time: "10:00",
    title: "",
    level:"",
    place: "",
  },
  {
    day: "Сб",
    time: "10:00",
    title: "",
    level: "",
    place: "",
  },
];

export const pricePlans: PricePlan[] = [
  {
    id: "single",
    name: "Разовый сеанс",
    price: "2 500",
    unit: "сом",
    description: "Диагностика и одна тренировка с тренером.",
    features: ["45–60 минут", "Разбор техники",],
  },
  
  {
    id: "month",
    name: "Месячный абонемент",
    price: "24 000",
    unit: "сом",
    description: "Регулярные занятия.",
    features: ["12 сеансов в месяц", "Гибкий график", ],
  },
];
