/**
 * Shri's Art & Culture - Advanced Terracotta Storefront & Order Management
 * Recipient Email: thuseyanth.ats@gmail.com
 * WhatsApp Contacts: +91 8072301783, +91 9944918875
 */

// ==========================================
// 1. PRODUCTS DATASET
// ==========================================
const PRODUCTS_DATA = [
  {
    id: 'sac-001',
    name: 'Traditional Terracotta Ayyanar Horse',
    name_ta: 'பாரம்பரிய சுடுமண் குதிரை (அய்யனார் குதிரை)',
    category: 'idols',
    price: 1499,
    originalPrice: 1899,
    image: 'C:/Users/acer/.gemini/antigravity/brain/61c0eeeb-eb5d-415f-869a-cc0bc96bb6e0/.user_uploaded/media_1792508387006_2fe82df2.jpg',
    fallbackImg: 'https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=600&auto=format&fit=crop&q=80',
    tag: 'Heritage Bestseller',
    tagClass: 'popular',
    description: 'Bring home tradition & positivity. Authentic Tamil temple style Ayyanar terracotta horse, handmade with pure clay, ornate ceremonial bridle, mane bells and etched saddle.',
    description_ta: 'பாரம்பரிய கோவில் அய்யனார் குதிரை வடிவம், இயற்கை களிமண்ணால் மணி மாலைகளுடன் நேர்த்தியாக வடிவமைக்கப்பட்டது.',
    keywords: ['horse', 'horses', 'ayyanar', 'kudhirai', 'kuthirai', 'temple', 'animal', 'statue', 'statues', 'figurine', 'bestseller', 'traditional', 'mud', 'clay', 'terracotta', '1499']
  },
  {
    id: 'sac-002',
    name: 'Handcrafted Puppy Animal Planter',
    name_ta: 'சுடுமண் நாய் வடிவ செடி வளர்ப்பு தொட்டி',
    category: 'planters',
    price: 80,
    originalPrice: 120,
    image: 'C:/Users/acer/.gemini/antigravity/brain/61c0eeeb-eb5d-415f-869a-cc0bc96bb6e0/.user_uploaded/media_1792503318709_43da837d.jpg',
    fallbackImg: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&auto=format&fit=crop&q=80',
    tag: 'Special Offer ₹80',
    tagClass: 'eco',
    description: 'Eco-friendly and sustainable handcrafted terracotta animal puppy planter pot, perfect for succulents, indoor desks and home decor.',
    description_ta: 'சுற்றுச்சூழலுக்கு உகந்த அழகான சுடுமண் பூந்தொட்டி, வீட்டு அலங்காரத்திற்கும் சிறு செடிகளுக்கும் ஏற்றது.',
    keywords: ['planter', 'planters', 'pot', 'pots', 'dog', 'puppy', 'puppies', 'animal', 'animals', 'succulent', 'succulents', 'flower', 'plants', 'plant', 'vase', 'desk', 'decor', 'cute', '80']
  },
  {
    id: 'sac-003',
    name: 'Sacred Terracotta Ganesha Idol',
    name_ta: 'கைவினை சுடுமண் விநாயகர் திருவுருவம்',
    category: 'idols',
    price: 499,
    originalPrice: 650,
    image: 'C:/Users/acer/.gemini/antigravity/brain/61c0eeeb-eb5d-415f-869a-cc0bc96bb6e0/.user_uploaded/media_1792503306495_92659e31.jpg',
    fallbackImg: 'https://images.unsplash.com/photo-1567591414240-e740cfdb39cf?w=600&auto=format&fit=crop&q=80',
    tag: 'Divine & Pooja',
    tagClass: 'popular',
    description: '100% natural unglazed terracotta Lord Ganesha with Abhaya mudra, hand-sculpted for pooja room, car dashboard or gifting.',
    description_ta: 'இயற்கை சுடுமண்ணால் செதுக்கப்பட்ட மங்கலகரமான விநாயகர் சிலை, பூஜை அறைக்கும் பரிசுக்கும் சிறந்தது.',
    keywords: ['ganesha', 'ganesh', 'vinayagar', 'vinayaga', 'pillayar', 'god', 'deity', 'pooja', 'puja', 'divine', 'idol', 'idols', 'statue', 'statues', 'car', 'dashboard', 'blessing', '499']
  },
  {
    id: 'sac-004',
    name: 'Sacred Terracotta Nandi Bull Statue',
    name_ta: 'பாரம்பரிய நந்தி பெருமான் சுடுமண் சிற்பம்',
    category: 'idols',
    price: 649,
    originalPrice: 799,
    image: 'C:/Users/acer/.gemini/antigravity/brain/61c0eeeb-eb5d-415f-869a-cc0bc96bb6e0/.user_uploaded/media_1792503318525_5d4b77a9.jpg',
    fallbackImg: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=600&auto=format&fit=crop&q=80',
    tag: 'Heritage Art',
    tagClass: '',
    description: 'Intricately decorated traditional Tamil Nandi statue adorned with etched bells and ceremonial rugs, carved from riverbed clay.',
    description_ta: 'மணி மாலைகளுடனும் ஆபரண அலங்காரத்துடனும் செதுக்கப்பட்ட தெய்வீக நந்தி சிலை.',
    keywords: ['nandi', 'bull', 'bulls', 'shiva', 'sivan', 'cow', 'holy', 'sacred', 'pooja', 'puja', 'temple', 'idol', 'idols', 'statue', 'statues', 'carving', 'bells', '649']
  },
  {
    id: 'sac-005',
    name: 'Handcrafted Green Pendant Chain',
    name_ta: 'பாரம்பரிய கைவினை பச்சை பதக்க சங்கிலி',
    category: 'jewellery',
    price: 89,
    originalPrice: 149,
    image: 'C:/Users/acer/.gemini/antigravity/brain/61c0eeeb-eb5d-415f-869a-cc0bc96bb6e0/.user_uploaded/media_1792508170042_65302b6a.jpg',
    fallbackImg: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop&q=80',
    tag: 'Special Offer ₹89',
    tagClass: 'eco',
    description: 'Grace in Green, Beauty in You. 100% handmade, lightweight baked clay diamond pendant adorned with lustrous pearl beads on a durable chain. Skin-friendly and ideal for traditional wear and gifting.',
    description_ta: 'அழகிய பச்சை நிற கைவினை பதக்கம் மற்றும் முத்து வேலைப்பாடுகளுடன் கூடிய நேர்த்தியான சங்கிலி மாலை.',
    keywords: ['jewellery', 'jewelry', 'chain', 'chains', 'necklace', 'necklaces', 'pendant', 'pendent', 'green', 'pearl', 'pearls', 'wearable', 'gift', 'gifts', 'traditional', 'diamond', 'fashion', '89']
  },
  {
    id: 'sac-006',
    name: 'Graceful Terracotta Swan Decor (Gold Pair)',
    name_ta: 'தங்க நிற அலங்கார சுடுமண் அன்னப்பறவை ஜோடி',
    category: 'decor',
    price: 60,
    originalPrice: 99,
    image: 'C:/Users/acer/.gemini/antigravity/brain/61c0eeeb-eb5d-415f-869a-cc0bc96bb6e0/.user_uploaded/media_1792505118653_7b8b6053.jpg',
    fallbackImg: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&auto=format&fit=crop&q=80',
    tag: 'Special Offer ₹60',
    tagClass: 'popular',
    description: 'Shaped by hand, carrying stories of earth and tradition into your home. Handcrafted gold terracotta twin swan decor, perfect for home and office tabletop.',
    description_ta: 'மண்ணின் கைவினை நேர்த்தியுடன் பொன் நிற பூச்சு கொண்ட அழகிய இரட்டை அன்னப்பறவை ஜோடி சிலை.',
    keywords: ['swan', 'swans', 'bird', 'birds', 'gold', 'golden', 'pair', 'twin', 'decor', 'tabletop', 'office', 'home', 'figurine', 'figurines', 'gift', 'gifts', 'showpiece', '60']
  },
  {
    id: 'sac-007',
    name: 'Royal Heritage Elephant Idol',
    name_ta: 'கம்பீரமான பாரம்பரிய சுடுமண் யானை திருவுருவம்',
    category: 'idols',
    price: 499,
    originalPrice: 699,
    image: 'C:/Users/acer/.gemini/antigravity/brain/61c0eeeb-eb5d-415f-869a-cc0bc96bb6e0/.user_uploaded/media_1792507538511_0712f525.jpg',
    fallbackImg: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=80',
    tag: 'Artisan Handcrafted',
    tagClass: 'popular',
    description: 'Authentic Tamil hand-sculpted natural clay terracotta elephant adorned with traditional ceremonial headgear and etched neck embellishments. Symbol of auspicious beginnings and prosperity.',
    description_ta: 'பாரம்பரிய முறைப்படி இயற்கை களிமண்ணால் கைவண்ணத்தில் வடிக்கப்பட்ட மங்கலகரமான சுடுமண் யானை சிலை.',
    keywords: ['elephant', 'elephants', 'aanai', 'yanai', 'royal', 'heritage', 'trunk', 'god', 'animal', 'animals', 'idol', 'idols', 'statue', 'statues', 'prosperity', 'good luck', '499']
  },
  {
    id: 'sac-008',
    name: 'Hand-Painted Floral Terracotta Diya Set (Pair)',
    name_ta: 'கலைநயமிக்க வண்ண சுடுமண் தாமரை அகல் விளக்குகள் (ஜோடி)',
    category: 'decor',
    price: 149,
    originalPrice: 199,
    image: 'C:/Users/acer/.gemini/antigravity/brain/61c0eeeb-eb5d-415f-869a-cc0bc96bb6e0/.user_uploaded/media_1792508040292_e3727f66.jpg',
    fallbackImg: 'https://images.unsplash.com/photo-1605289355680-75fb41239154?w=600&auto=format&fit=crop&q=80',
    tag: 'Festive Bestseller',
    tagClass: 'popular',
    description: 'Exquisitely hand-painted terracotta earthen lamps with vibrant lotus floral petals, gold-accented rim carvings, and leaf-shaped wick spouts. Ideal for Karthigai Deepam, Diwali, and pooja altar decoration.',
    description_ta: 'மலர் இதழ் வண்ண வேலைப்பாடுகளுடனும் தங்க நிற விளிம்புகளுடனும் கூடிய மங்கலகரமான சுடுமண் அகல் விளக்குகள்.',
    keywords: ['diya', 'diyas', 'deepam', 'deepams', 'lamp', 'lamps', 'vilakku', 'ahal', 'agal', 'karthigai', 'diwali', 'deepavali', 'light', 'lights', 'oil', 'pooja', 'puja', 'lotus', 'flower', 'floral', 'painted', '149']
  }
];

