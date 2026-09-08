import { Language } from '../i18n/types';
import { ALL_MACHINERY } from '../data/machineryData';

export interface SEOProps {
  view: 'home' | 'contact' | 'machinery' | 'about' | 'career';
  categorySlug?: string | null;
  machineId?: string | null;
  language: Language;
}

const SITE_URL = 'https://upworx.lv';
const DEFAULT_IMAGE = `${SITE_URL}/Hero-upworx.webp`;

export const SEO_DATA = {
  LV: {
    locale: 'lv_LV',
    htmlLang: 'lv',
    siteName: 'UPWORX',
    home: {
      title: 'UPWORX | Industriālie Risinājumi un Iekārtas',
      description: 'Industriālo iekārtu, CNC darbgaldu, lāzergriešanas un automatizācijas risinājumu piegāde, uzstādīšana un serviss visā Baltijā.',
      url: '/',
    },
    about: {
      title: 'Par Mums | UPWORX Industriālās Tehnoloģijas',
      description: 'Uzziniet vairāk par UPWORX komandu, pieredzi, vērtībām un industriālo risinājumu realizētajiem projektiem Baltijā.',
      url: '/par-mums',
    },
    career: {
      title: 'Karjera UPWORX | Pievienojies Komandai',
      description: 'Meklējam servisa inženierus, automatizācijas speciālistus un iekārtu pārdošanas ekspertus. Izvēlies stabilu nākotni.',
      url: '/karjera',
    },
    contact: {
      title: 'Kontakti un Konsultācija | UPWORX',
      description: 'Sazinieties ar UPWORX speciālistiem — pieprasiet tehnisko konsultāciju, cenas piedāvājumu vai iekārtu servisu.',
      url: '/kontakti',
    },
    machinery: {
      title: 'Iekārtu Katalogs | Metālapstrāde un CNC | UPWORX',
      description: 'Augstas precizitātes metālapstrādes, lokšņu liekšanas, lāzergriešanas, CNC un automatizācijas iekārtu katalogs.',
      url: '/iekartas',
    },
    categories: {
      metalapstrade: {
        title: 'Metālapstrādes Iekārtas | UPWORX',
        description: 'Mūsdienīgas hidrauliskās un elektriskās lokšņu liekšanas preses, giljotīnas un giljotīnu šķēres no vadošajiem ražotājiem.',
        url: '/iekartas/metalapstrade',
      },
      'lazera-griesana': {
        title: 'Lāzergriešanas Iekārtas | Šķiedras Lāzeri | UPWORX',
        description: 'Šķiedras (fiber) lāzergriešanas darbgaldi loksnēm un caurulēm. Liels griešanas ātrums un maksimāla energoefektivitāte.',
        url: '/iekartas/lazera-griesana',
      },
      'cnc-iekartas': {
        title: 'CNC Frēzēšanas un Virpošanas Darbgaldi | UPWORX',
        description: 'Augstas precizitātes 3-asu un 5-asu CNC apstrādes centri un virpas ar aktīvajiem instrumentiem metālapstrādei.',
        url: '/iekartas/cnc-iekartas',
      },
      automatizacija: {
        title: 'Ražošanas Automatizācijas Risinājumi un Roboti | UPWORX',
        description: 'Industriālie roboti, robotizētās metināšanas un apkalpošanas šūnas ražošanas efektivitātes paaugstināšanai.',
        url: '/iekartas/automatizacija',
      },
    }
  },
  ENG: {
    locale: 'en_US',
    htmlLang: 'en',
    siteName: 'UPWORX',
    home: {
      title: 'UPWORX | Industrial Machinery & Solutions',
      description: 'Delivery, installation, and service of metalworking machines, CNC machine tools, fiber lasers, and automation in the Baltics.',
      url: '/',
    },
    about: {
      title: 'About Us | UPWORX Industrial Technologies',
      description: 'Learn about the UPWORX team, engineering expertise, company values, and successful industrial implementations.',
      url: '/about',
    },
    career: {
      title: 'Careers at UPWORX | Join Our Engineering Team',
      description: 'Open vacancies for service technicians, automation engineers, and industrial machinery sales specialists.',
      url: '/career',
    },
    contact: {
      title: 'Contact Us & Quotation | UPWORX',
      description: 'Get in touch with UPWORX specialists — request technical consultations, commercial quotations, or service support.',
      url: '/contact',
    },
    machinery: {
      title: 'Industrial Machinery Catalog | UPWORX',
      description: 'Comprehensive range of precision metal sheet bending, fiber laser cutting, CNC machining centers, and robotics.',
      url: '/iekartas',
    },
    categories: {
      metalapstrade: {
        title: 'Metalworking Machinery & Press Brakes | UPWORX',
        description: 'High-precision hydraulic and electric press brakes, plate rolls, and shears from world-leading manufacturers.',
        url: '/iekartas/metalapstrade',
      },
      'lazera-griesana': {
        title: 'Fiber Laser Cutting Machines | UPWORX',
        description: 'High-power fiber laser cutting machines for sheet metal and structural tubes with supreme speed and precision.',
        url: '/iekartas/lazera-griesana',
      },
      'cnc-iekartas': {
        title: 'CNC Machining Centers & Lathes | UPWORX',
        description: '3-axis and 5-axis CNC vertical milling and turning centers engineered for heavy-duty metal component manufacturing.',
        url: '/iekartas/cnc-iekartas',
      },
      automatizacija: {
        title: 'Robotics & Industrial Automation | UPWORX',
        description: 'Industrial robotic systems, automated press brake tending, robotic welding cells, and turnkey plant automation.',
        url: '/iekartas/automatizacija',
      },
    }
  },
  RU: {
    locale: 'ru_RU',
    htmlLang: 'ru',
    siteName: 'UPWORX',
    home: {
      title: 'UPWORX | Промышленное Оборудование и Станки',
      description: 'Поставка, установка и сервис металлообрабатывающего оборудования, станков с ЧПУ, лазерных комплексов и автоматизации в странах Балтии.',
      url: '/',
    },
    about: {
      title: 'О Нас | UPWORX Промышленные Технологии',
      description: 'Узнайте больше о команде UPWORX, опыте инженеров, ценностях и успешно реализованных промышленных проектах.',
      url: '/about',
    },
    career: {
      title: 'Карьера в UPWORX | Присоединяйтесь к Команде',
      description: 'Вакансии для сервисных инженеров, специалистов по автоматизации и менеджеров по продажам оборудования.',
      url: '/career',
    },
    contact: {
      title: 'Контакты и Консультации | UPWORX',
      description: 'Свяжитесь со специалистами UPWORX — запросите техническую консультацию, коммерческое предложение или сервис.',
      url: '/contact',
    },
    machinery: {
      title: 'Каталог Оборудования | Станки с ЧПУ | UPWORX',
      description: 'Каталог высокоточных листогибочных прессов, оптоволоконных лазеров, фрезерных и токарных станков с ЧПУ.',
      url: '/iekartas',
    },
    categories: {
      metalapstrade: {
        title: 'Металлообрабатывающее Оборудование | UPWORX',
        description: 'Современные гидравлические и электрические листогибочные прессы и гильотины от ведущих мировых производителей.',
        url: '/iekartas/metalapstrade',
      },
      'lazera-griesana': {
        title: 'Оптоволоконные Лазерные Станки | UPWORX',
        description: 'Оптоволоконные станки лазерной резки для листового металла и труб с максимальной точностью и производительностью.',
        url: '/iekartas/lazera-griesana',
      },
      'cnc-iekartas': {
        title: 'Станки с ЧПУ, Фрезерные и Токарные Центры | UPWORX',
        description: 'Высокоточные 3-осевые и 5-осевые обрабатывающие центры и токарные станки для сложной металлообработки.',
        url: '/iekartas/cnc-iekartas',
      },
      automatizacija: {
        title: 'Автоматизация Производства и Роботы | UPWORX',
        description: 'Промышленные роботы, роботизированные сварочные комплексы и ячейки автоматизации для предприятий.',
        url: '/iekartas/automatizacija',
      },
    }
  }
};

