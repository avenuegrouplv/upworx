export interface MachineItem {
  id: string;
  name: string;
  brand: string;
  category: 'metalapstrade' | 'lazera-griesana' | 'cnc-iekartas' | 'automatizacija';
  categoryName: string;
  image: string;
  functions: string[];
  description: string;
  whereUsed: string;
  whyChoose: string;
  specs: {
    label: string;
    value: string;
  }[];
}

export interface CategoryMeta {
  id: string;
  urlSlug: string | null;
  urlPath: string;
  name: string;
  subtitle: string;
}

export const MACHINERY_CATEGORIES: CategoryMeta[] = [
  {
    id: 'all',
    urlSlug: null,
    urlPath: '/iekartas',
    name: 'Visas kategorijas',
    subtitle: 'Pilns industriālo iekārtu klāsts',
  },
  {
    id: 'metalapstrade',
    urlSlug: 'metalapstrade',
    urlPath: '/iekartas/metalapstrade',
    name: 'Metālapstrāde',
    subtitle: 'Locīšana · Virpošana · Profilu apstrāde',
  },
  {
    id: 'lazera-griesana',
    urlSlug: 'lazera-griesana',
    urlPath: '/iekartas/lazera-griesana',
    name: 'Lāzera griešana',
    subtitle: 'Šķiedru lāzeri · Cauruļu 3D griešana · Lokšņu centri',
  },
  {
    id: 'cnc-iekartas',
    urlSlug: 'cnc-iekartas',
    urlPath: '/iekartas/cnc-iekartas',
    name: 'CNC iekārtas',
    subtitle: '5-asu frēzēšana · Ātrgaitas centri · Daudzasu virpošana',
  },
  {
    id: 'automatizacija',
    urlSlug: 'automatizacija',
    urlPath: '/iekartas/automatizacija',
    name: 'Automatizācija',
    subtitle: 'Robotšūnas · Metināšanas roboti · Automātiskās noliktavas',
  },
];