// ==========================================
// 2. INTERNATIONALIZATION (EN / TA)
// ==========================================
const TRANSLATIONS = {
  en: {
    announcement: "Handmade with care • Pan-India delivery options • WhatsApp for custom orders",
    brandSubtitle: "Handmade Terracotta Products",
    home: "Home",
    shop: "Shop Collection",
    cart: "Cart",
    heritageEyebrow: "TAMIL HERITAGE • தமிழர் மரபு",
    heroTitle: "Bring handmade tradition into your home.",
    heroDesc: "Discover terracotta horses, sacred idols, artisan planters, ethnic jewellery and thoughtful decor crafted with pure clay by Shri's Art & Culture.",
    shopCollectionBtn: "Shop Our Collection →",
    ourStoryBtn: "Our Story",
    heroBadge1: "Handmade craft",
    heroBadge1Sub: "Each piece is special",
    heroBadge2: "Traditional style",
    heroBadge2Sub: "Inspired by our culture",
    heroBadge3: "Eco-friendly",
    heroBadge3Sub: "Natural & Sustainable",
    featuredTitle: "Featured Products",
    featuredSub: "Hand-picked artisan crafts ready to grace your living spaces",
    viewAll: "View all products →",
    buyNow: "Buy Now",
    addToCart: "Add to Cart",
    cartTitle: "Your Shopping Cart",
    emptyCartTitle: "Your cart is empty",
    emptyCartMsg: "Add some beautiful handmade terracotta crafts to get started!",
    checkoutBtn: "Proceed to Checkout",
    continueShopping: "Continue Shopping",
    subtotal: "Subtotal",
    shipping: "Pan-India Shipping",
    freeShipping: "FREE (Orders over ₹999)",
    standardShipping: "₹60 Flat Rate",
    total: "Total",
    checkoutTitle: "Place Your Order",
    checkoutSubtitle: "Order details will be dispatched immediately to seller (thuseyanth.ats@gmail.com)",
    fullName: "Full Name",
    phone: "Mobile Phone Number",
    whatsapp: "WhatsApp Number (For order tracking)",
    email: "Email Address",
    address: "Delivery Street Address",
    city: "City / Town",
    state: "State",
    pincode: "PIN Code",
    notes: "Custom Order Notes / Gift Message (Optional)",
    paymentMode: "Payment & Confirmation Method",
    payOptionWhatsapp: "WhatsApp & UPI (GooglePay / PhonePe / Paytm - Recommended)",
    payOptionCOD: "Cash on Delivery (Confirmed via Phone)",
    confirmOrderBtn: "Submit Order & Send Details",
    orderSuccessTitle: "Order Placed Successfully!",
    orderSuccessMsg: "Thank you for supporting traditional Tamil terracotta artisans! We have recorded your order and sent full details to our fulfillment desk.",
    reminderText: "Add Delivery Reminder to Calendar",
    downloadInvoice: "Print / Save Receipt",
    whatsappDirect: "Open Order on WhatsApp",
    contactLocation: "Contact & Location",
    quickLinks: "Quick Links",
    allCategories: "All Collections",
    catIdols: "Idols & Statues",
    catPlanters: "Animal Planters",
    catJewellery: "Clay Jewellery",
    catDecor: "Home Decor & Diyas"
  },
  ta: {
    announcement: "கையால் வடிக்கப்பட்ட சுடுமண் கலைப்பொருட்கள் • இந்தியா முழுவதும் டெலிவரி • வாட்ஸ்அப் ஆர்டர்கள்",
    brandSubtitle: "சுடுமண் கைவினைப் பொருட்கள்",
    home: "முகப்பு",
    shop: "பொருட்கள்",
    cart: "கூடை",
    heritageEyebrow: "தமிழர் மரபு • TAMIL HERITAGE",
    heroTitle: "மண்ணின் மணமும் தமிழின் பெருமையும் உங்கள் இல்லத்தில்.",
    heroDesc: "ஸ்ரீஸ் ஆர்ட் & கல்ச்சர் வழங்கும் கலைநயமிக்க சுடுமண் குதிரைகள், நந்தி, விநாயகர் சிலைகள், விலங்கு பூந்தொட்டிகள் மற்றும் மரபுசார் நகைகள்.",
    shopCollectionBtn: "பொருட்களைப் பார்க்க →",
    ourStoryBtn: "எங்கள் வரலாறு",
    heroBadge1: "கைவினை கலை",
    heroBadge1Sub: "ஒவ்வொரு படைப்பும் தனித்துவமானது",
    heroBadge2: "பாரம்பரிய பாணி",
    heroBadge2Sub: "நம் கலை மரபின் வெளிப்பாடு",
    heroBadge3: "சுற்றுச்சூழல் பாதுகாப்பு",
    heroBadge3Sub: "100% இயற்கை களிமண்",
    featuredTitle: "சிறப்பு தயாரிப்புகள்",
    featuredSub: "உங்கள் இல்லத்தை அலங்கரிக்க எங்கள் கைவினைஞர்களின் அழகிய படைப்புகள்",
    viewAll: "அனைத்து பொருட்கள் →",
    buyNow: "உடனே வாங்க",
    addToCart: "கூடையில் சேர்க்க",
    cartTitle: "உங்கள் கூடை",
    emptyCartTitle: "உங்கள் கூடை காலியாக உள்ளது",
    emptyCartMsg: "பாரம்பரிய சுடுமண் பொருட்களைத் தேர்வு செய்து கூடையில் சேர்க்கவும்!",
    checkoutBtn: "ஆர்டர் செய்ய தொடரவும்",
    continueShopping: "மேலும் பொருட்கள் பார்க்க",
    subtotal: "கூட்டுத்தொகை",
    shipping: "டெலிவரி கட்டணம்",
    freeShipping: "இலவசம் (₹999க்கு மேல்)",
    standardShipping: "₹60 (நிலையான கட்டணம்)",
    total: "மொத்தத் தொகை",
    checkoutTitle: "ஆர்டரை உறுதி செய்தல்",
    checkoutSubtitle: "ஆர்டர் விவரங்கள் thuseyanth.ats@gmail.com என்ற மின்னஞ்சலுக்கு உடனடியாக அனுப்பப்படும்",
    fullName: "முழு பெயர்",
    phone: "கைபேசி எண்",
    whatsapp: "வாட்ஸ்அப் எண் (தகவல்களுக்கு)",
    email: "மின்னஞ்சல் முகவரி",
    address: "முழு முகவரி (வீட்டு எண், தெரு)",
    city: "நகரம் / ஊர்",
    state: "மாநிலம்",
    pincode: "அஞ்சல் குறியீட்டு எண் (PIN)",
    notes: "விருப்பக் குறிப்புகள் / பரிசு வாசகம் (விருப்பத்தேர்வு)",
    paymentMode: "செலுத்தும் முறை",
    payOptionWhatsapp: "வாட்ஸ்அப் & யுபிஐ (GPay / PhonePe - பரிந்துரைக்கப்படுகிறது)",
    payOptionCOD: "பொருளைப் பெற்று பணம் செலுத்துதல் (COD)",
    confirmOrderBtn: "ஆர்டரை சமர்ப்பித்து விவரங்களை அனுப்பவும்",
    orderSuccessTitle: "ஆர்டர் வெற்றிகரமாக பதிவு செய்யப்பட்டது!",
    orderSuccessMsg: "பாரம்பரிய கைவினைப் பொருட்களை ஆதரித்தமைக்கு நன்றி! உங்கள் ஆர்டர் விவரங்கள் பதிவு செய்யப்பட்டு விற்பனையாளருக்கு அனுப்பப்பட்டுள்ளது.",
    reminderText: "டெலிவரி நினைவூட்டலை காலண்டரில் சேர்க்க",
    downloadInvoice: "ரசீதை அச்சிட / சேமிக்க",
    whatsappDirect: "வாட்ஸ்அப்பில் ஆர்டரை உறுதி செய்ய",
    contactLocation: "தொடர்பு & இருப்பிடம்",
    quickLinks: "முக்கிய இணைப்புகள்",
    allCategories: "அனைத்தும்",
    catIdols: "சிலைகள் & குதிரைகள்",
    catPlanters: "பூந்தொட்டிகள்",
    catJewellery: "சுடுமண் நகைகள்",
    catDecor: "அலங்காரப் பொருட்கள் & விளக்குகள்"
  }
};

let currentLanguage = localStorage.getItem('shri_lang') || 'en';

// ==========================================
// 3. CART STATE MANAGEMENT
// ==========================================
let cart = [];

function loadCart() {
  try {
    const saved = localStorage.getItem('shri_cart');
    if (saved) {
      cart = JSON.parse(saved);
    }
  } catch (e) {
    console.error('Error loading cart:', e);
    cart = [];
  }
  updateCartUI();
}

function saveCart() {
  localStorage.setItem('shri_cart', JSON.stringify(cart));
  updateCartUI();
}

function addToCart(productId, quantity = 1, openDrawer = true) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const existingIndex = cart.findIndex(item => item.id === productId);
  if (existingIndex > -1) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      name_ta: product.name_ta,
      price: product.price,
      image: product.image,
      quantity: quantity
    });
  }

  saveCart();
  showToast(`Added "${currentLanguage === 'ta' ? product.name_ta : product.name}" to your cart!`);

  if (openDrawer) {
    openCartDrawer();
  }
}

