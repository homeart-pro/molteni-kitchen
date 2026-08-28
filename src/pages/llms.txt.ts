import type { APIRoute } from 'astro';
import { collections } from '../data/collections';

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const url = (path: string) => new URL(`${base}${path}`, site).toString();

  const lines = [
    '# Molteni Kitchen',
    '',
    '> Официальный дилер Molteni&C (Италия) в России. Кухни премиум-класса Made in Italy: ' +
      '8 коллекций от Vincent Van Duysen, Ferruccio Laviani и дизайн-студии Yabu Pushelberg. ' +
      'Консультации, подбор конфигурации и материалов, сопровождение проекта.',
    '',
    '## Коллекции',
    '',
    ...collections.map(
      (c) =>
        `- [${c.name}](${url(`/collections/${c.slug}`)})${c.designer ? ` — дизайнер ${c.designer}` : ''}${
          c.outdoor ? ' (уличная кухня)' : ''
        }`
    ),
    '',
    '## Страницы',
    '',
    `- [Все коллекции](${url('/collections')})`,
    `- [О бренде Molteni&C](${url('/about')})`,
    `- [Шоурум](${url('/showroom')})`,
    `- [Контакты](${url('/contacts')})`,
    '',
  ];

  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
