import { Language } from './types';
import { MachineItem, CategoryMeta } from '../data/machineryData';

// Category translations
export const localizedCategories: Record<Language, Record<string, { name: string; subtitle: string; description: string }>> = {
  LV: {
    metalapstrade: {
      name: 'Metālapstrāde',
      subtitle: 'Precīzas lokšņu locīšanas un formēšanas iekārtas',
      description: 'Augstas precizitātes CNC hidrauliskās un elektromehāniskās locīšanas preses un formēšanas iekārtas lokšņu metāla apstrādei no vadošajiem ražotājiem.'
    },
    'lazera-griesana': {
      name: 'Lāzera Griešana',
      subtitle: '2D lokšņu un cauruļu šķiedru lāzeri',
      description: 'Modernas šķiedru (fiber) lāzergriešanas iekārtas lokšņu metāla un cauruļu ātrai, precīzai un ekonomiskai termiskajai griešanai.'
    },
    'cnc-iekartas': {
      name: 'CNC Iekārtas',
      subtitle: '3, 4 un 5-asu apstrādes centri un virpas',
      description: 'Universālie un specializētie CNC frēzēšanas un virpošanas centri sarežģītu metāla detaļu augstas precizitātes mehāniskajai apstrādei.'
    },
    automatizacija: {
      name: 'Automatizācija',
      subtitle: 'Robotizētās ražošanas šūnas un materiālu noliktavas',
      description: 'Industriālie roboti, inteliģentās torņu noliktavas un automatizētās iekraušanas sistēmas nepārtrauktam un autonomam ražošanas ciklam.'
    }
  },
  ENG: {
    metalapstrade: {
      name: 'Metalworking',
      subtitle: 'Precision sheet metal bending and forming equipment',
      description: 'High-precision CNC hydraulic and electromechanical press brakes and forming machinery for sheet metal processing from leading global manufacturers.'
    },
    'lazera-griesana': {
      name: 'Laser Cutting',
      subtitle: '2D sheet and tube fiber laser systems',
      description: 'State-of-the-art fiber laser cutting machines for high-speed, accurate, and economical thermal cutting of sheet metal and tubes.'
    },
    'cnc-iekartas': {
      name: 'CNC Equipment',
      subtitle: '3, 4, and 5-axis machining centers and lathes',
      description: 'Universal and dedicated CNC milling and turning centers for high-precision mechanical processing of complex metal components.'
    },
    automatizacija: {
      name: 'Automation',
      subtitle: 'Robotic production cells and automated material storage',
      description: 'Industrial robots, intelligent storage towers, and automated loading systems enabling continuous, lights-out autonomous manufacturing.'
    }
  },
  RU: {
    metalapstrade: {
      name: 'Металлообработка',
      subtitle: 'Прецизионное листогибочное и формовочное оборудование',
      description: 'Высокоточные гидравлические и электромеханические листогибочные прессы с ЧПУ для обработки листового металла от мировых лидеров.'
    },
    'lazera-griesana': {
      name: 'Лазерная резка',
      subtitle: '2D оптоволоконные лазеры для раскроя листов и труб',
      description: 'Современные волоконные (fiber) лазерные станки для высокоскоростной, прецизионной и экономичной термической резки металла и труб.'
    },
    'cnc-iekartas': {
      name: 'Станки с ЧПУ',
      subtitle: '3, 4 и 5-осевые обрабатывающие центры и токарные станки',
      description: 'Универсальные и специализированные фрезерные и токарные обрабатывающие центры с ЧПУ для высокоточной механической обработки деталей.'
    },
    automatizacija: {
      name: 'Автоматизация',
      subtitle: 'Роботизированные производственные ячейки и склады',
      description: 'Промышленные роботы, интеллектуальные башенные склады и автоматические системы загрузки для бесперебойного автономного производства.'
    }
  }
};

// Machine translations mapping by machine ID
interface LocalizedMachineData {
  type: string;
  categoryName: string;
  shortDescription: string;
  aboutText: string;
  threeMainParams: Array<{ label: string; value: string }>;
  advantages: Array<{ title: string; description: string }>;
  specs: Array<{ parameter: string; value: string }>;
  technologies?: Array<{ title: string; description: string }>;
}