/**
 * Dynamically updates document title, meta tags, canonical link, social cards and JSON-LD schema
 */
export function updateSEO({ view, categorySlug, machineId, language }: SEOProps) {
  const langData = SEO_DATA[language] || SEO_DATA.LV;

  // Set HTML lang attribute
  document.documentElement.lang = langData.htmlLang;

  let title = langData.home.title;
  let description = langData.home.description;
  let canonicalPath = '/';
  let ogImage = DEFAULT_IMAGE;
  let ogType = 'website';
  let activeMachine = null;

  if (view === 'about') {
    title = langData.about.title;
    description = langData.about.description;
    canonicalPath = '/par-mums';
  } else if (view === 'career') {
    title = langData.career.title;
    description = langData.career.description;
    canonicalPath = '/karjera';
  } else if (view === 'contact') {
    title = langData.contact.title;
    description = langData.contact.description;
    canonicalPath = '/kontakti';
  } else if (view === 'machinery') {
    if (machineId) {
      activeMachine = ALL_MACHINERY.find(m => m.id === machineId);
      if (activeMachine) {
        title = `${activeMachine.brand} ${activeMachine.model} | UPWORX`;
        description = `${activeMachine.brand} ${activeMachine.model} (${activeMachine.type}) - ${activeMachine.shortDescription.slice(0, 140)}...`;
        canonicalPath = `/iekartas/${activeMachine.category}/${activeMachine.id}`;
        if (activeMachine.image.startsWith('http')) {
          ogImage = activeMachine.image;
        } else {
          ogImage = `${SITE_URL}${activeMachine.image}`;
        }
        ogType = 'product';
      } else {
        title = langData.machinery.title;
        description = langData.machinery.description;
        canonicalPath = '/iekartas';
      }
    } else if (categorySlug && (langData.categories as Record<string, { title: string; description: string; url: string }>)[categorySlug]) {
      const catConfig = (langData.categories as Record<string, { title: string; description: string; url: string }>)[categorySlug];
      title = catConfig.title;
      description = catConfig.description;
      canonicalPath = catConfig.url;
    } else {
      title = langData.machinery.title;
      description = langData.machinery.description;
      canonicalPath = '/iekartas';
    }
  }

  // Update document title
  document.title = title;

  const fullCanonicalUrl = `${SITE_URL}${canonicalPath === '/' ? '' : canonicalPath}`;

  // Helper to safely set meta tag
  const setMeta = (nameOrProp: 'name' | 'property', attrValue: string, content: string) => {
    let el = document.querySelector(`meta[${nameOrProp}="${attrValue}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(nameOrProp, attrValue);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  // Primary Meta Tags
  setMeta('name', 'description', description);
  setMeta('name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
  setMeta('name', 'author', 'UPWORX');

  // Open Graph
  setMeta('property', 'og:type', ogType);
  setMeta('property', 'og:url', fullCanonicalUrl);
  setMeta('property', 'og:title', title);
  setMeta('property', 'og:description', description);
  setMeta('property', 'og:image', ogImage);
  setMeta('property', 'og:site_name', langData.siteName);
  setMeta('property', 'og:locale', langData.locale);

  // Twitter Cards
  setMeta('name', 'twitter:card', 'summary_large_image');
  setMeta('name', 'twitter:url', fullCanonicalUrl);
  setMeta('name', 'twitter:title', title);
  setMeta('name', 'twitter:description', description);
  setMeta('name', 'twitter:image', ogImage);

  // Canonical Link
  let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.setAttribute('href', fullCanonicalUrl);

  // JSON-LD Structured Data Schema Markup
  updateSchemaJsonLd({
    fullCanonicalUrl,
    title,
    description,
    ogImage,
    activeMachine,
    language
  });
}

function updateSchemaJsonLd({
  fullCanonicalUrl,
  title,
  description,
  ogImage,
  activeMachine,
  language
}: {
  fullCanonicalUrl: string;
  title: string;
  description: string;
  ogImage: string;
  activeMachine: typeof ALL_MACHINERY[0] | null | undefined;
  language: Language;
}) {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    '@id': 'https://upworx.lv/#organization',
    name: 'UPWORX',
    legalName: 'SIA UPWORX',
    url: 'https://upworx.lv',
    logo: 'https://upworx.lv/logo.svg',
    image: 'https://upworx.lv/Hero-upworx.webp',
    description: 'Industriālo metālapstrādes iekārtu, CNC darbgaldu, lāzergriešanas un ražošanas automatizācijas risinājumi.',
    telephone: '+37126474339',
    email: 'info@upworx.lv',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'LV',
      addressLocality: 'Rīga',
      streetAddress: 'Dzelzavas iela 117'
    },
    areaServed: [
      { '@type': 'Country', name: 'Latvia' },
      { '@type': 'Country', name: 'Lithuania' },
      { '@type': 'Country', name: 'Estonia' }
    ],
    priceRange: '€€€€'
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://upworx.lv/#website',
    url: 'https://upworx.lv',
    name: 'UPWORX Industriālie Risinājumi',
    publisher: {
      '@id': 'https://upworx.lv/#organization'
    },
    inLanguage: ['lv-LV', 'en-US', 'ru-RU']
  };

  const breadcrumbsList = [
    {
      '@type': 'ListItem',
      position: 1,
      name: language === 'RU' ? 'Главная' : language === 'ENG' ? 'Home' : 'Sākums',
      item: 'https://upworx.lv/'
    }
  ];

  if (fullCanonicalUrl.includes('/iekartas')) {
    breadcrumbsList.push({
      '@type': 'ListItem',
      position: 2,
      name: language === 'RU' ? 'Оборудование' : language === 'ENG' ? 'Machinery' : 'Iekārtas',
      item: 'https://upworx.lv/iekartas'
    });
    if (activeMachine) {
      breadcrumbsList.push({
        '@type': 'ListItem',
        position: 3,
        name: activeMachine.categoryName,
        item: `https://upworx.lv/iekartas/${activeMachine.category}`
      });
      breadcrumbsList.push({
        '@type': 'ListItem',
        position: 4,
        name: `${activeMachine.brand} ${activeMachine.model}`,
        item: fullCanonicalUrl
      });
    }
  } else if (fullCanonicalUrl.includes('/par-mums') || fullCanonicalUrl.includes('/about')) {
    breadcrumbsList.push({
      '@type': 'ListItem',
      position: 2,
      name: language === 'RU' ? 'О Нас' : language === 'ENG' ? 'About Us' : 'Par Mums',
      item: fullCanonicalUrl
    });
  } else if (fullCanonicalUrl.includes('/karjera') || fullCanonicalUrl.includes('/career')) {
    breadcrumbsList.push({
      '@type': 'ListItem',
      position: 2,
      name: language === 'RU' ? 'Карьера' : language === 'ENG' ? 'Career' : 'Karjera',
      item: fullCanonicalUrl
    });
  } else if (fullCanonicalUrl.includes('/kontakti') || fullCanonicalUrl.includes('/contact')) {
    breadcrumbsList.push({
      '@type': 'ListItem',
      position: 2,
      name: language === 'RU' ? 'Контакты' : language === 'ENG' ? 'Contact' : 'Kontakti',
      item: fullCanonicalUrl
    });
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbsList
  };

  const graphList: unknown[] = [orgSchema, websiteSchema, breadcrumbSchema];

  // If viewing a machine detail page, append Product schema
  if (activeMachine) {
    const productSchema = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: `${activeMachine.brand} ${activeMachine.model}`,
      image: ogImage,
      description: activeMachine.shortDescription,
      brand: {
        '@type': 'Brand',
        name: activeMachine.brand
      },
      category: activeMachine.categoryName,
      offers: {
        '@type': 'Offer',
        priceCurrency: 'EUR',
        price: '0',
        priceSpecification: {
          '@type': 'PriceSpecification',
          description: 'Cena pēc pieprasījuma / Price upon request'
        },
        availability: 'https://schema.org/InStock',
        url: fullCanonicalUrl,
        seller: {
          '@id': 'https://upworx.lv/#organization'
        }
      }
    };
    graphList.push(productSchema);
  }

  const jsonLdPayload = {
    '@context': 'https://schema.org',
    '@graph': graphList
  };

  let scriptEl = document.getElementById('seo-jsonld') as HTMLScriptElement | null;
  if (!scriptEl) {
    scriptEl = document.createElement('script');
    scriptEl.id = 'seo-jsonld';
    scriptEl.type = 'application/ld+json';
    document.head.appendChild(scriptEl);
  }
  scriptEl.textContent = JSON.stringify(jsonLdPayload);
}