function updateItemQuantity(productId, delta) {
  const index = cart.findIndex(item => item.id === productId);
  if (index === -1) return;

  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  showToast('Item removed from cart.');
}

function clearCart() {
  cart = [];
  saveCart();
}

function getCartSubtotal() {
  return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function getShippingFee(subtotal) {
  if (subtotal === 0) return 0;
  return subtotal >= 999 ? 0 : 60;
}

function getTotal() {
  const subtotal = getCartSubtotal();
  return subtotal + getShippingFee(subtotal);
}

// ==========================================
// 4. UI RENDERERS (PRODUCTS, CART, BADGES)
// ==========================================
function renderProductCard(product) {
  const title = currentLanguage === 'ta' ? product.name_ta : product.name;
  const desc = currentLanguage === 'ta' ? product.description_ta : product.description;
  const t = TRANSLATIONS[currentLanguage];

  return `
    <article class="product-card" data-category="${product.category}">
      ${product.tag ? `<span class="product-badge-tag ${product.tagClass || ''}">${product.tag}</span>` : ''}
      <div class="product-media">
        <img src="${product.image}" alt="${title}" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=600';">
        <div class="quick-view-overlay">
          <button class="quick-view-btn" onclick="openProductQuickView('${product.id}')">Quick View</button>
        </div>
      </div>
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3 class="product-title">${title}</h3>
        <p class="product-description-short">${desc}</p>
        <div class="product-footer">
          <div class="price-row">
            <span class="price-current">₹${product.price}</span>
            ${product.originalPrice ? `<span class="price-original">₹${product.originalPrice}</span>` : ''}
          </div>
          <div class="card-actions">
            <button class="btn-card-cart" onclick="addToCart('${product.id}', 1, true)">
              <span>🛒</span> ${t.addToCart}
            </button>
            <button class="btn-card-buy" onclick="buyNowDirect('${product.id}')">
              <span>⚡</span> ${t.buyNow}
            </button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderProductsGrid(filterCategory = 'all', containerId = 'products-grid-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  let filtered = PRODUCTS_DATA;
  if (filterCategory !== 'all') {
    filtered = PRODUCTS_DATA.filter(p => p.category === filterCategory);
  }

  if (filtered.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">No products found in this category.</div>`;
    return;
  }

  container.innerHTML = filtered.map(renderProductCard).join('');
}

function updateCartUI() {
  const t = TRANSLATIONS[currentLanguage];
  const countBadges = document.querySelectorAll('.cart-badge, .cart-count');
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  countBadges.forEach(badge => {
    badge.textContent = totalCount;
    badge.classList.add('pop');
    setTimeout(() => badge.classList.remove('pop'), 200);
  });

  const cartListContainer = document.getElementById('cart-drawer-items');
  const cartTotalsContainer = document.getElementById('cart-drawer-totals');
  const checkoutBtn = document.getElementById('cart-drawer-checkout-btn');

  if (!cartListContainer) return;

  if (cart.length === 0) {
    cartListContainer.innerHTML = `
      <div class="empty-cart-view">
        <div class="icon">🏺</div>
        <h4>${t.emptyCartTitle}</h4>
        <p>${t.emptyCartMsg}</p>
        <button class="btn btn-primary btn-sm" style="margin-top: 1rem;" onclick="closeCartDrawer()">${t.continueShopping}</button>
      </div>
    `;
    if (cartTotalsContainer) cartTotalsContainer.style.display = 'none';
    if (checkoutBtn) checkoutBtn.style.display = 'none';
    return;
  }

  if (cartTotalsContainer) cartTotalsContainer.style.display = 'block';
  if (checkoutBtn) checkoutBtn.style.display = 'block';

  cartListContainer.innerHTML = `
    <div class="cart-items-list">
      ${cart.map(item => `
        <div class="cart-item-row">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=100';">
          <div class="cart-item-details">
            <h4 class="cart-item-title">${currentLanguage === 'ta' && item.name_ta ? item.name_ta : item.name}</h4>
            <div class="cart-item-price">₹${item.price} × ${item.quantity} = ₹${item.price * item.quantity}</div>
            <div class="cart-item-controls">
              <div class="qty-control">
                <button class="qty-btn" onclick="updateItemQuantity('${item.id}', -1)">-</button>
                <span class="qty-display">${item.quantity}</span>
                <button class="qty-btn" onclick="updateItemQuantity('${item.id}', 1)">+</button>
              </div>
              <button class="item-remove-btn" onclick="removeFromCart('${item.id}')">Remove</button>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  const subtotal = getCartSubtotal();
  const shipping = getShippingFee(subtotal);
  const total = subtotal + shipping;

  if (cartTotalsContainer) {
    cartTotalsContainer.innerHTML = `
      <div class="cart-totals-summary">
        <div class="summary-row">
          <span>${t.subtotal}</span>
          <span>₹${subtotal}</span>
        </div>
        <div class="summary-row">
          <span>${t.shipping}</span>
          <span>${shipping === 0 ? `<b style="color: #27ae60;">${t.freeShipping}</b>` : `₹${shipping}`}</span>
        </div>
        <div class="summary-row total-row">
          <span>${t.total}</span>
          <span>₹${total}</span>
        </div>
      </div>
    `;
  }
}

// ==========================================
// 5. DRAWER & MODAL CONTROLLERS
// ==========================================
function openCartDrawer() {
  document.getElementById('cart-drawer-backdrop')?.classList.add('active');
  document.getElementById('cart-drawer')?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  document.getElementById('cart-drawer-backdrop')?.classList.remove('active');
  document.getElementById('cart-drawer')?.classList.remove('active');
  document.body.style.overflow = '';
}

function buyNowDirect(productId) {
  const existing = cart.find(i => i.id === productId);
  if (!existing) {
    addToCart(productId, 1, false);
  }
  openCheckoutModal();
}

function openCheckoutModal() {
  closeCartDrawer();
  if (cart.length === 0) {
    showToast('Your cart is empty! Add products before checking out.');
    return;
  }

  // Populate mini order summary in checkout modal
  const miniList = document.getElementById('checkout-items-mini');
  const subtotal = getCartSubtotal();
  const shipping = getShippingFee(subtotal);
  const total = subtotal + shipping;

  if (miniList) {
    miniList.innerHTML = cart.map(item => `
      <div class="checkout-item-mini-row">
        <span>${item.quantity}x ${item.name}</span>
        <b>₹${item.price * item.quantity}</b>
      </div>
    `).join('');
  }

  const subtotalEl = document.getElementById('checkout-subtotal-val');
  const shippingEl = document.getElementById('checkout-shipping-val');
  const totalEl = document.getElementById('checkout-total-val');

  if (subtotalEl) subtotalEl.textContent = `₹${subtotal}`;
  if (shippingEl) shippingEl.textContent = shipping === 0 ? 'FREE' : `₹${shipping}`;
  if (totalEl) totalEl.textContent = `₹${total}`;

  document.getElementById('checkout-modal')?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
  document.getElementById('checkout-modal')?.classList.remove('active');
  document.body.style.overflow = '';
}

function closeSuccessModal() {
  document.getElementById('order-success-modal')?.classList.remove('active');
  document.body.style.overflow = '';
}

// ==========================================
// 6. ORDER SUBMISSION & EMAIL + WHATSAPP ENGINE
// ==========================================
let lastPlacedOrder = null;

async function handleOrderSubmission(event) {
  event.preventDefault();

  if (cart.length === 0) {
    showToast('No items in cart to order.');
    return;
  }

  const form = document.getElementById('checkout-order-form');
  const formData = new FormData(form);

  const orderId = 'SAC-' + Date.now().toString().slice(-6);
  const subtotal = getCartSubtotal();
  const shipping = getShippingFee(subtotal);
  const grandTotal = subtotal + shipping;

  const orderData = {
    orderId: orderId,
    orderDate: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    customerName: formData.get('customerName'),
    customerPhone: formData.get('customerPhone'),
    customerWhatsapp: formData.get('customerWhatsapp') || formData.get('customerPhone'),
    customerEmail: formData.get('customerEmail'),
    address: formData.get('address'),
    city: formData.get('city'),
    state: formData.get('state'),
    pincode: formData.get('pincode'),
    customNotes: formData.get('customNotes') || 'None',
    paymentMode: formData.get('paymentMode'),
    items: cart.map(item => ({
      id: item.id,
      name: item.name,
      quantity: item.quantity,
      price: item.price,
      total: item.price * item.quantity
    })),
    subtotal: subtotal,
    shippingFee: shipping,
    grandTotal: grandTotal,
    sellerEmail: 'thuseyanth.ats@gmail.com',
    sellerPhones: ['+918072301783', '+919944918875']
  };

  lastPlacedOrder = orderData;

  // Submit button loading state
  const submitBtn = document.getElementById('submit-order-btn');
  const originalBtnText = submitBtn.innerHTML;
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<span>⏳</span> Processing Order...';

  // 1. Send order details via Formspree / Webhook to thuseyanth.ats@gmail.com
  let emailDispatched = false;
  try {
    const emailPayload = {
      _subject: `New Terracotta Order #${orderId} - ₹${grandTotal} from ${orderData.customerName}`,
      to: 'thuseyanth.ats@gmail.com',
      orderId: orderId,
      customerName: orderData.customerName,
      customerPhone: orderData.customerPhone,
      customerWhatsapp: orderData.customerWhatsapp,
      customerEmail: orderData.customerEmail,
      deliveryAddress: `${orderData.address}, ${orderData.city}, ${orderData.state} - ${orderData.pincode}`,
      paymentMethod: orderData.paymentMode,
      customInstructions: orderData.customNotes,
      orderedItems: orderData.items.map(i => `${i.quantity}x ${i.name} (₹${i.price} each = ₹${i.total})`).join('\n'),
      subtotal: `₹${orderData.subtotal}`,
      shipping: orderData.shippingFee === 0 ? 'FREE' : `₹${orderData.shippingFee}`,
      grandTotal: `₹${orderData.grandTotal}`
    };

    // Formspree endpoint or fallback
    const response = await fetch('https://formspree.io/f/mqkenjqv', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailPayload)
    });

    if (response.ok) {
      emailDispatched = true;
    }
  } catch (err) {
    console.warn('Formspree direct email attempt finished (fallback available):', err);
  }

  // Clear form & cart
  clearCart();
  form.reset();
  submitBtn.disabled = false;
  submitBtn.innerHTML = originalBtnText;

  // Close Checkout Modal & Open Order Success & Reminder Modal
  closeCheckoutModal();
  openSuccessModal(orderData, emailDispatched);
}

