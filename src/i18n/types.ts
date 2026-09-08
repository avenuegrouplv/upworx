export type Language = 'LV' | 'ENG' | 'RU';

export interface Translations {
  // Common shared strings
  common: {
    machineryNav: string;
    requestPrice: string;
    close: string;
  };

  // Navigation & Header
  nav: {
    home: string;
    about: string;
    machinery: string;
    career: string;
    contact: string;
    phoneLabel: string;
    emailLabel: string;
    startCollab: string;
    requestPrice: string;
    langSelect: string;
    languageSelectionLabel: string;
  };
  header: {
    home: string;
    about: string;
    machinery: string;
    career: string;
    contact: string;
    phoneLabel: string;
    emailLabel: string;
    startCollab: string;
    requestPrice: string;
    langSelect: string;
    languageSelectionLabel: string;
  };

  // Hero section
  hero: {
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    titlePart1: string;
    titlePart2: string;
    titlePart3: string;
    titlePart4: string;
    subtitle: string;
    description: string;
    viewMachinery: string;
    getConsultation: string;
    requestPrice: string;
  };

  // Categories section
  categories: {
    badge: string;
    title: string;
    titleHighlight: string;
    catalogTitle1: string;
    catalogTitle2: string;
    subtitle: string;
    description: string;
    unitsCount: string;
    machinesLabel: string;
    viewCategory: string;
    metalworking: string;
    laserCutting: string;
    cncEquipment: string;
    automation: string;
    names: {
      metalapstrade: string;
      'lazera-griesana': string;
      'cnc-iekartas': string;
      automatizacija: string;
    };
  };

  // Why choose UPWORX / About section on home page
  aboutSection: {
    title1: string;
    title2: string;
    description: string;
    stat1Label: string;
    stat2Label: string;
    stat3Label: string;
    stat4Label: string;
  };

  // Featured products
  featured: {
    title: string;
    titleHighlight: string;
    viewAll: string;
    manufacturer: string;
    keySpecs: string;
    viewMachine: string;
  };

  featuredProducts: {
    title1: string;
    title2: string;
    viewAll: string;
    manufacturer: string;
    keySpecs: string;
    viewMachine: string;
    requestPrice: string;
  };

  // Machine Card
  machineCard: {
    machineTypeLabel: string;
    keyParamsLabel: string;
    viewMachineBtn: string;
    requestPriceBtn: string;
  };

  // Services section
  services: {
    title: string;
    titleHighlight: string;
    items: Array<{
      title: string;
      desc: string;
    }>;
  };

  // Why choose UPWORX / About section
  whyUs: {
    title: string;
    titleHighlight: string;
    description: string;
    stats: {
      experience: string;
      machinesInstalled: string;
      manufacturers: string;
      countries: string;
    };
  };

  // Projects
  projects: {
    title: string;
    titleHighlight: string;
    clientLabel: string;
    taskLabel: string;
    solutionLabel: string;
    scopeLabel: string;
    items: Array<{
      id: string;
      title: string;
      client: string;
      task: string;
      solution: string;
      upworxScope: string;
    }>;
  };

  // Partners
  partners: {
    badge: string;
    items: Array<{
      name: string;
      specialty: string;
    }>;
  };

  // Home consultation
  homeConsultation: {
    title1: string;
    title2: string;
    title3: string;
    description: string;
    phoneLabel: string;
    emailLabel: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabelInput: string;
    emailPlaceholder: string;
    phoneLabelInput: string;
    phonePlaceholder: string;
    categoryLabel: string;
    selectCategory: string;
    machineLabel: string;
    selectMachine: string;
    selectCategoryFirst: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    successTitle: string;
    successDesc: string;
  };

