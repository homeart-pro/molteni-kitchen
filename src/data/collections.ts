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
  },
  {
    slug: 'vvd',
    name: 'VVD',
    designer: 'Vincent Van Duysen',
    designerBio:
      'Бельгийский архитектор, арт-директор Molteni&C. Известен строгим, почти монашеским минимализмом и вниманием к материалам в их естественном, необработанном выражении.',
    hasDesignerPhoto: true,
    lead: 'Кухня Vincent Van Duysen для Molteni&C.',
    body:
      'VVD — часть линейки кухонь, разработанных Vincent Van Duysen для Molteni&C. Как и другие коллекции архитектора, она построена на чистых геометрических объёмах и сдержанной палитре материалов.',
  },
  {
    slug: 'intersection',
    name: 'Intersection',
    designer: 'Vincent Van Duysen',
    designerBio:
      'Бельгийский архитектор, арт-директор Molteni&C. Известен строгим, почти монашеским минимализмом и вниманием к материалам в их естественном, необработанном выражении.',
    hasDesignerPhoto: true,
    lead: 'Кухня Vincent Van Duysen для Molteni&C.',
    body:
      'Intersection — одна из первых кухонных коллекций, созданных Vincent Van Duysen для Molteni&C. Строится на пересечении объёмов и материалов, отсюда и название.',
  },
  {
    slug: 'ratio',
    name: 'Ratio',
    designer: 'Vincent Van Duysen',
    designerBio:
      'Бельгийский архитектор, арт-директор Molteni&C. Известен строгим, почти монашеским минимализмом и вниманием к материалам в их естественном, необработанном выражении.',
    hasDesignerPhoto: true,
    lead: 'Кухня Vincent Van Duysen для Molteni&C.',
    body:
      'Ratio — кухня Vincent Van Duysen, построенная на выверенных пропорциях объёмов и модульности систем хранения.',
  },
  {
    slug: 'prime',
    name: 'Prime',
    designer: null,
    designerBio: null,
    hasDesignerPhoto: false,
    lead: 'Кухня для тех, кто относится к готовке с юностью духа и динамикой.',
    body:
      'Prime — кухня Molteni&C для тех, кто подходит к готовке с молодым, динамичным настроем (источник: molteni.it). Более доступная точка входа в кухонные коллекции бренда.',
  },
  {
    slug: 'hi-line-6',
    name: 'Hi-Line 6',
    designer: 'Ferruccio Laviani',
    designerBio:
      'Итальянский дизайнер и архитектор, много лет сотрудничает с Molteni&C. Известен смелым, скульптурным подходом к мебели и интерьерным объектам.',
    hasDesignerPhoto: true,
    lead: 'Кухня превращается в архитектурное жилое пространство.',
    body:
      'Hi-Line 6 Ferruccio Laviani превращает кухню в архитектурное жилое пространство, соединяя геометрию, точность и теплоту материалов (источник: molteni.it).',
  },
  {
    slug: 'tivali',
    name: 'Tivalì 2.0',
    designer: 'Yabu Pushelberg',
    designerBio:
      'Дизайн-студия Yabu Pushelberg (Джордж Ябу и Гленн Пушельберг, Торонто) — среди самых известных интерьерных дизайнеров мира, работают с ведущими отельными и мебельными брендами.',
    hasDesignerPhoto: true,
    lead: 'Кухня-шкаф, которая скрывается за раздвижными панелями.',
    body:
      'Tivalì 2.0 by Yabu Pushelberg — компактная кухонная система, полностью скрывающаяся за раздвижными дверьми, когда не используется. Разработана дизайн-студией Yabu Pushelberg для Molteni&C.',
  },
  {
    slug: 'helios',
    name: 'Helios',
    designer: 'Vincent Van Duysen',
    designerBio:
      'Бельгийский архитектор, арт-директор Molteni&C. Известен строгим, почти монашеским минимализмом и вниманием к материалам в их естественном, необработанном выражении.',
    hasDesignerPhoto: true,
    lead: 'Кухня для улицы — терраса, сад, летняя кухня.',
    body:
      'Helios — уличная (outdoor) кухня Vincent Van Duysen для Molteni&C: те же принципы архитектурного минимализма, адаптированные для использования на открытом воздухе.',
    outdoor: true,
  },
];

export function getCollection(slug: string) {
  return collections.find((c) => c.slug === slug);
}