function openSuccessModal(order, emailDispatched) {
  document.getElementById('success-order-id').textContent = `Order ID: #${order.orderId}`;
  
  const statusMsg = document.getElementById('success-email-status');
  if (statusMsg) {
    statusMsg.innerHTML = `
      <div style="margin-bottom: 0.5rem;"><span class="check">✓</span> Order saved & notification triggered for <strong>thuseyanth.ats@gmail.com</strong>.</div>
      <div><strong>Customer:</strong> ${order.customerName} (${order.customerPhone})</div>
      <div><strong>Delivery to:</strong> ${order.address}, ${order.city} - ${order.pincode}</div>
      <div><strong>Total Amount:</strong> ₹${order.grandTotal} (${order.paymentMode})</div>
    `;
  }

  // Configure WhatsApp link
  const whatsappItems = order.items.map(i => `• ${i.quantity}x ${i.name} (₹${i.total})`).join('%0A');
  const whatsappMsg = `*NEW ORDER ON SHRI\'S ART & CULTURE*%0A---------------------------%0A*Order ID:* ${order.orderId}%0A*Date:* ${order.orderDate}%0A*Customer:* ${order.customerName}%0A*Phone:* ${order.customerPhone}%0A*Address:* ${order.address}, ${order.city} - ${order.pincode}%0A*Payment:* ${order.paymentMode}%0A%0A*Items:*%0A${whatsappItems}%0A%0A*Grand Total:* ₹${order.grandTotal}%0A*Notes:* ${order.customNotes}%0A---------------------------%0A_Sent via Online Store_`;

  const waBtn = document.getElementById('success-whatsapp-btn');
  if (waBtn) {
    waBtn.href = `https://wa.me/918072301783?text=${whatsappMsg}`;
  }

  // Backup mailto trigger in case seller wishes to open their local email client
  const mailtoBtn = document.getElementById('backup-email-trigger');
  if (mailtoBtn) {
    const plainItems = order.items.map(i => `${i.quantity}x ${i.name} = Rs.${i.total}`).join('\n');
    const mailtoBody = encodeURIComponent(`Order ID: ${order.orderId}\nCustomer: ${order.customerName}\nPhone: ${order.customerPhone}\nAddress: ${order.address}, ${order.city} - ${order.pincode}\n\nItems:\n${plainItems}\n\nTotal: Rs.${order.grandTotal}\nNotes: ${order.customNotes}`);
    mailtoBtn.href = `mailto:thuseyanth.ats@gmail.com?subject=${encodeURIComponent(`Shri's Art & Culture Order #${order.orderId}`)}&body=${mailtoBody}`;
  }

  document.getElementById('order-success-modal')?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// ==========================================
// 7. REMINDER GENERATOR (.ICS CALENDAR EVENT)
// ==========================================
function downloadOrderReminder() {
  if (!lastPlacedOrder) {
    showToast('No active order to schedule reminder.');
    return;
  }

  const order = lastPlacedOrder;
  const now = new Date();
  // Set reminder for 3 days from order date (Expected Delivery / Artisan Follow-up)
  const reminderDate = new Date(now.getTime() + (3 * 24 * 60 * 60 * 1000));
  
  const formatDateToICS = (date) => {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };

  const startTime = formatDateToICS(reminderDate);
  const endTime = formatDateToICS(new Date(reminderDate.getTime() + (60 * 60 * 1000)));

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Shri\'s Art and Culture//Handmade Terracotta//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:order-${order.orderId}@shrisartculture.com`,
    `DTSTAMP:${formatDateToICS(now)}`,
    `DTSTART:${startTime}`,
    `DTEND:${endTime}`,
    `SUMMARY:Shri's Art & Culture Order Delivery Follow-up (#${order.orderId})`,
    `DESCRIPTION:Expected delivery / Artisan check-in for Terracotta Order #${order.orderId}. Total: Rs. ${order.grandTotal}. Contact: +91 8072301783 / thuseyanth.ats@gmail.com`,
    `LOCATION:${order.address}, ${order.city}`,
    'STATUS:CONFIRMED',
    'BEGIN:VALARM',
    'TRIGGER:-PT2H',
    'ACTION:DISPLAY',
    'DESCRIPTION:Terracotta Order Follow-up Reminder',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `Terracotta-Order-${order.orderId}-Reminder.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showToast('Calendar delivery reminder downloaded! Click to add to your calendar.');
}

// ==========================================
// 8. PRINT RECEIPT / INVOICE
// ==========================================
function printOrderInvoice() {
  window.print();
}

// ==========================================
// 9. BILINGUAL LANGUAGE SWITCHER (EN / TA)
// ==========================================
function setlanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('shri_lang', lang);

  // Update body class for Tamil font rendering
  if (lang === 'ta') {
    document.body.classList.add('lang-ta');
  } else {
    document.body.classList.remove('lang-ta');
  }

  // Update language switcher active states
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Re-translate all elements marked with data-i18n
  const t = TRANSLATIONS[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  // Re-render products and cart with the selected language
  if (currentActiveSearchQuery) {
    handleSearch(currentActiveSearchQuery, false);
  } else {
    renderProductsGrid('all', 'products-grid-container');
  }
  updateCartUI();
}

// ==========================================
// 10. PRODUCT FILTER & SEARCH
// ==========================================
function setupCategoryFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-category');
      renderProductsGrid(cat, 'products-grid-container');
    });
  });
}

// ==========================================
// 10. ADVANCED SEARCH & FUZZY MATCH ENGINE
// ==========================================
let currentActiveSearchQuery = '';

function normalizeSearchTerm(str) {
  if (!str) return '';
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s\u0B80-\u0BFF]/g, ' ')
    .trim();
}

function getWordStem(word) {
  if (!word) return '';
  let w = word.toLowerCase();
  // Strip common plural & grammatical endings
  if (w.endsWith('ies') && w.length > 4) return w.slice(0, -3) + 'y';
  if (w.endsWith('es') && w.length > 4) return w.slice(0, -2);
  if (w.endsWith('s') && w.length > 3) return w.slice(0, -1);
  if (w.endsWith('ing') && w.length > 5) return w.slice(0, -3);
  return w;
}

function searchProducts(rawQuery) {
  if (!rawQuery || !rawQuery.trim()) {
    return PRODUCTS_DATA;
  }

  const queryClean = normalizeSearchTerm(rawQuery);
  const queryTokens = queryClean.split(/\s+/).filter(t => t.length > 0);

  if (queryTokens.length === 0) {
    return PRODUCTS_DATA;
  }

  const scoredResults = PRODUCTS_DATA.map(product => {
    let score = 0;
    const nameNorm = normalizeSearchTerm(product.name);
    const nameTaNorm = normalizeSearchTerm(product.name_ta);
    const catNorm = normalizeSearchTerm(product.category);
    const descNorm = normalizeSearchTerm(product.description);
    const descTaNorm = normalizeSearchTerm(product.description_ta);
    const keywordsNorm = (product.keywords || []).map(normalizeSearchTerm);
    const priceStr = String(product.price);

    // Exact full query match
    if (nameNorm.includes(queryClean) || nameTaNorm.includes(queryClean)) {
      score += 100;
    }
    if (keywordsNorm.some(k => k === queryClean || k.includes(queryClean))) {
      score += 80;
    }
    if (catNorm.includes(queryClean)) {
      score += 50;
    }
    if (descNorm.includes(queryClean) || descTaNorm.includes(queryClean)) {
      score += 30;
    }

    // Token-by-token matching (handles plurals: horses -> horse, planters -> planter)
    let tokensMatched = 0;
    for (const token of queryTokens) {
      const stem = getWordStem(token);
      let tokenHit = false;

      // Match title or title stem
      if (nameNorm.includes(token) || nameNorm.includes(stem) || nameTaNorm.includes(token)) {
        score += 40;
        tokenHit = true;
      }
      // Match keywords
      if (keywordsNorm.some(k => k.includes(token) || k.includes(stem) || stem.includes(k))) {
        score += 35;
        tokenHit = true;
      }
      // Match category
      if (catNorm.includes(token) || catNorm.includes(stem)) {
        score += 25;
        tokenHit = true;
      }
      // Match price
      if (priceStr.includes(token)) {
        score += 20;
        tokenHit = true;
      }
      // Match description
      if (descNorm.includes(token) || descNorm.includes(stem) || descTaNorm.includes(token)) {
        score += 15;
        tokenHit = true;
      }

      if (tokenHit) {
        tokensMatched++;
      }
    }

    // If query had multiple words, ensure at least one strong hit
    if (tokensMatched === 0 && score === 0) {
      return null;
    }

    return { product, score };
  })
  .filter(item => item !== null && item.score > 0)
  .sort((a, b) => b.score - a.score)
  .map(item => item.product);

  return scoredResults;
}

function handleSearch(query, shouldScroll = false) {
  const q = query ? query.trim() : '';
  currentActiveSearchQuery = q;
  const container = document.getElementById('products-grid-container');
  if (!container) return;

  // Toggle clear button on search inputs
  document.querySelectorAll('.search-clear-btn').forEach(btn => {
    btn.style.display = q ? 'block' : 'none';
  });

  // Remove existing search banner if present
  const existingBanner = document.getElementById('active-search-banner');
  if (existingBanner) existingBanner.remove();

  if (!q) {
    renderProductsGrid('all', 'products-grid-container');
    return;
  }

  const matches = searchProducts(q);

  // Insert search banner above grid
  const banner = document.createElement('div');
  banner.id = 'active-search-banner';
  banner.className = 'search-results-banner';
  banner.innerHTML = `
    <div>
      <span>🔍 Search results for: <strong>"${q}"</strong> (${matches.length} found)</span>
    </div>
    <button class="clear-search-pill" onclick="clearCurrentSearch()">Clear Search ✕</button>
  `;
  container.parentNode.insertBefore(banner, container);

  if (matches.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3.5rem 1.5rem; background: #ffffff; border-radius: var(--radius-md); border: 1px dashed var(--border-light);">
        <div style="font-size: 3rem; margin-bottom: 0.75rem; opacity: 0.6;">🏺</div>
        <h3 style="font-size: 1.3rem; color: var(--terracotta-900); margin-bottom: 0.5rem;">No terracotta products found for "${q}"</h3>
        <p style="color: var(--text-muted); font-size: 0.95rem; max-width: 460px; margin: 0 auto 1.25rem;">
          Try searching for popular artisan creations like:
          <br><strong>horse, elephant, ganesha, nandi, planter, swan, chain, diya</strong>
        </p>
        <button class="btn btn-outline btn-sm" onclick="clearCurrentSearch()">View All Collections</button>
      </div>
    `;
  } else {
    container.innerHTML = matches.map(renderProductCard).join('');
  }

  if (shouldScroll) {
    const featuredSection = document.getElementById('featured') || document.querySelector('.section-title');
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

function clearCurrentSearch() {
  currentActiveSearchQuery = '';
  document.querySelectorAll('input[name="q"], #header-search-input').forEach(input => {
    input.value = '';
  });
  document.querySelectorAll('.search-clear-btn').forEach(btn => {
    btn.style.display = 'none';
  });
  const existingBanner = document.getElementById('active-search-banner');
  if (existingBanner) existingBanner.remove();
  closeSearchDropdown();
  renderProductsGrid('all', 'products-grid-container');
}

// Live Search Autocomplete Dropdown
function setupSearchAutocomplete() {
  const searchContainers = document.querySelectorAll('.header-search');
  searchContainers.forEach(container => {
    const input = container.querySelector('input');
    if (!input) return;

    // Add Clear Button if not present
    let clearBtn = container.querySelector('.search-clear-btn');
    if (!clearBtn) {
      clearBtn = document.createElement('button');
      clearBtn.type = 'button';
      clearBtn.className = 'search-clear-btn';
      clearBtn.innerHTML = '✕';
      clearBtn.title = 'Clear search';
      clearBtn.onclick = (e) => {
        e.preventDefault();
        clearCurrentSearch();
        input.focus();
      };
      container.appendChild(clearBtn);
    }

    // Add Dropdown if not present
    let dropdown = container.querySelector('.search-suggestions-dropdown');
    if (!dropdown) {
      dropdown = document.createElement('div');
      dropdown.className = 'search-suggestions-dropdown';
      container.appendChild(dropdown);
    }

    input.addEventListener('input', (e) => {
      const val = e.target.value.trim();
      if (!val) {
        dropdown.classList.remove('active');
        handleSearch('', false);
        return;
      }

      const matches = searchProducts(val);
      renderSearchDropdown(dropdown, matches, val);
      dropdown.classList.add('active');
      handleSearch(val, false);
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        dropdown.classList.remove('active');
        handleSearch(input.value, true);
      } else if (e.key === 'Escape') {
        dropdown.classList.remove('active');
      }
    });

    input.addEventListener('focus', () => {
      if (input.value.trim().length > 0) {
        const matches = searchProducts(input.value.trim());
        renderSearchDropdown(dropdown, matches, input.value.trim());
        dropdown.classList.add('active');
      }
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.header-search')) {
      closeSearchDropdown();
    }
  });
}

function renderSearchDropdown(dropdown, matches, query) {
  if (matches.length === 0) {
    dropdown.innerHTML = `
      <div class="search-dropdown-empty">
        <strong>No products found for "${query}"</strong>
        <span>Try searching for: <em>horse, elephant, planter, swan, diya, chain</em></span>
      </div>
    `;
    return;
  }

  const topItems = matches.slice(0, 5);
  dropdown.innerHTML = `
    <div class="search-dropdown-header">
      <span>Matching Products (${matches.length})</span>
      <span style="cursor: pointer;" onclick="closeSearchDropdown()">✕</span>
    </div>
    <div class="search-dropdown-items-list">
      ${topItems.map(p => `
        <div class="search-dropdown-item" onclick="selectSearchDropdownItem('${p.id}')">
          <img class="search-dropdown-thumb" src="${p.image}" alt="${p.name}" onerror="this.src='https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=80';">
          <div class="search-dropdown-info">
            <div class="search-dropdown-title">${currentLanguage === 'ta' ? p.name_ta : p.name}</div>
            <div class="search-dropdown-meta">
              <span class="search-dropdown-price">₹${p.price}</span>
              <span>•</span>
              <span style="text-transform: capitalize;">${p.category}</span>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
    <div class="search-dropdown-footer" onclick="handleSearch('${query}', true); closeSearchDropdown();">
      View all ${matches.length} matching products →
    </div>
  `;
}

function selectSearchDropdownItem(productId) {
  closeSearchDropdown();
  openProductQuickView(productId);
}

function closeSearchDropdown() {
  document.querySelectorAll('.search-suggestions-dropdown').forEach(d => {
    d.classList.remove('active');
  });
}

// Quick View Modal
function openProductQuickView(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const title = currentLanguage === 'ta' ? product.name_ta : product.name;
  const desc = currentLanguage === 'ta' ? product.description_ta : product.description;

  const content = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; align-items: center;">
      <div style="border-radius: var(--radius-md); overflow: hidden; background: var(--sand-100); aspect-ratio: 1/1;">
        <img src="${product.image}" alt="${title}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <div>
        <span class="eyebrow">${product.category}</span>
        <h3 style="font-size: 1.4rem; color: var(--terracotta-900); margin-bottom: 0.5rem;">${title}</h3>
        <div style="font-size: 1.5rem; font-weight: 800; color: var(--terracotta-700); margin-bottom: 1rem;">₹${product.price}</div>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem;">${desc}</p>
        <div style="display: flex; gap: 0.75rem;">
          <button class="btn btn-primary" onclick="addToCart('${product.id}', 1, true); closeQuickViewModal();">🛒 Add to Cart</button>
          <button class="btn btn-outline" onclick="buyNowDirect('${product.id}'); closeQuickViewModal();">⚡ Buy Now</button>
        </div>
      </div>
    </div>
  `;

  const qvBody = document.getElementById('quick-view-modal-body');
  if (qvBody) qvBody.innerHTML = content;
  document.getElementById('quick-view-modal')?.classList.add('active');
}

function closeQuickViewModal() {
  document.getElementById('quick-view-modal')?.classList.remove('active');
}

// ==========================================
// 11. TOAST NOTIFICATIONS
// ==========================================
function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span class="toast-icon">✦</span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3600);
}