export const localizedMachines: Record<Language, Record<string, Partial<LocalizedMachineData>>> = {
  LV: {},
  ENG: {
    // 1. METALAPSTRADE
    'trumpf-trubend-5170': {
      type: 'CNC Hydraulic Press Brake',
      categoryName: 'Metalworking',
      shortDescription: 'TRUMPF TruBend 5170 is a high-performance CNC hydraulic press brake with 1700 kN bending force and 3230 mm bending length, engineered for complex sheet bending.',
      aboutText: 'The TRUMPF TruBend Series 5000 is renowned for unmatched productivity, precision, and operator convenience. Equipped with the ACB Wireless contactless angle measurement system, it ensures genuine first-part accuracy without trial waste.',
      threeMainParams: [
        { label: 'Press force', value: '1700 kN (170 t)' },
        { label: 'Bending length', value: '3230 mm' },
        { label: 'Angle measurement', value: 'ACB Wireless' }
      ],
      advantages: [
        { title: '1700 KN PRESS FORCE', description: 'Suitable for professional processing of diverse sheet metal parts and materials.' },
        { title: '3230 MM BENDING LENGTH', description: 'Allows handling and precise bending of large-format sheet components.' },
        { title: 'ACB WIRELESS', description: 'Automatic real-time angle measurement and closed-loop control during the bend cycle.' },
        { title: 'CNC TOUCH CONTROL', description: 'Precise and repeatable machine operation with 3D graphic simulation.' }
      ],
      specs: [
        { parameter: 'Manufacturer', value: 'TRUMPF' },
        { parameter: 'Model', value: 'TruBend 5170' },
        { parameter: 'Machine type', value: 'CNC hydraulic press brake' },
        { parameter: 'Press force', value: '1700 kN / 170 t' },
        { parameter: 'Bending length', value: '3230 mm' },
        { parameter: 'Angle system', value: 'ACB Wireless' },
        { parameter: 'Distance between frames', value: '2690 mm' },
        { parameter: 'Stroke (Y axis)', value: '445 mm' },
        { parameter: 'Backgauge axes', value: '6 axes (X, R, Z1, Z2, X1, X2)' },
        { parameter: 'Control system', value: 'Touchpoint TruBend (21.5" Multi-Touch)' },
        { parameter: 'Positioning accuracy', value: '± 0.005 mm' }
      ]
    },
    'prima-power-ep-1030': {
      type: 'Servo-Electric Press Brake',
      categoryName: 'Metalworking',
      shortDescription: 'Eco-friendly servo-electric press brake with belt-drive system reducing energy consumption by up to 50% and eliminating hydraulic oil maintenance.',
      aboutText: 'The PRIMA POWER eP-1030 combines servo-electric belt technology with a rigid O-frame, guaranteeing micron-level repeatability without hydraulic thermal drift and with minimal maintenance costs.',
      threeMainParams: [
        { label: 'Press force', value: '1050 kN (105 t)' },
        { label: 'Bending length', value: '3100 mm' },
        { label: 'Dynamic crowning', value: 'Auto-Crowning' }
      ],
      advantages: [
        { title: '100% SERVO-ELECTRIC DRIVE', description: 'Clean operation without hydraulic oil and up to 50% lower power consumption.' },
        { title: 'SOLID O-FRAME', description: 'Eliminates side frame yaw deflection under maximum tonnage across the entire length.' },
        { title: 'AUTO-CROWNING SYSTEM', description: 'Automatic dynamic deflection compensation for constant angles across 3100 mm.' }
      ],
      specs: [
        { parameter: 'Manufacturer', value: 'PRIMA POWER' },
        { parameter: 'Model', value: 'eP-1030' },
        { parameter: 'Machine type', value: 'Servo-electric press brake' },
        { parameter: 'Press force', value: '1050 kN (105 t)' },
        { parameter: 'Bending length', value: '3100 mm' },
        { parameter: 'Backgauge axes', value: '5 axes (X, R, Z1, Z2, Delta X)' },
        { parameter: 'Positioning accuracy', value: '± 0.002 mm' },
        { parameter: 'CNC console', value: 'Prima Electro Open Control 17"' }
      ]
    },
    'mazak-slant-turn-550': {
      type: 'Heavy-Duty CNC Turning Center',
      categoryName: 'Metalworking',
      shortDescription: 'Large-scale horizontal turning center with a 45° slant cast iron bed, designed for heavy-duty machining of massive shafts, pipes, and energy components.',
      aboutText: 'The MAZAK Slant Turn 550 delivers extreme vibration damping and power for rough and finish turning of large-diameter steel workpieces with a 12-position heavy-duty turret.',
      threeMainParams: [
        { label: 'Max. turning diameter', value: 'Ø 910 mm' },
        { label: 'Turning length', value: '3125 mm' },
        { label: 'Spindle motor', value: '45 kW / 4100 Nm' }
      ],
      advantages: [
        { title: '45° SLANT CAST IRON BED', description: 'Superior chip evacuation and maximum torsional rigidity during heavy metal removal.' },
        { title: '4100 NM SPINDLE TORQUE', description: '2-speed gearbox delivers immense torque at low spindle RPM for tough alloys.' },
        { title: 'MAZATROL SMOOTHG CNC', description: 'Intuitive conversational programming with real-time 3D collision avoidance.' }
      ],
      specs: [
        { parameter: 'Manufacturer', value: 'MAZAK' },
        { parameter: 'Model', value: 'Slant Turn 550' },
        { parameter: 'Machine type', value: 'Heavy-duty CNC turning center' },
        { parameter: 'Swing over bed', value: 'Ø 1040 mm' },
        { parameter: 'Max. turning diameter', value: 'Ø 910 mm' },
        { parameter: 'Max. turning length', value: '3125 mm' },
        { parameter: 'Spindle bore', value: 'Ø 185 mm' },
        { parameter: 'Spindle speed', value: '1200 rpm' },
        { parameter: 'Machine weight', value: '17 500 kg' }
      ]
    },
    'amada-hfe3i-1003': {
      type: 'Eco-Hydraulic CNC Press Brake',
      categoryName: 'Metalworking',
      shortDescription: 'Accurate and energy-efficient CNC press brake featuring patented reactive crowning bed and an 18.5" AMNC 3i multi-touch control.',
      aboutText: 'The AMADA HFE3i series features inverter-driven hydraulic technology that pumps oil only during active movement, dramatically cutting heat, noise, and electricity costs.',
      threeMainParams: [
        { label: 'Press force', value: '1000 kN (100 t)' },
        { label: 'Bending length', value: '3110 mm' },
        { label: 'Touch control', value: 'AMNC 3i 3D' }
      ],
      advantages: [
        { title: 'INVERTER HYDRAULICS', description: 'Cuts electricity consumption by up to 20% compared to standard hydraulic press brakes.' },
        { title: 'REACTIVE CROWNING BED', description: 'Patented Amada design naturally compensates for deflection under load for straight bends.' },
        { title: 'AMNC 3I 3D CONTROL', description: '18.5-inch multi-touch interface with realistic 3D part bend sequence simulation.' }
      ],
      specs: [
        { parameter: 'Manufacturer', value: 'AMADA' },
        { parameter: 'Model', value: 'HFE3i 1003' },
        { parameter: 'Machine type', value: 'Eco-hydraulic CNC press brake' },
        { parameter: 'Press force', value: '1000 kN (100 t)' },
        { parameter: 'Bending length', value: '3110 mm' },
        { parameter: 'Stroke', value: '200 mm' },
        { parameter: 'Distance between frames', value: '2705 mm' },
        { parameter: 'Weight', value: '6 850 kg' }
      ]
    },

    // 2. LAZERA GRIESANA
    'bystronic-bystar-fiber-15kw': {
      type: 'High-Power 2D Fiber Laser Cutting Center',
      categoryName: 'Laser Cutting',
      shortDescription: 'Top-tier 15 kW fiber laser for large-format sheets delivering supreme dynamics and cutting capacity for thick steel up to 30 mm.',
      aboutText: 'The Bystronic ByStar Fiber 6225 is engineered for high-volume fabricators. The 15 kW fiber source delivers blazing cutting speeds in thin sheet metal and mirror-smooth edge quality in thick carbon steel.',
      threeMainParams: [
        { label: 'Fiber laser power', value: '15 000 W' },
        { label: 'Cutting table', value: '6200 × 2500 mm' },
        { label: 'Cut thickness', value: 'Up to 30 mm' }
      ],
      advantages: [
        { title: '15 KW FIBER RESONATOR', description: 'Up to 2.5x higher cutting speeds and instant piercing of heavy steel plate.' },
        { title: 'EXTRA-LARGE TABLE 6.2 × 2.5 M', description: 'Seamless cutting of oversized structural and transportation parts without welding seams.' },
        { title: 'AUTOMATED NOZZLE CHANGER', description: '40-position magazine with optical camera inspection of nozzle condition and centering.' }
      ],
      specs: [
        { parameter: 'Manufacturer', value: 'BYSTRONIC' },
        { parameter: 'Model', value: 'ByStar Fiber 6225' },
        { parameter: 'Machine type', value: '2D fiber laser cutting center' },
        { parameter: 'Laser power', value: '15 000 W' },
        { parameter: 'Sheet format', value: '6200 × 2500 mm' },
        { parameter: 'Max. mild steel thickness', value: '30 mm' },
        { parameter: 'Max. stainless steel thickness', value: '30 mm' },
        { parameter: 'Positioning speed', value: '170 m/min' }
      ]
    },
    'prima-power-platino-linear': {
      type: 'High-Speed 2D Laser with Linear Motors',
      categoryName: 'Laser Cutting',
      shortDescription: 'Linear-motor 2D fiber laser built on a synthetic granite frame, delivering 2.5G acceleration and ultimate thermal stability.',
      aboutText: 'Prima Power Platino Linear unites magnetic linear motors with a synthetic granite base, eliminating mechanical rack-and-pinion wear and guaranteeing superior geometric precision over years of round-the-clock operation.',
      threeMainParams: [
        { label: 'Fiber source', value: '15 000 W' },
        { label: 'Axis acceleration', value: '2.5 G' },
        { label: 'Granite frame', value: 'Vibration damping' }
      ],
      advantages: [
        { title: 'FRICTIONLESS LINEAR MOTORS', description: '2.5G acceleration without mechanical gears prevents backlash and mechanical wear.' },
        { title: 'SYNTHETIC GRANITE BASE', description: 'Thermally inert material that absorbs cutting vibrations far better than welded steel.' },
        { title: 'SMART CUT CONTROL', description: 'Intelligent beam focusing system automatically optimizes piercing and cutting time.' }
      ],
      specs: [
        { parameter: 'Manufacturer', value: 'PRIMA POWER' },
        { parameter: 'Model', value: 'Platino Linear 15kW' },
        { parameter: 'Machine type', value: '2D laser center with linear motors' },
        { parameter: 'Laser power', value: '15 000 W' },
        { parameter: 'Table size', value: '3000 × 1500 mm' },
        { parameter: 'Acceleration', value: '2.5 G' },
        { parameter: 'Positioning speed', value: '200 m/min' }
      ]
    },
    'trumpf-trulaser-tube-7000': {
      type: '3D Tube and Profile Laser Cutting System',
      categoryName: 'Laser Cutting',
      shortDescription: 'Automated 3D tube laser with tilt-cutting head for bevels up to ±45°, handling profiles and pipes up to 254 mm in diameter.',
      aboutText: 'The TRUMPF TruLaser Tube 7000 replaces sawing, drilling, milling, and deburring in a single integrated workflow, producing interlocking tube assemblies ready for welding without manual fit-up.',
      threeMainParams: [
        { label: 'Max. tube diameter', value: 'Ø 254 mm' },
        { label: 'Raw tube loading', value: 'Up to 9.2 m' },
        { label: '3D bevel cutting', value: '± 45°' }
      ],
      advantages: [
        { title: '3D BEVEL CUTTING UP TO 45°', description: 'Cuts precise weld preparation chamfers and complex tube intersections in one setup.' },
        { title: '9.2 M AUTO LOADING', description: 'Bundle loader feeds long structural tubes directly into the cutting envelope automatically.' },
        { title: 'RAPID CUT CAPABILITY', description: 'Solid-state laser resonator provides rapid hole piercing in thin-walled tubing.' }
      ],
      specs: [
        { parameter: 'Manufacturer', value: 'TRUMPF' },
        { parameter: 'Model', value: 'TruLaser Tube 7000 T05' },
        { parameter: 'Machine type', value: '3D tube and profile laser center' },
        { parameter: 'Laser power', value: '4000 W TruDisk' },
        { parameter: 'Max. tube diameter', value: '254 mm' },
        { parameter: 'Max. rectangular profile', value: '220 mm' },
        { parameter: 'Max. raw material length', value: '9200 mm' },
        { parameter: 'Max. finished part length', value: '6500 mm' }
      ]
    },
    'mazak-optiplex-3015-neo': {
      type: 'Fiber Laser Cutting System',
      categoryName: 'Laser Cutting',
      shortDescription: 'Innovative 15 kW fiber laser featuring intelligent beam shaping modulation that optimizes energy concentration for diverse sheet materials.',
      aboutText: 'MAZAK Optiplex 3015 NEO dynamically switches beam shape during cutting, achieving mirror-like surface quality in heavy stainless steel and lightning speeds in thin sheets without manual nozzle swaps.',
      threeMainParams: [
        { label: 'Fiber source', value: '15 000 W' },
        { label: 'Table dimensions', value: '3050 × 1525 mm' },
        { label: 'Laser torch', value: 'Intelligent MCT 3' }
      ],
      advantages: [
        { title: 'DYNAMIC BEAM SHAPE CONTROL', description: 'Tunes beam profile to material gauge for optimal cutting speed and edge squareness.' },
        { title: 'INTELLIGENT TORCH MCT 3', description: 'Automatic focal calibration, nozzle inspection, and cleaning with integrated sensors.' },
        { title: 'MAZATROL SMOOTHLX CNC', description: '21.5-inch widescreen CNC screen with clear nesting layout and machine status diagnostics.' }
      ],
      specs: [
        { parameter: 'Manufacturer', value: 'MAZAK' },
        { parameter: 'Model', value: 'Optiplex 3015 NEO' },
        { parameter: 'Machine type', value: 'Fiber laser cutting machine' },
        { parameter: 'Laser power', value: '15 000 W' },
        { parameter: 'Working envelope', value: '3050 × 1525 mm' },
        { parameter: 'Max. steel thickness', value: '32 mm' },
        { parameter: 'Traverse speed', value: '160 m/min' }
      ]
    },

    // 3. CNC IEKARTAS
    'dmg-mori-dmu-75-monoblock': {
      type: 'Universal 5-Axis CNC Machining Center',
      categoryName: 'CNC Equipment',
      shortDescription: 'High-precision universal 5-axis machining center featuring monolithic monoBLOCK cast iron build and a 20,000 RPM SpeedMASTER spindle.',
      aboutText: 'DMG MORI DMU 75 monoBLOCK is the global industry benchmark for complex 5-axis aerospace, medical, and tooling fabrication with exceptional rigidity and thermal stability.',
      threeMainParams: [
        { label: 'Simultaneous machining', value: '5-Axis' },
        { label: 'Spindle speed', value: '20 000 rpm' },
        { label: 'Travels X / Y / Z', value: '750 × 650 × 560 mm' }
      ],
      advantages: [
        { title: 'MONOLITHIC CAST BASE', description: 'monoBLOCK construction guarantees extreme damping and surface accuracy under 5 microns.' },
        { title: '20 000 RPM SPINDLE', description: 'SpeedMASTER spindle with 35 kW power and 36-month unlimited-hours factory warranty.' },
        { title: 'CELOS WITH SIEMENS 840D SL', description: 'Smart machine management and direct integration with company CAD/CAM network.' }
      ],
      specs: [
        { parameter: 'Manufacturer', value: 'DMG MORI' },
        { parameter: 'Model', value: 'DMU 75 monoBLOCK' },
        { parameter: 'Machine type', value: 'Universal 5-axis CNC machining center' },
        { parameter: 'Travels X / Y / Z', value: '750 / 650 / 560 mm' },
        { parameter: 'Rotary table (C / B)', value: 'C: 360° / B: -120° to +120°' },
        { parameter: 'Spindle speed', value: '20 000 rpm' },
        { parameter: 'Tool magazine', value: '60 pockets (SK40 / HSK-A63)' },
        { parameter: 'Max. workpiece weight', value: '600 kg' }
      ]
    },
    'fanuc-robodrill-alpha-d21': {
      type: 'Ultra High-Speed Vertical CNC Machining Center',
      categoryName: 'CNC Equipment',
      shortDescription: 'The world’s top high-speed vertical center featuring 0.9-second tool change and 1.4G axis acceleration for high-volume series manufacturing.',
      aboutText: 'FANUC ROBODRILL is synonymous with extreme agility and rock-solid endurance. Ideal for aluminum parts, tapping, and drilling operations with ultra-low piece costs.',
      threeMainParams: [
        { label: 'Spindle speed', value: '24 000 rpm' },
        { label: 'Tool change time', value: '0.9 s' },
        { label: 'Axis dynamics', value: '1.4 G acceleration' }
      ],
      advantages: [
        { title: '0.9 S CHIP-TO-CHIP TOOL CHANGE', description: 'High-speed turret magazine eliminates idle non-cutting intervals.' },
        { title: '1.4 G ACCELERATION', description: 'Rapid acceleration on all axes drastically slashes overall cycle times.' },
        { title: 'FANUC 31I-B5 PLUS NANO CNC', description: 'Supreme nano interpolation and proven Japanese operational reliability.' }
      ],
      specs: [
        { parameter: 'Manufacturer', value: 'FANUC' },
        { parameter: 'Model', value: 'ROBODRILL α-D21LiB5 ADV' },
        { parameter: 'Machine type', value: 'Vertical high-speed machining center' },
        { parameter: 'Travels X / Y / Z', value: '700 / 400 / 330 mm' },
        { parameter: 'Spindle speed', value: '24 000 rpm' },
        { parameter: 'Tool capacity', value: '21 tools' },
        { parameter: 'Axis acceleration', value: '1.4 G' }
      ]
    },
    'haas-vf-4ss-super-speed': {
      type: 'High-Performance Vertical CNC Machining Center',
      categoryName: 'CNC Equipment',
      shortDescription: 'Super-speed vertical center equipped with a 12,000 RPM inline direct-drive spindle and an expansive 1321 × 457 mm work table.',
      aboutText: 'HAAS VF-4SS delivers exceptional price-to-performance ratio for batch milling of steel and non-ferrous components with fast rapids and quick tool changes.',
      threeMainParams: [
        { label: 'Inline direct-drive', value: '12 000 rpm' },
        { label: 'Travels X / Y', value: '1270 × 508 mm' },
        { label: 'Tool magazine', value: '30+1 Side-Mount' }
      ],
      advantages: [
        { title: 'INLINE DIRECT-DRIVE SPINDLE', description: 'Direct motor coupling eliminates belt vibration for exceptional surface finish.' },
        { title: '35.6 M/MIN RAPID TRAVERSE', description: 'Fast rapids minimize non-cutting transit time between machining pockets.' },
        { title: 'HAAS NEXTGEN CNC', description: 'Visual conversational programming, WiFi connectivity, and one-button diagnostics.' }
      ],
      specs: [
        { parameter: 'Manufacturer', value: 'HAAS' },
        { parameter: 'Model', value: 'VF-4SS Super Speed' },
        { parameter: 'Machine type', value: 'Vertical CNC machining center' },
        { parameter: 'Travels X / Y / Z', value: '1270 / 508 / 635 mm' },
        { parameter: 'Table size', value: '1321 × 457 mm' },
        { parameter: 'Spindle power', value: '22.4 kW (Vector Drive)' },
        { parameter: 'Magazine capacity', value: '30+1 tools' }
      ]
    },
    'mazak-variaxis-i-600': {
      type: 'Simultaneous 5-Axis CNC Machining Center',
      categoryName: 'CNC Equipment',
      shortDescription: 'Top-tier simultaneous 5-axis center with integrated Ø 600 mm rotary table for intricate contoured geometry in a single setup.',
      aboutText: 'The MAZAK Variaxis i-600 enables multi-surface and complex 3D contour milling in one clamping, eliminating re-fixturing errors and accelerating delivery times.',
      threeMainParams: [
        { label: 'Rotary table', value: 'Ø 600 mm' },
        { label: 'Spindle speed', value: '18 000 rpm' },
        { label: '3D control', value: 'Mazatrol SmoothX' }
      ],
      advantages: [
        { title: 'INTEGRATED 5-AXIS TABLE', description: 'Tilting rotary table driven by direct-drive motors provides exceptional dynamic response.' },
        { title: 'MAZATROL SMOOTHX', description: 'Advanced 5-axis CNC with real-time virtual collision safeguard algorithm.' },
        { title: '80-TOOL MAGAZINE', description: 'Generous capacity enables high flexibility and rapid batch changeovers.' }
      ],
      specs: [
        { parameter: 'Manufacturer', value: 'MAZAK' },
        { parameter: 'Model', value: 'Variaxis i-600' },
        { parameter: 'Machine type', value: 'Simultaneous 5-axis CNC machining center' },
        { parameter: 'Travels X / Y / Z', value: '510 / 910 / 510 mm' },
        { parameter: 'A axis tilt', value: '-120° to +30°' },
        { parameter: 'C axis rotation', value: '± 360°' },
        { parameter: 'Spindle power', value: '30 kW' }
      ]
    },

    // 4. AUTOMATIZACIJA
    'fanuc-robot-cell-m20id': {
      type: 'Robotic Machine Tending Cell',
      categoryName: 'Automation',
      shortDescription: 'Automated CNC machine tending cell for raw blank loading and finished part unloading with integrated iRVision 3D optical guidance.',
      aboutText: 'The FANUC Robot Cell M-20iD/25 provides continuous lights-out production for CNC centers across nights and weekends. Hollow-arm routing shields cabling from chips and coolant.',
      threeMainParams: [
        { label: 'Payload capacity', value: '25 kg' },
        { label: 'Working radius', value: '1831 mm' },
        { label: 'Machine vision', value: 'iRVision 3D' }
      ],
      advantages: [
        { title: '24/7 LIGHTS-OUT MANUFACTURING', description: 'Operates unattended through 3rd shifts, boosting overall machine throughput by up to 60%.' },
        { title: 'IRVISION 3D GUIDANCE', description: 'Identifies randomly oriented blanks directly from pallets without costly dedicated jigs.' },
        { title: 'IP67 PROTECTION CLASS', description: 'Engineered for tough machine shop environments with hot chips, grease, and cutting fluid.' }
      ],
      specs: [
        { parameter: 'Manufacturer', value: 'FANUC' },
        { parameter: 'Model', value: 'Robot Cell M-20iD/25' },
        { parameter: 'Machine type', value: 'Robotic machine tending cell' },
        { parameter: 'Robot axes', value: '6 axes' },
        { parameter: 'Payload', value: '25 kg' },
        { parameter: 'Reach', value: '1831 mm' },
        { parameter: 'Repeatability', value: '± 0.02 mm' }
      ]
    },
    'prima-power-psbb-line': {
      type: 'Integrated Sheet Metal Manufacturing Line',
      categoryName: 'Automation',
      shortDescription: 'Fully integrated flexible manufacturing system combining automatic punching, right-angle shearing, buffering, and bending in a single stream.',
      aboutText: 'PRIMA POWER PSBB unites all sheet processing operations in one unbroken automated process flow, removing intermediate buffer delays and manual sheet handling damages.',
      threeMainParams: [
        { label: 'Punching + Bending', value: 'Single automated line' } ,
        { label: 'Sheet format', value: '3100 × 1550 mm' },
        { label: 'Tool changeover', value: 'Zero Setup' }
      ],
      advantages: [
        { title: 'CONTINUOUS MATERIAL FLOW', description: 'Raw sheets are picked, punched, sheared, and bent into finished goods without manual intervention.' },
        { title: 'ZERO SETUP CHANGEOVER', description: 'Automatic tooling adjustment allows cost-effective production even for single-part orders.' },
        { title: 'TULUS MES INTEGRATION', description: 'Direct bridge to factory ERP for paperless job management and live throughput tracking.' }
      ],
      specs: [
        { parameter: 'Manufacturer', value: 'PRIMA POWER' },
        { parameter: 'Model', value: 'PSBB Shear Brilliance Line' },
        { parameter: 'Machine type', value: 'Integrated sheet metal manufacturing line' },
        { parameter: 'Max. sheet size', value: '3100 × 1550 mm' },
        { parameter: 'Material thickness', value: '0.5 to 4.0 mm' },
        { parameter: 'Punching force', value: '300 kN servo-electric' }
      ]
    },
    'bystronic-bytrans-extended': {
      type: 'Automated Laser Loading & Unloading System',
      categoryName: 'Automation',
      shortDescription: 'Compact and rapid shuttle automation for fiber lasers executing complete raw sheet loading and part unloading in under 60 seconds.',
      aboutText: 'Bystronic ByTrans Extended keeps fiber lasers operating uninterruptedly while the cutting head works on the next sheet. Dual output cassettes segregate finished parts and skeleton scrap.',
      threeMainParams: [
        { label: 'Cycle time', value: '~60 s' },
        { label: 'Sheet format', value: '3000 × 1500 mm' },
        { label: 'Max. sheet payload', value: '900 kg' }
      ],
      advantages: [
        { title: '60-SECOND CYCLE TIME', description: 'Minimal idle time between cuts guarantees maximum laser beam utilization.' },
        { title: 'DUAL UNLOADING CASSETTES', description: 'Separates cut parts and scrap skeletons onto individual pallets without stopping.' },
        { title: 'SECURE VACUUM GRIP', description: 'Adjustable suction cups and double-sheet detection sensors prevent multi-sheet pick-up.' }
      ],
      specs: [
        { parameter: 'Manufacturer', value: 'BYSTRONIC' },
        { parameter: 'Model', value: 'ByTrans Extended 3015' },
        { parameter: 'Machine type', value: 'Laser sheet automation system' },
        { parameter: 'Sheet format', value: '3000 × 1500 mm' },
        { parameter: 'Max. sheet thickness', value: '25 mm' },
        { parameter: 'Max. sheet weight', value: '900 kg' }
      ]
    },
    'trumpf-trustore-3030': {
      type: 'Compact Automated Sheet Metal Storage System',
      categoryName: 'Automation',
      shortDescription: 'Modular vertical sheet storage tower holding up to 15 storage cassettes, supplying material directly to cutting machines without forklift reliance.',
      aboutText: 'TRUMPF TruStore 3030 saves up to 70% of floor space by storing various sheet grades and gauges in a vertical storage tower with rapid automated cassette delivery.',
      threeMainParams: [
        { label: 'Vertical tower', value: 'Up to 15 shelves' },
        { label: 'Total payload', value: '45 tonnes' },
        { label: 'Standard format', value: '3000 × 1500 mm' }
      ],
      advantages: [
        { title: '70% FLOOR SPACE SAVINGS', description: 'Compact vertical tower replaces sprawling sheet pallets throughout the shop.' },
        { title: 'DIRECT LASER INTERFACE', description: 'Internal elevator delivers requested material cassettes straight to the laser loading table.' },
        { title: 'TRUTOPS FAB INVENTORY MANAGEMENT', description: 'Live tracking of raw material stock, sheet sizes, and remnant inventory.' }
      ],
      specs: [
        { parameter: 'Manufacturer', value: 'TRUMPF' },
        { parameter: 'Model', value: 'TruStore 3030' },
        { parameter: 'Machine type', value: 'Compact sheet metal storage system' },
        { parameter: 'Storage shelves', value: 'From 5 to 15 cassettes' },
        { parameter: 'System height', value: '3.1 m to 8.1 m' },
        { parameter: 'Cassette load capacity', value: '3000 kg' }
      ]
    }
  },
  RU: {
    // 1. METALAPSTRADE
    'trumpf-trubend-5170': {
      type: 'Гидравлический листогибочный пресс с ЧПУ',
      categoryName: 'Металлообработка',
      shortDescription: 'Профессиональный гидравлический листогибочный пресс с ЧПУ с усилием 170 тонн, рабочей длиной 3230 мм и автоматической системой замера угла ACB Wireless.',
      aboutText: 'TRUMPF TruBend 5170 — гидравлический листогибочный пресс с ЧПУ для профессиональной металлообработки. Усилие 1700 кН и длина гибки 3230 мм обеспечивают широкие возможности, а технология ACB Wireless гарантирует точный угол с первой детали.',
      threeMainParams: [
        { label: 'Усилие гибки', value: '1700 кН (170 т)' },
        { label: 'Длина гибки', value: '3230 мм' },
        { label: 'Контроль угла', value: 'ACB Wireless' }
      ],
      advantages: [
        { title: 'УСИЛИЕ 1700 КН', description: 'Подходит для профессиональной гибки различных листовых деталей и сталей.' },
        { title: 'ДЛИНА ГИБКИ 3230 ММ', description: 'Позволяет обрабатывать крупногабаритные заготовки и профили.' },
        { title: 'СИСТЕМА ACB WIRELESS', description: 'Автоматическое беспроводное измерение и коррекция угла в реальном времени.' },
        { title: 'СЕНСОРНОЕ ЧПУ', description: 'Высокоточное и повторяемое управление процессами гибки с 3D-моделированием.' }
      ],
      specs: [
        { parameter: 'Производитель', value: 'TRUMPF' },
        { parameter: 'Модель', value: 'TruBend 5170' },
        { parameter: 'Тип оборудования', value: 'Гидравлический листогибочный пресс с ЧПУ' },
        { parameter: 'Усилие гибки', value: '1700 кН / 170 т' },
        { parameter: 'Длина гибки', value: '3230 мм' },
        { parameter: 'Система угла', value: 'ACB Wireless' },
        { parameter: 'Расстояние между стойками', value: '2690 мм' },
        { parameter: 'Рабочий ход (ось Y)', value: '445 мм' },
        { parameter: 'Оси заднего упора', value: '6 осей (X, R, Z1, Z2, X1, X2)' },
        { parameter: 'Система управления', value: 'Touchpoint TruBend (21.5" Multi-Touch)' },
        { parameter: 'Точность позиционирования', value: '± 0.005 мм' }
      ]
    },
    'prima-power-ep-1030': {
      type: 'Сервоэлектрический листогибочный пресс',
      categoryName: 'Металлообработка',
      shortDescription: 'Экологичный сервоэлектрический листогибочный пресс с ременным приводом, снижающий энергопотребление до 50% и не требующий гидравлического масла.',
      aboutText: 'PRIMA POWER eP-1030 объединяет сервоэлектрическую ременную передачу с массивной О-образной станиной, гарантируя субмикронную повторяемость без температурного дрейфа масла.',
      threeMainParams: [
        { label: 'Усилие гибки', value: '1050 кН (105 т)' },
        { label: 'Длина гибки', value: '3100 мм' },
        { label: 'Компенсация прогиба', value: 'Auto-Crowning' }
      ],
      advantages: [
        { title: '100% СЕРВОЭЛЕКТРИЧЕСКИЙ ПРИВОД', description: 'Чистая работа без масла и до 50% экономии электроэнергии.' },
        { title: 'МАССИВНАЯ О-ОБРАЗНАЯ СТАНИНА', description: 'Исключает деформацию боковых стоек при максимальных нагрузках.' },
        { title: 'СИСТЕМА AUTO-CROWNING', description: 'Автоматическая динамическая компенсация прогиба стола по всей длине 3100 мм.' }
      ],
      specs: [
        { parameter: 'Производитель', value: 'PRIMA POWER' },
        { parameter: 'Модель', value: 'eP-1030' },
        { parameter: 'Тип оборудования', value: 'Сервоэлектрический листогибочный пресс' },
        { parameter: 'Усилие гибки', value: '1050 кН (105 т)' },
        { parameter: 'Длина гибки', value: '3100 мм' },
        { parameter: 'Оси упора', value: '5 осей (X, R, Z1, Z2, Delta X)' },
        { parameter: 'Точность позиционирования', value: '± 0.002 мм' },
        { parameter: 'Панель управления', value: 'Prima Electro Open Control 17"' }
      ]
    },
    'mazak-slant-turn-550': {
      type: 'Тяжелый токарный станок с ЧПУ',
      categoryName: 'Металлообработка',
      shortDescription: 'Крупногабаритный горизонтальный токарный центр с наклонной чугунной станиной 45°, предназначенный для обработки массивных валов, труб и фланцев.',
      aboutText: 'MAZAK Slant Turn 550 обеспечивает непревзойденное виброгашение и крутящий момент для черновой и чистовой токарной обработки крупногабаритных деталей из легированных сталей.',
      threeMainParams: [
        { label: 'Макс. диаметр обработки', value: 'Ø 910 мм' },
        { label: 'Длина обработки', value: '3125 мм' },
        { label: 'Привод шпинделя', value: '45 кВт / 4100 Нм' }
      ],
      advantages: [
        { title: 'НАКЛОННАЯ ЧУГУННАЯ СТАНИНА (45°)', description: 'Превосходный сход стружки и максимальная жесткость при тяжелом резании.' },
        { title: 'КРУТЯЩИЙ МОМЕНТ 4100 НМ', description: '2-ступенчатая коробка передач обеспечивает колоссальный момент на низких оборотах.' },
        { title: 'ЧПУ MAZATROL SMOOTHG', description: 'Интуитивное диалоговое программирование и 3D-моделирование защиты от столкновений.' }
      ],
      specs: [
        { parameter: 'Производитель', value: 'MAZAK' },
        { parameter: 'Модель', value: 'Slant Turn 550' },
        { parameter: 'Тип оборудования', value: 'Тяжелый токарный станок с ЧПУ' },
        { parameter: 'Диаметр над станиной', value: 'Ø 1040 мм' },
        { parameter: 'Макс. диаметр обработки', value: 'Ø 910 мм' },
        { parameter: 'Макс. длина обработки', value: '3125 мм' },
        { parameter: 'Отверстие в шпинделе', value: 'Ø 185 мм' },
        { parameter: 'Обороты шпинделя', value: '1200 об/мин' },
        { parameter: 'Масса станка', value: '17 500 кг' }
      ]
    },
    'amada-hfe3i-1003': {
      type: 'Эко-гидравлический листогибочный пресс с ЧПУ',
      categoryName: 'Металлообработка',
      shortDescription: 'Прецизионный и энергоэффективный листогибочный пресс с ЧПУ с запатентованным реактивным компенсационным столом и сенсорной консолью AMNC 3i.',
      aboutText: 'Серия AMADA HFE3i использует инверторный гидравлический привод, который подает масло только в момент движения балки, радикально снижая нагрев и шум.',
      threeMainParams: [
        { label: 'Усилие гибки', value: '1000 кН (100 т)' },
        { label: 'Длина гибки', value: '3110 мм' },
        { label: 'Сенсорное ЧПУ', value: 'AMNC 3i 3D' }
      ],
      advantages: [
        { title: 'ИНВЕРТОРНАЯ ГИДРАВЛИКА', description: 'Снижает расход электроэнергии до 20% по сравнению с традиционными прессами.' },
        { title: 'РЕАКТИВНЫЙ СТОЛ', description: 'Запатентованная система Amada автоматически компенсирует прогиб под нагрузкой.' },
        { title: '3D ЧПУ AMNC 3I', description: '18.5-дюймовый сенсорный экран с полной 3D-симуляцией последовательности гибки.' }
      ],
      specs: [
        { parameter: 'Производитель', value: 'AMADA' },
        { parameter: 'Модель', value: 'HFE3i 1003' },
        { parameter: 'Тип оборудования', value: 'Эко-гидравлический листогибочный пресс с ЧПУ' },
        { parameter: 'Усилие гибки', value: '1000 кН (100 т)' },
        { parameter: 'Длина гибки', value: '3110 мм' },
        { parameter: 'Рабочий ход', value: '200 мм' },
        { parameter: 'Расстояние между стойками', value: '2705 мм' },
        { parameter: 'Масса', value: '6 850 кг' }
      ]
    },

    // 2. LAZERA GRIESANA
    'bystronic-bystar-fiber-15kw': {
      type: 'Высокомощный 2D оптоволоконный лазерный комплекс',
      categoryName: 'Лазерная резка',
      shortDescription: 'Высокопроизводительный 15 кВт волоконный лазер для крупноформатного листа с непревзойденной динамикой и раскроем толстой стали до 30 мм.',
      aboutText: 'Bystronic ByStar Fiber 6225 создан для самых требовательных промышленных производств. Источник 15 кВт обеспечивает молниеносную резку тонкого металла и зеркальную кромку на толстой стали.',
      threeMainParams: [
        { label: 'Мощность лазера', value: '15 000 Вт' },
        { label: 'Рабочий стол', value: '6200 × 2500 мм' },
        { label: 'Толщина резки', value: 'До 30 мм' }
      ],
      advantages: [
        { title: 'ВОЛОКОННЫЙ ИСТОЧНИК 15 КВТ', description: 'До 2.5 раз выше скорость раскроя и мгновенная пробивка толстой листовой стали.' },
        { title: 'КРУПНОФОРМАТНЫЙ СТОЛ 6.2 × 2.5 М', description: 'Раскрой крупногабаритных конструкций и рам без дополнительных стыков.' },
        { title: 'АВТОСМЕНА СОПЕЛ', description: 'Магазин на 40 сопел с оптическим контролем состояния и центровки сопла камерой.' }
      ],
      specs: [
        { parameter: 'Производитель', value: 'BYSTRONIC' },
        { parameter: 'Модель', value: 'ByStar Fiber 6225' },
        { parameter: 'Тип оборудования', value: '2D оптоволоконный лазерный комплекс' },
        { parameter: 'Мощность лазера', value: '15 000 Вт' },
        { parameter: 'Размер листа', value: '6200 × 2500 мм' },
        { parameter: 'Макс. толщина углеродистой стали', value: '30 мм' },
        { parameter: 'Макс. толщина нержавеющей стали', value: '30 мм' },
        { parameter: 'Скорость позиционирования', value: '170 м/мин' }
      ]
    },
    'prima-power-platino-linear': {
      type: 'Скоростной 2D лазер на линейных двигателях',
      categoryName: 'Лазерная резка',
      shortDescription: 'Оптоволоконный лазер 2D с линейными двигателями и станиной из синтетического гранита, обеспечивающей ускорение 2.5G и термостабильность.',
      aboutText: 'Prima Power Platino Linear сочетает магнитный линейный привод с основанием из синтетического гранита, устраняя механический износ шестерен и гарантируя долговечную точность.',
      threeMainParams: [
        { label: 'Волоконный источник', value: '15 000 Вт' },
        { label: 'Ускорение по осям', value: '2.5 G' },
        { label: 'Гранитная станина', value: 'Гашение вибраций' }
      ],
      advantages: [
        { title: 'БЕСКОНТАКТНЫЕ ЛИНЕЙНЫЕ ДВИГАТЕЛИ', description: 'Ускорение 2.5G без механических передач исключает люфты и износ.' },
        { title: 'ОСНОВАНИЕ ИЗ СИНТЕТИЧЕСКОГО ГРАНИТА', description: 'Термоинертный материал, поглощающий вибрации резки эффективнее стали.' },
        { title: 'ИНТЕЛЛЕКТУАЛЬНЫЙ КОНТРОЛЬ SMART CUT', description: 'Умная фокусировка луча оптимизирует время врезки в металл.' }
      ],
      specs: [
        { parameter: 'Производитель', value: 'PRIMA POWER' },
        { parameter: 'Модель', value: 'Platino Linear 15kW' },
        { parameter: 'Тип оборудования', value: '2D лазерный центр на линейных двигателях' },
        { parameter: 'Мощность лазера', value: '15 000 Вт' },
        { parameter: 'Размер стола', value: '3000 × 1500 мм' },
        { parameter: 'Ускорение', value: '2.5 G' },
        { parameter: 'Скорость позиционирования', value: '200 м/мин' }
      ]
    },
    'trumpf-trulaser-tube-7000': {
      type: '3D лазерный центр резки труб и профилей',
      categoryName: 'Лазерная резка',
      shortDescription: 'Автоматизированный 3D лазер для труб с наклонной головкой для фасок до ±45°, обрабатывающий профили и трубы диаметром до 254 мм.',
      aboutText: 'TRUMPF TruLaser Tube 7000 заменяет распиловку, сверление, фрезерование и снятие фасок за один рабочий цикл, позволяя собирать сварные узлы без ручной подгонки.',
      threeMainParams: [
        { label: 'Макс. диаметр трубы', value: 'Ø 254 мм' },
        { label: 'Автоподача заготовок', value: 'До 9.2 м' },
        { label: '3D нарезка фасок', value: '± 45°' }
      ],
      advantages: [
        { title: '3D РЕЗКА ФАСОК ДО 45°', description: 'Формирует сварочные фаски и сложные сопряжения труб за один проход.' },
        { title: 'АВТОЗАГРУЗКА 9.2 М', description: 'Пачечный накопитель автоматически подает длинные заготовки в зону резки.' },
        { title: 'ТЕХНОЛОГИЯ RAPID CUT', description: 'Быстрое прожигание отверстий в тонкостенных трубах без потери точности.' }
      ],
      specs: [
        { parameter: 'Производитель', value: 'TRUMPF' },
        { parameter: 'Модель', value: 'TruLaser Tube 7000 T05' },
        { parameter: 'Тип оборудования', value: '3D лазерный центр для резки труб и профилей' },
        { parameter: 'Мощность лазера', value: '4000 Вт TruDisk' },
        { parameter: 'Макс. диаметр трубы', value: '254 мм' },
        { parameter: 'Макс. профиль', value: '220 мм' },
        { parameter: 'Макс. длина сырья', value: '9200 мм' },
        { parameter: 'Длина готовой детали', value: '6500 мм' }
      ]
    },
    'mazak-optiplex-3015-neo': {
      type: 'Оптоволоконный лазерный раскройный комплекс',
      categoryName: 'Лазерная резка',
      shortDescription: 'Инновационный волоконный лазер 15 кВт с динамической модуляцией формы луча для оптимальной концентрации энергии на любых марках стали.',
      aboutText: 'MAZAK Optiplex 3015 NEO позволяет переключать форму луча на лету, получая зеркальный рез на толстой нержавеющей стали и максимальную скорость на тонких листах.',
      threeMainParams: [
        { label: 'Волоконный источник', value: '15 000 Вт' },
        { label: 'Размер стола', value: '3050 × 1525 мм' },
        { label: 'Лазерная головка', value: 'Умная MCT 3' }
      ],
      advantages: [
        { title: 'КОНТРОЛЬ ФОРМЫ ЛУЧА', description: 'Подстраивает профиль луча под толщину металла для чистой кромки без грата.' },
        { title: 'УМНАЯ ГОЛОВКА MCT 3', description: 'Автокалибровка фокуса, центровка сопла и очистка со встроенными датчиками.' },
        { title: 'ЧПУ MAZATROL SMOOTHLX', description: 'Большой экран 21.5 дюйма с наглядным отображением раскладки и процессов.' }
      ],
      specs: [
        { parameter: 'Производитель', value: 'MAZAK' },
        { parameter: 'Модель', value: 'Optiplex 3015 NEO' },
        { parameter: 'Тип оборудования', value: 'Оптоволоконный лазерный станок' },
        { parameter: 'Мощность лазера', value: '15 000 Вт' },
        { parameter: 'Рабочая зона', value: '3050 × 1525 мм' },
        { parameter: 'Макс. толщина стали', value: '32 мм' },
        { parameter: 'Скорость перемещений', value: '160 м/мин' }
      ]
    },

    // 3. CNC IEKARTAS
    'dmg-mori-dmu-75-monoblock': {
      type: 'Универсальный 5-осевой ЧПУ обрабатывающий центр',
      categoryName: 'Станки с ЧПУ',
      shortDescription: 'Высокоточный универсальный 5-осевой центр с монолитной чугунной станиной monoBLOCK и шпинделем SpeedMASTER со скоростью 20 000 об/мин.',
      aboutText: 'DMG MORI DMU 75 monoBLOCK — эталон точности в аэрокосмической, медицинской и инструментальной отраслях для сложнейшей 5-осевой обработки за один установ.',
      threeMainParams: [
        { label: 'Одновременная обработка', value: '5 осей' },
        { label: 'Обороты шпинделя', value: '20 000 об/мин' },
        { label: 'Перемещения X / Y / Z', value: '750 × 650 × 560 мм' }
      ],
      advantages: [
        { title: 'МОНОЛИТНАЯ ЧУГУННАЯ СТАНИНА', description: 'Конструкция monoBLOCK гарантирует стабильность и шероховатость поверхности менее 5 микрон.' },
        { title: 'ШПИНДЕЛЬ 20 000 ОБ/МИН', description: 'SpeedMASTER мощностью 35 кВт с заводской гарантией 36 месяцев без ограничения часов.' },
        { title: 'CELOS С SIEMENS 840D SL', description: 'Интеллектуальное управление станком и бесшовная интеграция с CAD/CAM сетью.' }
      ],
      specs: [
        { parameter: 'Производитель', value: 'DMG MORI' },
        { parameter: 'Модель', value: 'DMU 75 monoBLOCK' },
        { parameter: 'Тип оборудования', value: 'Универсальный 5-осевой ЧПУ обрабатывающий центр' },
        { parameter: 'Перемещения X / Y / Z', value: '750 / 650 / 560 мм' },
        { parameter: 'Поворотный стол (C / B)', value: 'C: 360° / B: от -120° до +120°' },
        { parameter: 'Обороты шпинделя', value: '20 000 об/мин' },
        { parameter: 'Магазин инструмента', value: '60 позиций (SK40 / HSK-A63)' },
        { parameter: 'Макс. масса детали', value: '600 кг' }
      ]
    },
    'fanuc-robodrill-alpha-d21': {
      type: 'Сверхскоростной вертикальный фрезерный центр с ЧПУ',
      categoryName: 'Станки с ЧПУ',
      shortDescription: 'Самый популярный в мире сверхскоростной вертикальный обрабатывающий центр со сменой инструмента за 0.9 секунды и ускорением осей 1.4G.',
      aboutText: 'FANUC ROBODRILL — синоним непревзойденной скорости и долговечности. Станок идеален для серийной обработки алюминия, нарезания резьбы и сверления.',
      threeMainParams: [
        { label: 'Обороты шпинделя', value: '24 000 об/мин' },
        { label: 'Смена инструмента', value: '0.9 с' },
        { label: 'Динамика осей', value: 'Ускорение 1.4 G' }
      ],
      advantages: [
        { title: 'СМЕНА ИНСТРУМЕНТА ЗА 0.9 С', description: 'Револьверный магазин с мгновенной сменой сводит к минимуму время простоя.' },
        { title: 'УСКОРЕНИЕ 1.4 G', description: 'Высокая динамика по всем осям существенно сокращает длительность цикла.' },
        { title: 'ЧПУ FANUC 31I-B5 PLUS NANO', description: 'Высочайшая нано-интерполяция и надежность электроники на долгие годы.' }
      ],
      specs: [
        { parameter: 'Производитель', value: 'FANUC' },
        { parameter: 'Модель', value: 'ROBODRILL α-D21LiB5 ADV' },
        { parameter: 'Тип оборудования', value: 'Вертикальный скоростной обрабатывающий центр' },
        { parameter: 'Перемещения X / Y / Z', value: '700 / 400 / 330 мм' },
        { parameter: 'Обороты шпинделя', value: '24 000 об/мин' },
        { parameter: 'Количество инструмента', value: '21 позиция' },
        { parameter: 'Ускорение осей', value: '1.4 G' }
      ]
    },
    'haas-vf-4ss-super-speed': {
      type: 'Высокопроизводительный вертикальный фрезерный ЧПУ центр',
      categoryName: 'Станки с ЧПУ',
      shortDescription: 'Скоростной вертикальный центр со шпинделем inline direct-drive 12 000 об/мин и просторным рабочим столом 1321 × 457 мм.',
      aboutText: 'HAAS VF-4SS обеспечивает оптимальное соотношение цены и производительности для серийного фрезерования стали и цветных сплавов.',
      threeMainParams: [
        { label: 'Шпиндель прямой привод', value: '12 000 об/мин' },
        { label: 'Перемещения X / Y', value: '1270 × 508 мм' },
        { label: 'Магазин инструмента', value: '30+1 боковой' }
      ],
      advantages: [
        { title: 'ПРЯМОЙ ПРИВОД ШПИНДЕЛЯ', description: 'Система inline исключает вибрации ремня и гарантирует чистоту поверхности.' },
        { title: 'СКОРОСТЬ ПЕРЕМЕЩЕНИЙ 35.6 М/МИН', description: 'Быстрые холостые перемещения сокращают межоперационное время.' },
        { title: 'ЧПУ HAAS NEXTGEN', description: 'Наглядное визуальное программирование, WiFi и оперативная диагностика.' }
      ],
      specs: [
        { parameter: 'Производитель', value: 'HAAS' },
        { parameter: 'Модель', value: 'VF-4SS Super Speed' },
        { parameter: 'Тип оборудования', value: 'Вертикальный обрабатывающий центр с ЧПУ' },
        { parameter: 'Перемещения X / Y / Z', value: '1270 / 508 / 635 мм' },
        { parameter: 'Размер стола', value: '1321 × 457 мм' },
        { parameter: 'Мощность шпинделя', value: '22.4 кВт (Vector Drive)' },
        { parameter: 'Вместимость магазина', value: '30+1 инструмент' }
      ]
    },
    'mazak-variaxis-i-600': {
      type: '5-осевой одновременный обрабатывающий центр с ЧПУ',
      categoryName: 'Станки с ЧПУ',
      shortDescription: 'Высококлассный центр одновременной 5-осевой обработки со встроенным поворотным столом Ø 600 мм для сложных деталей в один установ.',
      aboutText: 'MAZAK Variaxis i-600 позволяет фрезеровать многогранники и поверхности свободной формы за один зажим, исключая погрешности переустановки.',
      threeMainParams: [
        { label: 'Поворотный стол', value: 'Ø 600 мм' },
        { label: 'Обороты шпинделя', value: '18 000 об/мин' },
        { label: 'Сенсорное ЧПУ', value: 'Mazatrol SmoothX 3D' }
      ],
      advantages: [
        { title: 'ВСТРОЕННЫЙ 5-ОСЕВОЙ СТОЛ', description: 'Наклонно-поворотный стол с прямыми приводами для максимальной динамики.' },
        { title: 'ЧПУ MAZATROL SMOOTHX', description: 'Передовое 5-осевое управление с алгоритмом защиты от столкновений в реальном времени.' },
        { title: 'МАГАЗИН НА 80 ИНСТРУМЕНТОВ', description: 'Большая емкость для гибкого перехода между разнообразными сериями деталей.' }
      ],
      specs: [
        { parameter: 'Производитель', value: 'MAZAK' },
        { parameter: 'Модель', value: 'Variaxis i-600' },
        { parameter: 'Тип оборудования', value: '5-осевой обрабатывающий центр с ЧПУ' },
        { parameter: 'Перемещения X / Y / Z', value: '510 / 910 / 510 мм' },
        { parameter: 'Угол наклона оси A', value: 'от -120° до +30°' },
        { parameter: 'Вращение оси C', value: '± 360°' },
        { parameter: 'Мощность шпинделя', value: '30 кВт' }
      ]
    },

    // 4. AUTOMATIZACIJA
    'fanuc-robot-cell-m20id': {
      type: 'Роботизированная ячейка обслуживания станков',
      categoryName: 'Автоматизация',
      shortDescription: 'Автоматизированная ячейка загрузки заготовок и выгрузки деталей для станков с ЧПУ с интегрированным зрением iRVision 3D.',
      aboutText: 'FANUC Robot Cell M-20iD/25 обеспечивает круглосуточную автономную работу станков без участия оператора. Полая рука защищает кабели от стружки и эмульсии.',
      threeMainParams: [
        { label: 'Грузоподъемность', value: '25 кг' },
        { label: 'Рабочий радиус', value: '1831 мм' },
        { label: 'Техническое зрение', value: 'iRVision 3D' }
      ],
      advantages: [
        { title: 'КРУГЛОСУТОЧНАЯ АВТОНОМНАЯ РАБОТА', description: 'Работа в третью смену без оператора, увеличивая общую производительность на 60%.' },
        { title: 'СИСТЕМА IRVISION 3D', description: 'Оптическое распознавание произвольно уложенных заготовок прямо с паллет.' },
        { title: 'КЛАСС ЗАЩИТЫ IP67', description: 'Надежная работа в агрессивной среде смазочно-охлаждающей жидкости и горячей стружки.' }
      ],
      specs: [
        { parameter: 'Производитель', value: 'FANUC' },
        { parameter: 'Модель', value: 'Robot Cell M-20iD/25' },
        { parameter: 'Тип оборудования', value: 'Роботизированная ячейка обслуживания станков' },
        { parameter: 'Оси робота', value: '6 осей' },
        { parameter: 'Грузоподъемность', value: '25 кг' },
        { parameter: 'Радиус действия', value: '1831 мм' },
        { parameter: 'Повторяемость', value: '± 0.02 мм' }
      ]
    },
    'prima-power-psbb-line': {
      type: 'Комплексная автоматическая линия обработки листа',
      categoryName: 'Автоматизация',
      shortDescription: 'Полностью интегрированная гибкая линия, выполняющая вырубку, прямоугольную резку и гибку листа в едином автоматическом цикле.',
      aboutText: 'PRIMA POWER PSBB объединяет все этапы переработки листа в один поток без промежуточных складов и риска повреждения поверхности деталей.',
      threeMainParams: [
        { label: 'Штамповка + Гибка', value: 'Единый цикл линии' },
        { label: 'Формат листа', value: '3100 × 1550 мм' },
        { label: 'Смена инструмента', value: 'Zero Setup' }
      ],
      advantages: [
        { title: 'ЕДИНЫЙ ПОТОК МАТЕРИАЛА', description: 'Лист подается, пробивается, раскраивается и гнется в готовую деталь без ручного труда.' },
        { title: 'БЫСТРАЯ ПЕРЕНАЛАДКА ZERO SETUP', description: 'Автоматическая смена инструмента позволяет выпускать единичные партии без удорожания.' },
        { title: 'ИНТЕГРАЦИЯ С TULUS MES', description: 'Прямая связь с заводской системой ERP для оперативного отслеживания заказов онлайн.' }
      ],
      specs: [
        { parameter: 'Производитель', value: 'PRIMA POWER' },
        { parameter: 'Модель', value: 'PSBB Shear Brilliance Line' },
        { parameter: 'Тип оборудования', value: 'Линия комплексной листообработки' },
        { parameter: 'Макс. размер листа', value: '3100 × 1550 мм' },
        { parameter: 'Толщина материала', value: 'от 0.5 до 4.0 мм' },
        { parameter: 'Усилие вырубки', value: '300 кН сервоэлектрическое' }
      ]
    },
    'bystronic-bytrans-extended': {
      type: 'Автоматическая система загрузки и выгрузки для лазера',
      categoryName: 'Автоматизация',
      shortDescription: 'Компактная и быстрая система автоматизации для лазерных станков, выполняющая полную смену листа менее чем за 60 секунд.',
      aboutText: 'Bystronic ByTrans Extended обеспечивает непрерывную работу лазерного раскроя. Две выгрузочные кассеты автоматически сортируют готовые детали и деловой отход.',
      threeMainParams: [
        { label: 'Время полного цикла', value: '~60 сек' },
        { label: 'Формат листа', value: '3000 × 1500 мм' },
        { label: 'Макс. масса листа', value: '900 кг' }
      ],
      advantages: [
        { title: 'ЦИКЛ ЗАГРУЗКИ 60 СЕКУНД', description: 'Минимальное время смены листа между операциями раскроя обеспечивает 100% загрузку лазера.' },
        { title: 'ДВЕ ВЫГРУЗОЧНЫЕ КАССЕТЫ', description: 'Раздельная укладка готовых деталей и скелетного остатка без остановки комплекса.' },
        { title: 'НАДЕЖНЫЙ ВАКУУМНЫЙ ЗАХВАТ', description: 'Датчики контроля толщины предотвращают одновременный захват двух листов.' }
      ],
      specs: [
        { parameter: 'Производитель', value: 'BYSTRONIC' },
        { parameter: 'Модель', value: 'ByTrans Extended 3015' },
        { parameter: 'Тип оборудования', value: 'Система загрузки листового металла' },
        { parameter: 'Формат листа', value: '3000 × 1500 мм' },
        { parameter: 'Макс. толщина листа', value: '25 мм' },
        { parameter: 'Макс. масса листа', value: '900 кг' }
      ]
    },
    'trumpf-trustore-3030': {
      type: 'Компактная система башенного хранения листа',
      categoryName: 'Автоматизация',
      shortDescription: 'Модульный вертикальный башенный склад на 15 кассет, подающий листовой прокат напрямую к станку без использования погрузчика.',
      aboutText: 'TRUMPF TruStore 3030 экономит до 70% площади цеха, размещая пакеты листов разных марок и толщин в вертикальной башне с быстрым вызовом кассет.',
      threeMainParams: [
        { label: 'Башенный склад', value: 'До 15 кассет' },
        { label: 'Общая вместимость', value: '45 тонн' },
        { label: 'Формат листа', value: '3000 × 1500 мм' }
      ],
      advantages: [
        { title: 'ЭКОНОМИЯ 70% ПЛОЩАДИ', description: 'Компактная башня заменяет многочисленные стеллажи и штабели листов в цехе.' },
        { title: 'ПРЯМОЕ СОЕДИНЕНИЕ С ЛАЗЕРОМ', description: 'Лифт доставляет требуемую кассету с металлом прямо на загрузочный стол лазера.' },
        { title: 'УЧЕТ В TRUTOPS FAB', description: 'Точный учет остатков сырья, партий и типоразмеров металла в режиме реального времени.' }
      ],
      specs: [
        { parameter: 'Производитель', value: 'TRUMPF' },
        { parameter: 'Модель', value: 'TruStore 3030' },
        { parameter: 'Тип оборудования', value: 'Компактный башенный склад листового металла' },
        { parameter: 'Количество кассет', value: 'От 5 до 15 полок' },
        { parameter: 'Общая высота', value: 'от 3.1 м до 8.1 м' },
        { parameter: 'Нагрузка на полку', value: '3000 кг' }
      ]
    }
  }
};

