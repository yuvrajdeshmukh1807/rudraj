// Hotel Rudrajya — Maharashtrian & Kolhapuri Restaurant Central Data Layer
// Retaining "Hotel Rudrajya" name while delivering an authentic Maharashtrian dining experience.

export interface MenuItem {
  id: string;
  name: string;
  marathiName: string;
  category: 'breakfast' | 'snacks' | 'veg' | 'nonveg' | 'thali' | 'desserts' | 'beverages';
  price: number;
  isVeg: boolean;
  spiceLevel?: 'Mild' | 'Medium' | 'Spicy' | 'Fiery Kolhapuri';
  description: string;
  image: string;
  isSignature?: boolean;
  serves?: string;
}

export const RESTAURANT = {
  name: 'Hotel Rudrajya',
  marathiName: 'हॉटेल रुद्रराज्य',
  tagline: 'Authentic Maharashtrian Taste, Served with Tradition',
  subTagline: 'अस्सल महाराष्ट्रीयन आणि झणझणीत कोल्हापुरी चव',
  shortDescription:
    'Hotel Rudrajya brings you the royal culinary heritage of Maharashtra — from fiery Kolhapuri Tambda-Pandhra Rassa to comforting Pithla Bhakri and divine Puran Poli.',
  description:
    'At Hotel Rudrajya, food is not merely prepared — it is an ode to Maharashtra’s rich cultural legacy. We use hand-pounded Kolhapuri masalas, cold-pressed groundnut oil, freshly harvested grains for hot Jowar-Bajra bhakris, and slow-cooked earthen preparations that awaken your senses with authentic taste.',
  email: 'contact@hotelrudrajya.com',
  phone: '+91 98220 00000', // Editable sample phone
  whatsapp: '+919822000000', // Editable sample WhatsApp
  address: {
    line1: 'Hotel Rudrajya Restaurant',
    line2: 'Near Highway / Main Road',
    city: 'Kolhapur',
    state: 'Maharashtra',
    pincode: '416001',
    country: 'India',
    full: 'Hotel Rudrajya, Near Highway / Main Road, Kolhapur, Maharashtra – 416001, India',
  },
  timings: {
    lunch: '11:30 am to 3:30 pm',
    dinner: '7:00 pm to 11:00 pm',
    days: 'Open all 7 days',
  },
  social: {
    instagram: '#',
    facebook: '#',
    twitter: '#',
  },
  mapEmbedUrl: '', // Add Google Maps embed URL here
  established: 'Traditional Heritage',
} as const;

// Backward-compatible alias
export const HOTEL = RESTAURANT;