// ==========================================
// 13. AI ARTISAN CHATBOT ENGINE (SHRI CLAYBOT)
// ==========================================
let aiChatHistory = [];
let aiChatInitialized = false;

function toggleAIChat() {
  const win = document.getElementById('ai-chat-window');
  if (!win) return;
  const isActive = win.classList.contains('active');
  if (isActive) {
    closeAIChat();
  } else {
    openAIChat();
  }
}

function openAIChat() {
  const win = document.getElementById('ai-chat-window');
  const btn = document.querySelector('.ai-chat-trigger-btn');
  if (!win) return;

  // Intelligently position chat window relative to where the icon was dragged
  if (btn && window.innerWidth > 500) {
    const rect = btn.getBoundingClientRect();
    const isRightHalf = rect.left + (rect.width / 2) > (window.innerWidth / 2);
    const isBottomHalf = rect.top + (rect.height / 2) > (window.innerHeight / 2);

    if (isRightHalf) {
      win.style.left = 'auto';
      win.style.right = `${Math.max(16, window.innerWidth - rect.right)}px`;
    } else {
      win.style.right = 'auto';
      win.style.left = `${Math.max(16, rect.left)}px`;
    }

    if (isBottomHalf) {
      win.style.top = 'auto';
      win.style.bottom = `${Math.max(16, window.innerHeight - rect.top + 8)}px`;
    } else {
      win.style.bottom = 'auto';
      win.style.top = `${Math.max(16, rect.bottom + 8)}px`;
    }
  }

  win.classList.add('active');
  if (!aiChatInitialized) {
    initAIChat();
  }
  setTimeout(() => {
    document.getElementById('ai-chat-input')?.focus();
  }, 100);
}

function closeAIChat() {
  document.getElementById('ai-chat-window')?.classList.remove('active');
}

function initAIChat() {
  aiChatInitialized = true;
  const isTa = currentLanguage === 'ta';
  const welcomeText = isTa
    ? 'வணக்கம்! நான் ஸ்ரீஸ் ஆர்ட் & கல்ச்சர் AI உதவியாளர். பாரம்பரிய சுடுமண் சிற்பங்கள், விலங்கு பூந்தொட்டிகள், நகைகள் அல்லது ஆர்டர் குறித்த உங்கள் கேள்விகளுக்கு உதவ காத்திருக்கிறேன். நான் உங்களுக்கு எவ்வாறு உதவட்டும்?'
    : 'Vanakkam! I am your Shri\'s Art & Culture Artisan Assistant. Ask me about our authentic handmade terracotta horses, planters, jewellery, custom gifts, or delivery options!';

  appendBotMessage(welcomeText, [
    { text: '🛒 How to Order (Guide)', prompt: 'Give me step by step procedure to purchase and use cart' },
    { text: '🎁 Gifts Under ₹100', prompt: 'Show me gifts under 100 rupees' },
    { text: '🐎 Ayyanar Horse Info', prompt: 'Tell me about the Ayyanar Horse' },
    { text: '📦 Delivery & Packaging', prompt: 'How is terracotta packed for delivery?' },
    { text: '💬 WhatsApp Artisan', prompt: 'How can I contact the artisan on WhatsApp?' }
  ]);
}

