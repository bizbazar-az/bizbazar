window.BIZBAZAR_AI_ENDPOINT = "https://bizbazar-ai.orkhan-r-ali.workers.dev";
// BizBazar — shared utilities
// i18n, formatting, data loading, header setup
// Approximate exchange rate AZN -> USD
const AZN_TO_USD = 0.59;

const STRINGS = {
  az: {
    brand: "BizBazar",
    nav_home: "Ana səhifə",
    nav_browse: "Biznesə bax",
    nav_services: "Xidmətlər",
    nav_sell: "Biznes sat",
    nav_about: "Haqqımızda",
    cta_signin: "Daxil ol",
    cta_list: "Biznesini yerləşdir",
    hero_title: "Biznes alış-satışı — indi daha sadə",
    hero_sub: "Azərbaycanın ilk peşəkar biznes bazarı. Yoxlanmış elanlar, qiymətləndirmə, hüquqi və vergi xidmətləri — hamısı bir yerdə.",
    hero_find: "Biznes tap",
    search_cat: "Bütün kateqoriyalar",
    search_city: "Bütün şəhərlər",
    search_price: "Qiymət (maks AZN)",
    stat_listings: "Aktiv elan",
    stat_cities: "Şəhər",
    stat_pros: "Peşəkar",
    stat_closed: "Bağlanmış sövdələşmə",
    cat_title: "Kateqoriyalar",
    cat_sub: "İstədiyin biznes növünü seç",
    featured_title: "Seçilmiş bizneslər",
    featured_sub: "Yoxlanmış, aktiv satışda olan bizneslər",
    view_all: "Hamısına bax",
    how_title: "Necə işləyir",
    how_sub: "Alıcı və satıcı üçün aydın, nəzarətli proses",
    step1_t: "Elanı incələ",
    step1_d: "Yoxlanmış biznes elanlarına bax, filtrlərlə tap.",
    step2_t: "NDA imzala",
    step2_d: "İstədiyin biznes üçün məxfilik müqaviləsini imzala və tam məlumatı al.",
    step3_t: "Peşəkar dəstək",
    step3_d: "Qiymətləndirmə, hüquqi və vergi xidmətlərini bir yerdən götür.",
    step4_t: "Sövdələşməni bağla",
    step4_d: "Escrow və rəsmi müqavilə ilə təhlükəsiz keçid.",
    services_title: "Peşəkar xidmətlər",
    services_sub: "Hər sövdələşmə üçün lazım olan bütün xidmətlər — bir yerdə",
    cta_band_title: "Biznesini satmaq istəyirsən?",
    cta_band_sub: "Elanını yerləşdir, alıcılarla bağlan, peşəkar dəstək al.",
    cta_band_btn: "Satmağa başla",
    footer_about: "Azərbaycanda biznes alış-satışı üçün peşəkar platforma. Satıcı və alıcını birləşdirir, onlara lazım olan bütün peşəkar xidmətləri təmin edir.",
    footer_platform: "Platforma",
    footer_legal: "Hüquqi",
    footer_support: "Dəstək",
    footer_terms: "İstifadə şərtləri",
    footer_privacy: "Məxfilik siyasəti",
    footer_nda: "NDA şablonu",
    footer_contact: "Əlaqə",
    footer_faq: "FAQ",
    footer_help: "Kömək",
    filters: "Filtrlər",
    f_cat: "Kateqoriya",
    f_city: "Şəhər",
    f_price: "Qiymət (AZN)",
    f_min: "Min",
    f_max: "Maks",
    f_revenue: "Aylıq gəlir (AZN)",
    f_years: "Fəaliyyət müddəti",
    f_any_years: "İstənilən",
    f_2plus: "2+ il",
    f_5plus: "5+ il",
    f_apply: "Tətbiq et",
    f_reset: "Sıfırla",
    sort_by: "Sırala",
    sort_newest: "Ən yeni",
    sort_price_low: "Qiymət (aşağı)",
    sort_price_high: "Qiymət (yuxarı)",
    sort_revenue: "Gəlir (yuxarı)",
    results_count: "nəticə",
    no_results: "Heç bir nəticə tapılmadı. Filtrləri dəyişin.",
    listing_meta_area: "m²",
    listing_meta_staff: "işçi",
    listing_meta_years: "il",
    price_per_m2: "AZN/m²",
    detail_overview: "Biznes haqqında",
    detail_specs: "Əsas göstəricilər",
    detail_revenue: "Aylıq gəlir",
    detail_profit: "Aylıq mənfəət",
    detail_rent: "Aylıq kirayə",
    detail_staff: "İşçi sayı",
    detail_area: "Sahə",
    detail_years: "Fəaliyyət müddəti",
    detail_reason: "Satış səbəbi",
    detail_equipment: "Avadanlıq daxildir",
    detail_license: "Lisenziya daxildir",
    detail_yes: "Bəli",
    detail_no: "Xeyr",
    detail_contact: "Satıcı ilə əlaqə",
    detail_nda: "NDA imzala və məlumat al",
    detail_save: "Saxla",
    detail_owner: "Birbaşa sahib",
    detail_broker: "Broker",
    detail_agency: "Agentlik",
    detail_posted: "Yerləşdirilib",
    detail_services_title: "Bu sövdələşmə üçün tövsiyə edirik",
    detail_services_sub: "Valuasiya, due diligence, hüquqi və vergi dəstəyi — bir yerdən.",
    detail_services_btn: "Xidmətlərə bax",
    sell_title: "Biznesini sat",
    sell_sub: "Yoxlanmış alıcı bazası. Peşəkar dəstək. Məxfilik qorunur.",
    sell_step1_t: "Elan yarat",
    sell_step1_d: "Biznesin haqqında məlumatları doldur. 10 dəqiqə çəkir.",
    sell_step2_t: "Yoxlama",
    sell_step2_d: "Komandamız sənədləri yoxlayır, elanı təsdiqləyir.",
    sell_step3_t: "Alıcılarla bağlan",
    sell_step3_d: "NDA imzalayan ciddi alıcıları qəbul et.",
    sell_step4_t: "Sövdələşməni bağla",
    sell_step4_d: "Peşəkar dəstəklə təhlükəsiz keçid.",
    form_title: "Elan məlumatları",
    form_name: "Biznesin adı",
    form_cat: "Kateqoriya",
    form_city: "Şəhər",
    form_district: "Rayon",
    form_price: "Qiymət (AZN)",
    form_area: "Sahə (m²)",
    form_revenue: "Aylıq gəlir (AZN)",
    form_staff: "İşçi sayı",
    form_years: "Fəaliyyət illəri",
    form_desc: "Təsvir",
    form_email: "E-poçt",
    form_phone: "Telefon",
    form_submit: "Elanı göndər",
    form_note: "Elanınız 24 saat ərzində yoxlanılır və təsdiqdən sonra yayımlanır. Məxfilik qorunur — əlaqə məlumatlarınız yalnız NDA imzalayan alıcılara göstərilir.",
    form_sent: "Təşəkkürlər! Elanınız qəbul edildi. Komandamız tezliklə sizinlə əlaqə saxlayacaq.",
    import_title: "Tap.az elanını köçür",
    import_sub: "Artıq Tap.az-da elanınız var? Aşağıdakı ★ düyməsini bookmark çubuğunuza sürükləyin. Sonra tap.az elanınızda ona basın — başlıq, qiymət, şəhər və təsvir avtomatik BizBazar formuna köçəcək.",
    import_bm_label: "Tap.az-dan köçür",
    import_bm_copy: "Linki kopyala",
    import_bm_how: "Necə işləyir?",
    import_bm_steps_title: "3 sadə addım",
    import_bm_step1: "Yuxarıdakı ★ düyməsini bookmark (əlfəcin) çubuğunuza sürükləyin",
    import_bm_step2: "Tap.az-da elanınızın səhifəsinə daxil olun",
    import_bm_step3: "Yeni yaratdığınız əlfəcinə basın — məlumatlar avtomatik BizBazar formuna köçəcək",
    import_bm_drag_hint: "Düyməni bookmark çubuğuna sürükləyin (basıb saxlayın və hərəkət etdirin). Sonra tap.az elanında basın.",
    import_bm_copied: "Link kopyalandı! Onu yeni bookmark kimi əlavə edin.",
    import_bm_copy_manual: "Bu mətni kopyalayın və yeni bookmark URL-i kimi əlavə edin:",
    import_source_label: "Mənbə",
    import_success: "Məlumatlar dolduruldu. Lazımi dəyişiklikləri edib formu göndərin.",
    services_page_title: "Peşəkar xidmətlər",
    services_page_sub: "Biznes alış-satışının hər addımında sənə lazım olan ekspertlər.",
    services_providers: "Yoxlanmış provayderlər",
    service_book: "Müraciət et",
    service_from: "başlayan qiymət",
    service_duration: "müddət",
    badge_featured: "SEÇİLMİŞ",
    lang_label: "Dil",
    verified: "Yoxlanmış",
    nav_favorites: "Saxlanmış",
    nav_map: "Xəritə",
    nav_valuation: "Qiymətləndirmə",
    nav_franchises: "Franşizalar",
    franchises_title: "Satışda olan franşizalar",
    franchises_sub: "Hazır biznes modelləri — düşük risk, sürətli başlanğıc",
    franchise_investment: "Başlanğıc investisiya",
    franchise_royalty: "Royalti",
    franchise_payback: "Geri ödəmə",
    franchise_branches: "Filial",
    franchise_area: "Tələb olunan sahə",
    franchise_contract: "Müqavilə müddəti",
    franchise_training: "Təlim",
    franchise_support: "Dəstək",
    franchise_exclusive: "Eksklüziv ərazi",
    franchise_year: "Qurulma ili",
    franchise_apply: "Müraciət et",
    franchise_planned: "Planlaşdırılır",
    afford_title: "Büdcəmə uyğun nə var?",
    save_listing: "Saxla",
    whatsapp_contact: "WhatsApp",
    telegram_contact: "Telegram",
    profit_margin: "Mənfəət marjası",
    payback_period: "Geri ödəmə müddəti",
    recent_title: "Son baxdıqlarınız",
    testimonials_title: "Müştəri rəyləri",
    deals_closed_label: "Bağlanmış sövdələşmə",
    total_volume_label: "Ümumi həcm",
    avg_close_days_label: "Orta bağlanma müddəti",
    buyer_satisfaction_label: "Alıcı məmnuniyyəti",
    avg_close_days_unit: "gün",
    buyer_satisfaction_unit: "%",
    calc_title: "Biznesinizin dəyərini öyrənin",
    valuation_title: "Pulsuz qiymətləndirmə",
    sort_best_value: "Ən yaxşı dəyər",
    compare_bar_btn: "Müqayisə et",
    payback_label: "Geri qaytarma müddəti",
    payback_unit: "ay",
    margin_label: "Mənfəət marjası",
    similar_listings: "Oxşar bizneslər",
    broker_verified: "Yoxlanmış broker",
    broker_profile_link: "Broker profili",
    broker_deals: "sövdələşmə",
    pricing_title: "Tariflər",
    plan_free_price: "Pulsuz",
    plan_cta: "Seçin",
    benchmarks_link: "Bençmarklar",
    map_link: "Xəritə",
    nav_investors: "İnvestorlar",
    inv_hero_eyebrow: "Yoxlanmış investor bazası",
    inv_hero_title_1: "Bizneslərə investisiya etmək istəyən",
    inv_hero_title_2: "investorlarla tanış olun",
    inv_hero_sub: "Azərbaycanda fəaliyyət göstərən bizneslərə kapital qoymaq və ya hazır biznes almaq istəyən yoxlanmış investorlar. Birbaşa əlaqə, məxfilik təminatı və peşəkar dəstək ilə.",
    inv_stat_investors: "Aktiv investor",
    inv_stat_volume: "AZN ümumi büdcə",
    inv_stat_deals: "Bağlanmış sövdələşmə",
    inv_stat_verified: "Yoxlanılmış profil",
    inv_trust_verified: "Şəxsiyyəti yoxlanmış investorlar",
    inv_trust_nda: "Məxfilik müqaviləsi (NDA) ilə qorunur",
    inv_trust_response: "24 saat ərzində geri dönüş",
    inv_trust_direct: "Vasitəçisiz birbaşa əlaqə",
    inv_filter_all_types: "Bütün növlər",
    inv_filter_all_sectors: "Bütün sektorlar",
    inv_filter_all_budgets: "Bütün büdcələr",
    inv_filter_all_intent: "Bütün məqsədlər",
    inv_type_individual: "Fərdi investor",
    inv_type_corporate: "Korporativ",
    inv_intent_buy: "Almaq istəyir",
    inv_intent_invest: "Ortaqlıq axtarır",
    inv_sort_featured: "Seçilmiş profillər",
    inv_sort_budget_high: "Büdcə: yüksəkdən aşağı",
    inv_sort_budget_low: "Büdcə: aşağıdan yüksəyə",
    inv_sort_deals: "Ən çox təcrübə",
    inv_sort_rating: "Reytinqə görə",
    inv_count_suffix: "investor tapıldı",
    inv_budget_label: "İnvestisiya büdcəsi",
    inv_sectors_label: "Maraq dairəsi",
    inv_rating_label: "Reytinq",
    inv_deals_label: "Bağlanmış sövdələşmə",
    inv_action_connect: "Əlaqə saxla",
    inv_empty_title: "Heç bir nəticə tapılmadı",
    inv_empty_text: "Filtrləri dəyişdirib yenidən cəhd edin.",
    inv_cta_title: "İnvestor kimi qeydiyyatdan keçin",
    inv_cta_sub: "BizBazar yoxlanmış biznes təkliflərini birbaşa sizə göndərir. Vaxt itirmədən, məxfilik içində — keyfiyyətli sövdələşmələr tapın.",
    inv_cta_benefit_1: "Hər həftə yeni yoxlanmış biznes təklifləri",
    inv_cta_benefit_2: "Maliyyə, hüquqi və qiymətləndirmə dəstəyi",
    inv_cta_benefit_3: "Eksklüziv müştəri menecerinin dəstəyi",
    inv_cta_btn_primary: "Qeydiyyatdan keç",
    inv_cta_btn_whatsapp: "WhatsApp ilə əlaqə",
    favorites_empty_hint: "Hələ heç bir elan saxlanmayıb. Elanların üzərindəki ♥ düyməsini basın.",
    franchise_filter_all_inv: "Bütün investisiyalar",
    franchise_sort_featured: "Seçilmişlər",
    franchise_sort_inv_low: "Investisiya: az → çox",
    franchise_sort_inv_high: "Investisiya: çox → az",
    franchise_sort_payback: "Sürətli geri ödəmə",
    franchise_sort_branches: "Ən çox filial",
    franchise_cta_title: "Öz franşizanı yerləşdir",
    franchise_cta_sub: "Azərbaycanda biznes modelinizi genişləndirin. BizBazar yoxlanmış franşiza müraciətlərini sizə göndərir.",
    franchise_cta_btn: "Əlaqə saxla"
  },
  en: {
    brand: "BizBazar",
    nav_home: "Home",
    nav_browse: "Browse",
    nav_services: "Services",
    nav_sell: "Sell a business",
    nav_about: "About",
    cta_signin: "Sign in",
    cta_list: "List your business",
    hero_title: "Buy or sell a business — made simple",
    hero_sub: "Azerbaijan's first professional business marketplace. Verified listings, valuation, legal and tax services — all in one place.",
    hero_find: "Find a business",
    search_cat: "All categories",
    search_city: "All cities",
    search_price: "Price (max AZN)",
    stat_listings: "Active listings",
    stat_cities: "Cities",
    stat_pros: "Professionals",
    stat_closed: "Deals closed",
    cat_title: "Categories",
    cat_sub: "Pick the business type you're interested in",
    featured_title: "Featured businesses",
    featured_sub: "Verified, actively-for-sale businesses",
    view_all: "View all",
    how_title: "How it works",
    how_sub: "A clear, managed process for buyers and sellers",
    step1_t: "Browse",
    step1_d: "Explore verified listings, filter by your criteria.",
    step2_t: "Sign an NDA",
    step2_d: "Sign the confidentiality agreement and unlock full information.",
    step3_t: "Get professional help",
    step3_d: "Valuation, legal and tax services — all from one place.",
    step4_t: "Close the deal",
    step4_d: "Escrow and formal contract for a safe handover.",
    services_title: "Professional services",
    services_sub: "Every service you need for a deal — in one place",
    cta_band_title: "Selling your business?",
    cta_band_sub: "List it, connect with buyers, get professional support.",
    cta_band_btn: "Start selling",
    footer_about: "A professional marketplace for buying and selling businesses in Azerbaijan. Connecting sellers and buyers and providing the professional services they need.",
    footer_platform: "Platform",
    footer_legal: "Legal",
    footer_support: "Support",
    footer_terms: "Terms of service",
    footer_privacy: "Privacy policy",
    footer_nda: "NDA template",
    footer_contact: "Contact",
    footer_faq: "FAQ",
    footer_help: "Help",
    filters: "Filters",
    f_cat: "Category",
    f_city: "City",
    f_price: "Price (AZN)",
    f_min: "Min",
    f_max: "Max",
    f_revenue: "Monthly revenue (AZN)",
    f_years: "Years in operation",
    f_any_years: "Any",
    f_2plus: "2+ years",
    f_5plus: "5+ years",
    f_apply: "Apply",
    f_reset: "Reset",
    sort_by: "Sort",
    sort_newest: "Newest",
    sort_price_low: "Price (low)",
    sort_price_high: "Price (high)",
    sort_revenue: "Revenue (high)",
    results_count: "results",
    no_results: "No results. Try changing the filters.",
    listing_meta_area: "m²",
    listing_meta_staff: "staff",
    listing_meta_years: "yrs",
    price_per_m2: "AZN/m²",
    detail_overview: "About the business",
    detail_specs: "Key metrics",
    detail_revenue: "Monthly revenue",
    detail_profit: "Monthly profit",
    detail_rent: "Monthly rent",
    detail_staff: "Staff",
    detail_area: "Floor area",
    detail_years: "Years in operation",
    detail_reason: "Reason for sale",
    detail_equipment: "Equipment included",
    detail_license: "License included",
    detail_yes: "Yes",
    detail_no: "No",
    detail_contact: "Contact seller",
    detail_nda: "Sign NDA & get details",
    detail_save: "Save",
    detail_owner: "Direct from owner",
    detail_broker: "Broker",
    detail_agency: "Agency",
    detail_posted: "Posted",
    detail_services_title: "Recommended for this deal",
    detail_services_sub: "Valuation, due diligence, legal and tax support — from one place.",
    detail_services_btn: "Browse services",
    sell_title: "Sell your business",
    sell_sub: "Verified buyer base. Professional support. Confidentiality protected.",
    sell_step1_t: "Create listing",
    sell_step1_d: "Fill in your business info. Takes 10 minutes.",
    sell_step2_t: "Verification",
    sell_step2_d: "Our team verifies your documents and approves the listing.",
    sell_step3_t: "Connect with buyers",
    sell_step3_d: "Receive serious buyers who have signed NDAs.",
    sell_step4_t: "Close the deal",
    sell_step4_d: "Safe transfer with professional support.",
    form_title: "Listing details",
    form_name: "Business name",
    form_cat: "Category",
    form_city: "City",
    form_district: "District",
    form_price: "Price (AZN)",
    form_area: "Area (m²)",
    form_revenue: "Monthly revenue (AZN)",
    form_staff: "Staff count",
    form_years: "Years in operation",
    form_desc: "Description",
    form_email: "Email",
    form_phone: "Phone",
    form_submit: "Submit listing",
    form_note: "Your listing is reviewed within 24 hours and published after approval. Confidentiality protected — your contact info is only shown to buyers who sign an NDA.",
    form_sent: "Thank you! Your listing was received. Our team will contact you shortly.",
    import_title: "Import your Tap.az listing",
    import_sub: "Already have a listing on Tap.az? Drag the ★ button below to your bookmarks bar. Then click it on your tap.az listing — title, price, city and description copy over to BizBazar automatically.",
    import_bm_label: "Import from Tap.az",
    import_bm_copy: "Copy link",
    import_bm_how: "How does it work?",
    import_bm_steps_title: "3 simple steps",
    import_bm_step1: "Drag the ★ button above to your bookmarks bar",
    import_bm_step2: "Open your tap.az listing",
    import_bm_step3: "Click the new bookmark — fields fill in here automatically",
    import_bm_drag_hint: "Drag the button to your bookmarks bar (click and hold, then drag). Then click it on any tap.az listing.",
    import_bm_copied: "Link copied! Add it as a new bookmark.",
    import_bm_copy_manual: "Copy this and add as a new bookmark URL:",
    import_source_label: "Source",
    import_success: "Fields filled in. Adjust as needed and submit the form.",
    services_page_title: "Professional services",
    services_page_sub: "Experts you need at every step of buying or selling a business.",
    services_providers: "Verified providers",
    service_book: "Get started",
    service_from: "from",
    service_duration: "duration",
    badge_featured: "FEATURED",
    lang_label: "Language",
    verified: "Verified",
    nav_favorites: "Saved",
    nav_map: "Map",
    nav_valuation: "Valuation",
    nav_franchises: "Franchises",
    franchises_title: "Franchises for sale",
    franchises_sub: "Ready-to-go business models — lower risk, faster launch",
    franchise_investment: "Initial investment",
    franchise_royalty: "Royalty",
    franchise_payback: "Payback",
    franchise_branches: "Branches",
    franchise_area: "Area required",
    franchise_contract: "Contract term",
    franchise_training: "Training",
    franchise_support: "Support",
    franchise_exclusive: "Exclusive territory",
    franchise_year: "Year founded",
    franchise_apply: "Apply",
    franchise_planned: "Planned",
    afford_title: "What can I afford?",
    save_listing: "Save",
    whatsapp_contact: "WhatsApp",
    telegram_contact: "Telegram",
    profit_margin: "Profit margin",
    payback_period: "Payback period",
    recent_title: "Recently viewed",
    testimonials_title: "Customer reviews",
    deals_closed_label: "Deals closed",
    total_volume_label: "Total volume",
    avg_close_days_label: "Avg. closing time",
    buyer_satisfaction_label: "Buyer satisfaction",
    avg_close_days_unit: "days",
    buyer_satisfaction_unit: "%",
    calc_title: "Find out what your business is worth",
    valuation_title: "Free valuation",
    sort_best_value: "Best value",
    compare_bar_btn: "Compare",
    payback_label: "Payback period",
    payback_unit: "months",
    margin_label: "Profit margin",
    similar_listings: "Similar businesses",
    broker_verified: "Verified broker",
    broker_profile_link: "Broker profile",
    broker_deals: "deals",
    pricing_title: "Pricing",
    plan_free_price: "Free",
    plan_cta: "Choose",
    benchmarks_link: "Benchmarks",
    map_link: "Map",
    verified: "Verified",
    nav_favorites: "Saved",
    nav_map: "Map",
    nav_valuation: "Valuation",
    afford_title: "What can I afford?",
    save_listing: "Save",
    whatsapp_contact: "WhatsApp",
    telegram_contact: "Telegram",
    profit_margin: "Profit margin",
    payback_period: "Payback period",
    nav_investors: "Investors",
    inv_hero_eyebrow: "Verified investor network",
    inv_hero_title_1: "Connect with investors",
    inv_hero_title_2: "ready to back your business",
    inv_hero_sub: "Verified investors looking to acquire ready businesses or invest capital in operating companies in Azerbaijan. Direct contact, NDA-protected, with full professional support.",
    inv_stat_investors: "Active investors",
    inv_stat_volume: "AZN total budget",
    inv_stat_deals: "Closed deals",
    inv_stat_verified: "Verified profiles",
    inv_trust_verified: "Identity-verified investors",
    inv_trust_nda: "NDA-protected confidentiality",
    inv_trust_response: "24-hour response time",
    inv_trust_direct: "Direct, broker-free contact",
    inv_filter_all_types: "All types",
    inv_filter_all_sectors: "All sectors",
    inv_filter_all_budgets: "All budgets",
    inv_filter_all_intent: "All intents",
    inv_type_individual: "Individual",
    inv_type_corporate: "Corporate",
    inv_intent_buy: "Looking to buy",
    inv_intent_invest: "Seeking partnership",
    inv_sort_featured: "Featured profiles",
    inv_sort_budget_high: "Budget: high to low",
    inv_sort_budget_low: "Budget: low to high",
    inv_sort_deals: "Most experienced",
    inv_sort_rating: "By rating",
    inv_count_suffix: "investors found",
    inv_budget_label: "Investment budget",
    inv_sectors_label: "Areas of interest",
    inv_rating_label: "Rating",
    inv_deals_label: "Deals closed",
    inv_action_connect: "Connect",
    inv_empty_title: "No results found",
    inv_empty_text: "Try adjusting your filters to see more profiles.",
    inv_cta_title: "Register as an investor",
    inv_cta_sub: "BizBazar delivers verified business opportunities directly to you. Find quality deals — confidentially, without wasting time.",
    inv_cta_benefit_1: "New verified business listings every week",
    inv_cta_benefit_2: "Financial, legal and valuation support",
    inv_cta_benefit_3: "Dedicated account manager",
    inv_cta_btn_primary: "Register now",
    inv_cta_btn_whatsapp: "Contact via WhatsApp",
    favorites_empty_hint: "Nothing saved yet. Tap the ♥ icon on any listing to save it here.",
    franchise_filter_all_inv: "All investment ranges",
    franchise_sort_featured: "Featured",
    franchise_sort_inv_low: "Investment: low → high",
    franchise_sort_inv_high: "Investment: high → low",
    franchise_sort_payback: "Fastest payback",
    franchise_sort_branches: "Most branches",
    franchise_cta_title: "List your own franchise",
    franchise_cta_sub: "Expand your business model in Azerbaijan. BizBazar sends you verified franchise enquiries.",
    franchise_cta_btn: "Get in touch"
  },
  ru: {
    brand: "BizBazar",
    nav_home: "Главная",
    nav_browse: "Каталог",
    nav_services: "Услуги",
    nav_sell: "Продать бизнес",
    nav_about: "О нас",
    cta_signin: "Войти",
    cta_list: "Разместить объявление",
    hero_title: "Купля-продажа бизнеса — просто",
    hero_sub: "Первая профессиональная площадка для бизнеса в Азербайджане. Проверенные объявления, оценка, юридические и налоговые услуги — всё в одном месте.",
    hero_find: "Найти бизнес",
    search_cat: "Все категории",
    search_city: "Все города",
    search_price: "Цена (макс AZN)",
    stat_listings: "Активных объявлений",
    stat_cities: "Городов",
    stat_pros: "Специалистов",
    stat_closed: "Сделок закрыто",
    cat_title: "Категории",
    cat_sub: "Выберите интересующий тип бизнеса",
    featured_title: "Избранные бизнесы",
    featured_sub: "Проверенные, активно продающиеся бизнесы",
    view_all: "Смотреть все",
    how_title: "Как это работает",
    how_sub: "Чёткий управляемый процесс для покупателей и продавцов",
    step1_t: "Просматривайте",
    step1_d: "Изучайте проверенные объявления, фильтруйте по критериям.",
    step2_t: "Подпишите NDA",
    step2_d: "Подпишите соглашение о конфиденциальности и получите полную информацию.",
    step3_t: "Получите профессиональную помощь",
    step3_d: "Оценка, юридические и налоговые услуги — в одном месте.",
    step4_t: "Закройте сделку",
    step4_d: "Эскроу и официальный договор для безопасной передачи.",
    services_title: "Профессиональные услуги",
    services_sub: "Все услуги для сделки — в одном месте",
    cta_band_title: "Продаёте бизнес?",
    cta_band_sub: "Разместите объявление, найдите покупателей, получите поддержку.",
    cta_band_btn: "Начать продажу",
    footer_about: "Профессиональная площадка для покупки и продажи бизнеса в Азербайджане.",
    footer_platform: "Платформа",
    footer_legal: "Правовая информация",
    footer_support: "Поддержка",
    footer_terms: "Условия использования",
    footer_privacy: "Политика конфиденциальности",
    footer_nda: "Шаблон NDA",
    footer_contact: "Контакты",
    footer_faq: "FAQ",
    footer_help: "Помощь",
    filters: "Фильтры",
    f_cat: "Категория",
    f_city: "Город",
    f_price: "Цена (AZN)",
    f_min: "Мин",
    f_max: "Макс",
    f_revenue: "Ежемесячная выручка (AZN)",
    f_years: "Лет работы",
    f_any_years: "Любой",
    f_2plus: "2+ лет",
    f_5plus: "5+ лет",
    f_apply: "Применить",
    f_reset: "Сбросить",
    sort_by: "Сортировка",
    sort_newest: "Новые",
    sort_price_low: "Цена (возрастание)",
    sort_price_high: "Цена (убывание)",
    sort_revenue: "Выручка (убывание)",
    sort_best_value: "Лучшая ценность",
    results_count: "результатов",
    no_results: "Ничего не найдено. Измените фильтры.",
    listing_meta_area: "м²",
    listing_meta_staff: "сотрудников",
    listing_meta_years: "лет",
    price_per_m2: "AZN/м²",
    detail_overview: "О бизнесе",
    detail_specs: "Ключевые показатели",
    detail_revenue: "Ежемесячная выручка",
    detail_profit: "Ежемесячная прибыль",
    detail_rent: "Ежемесячная аренда",
    detail_staff: "Сотрудников",
    detail_area: "Площадь",
    detail_years: "Лет работы",
    detail_reason: "Причина продажи",
    detail_equipment: "Оборудование включено",
    detail_license: "Лицензия включена",
    detail_yes: "Да",
    detail_no: "Нет",
    detail_contact: "Связаться с продавцом",
    detail_nda: "Подписать NDA и получить детали",
    detail_save: "Сохранить",
    detail_owner: "Напрямую от владельца",
    detail_broker: "Брокер",
    detail_agency: "Агентство",
    detail_posted: "Опубликовано",
    detail_services_title: "Рекомендуем для этой сделки",
    detail_services_sub: "Оценка, due diligence, юридическая и налоговая поддержка — в одном месте.",
    detail_services_btn: "Смотреть услуги",
    sell_title: "Продайте свой бизнес",
    sell_sub: "Проверенная база покупателей. Профессиональная поддержка. Конфиденциальность гарантирована.",
    sell_step1_t: "Создать объявление",
    sell_step1_d: "Заполните информацию о бизнесе. Займёт 10 минут.",
    sell_step2_t: "Проверка",
    sell_step2_d: "Наша команда проверяет документы и одобряет объявление.",
    sell_step3_t: "Найдите покупателей",
    sell_step3_d: "Получайте серьёзных покупателей, подписавших NDA.",
    sell_step4_t: "Закройте сделку",
    sell_step4_d: "Безопасная передача с профессиональной поддержкой.",
    form_title: "Данные объявления",
    form_name: "Название бизнеса",
    form_cat: "Категория",
    form_city: "Город",
    form_district: "Район",
    form_price: "Цена (AZN)",
    form_area: "Площадь (м²)",
    form_revenue: "Ежемесячная выручка (AZN)",
    form_staff: "Количество сотрудников",
    form_years: "Лет работы",
    form_desc: "Описание",
    form_email: "Email",
    form_phone: "Телефон",
    form_submit: "Отправить объявление",
    form_note: "Объявление проверяется в течение 24 часов и публикуется после одобрения. Конфиденциальность защищена — контактные данные видны только покупателям, подписавшим NDA.",
    form_sent: "Спасибо! Ваше объявление получено. Наша команда свяжется с вами в ближайшее время.",
    import_title: "Импортировать с Tap.az",
    import_sub: "У вас уже есть объявление на Tap.az? Перетащите кнопку ★ ниже в панель закладок. Затем нажмите её на странице вашего объявления — название, цена, город и описание перенесутся в BizBazar автоматически.",
    import_bm_label: "Импорт с Tap.az",
    import_bm_copy: "Скопировать ссылку",
    import_bm_how: "Как это работает?",
    import_bm_steps_title: "3 простых шага",
    import_bm_step1: "Перетащите кнопку ★ выше в панель закладок",
    import_bm_step2: "Откройте ваше объявление на tap.az",
    import_bm_step3: "Нажмите новую закладку — поля заполнятся автоматически",
    import_bm_drag_hint: "Перетащите кнопку в панель закладок (нажмите и удерживайте). Затем нажмите её на странице tap.az.",
    import_bm_copied: "Ссылка скопирована! Добавьте её как новую закладку.",
    import_bm_copy_manual: "Скопируйте это и добавьте как URL новой закладки:",
    import_source_label: "Источник",
    import_success: "Поля заполнены. Внесите изменения и отправьте форму.",
    services_page_title: "Профессиональные услуги",
    services_page_sub: "Эксперты для каждого этапа покупки или продажи бизнеса.",
    services_providers: "Проверенные провайдеры",
    service_book: "Начать",
    service_from: "от",
    service_duration: "срок",
    badge_featured: "FEATURED",
    lang_label: "Язык",
    recent_title: "Недавно просмотренные",
    testimonials_title: "Отзывы клиентов",
    deals_closed_label: "Сделок закрыто",
    total_volume_label: "Общий объём",
    avg_close_days_label: "Среднее время закрытия",
    buyer_satisfaction_label: "Удовлетворённость покупателей",
    avg_close_days_unit: "дней",
    buyer_satisfaction_unit: "%",
    calc_title: "Узнайте стоимость вашего бизнеса",
    valuation_title: "Бесплатная оценка",
    compare_bar_btn: "Сравнить",
    payback_label: "Срок окупаемости",
    payback_unit: "мес",
    margin_label: "Маржа прибыли",
    similar_listings: "Похожие бизнесы",
    broker_verified: "Проверенный брокер",
    broker_profile_link: "Профиль брокера",
    broker_deals: "сделок",
    pricing_title: "Тарифы",
    plan_free_price: "Бесплатно",
    plan_cta: "Выбрать",
    benchmarks_link: "Показатели рынка",
    map_link: "Карта",
    verified: "Проверено",
    nav_favorites: "Избранное",
    nav_map: "Карта",
    nav_valuation: "Оценка",
    nav_franchises: "Франшизы",
    franchises_title: "Франшизы на продажу",
    franchises_sub: "Готовые бизнес-модели — низкий риск, быстрый старт",
    franchise_investment: "Стартовые инвестиции",
    franchise_royalty: "Роялти",
    franchise_payback: "Окупаемость",
    franchise_branches: "Филиалы",
    franchise_area: "Требуемая площадь",
    franchise_contract: "Срок договора",
    franchise_training: "Обучение",
    franchise_support: "Поддержка",
    franchise_exclusive: "Эксклюзивная территория",
    franchise_year: "Год основания",
    franchise_apply: "Подать заявку",
    franchise_planned: "Планируется",
    afford_title: "Что я могу купить?",
    save_listing: "Сохранить",
    whatsapp_contact: "WhatsApp",
    telegram_contact: "Telegram",
    profit_margin: "Маржа прибыли",
    payback_period: "Срок окупаемости",
    nav_investors: "Инвесторы",
    inv_hero_eyebrow: "Проверенная база инвесторов",
    inv_hero_title_1: "Познакомьтесь с инвесторами,",
    inv_hero_title_2: "готовыми вложить в бизнес",
    inv_hero_sub: "Проверенные инвесторы, желающие приобрести готовый бизнес или вложить капитал в действующие компании в Азербайджане. Прямой контакт, защита NDA и профессиональная поддержка.",
    inv_stat_investors: "Активных инвесторов",
    inv_stat_volume: "AZN общий бюджет",
    inv_stat_deals: "Закрытых сделок",
    inv_stat_verified: "Проверенных профилей",
    inv_trust_verified: "Инвесторы с проверенной личностью",
    inv_trust_nda: "Защита соглашением NDA",
    inv_trust_response: "Ответ в течение 24 часов",
    inv_trust_direct: "Прямой контакт без посредников",
    inv_filter_all_types: "Все типы",
    inv_filter_all_sectors: "Все секторы",
    inv_filter_all_budgets: "Все бюджеты",
    inv_filter_all_intent: "Все намерения",
    inv_type_individual: "Частный",
    inv_type_corporate: "Корпоративный",
    inv_intent_buy: "Хочет купить",
    inv_intent_invest: "Ищет партнёрство",
    inv_sort_featured: "Избранные профили",
    inv_sort_budget_high: "Бюджет: убывание",
    inv_sort_budget_low: "Бюджет: возрастание",
    inv_sort_deals: "Больше опыта",
    inv_sort_rating: "По рейтингу",
    inv_count_suffix: "инвесторов найдено",
    inv_budget_label: "Инвестиционный бюджет",
    inv_sectors_label: "Сферы интересов",
    inv_rating_label: "Рейтинг",
    inv_deals_label: "Закрытых сделок",
    inv_action_connect: "Связаться",
    inv_empty_title: "Ничего не найдено",
    inv_empty_text: "Попробуйте изменить фильтры, чтобы увидеть больше профилей.",
    inv_cta_title: "Зарегистрируйтесь как инвестор",
    inv_cta_sub: "BizBazar доставляет проверенные бизнес-предложения напрямую вам. Находите качественные сделки конфиденциально, не тратя время.",
    inv_cta_benefit_1: "Новые проверенные предложения каждую неделю",
    inv_cta_benefit_2: "Финансовая, юридическая и оценочная поддержка",
    inv_cta_benefit_3: "Персональный менеджер аккаунта",
    inv_cta_btn_primary: "Зарегистрироваться",
    inv_cta_btn_whatsapp: "Связаться в WhatsApp",
    favorites_empty_hint: "Пока ничего не сохранено. Нажмите ♥ на объявлении, чтобы добавить его сюда.",
    franchise_filter_all_inv: "Все диапазоны инвестиций",
    franchise_sort_featured: "Рекомендуемые",
    franchise_sort_inv_low: "Инвестиции: по возрастанию",
    franchise_sort_inv_high: "Инвестиции: по убыванию",
    franchise_sort_payback: "Быстрая окупаемость",
    franchise_sort_branches: "Больше всего филиалов",
    franchise_cta_title: "Разместите свою франшизу",
    franchise_cta_sub: "Расширьте свою бизнес-модель в Азербайджане. BizBazar присылает вам проверенные заявки на франшизу.",
    franchise_cta_btn: "Связаться"
  }
};