export const SIGNATURE_DISHES: MenuItem[] = [
  {
    id: 'kolhapuri-misal',
    name: 'Special Kolhapuri Misal Pav',
    marathiName: 'झणझणीत कोल्हापुरी मिसळ पाव',
    category: 'snacks',
    price: 120,
    isVeg: true,
    spiceLevel: 'Fiery Kolhapuri',
    description:
      'Sprouted moth beans cooked in authentic spicy Kolhapuri Kat (tarri), crowned with crispy farsan, fresh coriander, diced onions, and served with 2 warm soft pavs and a lemon wedge.',
    image: '/kolhapuri-misal.jpg',
    isSignature: true,
    serves: '1 Person',
  },
  {
    id: 'pithla-bhakri',
    name: 'Gavran Pithla Bhakri Thali',
    marathiName: 'गावरान पिठलं भाकरी आणि खर्डा',
    category: 'veg',
    price: 180,
    isVeg: true,
    spiceLevel: 'Spicy',
    description:
      'Velvety stone-ground besan pithla tempered with mustard and garlic, paired with 2 hot fire-roasted Jowar bhakris, spicy roasted mirchi thecha (kharda), fresh white butter, and raw onion.',
    image: '/pithla-bhakri.jpg',
    isSignature: true,
    serves: '1 Person',
  },
  {
    id: 'tambda-pandhra-rassa',
    name: 'Kolhapuri Tambda & Pandhra Rassa Feast',
    marathiName: 'तांबडा-पांढरा रस्सा आणि सुक्का चिकन',
    category: 'nonveg',
    price: 380,
    isVeg: false,
    spiceLevel: 'Fiery Kolhapuri',
    description:
      'The legendary Kolhapuri duo: fiery red chili-based Tambda Rassa paired with creamy, fragrant coconut-milk Pandhra Rassa, tender Sukka Chicken, 2 hot Bhakris, and steamed Indrayani rice.',
    image: '/kolhapuri-rassa.jpg',
    isSignature: true,
    serves: '1-2 Persons',
  },
  {
    id: 'maharashtrian-veg-thali',
    name: 'Shahi Maharashtrian Veg Thali',
    marathiName: 'शाही महाराष्ट्रीयन व्हेज थाळी',
    category: 'thali',
    price: 260,
    isVeg: true,
    spiceLevel: 'Medium',
    description:
      'A lavish spread: Bharli Vangi, Pithla, Dal/Amti, 2 Puran Poli or Bhakris, steamed rice, Kothimbir Vadi, Solkadhi, roasted papad, chutney, thecha, and fresh salad.',
    image: '/restaurant-hero.jpg',
    isSignature: true,
    serves: '1 Person',
  },
  {
    id: 'puran-poli-thali',
    name: 'Sajuk Tupatli Puran Poli',
    marathiName: 'साजूक तुपातली पुरणपोळी थाळी',
    category: 'desserts',
    price: 160,
    isVeg: true,
    spiceLevel: 'Mild',
    description:
      'Two soft golden handcrafted puran polis stuffed with chana dal, jaggery and cardamom, drenched in pure yellow cow ghee (sajuk tup), accompanied by spicy Katachi Amti and warm milk.',
    image: '/puran-poli.jpg',
    isSignature: true,
    serves: '1-2 Persons',
  },
  {
    id: 'vada-pav-poha',
    name: 'Mumbai Batata Vada Pav & Poha Combo',
    marathiName: 'गरमागरम वडापाव आणि कांदे पोहे',
    category: 'breakfast',
    price: 90,
    isVeg: true,
    spiceLevel: 'Medium',
    description:
      'Crisp golden potato vada in a fresh pav with dry garlic chutney and fried green chili, coupled with a steaming plate of turmeric Kanda Poha garnished with fresh coconut and crunchy peanuts.',
    image: '/vada-pav-poha.jpg',
    isSignature: true,
    serves: '1 Person',
  },
  {
    id: 'bharli-vangi',
    name: 'Kolhapuri Bharli Vangi',
    marathiName: 'खमंग भरली वांगी',
    category: 'veg',
    price: 190,
    isVeg: true,
    spiceLevel: 'Spicy',
    description:
      'Tender baby eggplants stuffed with a roasted peanut, sesame, dry coconut, and goda masala paste, simmered slowly to perfection. Best enjoyed with hot Jowar bhakri.',
    image: '/bharli-vangi-solkadhi.jpg',
    isSignature: true,
    serves: '1-2 Persons',
  },
  {
    id: 'solkadhi-glass',
    name: 'Kokum & Coconut Solkadhi',
    marathiName: 'थंडगार पाचक सोलकढी',
    category: 'beverages',
    price: 60,
    isVeg: true,
    spiceLevel: 'Mild',
    description:
      'The quintessential Maharashtrian digestive elixir crafted from fresh coconut milk, wild Amsul (kokum), crushed garlic, green chili, and cumin, garnished with mint.',
    image: '/bharli-vangi-solkadhi.jpg',
    isSignature: true,
    serves: '1 Person',
  },
];