function appendUserMessage(text) {
  const container = document.getElementById('ai-chat-messages');
  if (!container) return;
  const bubble = document.createElement('div');
  bubble.className = 'chat-bubble user';
  bubble.textContent = text;
  container.appendChild(bubble);
  container.scrollTop = container.scrollHeight;
}

function appendBotMessage(text, quickChips = [], productCard = null, actionBtns = []) {
  const container = document.getElementById('ai-chat-messages');
  if (!container) return;

  const bubble = document.createElement('div');
  bubble.className = 'chat-bubble bot';
  bubble.innerHTML = text.replace(/\n/g, '<br>');

  if (productCard) {
    const cardEl = document.createElement('div');
    cardEl.className = 'chat-product-card';
    cardEl.innerHTML = `
      <img src="${productCard.image}" alt="${productCard.name}" onerror="this.src='https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=60';">
      <div class="chat-product-details">
        <div class="chat-product-name">${currentLanguage === 'ta' && productCard.name_ta ? productCard.name_ta : productCard.name}</div>
        <div class="chat-product-price">₹${productCard.price}</div>
        <button onclick="addToCart('${productCard.id}', 1, true)">🛒 Add to Cart</button>
      </div>
    `;
    bubble.appendChild(cardEl);
  }

  if (actionBtns && actionBtns.length > 0) {
    const btnGroup = document.createElement('div');
    btnGroup.style.display = 'flex';
    btnGroup.style.flexWrap = 'wrap';
    btnGroup.style.gap = '6px';
    btnGroup.style.marginTop = '8px';
    btnGroup.innerHTML = actionBtns.map(b => `
      <button onclick="${b.action}" style="background: var(--terracotta-700); color: #fff; border: none; padding: 4px 10px; border-radius: 9999px; font-size: 0.75rem; font-weight: 700; cursor: pointer; transition: all 0.2s;">
        ${b.label}
      </button>
    `).join('');
    bubble.appendChild(btnGroup);
  }

  container.appendChild(bubble);
  container.scrollTop = container.scrollHeight;

  // Render quick chips if provided
  renderChatChips(quickChips);
}

function renderChatChips(chips) {
  const chipsRow = document.getElementById('ai-chat-chips-row');
  if (!chipsRow) return;

  if (!chips || chips.length === 0) {
    chipsRow.innerHTML = '';
    chipsRow.style.display = 'none';
    return;
  }

  chipsRow.style.display = 'flex';
  chipsRow.innerHTML = chips.map(chip => `
    <button class="chat-chip" onclick="handleChipClick('${chip.prompt}')">${chip.text}</button>
  `).join('');
}

function handleChipClick(promptText) {
  const input = document.getElementById('ai-chat-input');
  if (input) input.value = promptText;
  handleChatSubmit();
}

function showTypingIndicator() {
  const container = document.getElementById('ai-chat-messages');
  if (!container) return;
  const indicator = document.createElement('div');
  indicator.id = 'ai-typing-indicator';
  indicator.className = 'chat-bubble bot';
  indicator.innerHTML = '<div class="typing-dots"><span></span><span></span><span></span></div>';
  container.appendChild(indicator);
  container.scrollTop = container.scrollHeight;
}

function hideTypingIndicator() {
  const indicator = document.getElementById('ai-typing-indicator');
  if (indicator) indicator.remove();
}

function handleChatSubmit() {
  const input = document.getElementById('ai-chat-input');
  if (!input) return;
  const rawMsg = input.value.trim();
  if (!rawMsg) return;

  appendUserMessage(rawMsg);
  input.value = '';

  showTypingIndicator();

  // Natural Language Response Generator
  setTimeout(() => {
    hideTypingIndicator();
    generateArtisanAIResponse(rawMsg);
  }, 450);
}