const _bbIcon = (path) => `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1a2744" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;

const CATEGORY_ICONS = {
  cafe_restaurant: _bbIcon('<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>'),
  beauty_salon: _bbIcon('<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/>'),
  auto_service: _bbIcon('<path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2"/><circle cx="6.5" cy="16.5" r="2.5"/><circle cx="16.5" cy="16.5" r="2.5"/>'),
  retail_shop: _bbIcon('<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>'),
  fitness_sport: _bbIcon('<path d="m6.5 6.5 11 11"/><path d="m21 21-1-1"/><path d="m3 3 1 1"/><path d="m18 22 4-4"/><path d="m2 6 4-4"/><path d="m3 10 7-7"/><path d="m14 21 7-7"/><path d="m18 10-4 4"/><path d="m10 18-4-4"/>'),
  production: _bbIcon('<path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/>'),
  education: _bbIcon('<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>'),
  medical: _bbIcon('<path d="M11 2v2"/><path d="M5 2v2"/><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/>'),
  hotel_hostel: _bbIcon('<path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/>'),
  entertainment: _bbIcon('<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>'),
  services: _bbIcon('<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>'),
  pharmacy: _bbIcon('<path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/>')
};

const SERVICE_ICONS = {
  valuation: _bbIcon('<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>'),
  legal: _bbIcon('<path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>'),
  tax: _bbIcon('<rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/>'),
  consulting: _bbIcon('<rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>'),
  due_diligence: _bbIcon('<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>'),
  financing: _bbIcon('<line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/>')
};

/* ============ Language handling ============ */
function getLang() {
  return localStorage.getItem("bb_lang") || "az";
}
function setLang(lang) {
  localStorage.setItem("bb_lang", lang);
  document.documentElement.lang = lang;
  applyI18n();
  // let pages hook in
  window.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
}
function t(key) {
  const lang = getLang();
  return (STRINGS[lang] && STRINGS[lang][key]) || STRINGS.az[key] || key;
}
function applyI18n() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  // set active on language buttons
  document.querySelectorAll(".lang-switch button").forEach(b => {
    b.classList.toggle("active", b.dataset.lang === getLang());
  });
}

/* ============ Formatting ============ */
function fmtAZN(n) {
  if (n == null || n === 0) return "—";
  return new Intl.NumberFormat("en-US").format(n) + " AZN";
}
function fmtUSD(n) {
  if (n == null || n === 0) return "";
  return "≈ $" + new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(Math.round(n * AZN_TO_USD));
}
function fmtNum(n) {
  if (n == null) return "—";
  return new Intl.NumberFormat("en-US").format(n);
}
function fmtDate(s) {
  if (!s) return "";
  const d = new Date(s);
  const locales = { az: "az-AZ", en: "en-GB", ru: "ru-RU" };
  return d.toLocaleDateString(locales[getLang()] || "az-AZ", { day: "2-digit", month: "short", year: "numeric" });
}

/* ============ Data loading ============ */
async function loadJSON(path) {
  const resp = await fetch(path);
  if (!resp.ok) throw new Error("Failed to load " + path);
  return resp.json();
}

async function loadListings() {
  return loadJSON("data/listings.json");
}
async function loadCategories() {
  return loadJSON("data/categories.json");
}
async function loadServices() {
  return loadJSON("data/services.json");
}
async function loadTestimonials() {
  return loadJSON("data/testimonials.json");
}
async function loadFranchises() {
  return loadJSON("data/franchises.json");
}

async function loadInvestors() {
  return loadJSON("data/investors.json");
}

/* ============ City / District i18n ============ */
const CITY_TRANSLATIONS = {
  "Bakı": { en: "Baku", ru: "Баку" },
  "Quba": { en: "Guba", ru: "Куба" },
  "Sumqayıt": { en: "Sumgayit", ru: "Сумгаит" },
  "Gəncə": { en: "Ganja", ru: "Гянджа" }
};
const DISTRICT_TRANSLATIONS = {
  "Yasamal": { en: "Yasamal", ru: "Ясамал" },
  "Nərimanov": { en: "Narimanov", ru: "Нариманов" },
  "Xətai": { en: "Khatai", ru: "Хатаи" },
  "Binəqədi": { en: "Binagadi", ru: "Бинагади" },
  "Sabunçu": { en: "Sabunchu", ru: "Сабунчи" },
  "Nəsimi": { en: "Nasimi", ru: "Насими" },
  "Abşeron": { en: "Absheron", ru: "Апшерон" },
  "Nizami": { en: "Nizami", ru: "Низами" },
  "Suraxanı": { en: "Surakhani", ru: "Сураханы" },
  "Səbail": { en: "Sabail", ru: "Сабаил" },
  "Xəzər": { en: "Khazar", ru: "Хазар" },
  "Mərkəz": { en: "Center", ru: "Центр" }
};
function locCity(name) {
  const lang = getLang();
  if (lang === "az") return name;
  return (CITY_TRANSLATIONS[name] && CITY_TRANSLATIONS[name][lang]) || name;
}
function locDistrict(name) {
  const lang = getLang();
  if (lang === "az") return name;
  return (DISTRICT_TRANSLATIONS[name] && DISTRICT_TRANSLATIONS[name][lang]) || name;
}
async function loadPlans() {
  return loadJSON("data/plans.json");
}
async function loadBrokers() {
  return loadJSON("data/brokers.json");
}

/* ============ Localization helpers on records ============ */
function locField(rec, base) {
  const lang = getLang();
  return rec[`${base}_${lang}`] || rec[`${base}_az`] || rec[base] || "";
}
function catLabel(catObj) {
  const lang = getLang();
  return catObj ? (catObj[`label_${lang}`] || catObj.label_az) : "";
}

/* ============ Dark mode ============ */
function getDarkMode() {
  return localStorage.getItem("bb_darkmode") === "1";
}
function applyDarkMode(dark) {
  document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  document.querySelectorAll(".dark-toggle").forEach(btn => {
    btn.textContent = dark ? "☀️" : "🌙";
    btn.setAttribute("aria-label", dark ? "Light mode" : "Dark mode");
  });
}
function toggleDarkMode() {
  const next = !getDarkMode();
  localStorage.setItem("bb_darkmode", next ? "1" : "0");
  applyDarkMode(next);
}

/* ============ Shared UI: header / footer ============ */
function renderHeader(activePage) {
  return `
  <header class="site-header">
    <div class="container header-inner">
      <a class="logo" href="index.html">
        <span class="logo-mark">B</span>
        <span>BizBazar<span style="color: var(--accent)">.az</span></span>
      </a>
      <nav class="nav nav-desktop">
        <a href="index.html" class="${activePage === 'home' ? 'active' : ''}" data-i18n="nav_home"></a>
        <a href="listings.html" class="${activePage === 'listings' ? 'active' : ''}" data-i18n="nav_browse"></a>
        <a href="franchises.html" class="${activePage === 'franchises' ? 'active' : ''}" data-i18n="nav_franchises"></a>
        <a href="investors.html" class="${activePage === 'investors' ? 'active' : ''}" data-i18n="nav_investors"></a>
        <a href="brokers.html" class="${activePage === 'brokers' ? 'active' : ''}">Brokerlər</a>
        <a href="services.html" class="${activePage === 'services' ? 'active' : ''}" data-i18n="nav_services"></a>
        <a href="sell.html" class="${activePage === 'sell' ? 'active' : ''}" data-i18n="nav_sell"></a>
        <a href="map.html" class="${activePage === 'map' ? 'active' : ''}" data-i18n="nav_map"></a>
        <a href="valuation.html" class="${activePage === 'valuation' ? 'active' : ''}" data-i18n="nav_valuation"></a>
        <a href="favorites.html" class="${activePage === 'favorites' ? 'active' : ''}">♥ <span data-i18n="nav_favorites"></span>${getFavorites().length > 0 ? ` <span class="fav-count">${getFavorites().length}</span>` : ''}</a>
      </nav>
      <div class="header-actions header-actions-desktop">
        <button class="dark-toggle" aria-label="Dark mode" onclick="toggleDarkMode()">🌙</button>
        <div class="lang-switch">
          <button data-lang="az">AZ</button>
          <button data-lang="en">EN</button>
          <button data-lang="ru">RU</button>
        </div>
        <div id="header-auth-desktop" style="display:flex;align-items:center;gap:8px">
          <a href="auth.html" class="btn btn-outline btn-sm" id="hdr-signin-desktop" data-i18n="cta_signin" style="display:none"></a>
          <div class="hdr-user-wrap" id="hdr-profile-desktop" style="display:none;position:relative">
            <button class="header-user-btn hdr-user-trigger" id="hdr-user-trigger-desktop"
              onclick="var w=document.getElementById('hdr-profile-desktop');w.classList.toggle('open');event.stopPropagation()"
              style="display:flex;align-items:center;gap:6px;background:none;border:1px solid var(--border);border-radius:999px;padding:4px 10px 4px 4px;cursor:pointer;color:var(--text)">
              <span class="header-avatar" id="hdr-avatar-desktop" style="width:28px;height:28px;font-size:11px">?</span>
              <span id="hdr-user-name-desktop" style="font-size:13px;font-weight:600;max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap"></span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="hdr-user-menu" style="display:none;position:absolute;right:0;top:calc(100% + 8px);background:var(--surface);border:1px solid var(--border);border-radius:12px;box-shadow:0 8px 28px rgba(0,0,0,.13);min-width:170px;padding:6px;z-index:9999">
              <a href="profile.html" style="display:flex;align-items:center;gap:8px;padding:9px 12px;border-radius:8px;color:var(--text);text-decoration:none;font-size:14px;font-weight:500" onmouseover="this.style.background='var(--bg)'" onmouseout="this.style.background=''">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>Profilim
              </a>
              <a href="messages.html" style="display:flex;align-items:center;gap:8px;padding:9px 12px;border-radius:8px;color:var(--text);text-decoration:none;font-size:14px;font-weight:500" onmouseover="this.style.background='var(--bg)'" onmouseout="this.style.background=''">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>Mesajlar
              </a>
              <div style="margin:4px 6px;border-top:1px solid var(--border)"></div>
              <a href="#" onclick="window._bbSignOut&&window._bbSignOut();return false" style="display:flex;align-items:center;gap:8px;padding:9px 12px;border-radius:8px;color:#ef4444;text-decoration:none;font-size:14px;font-weight:500" onmouseover="this.style.background='var(--bg)'" onmouseout="this.style.background=''">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>Çıxış
              </a>
            </div>
          </div>
          <a href="messages.html" class="header-msgs-btn" id="hdr-msgs-desktop" style="display:none" title="Mesajlar">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          </a>
        </div>
        <a href="sell.html" class="btn btn-primary" data-i18n="cta_list"></a>
      </div>
      <button class="nav-toggle" aria-label="Menyu" aria-expanded="false" onclick="document.body.classList.toggle('mobile-menu-open');this.setAttribute('aria-expanded',document.body.classList.contains('mobile-menu-open'))">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
  <div class="nav-overlay" onclick="document.body.classList.remove('mobile-menu-open')"></div>
  <aside class="nav-drawer" aria-label="Mobil menyu">
    <div class="nav-drawer-head">
      <span class="nav-drawer-title">Menyu</span>
      <button class="nav-drawer-close" aria-label="Bağla" onclick="document.body.classList.remove('mobile-menu-open')">✕</button>
    </div>
    <nav class="nav nav-mobile" onclick="if(event.target.tagName==='A')document.body.classList.remove('mobile-menu-open')">
      <a href="index.html" class="${activePage === 'home' ? 'active' : ''}" data-i18n="nav_home"></a>
      <a href="listings.html" class="${activePage === 'listings' ? 'active' : ''}" data-i18n="nav_browse"></a>
      <a href="franchises.html" class="${activePage === 'franchises' ? 'active' : ''}" data-i18n="nav_franchises"></a>
      <a href="investors.html" class="${activePage === 'investors' ? 'active' : ''}" data-i18n="nav_investors"></a>
      <a href="brokers.html" class="${activePage === 'brokers' ? 'active' : ''}">Brokerlər</a>
      <a href="services.html" class="${activePage === 'services' ? 'active' : ''}" data-i18n="nav_services"></a>
      <a href="sell.html" class="${activePage === 'sell' ? 'active' : ''}" data-i18n="nav_sell"></a>
      <a href="map.html" class="${activePage === 'map' ? 'active' : ''}" data-i18n="nav_map"></a>
      <a href="valuation.html" class="${activePage === 'valuation' ? 'active' : ''}" data-i18n="nav_valuation"></a>
      <a href="favorites.html" class="${activePage === 'favorites' ? 'active' : ''}">♥ <span data-i18n="nav_favorites"></span>${getFavorites().length > 0 ? ` <span class="fav-count">${getFavorites().length}</span>` : ''}</a>
    </nav>
    <div class="header-actions header-actions-mobile">
      <div style="display:flex;align-items:center;gap:10px;">
        <button class="dark-toggle" aria-label="Dark mode" onclick="toggleDarkMode()">🌙</button>
        <div class="lang-switch">
          <button data-lang="az">AZ</button>
          <button data-lang="en">EN</button>
          <button data-lang="ru">RU</button>
        </div>
      </div>
      <div style="display:flex;gap:8px;align-items:center">
        <a href="auth.html" class="btn btn-outline btn-sm" id="hdr-signin-mobile" data-i18n="cta_signin" style="display:none"></a>
        <a href="profile.html" class="header-user-btn" id="hdr-profile-mobile" style="display:none;align-items:center;gap:6px;text-decoration:none">
          <span class="header-avatar" id="hdr-avatar-mobile" style="width:28px;height:28px;font-size:11px">?</span>
          <span id="hdr-user-name-mobile" style="font-size:13px;font-weight:600;color:var(--text);max-width:80px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap"></span>
        </a>
        <a href="messages.html" class="header-msgs-btn" id="hdr-msgs-mobile" style="display:none">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        </a>
        <a href="sell.html" class="btn btn-primary" data-i18n="cta_list"></a>
      </div>
    </div>
  </aside>`;
}

function renderFooter() {
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <div class="logo" style="color: white; margin-bottom: 14px;">
            <span class="logo-mark">B</span>
            <span>BizBazar<span style="color: var(--accent)">.az</span></span>
          </div>
          <p style="color: #94a3b8; font-size: 14px; margin: 0; max-width: 320px;" data-i18n="footer_about"></p>
        </div>
        <div class="footer-col">
          <h4 data-i18n="footer_platform"></h4>
          <a href="listings.html" data-i18n="nav_browse"></a>
          <a href="franchises.html" data-i18n="nav_franchises"></a>
          <a href="investors.html" data-i18n="nav_investors"></a>
          <a href="brokers.html">Brokerlər</a>
          <a href="services.html" data-i18n="nav_services"></a>
          <a href="sell.html" data-i18n="nav_sell"></a>
        </div>
        <div class="footer-col">
          <h4 data-i18n="footer_legal"></h4>
          <a href="faq.html" data-i18n="footer_terms"></a>
          <a href="faq.html" data-i18n="footer_privacy"></a>
          <a href="faq.html" data-i18n="footer_nda"></a>
        </div>
        <div class="footer-col">
          <h4 data-i18n="footer_support"></h4>
          <a href="contact.html" data-i18n="footer_contact"></a>
          <a href="faq.html" data-i18n="footer_faq"></a>
          <a href="about.html" data-i18n="nav_about"></a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 BizBazar.az</span>
        <span>Bakı, Azərbaycan</span>
      </div>
    </div>
  </footer>`;
}

