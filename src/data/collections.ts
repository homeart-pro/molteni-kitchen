// Real facts only: designer names and short descriptions are either sourced directly
// from molteni.it (marked "source: molteni.it") or are minimal factual statements
// (collection name, designer, Made in Italy). Nothing here is invented marketing copy.

export type Collection = {
  slug: string;
  name: string;
  designer: string | null;
  designerBio: string | null;
  hasDesignerPhoto: boolean;
  lead: string;
  body: string;
  /** Short, scannable facts shown as a distinct block — not buried in body prose. */
  highlights: string[];
  outdoor?: boolean;
};

export const collections: Collection[] = [
  {
    slug: 'physis',
    name: 'Physis',
    designer: 'Vincent Van Duysen',
    designerBio: null,
    hasDesignerPhoto: true,
    lead: '',
    body: '',
    highlights: [],
  },
  {
    slug: 'vvd',
    name: 'VVD',
    designer: 'Vincent Van Duysen',
    designerBio:
      'Бельгийский архитектор, креативный директор Molteni&C с 2016 года. Известен строгим, почти монашеским минимализмом и вниманием к материалам в их естественном, необработанном выражении.',
    hasDesignerPhoto: true,
    lead: 'Кухня Vincent Van Duysen для Molteni&C.',
    body:
      'VVD воплощает баланс функциональной точности и сдержанной элегантности. Каждый элемент задуман так, чтобы подчеркнуть скульптурность форм и тактильность материалов. Точность столярной работы и гармония пропорций делают кухню одновременно практичной, спокойной и визуально выразительной (источник: molteni.it).',
    highlights: [
      'Материалы: олово (pewter), орех, зелёный порфир',
      'Скульптурные, рельефные фасады с усиленной детализацией',
    ],
  },
  {
    slug: 'intersection',
    name: 'Intersection',
    designer: 'Vincent Van Duysen',
    designerBio:
      'Бельгийский архитектор, креативный директор Molteni&C с 2016 года. Известен строгим, почти монашеским минимализмом и вниманием к материалам в их естественном, необработанном выражении.',
    hasDesignerPhoto: true,
    lead: 'Кухня Vincent Van Duysen для Molteni&C.',
    body:
      'Intersection выпускается в широком выборе материалов и отделок, включая моно-материальную версию — монолитный объект, вдохновлённый скульптурной формой. Инкрустация на фасадах подчёркивает фактуру материалов (источник: molteni.it).',
    highlights: [
      'Моно-материальная версия — монолитный объект без комбинации отделок',
      'Двери и ящики без ручек — скрытый канал под кромкой столешницы',
      'Конфигурации: линейная, угловая, островная',
      'Разработана инженерным департаментом Molteni&C Dada Engineering',
    ],
  },
  {
    slug: 'ratio',
    name: 'Ratio',
    designer: 'Vincent Van Duysen',
    designerBio:
      'Бельгийский архитектор, креативный директор Molteni&C с 2016 года. Известен строгим, почти монашеским минимализмом и вниманием к материалам в их естественном, необработанном выражении.',
    hasDesignerPhoto: true,
    lead: 'Архитектурная система с запатентованной дверью толщиной 13 мм.',
    body:
      'Ratio — архитектурная система, где пустые объёмы и массивные элементы уравновешены между собой. Металлические направляющие организуют навесные модули, колонны и аксессуары; столешницы разной толщины создают контраст лёгкости и основательности (источник: molteni.it).',
    highlights: [
      'Патент: сверхтонкая дверь толщиной 13 мм с интегрированным профилем-ручкой',
      'Открытые колонны Atelier со стеклянными полками и подсветкой',
      'Технические колонны с подсветкой изнутри и выдвижными элементами',
      'Фирменная мойка Ratio в нескольких вариантах отделки',
    ],
  },
  {
    slug: 'prime',
    name: 'Prime',
    designer: null,
    designerBio: null,
    hasDesignerPhoto: false,
    lead: 'Кухня для тех, кто относится к готовке с юностью духа и динамикой.',
    body:
      'Prime — кухня Molteni&C для тех, кто подходит к готовке с молодым, динамичным настроем (источник: molteni.it).',
    highlights: [
      'Сплошной паз-ручка по всей длине и ширине фасадов, переходящий на боковые панели',
      'Заменяет традиционные закрытые торцы — эргономичный способ открывания без ручек',
    ],
  },
  {
    slug: 'hi-line-6',
    name: 'Hi-Line 6',
    designer: 'Ferruccio Laviani',
    designerBio:
      'Итальянский дизайнер и архитектор, сотрудничает с Molteni&C с 1999 года. Известен смелым, скульптурным подходом к мебели и интерьерным объектам.',
    hasDesignerPhoto: true,
    lead: 'Кухня превращается в архитектурное жилое пространство.',
    body:
      'Hi-Line 6 Ferruccio Laviani превращает кухню в архитектурное жилое пространство, соединяя геометрию, точность и теплоту материалов. Модульная структура позволяет собирать как открытые просторные, так и компактные планировки (источник: molteni.it).',
    highlights: [
      'Elle Decor Design Award, 2007',
      'Высокие нижние модули — увеличенная вместимость',
      'Открывание: встроенные пазы-захваты, скрытые ручки или механизмы push-pull',
    ],
  },
  {
    slug: 'tivali',
    name: 'Tivalì 2.0',
    designer: 'Yabu Pushelberg',
    designerBio:
      'Дизайн-студия Yabu Pushelberg — Джордж Ябу и Гленн Пушельберг основали студию в 1980 году, офисы в Нью-Йорке и Торонто. Среди самых известных интерьерных дизайнеров мира, работают с ведущими отельными и мебельными брендами.',
    hasDesignerPhoto: true,
    lead: 'Кухня-шкаф, которая скрывается за раздвижными панелями.',
    body:
      'Tivalì 2.0 by Yabu Pushelberg построена вокруг эффекта «амфитеатра»: изогнутая столешница и наклонные торцевые основания создают ощущение сцены (источник: molteni.it).',
    highlights: [
      'Столешница из мрамора или камня, изогнутая по форме «амфитеатра»',
      'Задняя панель-«задник» с открытыми полками на встроенной LED-подсветке',
      'Под столешницей — скрытые контейнеры с дверцами и вместительные корзины',
    ],
  },
  {
    slug: 'helios',
    name: 'Helios',
    designer: 'Vincent Van Duysen',
    designerBio:
      'Бельгийский архитектор, креативный директор Molteni&C с 2016 года. Известен строгим, почти монашеским минимализмом и вниманием к материалам в их естественном, необработанном выражении.',
    hasDesignerPhoto: true,
    lead: 'Кухня для улицы — терраса, сад, летняя кухня.',
    body:
      'Helios дополняет уличные коллекции Molteni&C Landmark и Timeout, образуя единый ансамбль мебели для террас и садов (источник: molteni.it).',
    highlights: [
      'Материалы: тик, натуральный камень, сталь, керамогранит MDi by Inalco',
      'Часть ансамбля с коллекциями Landmark и Timeout',
    ],
    outdoor: true,
  },
];

export function getCollection(slug: string) {
  return collections.find((c) => c.slug === slug);
}
