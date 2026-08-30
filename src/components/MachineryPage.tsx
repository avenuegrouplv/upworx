import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Target, 
  Settings, 
  Factory, 
  Cpu, 
  X, 
  FileText, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { Partners } from './Partners';

export interface MachineItem {
  id: string;
  name: string;
  brand: string;
  category: string;
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

interface MachineryPageProps {
  onInquiryClick: (machineName?: string) => void;
  selectedCategory?: string | null;
}

export const MachineryPage: React.FC<MachineryPageProps> = ({ onInquiryClick, selectedCategory }) => {
  const [activeModalMachine, setActiveModalMachine] = useState<MachineItem | null>(null);

  // Auto scroll to section if selectedCategory is passed
  useEffect(() => {
    if (selectedCategory) {
      setTimeout(() => {
        const elem = document.getElementById(selectedCategory);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    }
  }, [selectedCategory]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeModalMachine) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeModalMachine]);

  // 1. Metālapstrāde (4 machines)
  const metalWorkingMachines: MachineItem[] = [
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
    {
      id: 'geka-bendicrop-60s',
      name: 'Bendicrop 60S',
      brand: 'GEKA',
      category: 'metalapstrade',
      categoryName: 'Metālapstrāde',
      image: 'https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&q=80&w=700',
      functions: ['60 t Spēks', '2 Neatkarīgi cilindri', 'Iebūvēta locīšanas stacija', '5 Darba stacijas'],
      description: 'Universālā hidrauliskā metālapstrādes un caurumošanas iekārta ar pastāvīgu leņķa un lokšņu griešanu.',
      whereUsed: 'Būvkonstrukciju, metāla fermu, žogu un profilu sagatavošanas darbnīcās un ražotnēs.',
      whyChoose: 'Divu cilindru sistēma ļauj diviem operatoriem vienlaicīgi veikt caurumošanu un leņķu griešanu bez dīkstāvēm.',
      specs: [
        { label: 'Caurumošanas spēks', value: '600 kN (60 tonnas)' },
        { label: 'Maks. caurumošanas kapacitāte', value: 'Ø 40 x 11 mm vai Ø 28 x 15 mm' },
        { label: 'Plakandzelža griešana', value: '350 x 15 mm vai 200 x 20 mm' },
        { label: 'L-profila griešana (90°)', value: '120 x 120 x 10 mm' },
        { label: 'Iebūvētā locīšanas stacija', value: 'Līdz 150 x 10 mm biezumam' },
        { label: 'Gājienu skaits minūtē', value: '32 gājieni/min' },
        { label: 'Motora jauda', value: '5.5 kW' },
        { label: 'Svars', value: '1 750 kg' }
      ]
    }
  ];

  // 2. Lāzera griešana (3 machines)
  const laserCuttingMachines: MachineItem[] = [
    {
      id: 'bystronic-bystar-fiber-15kw',
      name: 'ByStar Fiber 6225 15kW',
      brand: 'BYSTRONIC',
      category: 'lazera-griesana',
      categoryName: 'Lāzera griešana',
      image: 'https://images.unsplash.com/photo-1565264317065-253ac0794939?auto=format&fit=crop&q=80&w=700',
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
      id: 'trumpf-trulaser-tube-7000',
      name: 'TruLaser Tube 7000 T05',
      brand: 'TRUMPF',
      category: 'lazera-griesana',
      categoryName: 'Lāzera griešana',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=700',
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
      id: 'amada-ensis-3015-aj',
      name: 'Ensis 3015 AJ 9kW',
      brand: 'AMADA',
      category: 'lazera-griesana',
      categoryName: 'Lāzera griešana',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=700',
      functions: ['9 kW ENSIS Fiber', '3000 x 1500 mm Galds', 'Staru modulācija', 'Viena sprausla visiem biezumiem'],
      description: 'Lāzera griešanas iekārta ar unikālu stara modulācijas tehnoloģiju, kas reāllaikā pielāgo stara diametru loksnes biezumam.',
      whereUsed: 'Universālos metālapstrādes centros, kur bieži mainās materiālu biezumi no 0.8 mm līdz 25 mm.',
      whyChoose: 'Nav nepieciešama lēcu un sprauslu maiņa, pārejot no plāna skārda uz biezu tērauda plāksni.',
      specs: [
        { label: 'Lāzera jauda', value: '9000 W (ENSIS rezonators)' },
        { label: 'Darba zona', value: '3070 mm x 1550 mm' },
        { label: 'Z ass gājiens', value: '100 mm' },
        { label: 'Griešanas biezums (Tērauds)', value: '0.8 mm - 25 mm' },
        { label: 'Griešanas biezums (Nerūsējošais)', value: '0.8 mm - 25 mm' },
        { label: 'Griešanas biezums (Varš/Misiņš)', value: 'Līdz 12 mm' },
        { label: 'Pārvietošanās ātrums (X/Y)', value: '170 m/min' },
        { label: 'Eko-režīms', value: 'Gāzes patēriņa samazinājums līdz 30%' }
      ]
    }
  ];

  // 3. CNC iekārtas (5 machines)
  const cncMachines: MachineItem[] = [
    {
      id: 'dmg-mori-dmu-75-monoblock',
      name: 'DMU 75 monoBLOCK',
      brand: 'DMG MORI',
      category: 'cnc-iekartas',
      categoryName: 'CNC iekārtas',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=700',
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
      id: 'haas-vf-4ss-super-speed',
      name: 'VF-4SS Super Speed',
      brand: 'HAAS',
      category: 'cnc-iekartas',
      categoryName: 'CNC iekārtas',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&q=80&w=700',
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
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=700',
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
    {
      id: 'doosan-puma-smx-2600st',
      name: 'Puma SMX 2600ST',
      brand: 'DN SOLUTIONS',
      category: 'cnc-iekartas',
      categoryName: 'CNC iekārtas',
      image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=700',
      functions: ['Virpošana + 5-asu Frēzēšana', 'B-ass frēzgalva', 'Apakšējais tornis', 'Pretvārpsta'],
      description: 'Daudzasu multifunkcionālais virpošanas-frēzēšanas centrs pilnīgai detaļas pabeigšanai vienā iekārtā.',
      whereUsed: 'Aviācijas dzinēju komponentu, hidraulisko bloku un sarežģītu vārpstu apstrādē bez starpposmu pārstiprināšanas.',
      whyChoose: 'B-ass frēzēšanas vārpsta apvienojumā ar 12-vietīgu apakšējo torni un pretvārpstu ļauj vienlaicīgi apstrādāt abus detaļas galus.',
      specs: [
        { label: 'Maks. virpošanas Ø', value: 'Ø 660 mm' },
        { label: 'Maks. apstrādes garums', value: '1540 mm' },
        { label: 'B ass nolieces leņķis', value: '240° (± 120°)' },
        { label: 'Frēzēšanas vārpstas ātrums', value: '12 000 apgr./min (Capto C6)' },
        { label: 'Galvenā un pretvārpsta', value: '4000 apgr./min (Ø 81 mm urbums)' },
        { label: 'Apakšējais tornis', value: '12 pozīcijas (visas ar rotējošiem instrumentiem)' },
        { label: 'Instrumentu magazīna (ATC)', value: '80 instrumenti' },
        { label: 'Vadība', value: 'Fanuc 31i-B5 ar CUF skārienekrānu' }
      ]
    },
    {
      id: 'hermle-c-42-u-mt',
      name: 'C 42 U MT Dynamic',
      brand: 'HERMLE',
      category: 'cnc-iekartas',
      categoryName: 'CNC iekārtas',
      image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80&w=700',
      functions: ['5-asu Frēzēšana & Virpošana', 'Modificēta Gantry sistēma', 'Minerāllējuma gulta', 'Dinamika 1.6 G'],
      description: 'Vācijas augstākās klases dinamiskais apstrādes centrs ar integrētu virpošanas funkciju rotācijas galdā.',
      whereUsed: 'Instrumentu ražošanā, turbīnu lāpstiņriteņu, medicīnas locītavu protēžu un supersakausējumu apstrādē.',
      whyChoose: 'Minerāllējuma pamatne ar zemu siltumvadītspēju garantē maksimālu virsmas tīrību un darba ilgmūžību pat 24/7 slodzē.',
      specs: [
        { label: 'Gājieni X / Y / Z', value: '800 mm / 800 mm / 550 mm' },
        { label: 'Grozāmais virpošanas galds', value: 'Ø 800 mm (līdz 800 apgr./min virpošanā)' },
        { label: 'A ass (nolieces diapazons)', value: '+25° līdz -115°' },
        { label: 'Vārpstas apgriezieni', value: '18 000 apgr./min (HSK-T63 virpošanai/frēzēšanai)' },
        { label: 'Paātrinājums visās asīs', value: 'Līdz 16 m/s² (1.6 G)' },
        { label: 'Pozicionēšanas izkliede (P)', value: '0.005 mm' },
        { label: 'Instrumentu magazīna', value: '42 / paplašināma līdz 192 vietām' },
        { label: 'Vadības sistēma', value: 'Heidenhain TNC 640' }
      ]
    }
  ];

  // 4. Automatizācijas iekārtas (4 machines)
  const automationMachines: MachineItem[] = [
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
      id: 'kuka-kr-cybertech-nano-arc',
      name: 'KR CYBERTECH nano ARC',
      brand: 'KUKA',
      category: 'automatizacija',
      categoryName: 'Automatizācijas iekārtas',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=700',
      functions: ['Loka metināšanas robots', '0.04 mm Precizitāte', 'Kompakta bāze', 'KUKA.ArcSense tehnoloģija'],
      description: 'Specializēts loka metināšanas robots ar ārkārtīgi precīzu šuves trajektorijas sekošanas sistēmu.',
      whereUsed: 'MIG/MAG un TIG automatizētajā metināšanā, cauruļu savienojumos un sarežģītās telpiskās šuvēs.',
      whyChoose: 'Kompakta pamatne ļauj robotu integrēt šaurās metināšanas šūnās un uz kustīgiem portāliem.',
      specs: [
        { label: 'Nominālā celtspēja', value: '8 kg (optimizēts metināšanas deglim)' },
        { label: 'Maks. sniedzamība', value: '1620 mm' },
        { label: 'Pozīcijas atkārtojamība (ISO 9283)', value: '± 0.04 mm' },
        { label: 'Montāžas pozīcija', value: 'Grīda, griesti, siena vai leņķī' },
        { label: 'Metināšanas programmatūra', value: 'KUKA.ArcTech Basic & Advanced' },
        { label: 'Šuves sekošana', value: 'KUKA.ArcSense (strāvas mērījumu trajektorija)' },
        { label: 'Vadības skapis', value: 'KR C5 compact' },
        { label: 'Svars', value: '165 kg' }
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
        { label: 'Vadība', value: 'Integrēta ar ByVision Lāzera vadības sistēmu' },
        { label: 'Drošība', value: 'Gaismas barjeras un perimetra aizsargsiena' }
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
        { label: 'Vadības integrācija', value: 'TruTops Fab noliktavas pārvaldības modulis' },
        { label: 'Sertifikācija', value: 'CE, ISO 9001 industriālais standarts' }
      ]
    }
  ];

  // Helper render for each category section
  const renderCategorySection = (
    sectionId: string,
    title: string,
    subtitle: string,
    badgeCount: string,
    machines: MachineItem[],
    icon: React.ReactNode
  ) => {
    return (
      <section id={sectionId} className="scroll-mt-28 mb-24">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-8 border-b-2 border-zinc-200 gap-4">
          <div>
            <div className="flex items-center gap-2.5 text-teal-custom font-extrabold text-xs uppercase tracking-[0.25em] mb-2">
              <span className="p-1.5 bg-teal-50 border border-teal-custom/30 rounded-sm">
                {icon}
              </span>
              <span>{subtitle}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-zinc-900">
              {title}
            </h2>
          </div>
          <div className="inline-flex items-center self-start sm:self-auto bg-zinc-100 border border-zinc-200 px-3.5 py-1.5 rounded-sm text-xs font-bold text-zinc-700 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-teal-custom mr-2"></span>
            {badgeCount}
          </div>
        </div>

        {/* Machine Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-8">
          {machines.map((machine) => (
            <div 
              key={machine.id}
              className="bg-white border border-zinc-200 hover:border-teal-custom/60 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Image header - 50% smaller than previous huge banner, clean & compact */}
                <div className="relative h-48 sm:h-52 w-full bg-zinc-900 overflow-hidden border-b border-zinc-100">
                  <img 
                    src={machine.image} 
                    alt={machine.name} 
                    className="w-full h-full object-cover grayscale opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Top Brand Badge */}
                  <div className="absolute top-3.5 left-3.5 bg-zinc-950/90 border border-white/20 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-teal-custom shadow-md">
                    {machine.brand}
                  </div>

                  {/* Machine Title on top of image */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[10px] font-bold text-teal-300 uppercase tracking-widest block mb-0.5">
                      {machine.categoryName}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight leading-tight drop-shadow-sm">
                      {machine.name}
                    </h3>
                  </div>
                </div>

                {/* Content body */}
                <div className="p-5 sm:p-6 space-y-4">
                  {/* Function Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {machine.functions.map((fn, idx) => (
                      <span 
                        key={idx}
                        className="bg-zinc-100 border border-zinc-200/80 text-zinc-700 text-[11px] font-semibold px-2.5 py-1 rounded-sm"
                      >
                        {fn}
                      </span>
                    ))}
                  </div>

                  {/* Main Description */}
                  <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                    {machine.description}
                  </p>

                  {/* Where used & Why choose blocks */}
                  <div className="bg-zinc-50 border border-zinc-200/70 p-3.5 rounded-sm space-y-2.5 text-xs">
                    <div>
                      <span className="font-extrabold text-zinc-900 uppercase tracking-wider text-[10px] block text-teal-700 mb-0.5">
                        Kur izmanto:
                      </span>
                      <p className="text-zinc-600 leading-snug">
                        {machine.whereUsed}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-zinc-200/60">
                      <span className="font-extrabold text-zinc-900 uppercase tracking-wider text-[10px] block text-teal-700 mb-0.5">
                        Kāpēc izvēlēties:
                      </span>
                      <p className="text-zinc-600 leading-snug">
                        {machine.whyChoose}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-2 flex flex-col sm:flex-row gap-3 border-t border-zinc-100">
                {/* Specification Button */}
                <button
                  onClick={() => setActiveModalMachine(machine)}
                  className="flex-1 bg-white hover:bg-zinc-50 text-zinc-800 hover:text-teal-custom border border-zinc-300 hover:border-teal-custom font-bold uppercase tracking-wider text-xs py-3 px-4 rounded-sm flex items-center justify-center transition-colors cursor-pointer shadow-xs"
                >
                  <FileText className="w-4 h-4 mr-2 text-teal-custom" />
                  <span>Specifikācija</span>
                </button>

                {/* Inquiry Button */}
                <button
                  onClick={() => onInquiryClick(machine.name)}
                  className="flex-1 bg-zinc-950 hover:bg-teal-custom text-white hover:text-zinc-950 font-bold uppercase tracking-wider text-xs py-3 px-4 rounded-sm flex items-center justify-center transition-colors cursor-pointer shadow-xs"
                >
                  <span>Pieteikt konsultāciju</span>
                  <ChevronRight className="w-4 h-4 ml-1.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  return (
    <div id="machinery-page" className="bg-zinc-100 min-h-screen pt-20 pb-24">
      {/* Hero Header Section */}
      <section className="bg-zinc-950 pt-20 pb-16 border-b border-zinc-800">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-teal-custom font-extrabold uppercase tracking-[0.3em] text-xs mb-3 block">
              Industriālais katalogs
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-6">
              IEKĀRTU <span className="text-teal-custom">KATALOGS</span>
            </h1>
            <div className="h-1 w-24 bg-teal-custom mb-6"></div>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              Profesionālas metālapstrādes, lāzera griešanas, CNC un automatizācijas iekārtas no pasaules vadošajiem ražotājiem ar pilnu ražotāja garantiju un sertificētu servisu Baltijā.
            </p>
          </div>

          {/* Quick Jump Anchor Tabs */}
          <div className="mt-10 flex flex-wrap gap-2.5 pt-6 border-t border-zinc-800/80">
            <a 
              href="#metalapstrade"
              className="bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm border border-zinc-800 hover:border-teal-custom transition-colors"
            >
              Metālapstrāde (4)
            </a>
            <a 
              href="#lazera-griesana"
              className="bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm border border-zinc-800 hover:border-teal-custom transition-colors"
            >
              Lāzera griešana (3)
            </a>
            <a 
              href="#cnc-iekartas"
              className="bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm border border-zinc-800 hover:border-teal-custom transition-colors"
            >
              CNC iekārtas (5)
            </a>
            <a 
              href="#automatizacija"
              className="bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm border border-zinc-800 hover:border-teal-custom transition-colors"
            >
              Automatizācija (4)
            </a>
          </div>
        </div>
      </section>

      {/* Official Partners Carousel */}
      <Partners />

      {/* Main Content Area */}
      <main className="container mx-auto px-6 mt-16">
        {/* 1. Metālapstrāde (4 kartītes) */}
        {renderCategorySection(
          'metalapstrade',
          'Metālapstrāde',
          'Locīšana · Virpošana · Profilu apstrāde',
          '4 Iekārtas',
          metalWorkingMachines,
          <Factory className="w-4 h-4 text-teal-custom" />
        )}

        {/* 2. Lāzera griešana (3 kartītes) */}
        {renderCategorySection(
          'lazera-griesana',
          'Lāzera griešana',
          'Šķiedru lāzeri · Cauruļu 3D griešana · Lokšņu centri',
          '3 Iekārtas',
          laserCuttingMachines,
          <Zap className="w-4 h-4 text-teal-custom" />
        )}

        {/* 3. CNC iekārtas (5 kartītes) */}
        {renderCategorySection(
          'cnc-iekartas',
          'CNC iekārtas',
          '5-asu frēzēšana · Ātrgaitas centri · Daudzasu virpošana',
          '5 Iekārtas',
          cncMachines,
          <Settings className="w-4 h-4 text-teal-custom" />
        )}

        {/* 4. Automatizācijas iekārtas (4 kartītes) */}
        {renderCategorySection(
          'automatizacija',
          'Automatizācijas iekārtas',
          'Robotšūnas · Metināšanas roboti · Automātiskās noliktavas',
          '4 Iekārtas',
          automationMachines,
          <Cpu className="w-4 h-4 text-teal-custom" />
        )}
      </main>

      {/* Specification Modal */}
      {activeModalMachine && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
          <div 
            className="bg-white text-zinc-900 w-full max-w-2xl rounded-sm shadow-2xl border border-zinc-200 overflow-hidden my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-zinc-950 text-white p-6 flex items-start justify-between border-b border-zinc-800">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[11px] font-black uppercase tracking-widest text-teal-custom">
                    {activeModalMachine.brand}
                  </span>
                  <span className="text-zinc-500 text-xs">·</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                    {activeModalMachine.categoryName}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                  {activeModalMachine.name}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalMachine(null)}
                className="text-zinc-400 hover:text-white p-2 rounded-sm hover:bg-zinc-800 transition-colors cursor-pointer"
                aria-label="Aizvērt modālo logu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
              {/* Description */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-2">
                  Iekārtas apraksts
                </h4>
                <p className="text-sm text-zinc-700 leading-relaxed">
                  {activeModalMachine.description}
                </p>
              </div>

              {/* Technical Specifications Table */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-zinc-900 mb-3 flex items-center gap-2">
                  <Settings className="w-4 h-4 text-teal-custom" />
                  <span>Tehniskie parametri un specifikācija</span>
                </h4>
                <div className="border border-zinc-200 rounded-sm overflow-hidden text-xs sm:text-sm">
                  <div className="divide-y divide-zinc-200">
                    {activeModalMachine.specs.map((spec, idx) => (
                      <div 
                        key={idx}
                        className={`flex flex-col sm:flex-row sm:items-center justify-between p-3 ${
                          idx % 2 === 0 ? 'bg-zinc-50' : 'bg-white'
                        }`}
                      >
                        <span className="font-semibold text-zinc-600 sm:w-1/2">
                          {spec.label}
                        </span>
                        <span className="font-bold text-zinc-900 sm:w-1/2 sm:text-right mt-0.5 sm:mt-0">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Standard Guarantees */}
              <div className="bg-teal-50/70 border border-teal-200/80 p-4 rounded-sm">
                <h5 className="font-extrabold text-xs text-teal-900 uppercase tracking-wider mb-2 flex items-center">
                  <ShieldCheck className="w-4 h-4 mr-1.5 text-teal-custom" />
                  UPWORX Standarta komplektācija un serviss
                </h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-teal-950/80">
                  <li className="flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-teal-custom shrink-0" />
                    24 mēnešu pilna ražotāja garantija
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-teal-custom shrink-0" />
                    Piegāde, montāža un nodošana ekspluatācijā
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-teal-custom shrink-0" />
                    Operatoru un inženieru apmācība uz vietas
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-teal-custom shrink-0" />
                    Sertificēts servisa atbalsts 24h laikā Baltijā
                  </li>
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-zinc-100 px-6 py-4 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={() => setActiveModalMachine(null)}
                className="w-full sm:w-auto px-5 py-2.5 border border-zinc-300 hover:bg-zinc-200 text-zinc-700 font-bold uppercase tracking-wider text-xs rounded-sm transition-colors cursor-pointer"
              >
                Aizvērt
              </button>
              <button
                onClick={() => {
                  const machineName = activeModalMachine.name;
                  setActiveModalMachine(null);
                  onInquiryClick(machineName);
                }}
                className="w-full sm:w-auto px-6 py-2.5 bg-teal-custom hover:bg-teal-600 text-zinc-950 font-bold uppercase tracking-wider text-xs rounded-sm transition-colors flex items-center justify-center cursor-pointer shadow-md"
              >
                <span>Pieteikt cenu piedāvājumu</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