function mountLayout(activePage) {
  const headerMount = document.getElementById("header-mount");
  const footerMount = document.getElementById("footer-mount");
  if (headerMount) headerMount.innerHTML = renderHeader(activePage);
  if (footerMount) footerMount.innerHTML = renderFooter();
  // wire language switcher
  document.querySelectorAll(".lang-switch button").forEach(b => {
    b.addEventListener("click", () => setLang(b.dataset.lang));
  });
  document.documentElement.lang = getLang();
  applyI18n();
  applyDarkMode(getDarkMode());
  mountCookiesBanner();
  // wire auth state into header
  _mountHeaderAuth();
}

function _mountHeaderAuth() {
  // Auth UI disabled: header shows no sign-in button or profile chip.
  return;
  import("./firebase.js?v=3").then(({ auth, onAuthStateChanged, signOut, getProfile }) => {
    // Sign-out handler exposed globally for dropdown
    window._bbSignOut = () => signOut(auth).then(() => { location.href = "index.html"; });

    // Close user dropdown when clicking outside
    document.addEventListener("click", () => {
      const w = document.getElementById("hdr-profile-desktop");
      if (w) w.classList.remove("open");
    });

    onAuthStateChanged(auth, async user => {
      const signinDesktop  = document.getElementById("hdr-signin-desktop");
      const profileDesktop = document.getElementById("hdr-profile-desktop");
      const msgsDesktop    = document.getElementById("hdr-msgs-desktop");
      const avatarDesktop  = document.getElementById("hdr-avatar-desktop");
      const nameDesktop    = document.getElementById("hdr-user-name-desktop");
      const menuDesktop    = document.getElementById("hdr-user-menu-desktop");
      const signinMobile   = document.getElementById("hdr-signin-mobile");
      const profileMobile  = document.getElementById("hdr-profile-mobile");
      const msgsMobile     = document.getElementById("hdr-msgs-mobile");
      const avatarMobile   = document.getElementById("hdr-avatar-mobile");
      const nameMobile     = document.getElementById("hdr-user-name-mobile");

      if (!signinDesktop) return;

      if (user) {
        if (signinDesktop)  signinDesktop.style.display  = "none";
        if (profileDesktop) profileDesktop.style.display = "flex";
        if (msgsDesktop)    msgsDesktop.style.display    = "none"; // now inside dropdown
        if (signinMobile)   signinMobile.style.display   = "none";
        if (profileMobile)  profileMobile.style.display  = "flex";
        if (msgsMobile)     msgsMobile.style.display     = "none"; // inside dropdown

        // Show dropdown menu
        if (menuDesktop) menuDesktop.style.display = "none"; // closed by default

        // Load name + avatar
        const profile = await getProfile(user.uid).catch(() => null);
        const fullName = profile?.displayName || "";
        const firstName = fullName.split(" ")[0] || user.phoneNumber || "Hesabım";
        const initials = fullName
          ? fullName.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase()
          : (user.phoneNumber ? user.phoneNumber.slice(-2) : "?");
        const color = profile?.avatarColor || "#1a2744";

        if (avatarDesktop) { avatarDesktop.textContent = initials; avatarDesktop.style.background = color; }
        if (nameDesktop)   nameDesktop.textContent = firstName;
        if (avatarMobile)  { avatarMobile.textContent = initials; avatarMobile.style.background = color; }
        if (nameMobile)    nameMobile.textContent = firstName;

        // Toggle dropdown open state → show/hide menu div
        const trigger = document.getElementById("hdr-user-trigger-desktop");
        if (trigger) {
          trigger.onclick = (e) => {
            e.stopPropagation();
            const wrap = document.getElementById("hdr-profile-desktop");
            const menu = document.getElementById("hdr-user-menu-desktop");
            if (!wrap || !menu) return;
            const isOpen = wrap.classList.toggle("open");
            menu.style.display = isOpen ? "block" : "none";
          };
        }
      } else {
        if (signinDesktop)  signinDesktop.style.display  = "inline-flex";
        if (profileDesktop) profileDesktop.style.display = "none";
        if (msgsDesktop)    msgsDesktop.style.display    = "none";
        if (signinMobile)   signinMobile.style.display   = "inline-flex";
        if (profileMobile)  profileMobile.style.display  = "none";
        if (msgsMobile)     msgsMobile.style.display     = "none";
      }
    });
  }).catch(() => {
    ["hdr-signin-desktop","hdr-signin-mobile"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = "inline-flex";
    });
  });
}