  // Machinery Page & Detail
  machineryPage: {
    heroTitle: string;
    heroHighlight: string;
    heroTitle1: string;
    heroTitle2: string;
    heroSubtitle: string;
    catalogTitle: string;
    catalogHighlight: string;
    catalogHeader1: string;
    catalogHeader2: string;
    unitsInCategory: string;
    inCategoryCount: string;
    machinesCountSuffix: string;
    modelsRange: string;
    modelsRangeHighlight: string;
    modelsRangeTitle1: string;
    modelsRangeTitle2: string;
    showingCount: string;
    otherCategoriesBadge: string;
    otherCategoriesTitle: string;
    viewMachine: string;
    machineType: string;
    mainParams: string;
  };

  machineDetail: {
    breadcrumbsMachinery: string;
    manufacturerPrefix: string;
    manufacturerLabel: string;
    keyParamsTitle: string;
    mainParams: string;
    requestPriceBtn: string; // "Pieprasīt cenu" / "Request Price" / "Запросить цену"
    requestPriceNote: string;
    quoteTimeNotice: string;
    aboutBadge: string;
    aboutTitle: string;
    aboutSectionBadge: string;
    aboutSectionTitle: string;
    advantagesBadge: string;
    advantagesTitle: string;
    specsBadge: string;
    specsTitle: string;
    techBadge: string;
    techTitle: string;
    innovationsBadge: string;
    innovationsTitle: string;
    docsBadge: string;
    docsTitle: string;
    documentationBadge: string;
    documentationTitle: string;
    downloadPdf: string;
    downloadPdfBtn: string;
    pdfDoc: string;
    ctaBadge: string;
    ctaTitlePrefix: string;
    ctaDesc: string;
    ctaSubtitle: string;
    ctaBtn: string;
    relatedBadge: string;
    otherMachinesPrefix: string;
    otherHeadingPrefix: string;
    viewAllCategoryBtn: string;
    viewAllCategoryPrefix: string;
  };

  // Machine Inquiry Modal ("Pieprasīt cenu")
  inquiryModal: {
    title: string;
    subtitle: string;
    machineFieldLabel: string;
    nameLabel: string;
    namePlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    messageLabel: string;
    defaultMessagePrefix: string;
    submitBtn: string;
    securityNote: string;
    directCallPrompt: string;
    successTitle: string;
    successDescPrefix: string;
    successDescSuffix: string;
    closeBtn: string;
  };

  // About Page
  aboutPage: {
    heroTitle1: string;
    heroTitleHighlight: string;
    heroTitle2: string;
    heroSubtitle1: string;
    heroSubtitle2: string;
    aboutTitle: string;
    aboutTitleHighlight: string;
    aboutP1: string;
    aboutP2: string;
    teamTitle: string;
    teamTitleHighlight: string;
    teamDesc: string;
    imagePlaceholder: string;
    teamMembers: Array<{
      name: string;
      role: string;
    }>;
    valuesTitle: string;
    valuesTitleHighlight: string;
    values: Array<{
      title: string;
      desc: string;
    }>;
    timelineBadge: string;
    timelineTitle: string;
    timelineDesc: string;
    timeline: Array<{
      year: string;
      event: string;
    }>;
  };

  // Career Page
  careerPage: {
    heroTitle: string;
    heroTitleHighlight: string;
    heroSubtitle: string;
    ctaTitle1: string;
    ctaTitle2: string;
    ctaTitleHighlight: string;
    ctaDesc: string;
    viewVacanciesBtn: string;
    sendCvBtn: string;
    whyTitle: string;
    whyHighlight: string;
    whyDesc: string;
    benefits: Array<{
      title: string;
      desc: string;
    }>;
    vacanciesTitle: string;
    vacanciesHighlight: string;
    vacanciesDesc: string;
    applyBtn: string;
    infoToFollow: string;
    vacancies: Array<{
      id: string;
      title: string;
    }>;
    appBadge: string;
    appTitle: string;
    appHighlight: string;
    appDesc: string;
    cvEmailLabel: string;
    vacancyQuestionsLabel: string;
    officeAddressLabel: string;
    officeAddressValue: string;
    vacSelectedLabel: string;
    vacOtherOption: string;
    nameLabel: string;
    phoneLabel: string;
    emailLabel: string;
    uploadLabel: string;
    uploadClickText: string;
    uploadDragText: string;
    commentLabel: string;
    commentPlaceholder: string;
    submitApplicationBtn: string;
    successTitle: string;
    successDesc: string;
    submitAnotherBtn: string;
  };

