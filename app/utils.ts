// Mappa nomi → URL del tuo sito
export function createPageUrl(name: string): string {
  const map: Record<string, string> = {
    Home: "/",
    Teaching: "/teaching",
    VoDCaseStudy: "/vodcasestudy",
    CaseStudyTemplate: "/case-study-template",
    ProductWork: "/product-work",
    DowJones: "/dowjones",
    XpuntoCero: "/xpuntocero",
    SGPVEvolution: "/sgpvevolution",
    EcommerceManagement: "/ecommerce-management",
    BackOffice: "/back-office",
    TuPlanRedondo: "/tu-plan-redondo",
  };
  return map[name] ?? "/";
}