/* ============ Cookies consent banner ============ */
const COOKIES_TEXT = {
  az: { msg: "Bu sayt sizə daha yaxşı təcrübə təqdim etmək üçün cookies-dən istifadə edir.", accept: "Qəbul edirəm", decline: "Rədd et", learn: "Məxfilik siyasəti" },
  en: { msg: "This site uses cookies to provide you with a better experience.", accept: "Accept", decline: "Decline", learn: "Privacy policy" },
  ru: { msg: "Этот сайт использует cookies для лучшего опыта.", accept: "Принять", decline: "Отклонить", learn: "Политика конфиденциальности" }
};
function mountCookiesBanner() {
  if (localStorage.getItem("bb_cookies_consent")) return;
  if (document.getElementById("cookies-banner")) return;
  const lang = getLang();
  const tx = COOKIES_TEXT[lang] || COOKIES_TEXT.az;
  const banner = document.createElement("div");
  banner.id = "cookies-banner";
  banner.className = "cookies-banner";
  banner.innerHTML = `
    <div class="cookies-banner-inner">
      <span class="cookies-msg">🍪 ${tx.msg} <a href="faq.html">${tx.learn}</a></span>
      <div class="cookies-actions">
        <button class="btn btn-outline btn-sm" id="cookies-decline">${tx.decline}</button>
        <button class="btn btn-primary btn-sm" id="cookies-accept">${tx.accept}</button>
      </div>
    </div>`;
  document.body.appendChild(banner);
  document.getElementById("cookies-accept").onclick = () => {
    localStorage.setItem("bb_cookies_consent", "accepted");
    banner.remove();
  };
  document.getElementById("cookies-decline").onclick = () => {
    localStorage.setItem("bb_cookies_consent", "declined");
    banner.remove();
  };
}