  // Contact Page
  contactPage: {
    heroTitle: string;
    heroHighlight: string;
    heroSubtitle: string;
    companyName: string;
    regNumber: string;
    officeAddressTitle: string;
    officeAddressValue: string;
    openGoogleMaps: string;
    phoneTitle: string;
    phoneNote: string;
    emailTitle: string;
    emailNote: string;
    hoursTitle: string;
    hoursWeekdays: string;
    hoursWeekend: string;
    accessNote: string;
    mapBadge: string;
    openFullMap: string;
    formTitle: string;
    formSubtitle: string;
    successTitle: string;
    successDesc: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    categoryLabel: string;
    categoryDefaultOption: string;
    machineLabel: string;
    machineDefaultOption: string;
    machineSelectCategoryFirst: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
  };

  // Footer
  footer: {
    tagline: string;
    aboutText: string;
    machineryColTitle: string;
    machineryTitle: string;
    navColTitle: string;
    navigationTitle: string;
    contactColTitle: string;
    contactInfoTitle: string;
    regNr: string;
    companyRegistration: string;
    address: string;
    workingHours: string;
    copyright: string;
    allRightsReserved: string;
    privacyPolicy: string;
    cookiePolicy: string;
    developerLabel: string;
    metalworking: string;
    laserCutting: string;
    cncEquipment: string;
    automation: string;
    home: string;
    about: string;
    machinery: string;
    career: string;
    contact: string;
  };

  // Cookies & Privacy
  cookies: {
    bannerText: string;
    privacyPolicyLink: string;
    rejectAll: string;
    customize: string;
    acceptAll: string;
    saveChoice: string;
    modalTitle: string;
    modalSubtitle: string;
    close: string;
    sec1Title: string;
    sec1Text: string;
    sec2Title: string;
    sec2Text: string;
    sec2PurposesTitle: string;
    sec2Purpose1Title: string;
    sec2Purpose1Text: string;
    sec2Purpose2Title: string;
    sec2Purpose2Text: string;
    sec2Purpose3Title: string;
    sec2Purpose3Text: string;
    sec3Title: string;
    necessaryTitle: string;
    necessaryAlwaysActive: string;
    necessaryText: string;
    analyticsTitle: string;
    analyticsText: string;
    functionalTitle: string;
    functionalText: string;
    marketingTitle: string;
    marketingText: string;
    sec4Title: string;
    sec4Text: string;
    sec4NoteLabel: string;
    sec4NoteText: string;
    sec4QuestionsText: string;
    // Privacy policy modal
    privacyModalTitle: string;
    privacyUpdatedDate: string;
    privacyConsentNotice: string;
    privacyIntroTitle: string;
    privacyIntroText: string;
    privacyContactTitle: string;
    privacyPhoneLabel: string;
    privacyEmailLabel: string;
    privacySec1Title: string;
    privacySec1Text: string;
    privacySec2Title: string;
    privacySec2Text: string;
    privacySec2Items: string[];
    privacySec3Title: string;
    privacySec3Text: string;
    privacySec3Items: string[];
    privacySec4Title: string;
    privacySec4Text: string;
    privacySec4Items: string[];
    privacySec5Title: string;
    privacySec5Text: string;
    privacySec5Items: string[];
    privacySec5ContactNote: string;
    privacySec6Title: string;
    privacySec6Text1: string;
    privacySec6Text2: string;
    privacySec7Title: string;
    privacySec7Text: string;
    privacySec8Title: string;
    privacySec8Text: string;
    privacySec9Title: string;
    privacySec9Text: string;
  };
}