// Exactly 4 machines per category = 16 machines total
export const ALL_MACHINERY: MachineItem[] = [
  // 1. Metālapstrāde (4 iekārtas)
  {
    id: 'trumpf-trubend-5170',
    name: 'TruBend 5170',
    brand: 'TRUMPF',
    category: 'metalapstrade',
    categoryName: 'Metālapstrāde',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=700',
    functions: ['170 t Spiediena spēks', '3230 mm Locīšanas garums', '6-asu atdure', 'ACB Wireless'],
    description: 'Augstas precizitātes hidrauliskā locīšanas prese ar bezvadu leņķa mērīšanas sistēmu un inteliģento CNC vadību.',
    whereUsed: 'Mašīnbūves detaļu, ventilācijas korpusu, elektrosadales skapju un sarežģītu lokšņu konstrukciju sērijveida locīšanā.',
    whyChoose: 'ACB Wireless automātiski izmēra un koriģē locījuma leņķi reāllaikā no pirmās detaļas, novēršot brāķa risku.',
    specs: [
      { label: 'Spiediena spēks', value: '1700 kN (170 tonnas)' },
      { label: 'Locīšanas garums', value: '3230 mm' },
      { label: 'Brīvais attālums starp statņiem', value: '2690 mm' },
      { label: 'Darba gājiens (Y ass)', value: '445 mm' },
      { label: 'Atdures asu skaits', value: '6 asis (X, R, Z1, Z2, X1, X2)' },
      { label: 'Vadības sistēma', value: 'Touchpoint TruBend (21.5" Multi-Touch)' },
      { label: 'Pozicionēšanas precizitāte', value: '± 0.005 mm' },
      { label: 'Svars & Jauda', value: '12 800 kg / 18.5 kW' }
    ]
  },
  {
    id: 'prima-power-ep-1030',
    name: 'eP-1030 Servo-Electric',
    brand: 'PRIMA POWER',
    category: 'metalapstrade',
    categoryName: 'Metālapstrāde',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=700',
    functions: ['105 t Spēks', '3100 mm Garums', '100% Elektriskā piedziņa', 'Auto-Crowning'],
    description: 'Premium servo-elektriskā lokšņu locīšanas prese ar izcilu atkārtojamību, bez hidrauliskās eļļas un līdz 50% enerģijas ietaupījumu.',
    whereUsed: 'Augstas precizitātes dizaina korpusu, medicīnas iekārtu rāmju un nerūsējošā tērauda izstrādājumu locīšanā.',
    whyChoose: 'Jostas piedziņas servo-elektriskā sistēma nodrošina vienmērīgu spēka sadalījumu un novērš hidraulikas apkopes dīkstāves.',
    specs: [
      { label: 'Spiediena spēks', value: '1050 kN (105 tonnas)' },
      { label: 'Locīšanas garums', value: '3100 mm' },
      { label: 'Atdures asis', value: '5 asis (X, R, Z1, Z2, Delta X)' },
      { label: 'Pozicionēšanas precizitāte', value: '± 0.002 mm' },
      { label: 'Enerģijas patēriņš', value: 'Līdz 50% mazāks par hidrauliskajām presēm' },
      { label: 'Vadības sistēma', value: 'Prima Electro Open Control ar 17" skārienekrānu' },
      { label: 'Kompensācijas galds', value: 'Automātiskā CNC CNC-Crowning sistēma' },
      { label: 'Svars', value: '8 900 kg' }
    ]
  },
  {
    id: 'mazak-slant-turn-550',
    name: 'Slant Turn 550',
    brand: 'MAZAK',
    category: 'metalapstrade',
    categoryName: 'Metālapstrāde',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=700',
    functions: ['Max Ø 910 mm', 'Griešanas garums 3000 mm', 'Vārpstas urbums Ø 185 mm', '45 kW motors'],
    description: 'Smagās klases horizontālā CNC virpa ar paaugstinātas stingrības slīpo gultu un milzīgu griezes momentu.',
    whereUsed: 'Lielgabarīta atloku, vārpstu, naftas/gāzes vārstu korpusu un enerģētikas iekārtu masīvo detaļu apstrādē.',
    whyChoose: 'Masīvs viengabala čuguna rāmis nodrošina maksimālu vibrāciju slāpēšanu un izcilu virsmas raupjumu pie lielām skaidām.',
    specs: [
      { label: 'Maks. apstrādes diametrs', value: 'Ø 910 mm' },
      { label: 'Maks. apstrādes garums', value: '3125 mm' },
      { label: 'Vārpstas apgriezieni', value: '1200 apgr./min (2-pakāpju kārba)' },
      { label: 'Vārpstas motors', value: '45 kW (Griezes moments: 4100 Nm)' },
      { label: 'Instrumentu tornis', value: '12 pozīcijas (Heavy-Duty Bolt-On)' },
      { label: 'Vadības sistēma', value: 'MAZATROL SmoothG CNC' },
      { label: 'Gultas tips', value: '45° slīpā čuguna vadotne' },
      { label: 'Iekārtas svars', value: '17 500 kg' }
    ]
  },
  {
    id: 'amada-hfe3i-1003',
    name: 'HFE3i 1003',
    brand: 'AMADA',
    category: 'metalapstrade',
    categoryName: 'Metālapstrāde',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=700',
    functions: ['100 t Jauda', '3000 mm Garums', 'Eko-hidrauliskā sistēma', 'AMNC 3i 3D ekrāns'],
    description: 'Energoefektīva un kompakta CNC locīšanas iekārta ar patentētu reaktīvo kompensācijas galdu.',
    whereUsed: 'Precīzajā lokšņu metāla apstrādē, fasāžu kasešu un sadzīves tehnikas korpusu locīšanā.',
    whyChoose: 'Invertora hidrauliskā piedziņa samazina elektroenerģijas patēriņu par 20%, vienlaikus nodrošinot augstāku cikla ātrumu.',
    specs: [
      { label: 'Presēšanas jauda', value: '1000 kN (100 tonnas)' },
      { label: 'Locīšanas garums', value: '3110 mm' },
      { label: 'Attālums starp rāmjiem', value: '2705 mm' },
      { label: 'Gājiens (Stroke)', value: '200 mm' },
      { label: 'Vadības pults', value: 'AMNC 3i ar 18.5" multi-touch 3D simulāciju' },
      { label: 'Atdures ātrums', value: 'X ass: 500 mm/s, R ass: 150 mm/s' },
      { label: 'Kompensācijas galds', value: 'Dinamiskā hidrauliskā izliece (Crowning)' },
      { label: 'Svars', value: '6 850 kg' }
    ]
  },

  // 2. Lāzera griešana (4 iekārtas)
  {
    id: 'bystronic-bystar-fiber-15kw',
    name: 'ByStar Fiber 6225 15kW',
    brand: 'BYSTRONIC',
    category: 'lazera-griesana',
    categoryName: 'Lāzera griešana',
    image: 'https://images.pexels.com/photos/224924/pexels-photo-224924.jpeg?auto=compress&cs=tinysrgb&w=800',
    functions: ['15 kW Fiber Lāzers', '6200 x 2500 mm Galds', 'Griešana līdz 30 mm', 'Auto sprauslu maiņa'],
    description: 'Augstākās jaudas šķiedru lāzera griešanas iekārta īpaši lieliem lokšņu formātiem un maksimālam griešanas ātrumam.',
    whereUsed: 'Kravas auto šasiju, kuģubūves paneļu, lielizmēra industriālo tvertņu un biezo metālu griešanā.',
    whyChoose: '15 kW šķiedru jauda kombinācijā ar ByVision Cutting programmatūru nodrošina līdz 2.5x lielāku caurlaides spēju.',
    specs: [
      { label: 'Lāzera jauda', value: '15 000 W (Šķiedru lāzera avots)' },
      { label: 'Lokšņu izmēri (X x Y)', value: '6200 mm x 2500 mm' },
      { label: 'Maks. loksnes biezums (Tērauds)', value: '30 mm' },
      { label: 'Maks. loksnes biezums (Nerūsējošais)', value: '30 mm' },
      { label: 'Maks. loksnes biezums (Alumīnijs)', value: '30 mm' },
      { label: 'Maks. pozicionēšanas ātrums', value: 'Līdz 170 m/min vienlaicīgi' },
      { label: 'Pozicionēšanas atkārtojamība', value: '± 0.025 mm' },
      { label: 'Sprauslu magazīna', value: 'Automātiska, 40 vietas ar kameras kontroli' }
    ]
  },
  {
    id: 'prima-power-platino-linear',
    name: 'Platino Linear 15kW',
    brand: 'PRIMA POWER',
    category: 'lazera-griesana',
    categoryName: 'Lāzera griešana',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=700',
    functions: ['15 kW Fiber Lāzers', 'Lineārie motori (2.5G)', 'Sintētiskā granīta rāmis', 'Smart Cut kontrole'],
    description: 'Ātrgaitas 2D šķiedru lāzergriešanas centrs ar bezkontakta lineāro piedziņu un izcilu termisko stabilitāti.',
    whereUsed: 'Augstas sērijas plānu un vidēji biezu lokšņu detaļu griešanā elektrotehnikas un mašīnbūves nozarēs.',
    whyChoose: 'Lineārie motori nodrošina 2.5G paātrinājumu bez zobstieņa nodiluma, saglabājot mikronu precizitāti gadiem.',
    specs: [
      { label: 'Lāzera jauda', value: '15 000 W (Šķiedru lāzera avots)' },
      { label: 'Darba galds', value: '3000 mm x 1500 mm (automātiskā maiņa)' },
      { label: 'Ass paātrinājums', value: '2.5 G visās asīs' },
      { label: 'Pozicionēšanas ātrums', value: 'Līdz 200 m/min' },
      { label: 'Griešanas biezums (Tērauds)', value: 'Līdz 35 mm' },
      { label: 'Rāmja materiāls', value: 'Sintētiskais granīts vibrāciju absorbēšanai' },
      { label: 'Vadības sistēma', value: 'Prima Power Open™ CNC ar skārienjūtīgu interfeisu' }
    ]
  },
  {
    id: 'trumpf-trulaser-tube-7000',
    name: 'TruLaser Tube 7000 T05',
    brand: 'TRUMPF',
    category: 'lazera-griesana',
    categoryName: 'Lāzera griešana',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=700',
    functions: ['3D Lāzergriešana', 'Caurules līdz Ø 254 mm', '9.2 m Iekraušana', 'Slīpā fāzīšu griešana (45°)'],
    description: 'Universāls 3D lāzercentrs cauruļu un atvērto profilu elastīgai apstrādei bez papildu mehāniskās apstrādes.',
    whereUsed: 'Cauruļu konstrukciju, fitnesa trenažieru, lauksaimniecības tehnikas un fasāžu karkasu izgatavošanā.',
    whyChoose: 'Veic caurumu griešanu, spraugas un slīpās fāzītes metināšanai vienā nepārtrauktā ciklā, samazinot montāžas laiku par 50%.',
    specs: [
      { label: 'Lāzera jauda', value: '4000 W TruDisk CO2/Fiber' },
      { label: 'Maks. sagataves ārējais Ø', value: '254 mm (apaļas), 220 mm (taisnstūra)' },
      { label: 'Maks. izejmateriāla garums', value: '9200 mm (ar automātisko padevi)' },
      { label: 'Maks. gatavās detaļas garums', value: '6500 mm (automātiska izkraušana)' },
      { label: '3D slīpā griešana', value: 'Līdz ± 45° leņķim' },
      { label: 'Sienas biezums (Melnajam tēraudam)', value: 'Līdz 10 mm' },
      { label: 'Sagataves svars', value: 'Līdz 37.5 kg/m' },
      { label: 'Vadība', value: 'Siemens Sinumerik 840D SL ar TruTops Tube' }
    ]
  },
  {
    id: 'mazak-optiplex-3015-neo',
    name: 'Optiplex 3015 NEO 15kW',
    brand: 'MAZAK',
    category: 'lazera-griesana',
    categoryName: 'Lāzera griešana',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=700',
    functions: ['15 kW Fiber avots', 'MCT 3 lāzergalva', 'Staru formas modulācija', 'Mazatrol SmoothLx'],
    description: 'Augstas inteliģences 2D lāzera griešanas iekārta ar stara diametra un formas pielāgošanu biezam un plānam metālam.',
    whereUsed: 'Universālajās metālapstrādes rūpnīcās ar biežām materiālu un biezumu maiņām.',
    whyChoose: 'MCT 3 viedā lāzergalva automātiski kalibrē fokusa attālumu un sprauslas stāvokli, novēršot operatora kļūdas.',
    specs: [
      { label: 'Lāzera jauda', value: '15 000 W Fiber avots' },
      { label: 'Galda izmērs', value: '3050 mm x 1525 mm' },
      { label: 'Maks. tērauda biezums', value: '32 mm' },
      { label: 'Maks. nerūsējošā biezums', value: '30 mm' },
      { label: 'Pārvietošanās ātrums (X/Y)', value: '160 m/min' },
      { label: 'Vadības sistēma', value: 'MAZATROL SmoothLx ar 21.5" ekrānu' }
    ]
  },

  // 3. CNC iekārtas (4 iekārtas)
  {
    id: 'dmg-mori-dmu-75-monoblock',
    name: 'DMU 75 monoBLOCK',
    brand: 'DMG MORI',
    category: 'cnc-iekartas',
    categoryName: 'CNC iekārtas',
    image: 'https://images.pexels.com/photos/3846554/pexels-photo-3846554.jpeg?auto=compress&cs=tinysrgb&w=800',
    functions: ['5-asu vienlaicīgā apstrāde', '20 000 apgr./min', 'Galds Ø 650 mm', 'CELOS ar Siemens'],
    description: 'Augstas precizitātes universālais 5-asu CNC apstrādes centrs ar monoBLOCK monolīto čuguna konstrukciju.',
    whereUsed: 'Aviācijas detaļu, medicīnas implantu, sarežģītu turbīnu lāpstiņu un lējumu presformu 5-asu apstrādē.',
    whyChoose: 'Monolītais korpuss ar 3 punktu balstu garantē izcilu termisko stabilitāti un virsmas precizitāti zem 5 mikroniem.',
    specs: [
      { label: 'Gājieni X / Y / Z', value: '750 mm / 650 mm / 560 mm' },
      { label: 'Rotācijas galds (C / B ass)', value: 'C: 360° / B: -120° līdz +120°' },
      { label: 'Maks. vārpstas apgriezieni', value: '20 000 apgr./min (SpeedMASTER)' },
      { label: 'Vārpstas jauda / Moments', value: '35 kW / 130 Nm' },
      { label: 'Instrumentu magazīna', value: '60 vietas (SK40 / HSK-A63)' },
      { label: 'Maks. detaļas svars', value: '600 kg' },
      { label: 'Vadības sistēma', value: 'CELOS ar SIEMENS 840D sl Operate' },
      { label: 'Dzesēšana caur vārpstu', value: '40 bar ar papīra lentes filtru' }
    ]
  },
  {
    id: 'fanuc-robodrill-alpha-d21',
    name: 'ROBODRILL α-D21LiB5 ADV',
    brand: 'FANUC',
    category: 'cnc-iekartas',
    categoryName: 'CNC iekārtas',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=700',
    functions: ['24 000 apgr./min Vārpsta', '21 Instruments (0.9s maiņa)', '1.4 G Dinamika', 'Nano CNC kontrole'],
    description: 'Pasaulē atzīts ultra ātrgaitas vertikālais apstrādes centrs ar maksimālu uzticamību un zibensātru instrumentu maiņu.',
    whereUsed: 'Masu sērijveida frēzēšanā, vītņošanā un urbšanā alumīnija detaļām un augstas precizitātes mezgliem.',
    whyChoose: '0.9 sekunžu instrumenta maiņas laiks un FANUC 31i-B5 Plus vadība nodrošina zemākās viena cikla izmaksas tirgū.',
    specs: [
      { label: 'Gājieni X / Y / Z', value: '700 mm / 400 mm / 330 mm' },
      { label: 'Vārpstas apgriezieni', value: '24 000 apgr./min' },
      { label: 'Instrumentu ietilpība', value: '21 instruments' },
      { label: 'Instrumentu maiņas laiks', value: '0.9 s (Chip-to-Chip 1.4 s)' },
      { label: 'Paātrinājums visās asīs', value: '1.4 G' },
      { label: 'Vadības sistēma', value: 'FANUC 31i-B5 Plus ar AI Contour Control' }
    ]
  },
  {
    id: 'haas-vf-4ss-super-speed',
    name: 'VF-4SS Super Speed',
    brand: 'HAAS',
    category: 'cnc-iekartas',
    categoryName: 'CNC iekārtas',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=700',
    functions: ['12 000 apgr./min Vārpsta', '30+1 Instrumenti', 'Galds 1321 x 457 mm', 'Ātrgaitas frēzēšana'],
    description: 'Lielas jaudas un paaugstināta ātruma vertikālais CNC apstrādes centrs alumīnija un tērauda detaļu sērijām.',
    whereUsed: 'Sērijveida frēzēšanā, instrumentu izgatavošanā, automobiļu mezglu detaļu un korpusu ātrā apstrādē.',
    whyChoose: 'Tiešās piedziņas inline vārpsta un ātrā instrumentu maiņa (1.8 sek.) ievērojami samazina viena cikla laiku.',
    specs: [
      { label: 'Gājieni X / Y / Z', value: '1270 mm / 508 mm / 635 mm' },
      { label: 'Galda izmērs', value: '1321 mm x 457 mm' },
      { label: 'Maks. galda slodze', value: '794 kg' },
      { label: 'Vārpstas apgriezieni', value: '12 000 apgr./min (Inline Direct-Drive)' },
      { label: 'Piedziņas jauda', value: '22.4 kW (Vector Drive)' },
      { label: 'Instrumentu magazīna', value: '30+1 sānu magazīna (SMTC)' },
      { label: 'Ātrgaitas gājieni (Rapid)', value: '35.6 m/min visās asīs' },
      { label: 'Vadības pults', value: 'HAAS NextGen CNC ar 15" LCD ekrānu' }
    ]
  },
  {
    id: 'mazak-variaxis-i-600',
    name: 'Variaxis i-600',
    brand: 'MAZAK',
    category: 'cnc-iekartas',
    categoryName: 'CNC iekārtas',
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=700',
    functions: ['5-asu apstrādes centrs', 'Ø 600 mm galds', '18 000 apgr./min', 'SmoothX skārienekrāns'],
    description: 'Augstas klases vienlaicīgais 5-asu centrs ar pilnībā integrētu sagatavju rotācijas galdu un vibrāciju slāpēšanu.',
    whereUsed: 'Enerģētikas detaļu, sūkņu korpusu, medicīnas iekārtu un komplicētu ģeometriju apstrādē vienā iestiprinājumā.',
    whyChoose: 'SmoothX CNC vadība ar 3D interferenču pārbaudi novērš sadursmju risku pirms frēzēšanas sākuma.',
    specs: [
      { label: 'Gājieni X / Y / Z', value: '510 mm / 910 mm / 510 mm' },
      { label: 'A ass (nolieces leņķis)', value: '-120° līdz +30°' },
      { label: 'C ass (grozāmais galds)', value: '± 360°' },
      { label: 'Maks. detaļas izmērs', value: 'Ø 700 mm x 450 mm augstums' },
      { label: 'Vārpstas apgriezieni', value: '18 000 apgr./min (30 kW)' },
      { label: 'Instrumentu ietilpība', value: '80 instrumenti' },
      { label: 'Pozicionēšanas precizitāte', value: '0.003 mm' },
      { label: 'Svars', value: '11 200 kg' }
    ]
  },

  // 4. Automatizācija (4 iekārtas)
  {
    id: 'fanuc-robot-cell-m20id',
    name: 'Robot Cell M-20iD/25',
    brand: 'FANUC',
    category: 'automatizacija',
    categoryName: 'Automatizācijas iekārtas',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=700',
    functions: ['25 kg Celtspēja', '1831 mm Darba rādiuss', 'iRVision 3D redze', 'Kabeļi rokas iekšpusē'],
    description: 'Augstas dinamikas industriālā robotšūna detaļu ielādei CNC darbagaldos un automatizētai metināšanai.',
    whereUsed: 'CNC virpu un frēžu automātiskajā apkalpošanā, montāžas līnijās un detaļu paletizēšanā.',
    whyChoose: 'Dobā rokas konstrukcija novērš kabeļu aizķeršanos un samazina apkopes izmaksas par 40%.',
    specs: [
      { label: 'Robota asu skaits', value: '6 asis' },
      { label: 'Maks. celtspēja pie plaukstas', value: '25 kg' },
      { label: 'Maks. aizsniedzamība', value: '1831 mm' },
      { label: 'Atkārtojamības precizitāte', value: '± 0.02 mm' },
      { label: 'Aizsardzības klase', value: 'IP67 (pilnīga aizsardzība pret dzesēšanas šķidrumu)' },
      { label: 'Redzes sistēma', value: 'Integrēta FANUC iRVision 2D/3D kamera' },
      { label: 'Vadības kontrolieris', value: 'R-30iB Plus ar iPendant skārienpulti' },
      { label: 'Drošības funkcija', value: 'Dual Check Safety (DCS) zonu kontrole' }
    ]
  },
  {
    id: 'prima-power-psbb-line',
    name: 'PSBB Shear Brilliance Line',
    brand: 'PRIMA POWER',
    category: 'automatizacija',
    categoryName: 'Automatizācijas iekārtas',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=700',
    functions: ['Ciršana + Lāzers + Locīšana', 'Automātiska materiāla plūsma', 'Zero Setup laiks', 'Night Train FMS'],
    description: 'Pasaulē vadošā integrētā lokšņu apstrādes rūpnīcas šūna – automātiski paņem loksni, izcērt, sagriež un ieloka.',
    whereUsed: 'Elektrosadales skapju, lifta durvju, tērauda mēbeļu un fasāžu paneļu lielas sērijas bezpilota ražošanā.',
    whyChoose: 'Apvieno caurumošanu, taisnstūra griešanu un lokšņu locīšanu vienā nepārtrauktā materiāla plūsmā bez starpnoliktavām.',
    specs: [
      { label: 'Iekārtas konfigurācija', value: 'Punching + Right Angle Shear + Express Bender' },
      { label: 'Lokšņu maksimālais izmērs', value: '3100 mm x 1550 mm' },
      { label: 'Biezumu diapazons', value: '0.5 mm līdz 4.0 mm' },
      { label: 'Ciršanas spēks', value: '30 tonnas (servo-elektriskais)' },
      { label: 'Locīšanas ass', value: 'Pilnībā automātisks servo-elektriskais benderis' },
      { label: 'Vadības programmatūra', value: 'Tulus® Cell & Master MES integrācija' }
    ]
  },
  {
    id: 'bystronic-bytrans-extended',
    name: 'ByTrans Extended 3015',
    brand: 'BYSTRONIC',
    category: 'automatizacija',
    categoryName: 'Automatizācijas iekārtas',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=700',
    functions: ['Auto lokšņu iekraušana', 'Gatavo detaļu izkraušana', 'Vakuuma piesūcekņi', '60 sek. cikls'],
    description: 'Automatizēta materiāla iekraušanas un izkraušanas sistēma lāzergriešanas iekārtu nepārtrauktam 24/7 darbam.',
    whereUsed: 'Lāzera griešanas cehos, kur nepieciešama bezpilota ražošana un izejmateriālu operatīva maiņa.',
    whyChoose: 'Nodrošina pilnu loksnes apmaiņas ciklu mazāk nekā 60 sekundēs, kamēr lāzers turpina griezt nākamo loksni.',
    specs: [
      { label: 'Lokšņu formāts', value: '3000 mm x 1500 mm' },
      { label: 'Maks. loksnes biezums', value: '25 mm' },
      { label: 'Maks. loksnes svars', value: '900 kg' },
      { label: 'Iekraušanas / Izkraušanas cikls', value: '~ 60 sekundes' },
      { label: 'Gatavo detaļu kasetes', value: '2 autonomas izkraušanas vietas' },
      { label: 'Materiāla atdalīšana', value: 'Magnētiskie separatori un pneimatiskā pūšana' },
      { label: 'Vadība', value: 'Integrēta ar ByVision Lāzera vadības sistēmu' }
    ]
  },
  {
    id: 'trumpf-trustore-3030',
    name: 'TruStore 3030',
    brand: 'TRUMPF',
    category: 'automatizacija',
    categoryName: 'Automatizācijas iekārtas',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=700',
    functions: ['Kompakta lokšņu noliktava', 'Līdz 15 plauktiem', 'Automātisks plauktu lifts', 'Tiešs savienojums ar lāzeru'],
    description: 'Modulāra vertikālā lokšņu glabāšanas sistēma ar automātisku kasešu padevi tieši griešanas darbagaldā.',
    whereUsed: 'Ražotnēs ar ierobežotu grīdas platību, kur nepieciešams uzglabāt dažādu marku un biezumu loksnes vienuviet.',
    whyChoose: 'Ietaupa līdz 70% ražošanas telpas un nodrošina materiāla pieejamību dažu sekunžu laikā bez autoiekrāvēja palīdzības.',
    specs: [
      { label: 'Lokšņu standarta izmērs', value: '3000 mm x 1500 mm (Medium Format)' },
      { label: 'Noliktavas torņa augstums', value: '3.1 m līdz 8.1 m (atkarībā no plauktu skaita)' },
      { label: 'Plauktu skaits', value: 'No 5 līdz 15 glabāšanas kasetēm' },
      { label: 'Maks. slodze uz vienu plauktu', value: '3000 kg' },
      { label: 'Kopējā uzglabāšanas kapacitāte', value: 'Līdz 45 tonnām lokšņu metāla' },
      { label: 'Plauktu lifta ātrums', value: 'Vertikāli: 12 m/min, Horizontāli: 20 m/min' },
      { label: 'Vadības integrācija', value: 'TruTops Fab noliktavas pārvaldības modulis' }
    ]
  }
];

// Helper to get distinct manufacturers from ALL_MACHINERY
export const ALL_MANUFACTURERS = Array.from(
  new Set(ALL_MACHINERY.map(m => m.brand))
).sort();