/* ============ Favorites (localStorage) ============ */
function getFavorites() {
  try { return JSON.parse(localStorage.getItem("bb_favorites") || "[]"); } catch(e) { return []; }
}
function isFavorite(id) {
  return getFavorites().includes(id);
}
function toggleFavorite(id) {
  let favs = getFavorites();
  if (favs.includes(id)) { favs = favs.filter(x => x !== id); }
  else { favs.push(id); }
  localStorage.setItem("bb_favorites", JSON.stringify(favs));
  return favs.includes(id);
}

/* ============ Recently viewed (localStorage) ============ */
function getRecentlyViewed() {
  try { return JSON.parse(localStorage.getItem("bb_recent") || "[]"); } catch(e) { return []; }
}
function addRecentlyViewed(id) {
  let recent = getRecentlyViewed().filter(x => x !== id);
  recent.unshift(id);
  if (recent.length > 10) recent = recent.slice(0, 10);
  localStorage.setItem("bb_recent", JSON.stringify(recent));
}

/* ============ Listing photos ============ */
function getListingPhotos(listing) {
  // returns array of at least 3 photo URLs (placeholder images keyed by category)
  const CAT_IMGS = {
    cafe_restaurant: ["https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800","https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400","https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400"],
    beauty_salon:    ["https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=800","https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400","https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400"],
    auto_service:    ["https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=800","https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=400","https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400"],
    retail_shop:     ["https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800","https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=400","https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400"],
    fitness_sport:   ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800","https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400","https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400"],
    production:      ["https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800","https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400","https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400"],
    education:       ["https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800","https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400","https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400"],
    medical:         ["https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800","https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400","https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400"],
    hotel_hostel:    ["https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800","https://images.unsplash.com/photo-1455587734955-081b22074882?w=400","https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400"],
    entertainment:   ["https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800","https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400","https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400"],
    services:        ["https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800","https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400","https://images.unsplash.com/photo-1552664730-d307ca884978?w=400"],
    pharmacy:        ["https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800","https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400","https://images.unsplash.com/photo-1576671081837-49000212a370?w=400"]
  };
  const fallback = ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800","https://images.unsplash.com/photo-1497366216548-37526070297c?w=400","https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400"];
  return (listing && CAT_IMGS[listing.category]) || fallback;
}
function getListingThumb(listing) {
  // Deterministic per-listing photo: same listing always shows the same image,
  // but listings within one category rotate through the category's photo pool.
  const photos = getListingPhotos(listing);
  const digits = String((listing && listing.id) || "0").replace(/\D/g, "");
  const seed = parseInt(digits.slice(-3) || "0", 10);
  const url = photos[seed % photos.length];
  return url.replace("w=400", "w=800");
}

/* ============ Skeleton card ============ */
function skeletonCardHTML() {
  return `<div class="listing-card skeleton-card" aria-hidden="true">
    <div class="listing-image skeleton-block" style="height:140px;"></div>
    <div class="listing-body">
      <div class="skeleton-line" style="width:40%;height:12px;margin-bottom:8px;"></div>
      <div class="skeleton-line" style="width:80%;height:18px;margin-bottom:6px;"></div>
      <div class="skeleton-line" style="width:60%;height:12px;margin-bottom:12px;"></div>
      <div class="skeleton-line" style="width:50%;height:22px;"></div>
    </div>
  </div>`;
}

