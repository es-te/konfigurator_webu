export const PRICING = {
    BASE_PRICE: 15000,
    MODULES: {
        SERVICES: {
            ONE_PAGE: 0,
            DETAIL_PER_ITEM: 1500,
        },
        REFERENCES: {
            LOGOS: 1000,
            CASES_PER_ITEM: 2500,
            REVIEWS: 1000,
        },
        BLOG: {
            NONE: 0,
            CMS: 5000,
            CONTENT_PER_ARTICLE: 1000, // + CMS price
        },
        CAREER: {
            NONE: 0,
            LIST: 1000,
            DETAIL: 4000,
        },
        PAGES: {
            ABOUT: 1000,
            CONTACT: 0, // Included in base
            NEWS_TICKER: 1500,
            NEWS_ARTICLES: 5000, // Same as Blog CMS
        }
    },
    LANGUAGES: {
        MULTIPLIER_PER_LANG: 0.25, // +25% per extra language
        TRANSLATION_FEE: 5000, // Flat fee for coordination if translation needed
    },
    ADDONS: {
        SEO_BASIC: 0,
        SEO_ADVANCED: 6000,
        LOCAL_SEO: 2500,
        COPYWRITING: 5000, // Starting price
        MARKETING: 0, // Lead generation
        DATA_IMPORT: 3000,
    }
};

export const calculatePrice = (config) => {
    let price = PRICING.BASE_PRICE;
    const { structure, details, addons } = config;

    // 1. Modules
    // Services
    if (structure.services.type === 'detail') {
        price += structure.services.count * PRICING.MODULES.SERVICES.DETAIL_PER_ITEM;
    }

    // References
    if (structure.references.types.includes('logos')) price += PRICING.MODULES.REFERENCES.LOGOS;
    if (structure.references.types.includes('reviews')) price += PRICING.MODULES.REFERENCES.REVIEWS;
    if (structure.references.types.includes('case-studies')) {
        price += structure.references.count * PRICING.MODULES.REFERENCES.CASES_PER_ITEM;
    }

    // Blog
    if (structure.blog.type === 'cms') {
        price += PRICING.MODULES.BLOG.CMS;
    } else if (structure.blog.type === 'content') {
        price += PRICING.MODULES.BLOG.CMS;
        price += structure.blog.articleCount * PRICING.MODULES.BLOG.CONTENT_PER_ARTICLE;
    }

    // Career
    if (structure.career.type === 'list') price += PRICING.MODULES.CAREER.LIST;
    if (structure.career.type === 'detail') price += PRICING.MODULES.CAREER.DETAIL;

    // Standard Pages
    if (structure.pages.about) price += PRICING.MODULES.PAGES.ABOUT;
    if (structure.pages.news === 'ticker') price += PRICING.MODULES.PAGES.NEWS_TICKER;
    if (structure.pages.news === 'articles') price += PRICING.MODULES.PAGES.NEWS_ARTICLES;

    // 2. Language Multiplier
    if (details.languages.count > 0) {
        const multiplier = 1 + (details.languages.count * PRICING.LANGUAGES.MULTIPLIER_PER_LANG);
        price = Math.round(price * multiplier);

        if (details.languages.translation) {
            price += PRICING.LANGUAGES.TRANSLATION_FEE;
        }
    }

    // 3. Add-ons (Upsells) - usually not multiplied by language? Or maybe they are?
    // Let's assume upsells are flat fees added after multiplication, except maybe Copywriting?
    // For simplicity, adding them after.

    if (addons.seo === 'advanced') price += PRICING.ADDONS.SEO_ADVANCED;
    if (addons.localSeo) price += PRICING.ADDONS.LOCAL_SEO;
    if (addons.copywriting) price += PRICING.ADDONS.COPYWRITING;
    if (addons.dataImport) price += PRICING.ADDONS.DATA_IMPORT;

    return price;
};

export const formatPrice = (price) => {
    return new Intl.NumberFormat('cs-CZ', {
        style: 'currency',
        currency: 'CZK',
        maximumFractionDigits: 0
    }).format(price);
};