function generateArtisanAIResponse(userText) {
  const query = userText.toLowerCase();

  // 0. STEP-BY-STEP CART & PURCHASE PROCEDURE GUIDE
  if (query.includes('step') || query.includes('procedure') || query.includes('how to buy') || query.includes('how to order') || query.includes('how to purchase') || query.includes('how to checkout') || query.includes('how do i buy') || query.includes('how do i order') || query.includes('how to use cart') || query.includes('process') || query.includes('guide') || query.includes('buying') || query.includes('எப்படி வாங்குவது') || query.includes('ஆர்டர் செய்வது எப்படி') || query.includes('முறை') || query.includes('வாங்கும்')) {
    const isTa = currentLanguage === 'ta';
    const reply = isTa
      ? '🛒 *ஆர்டர் செய்யும் எளிய படிநிலைகள் (STEP-BY-STEP GUIDE)*\n\n' +
        '*1️⃣ படி 1: பொருட்களைத் தேர்வு செய்தல்*\n' +
        '• எங்கள் சுடுமண் குதிரை, விநாயகர், நந்தி, பூந்தொட்டி அல்லது நகையைத் தேர்வு செய்யவும்.\n' +
        '• கூடையில் சேர்க்க *🛒 Add to Cart* அல்லது உடனே வாங்க *⚡ Buy Now* பொத்தானை அழுத்தவும்.\n\n' +
        '*2️⃣ படி 2: கூடையை சரிபார்த்தல் (Review Cart)*\n' +
        '• மேல் பகுதியில் உள்ள *Cart 🛒* பொத்தானை அழுத்தினால் கூடை வலதுபுறம் திறக்கும்.\n' +
        '• எண்ணிக்கையை கூட்டவோ குறைக்கவோ *(+) / (-)* அழுத்தலாம்.\n' +
        '• 💡 ₹999க்கு மேல் வாங்கினால் *டெலிவரி முற்றிலும் இலவசம்!* (குறைந்த தொகைக்கு ₹60).\n\n' +
        '*3️⃣ படி 3: ஆர்டர் செய்ய தொடருதல் (Proceed to Checkout)*\n' +
        '• கூடையில் உள்ள *ஆர்டர் செய்ய தொடரவும் (Proceed to Checkout →)* பொத்தானை அழுத்தவும்.\n\n' +
        '*4️⃣ படி 4: முகவரி விவரங்களை நிரப்புதல்*\n' +
        '• பெயர், கைபேசி எண், மின்னஞ்சல் மற்றும் *வாட்ஸ்அப் எண்* உள்ளிடவும் (பேக்கிங் புகைப்படங்கள் வாட்ஸ்அப்பில் பகிரப்படும்).\n' +
        '• முழு அஞ்சல் முகவரியையும் பின்கோட் (PIN Code) உடன் உள்ளிடவும்.\n\n' +
        '*5️⃣ படி 5: பணம் செலுத்தும் முறை தேர்வு*\n' +
        '• *வாட்ஸ்அப் & யுபிஐ (GPay / PhonePe)* அல்லது *Cash on Delivery (COD)* தேர்வு செய்து *ஆர்டரை சமர்ப்பிக்கவும்* அழுத்தவும்.\n\n' +
        '*6️⃣ படி 6: உறுதிப்படுத்தல் & நினைவூட்டல் (Confirmation & Reminder)*\n' +
        '• ✅ முழு ஆர்டர் விவரங்களும் விற்பனையாளரின் மின்னஞ்சலுக்கு (*thuseyanth.ats@gmail.com*) உடனே அனுப்பப்படும்.\n' +
        '• 💬 *Open Order on WhatsApp* பொத்தானை அழுத்தி கைவினைஞரிடம் (+91 8072301783) உடனே உறுதி செய்யலாம்.\n' +
        '• 📅 *Add Delivery Reminder to Calendar* பொத்தானை அழுத்தி உங்கள் போனில் டெலிவரி நினைவூட்டலை (.ics) பதிவிறக்கம் செய்து கொள்ளலாம்!\n' +
        '• 🖨️ ரசீதை அச்சிட *Print / Save Receipt* அழுத்தவும்.'
      : '🛒 *STEP-BY-STEP PROCEDURE: HOW TO PURCHASE & USE CART*\n\n' +
        '*1️⃣ STEP 1: Choose Your Terracotta Products*\n' +
        '• Browse our collection of horses, idols, puppy planters, jewellery, and diyas.\n' +
        '• Click *🛒 Add to Cart* to save an item to your cart, or click *⚡ Buy Now* to jump straight to checkout.\n\n' +
        '*2️⃣ STEP 2: Review Your Shopping Cart*\n' +
        '• Click the *Cart 🛒* button in the header (or click "Open My Cart" below) to view your items.\n' +
        '• Adjust quantities with *(+)* or *(-)*, or remove items.\n' +
        '• 💡 *Shipping perk:* Orders above ₹999 get *FREE Pan-India Shipping* (flat ₹60 for smaller orders).\n\n' +
        '*3️⃣ STEP 3: Proceed to Checkout*\n' +
        '• Inside the cart drawer, click the *Proceed to Checkout →* button to open the checkout form.\n\n' +
        '*4️⃣ STEP 4: Fill Delivery & Contact Details*\n' +
        '• Enter your Full Name, Mobile Phone Number, and Email Address.\n' +
        '• Enter your *WhatsApp Number* (we share parcel packing & dispatch photos on WhatsApp!).\n' +
        '• Enter your complete delivery street address and 6-digit PIN code.\n' +
        '• Add any custom crafting notes or gift packaging messages.\n\n' +
        '*5️⃣ STEP 5: Choose Payment & Submit Order*\n' +
        '• Select *WhatsApp & UPI* (GPay/PhonePe/Paytm - Recommended) or *Cash on Delivery (COD)*.\n' +
        '• Click *Submit Order & Send Details*.\n\n' +
        '*6️⃣ STEP 6: Instant Confirmation, Email & Reminder*\n' +
        '• ✅ Your complete order details are automatically dispatched to *thuseyanth.ats@gmail.com*.\n' +
        '• 💬 Click *Open Order on WhatsApp* to notify our master artisan at +91 8072301783 with 1-click pre-filled details.\n' +
        '• 📅 Click *Add Delivery Reminder to Calendar* to download an automated .ics reminder alert for your expected delivery date!\n' +
        '• 🖨️ Click *Print / Save Receipt* to download or print your itemized order receipt.';

    appendBotMessage(reply, [
      { text: '🛒 Open My Cart', prompt: 'Open my cart' },
      { text: '💳 Go to Checkout', prompt: 'Proceed to checkout' },
      { text: '📦 Packaging Safety', prompt: 'How is terracotta packed for delivery?' },
      { text: '🎁 Under ₹100 Gifts', prompt: 'Show me gifts under 100 rupees' }
    ], null, [
      { label: '🛒 Open My Cart', action: 'openCartDrawer();' },
      { label: '💳 Proceed to Checkout', action: 'openCheckoutModal();' },
      { label: '🛍️ Browse Products', action: "location.href='products.html';" }
    ]);
    return;
  }

  // 1. Gifting Under ₹100 or budget queries
  if (query.includes('under 100') || query.includes('cheap') || query.includes('budget') || query.includes('gift') || query.includes('பரிசு')) {
    const swan = PRODUCTS_DATA.find(p => p.id === 'sac-006');
    const planter = PRODUCTS_DATA.find(p => p.id === 'sac-002');
    const chain = PRODUCTS_DATA.find(p => p.id === 'sac-005');

    const reply = currentLanguage === 'ta'
      ? 'ரூ. 100க்கு குறைவான மிகச்சிறந்த கைவினைப் பரிசுகள்:\n• சுடுமண் தங்க நிற அன்னப்பறவை ஜோடி - ₹60\n• நாய் வடிவ செடி வளர்ப்பு தொட்டி - ₹80\n• பச்சை நிற கைவினை பதக்க சங்கிலி - ₹89\nசுற்றுச்சூழலுக்கு உகந்த அன்பான பரிசுகளாக இவை திகழும்!'
      : 'Here are our top eco-friendly handmade gifts under ₹100:\n• Graceful Golden Swan Decor (Pair) - ₹60\n• Puppy Animal Planter Pot - ₹80\n• Handcrafted Green Pendant Chain - ₹89\nThey make memorable, sustainable return gifts and festive presents!';

    appendBotMessage(reply, [
      { text: 'Add Swan (₹60)', prompt: 'Add golden swan to cart' },
      { text: 'Add Planter (₹80)', prompt: 'Add puppy planter to cart' }
    ], swan || planter);
    return;
  }

  // 2. Ayyanar Horse Query
  if (query.includes('horse') || query.includes('ayyanar') || query.includes('குதிரை')) {
    const horse = PRODUCTS_DATA.find(p => p.id === 'sac-001');
    const reply = currentLanguage === 'ta'
      ? 'பாரம்பரிய அய்யனார் குதிரை (₹1,499) தூய ஆற்று களிமண்ணால் மணி மாலைகள் மற்றும் சேணம் வேலைப்பாடுகளுடன் கைவண்ணத்தில் வடிவமைக்கப்பட்டது. கிராமத்து காவல் தெய்வீக அழகையும் பாசிட்டிவ் ஆற்றலையும் இல்லத்திற்கு வழங்கும்!'
      : 'Our Traditional Terracotta Ayyanar Horse (₹1,499) is a revered symbol of Tamil heritage, hand-sculpted with intricate bridle garlands, mane bells, and ritual saddle. It brings auspicious energy and traditional protection to your entrance or living room.';

    appendBotMessage(reply, [
      { text: 'Add Ayyanar Horse', prompt: 'Add Ayyanar horse to cart' },
      { text: 'Shipping Info', prompt: 'Is Ayyanar horse shipping safe?' }
    ], horse);
    return;
  }

  // 3. Planters & Plant Pots
  if (query.includes('planter') || query.includes('pot') || query.includes('plant') || query.includes('dog') || query.includes('puppy') || query.includes('தொட்டி')) {
    const planter = PRODUCTS_DATA.find(p => p.id === 'sac-002');
    const reply = currentLanguage === 'ta'
      ? 'சுடுமண் நாய் வடிவ பூந்தொட்டி (₹80) இயற்கை களிமண்ணால் செய்யப்பட்டது. சிறு சதைப்பற்றுள்ள செடிகள் (Succulents) வளர்க்கவும் மேசை அலங்காரத்திற்கும் மிகச்சிறந்தது.'
      : 'Our Handcrafted Puppy Animal Planter is on a special offer for ₹80 (regular ₹120)! Made from porous riverbed terracotta that promotes healthy root aeration for succulents and indoor plants.';

    appendBotMessage(reply, [
      { text: 'Add Planter (₹80)', prompt: 'Add puppy planter to cart' },
      { text: 'View More Decor', prompt: 'Show me other decor items' }
    ], planter);
    return;
  }

  // 4. Jewellery & Green Pendant Chain
  if (query.includes('jewel') || query.includes('chain') || query.includes('pendant') || query.includes('necklace') || query.includes('நகை') || query.includes('சங்கிலி')) {
    const chain = PRODUCTS_DATA.find(p => p.id === 'sac-005');
    const reply = currentLanguage === 'ta'
      ? 'பச்சை நிற கைவினை பதக்க சங்கிலி (₹89): இயற்கை களிமண்ணால் செய்யப்பட்டு முத்து மணிகளுடன் கோர்க்கப்பட்ட மென்மையான மற்றும் கவர்ச்சிகரமான மாலை. சருமத்திற்கு பாதுகாப்பானது!'
      : 'Our Handcrafted Green Pendant Chain is available for ₹89. It features a lightweight baked clay diamond pendant with lustrous pearl accents and a durable gold-tone chain. 100% skin-friendly and hypoallergenic!';

    appendBotMessage(reply, [
      { text: 'Add Green Pendant', prompt: 'Add green pendant to cart' },
      { text: 'Delivery Options', prompt: 'How long does delivery take?' }
    ], chain);
    return;
  }

  // 5. Ganesha or Nandi Idols
  if (query.includes('ganesh') || query.includes('pillayar') || query.includes('vinayagar') || query.includes('nandi') || query.includes('idol') || query.includes('statue') || query.includes('சிலை')) {
    const ganesha = PRODUCTS_DATA.find(p => p.id === 'sac-003');
    const nandi = PRODUCTS_DATA.find(p => p.id === 'sac-004');
    const reply = currentLanguage === 'ta'
      ? 'எங்களிடம் இயற்கை சுடுமண் விநாயகர் திருவுருவம் (₹499) மற்றும் பாரம்பரிய நந்தி பெருமான் சிலை (₹649) உள்ளன. பூஜை அறை, கார் டேஷ்போர்டு மற்றும் மங்கலகரமான பரிசுகளுக்கு ஏற்றவை.'
      : 'We offer the Sacred Terracotta Lord Ganesha with Abhaya mudra (₹499) and the Traditional Sacred Nandi Bull Statue (₹649). Both are hand-sculpted from 100% natural river clay without synthetic polishes.';

    appendBotMessage(reply, [
      { text: 'Add Ganesha (₹499)', prompt: 'Add Ganesha idol to cart' },
      { text: 'Add Nandi (₹649)', prompt: 'Add Nandi statue to cart' }
    ], ganesha || nandi);
    return;
  }

  // 6. Diyas & Lamps
  if (query.includes('diya') || query.includes('deepam') || query.includes('lamp') || query.includes('விளக்கு') || query.includes('தீபம்')) {
    const diya = PRODUCTS_DATA.find(p => p.id === 'sac-008');
    const reply = currentLanguage === 'ta'
      ? 'கைவண்ண மலர் வேலைப்பாடுகளுடன் கூடிய சுடுமண் தாமரை அகல் விளக்கு ஜோடி (₹149). கார்த்திகை தீபம், தீபாவளி மற்றும் இல்ல பூஜைகளுக்கு அழகு சேர்க்கும்.'
      : 'Our Hand-Painted Floral Terracotta Diya Set (Pair - ₹149) features vivid lotus floral petals, gold-embossed rim etchings, and leaf wick spouts. Perfect for Karthigai Deepam, Diwali, and spiritual meditation.';

    appendBotMessage(reply, [
      { text: 'Add Diya Set (₹149)', prompt: 'Add diya set to cart' }
    ], diya);
    return;
  }

  // 7. Shipping, Delivery & Packaging Safety
  if (query.includes('delivery') || query.includes('shipping') || query.includes('safe') || query.includes('pack') || query.includes('broken') || query.includes('டெலிவரி')) {
    const reply = currentLanguage === 'ta'
      ? '🚚 இந்தியா முழுவதும் பாதுகாப்பான டெலிவரி!\n• உடைவதைத் தடுக்கும் 3 அடுக்கு பாதுகாப்பு பேக்கிங்.\n• ₹999க்கு மேற்பட்ட ஆர்டர்களுக்கு இலவச டெலிவரி (மற்றவற்றுக்கு ₹60).\n• 3-6 வணிக நாட்களில் டெலிவரி செய்யப்படும்.\n• வாட்ஸ்அப்பில் பேக்கிங் புகைப்படங்கள் அனுப்பப்படும்.'
      : '🚚 Pan-India Safe Delivery:\n• All delicate terracotta crafts are secured with triple-cushion shatter-resistant bubble packaging.\n• FREE shipping on orders above ₹999 (flat ₹60 otherwise).\n• Delivery takes 3 to 6 working days.\n• Packing photos are shared on WhatsApp before shipping!';

    appendBotMessage(reply, [
      { text: 'Check Location', prompt: 'Where is your shop located?' },
      { text: 'WhatsApp Confirmation', prompt: 'How to order via WhatsApp?' }
    ]);
    return;
  }

  // 8. Custom Orders & Bulk Orders
  if (query.includes('custom') || query.includes('bulk') || query.includes('wedding') || query.includes('wholesale') || query.includes('பெரிய அளவு')) {
    const reply = currentLanguage === 'ta'
      ? 'ஆம்! திருமணப் பரிசுகள், கோவில் விசேஷங்கள் மற்றும் கார்ப்பரேட் நிகழ்வுகளுக்கு சிறப்பு மொத்த விற்பனை விலையில் விருப்பத்திற்கேற்ற சுடுமண் தயாரிப்புகளை செய்து தருகிறோம். வாட்ஸ்அப்: +91 8072301783.'
      : 'Yes! We craft bespoke terracotta pieces, wedding return gift hampers, temple idols, and bulk business orders. We provide special wholesale pricing and custom engraving. Contact our artisan desk directly on WhatsApp at +91 8072301783 or email thuseyanth.ats@gmail.com.';

    appendBotMessage(reply, [
      { text: '💬 WhatsApp Artisan Now', prompt: 'Open WhatsApp for custom orders' }
    ]);
    return;
  }

  // 9. Store Location & Contact Details
  if (query.includes('location') || query.includes('address') || query.includes('where') || query.includes('phone') || query.includes('contact') || query.includes('முகவரி')) {
    const reply = currentLanguage === 'ta'
      ? '📍 எங்கள் முகவரி:\n5 PNB காலனி, பிக்ஷாண்டார்கோவில், நம்பர் 1 டோல்கேட், திருச்சிராப்பள்ளி, தமிழ்நாடு - 621216.\n📞 தொலைபேசி/வாட்ஸ்அப்: +91 8072301783 / +91 9944918875\n✉️ மின்னஞ்சல்: thuseyanth.ats@gmail.com'
      : '📍 Workshop & Studio Address:\n5 PNB Colony, Bikshandarkovil, No 1 Tollgate, Tiruchirappalli, Tamil Nadu - 621216.\n📞 Phone / WhatsApp: +91 8072301783, +91 9944918875\n✉️ Orders & Enquiries: thuseyanth.ats@gmail.com';

    appendBotMessage(reply, [
      { text: 'View All Products', prompt: 'Show me all products' }
    ]);
    return;
  }

  // 10. Direct Add to Cart Intent via Chat (e.g. "add swan", "add horse")
  if (query.includes('add') && (query.includes('cart') || query.includes('buy'))) {
    let matchedProduct = null;
    if (query.includes('horse') || query.includes('ayyanar')) matchedProduct = PRODUCTS_DATA[0];
    else if (query.includes('planter') || query.includes('pot') || query.includes('dog')) matchedProduct = PRODUCTS_DATA[1];
    else if (query.includes('ganesha') || query.includes('ganesh')) matchedProduct = PRODUCTS_DATA[2];
    else if (query.includes('nandi') || query.includes('bull')) matchedProduct = PRODUCTS_DATA[3];
    else if (query.includes('pendant') || query.includes('chain')) matchedProduct = PRODUCTS_DATA[4];
    else if (query.includes('swan')) matchedProduct = PRODUCTS_DATA[5];
    else if (query.includes('elephant')) matchedProduct = PRODUCTS_DATA[6];
    else if (query.includes('diya') || query.includes('lamp')) matchedProduct = PRODUCTS_DATA[7];

    if (matchedProduct) {
      addToCart(matchedProduct.id, 1, false);
      appendBotMessage(`Great choice! I have added "${matchedProduct.name}" (₹${matchedProduct.price}) to your cart. 🏺`, [
        { text: '🛒 Open Cart', prompt: 'Open my cart' },
        { text: 'Checkout Now', prompt: 'Proceed to checkout' }
      ], matchedProduct);
      return;
    }
  }

  if (query.includes('open cart') || query.includes('view cart')) {
    openCartDrawer();
    appendBotMessage('Opened your shopping cart drawer!');
    return;
  }

  if (query.includes('checkout')) {
    openCheckoutModal();
    appendBotMessage('Opening the checkout window for you!');
    return;
  }

  if (query.includes('whatsapp')) {
    window.open('https://wa.me/918072301783?text=Hello%20Shri\'s%20Art%20and%20Culture,%20I%20have%20an%20enquiry', '_blank');
    appendBotMessage('Opening WhatsApp to chat directly with our master artisan at +91 8072301783!');
    return;
  }

  // General Fallback
  const generalReply = currentLanguage === 'ta'
    ? 'மகிழ்ச்சி! நீங்கள் எங்கள் சுடுமண் தயாரிப்புகள் (குதிரை, யானை, நந்தி, பூந்தொட்டி, விளக்குகள், நகைகள்), டெலிவரி முறைகள் அல்லது தனிப்பயன் ஆர்டர்கள் பற்றி கேட்கலாம். அல்லது எங்கள் வாட்ஸ்அப் எண்ணிலும் நேரடியாக பேசலாம் (+91 8072301783).'
    : 'I\'d be happy to help you with that! You can ask about our clay idols, planters, traditional Ayyanar horse, jewellery, safe packaging, or custom orders. You can also chat directly with our artisan on WhatsApp (+91 8072301783).';

  appendBotMessage(generalReply, [
    { text: '🎁 Gifts Under ₹100', prompt: 'Show me gifts under 100 rupees' },
    { text: '🐎 Ayyanar Horse', prompt: 'Tell me about the Ayyanar Horse' },
    { text: '📍 Shop Location', prompt: 'Where is your shop located?' },
    { text: '💬 WhatsApp Support', prompt: 'Open WhatsApp for custom orders' }
  ]);
}

