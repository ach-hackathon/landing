import type { ReactNode } from "react";
import {
  IconAffiliate,
  IconArrowUpRight,
  IconBolt,
  IconBuildingBank,
  IconChartBar,
  IconCoin,
  IconDeviceMobile,
  IconGift,
  IconQrcode,
  IconSparkles,
  IconTargetArrow,
  IconUsersGroup,
} from "@tabler/icons-react";

type LinkCard = {
  title: string;
  description: string;
  href: string;
  badge: string;
  cta: string;
  accent: "indigo" | "pink" | "blue";
};

type Segment = {
  title: string;
  description: string;
  bullets: string[];
};

type Layer = {
  title: string;
  description: string;
  bullets: string[];
  icon: ReactNode;
};

type Mechanic = {
  title: string;
  description: string;
  icon: ReactNode;
};

type Model = {
  title: string;
  description: string;
  note: string;
};

export const heroLinks: LinkCard[] = [
  {
    title: "Levely Admin",
    description: "Админ-панель платформы: сценарии, награды, события и real-time аналитика.",
    href: "http://panel.stg.eventigo.io/",
    badge: "Главная платформа",
    cta: "Открыть админ-панель",
    accent: "indigo",
  },
  {
    title: "Eventigo",
    description: "B2C приложение для публичных, локальных и фестивальных активностей.",
    href: "https://eventigo.io/",
    badge: "B2C приложение",
    cta: "Открыть Eventigo",
    accent: "pink",
  },
  {
    title: "My HR PoC",
    description: "Демонстрация white-label интеграции Levely в корпоративный портал.",
    href: "https://stg.ilovehr.ink/",
    badge: "White-label PoC",
    cta: "Открыть My HR",
    accent: "blue",
  },
];

export const targetSegments: Segment[] = [
  {
    title: "B2B",
    description: "Геймификация как слой поверх существующих продуктов и внутренних процессов.",
    bullets: [
      "HR-платформы и корппорталы",
      "Корпоративное обучение",
      "CRM и loyalty сценарии",
    ],
  },
  {
    title: "B2C",
    description: "Сценарии для публичных событий, локальных активностей и семейного досуга.",
    bullets: [
      "Event-менеджмент",
      "Фестивали и городские маршруты",
      "Marketplace челленджей и платных сценариев",
    ],
  },
];

export const ecosystemLayers: Layer[] = [
  {
    title: "Levely Core",
    description: "Конструктор событий и наград, который объединяет механику, экономику и аналитику.",
    bullets: [
      "опросы, QR-механики и офлайн активности",
      "внутренняя валюта, опыт и уровни",
      "корпоративный магазин и каталог наград",
    ],
    icon: <IconSparkles size={22} stroke={1.8} />,
  },
  {
    title: "Real-time Analytics",
    description: "Администраторы видят вовлеченность по участникам, событиям и активностям без задержки.",
    bullets: [
      "живые отчеты для организаторов",
      "срезы по сценариям, сегментам и reward funnel",
      "быстрое принятие решений прямо во время события",
    ],
    icon: <IconChartBar size={22} stroke={1.8} />,
  },
  {
    title: "Eventigo + API/SDK",
    description: "Один движок работает как отдельный B2C продукт и как white-label интеграция в B2B решения.",
    bullets: [
      "публичные события через Eventigo",
      "white-label интеграция в существующие приложения",
      "API/SDK для партнерских продуктов",
    ],
    icon: <IconAffiliate size={22} stroke={1.8} />,
  },
];

export const mechanics: Mechanic[] = [
  {
    title: "QR и офлайн маршруты",
    description: "От простых чекпоинтов до многошаговых сценариев на площадке.",
    icon: <IconQrcode size={22} stroke={1.8} />,
  },
  {
    title: "Опросы и интерактив",
    description: "Поддержка внимания через быстрые действия и обратную связь в моменте.",
    icon: <IconBolt size={22} stroke={1.8} />,
  },
  {
    title: "Валюта, XP и уровни",
    description: "Пользователь видит прогресс, а организатор получает управляемую мотивацию.",
    icon: <IconCoin size={22} stroke={1.8} />,
  },
  {
    title: "Корпоративный store",
    description: "Награды превращают активность в ощутимую ценность и возврат в систему.",
    icon: <IconGift size={22} stroke={1.8} />,
  },
  {
    title: "White-label внедрение",
    description: "Геймификация встраивается в привычный интерфейс без тяжелой переработки продукта.",
    icon: <IconBuildingBank size={22} stroke={1.8} />,
  },
  {
    title: "Live аналитика",
    description: "Организатор видит, что работает сейчас, а не после завершения кампании.",
    icon: <IconTargetArrow size={22} stroke={1.8} />,
  },
];

export const businessModels: Model[] = [
  {
    title: "B2B SaaS",
    description: "Подписка на платформу и тарификация по использованию API или сценариев.",
    note: "Подходит для HR, L&D, CRM и loyalty решений.",
  },
  {
    title: "Enterprise White-label",
    description: "Кастомная интеграция и брендированный опыт внутри существующих приложений.",
    note: "Сильный аргумент для крупных компаний и внутренних экосистем.",
  },
  {
    title: "B2C Revenue",
    description: "Комиссии, платные сценарии и marketplace механик для публичных событий.",
    note: "Создает отдельный канал роста через Eventigo.",
  },
];

export const differentiationRows = [
  {
    capability: "Один стек для B2B и B2C",
    levely: "Да: Levely + Eventigo + SDK",
    market: "Чаще только B2B",
  },
  {
    capability: "Гибкость механик",
    levely: "От QR до сценариев с валютой и store",
    market: "Обычно ограниченный набор шаблонов",
  },
  {
    capability: "White-label интеграция",
    levely: "Есть: можно встроить в существующее приложение",
    market: "Не всегда доступно или требует дорогостоящей кастомизации",
  },
  {
    capability: "Real-time аналитика",
    levely: "Да, для администраторов во время события",
    market: "Часто отчеты уже после завершения активности",
  },
];

export const footerLinks = [
  {
    label: "Открыть Levely",
    href: "http://panel.stg.eventigo.io/",
    icon: IconArrowUpRight,
  },
  {
    label: "Открыть Eventigo",
    href: "https://eventigo.io/",
    icon: IconDeviceMobile,
  },
  {
    label: "Посмотреть My HR",
    href: "https://stg.ilovehr.ink/",
    icon: IconUsersGroup,
  },
];