/* ============ Listing card ============ */
function listingCardHTML(l, categoriesById) {
  const cat = categoriesById[l.category];
  const icon = CATEGORY_ICONS[l.category] || "🏢";
  const title = locField(l, "title");
  const titleEsc = title.replace(/"/g, '&quot;');
  const featuredBadge = l.featured
    ? `<div style="position:absolute;top:12px;left:12px;background:#f59e0b;color:white;font-size:11px;font-weight:700;padding:4px 10px;border-radius:999px;text-transform:uppercase;letter-spacing:.03em;z-index:3;">${t("badge_featured")}</div>`
    : "";
  const verifiedBadge = l.verified
    ? `<div style="display:inline-flex;align-items:center;gap:4px;background:#dcfce7;color:#16a34a;font-size:11px;font-weight:600;padding:2px 8px;border-radius:20px;align-self:flex-start;">✓ ${t("verified")}</div>`
    : "";
  const thumb = getListingThumb(l);
  const saved = isFavorite(l.id);
  const waBtn = l.whatsapp && l.phone
    ? `<button type="button" onclick="event.preventDefault();event.stopPropagation();window.open('https://wa.me/994502009088','_blank')" style="display:inline-flex;align-items:center;gap:6px;background:#25d366;color:white;border:none;cursor:pointer;border-radius:8px;padding:8px 14px;font-size:13px;font-weight:600;font-family:inherit;align-self:flex-start;margin-top:6px;">💬 WhatsApp</button>`
    : "";
  return `
  <a class="listing-card" href="listing.html?id=${l.id}" style="display:flex;flex-direction:column;background:white;border-radius:14px;overflow:hidden;border:1px solid #e2e8f0;text-decoration:none;color:#0f172a;height:100%;box-shadow:0 1px 3px rgba(0,0,0,.04);">
    <div style="position:relative;width:100%;height:180px;background:linear-gradient(135deg,#fef3c7,#fed7aa);display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden;">
      <span style="position:absolute;font-size:72px;opacity:.45;z-index:0;">${icon}</span>
      <img src="${thumb}" alt="${titleEsc}" loading="lazy" onerror="this.style.display='none'" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:1;">
      ${featuredBadge}
      <button data-id="${l.id}" onclick="event.preventDefault();event.stopPropagation();this.classList.toggle('saved');toggleFavorite('${l.id}');this.style.color=this.classList.contains('saved')?'#e63946':'#94a3b8'" style="position:absolute;top:10px;right:10px;background:rgba(255,255,255,.92);border:none;border-radius:50%;width:34px;height:34px;font-size:16px;cursor:pointer;z-index:3;color:${saved ? '#e63946' : '#94a3b8'};display:flex;align-items:center;justify-content:center;">♥</button>
    </div>
    <div style="padding:16px 18px 18px;display:flex;flex-direction:column;gap:8px;flex:1;">
      ${verifiedBadge}
      <div style="font-size:11px;font-weight:600;color:#2563eb;text-transform:uppercase;letter-spacing:.04em;">${catLabel(cat)}</div>
      <h3 style="font-size:16px;font-weight:700;margin:0;color:#0f172a;line-height:1.35;">${title}</h3>
      <div style="font-size:13px;color:#64748b;">📍 ${locDistrict(l.district)}, ${locCity(l.city)}</div>
      <div style="display:flex;gap:10px;font-size:12px;color:#64748b;flex-wrap:wrap;">
        <span>📐 ${fmtNum(l.area_m2)} m²</span>
        <span>👥 ${l.staff_count}</span>
        <span>📅 ${l.operating_years} ${t("listing_meta_years")}</span>
      </div>
      ${l.monthly_profit_azn ? `<div style="display:inline-flex;align-items:center;gap:6px;background:#f0fdf4;border:1px solid #bbf7d0;color:#15803d;font-size:12px;font-weight:700;padding:4px 10px;border-radius:7px;align-self:flex-start;">💰 ${t("detail_profit")}: ${fmtAZN(l.monthly_profit_azn)}</div>` : ""}
      <div style="font-size:20px;font-weight:800;color:#0f172a;margin-top:auto;padding-top:10px;border-top:1px solid #f1f5f9;">${fmtAZN(l.price_azn)}<span style="font-size:12px;font-weight:500;color:#64748b;margin-left:4px;">${fmtUSD(l.price_azn)}</span></div>
      ${waBtn}
    </div>
  </a>`;
}


/* ============================================================
   AI Chatbot — rule-based FAQ, 3 languages, self-mounting
   ============================================================ */

const CHATBOT_FAQ = {
  az: [
    { id: 0, q: "BizBazar nədir?",
      patterns: ["bizbazar", "nədir", "sayt nədir", "platforma", "haqqında"],
      a: "BizBazar.az Azərbaycanda fəaliyyət göstərən bizneslərin alqı-satqısı, qiymətləndirilməsi və investor-sahibkar uyğunlaşdırılması üçün peşəkar platformadır. Bir məkanda 5 xidmət: yoxlanmış biznes elanları, broker şəbəkəsi, investor kataloqu, peşəkar qiymətləndirmə və xəritə-əsaslı axtarış." },
    { id: 1, q: "Biznesimi necə satıram?",
      patterns: ["sat", "satım", "satmaq", "biznes sat", "elan", "necə sat", "satışa qoy", "necə qoy"],
      a: "Saytın yuxarısındakı 'Sat' bölməsindən elan yerləşdirə bilərsiniz. Elan formasında biznesin gəliri, mənfəəti, lokasiyası və əlaqə məlumatları daxil olur. Peşəkar broker dəstəyi istəyirsinizsə, 'Brokerlər' bölməsindən birbaşa əlaqə qurun." },
    { id: 2, q: "Pulsuzdurmu?",
      patterns: ["pulsuz", "qiymət", "ödənişli", "ödəniş", "neçəyə", "free", "abunə"],
      a: "Əsas funksiyalar pulsuzdur — elan yerləşdirmək, axtarış etmək, qiymətləndirmə kalkulyatorundan istifadə etmək. Premium elan paketləri (50 AZN/ay), broker abunəlikləri və peşəkar qiymətləndirmə hesabatları ödənişlidir." },
    { id: 3, q: "Hansı dillərdə var?",
      patterns: ["dil", "ingilis", "rus", "english", "russian", "language", "azerbaijani"],
      a: "Sayt 3 dildə işləyir: Azərbaycan, İngilis və Rus. Header-dəki AZ/EN/RU pereklyuçateli ilə dəyişə bilərsiniz. Bütün elanlar 3 dildə təqdim olunur." },
    { id: 4, q: "Mobil tətbiq var?",
      patterns: ["mobil", "tətbiq", "telefon", "app", "ios", "android", "yüklə", "endir"],
      a: "Saytı telefonda açın və 'Ana ekrana əlavə et' düyməsinə basın — bu Progressive Web App-dir, tətbiq kimi işləyir. Native iOS və Android tətbiqlər 2027-də planlaşdırılıb." },

    { id: 5, q: "Hansı sənədlər lazımdır?",
      patterns: ["sənəd", "document", "lazım", "qeydiyyat", "lisenziya", "vergi"],
      a: "Elan üçün: biznes lisenziyası, son 12 ayın gəlir-mənfəət hesabatları, icarə müqaviləsi (icarədirsə), avadanlıq siyahısı. Yoxlanma nişanı (verified badge) almaq üçün bu sənədləri komandamıza göndərməlisiniz." },
    { id: 6, q: "Məxfilik necə qorunur?",
      patterns: ["məxfilik", "gizli", "anonim", "nda", "privacy", "secret", "konfidensial"],
      a: "Elanın detalları yalnız yoxlanmış alıcılara açıqlanır. NDA (Non-Disclosure Agreement) imzalanır. Şirkət adı, ünvanı və əlaqə yalnız ciddi maraq göstərdikdən sonra paylaşılır — işçi və müştəriləriniz xəbər tutmur." },
    { id: 7, q: "Satış neçə zaman çəkir?",
      patterns: ["nə qədər", "vaxt", "zaman", "müddət", "neçə ay", "neçə gün", "tez"],
      a: "Ortalama 3-6 ay (Bakıda yaxşı yoxlanmış biznes üçün). Düzgün qiymət, tam sənədlər və broker dəstəyi ilə bu müddət 2 aya qədər qısala bilər. Qiymət bazardan yüksək olanda 9-12 ay çəkə bilər." },
    { id: 8, q: "Biznes almaq istəyirəm",
      patterns: ["al", "alıcı", "almaq", "satın", "axtarıram", "buy", "axtar"],
      a: "'Bütün elanlar' səhifəsində filtrləyə bilərsiniz: sektor, qiymət, lokasiya, sənəd statusuna görə. Hər elanın profilində birbaşa WhatsApp və zəng düymələri var. Daha çox seçim üçün 'Brokerlər' səhifəsindən broker ilə əlaqə qurun." },
    { id: 9, q: "Qiymətləndirmə necə işləyir?",
      patterns: ["qiymət", "valuation", "qiymətləndirmə", "dəyər", "neçəyə dəyər", "valuasiya"],
      a: "Saytda 4 mərhələli peşəkar valuasiya kalkulyatoru var — 'Qiymətləndirmə' menyusundan açın. 20+ giriş ilə 3 metoddan qiymət hesablayır: SDE Multiple, Gəlir Multiple, Aktiv Floor. 12 düzəliş faktoru avtomatik tətbiq olunur (lokasiya, gəlir artımı, sənəd keyfiyyəti və s.)." },

    { id: 10, q: "Brokerlər kimlərdir?",
      patterns: ["broker", "brokerler", "kim", "agentlik", "agency"],
      a: "Saytda 10 yoxlanmış biznes brokeri var — fərdi brokerlər və agentliklər. Hər brokerin lisenziya nömrəsi, sövdələşmə tarixçəsi (volume), reytinq və ixtisaslaşmaları görünür. 'Brokerlər' menyusundan onları filtrlə və birbaşa WhatsApp/telefonla əlaqə qurun." },
    { id: 11, q: "Broker komissiyası nə qədərdir?",
      patterns: ["komissiya", "commission", "neçə faiz", "tariff", "tarif", "fiz"],
      a: "Klassik brokerlərdə 5-10% komissiya, BizBazar üzərindən isə 3% (1.5% alıcı + 1.5% satıcı). Komissiya yalnız sövdələşmə bağlandıqda alınır — əvvəlcədən ödəniş yoxdur." },
    { id: 12, q: "Broker olmaq istəyirəm",
      patterns: ["broker ol", "qeydiyyat", "qoşul", "register", "join", "broker kim ola"],
      a: "Peşəkar broker və ya agentlik kimi qoşulmaq üçün 'Brokerlər' səhifəsinin altındakı 'Broker olaraq qoşul' düyməsindən forma doldurun. İlk 6 ay komissiyasız — yalnız platforma abunəliyi (200 AZN/ay)." },
    { id: 13, q: "İnvestor axtarıram",
      patterns: ["investor", "investisiya", "kapital", "maliyy", "pay axtarır"],
      a: "'İnvestorlar' səhifəsində 10 yoxlanmış investor profili mövcuddur — fərdi və korporativ, AZN 15K-2M büdcə aralığında. Hər biri ilə birbaşa əlaqə (NDA imzaladıqdan sonra) qura bilərsiniz." },
    { id: 14, q: "Hansı sektorlar var?",
      patterns: ["sektor", "kategoriya", "növ", "sahə", "industry", "category"],
      a: "12 əsas kateqoriya: kafe/restoran, gözəllik salonu, avtoservis, pərakəndə, fitness, istehsalat, təhsil, tibbi, otel/hostel, əyləncə, xidmət, aptek. Hər biri xəritə və filtrdə əlçatandır." },

    { id: 15, q: "Xəritədə necə baxım?",
      patterns: ["xəritə", "map", "harada", "lokasiya", "yerləşmə"],
      a: "'Xəritə' menyusundan Bakı və regionların interaktiv xəritəsi açılır. Biznes və investor markerləri ayrı rənglərlə göstərilir. Marker üzərinə klik edib detalları gör, yan sidebar-dan elanların siyahısı." },
    { id: 16, q: "Premium elan nədir?",
      patterns: ["premium", "feature", "seçilmiş", "öndə", "üst", "vip"],
      a: "Premium elan paketi (50-150 AZN/ay) elan sizinin ana səhifədə və axtarış nəticələrində öndə görünməsini, 3-4x daha çox baxış almasını və 'Premium' nişanı əlavə edilməsini təmin edir." },
    { id: 17, q: "Yoxlanma necə baş verir?",
      patterns: ["yoxla", "verified", "yoxlanma", "sertifikat", "təsdiq"],
      a: "Yoxlama 3 mərhələdə baş verir: 1) Lisenziya və sənədlərin yoxlanması; 2) Komandamızın biznesə fiziki ziyarəti; 3) Maliyyə hesabatlarının auditi (istəyə bağlı). Bütün proseslər 5-10 iş günü çəkir, pulsuzdur." },
    { id: 18, q: "Vergi məsələləri",
      patterns: ["vergi", "tax", "vergilər", "vergi necə"],
      a: "Biznes alqı-satqısı zamanı vergi tətbiq olunur (gəlir vergisi, ƏDV bəzi hallarda). Komandamız sizə kompleks mühasibatlıq və hüquqi məsləhət təşkil edə bilər — 'Xidmətlər' bölməsindən baxın və ya WhatsApp-la əlaqə saxlayın." },
    { id: 19, q: "Niyə BizBazar-ı seçim?",
      patterns: ["niyə", "fərq", "üstün", "why", "advantage", "fayda"],
      a: "5 səbəb: 1) Yeganə peşəkar biznes platforması — tap.az kimi ümumi elan saytı deyil; 2) Yoxlanmış elanlar və brokerlər; 3) NDA qorunan məxfilik; 4) 3% komissiya (klassik 5-10% əvəzinə); 5) Pulsuz peşəkar qiymətləndirmə alətləri." },

    { id: 20, q: "Hansı şəhərlərdə fəaliyyət göstərir?",
      patterns: ["şəhər", "regions", "harada", "bakı dan başqa", "city"],
      a: "Hazırda Bakı, Gəncə, Sumqayıt, Quba, Qəbələ və digər regionları əhatə edir. Xəritə görünüşündən bütün şəhərləri görə bilərsiniz. 2027-də Tbilisi (Gürcüstan) launch planlaşdırılıb." },
    { id: 21, q: "Franşiza seçimi",
      patterns: ["franşiza", "franchise", "francise", "lisenziya satışı"],
      a: "'Franşizalar' menyusundan fəal franşiza imkanlarına baxa bilərsiniz. Hər franşizanın ROI, geri ödəmə müddəti, başlanğıc kapital və royalty faizi göstərilib." },
    { id: 22, q: "Əlaqə necə qura bilərəm?",
      patterns: ["əlaqə", "contact", "telefon", "whatsapp", "support", "dəstək", "kömək"],
      a: "WhatsApp: +994 50 200 90 88. E-mail: info@bizbazar.az. Bütün suallar üçün cavab müddəti 24 saat ərzində. Aşağıdakı 'Əlaqə' bölməsindən forma doldurub göndərə bilərsiniz." },
    { id: 23, q: "Hesabat sifariş etmək",
      patterns: ["hesabat", "report", "valuasiya hesabat", "sertifikat", "rəsmi"],
      a: "Peşəkar valuasiya hesabatları (150-500 AZN) bank krediti, hüquqi sövdələşmə və ya rəsmi sənəd üçün lazımdırsa, 'Xidmətlər' bölməsindən sifariş verin. Sertifikatlı qiymətləndirici tərəfindən 3-5 iş günü ərzində hazırlanır." },
    { id: 24, q: "Şikayət bildirmək",
      patterns: ["şikayət", "problem", "complaint", "report", "şikayyət", "yanlış"],
      a: "Yanlış elan, scam və ya hər hansı problem üçün dərhal WhatsApp +994 50 200 90 88 ünvanına yazın. Şikayət 24 saat ərzində baxılır, lazım olduqda elan saytdan silinir." },

    { id: 25, q: "Biznes hesabı yaratmaq",
      patterns: ["hesab", "qeydiyyat", "account", "register", "yarat", "üzv ol"],
      a: "Hazırda elan yerləşdirmək üçün qeydiyyat tələb olunmur — sadəcə əlaqə məlumatlarını verirsiniz. İstifadəçi profili və saxlanmış elanlar funksiyası 2026 Q4-də launch olunacaq." },
    { id: 26, q: "Saxlanılmış elanlar (sevimlilər)",
      patterns: ["sevimli", "favorit", "saxla", "saved", "favorite", "bookmark", "ürəkcik"],
      a: "Hər elan kartında ürəkcik (♥) ikonuna klik edib saxlaya bilərsiniz. Saxlanılmış elanlar 'Sevimlilər' menyusundan baxıla bilər və brauzerinizdə saxlanılır." },
    { id: 27, q: "Müqayisə aləti",
      patterns: ["müqayisə", "compare", "qarşılaşdır", "iki", "üç biznes"],
      a: "Hər elan kartındakı checkbox ilə 2-3 biznesi seçib 'Müqayisə et' düyməsinə klik edin. Yan-yana qiymət, gəlir, mənfəət, lokasiya, ROI göstəriciləri görüntülənir." },
    { id: 28, q: "Cabir kafeyi və ya restoran satılır?",
      patterns: ["kafe", "restoran", "cafe", "restaurant", "yemək", "qida"],
      a: "Bəli, kafe və restoran kateqoriyasında 8+ elan var — Bakı (Yasamal, Nəsimi, Binəqədi), Quba mərkəzində. 'Bütün elanlar' → kateqoriyada 'Kafe və Restoran' seçin." },
    { id: 29, q: "Gözəllik salonu, fitness, klinika",
      patterns: ["gözəllik", "salon", "barber", "fitness", "klinika", "stomato", "tibbi"],
      a: "Hər biri ayrı kateqoriyada var. Gözəllik salonu (5+ elan), fitness klub (2 elan), stomatoloji klinika (1 elan, Nəsimi). Premium SPA Wellness Mərkəzi yeni elanlardan biridir (AZN 280K, Nəsimi)." }
  ],

  en: [
    { id: 0, q: "What is BizBazar?",
      patterns: ["what is", "bizbazar", "about", "platform", "site"],
      a: "BizBazar.az is the professional platform for buying, selling, valuing, and matching businesses with investors in Azerbaijan. One place for 5 services: verified business listings, broker network, investor directory, professional valuation, and map-based search." },
    { id: 1, q: "How do I sell my business?",
      patterns: ["sell", "selling", "list business", "list my", "post listing", "how to sell"],
      a: "Click 'Sell' in the top menu to post a listing. The form captures revenue, profit, location, and contact info. For professional broker assistance, connect via the 'Brokers' section." },
    { id: 2, q: "Is it free?",
      patterns: ["free", "cost", "price", "how much", "paid", "subscription"],
      a: "Core features are free — posting listings, searching, using the valuation calculator. Premium listings (AZN 50/month), broker subscriptions, and certified valuation reports are paid." },
    { id: 3, q: "What languages?",
      patterns: ["language", "english", "russian", "azerbaijani", "translate"],
      a: "The site runs in 3 languages: Azerbaijani, English, Russian. Switch via the AZ/EN/RU toggle in the header. All listings are presented in all 3 languages." },
    { id: 4, q: "Mobile app?",
      patterns: ["mobile", "app", "phone", "ios", "android", "install"],
      a: "Open the site on your phone and tap 'Add to Home Screen' — it's a Progressive Web App that works like a native app. Native iOS/Android apps are planned for 2027." },

    { id: 5, q: "What documents do I need?",
      patterns: ["document", "papers", "needed", "license", "tax", "required"],
      a: "For a listing: business license, last 12 months' P&L, lease agreement (if leased), equipment inventory. To earn the verified badge, send these documents to our team." },
    { id: 6, q: "How is confidentiality protected?",
      patterns: ["confidential", "privacy", "anonymous", "nda", "secret", "hidden"],
      a: "Listing details are disclosed only to verified buyers. NDA is signed. Company name, address, and contact are shared only after serious interest — staff and customers never find out." },
    { id: 7, q: "How long does selling take?",
      patterns: ["how long", "time", "duration", "months", "fast", "quick"],
      a: "Average 3-6 months for a well-verified business in Baku. With proper pricing, complete documents, and broker support, this can shorten to 2 months. Above-market pricing extends to 9-12 months." },
    { id: 8, q: "I want to buy a business",
      patterns: ["buy", "purchase", "buyer", "looking for", "acquire"],
      a: "Filter on the 'Listings' page by sector, price, location, document status. Each listing has direct WhatsApp and call buttons. For broader access, connect with a broker via the 'Brokers' page." },
    { id: 9, q: "How does valuation work?",
      patterns: ["valuation", "appraise", "worth", "value", "price my", "estimate"],
      a: "The site offers a 4-step professional valuation calculator — open from 'Valuation' menu. With 20+ inputs, it computes 3 methods: SDE Multiple, Revenue Multiple, Asset Floor. 12 adjustment factors are auto-applied." },

    { id: 10, q: "Who are the brokers?",
      patterns: ["broker", "agent", "agency", "who"],
      a: "The site has 10 verified business brokers — individuals and agencies. Each shows license number, deal history (volume), rating, and specializations. Filter on the 'Brokers' menu and contact via WhatsApp/phone." },
    { id: 11, q: "What's the broker commission?",
      patterns: ["commission", "fee", "percent", "rate", "charge"],
      a: "Traditional brokers charge 5-10%, while BizBazar takes 3% (1.5% buyer + 1.5% seller). Commission is only charged when a deal closes — no upfront fees." },
    { id: 12, q: "How do I become a broker?",
      patterns: ["become broker", "join as broker", "broker signup", "register broker"],
      a: "To join as a professional broker or agency, fill out the form at the bottom of the 'Brokers' page. First 6 months are commission-free — only the platform subscription applies (AZN 200/month)." },
    { id: 13, q: "Looking for investors",
      patterns: ["investor", "investment", "capital", "funding", "find investor"],
      a: "The 'Investors' page lists 10 verified investor profiles — individuals and corporates, AZN 15K-2M budget range. Connect directly after signing NDA." },
    { id: 14, q: "What sectors are covered?",
      patterns: ["sector", "category", "industry", "type", "what kind"],
      a: "12 main categories: cafe/restaurant, beauty salon, auto service, retail, fitness, manufacturing, education, medical, hotel/hostel, entertainment, services, pharmacy. All accessible via map and filters." },

    { id: 15, q: "How does the map view work?",
      patterns: ["map", "location", "where", "geographic", "view"],
      a: "From the 'Map' menu, an interactive map of Baku and regions opens. Business and investor markers are shown in different colors. Click a marker for details, or use the sidebar list." },
    { id: 16, q: "What is a premium listing?",
      patterns: ["premium", "featured", "top", "highlight", "vip"],
      a: "A premium listing package (AZN 50-150/month) puts your listing at the top of the homepage and search results, gets 3-4× more views, and adds a 'Premium' badge." },
    { id: 17, q: "How does verification work?",
      patterns: ["verify", "verified", "certified", "vetting"],
      a: "Verification has 3 stages: 1) License/document review; 2) Our team's physical visit to the business; 3) Financial audit (optional). All steps take 5-10 business days, free of charge." },
    { id: 18, q: "Tax matters",
      patterns: ["tax", "taxes"],
      a: "Business transactions are subject to taxes (income tax, sometimes VAT). Our team can arrange comprehensive accounting and legal advisory — see the 'Services' section or message us on WhatsApp." },
    { id: 19, q: "Why choose BizBazar?",
      patterns: ["why bizbazar", "advantage", "different", "better"],
      a: "5 reasons: 1) Only specialized business platform — not a general classifieds; 2) Verified listings and brokers; 3) NDA-protected confidentiality; 4) 3% commission vs traditional 5-10%; 5) Free professional valuation tools." },

    { id: 20, q: "Which cities?",
      patterns: ["city", "cities", "region", "where do you operate"],
      a: "Currently covering Baku, Ganja, Sumgait, Guba, Gabala, and other regions. See all cities in the map view. Tbilisi (Georgia) launch is planned for 2027." },
    { id: 21, q: "Franchise opportunities",
      patterns: ["franchise", "franchising"],
      a: "Browse active franchise opportunities under the 'Franchises' menu. Each shows ROI, payback period, startup capital, and royalty percentage." },
    { id: 22, q: "Contact / support",
      patterns: ["contact", "support", "help", "phone", "whatsapp", "email"],
      a: "WhatsApp: +994 50 200 90 88. Email: info@bizbazar.az. Response time within 24 hours. You can also use the contact form at the bottom of the site." },
    { id: 23, q: "Order a valuation report",
      patterns: ["valuation report", "report", "official", "certified report"],
      a: "Professional valuation reports (AZN 150-500) for bank loans, legal transactions, or official documents can be ordered from 'Services'. Prepared by a certified appraiser in 3-5 business days." },
    { id: 24, q: "Report a problem",
      patterns: ["report", "complaint", "fraud", "scam", "wrong"],
      a: "For false listings, scams, or any issue, message WhatsApp +994 50 200 90 88 immediately. Complaints are reviewed within 24 hours; listings are removed if needed." },

    { id: 25, q: "Create an account",
      patterns: ["account", "register", "sign up", "signup", "create"],
      a: "Currently no account is required to post a listing — just contact info. User profiles and saved-listings features launch in Q4 2026." },
    { id: 26, q: "Saved listings (favorites)",
      patterns: ["favorite", "save", "bookmark", "heart"],
      a: "Click the heart (♥) icon on any listing card to save it. View saved listings under the 'Favorites' menu — stored in your browser." },
    { id: 27, q: "Comparison tool",
      patterns: ["compare", "comparison", "side by side"],
      a: "Select 2-3 businesses via the checkbox on each listing card, then click 'Compare'. View price, revenue, profit, location, ROI side-by-side." },
    { id: 28, q: "Cafe or restaurant for sale?",
      patterns: ["cafe", "restaurant", "food"],
      a: "Yes, the cafe/restaurant category has 8+ listings — Baku (Yasamal, Nasimi, Binagadi), central Guba. Go to 'Listings' → select 'Cafe & Restaurant' category." },
    { id: 29, q: "Beauty salon, fitness, clinic",
      patterns: ["beauty", "salon", "barber", "fitness", "clinic", "dental"],
      a: "Each has its own category. Beauty salons (5+ listings), fitness clubs (2 listings), dental clinic (1 listing, Nasimi). The new Premium SPA & Wellness Center is featured (AZN 280K, Nasimi)." }
  ],

  ru: [
    { id: 0, q: "Что такое BizBazar?",
      patterns: ["что такое", "bizbazar", "сайт", "платформа", "о вас"],
      a: "BizBazar.az — профессиональная платформа для покупки, продажи, оценки бизнеса и подбора инвесторов в Азербайджане. 5 сервисов в одном месте: проверенные объявления, сеть брокеров, каталог инвесторов, профессиональная оценка, карта." },
    { id: 1, q: "Как продать бизнес?",
      patterns: ["продать", "продажа", "разместить", "как продать", "объявление"],
      a: "Нажмите 'Продать' в верхнем меню и заполните форму с указанием выручки, прибыли, расположения и контактов. Для профессиональной поддержки брокера обратитесь через раздел 'Брокеры'." },
    { id: 2, q: "Это бесплатно?",
      patterns: ["бесплатно", "цена", "сколько", "стоимость", "платно"],
      a: "Основные функции бесплатны — размещение объявлений, поиск, калькулятор оценки. Платными являются: премиум-объявления (50 AZN/мес), подписка для брокеров и сертифицированные отчёты об оценке." },
    { id: 3, q: "Какие языки?",
      patterns: ["язык", "русский", "английский", "азербайджанский"],
      a: "Сайт работает на 3 языках: азербайджанском, английском и русском. Переключение AZ/EN/RU в шапке. Все объявления представлены на 3 языках." },
    { id: 4, q: "Есть мобильное приложение?",
      patterns: ["мобильн", "приложение", "телефон", "app", "android", "ios"],
      a: "Откройте сайт на телефоне и нажмите 'Добавить на главный экран' — это Progressive Web App, работает как нативное приложение. Нативные iOS/Android приложения запланированы на 2027 год." },

    { id: 5, q: "Какие документы нужны?",
      patterns: ["документ", "нужно", "требуется", "лицензия"],
      a: "Для объявления: бизнес-лицензия, отчёты о доходах-расходах за 12 месяцев, договор аренды (если арендуете), список оборудования. Для получения значка 'Проверено' отправьте эти документы нашей команде." },
    { id: 6, q: "Как защищается конфиденциальность?",
      patterns: ["конфиденц", "анонимно", "приват", "секрет", "nda"],
      a: "Детали объявления раскрываются только проверенным покупателям. Подписывается NDA. Имя компании, адрес и контакты передаются только после серьёзного интереса — сотрудники и клиенты не узнают." },
    { id: 7, q: "Сколько занимает продажа?",
      patterns: ["сколько занимает", "время", "месяц", "длительно", "быстро"],
      a: "В среднем 3-6 месяцев для хорошо проверенного бизнеса в Баку. С правильной ценой, полными документами и поддержкой брокера можно уложиться в 2 месяца. Завышенная цена растягивает срок до 9-12 месяцев." },
    { id: 8, q: "Хочу купить бизнес",
      patterns: ["купить", "покупка", "приобрести", "ищу бизнес"],
      a: "На странице 'Все объявления' фильтруйте по сектору, цене, местоположению, статусу документов. На каждом объявлении есть кнопки WhatsApp и звонка. Для более широкого доступа свяжитесь с брокером через раздел 'Брокеры'." },
    { id: 9, q: "Как работает оценка?",
      patterns: ["оценка", "стоимость", "сколько стоит мой", "valuation"],
      a: "На сайте есть 4-шаговый калькулятор профессиональной оценки — откройте через меню 'Оценка'. 20+ параметров рассчитывают 3 метода: SDE Multiple, Revenue Multiple, Asset Floor. Автоматически применяется 12 корректирующих факторов." },

    { id: 10, q: "Кто такие брокеры?",
      patterns: ["брокер", "агент", "агентство"],
      a: "На сайте 10 проверенных бизнес-брокеров — частные и агентства. У каждого указаны номер лицензии, история сделок (объём), рейтинг, специализация. Фильтруйте на странице 'Брокеры' и связывайтесь по WhatsApp/телефону." },
    { id: 11, q: "Какая комиссия брокера?",
      patterns: ["комиссия", "процент", "сколько берет"],
      a: "Традиционные брокеры берут 5-10%, BizBazar берет 3% (1.5% покупатель + 1.5% продавец). Комиссия взимается только при закрытии сделки — без предоплат." },
    { id: 12, q: "Хочу стать брокером",
      patterns: ["стать брокер", "брокер регистр", "присоедин"],
      a: "Чтобы присоединиться как профессиональный брокер или агентство, заполните форму внизу страницы 'Брокеры'. Первые 6 месяцев без комиссии — только платформенная подписка (200 AZN/мес)." },
    { id: 13, q: "Ищу инвесторов",
      patterns: ["инвестор", "инвестиц", "капитал", "найти инвест"],
      a: "На странице 'Инвесторы' представлено 10 проверенных профилей — частные и корпоративные, бюджет AZN 15K-2M. Прямой контакт после подписания NDA." },
    { id: 14, q: "Какие сектора есть?",
      patterns: ["сектор", "категор", "сфера", "индустри"],
      a: "12 основных категорий: кафе/ресторан, салон красоты, автосервис, розница, фитнес, производство, образование, медицина, отель/хостел, развлечения, услуги, аптека." },

    { id: 15, q: "Как работает карта?",
      patterns: ["карт", "расположен", "где", "география"],
      a: "В меню 'Карта' открывается интерактивная карта Баку и регионов. Бизнес и инвесторы отмечены разными цветами. Кликните по маркеру для деталей, или используйте список в сайдбаре." },
    { id: 16, q: "Что такое премиум-объявление?",
      patterns: ["премиум", "избран", "топ", "vip"],
      a: "Премиум-объявление (50-150 AZN/мес) ставит ваше объявление в топ главной страницы и результатов поиска, даёт в 3-4 раза больше просмотров и значок 'Premium'." },
    { id: 17, q: "Как происходит проверка?",
      patterns: ["проверк", "верификац", "сертификат"],
      a: "Проверка в 3 этапа: 1) Проверка лицензии и документов; 2) Физический визит нашей команды в бизнес; 3) Финансовый аудит (по желанию). Все этапы 5-10 рабочих дней, бесплатно." },
    { id: 18, q: "Налоговые вопросы",
      patterns: ["налог", "ндс", "налоги"],
      a: "При продаже бизнеса применяются налоги (подоходный, иногда НДС). Наша команда может организовать комплексное бухгалтерское и юридическое сопровождение — см. раздел 'Услуги' или WhatsApp." },
    { id: 19, q: "Почему BizBazar?",
      patterns: ["почему", "преимущ", "отлич"],
      a: "5 причин: 1) Единственная специализированная платформа — не общий сайт объявлений; 2) Проверенные объявления и брокеры; 3) Конфиденциальность под NDA; 4) Комиссия 3% вместо классических 5-10%; 5) Бесплатные профессиональные инструменты оценки." },

    { id: 20, q: "В каких городах?",
      patterns: ["город", "регион", "где работаете"],
      a: "Сейчас охватываем Баку, Гянджу, Сумгаит, Кубу, Габалу и другие регионы. Все города видны в режиме карты. Запуск в Тбилиси (Грузия) запланирован на 2027 год." },
    { id: 21, q: "Франшизы",
      patterns: ["франшиза", "франчайз"],
      a: "Активные франчайзинговые предложения смотрите в меню 'Франшизы'. У каждой указаны ROI, срок окупаемости, стартовый капитал и роялти." },
    { id: 22, q: "Контакты / поддержка",
      patterns: ["контакт", "поддержк", "помощь", "телефон", "whatsapp", "почта"],
      a: "WhatsApp: +994 50 200 90 88. Email: info@bizbazar.az. Время ответа в течение 24 часов. Также используйте форму внизу сайта." },
    { id: 23, q: "Заказать отчёт об оценке",
      patterns: ["отчёт", "официальн", "сертифицир"],
      a: "Профессиональные отчёты об оценке (150-500 AZN) для банковских кредитов, юридических сделок или официальных документов заказывайте в разделе 'Услуги'. Готовится сертифицированным оценщиком за 3-5 рабочих дней." },
    { id: 24, q: "Сообщить о проблеме",
      patterns: ["жалоб", "проблем", "мошенник", "обман"],
      a: "О ложных объявлениях, мошенничестве или любой проблеме сразу пишите на WhatsApp +994 50 200 90 88. Жалобы рассматриваются в течение 24 часов; при необходимости объявление удаляется." },

    { id: 25, q: "Создать аккаунт",
      patterns: ["аккаунт", "регистрац", "учётная запись"],
      a: "Сейчас для размещения объявления не требуется регистрация — только контакты. Профили пользователей и сохранённые объявления запускаются в Q4 2026." },
    { id: 26, q: "Избранные объявления",
      patterns: ["избранн", "сохран", "сердечк"],
      a: "Нажмите на иконку сердца (♥) на карточке объявления, чтобы сохранить. Просмотр сохранённых в меню 'Избранное' — хранятся в браузере." },
    { id: 27, q: "Сравнение",
      patterns: ["сравнен", "сравнить"],
      a: "Выберите 2-3 бизнеса через чекбокс на карточках, затем нажмите 'Сравнить'. Цена, выручка, прибыль, расположение, ROI отображаются параллельно." },
    { id: 28, q: "Кафе или ресторан на продажу?",
      patterns: ["кафе", "ресторан", "общепит"],
      a: "Да, в категории кафе/ресторанов 8+ объявлений — Баку (Ясамал, Насими, Бинагади), центральная Куба. 'Все объявления' → категория 'Кафе и Рестораны'." },
    { id: 29, q: "Салон красоты, фитнес, клиника",
      patterns: ["красот", "салон", "фитнес", "клиник", "стоматолог"],
      a: "Каждый в своей категории. Салоны красоты (5+ объявлений), фитнес-клубы (2 объявления), стоматологическая клиника (1, Насими). Premium SPA & Wellness Центр среди новых (AZN 280K, Насими)." }
  ]
};
const BB_PERSONAS = [
  { name: "SAID",  tagline: "Biznes alışı və satışında qərarverməni asanlaşdıran süni intellekt əsaslı köməkçi." },
  { name: "AILIN", tagline: "Biznes almaq və satmaq istəyənlər üçün ağıllı rəqəmsal məsləhətçi." },
  { name: "AISEL", tagline: "Azərbaycanda biznes alışı və satışı üzrə süni intellekt əsaslı konsultant." },
  { name: "AILA",  tagline: "Biznes sövdələşmələrində alıcı və satıcıları düzgün istiqamətləndirən AI köməkçi." },
  { name: "AIDA",  tagline: "Biznes alışı və satışını daha sadə, şəffaf və ağıllı edən rəqəmsal köməkçi." },
  { name: "AIDAN", tagline: "Biznes qiymətləndirilməsi, alıcı-satıcı uyğunluğu və sövdələşmə prosesində süni intellekt əsaslı dəstəkçi." },
  { name: "NAILA", tagline: "Biznes alışı və satışı prosesində istifadəçini addım-addım yönləndirən ağıllı məsləhətçi." },
  { name: "AIAN",  tagline: "Biznes sövdələşmələri üçün hazırlanmış süni intellekt əsaslı rəqəmsal konsultant." }
];
window._bbPersona = BB_PERSONAS[Math.floor(Math.random() * BB_PERSONAS.length)];
const CHATBOT_UI_STRINGS = {
    az: {
    title: window._bbPersona.name,
    status: window._bbPersona.tagline,
    placeholder: "Sualınızı yazın...",
    welcome: "Salam! Mən BizBazar köməkçi botuyam. Sayt haqqında istənilən sualı verin.",
    suggestPrefix: "Tez-tez verilən suallar:",
    related: "Əlaqəli suallar:",
    notFound: "Sualınıza tam cavab tapa bilmədim. Komandamız WhatsApp vasitəsilə kömək edə bilər.",
    wa: "WhatsApp ilə yaz",
    send: "Göndər",
    helpful: "Bu cavab faydalı oldu?",
    yes: "Bəli", no: "Xeyr"
  },
  en: {
    title: window._bbPersona.name,
    status: window._bbPersona.tagline,
    placeholder: "Ask a question...",
    welcome: "Hi! I'm the BizBazar assistant bot. Ask me anything about the site.",
    suggestPrefix: "Frequently asked:",
    related: "Related questions:",
    notFound: "I couldn't find a complete answer. Our team can help via WhatsApp.",
    wa: "Message on WhatsApp",
    send: "Send",
    helpful: "Was this helpful?",
    yes: "Yes", no: "No"
  },
  ru: {
    title: window._bbPersona.name,
    status: window._bbPersona.tagline,
    placeholder: "Задайте вопрос...",
    welcome: "Здравствуйте! Я бот-помощник BizBazar. Спросите что угодно о сайте.",
    suggestPrefix: "Часто задаваемые:",
    related: "Похожие вопросы:",
    notFound: "Я не нашёл полного ответа. Наша команда поможет через WhatsApp.",
    wa: "Написать в WhatsApp",
    send: "Отправить",
    helpful: "Это было полезно?",
    yes: "Да", no: "Нет"
  }
};

const CHATBOT_WA = "https://wa.me/994502009088";

function _bbNormalize(s) {
  return (s || "")
    .toLowerCase()
    .replace(/[.,!?;:'"()[\]{}]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function _bbMatchFAQ(query, lang) {
  const q = _bbNormalize(query);
  if (q.length < 2) return null;
  const tokens = q.split(" ").filter(t => t.length >= 2);
  const faqs = CHATBOT_FAQ[lang] || CHATBOT_FAQ.az;

  let best = null, bestScore = 0;
  faqs.forEach(faq => {
    let score = 0;
    // Pattern phrase match (highest weight)
    faq.patterns.forEach(p => {
      const pn = _bbNormalize(p);
      if (q.includes(pn)) score += 8 + pn.length / 3;
    });
    // Token overlap with patterns
    faq.patterns.forEach(p => {
      const pTokens = _bbNormalize(p).split(" ").filter(t => t.length >= 2);
      pTokens.forEach(pt => {
        tokens.forEach(t => {
          if (t === pt) score += 3;
          else if (t.length >= 4 && pt.includes(t)) score += 1.5;
          else if (pt.length >= 4 && t.includes(pt)) score += 1.5;
        });
      });
    });
    // Title token overlap (mild signal)
    const titleTokens = _bbNormalize(faq.q).split(" ").filter(t => t.length >= 3);
    titleTokens.forEach(tt => { if (q.includes(tt)) score += 0.8; });

    if (score > bestScore) { bestScore = score; best = faq; }
  });
  return bestScore >= 4 ? { faq: best, score: bestScore } : null;
}

function _bbRenderMessage(text, who, options) {
  const wrap = document.getElementById("bb-chat-messages");
  if (!wrap) return;
  const m = document.createElement("div");
  m.className = "bb-msg bb-msg-" + who;
  let inner = `<div class="bb-bubble">${text}</div>`;
  if (options && options.length) {
    inner += `<div class="bb-chips">` +
      options.map(o => `<button class="bb-chip" data-q="${(o.q || o).replace(/"/g, '&quot;')}">${o.label || o.q || o}</button>`).join("") +
      `</div>`;
  }
  m.innerHTML = inner;
  wrap.appendChild(m);
  wrap.scrollTop = wrap.scrollHeight;

  m.querySelectorAll(".bb-chip").forEach(b => {
    b.onclick = () => {
      const q = b.dataset.q;
      _bbAsk(q);
    };
  });
}

function _bbShowWelcome() {
  const lang = (typeof getLang === "function") ? getLang() : "az";
  const ui = CHATBOT_UI_STRINGS[lang] || CHATBOT_UI_STRINGS.az;
  const wrap = document.getElementById("bb-chat-messages");
  wrap.innerHTML = "";
  _bbRenderMessage(ui.welcome, "bot");
  const faqs = CHATBOT_FAQ[lang] || CHATBOT_FAQ.az;
  const suggested = [1, 9, 10, 19, 22].map(i => ({ q: faqs[i].q, label: faqs[i].q }));
  _bbRenderMessage(`<i style="opacity:.7">${ui.suggestPrefix}</i>`, "bot", suggested);
}

function _bbAsk(question) {
  const input = document.getElementById("bb-chat-input");
  if (input) input.value = "";
  _bbRenderMessage(question, "user");

  const lang = (typeof getLang === "function") ? getLang() : "az";
  const ui = CHATBOT_UI_STRINGS[lang] || CHATBOT_UI_STRINGS.az;

  // Track history for API context
  window._bbHistory = window._bbHistory || [];
  window._bbHistory.push({ role: "user", content: question });
  if (window._bbHistory.length > 10) window._bbHistory = window._bbHistory.slice(-10);

  // Typing indicator
  const wrap = document.getElementById("bb-chat-messages");
  const t = document.createElement("div");
  t.className = "bb-msg bb-msg-bot bb-typing";
  t.innerHTML = `<div class="bb-bubble"><span></span><span></span><span></span></div>`;
  wrap.appendChild(t);
  wrap.scrollTop = wrap.scrollHeight;

  // Try real AI API first, fall back to local FAQ
  _bbAskAPI(question, lang).then(apiAnswer => {
    t.remove();

    if (apiAnswer) {
      const html = apiAnswer.replace(/\n/g, "<br>");
      _bbRenderMessage(html, "bot");
      window._bbHistory.push({ role: "assistant", content: apiAnswer });
      return;
    }

    // Fallback: rule-based FAQ
    const m = _bbMatchFAQ(question, lang);
    if (m) {
      const related = (CHATBOT_FAQ[lang] || CHATBOT_FAQ.az)
        .filter(f => f.id !== m.faq.id)
        .slice(0, 3)
        .map(f => ({ q: f.q, label: f.q }));
      _bbRenderMessage(m.faq.a, "bot");
      window._bbHistory.push({ role: "assistant", content: m.faq.a });
      setTimeout(() => _bbRenderMessage(`<i style="opacity:.7">${ui.related}</i>`, "bot", related), 200);
    } else {
      const waMsg = encodeURIComponent(question);
      _bbRenderMessage(
        `${ui.notFound}<br><br><a class="bb-wa-link" href="${CHATBOT_WA}?text=${waMsg}" target="_blank" rel="noopener">💬 ${ui.wa}</a>`,
        "bot"
      );
    }
  });
}

// Calls the Cloudflare Worker if configured via window.BIZBAZAR_AI_ENDPOINT.
// Returns the answer string, or null if not configured / on error.
async function _bbAskAPI(question, lang) {
  const endpoint = window.BIZBAZAR_AI_ENDPOINT;
  if (!endpoint) return null;
  const persona = BB_PERSONAS[Math.floor(Math.random() * BB_PERSONAS.length)];
  window._bbLastPersona = persona;
  try {
    const ctrl = new AbortController();
    const timeout = setTimeout(() => ctrl.abort(), 15000);
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: question,
        lang: lang,
        persona: persona.name,
        history: (window._bbHistory || []).slice(0, -1)
      }),
      signal: ctrl.signal
    });
    clearTimeout(timeout);
    if (!res.ok) return null;
    const data = await res.json();
    if (!data || !data.answer) return null;
    return `<b>${persona.name}:</b> ${data.answer}`;
  } catch (e) {
    console.warn("BizBazar AI API failed, falling back to FAQ:", e.message);
    return null;
  }
}