/**
 * Returns localized CategoryMeta for the requested language
 */
export function getLocalizedCategory(category: CategoryMeta, lang: Language): CategoryMeta {
  if (lang === 'LV') return category;
  const trans = localizedCategories[lang]?.[category.id];
  if (!trans) return category;
  return {
    ...category,
    name: trans.name,
    subtitle: trans.subtitle,
    description: trans.description
  };
}

/**
 * Returns localized MachineItem for the requested language
 */
export function getLocalizedMachine(machine: MachineItem, lang: Language): MachineItem {
  if (lang === 'LV') return machine;

  // Localized category name
  const catTrans = localizedCategories[lang]?.[machine.category];
  const categoryName = catTrans ? catTrans.name : machine.categoryName;

  const mTrans = localizedMachines[lang]?.[machine.id];
  if (!mTrans) {
    // If specific machine translation is not defined, translate category name and generic type terms
    let type = machine.type;
    if (lang === 'ENG') {
      type = type
        .replace('CNC hidrauliskā locīšanas prese', 'CNC Hydraulic Press Brake')
        .replace('2D šķiedru (fiber) lāzergriešanas iekārta', '2D Fiber Laser Cutting Machine')
        .replace('5-asu universālais CNC apstrādes centrs', '5-Axis Universal CNC Machining Center')
        .replace('Robotiskā automatizētā ražošanas šūna', 'Robotic Automated Production Cell');
    } else if (lang === 'RU') {
      type = type
        .replace('CNC hidrauliskā locīšanas prese', 'Гидравлический листогибочный пресс с ЧПУ')
        .replace('2D šķiedru (fiber) lāzergriešanas iekārta', '2D оптоволоконный лазерный станок')
        .replace('5-asu universālais CNC apstrādes centrs', '5-осевой универсальный ЧПУ обрабатывающий центр')
        .replace('Robotiskā automatizētā ražošanas šūna', 'Роботизированная автоматическая ячейка');
    }

    return {
      ...machine,
      categoryName,
      type
    };
  }

  return {
    ...machine,
    type: mTrans.type || machine.type,
    categoryName: mTrans.categoryName || categoryName,
    shortDescription: mTrans.shortDescription || machine.shortDescription,
    aboutText: mTrans.aboutText || machine.aboutText,
    threeMainParams: mTrans.threeMainParams || machine.threeMainParams,
    advantages: mTrans.advantages || machine.advantages,
    specs: mTrans.specs || machine.specs,
    technologies: mTrans.technologies || machine.technologies
  };
}
