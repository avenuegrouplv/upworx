export interface MainParam {
  value: string;
  label: string;
}

export interface AdvantageItem {
  title: string;
  description: string;
}

export interface TechItem {
  title: string;
  description: string;
}

export interface DocItem {
  title: string;
  fileSize?: string;
  fileUrl?: string;
}

export interface TechnicalSpec {
  parameter: string;
  value: string;
}

export interface MachineItem {
  id: string; // URL slug
  name: string;
  model: string;
  brand: string;
  type: string;
  category: 'metalapstrade' | 'lazera-griesana' | 'cnc-iekartas' | 'automatizacija';
  categoryName: string;
  image: string;
  galleryImages?: string[];
  shortDescription: string;
  threeMainParams: MainParam[];
  aboutText: string;
  advantages: AdvantageItem[];
  specs: TechnicalSpec[];
  technologies?: TechItem[];
  documentation?: DocItem[];
  functions?: string[];
}

export interface CategoryMeta {
  id: 'metalapstrade' | 'lazera-griesana' | 'cnc-iekartas' | 'automatizacija';
  urlSlug: string;
  urlPath: string;
  name: string;
  subtitle: string;
  description: string;
}

export const MACHINERY_CATEGORIES: CategoryMeta[] = [
  {
    id: 'metalapstrade',
    urlSlug: 'metalapstrade',
    urlPath: '/iekartas/metalapstrade',
    name: 'Metālapstrāde',
    subtitle: 'Locīšanas preses un virpošanas centri',
    description: ''
  },
  {
    id: 'lazera-griesana',
    urlSlug: 'lazera-griesana',
    urlPath: '/iekartas/lazera-griesana',
    name: 'Lāzera griešana',
    subtitle: 'Šķiedru lāzeri loksnēm un caurulēm',
    description: 'Modernākie 2D un 3D šķiedru (fiber) lāzergriešanas centri lokšņu materiālu un cauruļu ātrgaitas precīzai piegriešanai.'
  },
  {
    id: 'cnc-iekartas',
    urlSlug: 'cnc-iekartas',
    urlPath: '/iekartas/cnc-iekartas',
    name: 'CNC iekārtas',
    subtitle: '5-asu un ātrgaitas frēzēšanas centri',
    description: 'Augstākās ražības vertikālie un 5-asu vienlaicīgās apstrādes centri sarežģītas ģeometrijas detaļu precīzai frēzēšanai.'
  },
  {
    id: 'automatizacija',
    urlSlug: 'automatizacija',
    urlPath: '/iekartas/automatizacija',
    name: 'Automatizācija',
    subtitle: 'Robotšūnas un materiālu noliktavas',
    description: 'Integrētas ražošanas līnijas, robotizētas darbagaldu apkalpošanas šūnas un automātiskās lokšņu uzglabāšanas sistēmas.'
  }
];