export const FULL_MENU: MenuItem[] = [
  ...SIGNATURE_DISHES,
  // Breakfast items
  {
    id: 'kanda-poha',
    name: 'Dadpe Kanda Poha',
    marathiName: 'कांदे पोहे',
    category: 'breakfast',
    price: 50,
    isVeg: true,
    spiceLevel: 'Mild',
    description: 'Flattened rice tempered with mustard, green chilies, onions, curry leaves, roasted peanuts, and freshly grated coconut.',
    image: '/vada-pav-poha.jpg',
  },
  {
    id: 'sabudana-khichdi',
    name: 'Maharashtrian Sabudana Khichdi',
    marathiName: 'साबुदाणा खिचडी',
    category: 'breakfast',
    price: 70,
    isVeg: true,
    spiceLevel: 'Mild',
    description: 'Fluffy tapioca pearls cooked with roasted peanut powder, cumin, potatoes, and green chilies, served with fresh curd.',
    image: '/vada-pav-poha.jpg',
  },
  {
    id: 'sabudana-vada',
    name: 'Crispy Sabudana Vada (2 Pcs)',
    marathiName: 'कुरकुरीत साबुदाणा वडा',
    category: 'breakfast',
    price: 80,
    isVeg: true,
    spiceLevel: 'Medium',
    description: 'Deep-fried golden sabudana patties with mashed potatoes and peanuts, served with sweet peanut-curd chutney.',
    image: '/vada-pav-poha.jpg',
  },
  {
    id: 'thalipeeth',
    name: 'Bhajani Thalipeeth with Loni',
    marathiName: 'खमंग भाजणी थालीपीठ आणि लोणी',
    category: 'breakfast',
    price: 90,
    isVeg: true,
    spiceLevel: 'Medium',
    description: 'Multi-grain spiced pancake made from roasted grains (bhajani), served smoking hot with fresh homemade white butter and thecha.',
    image: '/pithla-bhakri.jpg',
  },
  // Snacks
  {
    id: 'vada-pav-single',
    name: 'Classic Batata Vada Pav (2 Pcs)',
    marathiName: 'अस्सल बटाटा वडापाव',
    category: 'snacks',
    price: 50,
    isVeg: true,
    spiceLevel: 'Medium',
    description: 'Two golden spiced potato fritters served inside fresh bakery pav with hot fiery garlic chutney and fried chilies.',
    image: '/vada-pav-poha.jpg',
  },
  {
    id: 'kothimbir-vadi',
    name: 'Crispy Kothimbir Vadi (6 Pcs)',
    marathiName: 'कोथिंबीर वडी',
    category: 'snacks',
    price: 90,
    isVeg: true,
    spiceLevel: 'Medium',
    description: 'Steamed and golden-fried savory coriander-besan bites sprinkled with roasted sesame seeds.',
    image: '/kolhapuri-misal.jpg',
  },
  {
    id: 'aluvadi',
    name: 'Patra / Alu Vadi',
    marathiName: 'अळूची वडी',
    category: 'snacks',
    price: 90,
    isVeg: true,
    spiceLevel: 'Medium',
    description: 'Colocasia leaves layered with spiced tangy-sweet gram flour paste, steamed, sliced, and shallow-fried with sesame.',
    image: '/kolhapuri-misal.jpg',
  },
  // Veg Mains
  {
    id: 'zunka-bhakri',
    name: 'Gavran Zunka Bhakri',
    marathiName: 'गावरान झुणका भाकरी',
    category: 'veg',
    price: 170,
    isVeg: true,
    spiceLevel: 'Spicy',
    description: 'Dry roasted gram flour stir-fried with plenty of onions, garlic, mustard seeds, and chilies, served with 2 hot Jowar bhakris and thecha.',
    image: '/pithla-bhakri.jpg',
  },
  {
    id: 'shev-bhaji',
    name: 'Khandeshi Shev Bhaji',
    marathiName: 'खानदेशी शेव भाजी',
    category: 'veg',
    price: 160,
    isVeg: true,
    spiceLevel: 'Fiery Kolhapuri',
    description: 'Spicy red-onion and roasted coconut gravy topped with crunchy gathiya shev and fresh coriander.',
    image: '/bharli-vangi-solkadhi.jpg',
  },
  {
    id: 'dal-vangi',
    name: 'Maharashtrian Katachi Amti',
    marathiName: 'कटाची आमटी आणि भात',
    category: 'veg',
    price: 130,
    isVeg: true,
    spiceLevel: 'Medium',
    description: 'Traditional spiced aromatic lentil water curry tempered with goda masala, coconut, and curry leaves, served with steamed rice.',
    image: '/puran-poli.jpg',
  },
  {
    id: 'masale-bhat',
    name: 'Shahi Masale Bhat',
    marathiName: 'शाही मसाले भात',
    category: 'veg',
    price: 150,
    isVeg: true,
    spiceLevel: 'Medium',
    description: 'Fragrant basmati rice cooked with fresh ivy gourd (tindli), green peas, goda masala, whole spices, and garnished with fresh grated coconut.',
    image: '/restaurant-hero.jpg',
  },
  // Non-Veg Mains
  {
    id: 'chicken-kolhapuri',
    name: 'Chicken Kolhapuri Handi',
    marathiName: 'चिकन कोल्हापुरी हंडी',
    category: 'nonveg',
    price: 280,
    isVeg: false,
    spiceLevel: 'Fiery Kolhapuri',
    description: 'Tender chicken pieces cooked in roasted dry-coconut, sesame, and signature Kolhapuri Lavangi chili masala gravy.',
    image: '/kolhapuri-rassa.jpg',
  },
  {
    id: 'mutton-sukka',
    name: 'Gavran Mutton Sukka',
    marathiName: 'गावरान मटण सुक्का',
    category: 'nonveg',
    price: 360,
    isVeg: false,
    spiceLevel: 'Fiery Kolhapuri',
    description: 'Tender bone-in mutton dry roasted with caramelized onions, stone-ground black masala, and fresh coriander leaves.',
    image: '/kolhapuri-rassa.jpg',
  },
  {
    id: 'mutton-thali',
    name: 'Special Kolhapuri Mutton Thali',
    marathiName: 'स्पेशल कोल्हापुरी मटण थाळी',
    category: 'thali',
    price: 420,
    isVeg: false,
    spiceLevel: 'Fiery Kolhapuri',
    description: 'Mutton Sukka, unlimited Tambda Rassa, unlimited Pandhra Rassa, 2 Jowar Bhakris, steamed Indrayani rice, and onion salad.',
    image: '/kolhapuri-rassa.jpg',
  },
  // Desserts
  {
    id: 'ukadiche-modak',
    name: 'Steamed Ukadiche Modak (2 Pcs)',
    marathiName: 'उकडीचे मोदक (२ नग)',
    category: 'desserts',
    price: 120,
    isVeg: true,
    spiceLevel: 'Mild',
    description: 'Steamed rice flour dumplings stuffed with fresh grated coconut, organic jaggery, cardamom, and drizzled with warm saffron ghee.',
    image: '/puran-poli.jpg',
  },
  {
    id: 'shrikhand-puri',
    name: 'Amrakhand / Shrikhand with Puri',
    marathiName: 'श्रीखंड / आम्रखंड आणि पुरी',
    category: 'desserts',
    price: 140,
    isVeg: true,
    spiceLevel: 'Mild',
    description: 'Thick strained sweetened yogurt flavored with saffron, cardamom, and pistachios, served with 4 puffed hot puris.',
    image: '/puran-poli.jpg',
  },
  // Beverages
  {
    id: 'masala-taak',
    name: 'Gavran Masala Taak (Buttermilk)',
    marathiName: 'गावरान मसाला ताक',
    category: 'beverages',
    price: 40,
    isVeg: true,
    spiceLevel: 'Mild',
    description: 'Chilled hand-churned spiced buttermilk with crushed ginger, green chili, roasted cumin powder, and fresh coriander.',
    image: '/bharli-vangi-solkadhi.jpg',
  },
  {
    id: 'cutting-chai',
    name: 'Special Elaichi Masala Chai',
    marathiName: 'स्पेशल मसाला चहा',
    category: 'beverages',
    price: 25,
    isVeg: true,
    spiceLevel: 'Mild',
    description: 'Brewed with crushed ginger, green cardamom, cloves, and full-cream milk in traditional brass handi.',
    image: '/vada-pav-poha.jpg',
  },
];

