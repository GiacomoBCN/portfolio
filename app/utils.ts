// Mappa nomi → URL del tuo sito
export function createPageUrl(name: string): string {
  const map: Record<string, string> = {
    Home: "/",
    Teaching: "/teaching",
    VODplatform: "/vodplatform",
    ProductWork: "/product-work",
    DowJones: "/dowjones",
    XpuntoCero: "/xpuntocero",
    SGPVEvolution: "/sgpvevolution",
    BackOffice: "/back-office",
    TuPlanRedondo: "/tu-plan-redondo",
    EcommerceManagement: "/ecommerce-management",
  };
  return map[name] ?? "/";
}