export const ALL_MACHINERY: MachineItem[] = [
  // ==========================================
  // 1. METĀLAPSTRĀDE (4 iekārtas)
  // ==========================================
  {
    id: 'trumpf-trubend-5170',
    model: 'TruBend 5170',
    name: 'TruBend 5170',
    brand: 'TRUMPF',
    type: 'CNC hidrauliskā locīšanas prese',
    category: 'metalapstrade',
    categoryName: 'Metālapstrāde',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200'
    ],
    shortDescription: 'Profesionāla CNC hidrauliskā locīšanas prese lokšņu metāla apstrādei, kas apvieno 170 tonnu presēšanas spēku, 3230 mm locīšanas garumu un automātisku ACB Wireless leņķa mērīšanas sistēmu.',
    threeMainParams: [
      { value: '1700 kN', label: 'Spiediena spēks' },
      { value: '3230 mm', label: 'Locīšanas garums' },
      { value: 'ACB Wireless', label: 'Automātiska leņķa mērīšana' }
    ],
    aboutText: 'TRUMPF TruBend 5170 ir CNC hidrauliskā locīšanas prese profesionālai lokšņu metāla apstrādei. Iekārta paredzēta uzņēmumiem, kuriem nepieciešama efektīva, stabila un atkārtojama dažādu metāla detaļu locīšana. 1700 kN presēšanas spēks un 3230 mm locīšanas garums nodrošina plašas pielietojuma iespējas, savukārt ACB Wireless tehnoloģija ļauj automātiski kontrolēt locīšanas leņķi darba procesa laikā.',
    advantages: [
      {
        title: '1700 kN SPIEDIENA SPĒKS',
        description: 'Piemērota dažādu lokšņu metāla detaļu un materiālu profesionālai apstrādei.'
      },
      {
        title: '3230 MM LOCĪŠANAS GARUMS',
        description: 'Nodrošina iespēju apstrādāt arī lielāka izmēra detaļas.'
      },
      {
        title: 'ACB WIRELESS',
        description: 'Automātiska locīšanas leņķa mērīšana un kontrole darba procesa laikā.'
      },
      {
        title: 'CNC VADĪBA',
        description: 'Precīza un atkārtojama iekārtas darba procesu vadība.'
      }
    ],
    specs: [
      { parameter: 'Ražotājs', value: 'TRUMPF' },
      { parameter: 'Modelis', value: 'TruBend 5170' },
      { parameter: 'Iekārtas tips', value: 'CNC hidrauliskā locīšanas prese' },
      { parameter: 'Spiediena spēks', value: '1700 kN / 170 t' },
      { parameter: 'Locīšanas garums', value: '3230 mm' },
      { parameter: 'Leņķa mērīšanas sistēma', value: 'ACB Wireless' },
      { parameter: 'Brīvais attālums starp statņiem', value: '2690 mm' },
      { parameter: 'Darba gājiens (Y ass)', value: '445 mm' },
      { parameter: 'Atdures asu skaits', value: '6 asis (X, R, Z1, Z2, X1, X2)' },
      { parameter: 'Vadības sistēma', value: 'Touchpoint TruBend (21.5" Multi-Touch)' },
      { parameter: 'Pozicionēšanas precizitāte', value: '± 0.005 mm' }
    ],
    technologies: [
      {
        title: 'ACB Wireless',
        description: 'Optiskā un kontakta bezvadu leņķa mērīšanas sistēma, kas automātiski nosaka reālo locījuma leņķi un reāllaikā kompensē materiāla biezuma un elastības novirzes jau no pirmās detaļas.'
      }
    ],
    documentation: [
      { title: 'TRUMPF TruBend 5000 sērijas tehniskais katalogs', fileSize: '4.8 MB' },
      { title: 'ACB Wireless tehnoloģijas specifikācija', fileSize: '1.9 MB' }
    ]
  },
  {
    id: 'prima-power-ep-1030',
    model: 'eP-1030',
    name: 'eP-1030 Servo-Electric',
    brand: 'PRIMA POWER',
    type: 'Servo-elektriskā locīšanas prese',
    category: 'metalapstrade',
    categoryName: 'Metālapstrāde',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200'
    ],
    shortDescription: 'Videi draudzīga servo-elektriskā lokšņu locīšanas prese ar siksnu piedziņas sistēmu, kas samazina enerģijas patēriņu līdz 50% un novērš hidrauliskās eļļas apkopes.',
    threeMainParams: [
      { value: '1050 kN', label: 'Spiediena spēks' },
      { value: '3100 mm', label: 'Locīšanas garums' },
      { value: 'Auto-Crowning', label: 'Dinamiskā kompensācija' }
    ],
    aboutText: 'PRIMA POWER eP-1030 apvieno servo-elektrisko siksnu piedziņas tehnoloģiju ar stingru O-veida rāmi, garantējot mikronu līmeņa atkārtojamību bez hidraulikas temperatūras svārstībām un ar minimālām uzturēšanas izmaksām.',
    advantages: [
      {
        title: '100% SERVO-ELEKTRISKĀ PIEDZIŅA',
        description: 'Tīra darbība bez hidrauliskās eļļas un līdz 50% zemāks elektroenerģijas patēriņš.'
      },
      {
        title: 'O-VEIDA MASĪVS RĀMIS',
        description: 'Novērš sānu statņu deformāciju pie maksimālām presēšanas slodzēm visā garumā.'
      },
      {
        title: 'AUTO-CROWNING SISTĒMA',
        description: 'Automātiska galda ielieces kompensācija perfektam leņķim visā 3100 mm garumā.'
      }
    ],
    specs: [
      { parameter: 'Ražotājs', value: 'PRIMA POWER' },
      { parameter: 'Modelis', value: 'eP-1030' },
      { parameter: 'Iekārtas tips', value: 'Servo-elektriskā locīšanas prese' },
      { parameter: 'Spiediena spēks', value: '1050 kN (105 t)' },
      { parameter: 'Locīšanas garums', value: '3100 mm' },
      { parameter: 'Atdures asis', value: '5 asis (X, R, Z1, Z2, Delta X)' },
      { parameter: 'Pozicionēšanas precizitāte', value: '± 0.002 mm' },
      { parameter: 'Vadības pults', value: 'Prima Electro Open Control 17"' }
    ],
    technologies: [
      {
        title: 'Servo-Belt Drive',
        description: 'Patentēta siksnu un skriemeļu mehānika ar servo motoriem vienmērīgi sadala presēšanas spēku pa visu siju bez lokāliem spriegumiem.'
      }
    ],
    documentation: [
      { title: 'Prima Power eP-sērijas buklets un parametri', fileSize: '3.4 MB' }
    ]
  },
  {
    id: 'mazak-slant-turn-550',
    model: 'Slant Turn 550',
    name: 'Slant Turn 550',
    brand: 'MAZAK',
    type: 'Smagās klases CNC virpa',
    category: 'metalapstrade',
    categoryName: 'Metālapstrāde',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200'
    ],
    shortDescription: 'Lielgabarīta horizontālais virpošanas centrs ar slīpo čuguna gultu, paredzēts masīvu vārpstu, cauruļu un enerģētikas korpusu apstrādei.',
    threeMainParams: [
      { value: 'Ø 910 mm', label: 'Maks. apstrādes diametrs' },
      { value: '3125 mm', label: 'Apstrādes garums' },
      { value: '45 kW / 4100 Nm', label: 'Spēcīgs vārpstas motors' }
    ],
    aboutText: 'MAZAK Slant Turn 550 nodrošina ārkārtēju vibrāciju slāpēšanu un jaudu liela diametra tērauda detaļu rupjajai un nobeiguma virpošanai. Aprīkota ar 45° slīpo čuguna gultu un 12 pozīciju smagās klases instrumentu torni.',
    advantages: [
      {
        title: 'SLĪPĀ ČUGUNA GULTA (45°)',
        description: 'Lieliska skaidu aizvadīšana un maksimāla rāmja vērpes izturība pie lielām griezējjaudām.'
      },
      {
        title: '4100 NM GRIEZES MOMENTS',
        description: '2 pakāpju pārnesumu kārba nodrošina milzīgu griezes momentu zemos vārpstas apgriezienos.'
      },
      {
        title: 'MAZATROL SMOOTHG VADĪBA',
        description: 'Intuitīva dialoga tipa CNC programmēšana un 3D sadursmju novēršanas modelēšana.'
      }
    ],
    specs: [
      { parameter: 'Ražotājs', value: 'MAZAK' },
      { parameter: 'Modelis', value: 'Slant Turn 550' },
      { parameter: 'Iekārtas tips', value: 'Smagās klases CNC virpa' },
      { parameter: 'Maks. diametrs virs gultas', value: 'Ø 1040 mm' },
      { parameter: 'Maks. apstrādes diametrs', value: 'Ø 910 mm' },
      { parameter: 'Maks. apstrādes garums', value: '3125 mm' },
      { parameter: 'Vārpstas urbums', value: 'Ø 185 mm' },
      { parameter: 'Vārpstas apgriezieni', value: '1200 apgr./min' },
      { parameter: 'Iekārtas masa', value: '17 500 kg' }
    ],
    documentation: [
      { title: 'MAZAK Slant Turn sērijas tehniskie dati', fileSize: '2.7 MB' }
    ]
  },
  {
    id: 'amada-hfe3i-1003',
    model: 'HFE3i 1003',
    name: 'HFE3i 1003',
    brand: 'AMADA',
    type: 'Eko-hidrauliskā CNC locīšanas prese',
    category: 'metalapstrade',
    categoryName: 'Metālapstrāde',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200'
    ],
    shortDescription: 'Precīza un energoefektīva CNC locīšanas prese ar patentētu reaktīvo kompensācijas galdu un skārienjūtīgu AMNC 3i 3D vadības konsoli.',
    threeMainParams: [
      { value: '1000 kN', label: 'Spiediena spēks' },
      { value: '3110 mm', label: 'Locīšanas garums' },
      { value: 'AMNC 3i', label: '3D skārienjūtīgā vadība' }
    ],
    aboutText: 'AMADA HFE3i sērija piedāvā invertora vadītu hidraulisko piedziņu, kas sūknē eļļu tikai locīšanas kustības laikā, būtiski samazinot siltuma izdalīšanos, troksni un elektroenerģijas patēriņu.',
    advantages: [
      {
        title: 'INVERTORA HIDRAULIKA',
        description: 'Samazina elektroenerģijas patēriņu līdz 20% salīdzinājumā ar parastajām hidrauliskajām presēm.'
      },
      {
        title: 'REAKTĪVAIS KOMPENSĀCIJAS GALDS',
        description: 'Patentēta Amada sistēma automātiski pielāgojas slodzei, garantējot taisnus locījumus.'
      },
      {
        title: 'AMNC 3I 3D VADĪBA',
        description: '18.5 collu skārienekrāns ar pilnu 3D detaļu locīšanas secības simulāciju.'
      }
    ],
    specs: [
      { parameter: 'Ražotājs', value: 'AMADA' },
      { parameter: 'Modelis', value: 'HFE3i 1003' },
      { parameter: 'Iekārtas tips', value: 'Eko-hidrauliskā CNC locīšanas prese' },
      { parameter: 'Spiediena spēks', value: '1000 kN (100 t)' },
      { parameter: 'Locīšanas garums', value: '3110 mm' },
      { parameter: 'Gājiens (Stroke)', value: '200 mm' },
      { parameter: 'Attālums starp rāmjiem', value: '2705 mm' },
      { parameter: 'Masa', value: '6 850 kg' }
    ],
    documentation: [
      { title: 'AMADA HFE3i preses brošūra', fileSize: '3.1 MB' }
    ]
  },

  // ==========================================
  // 2. LĀZERA GRIEŠANA (4 iekārtas)
  // ==========================================
  {
    id: 'bystronic-bystar-fiber-15kw',
    model: 'ByStar Fiber 6225 15kW',
    name: 'ByStar Fiber 6225 15kW',
    brand: 'BYSTRONIC',
    type: 'Augstas jaudas 2D šķiedru lāzergriešanas centrs',
    category: 'lazera-griesana',
    categoryName: 'Lāzera griešana',
    image: 'https://images.pexels.com/photos/224924/pexels-photo-224924.jpeg?auto=compress&cs=tinysrgb&w=1200',
    galleryImages: [
      'https://images.pexels.com/photos/224924/pexels-photo-224924.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    shortDescription: 'Augstākās veiktspējas 15 kW šķiedru lāzers lielformāta loksnēm ar izcilu dinamiku un griešanas spēju biezam tēraudam līdz 30 mm.',
    threeMainParams: [
      { value: '15 000 W', label: 'Fiber lāzera jauda' },
      { value: '6200 × 2500 mm', label: 'Apstrādes galds' },
      { value: 'Līdz 30 mm', label: 'Griešanas biezums' }
    ],
    aboutText: 'Bystronic ByStar Fiber 6225 ir radīts prasīgākajiem lielapjoma ražotājiem. 15 kW lāzera avots nodrošina zibenīgu griešanas ātrumu gan plānām loksnēm, gan nevainojamu fāzīšu un malu kvalitāti biezam tēraudam.',
    advantages: [
      {
        title: '15 KW ŠĶIEDRU AVOTS',
        description: 'Līdz 2.5 reizes lielāks griešanas ātrums un spēja perforēt biezu metālu sekundes daļās.'
      },
      {
        title: 'LIELFORMĀTA GALDS 6.2 × 2.5 M',
        description: 'Lielgabarīta konstrukciju un transporta mašīnbūves detaļu griešana bez savienojumiem.'
      },
      {
        title: 'AUTOMĀTISKA SPRAUSLU MAIŅA',
        description: '40 sprauslu magazīna ar kameras optisko stāvokļa un nodiluma kontroli.'
      }
    ],
    specs: [
      { parameter: 'Ražotājs', value: 'BYSTRONIC' },
      { parameter: 'Modelis', value: 'ByStar Fiber 6225' },
      { parameter: 'Iekārtas tips', value: '2D šķiedru lāzergriešanas centrs' },
      { parameter: 'Lāzera jauda', value: '15 000 W' },
      { parameter: 'Lokšņu izmēri', value: '6200 × 2500 mm' },
      { parameter: 'Maks. tērauda biezums', value: '30 mm' },
      { parameter: 'Maks. nerūsējošā tērauda biezums', value: '30 mm' },
      { parameter: 'Pozicionēšanas ātrums', value: '170 m/min' }
    ],
    technologies: [
      {
        title: 'BeamShaper tehnoloģija',
        description: 'Automātiski pielāgo lāzera stara profilu bieza tērauda griešanai ar skābekli, nodrošinot spoguļgludas griezuma malas.'
      }
    ],
    documentation: [
      { title: 'Bystronic ByStar Fiber tehniskā specifikācija', fileSize: '5.2 MB' }
    ]
  },
  {
    id: 'prima-power-platino-linear',
    model: 'Platino Linear 15kW',
    name: 'Platino Linear 15kW',
    brand: 'PRIMA POWER',
    type: 'Ātrgaitas 2D lāzera centrs ar lineārajiem motoriem',
    category: 'lazera-griesana',
    categoryName: 'Lāzera griešana',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200'
    ],
    shortDescription: 'Lineāro motoru 2D šķiedru lāzeris ar sintētiskā granīta rāmi, kas nodrošina 2.5G paātrinājumu un termisko stabilitāti.',
    threeMainParams: [
      { value: '15 000 W', label: 'Fiber avots' },
      { value: '2.5 G', label: 'Asu paātrinājums' },
      { value: 'Granīta rāmis', label: 'Vibrāciju slāpēšana' }
    ],
    aboutText: 'Prima Power Platino Linear apvieno magnētisko lineāro piedziņu ar dabīgā un sintētiskā granīta pamatni. Tas novērš mehānisko zobstieņu nodilumu un garantē izcilu ģeometrisko precizitāti daudzu gadu garumā.',
    advantages: [
      {
        title: 'BEZKONTAKTA LINEĀRIE MOTORI',
        description: '2.5G paātrinājums bez mehāniskiem zobratiem novērš aiztures un nodiluma kļūdas.'
      },
      {
        title: 'SINTĒTISKĀ GRANĪTA PĀRSEGUMS',
        description: 'Termiski inerts materiāls, kas absorbē griešanas vibrācijas labāk nekā metināts tērauds.'
      },
      {
        title: 'SMART CUT VADĪBA',
        description: 'Viedā staru fokusēšanas sistēma automātiski optimizē caurduršanas laiku.'
      }
    ],
    specs: [
      { parameter: 'Ražotājs', value: 'PRIMA POWER' },
      { parameter: 'Modelis', value: 'Platino Linear 15kW' },
      { parameter: 'Iekārtas tips', value: '2D lāzera centrs ar lineārajiem motoriem' },
      { parameter: 'Lāzera jauda', value: '15 000 W' },
      { parameter: 'Galda izmērs', value: '3000 × 1500 mm' },
      { parameter: 'Paātrinājums', value: '2.5 G' },
      { parameter: 'Pozicionēšanas ātrums', value: '200 m/min' }
    ],
    documentation: [
      { title: 'Prima Power Platino Linear pārskats', fileSize: '2.8 MB' }
    ]
  },
  {
    id: 'trumpf-trulaser-tube-7000',
    model: 'TruLaser Tube 7000 T05',
    name: 'TruLaser Tube 7000 T05',
    brand: 'TRUMPF',
    type: '3D lāzercentrs cauruļu un profilu griešanai',
    category: 'lazera-griesana',
    categoryName: 'Lāzera griešana',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200'
    ],
    shortDescription: 'Automatizēts 3D cauruļu lāzers ar slīpās griešanas galvu fāzītēm līdz 45°, kas apstrādā profilus un caurules līdz 254 mm diametrā.',
    threeMainParams: [
      { value: 'Ø 254 mm', label: 'Maks. caurules diametrs' },
      { value: '9.2 m', label: 'Automātiskā izejmateriāla padeve' },
      { value: '± 45°', label: '3D slīpā fāzīšu griešana' }
    ],
    aboutText: 'TRUMPF TruLaser Tube 7000 aizstāj zāģēšanu, urbšanu, frēzēšanu un fāzīšu noņemšanu vienā integrētā ciklā. Tas ļauj izgatavot precīzi saskanīgus cauruļu mezglus metināšanai bez iepriekšējas pielāgošanas.',
    advantages: [
      {
        title: '3D SLĪPĀ GRIEŠANA LĪDZ 45°',
        description: 'Sagatavo metināšanas fāzītes un sarežģītus cauruļu krustošanās mezglus vienā gājienā.'
      },
      {
        title: '9.2 M AUTO IEKRAUŠANA',
        description: 'Kūļu padeves magazīna automātiski ievada garos profilus iekārtas darba zonā.'
      },
      {
        title: 'RAPID CUT FUNKCIJA',
        description: 'Šķiedru lāzera cietvielu avots nodrošina zibenīgus caurumu piegriezumus plānsienu caurulēm.'
      }
    ],
    specs: [
      { parameter: 'Ražotājs', value: 'TRUMPF' },
      { parameter: 'Modelis', value: 'TruLaser Tube 7000 T05' },
      { parameter: 'Iekārtas tips', value: '3D lāzercentrs cauruļu un profilu griešanai' },
      { parameter: 'Lāzera jauda', value: '4000 W TruDisk' },
      { parameter: 'Maks. caurules diametrs', value: '254 mm' },
      { parameter: 'Maks. taisnstūra profils', value: '220 mm' },
      { parameter: 'Maks. izejmateriāla garums', value: '9200 mm' },
      { parameter: 'Gatavās detaļas garums', value: '6500 mm' }
    ],
    technologies: [
      {
        title: 'Bevel Cut 45°',
        description: 'Papildu rotācijas ass lāzera griezējgalvai ļauj veikt augstas precizitātes leņķveida fāzīšu piegriešanu atbilstoši metināšanas standartiem.'
      }
    ],
    documentation: [
      { title: 'TRUMPF TruLaser Tube katalogs', fileSize: '6.0 MB' }
    ]
  },
  {
    id: 'mazak-optiplex-3015-neo',
    model: 'Optiplex 3015 NEO 15kW',
    name: 'Optiplex 3015 NEO 15kW',
    brand: 'MAZAK',
    type: 'Šķiedru lāzergriešanas darbagalds',
    category: 'lazera-griesana',
    categoryName: 'Lāzera griešana',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200'
    ],
    shortDescription: 'Inovatīvs 15 kW šķiedru lāzers ar stara diametra un formas viedo modulāciju, kas optimizē enerģijas koncentrāciju dažādiem metāliem.',
    threeMainParams: [
      { value: '15 000 W', label: 'Fiber avots' },
      { value: '3050 × 1525 mm', label: 'Galda izmērs' },
      { value: 'MCT 3', label: 'Viedā lāzergalva' }
    ],
    aboutText: 'MAZAK Optiplex 3015 NEO piedāvā stara formas pārslēgšanu darba laikā, panākot spoguļgludu griezumu biezam nerūsējošajam tēraudam un maksimālu ātrumu plānam materiālam bez sprauslas maiņas.',
    advantages: [
      {
        title: 'STARA FORMAS KONTROLE',
        description: 'Pielāgo stara profilu konkrētam materiāla biezumam optimālai griešanas dinamikai.'
      },
      {
        title: 'VIEDĀ LĀZERGALVA MCT 3',
        description: 'Automātiska fokusa kalibrācija un sprauslas centrēšana ar iebūvētiem sensoriem.'
      },
      {
        title: 'MAZATROL SMOOTHLX CNC',
        description: 'Liels 21.5 collu vadības monitors ar skaidru nestinga un procesu pārskatu.'
      }
    ],
    specs: [
      { parameter: 'Ražotājs', value: 'MAZAK' },
      { parameter: 'Modelis', value: 'Optiplex 3015 NEO' },
      { parameter: 'Iekārtas tips', value: 'Šķiedru lāzergriešanas darbagalds' },
      { parameter: 'Jauda', value: '15 000 W' },
      { parameter: 'Darba zona', value: '3050 × 1525 mm' },
      { parameter: 'Maks. tērauda biezums', value: '32 mm' },
      { parameter: 'Pārvietošanās ātrums', value: '160 m/min' }
    ],
    documentation: [
      { title: 'MAZAK Optiplex NEO brošūra', fileSize: '3.9 MB' }
    ]
  },

  // ==========================================
  // 3. CNC IEKĀRTAS (4 iekārtas)
  // ==========================================
  {
    id: 'dmg-mori-dmu-75-monoblock',
    model: 'DMU 75 monoBLOCK',
    name: 'DMU 75 monoBLOCK',
    brand: 'DMG MORI',
    type: 'Universālais 5-asu CNC apstrādes centrs',
    category: 'cnc-iekartas',
    categoryName: 'CNC iekārtas',
    image: 'https://images.pexels.com/photos/3846554/pexels-photo-3846554.jpeg?auto=compress&cs=tinysrgb&w=1200',
    galleryImages: [
      'https://images.pexels.com/photos/3846554/pexels-photo-3846554.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    shortDescription: 'Augstas precizitātes universālais 5-asu apstrādes centrs ar monolīto monoBLOCK čuguna konstrukciju un 20 000 apgr./min SpeedMASTER vārpstu.',
    threeMainParams: [
      { value: '5 asis', label: 'Vienlaicīga apstrāde' },
      { value: '20 000 apgr./min', label: 'SpeedMASTER vārpsta' },
      { value: '750 × 650 × 560 mm', label: 'Gājieni X / Y / Z' }
    ],
    aboutText: 'DMG MORI DMU 75 monoBLOCK ir industrijas etalons sarežģītu 5-asu aviācijas, medicīnas un mašīnbūves detaļu apstrādē. Tā monolītais rāmis ar trīspunktu balstu nodrošina maksimālu stingrību un termisko stabilitāti.',
    advantages: [
      {
        title: 'MONOLĪTAIS ČUGUNA KORPUSS',
        description: 'monoBLOCK konstrukcija garantē maksimālu stabilitāti un virsmas precizitāti zem 5 mikroniem.'
      },
      {
        title: '20 000 APGR./MIN VĀRPSTA',
        description: 'SpeedMASTER vārpsta ar 35 kW jaudu un 36 mēnešu rūpnīcas garantiju bez stundu limita.'
      },
      {
        title: 'CELOS AR SIEMENS 840D SL',
        description: 'Viedā darbagalda pārvaldība un tiešs savienojums ar uzņēmuma CAD/CAM tīklu.'
      }
    ],
    specs: [
      { parameter: 'Ražotājs', value: 'DMG MORI' },
      { parameter: 'Modelis', value: 'DMU 75 monoBLOCK' },
      { parameter: 'Iekārtas tips', value: 'Universālais 5-asu CNC apstrādes centrs' },
      { parameter: 'Gājieni X / Y / Z', value: '750 / 650 / 560 mm' },
      { parameter: 'Rotācijas galds (C / B)', value: 'C: 360° / B: -120° līdz +120°' },
      { parameter: 'Vārpstas apgriezieni', value: '20 000 apgr./min' },
      { parameter: 'Instrumentu magazīna', value: '60 vietas (SK40 / HSK-A63)' },
      { parameter: 'Maks. detaļas svars', value: '600 kg' }
    ],
    technologies: [
      {
        title: 'monoBLOCK Architecture',
        description: 'Viengabala čuguna rāmis ar iebūvētu dzesēšanas kanālu tīklu novērš termisko deformāciju ilgstošas nepārtrauktas frēzēšanas laikā.'
      }
    ],
    documentation: [
      { title: 'DMG MORI monoBLOCK sērijas katalogs', fileSize: '7.5 MB' }
    ]
  },
  {
    id: 'fanuc-robodrill-alpha-d21',
    model: 'ROBODRILL α-D21LiB5 ADV',
    name: 'ROBODRILL α-D21LiB5 ADV',
    brand: 'FANUC',
    type: 'Ultra ātrgaitas vertikālais CNC apstrādes centrs',
    category: 'cnc-iekartas',
    categoryName: 'CNC iekārtas',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=1200'
    ],
    shortDescription: 'Pasaulē populārākais ultra ātrgaitas vertikālais apstrādes centrs ar 0.9 sekunžu instrumentu maiņu un 1.4G asu paātrinājumu sērijveida ražošanai.',
    threeMainParams: [
      { value: '24 000 apgr./min', label: 'Vārpstas ātrums' },
      { value: '0.9 s', label: 'Instrumenta maiņa' },
      { value: '1.4 G', label: 'Asu dinamika' }
    ],
    aboutText: 'FANUC ROBODRILL ir sinonīms nepārspējamam ātrumam un ilgmūžībai. Iekārta ideāli piemērota alumīnija mezglu, vītņošanas un urbšanas darbiem ar minimālām cikla izmaksām.',
    advantages: [
      {
        title: '0.9 S INSTRUMENTA NOMAIŅA',
        description: 'Revolverveida magazīna ar zibensātru instrumentu maiņu samazina tukšgaitas dīkstāvi.'
      },
      {
        title: '1.4 G PAĀTRINĀJUMS',
        description: 'Ārkārtēja dinamika visās asīs zīmīgi saīsina viena cikla izpildes laiku.'
      },
      {
        title: 'FANUC 31I-B5 PLUS NANO CNC',
        description: 'Augstākās precizitātes nano interpolācija un 100% uzticamība gadiem ilgi.'
      }
    ],
    specs: [
      { parameter: 'Ražotājs', value: 'FANUC' },
      { parameter: 'Modelis', value: 'ROBODRILL α-D21LiB5 ADV' },
      { parameter: 'Iekārtas tips', value: 'Vertikālais ātrgaitas apstrādes centrs' },
      { parameter: 'Gājieni X / Y / Z', value: '700 / 400 / 330 mm' },
      { parameter: 'Vārpstas apgriezieni', value: '24 000 apgr./min' },
      { parameter: 'Instrumentu skaits', value: '21 vieta' },
      { parameter: 'Asu paātrinājums', value: '1.4 G' }
    ],
    documentation: [
      { title: 'FANUC ROBODRILL sērijas brošūra', fileSize: '2.3 MB' }
    ]
  },
  {
    id: 'haas-vf-4ss-super-speed',
    model: 'VF-4SS Super Speed',
    name: 'VF-4SS Super Speed',
    brand: 'HAAS',
    type: 'Lieljaudas vertikālais CNC apstrādes centrs',
    category: 'cnc-iekartas',
    categoryName: 'CNC iekārtas',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1200'
    ],
    shortDescription: 'Palielinātas jaudas vertikālais apstrādes centrs ar 12 000 apgr./min inline direct-drive vārpstu un plašu 1321 × 457 mm darba galdu.',
    threeMainParams: [
      { value: '12 000 apgr./min', label: 'Inline vārpsta' },
      { value: '1270 × 508 mm', label: 'Gājieni X / Y' },
      { value: '30+1', label: 'Ātrā sānu magazīna' }
    ],
    aboutText: 'HAAS VF-4SS nodrošina lielisku cenas un veiktspējas attiecību vidēju un lielu izmēru tērauda un krāsaino metālu detaļu sērijveida frēzēšanai.',
    advantages: [
      {
        title: 'TIEŠĀS PIEDZIŅAS VĀRPSTA',
        description: 'Inline direct-drive sistēma novērš siksnu vibrācijas un garantē izcilu detaļu virsmu.'
      },
      {
        title: '35.6 M/MIN ĀTRGAITAS GĀJIENI',
        description: 'Augsts pozicionēšanas ātrums saīsina starpposma kustību laiku.'
      },
      {
        title: 'HAAS NEXTGEN VADĪBA',
        description: 'Ērta vizuālā programmēšana ar WiFi savienojamību un pārskatāmu diagnostiku.'
      }
    ],
    specs: [
      { parameter: 'Ražotājs', value: 'HAAS' },
      { parameter: 'Modelis', value: 'VF-4SS Super Speed' },
      { parameter: 'Iekārtas tips', value: 'Vertikālais CNC apstrādes centrs' },
      { parameter: 'Gājieni X / Y / Z', value: '1270 / 508 / 635 mm' },
      { parameter: 'Galda izmērs', value: '1321 × 457 mm' },
      { parameter: 'Vārpstas jauda', value: '22.4 kW (Vector Drive)' },
      { parameter: 'Magazīnas ietilpība', value: '30+1 instruments' }
    ],
    documentation: [
      { title: 'HAAS VF sērijas tehniskā dokumentācija', fileSize: '4.1 MB' }
    ]
  },
  {
    id: 'mazak-variaxis-i-600',
    model: 'Variaxis i-600',
    name: 'Variaxis i-600',
    brand: 'MAZAK',
    type: '5-asu simultānais CNC apstrādes centrs',
    category: 'cnc-iekartas',
    categoryName: 'CNC iekārtas',
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1200'
    ],
    shortDescription: 'Augstākās klases simultānais 5-asu centrs ar iebūvētu Ø 600 mm sagatavju rotācijas galdu komplicētu kontūru izgatavošanai vienā iestiprinājumā.',
    threeMainParams: [
      { value: 'Ø 600 mm', label: 'Rotācijas galds' },
      { value: '18 000 apgr./min', label: 'Vārpstas apgriezieni' },
      { value: 'SmoothX', label: '3D skārienjutīgā vadība' }
    ],
    aboutText: 'MAZAK Variaxis i-600 ļauj veikt daudzskaldņu un brīvformas virsmu frēzēšanu vienā iestiprinājumā, novēršot pārkavēšanas kļūdas un samazinot ražošanas laiku.',
    advantages: [
      {
        title: 'INTEGRĒTS 5-ASU GALDS',
        description: 'Grozāmais un noliecāmais galds ar tiešās piedziņas motoriem maksimālai dinamikai.'
      },
      {
        title: 'MAZATROL SMOOTHX',
        description: 'Modernākā 5-asu CNC vadība ar reāllaika virtuālās sadursmes novēršanas algoritmu.'
      },
      {
        title: '80 INSTRUMENTU MAGAZĪNA',
        description: 'Liela ietilpība nodrošina elastību un ātru pāreju starp dažādu pasūtījumu sērijām.'
      }
    ],
    specs: [
      { parameter: 'Ražotājs', value: 'MAZAK' },
      { parameter: 'Modelis', value: 'Variaxis i-600' },
      { parameter: 'Iekārtas tips', value: '5-asu simultānais CNC apstrādes centrs' },
      { parameter: 'Gājieni X / Y / Z', value: '510 / 910 / 510 mm' },
      { parameter: 'A ass leņķis', value: '-120° līdz +30°' },
      { parameter: 'C ass rotācija', value: '± 360°' },
      { parameter: 'Vārpstas jauda', value: '30 kW' }
    ],
    technologies: [
      {
        title: 'Intelligent Thermal Shield',
        description: 'Sensori mēra temperatūras gradientus korpusā un automātiski veic kompensāciju mikronu līmenī.'
      }
    ],
    documentation: [
      { title: 'MAZAK Variaxis i-sērijas buklets', fileSize: '5.0 MB' }
    ]
  },

  // ==========================================
  // 4. AUTOMATIZĀCIJA (4 iekārtas)
  // ==========================================
  {
    id: 'fanuc-robot-cell-m20id',
    model: 'Robot Cell M-20iD/25',
    name: 'Robot Cell M-20iD/25',
    brand: 'FANUC',
    type: 'Robotizētā darbagaldu apkalpošanas šūna',
    category: 'automatizacija',
    categoryName: 'Automatizācija',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200'
    ],
    shortDescription: 'Automatizēta CNC darbagaldu sagatavju ielādes un gatavo detaļu izkraušanas šūna ar integrētu iRVision 3D redzes sistēmu.',
    threeMainParams: [
      { value: '25 kg', label: 'Celtspēja pie rokas' },
      { value: '1831 mm', label: 'Darba rādiuss' },
      { value: 'iRVision 3D', label: 'Optiskā redze' }
    ],
    aboutText: 'FANUC Robot Cell M-20iD/25 nodrošina nepārtrauktu CNC darbagaldu bezpilota darbību maiņās un brīvdienās. Robota dobā rokas konstrukcija pasargā kabeļus no skaidām un emulsijas.',
    advantages: [
      {
        title: '24/7 BEZPILOTA RAŽOŠANA',
        description: 'Iekārta var strādāt trešajā maiņā bez operatora klātbūtnes, palielinot ražību par 60%.'
      },
      {
        title: 'IRVISION 3D SISTĒMA',
        description: 'Kamera atpazīst nejauši novietotas sagataves paletēs bez dārgas orientēšanas mehānikas.'
      },
      {
        title: 'IP67 AIZSARDZĪBAS KLASE',
        description: 'Droša ekspluatācija agresīvā emulsijas, eļļas un karstu skaidu vidē.'
      }
    ],
    specs: [
      { parameter: 'Ražotājs', value: 'FANUC' },
      { parameter: 'Modelis', value: 'Robot Cell M-20iD/25' },
      { parameter: 'Iekārtas tips', value: 'Robotizētā darbagaldu apkalpošanas šūna' },
      { parameter: 'Robota asis', value: '6 asis' },
      { parameter: 'Celtspēja', value: '25 kg' },
      { parameter: 'Aizsniedzamība', value: '1831 mm' },
      { parameter: 'Atkārtojamība', value: '± 0.02 mm' }
    ],
    technologies: [
      {
        title: 'Dual Check Safety (DCS)',
        description: 'Programmējamas drošības zonas ļauj operatoram droši ienākt šūnas apkalpošanas zonā, neizslēdzot robotu pilnībā.'
      }
    ],
    documentation: [
      { title: 'FANUC M-20iD robotu sērijas apraksts', fileSize: '2.1 MB' }
    ]
  },
  {
    id: 'prima-power-psbb-line',
    model: 'PSBB Shear Brilliance Line',
    name: 'PSBB Shear Brilliance Line',
    brand: 'PRIMA POWER',
    type: 'Integrētā lokšņu apstrādes rūpnīcas līnija',
    category: 'automatizacija',
    categoryName: 'Automatizācija',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200'
    ],
    shortDescription: 'Pilnībā integrēta lokšņu metāla apstrādes līnija, kas vienā automātiskā ciklā veic ciršanu, taisnleņķa sagriešanu un locīšanu.',
    threeMainParams: [
      { value: 'Ciršana + Locīšana', label: 'Vienots ražošanas cikls' },
      { value: '3100 × 1550 mm', label: 'Lokšņu formāts' },
      { value: 'Zero Setup', label: 'Auto pārkārtošana' }
    ],
    aboutText: 'PRIMA POWER PSBB (Punching + Shearing + Buffering + Bending) apvieno visas lokšņu pārstrādes operācijas vienā plūsmā. Novērš starpnoliktavu dīkstāves un detaļu bojājumus pārkraušanas laikā.',
    advantages: [
      {
        title: 'VIENOTA MATERIĀLA PLŪSMA',
        description: 'Loksne tiek paņemta no pakotnes, izcirsta, piegriezta un ielocīta gatavā detaļā bez cilvēka iejaukšanās.'
      },
      {
        title: 'ZERO SETUP PĀRKĀRTOŠANA',
        description: 'Automātiska instrumentu maiņa ļauj izgatavot pat vienas detaļas pasūtījumus bez papildu izmaksām.'
      },
      {
        title: 'TULUS MES INTEGRĀCIJA',
        description: 'Tieša saikne ar rūpnīcas ERP sistēmu un pasūtījumu izpildes uzraudzība tiešsaistē.'
      }
    ],
    specs: [
      { parameter: 'Ražotājs', value: 'PRIMA POWER' },
      { parameter: 'Modelis', value: 'PSBB Shear Brilliance Line' },
      { parameter: 'Iekārtas tips', value: 'Lokšņu apstrādes rūpnīcas līnija' },
      { parameter: 'Maks. loksnes izmērs', value: '3100 × 1550 mm' },
      { parameter: 'Materiāla biezums', value: '0.5 līdz 4.0 mm' },
      { parameter: 'Ciršanas spēks', value: '300 kN servo-elektriskais' }
    ],
    documentation: [
      { title: 'Prima Power PSBB elastīgās ražošanas brošūra', fileSize: '4.5 MB' }
    ]
  },
  {
    id: 'bystronic-bytrans-extended',
    model: 'ByTrans Extended 3015',
    name: 'ByTrans Extended 3015',
    brand: 'BYSTRONIC',
    type: 'Lāzera lokšņu iekraušanas un izkraušanas sistēma',
    category: 'automatizacija',
    categoryName: 'Automatizācija',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200'
    ],
    shortDescription: 'Kompakta un ātra iekraušanas/izkraušanas sistēma lāzera griešanas centriem, kas veic pilnu lokšņu maiņu 60 sekundēs.',
    threeMainParams: [
      { value: '~60 s', label: 'Pilns cikla laiks' },
      { value: '3000 × 1500 mm', label: 'Lokšņu formāts' },
      { value: '900 kg', label: 'Maks. loksnes masa' }
    ],
    aboutText: 'Bystronic ByTrans Extended nodrošina nepārtrauktu lāzergriešanas darbu, kamēr lāzers strādā pie nākamās loksnes. Aprīkota ar divām autonomas izkraušanas kasetēm gatavajām detaļām un atgriezumiem.',
    advantages: [
      {
        title: '60 SEKUNŽU CIKLS',
        description: 'Minimāla dīkstāve starp divām griešanas operācijām nodrošina maksimālu lāzera lietderību.'
      },
      {
        title: 'DUĀLĀS IZKRAUŠANAS KASETES',
        description: 'Šķiro gatavās detaļas un atgriezumus atsevišķās paletēs bez iekārtas apturēšanas.'
      },
      {
        title: 'DROŠA VAKUUMA SAĶERE',
        description: 'Regulējami vakuuma piesūcekņi un lokšņu biezuma sensori novērš divu lokšņu paņemšanu reizē.'
      }
    ],
    specs: [
      { parameter: 'Ražotājs', value: 'BYSTRONIC' },
      { parameter: 'Modelis', value: 'ByTrans Extended 3015' },
      { parameter: 'Iekārtas tips', value: 'Lāzera lokšņu iekraušanas sistēma' },
      { parameter: 'Lokšņu formāts', value: '3000 × 1500 mm' },
      { parameter: 'Maks. biezums', value: '25 mm' },
      { parameter: 'Maks. loksnes masa', value: '900 kg' }
    ],
    documentation: [
      { title: 'Bystronic ByTrans sistēmas specifikācija', fileSize: '2.5 MB' }
    ]
  },
  {
    id: 'trumpf-trustore-3030',
    model: 'TruStore 3030',
    name: 'TruStore 3030',
    brand: 'TRUMPF',
    type: 'Kompakta automatizētā lokšņu uzglabāšanas sistēma',
    category: 'automatizacija',
    categoryName: 'Automatizācija',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200'
    ],
    shortDescription: 'Modulārs vertikālais lokšņu noliktavas tornis līdz 15 kasetēm, kas piegādā izejmateriālu tieši griešanas darbagaldam bez autoiekrāvēja.',
    threeMainParams: [
      { value: 'Līdz 15 plauktiem', label: 'Vertikālais tornis' },
      { value: '45 tonnas', label: 'Kopējā ietilpība' },
      { value: '3000 × 1500 mm', label: 'Standarta formāts' }
    ],
    aboutText: 'TRUMPF TruStore 3030 ietaupa līdz pat 70% dārgās ražošanas telpas, uzglabājot dažādu marku un biezumu lokšņu pakas vertikālā tornī ar ātru automātisko kasetes izsaukšanu.',
    advantages: [
      {
        title: '70% GRĪDAS PLATĪBAS IETAUPĪJUMS',
        description: 'Kompakts vertikāls tornis aizstāj apjomīgus lokšņu statīvus visā cehā.'
      },
      {
        title: 'TIEŠS SAVIENOJUMS AR LĀZERU',
        description: 'Lifts padod vajadzīgo lokšņu kaseti tieši lāzergriešanas iekraušanas galdam.'
      },
      {
        title: 'TRUTOPS FAB PĀRVALDĪBA',
        description: 'Precīza krājumu un materiālu atlikumu uzskaite reāllaikā.'
      }
    ],
    specs: [
      { parameter: 'Ražotājs', value: 'TRUMPF' },
      { parameter: 'Modelis', value: 'TruStore 3030' },
      { parameter: 'Iekārtas tips', value: 'Kompakta lokšņu noliktavas sistēma' },
      { parameter: 'Plauktu skaits', value: 'No 5 līdz 15 kasetēm' },
      { parameter: 'Kopējais augstums', value: '3.1 m līdz 8.1 m' },
      { parameter: 'Slodze uz plauktu', value: '3000 kg' }
    ],
    documentation: [
      { title: 'TRUMPF TruStore 3030 brošūra', fileSize: '3.8 MB' }
    ]
  }
];

export const ALL_MANUFACTURERS = Array.from(
  new Set(ALL_MACHINERY.map(m => m.brand))
).sort();
