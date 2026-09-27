export type TreatmentStep = {
  number: string;
  title: string;
  text: string;
};

export type ResultCase = {
  id: string;
  zone: string;
  duration: string;
  note: string;
  /** Положите фото в public/results/ и укажите путь, например "/results/case-01-before.jpg" */
  beforeSrc: string | null;
  afterSrc: string | null;
  beforeDescription: string;
  afterDescription: string;
};

export const treatmentSteps: TreatmentStep[] = [
 
  {
    number: "01",
    title: "Персональный план",
    text: "Собираем короткие комплексы под вашу цель: восстановление, сила или профилактика.",
  },
  {
    number: "02",
    title: "Работа на сеансах",
    text: "Мягкая мобилизация, укрепление и контроль техники — без перегруза.",
  },
  {
    number: "03",
    title: "Контроль результата",
    text: "Сравниваем динамику по месяцам и корректируем программу по ощущениям.",
  },
];

export const resultCases: ResultCase[] = [
  {
    id: "knee",

    beforeSrc: "/imges/results/led1.png",
    beforeDescription:
      "Уменьшилась выраженность вальгусной стопы\nОсь голеностопных суставов стала ровнее\nУлучшилась опора на стопы",
    afterSrc: "/imges/results/sholder.png",
    afterDescription: `Уменьшилась асимметрия плеч и лопаток
  Спина стала более симметричной
  Улучшилась осанка
  Туловище стало более центрированным`,
    duration: "",
    note: "",
    zone: "",
  },
  {
    id: "foot",

    beforeSrc: "/imges/results/sholder1.png",
    beforeDescription: `Уменьшился боковой наклон туловища
  Линия плеч стала горизонтальной
  Уменьшилась выраженность асимметрии спины
  Улучшилась осанка`,
    afterSrc: "/imges/results/neck.png",
    afterDescription: `Выровнялся уровень плеч
  Уменьшилась асимметрия лопаток
  Улучшилось положение позвоночника
  Осанка стала ровной`,
    duration: "",
    note: "",
    zone: "",
  },
];