export const MENU_CATEGORIES = [
  { id: 'all', label: 'All Dishes', marathi: 'सर्व पदार्थ' },
  { id: 'breakfast', label: 'Breakfast', marathi: 'सकाळचा नाश्ता' },
  { id: 'snacks', label: 'Snacks and Street Food', marathi: 'मिसळ आणि स्नॅक्स' },
  { id: 'veg', label: 'Maharashtrian Vegetarian', marathi: 'महाराष्ट्रीयन शाकाहारी' },
  { id: 'nonveg', label: 'Maharashtrian Non-Vegetarian', marathi: 'कोल्हापुरी मांसाहारी' },
  { id: 'thali', label: 'Thalis and Combos', marathi: 'शाही थाळी आणि कॉम्बो' },
  { id: 'desserts', label: 'Traditional Desserts', marathi: 'पारंपरिक गोडधोड' },
  { id: 'beverages', label: 'Beverages', marathi: 'थंडगार पेये' },
] as const;

export const DINING_EXPERIENCE = [
  {
    icon: 'Flame',
    title: 'चुलीवरची अस्सल चव',
    subtitle: 'Chulha & Wood-Fired Essence',
    desc: 'Traditional slow cooking that infuses authentic smoky aroma into our rassas, pithla, and curries.',
  },
  {
    icon: 'Utensils',
    title: 'घरगुती कोल्हापुरी मसाले',
    subtitle: 'Stone-Ground Masalas',
    desc: 'No artificial additives or colors. Handcrafted Kanda-Lahsuni and Goda masalas ground fresh every week.',
  },
  {
    icon: 'Wheat',
    title: 'गरमागरम भाकरी',
    subtitle: 'Fresh Jowar & Bajra Bhakri',
    desc: 'Patted by hand and baked to golden perfection right in front of you on iron tawas.',
  },
  {
    icon: 'HeartHandshake',
    title: 'अतिथी देवो भव',
    subtitle: 'Warm Hospitality',
    desc: 'Genuine Maharashtrian hospitality where every guest is welcomed with respect, warmth, and generous servings.',
  },
  {
    icon: 'Sparkles',
    title: 'साजूक तूप आणि शुद्ध घटक',
    subtitle: 'Pure Desi Ghee & Quality',
    desc: 'Pure A2 cow ghee, cold-pressed groundnut oils, and farm-fresh local produce sourced directly from farmers.',
  },
  {
    icon: 'Users',
    title: 'कौटुंबिक बैठक व्यवस्था',
    subtitle: 'Family-Friendly Dining',
    desc: 'Spacious AC dining halls, traditional floor-seating options, and private family dining spaces.',
  },
];