function _bbToggleChat() {
  document.body.classList.toggle("bb-chat-open");
  if (document.body.classList.contains("bb-chat-open")) {
    const inp = document.getElementById("bb-chat-input");
    if (inp && window.innerWidth > 600) setTimeout(() => inp.focus(), 250);
  }
}

function _bbInjectCSS() {
  if (document.getElementById("bb-chatbot-css")) return;
  const css = `
    #bb-chatbot * { box-sizing: border-box; }
    .bb-chat-bubble {
      position: fixed; right: 20px; bottom: 20px;
      width: 60px; height: 60px; border-radius: 50%;
      background: linear-gradient(135deg, #4F46E5, #6366F1);
      box-shadow: 0 10px 30px rgba(79,70,229,.40);
      cursor: pointer; z-index: 9998;
      display: flex; align-items: center; justify-content: center;
      transition: transform .2s, box-shadow .2s;
    }
    .bb-chat-bubble:hover { transform: translateY(-2px) scale(1.05); box-shadow: 0 14px 36px rgba(79,70,229,.50); }
    .bb-chat-bubble svg { width: 28px; height: 28px; fill: white; transition: opacity .2s; }
    .bb-chat-bubble .bb-icon-close { display: none; }
    body.bb-chat-open .bb-chat-bubble .bb-icon-chat { display: none; }
    body.bb-chat-open .bb-chat-bubble .bb-icon-close { display: block; }
    .bb-chat-bubble .bb-pulse {
      position: absolute; inset: -4px; border-radius: 50%;
      border: 2px solid #6366F1; opacity: 0;
      animation: bbPulse 2.2s ease-out infinite;
    }
    @keyframes bbPulse {
      0% { transform: scale(1); opacity: .55; }
      100% { transform: scale(1.5); opacity: 0; }
    }
    body.bb-chat-open .bb-chat-bubble .bb-pulse { display: none; }

    .bb-chat-panel {
      position: fixed; right: 20px; bottom: 92px;
      width: 380px; height: 560px;
      background: white; border-radius: 16px;
      box-shadow: 0 20px 60px rgba(15,23,42,.30);
      display: flex; flex-direction: column;
      z-index: 9999; overflow: hidden;
      transform: translateY(20px) scale(.96); opacity: 0;
      pointer-events: none;
      transition: transform .25s cubic-bezier(.4,0,.2,1), opacity .25s;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }
    body.bb-chat-open .bb-chat-panel {
      transform: translateY(0) scale(1); opacity: 1; pointer-events: auto;
    }
    .bb-chat-header {
      background: linear-gradient(135deg, #0A2540 0%, #1E3A5F 100%);
      color: white; padding: 16px 18px;
      display: flex; align-items: center; gap: 12px;
    }
    .bb-chat-avatar {
      width: 38px; height: 38px; border-radius: 50%;
      background: white; color: #0A2540;
      display: flex; align-items: center; justify-content: center;
      font-weight: 800; font-size: 18px; flex-shrink: 0;
    }
    .bb-chat-headinfo { flex: 1; min-width: 0; }
    .bb-chat-title { font-size: 15px; font-weight: 700; }
    .bb-chat-status {
      font-size: 11px; opacity: .8;
      display: flex; align-items: center; gap: 6px; margin-top: 2px;
    }
    .bb-chat-status::before {
      content: ""; width: 7px; height: 7px;
      background: #10B981; border-radius: 50%;
      box-shadow: 0 0 0 0 rgba(16,185,129,.6);
      animation: bbDot 1.6s infinite;
    }
    @keyframes bbDot {
      0%, 100% { box-shadow: 0 0 0 0 rgba(16,185,129,.6); }
      50% { box-shadow: 0 0 0 5px rgba(16,185,129,0); }
    }

    .bb-chat-messages {
      flex: 1; overflow-y: auto; padding: 16px 14px;
      background: #FAFAFB;
      display: flex; flex-direction: column; gap: 12px;
      scroll-behavior: smooth;
    }
    .bb-msg { display: flex; flex-direction: column; gap: 6px; max-width: 86%; }
    .bb-msg-bot { align-self: flex-start; }
    .bb-msg-user { align-self: flex-end; }
    .bb-bubble {
      padding: 10px 14px; border-radius: 14px;
      font-size: 13.5px; line-height: 1.5;
      word-wrap: break-word; max-width: 100%;
    }
    .bb-msg-bot .bb-bubble {
      background: white; color: #0F172A;
      border: 1px solid #E2E8F0;
      border-bottom-left-radius: 4px;
      box-shadow: 0 1px 2px rgba(0,0,0,.03);
    }
    .bb-msg-user .bb-bubble {
      background: linear-gradient(135deg, #4F46E5, #6366F1);
      color: white;
      border-bottom-right-radius: 4px;
    }
    .bb-chips { display: flex; flex-direction: column; gap: 6px; margin-top: 4px; }
    .bb-chip {
      background: white; border: 1px solid #C7D2FE;
      color: #4F46E5; padding: 8px 12px; border-radius: 10px;
      cursor: pointer; font-size: 12.5px; font-weight: 500;
      text-align: left; transition: all .15s;
      font-family: inherit;
    }
    .bb-chip:hover { background: #EEF2FF; border-color: #6366F1; transform: translateX(2px); }
    .bb-wa-link {
      display: inline-flex; align-items: center; gap: 6px;
      background: #25D366; color: white;
      padding: 8px 14px; border-radius: 8px;
      font-size: 12.5px; font-weight: 700;
      text-decoration: none; margin-top: 4px;
    }
    .bb-wa-link:hover { background: #1EBE5C; color: white; }

    .bb-typing .bb-bubble {
      display: inline-flex; gap: 4px; padding: 12px 14px;
    }
    .bb-typing .bb-bubble span {
      width: 6px; height: 6px; border-radius: 50%;
      background: #94A3B8;
      animation: bbType 1.2s infinite ease-in-out;
    }
    .bb-typing .bb-bubble span:nth-child(2) { animation-delay: .15s; }
    .bb-typing .bb-bubble span:nth-child(3) { animation-delay: .30s; }
    @keyframes bbType {
      0%, 60%, 100% { transform: translateY(0); opacity: .4; }
      30% { transform: translateY(-4px); opacity: 1; }
    }

    .bb-chat-input-wrap {
      display: flex; gap: 8px; padding: 12px 14px;
      border-top: 1px solid #E2E8F0; background: white;
    }
    .bb-chat-input {
      flex: 1; border: 1.5px solid #E2E8F0;
      padding: 10px 14px; border-radius: 999px;
      font-size: 14px; outline: none;
      font-family: inherit;
      transition: border-color .15s;
    }
    .bb-chat-input:focus { border-color: #6366F1; }
    .bb-chat-send {
      width: 40px; height: 40px; border-radius: 50%;
      border: 0; background: linear-gradient(135deg, #4F46E5, #6366F1);
      color: white; font-size: 18px; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: transform .15s;
      flex-shrink: 0;
    }
    .bb-chat-send:hover { transform: scale(1.06); }
    .bb-chat-send:disabled { opacity: .4; cursor: not-allowed; }
    .bb-chat-footer {
      text-align: center; padding: 6px 0;
      font-size: 10px; color: #94A3B8;
      background: white; border-top: 1px solid #F1F5F9;
    }

    /* Mobile responsive */
    @media (max-width: 600px) {
      .bb-chat-panel {
        right: 8px; left: 8px; bottom: 84px;
        width: auto; height: calc(100vh - 110px); max-height: 600px;
      }
      .bb-chat-bubble { right: 16px; bottom: 16px; width: 54px; height: 54px; }
      .bb-chat-bubble svg { width: 24px; height: 24px; }
    }
  `;
  const style = document.createElement("style");
  style.id = "bb-chatbot-css";
  style.textContent = css;
  document.head.appendChild(style);
}