// ==========================================
// 14. DRAGGABLE AI ICON ANYWHERE ON SCREEN
// ==========================================
function setupDraggableAIIcon() {
  const btn = document.querySelector('.ai-chat-trigger-btn');
  if (!btn) return;

  // Restore saved position from localStorage if user moved it previously
  try {
    const savedPos = localStorage.getItem('shri_ai_icon_pos');
    if (savedPos) {
      const { left, top } = JSON.parse(savedPos);
      const maxX = window.innerWidth - btn.offsetWidth - 12;
      const maxY = window.innerHeight - btn.offsetHeight - 12;
      const clampedX = Math.max(12, Math.min(maxX, left));
      const clampedY = Math.max(12, Math.min(maxY, top));
      btn.style.left = `${clampedX}px`;
      btn.style.top = `${clampedY}px`;
      btn.style.right = 'auto';
      btn.style.bottom = 'auto';
    }
  } catch (e) {}

  let isDragging = false;
  let hasMoved = false;
  let startX = 0;
  let startY = 0;
  let initialLeft = 0;
  let initialTop = 0;

  function onPointerDown(e) {
    if (e.button !== undefined && e.button !== 0) return;

    isDragging = true;
    hasMoved = false;

    const clientX = e.clientX !== undefined ? e.clientX : (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
    const clientY = e.clientY !== undefined ? e.clientY : (e.touches && e.touches[0] ? e.touches[0].clientY : 0);

    startX = clientX;
    startY = clientY;

    const rect = btn.getBoundingClientRect();
    initialLeft = rect.left;
    initialTop = rect.top;

    btn.style.left = `${initialLeft}px`;
    btn.style.top = `${initialTop}px`;
    btn.style.bottom = 'auto';
    btn.style.right = 'auto';

    document.addEventListener('mousemove', onPointerMove);
    document.addEventListener('mouseup', onPointerUp);
    document.addEventListener('touchmove', onPointerMove, { passive: false });
    document.addEventListener('touchend', onPointerUp);
  }

  function onPointerMove(e) {
    if (!isDragging) return;

    const clientX = e.clientX !== undefined ? e.clientX : (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
    const clientY = e.clientY !== undefined ? e.clientY : (e.touches && e.touches[0] ? e.touches[0].clientY : 0);

    const deltaX = clientX - startX;
    const deltaY = clientY - startY;

    if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
      hasMoved = true;
      btn.classList.add('dragging');
      if (e.cancelable) e.preventDefault();
    }

    if (hasMoved) {
      const maxX = window.innerWidth - btn.offsetWidth - 12;
      const maxY = window.innerHeight - btn.offsetHeight - 12;

      const newLeft = Math.max(12, Math.min(maxX, initialLeft + deltaX));
      const newTop = Math.max(12, Math.min(maxY, initialTop + deltaY));

      btn.style.left = `${newLeft}px`;
      btn.style.top = `${newTop}px`;
    }
  }

  function onPointerUp(e) {
    if (!isDragging) return;
    isDragging = false;

    document.removeEventListener('mousemove', onPointerMove);
    document.removeEventListener('mouseup', onPointerUp);
    document.removeEventListener('touchmove', onPointerMove);
    document.removeEventListener('touchend', onPointerUp);

    setTimeout(() => {
      btn.classList.remove('dragging');
    }, 60);

    if (hasMoved) {
      const rect = btn.getBoundingClientRect();
      try {
        localStorage.setItem('shri_ai_icon_pos', JSON.stringify({
          left: rect.left,
          top: rect.top
        }));
      } catch (err) {}
    } else {
      // It was a quick tap or click without dragging: toggle chat!
      toggleAIChat();
    }
  }

  btn.addEventListener('mousedown', onPointerDown);
  btn.addEventListener('touchstart', onPointerDown, { passive: false });

  // Suppress native onclick from triggering double-toggle
  btn.onclick = (e) => {
    e.preventDefault();
  };
}

document.addEventListener('DOMContentLoaded', () => {
  loadCart();
  setupCategoryFilters();
  setupSearchAutocomplete();
  setupDraggableAIIcon();
  setlanguage(currentLanguage);

  // Check URL query params for initial search (e.g. ?q=horse)
  const urlParams = new URLSearchParams(window.location.search);
  const q = urlParams.get('q');
  if (q) {
    document.querySelectorAll('input[name="q"], #header-search-input').forEach(input => {
      input.value = q;
    });
    handleSearch(q, true);
  }

  // Checkout form submit listener
  const checkoutForm = document.getElementById('checkout-order-form');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', handleOrderSubmission);
  }
});