export const GALLERY_IMAGES = [
  {
    id: 1,
    src: '/restaurant-hero.jpg',
    thumb: '/restaurant-hero.jpg',
    title: 'Royal Maharashtrian Thali',
    marathi: 'शाही महाराष्ट्रीयन थाळी',
    desc: 'Complete feast with Puran Poli, Bhakri, Rassa, Pithla, and Solkadhi',
    category: 'Thali',
  },
  {
    id: 2,
    src: '/kolhapuri-misal.jpg',
    thumb: '/kolhapuri-misal.jpg',
    title: 'Special Kolhapuri Misal Pav',
    marathi: 'झणझणीत कोल्हापुरी मिसळ पाव',
    desc: 'Fiery tarri with fresh farsan, chopped onions, and soft pav',
    category: 'Snacks',
  },
  {
    id: 3,
    src: '/pithla-bhakri.jpg',
    thumb: '/pithla-bhakri.jpg',
    title: 'Gavran Pithla Bhakri & Thecha',
    marathi: 'गावरान पिठलं भाकरी आणि खर्डा',
    desc: 'Rustic Jowar bhakri with savory besan pithla and spicy green thecha',
    category: 'Main Course',
  },
  {
    id: 4,
    src: '/kolhapuri-rassa.jpg',
    thumb: '/kolhapuri-rassa.jpg',
    title: 'Tambda & Pandhra Rassa with Sukka',
    marathi: 'तांबडा-पांढरा रस्सा आणि सुक्का',
    desc: 'Legendary twin rassas served with tender chicken sukka and steamed rice',
    category: 'Kolhapuri Non-Veg',
  },
  {
    id: 5,
    src: '/puran-poli.jpg',
    thumb: '/puran-poli.jpg',
    title: 'Sajuk Tupatli Puran Poli',
    marathi: 'साजूक तुपातली पुरणपोळी',
    desc: 'Melted pure cow ghee drizzled over sweet lentil-stuffed puran poli',
    category: 'Desserts',
  },
  {
    id: 6,
    src: '/vada-pav-poha.jpg',
    thumb: '/vada-pav-poha.jpg',
    title: 'Batata Vada Pav & Kanda Poha',
    marathi: 'गरमागरम वडापाव आणि पोहे',
    desc: 'Classic Mumbai style batata vada and freshly tempered Kanda Poha',
    category: 'Breakfast',
  },
  {
    id: 7,
    src: '/bharli-vangi-solkadhi.jpg',
    thumb: '/bharli-vangi-solkadhi.jpg',
    title: 'Bharli Vangi with Solkadhi',
    marathi: 'भरली वांगी आणि थंडगार सोलकढी',
    desc: 'Stuffed baby eggplants with chilled digestive kokum Solkadhi',
    category: 'Specialities',
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Aniket Kulkarni',
    location: 'Pune',
    rating: 5,
    comment:
      'Hotel Rudrajya serves the best Tambda-Pandhra rassa outside Kolhapur! The mutton sukka was tender and the pandhra rassa had that authentic aromatic coconut milk flavor without being oily. True culinary pride of Maharashtra.',
    dish: 'Kolhapuri Non-Veg Feast',
  },
  {
    id: 2,
    name: 'Sunita Deshmukh',
    location: 'Mumbai',
    rating: 5,
    comment:
      'The Pithla Bhakri with freshly made thecha and white butter reminded me of my aaji’s home in Satara. The Jowar bhakris were piping hot and paper thin. Outstanding hospitality for our entire family.',
    dish: 'Gavran Pithla Bhakri Thali',
  },
  {
    id: 3,
    name: 'Rajesh Patil',
    location: 'Kolhapur',
    rating: 5,
    comment:
      'Being a Kolhapuri, I am very picky about Misal. Hotel Rudrajya nails the fiery kat balance with authentic farsan and spicy cut! Must-visit for anyone craving authentic Maharashtrian taste.',
    dish: 'Special Kolhapuri Misal Pav',
  },
  {
    id: 4,
    name: 'Priyanka Shinde',
    location: 'Thane',
    rating: 5,
    comment:
      'Their Puran Poli with pure desi ghee and Katachi Amti was heavenly! Very clean restaurant, generous portions, and courteous staff who explain the dishes with genuine pride.',
    dish: 'Puran Poli & Katachi Amti',
  },
];

export const NAV_LINKS = [
  { label: 'Home', href: '#home', marathi: 'मुख्य' },
  { label: 'Specialities', href: '#specialities', marathi: 'खास पदार्थ' },
  { label: 'Our Story', href: '#about', marathi: 'आमच्याबद्दल' },
  { label: 'Experience', href: '#experience', marathi: 'वैशिष्ट्ये' },
  { label: 'Gallery', href: '#gallery', marathi: 'छायाचित्रे' },
  { label: 'Contact', href: '#contact', marathi: 'संपर्क' },
];