function mountChatbot() {
  if (document.getElementById("bb-chatbot")) return;
  _bbInjectCSS();

  const lang = (typeof getLang === "function") ? getLang() : "az";
  const ui = CHATBOT_UI_STRINGS[lang] || CHATBOT_UI_STRINGS.az;

  const wrap = document.createElement("div");
  wrap.id = "bb-chatbot";
  wrap.innerHTML = `
    <button class="bb-chat-bubble" onclick="_bbToggleChat()" aria-label="AI Köməkçi">
      <span class="bb-pulse"></span>
      <svg class="bb-icon-chat" viewBox="0 0 24 24"><path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-2 12H6v-2h12v2zm0-4H6V8h12v2z"/></svg>
      <svg class="bb-icon-close" viewBox="0 0 24 24"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
    </button>
    <div class="bb-chat-panel" role="dialog" aria-label="${ui.title}">
      <div class="bb-chat-header">
        <div class="bb-chat-avatar">B</div>
        <div class="bb-chat-headinfo">
          <div class="bb-chat-title">${ui.title}</div>
          <div class="bb-chat-status">${ui.status}</div>
        </div>
      </div>
      <div class="bb-chat-messages" id="bb-chat-messages"></div>
      <div class="bb-chat-input-wrap">
        <input class="bb-chat-input" id="bb-chat-input" type="text"
               placeholder="${ui.placeholder}"
               onkeydown="if(event.key==='Enter'){_bbAsk(this.value.trim());event.preventDefault();}">
        <button class="bb-chat-send" onclick="_bbAsk(document.getElementById('bb-chat-input').value.trim())">→</button>
      </div>
      <div class="bb-chat-footer">BizBazar.az · AI Köməkçi</div>
    </div>
  `;
  document.body.appendChild(wrap);
  _bbShowWelcome();

  // Re-render welcome on language change
  window.addEventListener("langchange", () => {
    const newLang = (typeof getLang === "function") ? getLang() : "az";
    const newUi = CHATBOT_UI_STRINGS[newLang] || CHATBOT_UI_STRINGS.az;
    wrap.querySelector(".bb-chat-title").textContent = newUi.title;
    wrap.querySelector(".bb-chat-status").textContent = newUi.status;
    wrap.querySelector(".bb-chat-input").placeholder = newUi.placeholder;
    _bbShowWelcome();
  });
}

// Auto-mount on page load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountChatbot);
} else {
  mountChatbot();
}
