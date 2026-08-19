/* ==========================================================================
   PADMINI NURSERY - JAVASCRIPT LOGIC
   ========================================================================== */

/* ==========================================================================
   BUSINESS SETTINGS
   Replace these values with your actual business details!
   ========================================================================== */
const BUSINESS_SETTINGS = {
    // Replace with your business name
    businessName: "Padmini Nursery",

    // REPLACE WITH MOTHERS NUMBER (include country code without + or spaces, e.g., "919876543210")
    whatsappNumber: "917893977972",

    // Replace with your phone number
    phoneNumber: "7893977972",

    // Replace with your actual location
    location: "Hyderabad",

    // Replace with your business hours
    businessHours: "24 Hours"
};

/* ==========================================================================
   PRODUCTS ARRAY
   Add, edit, or remove products here.
   
   HOW TO ADD A NEW PRODUCT:
   {
       id: "unique_id",
       name: "Product Name",
       category: "Category Name", // Must match one of: "Water Lily", "Flower plants", "Indoor Plants", "Creeper Plants", "Seeds"
       price: 150, // Number only, no currency symbol
       description: "Short description of the product.",
       image: "images/your-image-file.jpg",
       availability: true // true for In Stock, false for Out of Stock
   }
   ========================================================================== */
const PRODUCTS = [
    // --- WATER LILY ---
    {
        id: "wl_01",
        name: "White water lily",
        category: "Water Lily",
        price: 500,
        description: "Beautiful and Tropical Variety white water lily, perfect for small to medium ponds.",
        image: "images/Tropical variety water lily.jpeg",
        availability: true
    },
    {
        id: "wl_02",
        name: "Pink Water Lily",
        category: "Water Lily",
        price: 500,
        description: "Elegant and Tropical variety pink water lily that blooms in the morning and brings peace to your garden.",
        image: "images/Tropical Variety Pink water lily.jpeg",
        availability: true
    },
    {
        id: "wl_03",
        name: "Brahma kamal plant",
        category: "Water Lily",
        price: 200,
        description: "Stunning Brahma Kamal plant.",
        image: "images/Brahma kamal plant.jpeg",
        availability: true
    },
    {
        id: "wl_04",
        name: "Blue Water Lily",
        category: "Water Lily",
        price: 350,
        description: "Rare and Tropical Variety blue water lily. A true centerpiece for your water garden.",
        image: "images/Blue water lily.jpeg",
        availability: true
    },

    // --- FLOWER PLANTS ---
    {
        id: "op_01",
        name: "Flower plant 1",
        category: "Flower plants",
        price: 100,
        description: "Beautiful blossoming flower plant that adds vibrant colors to any garden setting.",
        image: "images/Flower plant 1.jpeg",
        availability: true
    },
    {
        id: "op_02",
        name: "Flower plant 2",
        category: "Flower plants",
        price: 100,
        description: "A delightful flowering plant with soft petals, perfect for brightening up outdoor spaces.",
        image: "images/Flower plant 2.jpeg",
        availability: true
    },
    {
        id: "op_03",
        name: "Flower plant 3",
        category: "Flower plants",
        price: 100,
        description: "Gorgeous and hardy flower plant that brings a touch of elegance to your home.",
        image: "images/Flower plant 3.jpeg",
        availability: true
    },
    {
        id: "op_04",
        name: "Flower plant 4",
        category: "Flower plants",
        price: 100,
        description: "A charming seasonal bloomer that attracts butterflies and adds life to your garden.",
        image: "images/Flower plant 4.jpeg",
        availability: true
    },
    {
        id: "op_05",
        name: "Flower plant 5",
        category: "Flower plants",
        price: 100,
        description: "Stunning ornamental flower plant, ideal for balcony pots and garden borders.",
        image: "images/Flower plant 5.jpeg",
        availability: true
    },
    {
        id: "op_06",
        name: "Flower plant 6",
        category: "Flower plants",
        price: 100,
        description: "A radiant flower plant that requires minimal care while offering maximum beauty.",
        image: "images/Flower plant 6.jpeg",
        availability: true
    },
    {
        id: "op_07",
        name: "Flower plant 7",
        category: "Flower plants",
        price: 100,
        description: "Exquisite petals and lush foliage make this flower plant a garden favorite.",
        image: "images/Flower plant 7.jpeg",
        availability: true
    },
    {
        id: "op_08",
        name: "Flower plant 8",
        category: "Flower plants",
        price: 100,
        description: "A lovely blossoming plant that thrives in sunlight and spreads joy.",
        image: "images/Flower plant 8.jpeg",
        availability: true
    },
    {
        id: "op_09",
        name: "Wax Rose plant",
        category: "Flower plants",
        price: 150,
        description: "Beautiful Wax Rose plant with glossy leaves and delicate, long-lasting blooms.",
        image: "images/wax Rose plant .jpeg",
        availability: true
    },
    {
        id: "op_10",
        name: "lemon vine plant",
        category: "Flower plants",
        price: 100,
        description: "A trailing lemon vine plant known for its striking foliage and refreshing aura.",
        image: "images/lemon vine plant.jpeg",
        availability: true
    },
    {
        id: "op_11",
        name: "Kasturi tumeric plant",
        category: "Flower plants",
        price: 100,
        description: "Herbal plant known for its beautiful foliage and traditional uses.",
        image: "images/Kasturi tumeric plant.jpeg",
        availability: true
    },
    {
        id: "op_12",
        name: "Black tumeric plant",
        category: "Flower plants",
        price: 100,
        description: "Rare Herbal plant with distinctive dark foliage and unique medicinal properties.",
        image: "images/black tumeric plant.jpeg",
        availability: true
    },

    // --- INDOOR PLANTS ---
    {
        id: "ip_01",
        name: "Money Plant",
        category: "Indoor Plants",
        price: 80,
        description: "Easy to care for indoor creeper that brings good luck.",
        image: "images/Money plant .jpeg",
        availability: true
    },
    {
        id: "ip_02",
        name: "Indoor plant 1",
        category: "Indoor Plants",
        price: 100,
        description: "A gorgeous shade-loving indoor plant that perfectly complements any interior decor.",
        image: "images/Indoor plant 1.jpeg",
        availability: false
    },
    {
        id: "ip_03",
        name: "Indoor plant 2",
        category: "Indoor Plants",
        price: 100,
        description: "Elegant houseplant that brings a calming touch of nature to your desk or living room.",
        image: "images/Indoor plant 2.jpeg",
        availability: true
    },
    {
        id: "ip_04",
        name: "Indoor plant 3",
        category: "Indoor Plants",
        price: 100,
        description: "Vibrant indoor foliage plant, great for purifying the air and brightening up dark corners.",
        image: "images/Indoor plant 3.jpeg",
        availability: true
    },
    {
        id: "ip_05",
        name: "Indoor plant 4",
        category: "Indoor Plants",
        price: 100,
        description: "A stunning and resilient indoor plant that thrives even with minimal watering.",
        image: "images/Indoor plant 4.jpeg",
        availability: true
    },
    {
        id: "ip_06",
        name: "Indoor plant 5",
        category: "Indoor Plants",
        price: 100,
        description: "Beautiful broad-leafed indoor plant that makes a fantastic statement piece for any room.",
        image: "images/Indoor plant 5.jpeg",
        availability: true
    },
    {
        id: "ip_07",
        name: "Indoor plant 6",
        category: "Indoor Plants",
        price: 100,
        description: "A lush, green indoor companion that is incredibly easy to grow and maintain.",
        image: "images/Indoor plant 6.jpeg",
        availability: true
    },
    {
        id: "ip_08",
        name: "Indoor plant 7",
        category: "Indoor Plants",
        price: 100,
        description: "Charming tropical indoor plant designed to add a splash of color to your indoor oasis.",
        image: "images/Indoor plant 7.jpeg",
        availability: true
    },
    {
        id: "ip_09",
        name: "Indoor plant 8",
        category: "Indoor Plants",
        price: 100,
        description: "An aesthetic and hardy houseplant that creates a relaxing and fresh atmosphere.",
        image: "images/Indoor plant 8.jpeg",
        availability: true
    },
    // --- CREEPER PLANTS ---
    {
        id: "cp_01",
        name: "Climbing Rose creeper plant",
        category: "Creeper Plants",
        price: 150,
        description: "A breathtaking climbing rose creeper that produces stunning blooms and elegantly covers trellises.",
        image: "images/Climbing Rose creeper plant.jpeg",
        availability: true
    },


    // --- SEEDS ---
    {
        id: "sd_01",
        name: "Star senea flower Seeds",
        category: "Seeds",
        price: 50,
        description: "Premium Star Senea seeds for growing uniquely shaped, beautiful star-like flowers.",
        image: "images/Star senea flower seeds.jpeg",
        availability: true
    },
    {
        id: "sd_02",
        name: "Marigold Flower Seeds",
        category: "Seeds",
        price: 70,
        description: "High-quality Marigold seeds to bring bright, golden-yellow blooms to your home garden.",
        image: "images/Mari gold flower seeds.jpeg",
        availability: true
    },
    {
        id: "sd_03",
        name: "Flower seeds 1",
        category: "Seeds",
        price: 70,
        description: "A carefully selected variety of premium flower seeds guaranteed to yield beautiful, colorful blooms.",
        image: "images/Flower seeds 1.jpeg",
        availability: true
    },
    {
        id: "sd_04",
        name: "Flower seeds 2",
        category: "Seeds",
        price: 70,
        description: "Excellent quality mixed flower seeds that are easy to sow and bring vibrant life to your garden.",
        image: "images/Flower seeds 2.jpeg",
        availability: true
    },
];


/* ==========================================================================
   STATE & INITIALIZATION
   ========================================================================== */
let cart = JSON.parse(localStorage.getItem('padmini_cart')) || [];
let currentCategory = 'All';
let currentSearch = '';
let currentSort = 'default';
let currentProduct = null;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    applyBusinessSettings();
    setupEventListeners();
    renderProducts();
    updateCartUI();
});

/* ==========================================================================
   BUSINESS SETTINGS APPLICATION
   ========================================================================== */
function applyBusinessSettings() {
    // Helper function to update text safely
    const updateText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    };

    // Update texts
    updateText('brand-name', BUSINESS_SETTINGS.businessName);
    updateText('footer-brand-name', BUSINESS_SETTINGS.businessName);
    updateText('contact-business-name', BUSINESS_SETTINGS.businessName);

    updateText('contact-whatsapp', BUSINESS_SETTINGS.whatsappNumber);
    updateText('footer-whatsapp', BUSINESS_SETTINGS.whatsappNumber);

    updateText('contact-phone', BUSINESS_SETTINGS.phoneNumber);
    updateText('footer-phone', BUSINESS_SETTINGS.phoneNumber);

    updateText('contact-location', BUSINESS_SETTINGS.location);
    updateText('footer-location', BUSINESS_SETTINGS.location);

    updateText('contact-hours', BUSINESS_SETTINGS.businessHours);

    // Update WhatsApp links
    const waLink = `https://wa.me/${BUSINESS_SETTINGS.whatsappNumber}`;
    document.querySelectorAll('.btn-whatsapp:not(.hero-whatsapp):not(#pm-buy-now):not(#checkout-btn)').forEach(btn => {
        btn.href = waLink;
        btn.target = "_blank";
    });

    const floatingWa = document.getElementById('floating-whatsapp');
    if (floatingWa) {
        floatingWa.href = waLink;
        floatingWa.target = "_blank";
    }

    // Setup Hero WhatsApp button specifically to say "Hi Padmini Nursery"
    const heroWaBtn = document.querySelector('.hero-whatsapp');
    if (heroWaBtn) {
        heroWaBtn.href = `${waLink}?text=${encodeURIComponent(`Hello ${BUSINESS_SETTINGS.businessName}! I would like to know more about your products.`)}`;
        heroWaBtn.target = "_blank";
    }
}

/* ==========================================================================
   EVENT LISTENERS SETUP
   ========================================================================== */
function setupEventListeners() {
    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Nav Drawer Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navDrawer = document.getElementById('nav-drawer');
    const navOverlay = document.getElementById('nav-overlay');
    const drawerClose = document.getElementById('drawer-close');

    function openDrawer() {
        navDrawer.classList.add('active');
        navOverlay.classList.add('active');
        menuToggle.classList.remove('fa-bars');
        menuToggle.classList.add('fa-times');
    }

    function closeDrawer() {
        navDrawer.classList.remove('active');
        navOverlay.classList.remove('active');
        menuToggle.classList.remove('fa-times');
        menuToggle.classList.add('fa-bars');
    }

    menuToggle.addEventListener('click', () => {
        if (navDrawer.classList.contains('active')) {
            closeDrawer();
        } else {
            openDrawer();
        }
    });

    if (drawerClose) {
        drawerClose.addEventListener('click', closeDrawer);
    }

    if (navOverlay) {
        navOverlay.addEventListener('click', closeDrawer);
    }

    // Close drawer on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navDrawer.classList.contains('active')) {
            closeDrawer();
        }
    });

    // Close drawer on link click
    document.querySelectorAll('.drawer-link').forEach(link => {
        link.addEventListener('click', closeDrawer);
    });

    // Shop Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentCategory = e.target.getAttribute('data-category');
            renderProducts();
        });
    });

    // Shop Searching
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        let debounceTimer;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                currentSearch = e.target.value.toLowerCase();
                renderProducts();
            }, 200);
        });
    }

    // Shop Sorting
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            renderProducts();
        });
    }

    // Cart Modals
    const openCartBtn = document.getElementById('open-cart');
    if (openCartBtn) openCartBtn.addEventListener('click', openCart);

    const closeCartBtn = document.getElementById('close-cart');
    if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);

    // Close modals when clicking outside
    document.getElementById('cart-overlay').addEventListener('click', (e) => {
        if (e.target.id === 'cart-overlay') closeCart();
    });

    document.getElementById('pm-overlay').addEventListener('click', (e) => {
        if (e.target.id === 'pm-overlay') closeProductModal();
    });

    document.getElementById('pm-close').addEventListener('click', closeProductModal);

    // Cart Actions
    document.getElementById('clear-cart-btn').addEventListener('click', () => {
        cart = [];
        saveCart();
        updateCartUI();
    });

    // Product Modal Qty Buttons
    document.getElementById('pm-qty-minus').addEventListener('click', () => {
        const qtyEl = document.getElementById('pm-qty-val');
        let qty = parseInt(qtyEl.textContent);
        if (qty > 1) {
            qtyEl.textContent = qty - 1;
        }
    });

    document.getElementById('pm-qty-plus').addEventListener('click', () => {
        const qtyEl = document.getElementById('pm-qty-val');
        let qty = parseInt(qtyEl.textContent);
        qtyEl.textContent = qty + 1;
    });

    // Add to Cart from Modal
    document.getElementById('pm-add-cart').addEventListener('click', () => {
        if (currentProduct) {
            const qty = parseInt(document.getElementById('pm-qty-val').textContent);
            addToCart(currentProduct.id, qty);
            closeProductModal();
            openCart();
        }
    });

    // Buy via WhatsApp from Modal (Individual Product)
    document.getElementById('pm-buy-now').addEventListener('click', () => {
        if (currentProduct) {
            const qty = parseInt(document.getElementById('pm-qty-val').textContent);
            const total = qty * currentProduct.price;

            let msg = `Hello ${BUSINESS_SETTINGS.businessName}! 🌸\n\n`;
            msg += `I would like to order:\n\n`;
            msg += `Product: ${currentProduct.name}\n`;
            msg += `Quantity: ${qty}\n`;
            msg += `Price: ₹${currentProduct.price}\n`;
            msg += `Total: ₹${total}\n\n`;
            msg += `Please confirm availability and delivery details.\n\nThank you! 🌸`;

            const waUrl = `https://wa.me/${BUSINESS_SETTINGS.whatsappNumber}?text=${encodeURIComponent(msg)}`;
            window.open(waUrl, '_blank');
        }
    });

    // Checkout Form / WhatsApp Cart Order
    document.getElementById('checkout-btn').addEventListener('click', handleCheckout);
}

// Global Category Filter for links in footer/sections
window.filterCategory = function (category) {
    currentCategory = category;

    // Update active state of buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.getAttribute('data-category') === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    renderProducts();

    // Scroll to shop section
    document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
};

/* ==========================================================================
   PRODUCT RENDERING
   ========================================================================== */
let productCardsCache = {};

function createProductCard(product) {
    const availText = product.availability ? 'In Stock' : 'Out of Stock';
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image" onclick="openProductModal('${product.id}')" style="cursor: pointer;">
            <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null; this.src='https://via.placeholder.com/300x300.png?text=Image+Coming+Soon'">
        </div>
        <div class="product-info">
            <div class="product-title">${product.name}</div>
            <div class="product-desc">${product.description.substring(0, 60)}...</div>
            <div class="product-price">₹${product.price}</div>
            <div style="font-size: 0.8rem; color: ${product.availability ? '#25D366' : '#ff4d4f'}; margin-bottom: 15px;">
                <i class="fas ${product.availability ? 'fa-check-circle' : 'fa-times-circle'}"></i> ${availText}
            </div>
            <div class="product-actions">
                <button class="btn btn-secondary" onclick="addToCart('${product.id}', 1)">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
                <button class="btn btn-whatsapp" onclick="quickOrder('${product.id}')">
                    <i class="fab fa-whatsapp"></i> Order
                </button>
            </div>
        </div>
    `;
    return card;
}

function renderProducts() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    if (Object.keys(productCardsCache).length === 0) {
        PRODUCTS.forEach(product => {
            productCardsCache[product.id] = createProductCard(product);
        });
    }

    // Filter Products
    let filteredProducts = PRODUCTS.filter(product => {
        const matchesCategory = currentCategory === 'All' || product.category === currentCategory;
        const matchesSearch = product.name.toLowerCase().includes(currentSearch) ||
            product.category.toLowerCase().includes(currentSearch);
        return matchesCategory && matchesSearch;
    });

    // Sort Products
    if (currentSort === 'price-low') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-high') {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    // Attach all cards initially if not present
    if (grid.children.length === 0 || grid.querySelector('#shop-empty-state')) {
        grid.innerHTML = '';
        PRODUCTS.forEach(p => grid.appendChild(productCardsCache[p.id]));
    }

    let foundAny = false;
    PRODUCTS.forEach(product => {
        const card = productCardsCache[product.id];
        const index = filteredProducts.indexOf(product);
        if (index !== -1) {
            card.style.display = 'flex';
            card.style.order = index;
            foundAny = true;
        } else {
            card.style.display = 'none';
        }
    });

    // Handle empty state
    let emptyState = document.getElementById('shop-empty-state');
    if (!foundAny) {
        if (!emptyState) {
            emptyState = document.createElement('div');
            emptyState.id = 'shop-empty-state';
            emptyState.style.gridColumn = '1 / -1';
            emptyState.style.textAlign = 'center';
            emptyState.style.padding = '40px';
            emptyState.style.color = 'var(--clr-text-muted)';
            emptyState.innerHTML = `
                <h3>No products found.</h3>
                <p>Try adjusting your search or filters.</p>
            `;
            grid.appendChild(emptyState);
        }
        emptyState.style.display = 'block';
    } else {
        if (emptyState) emptyState.style.display = 'none';
    }
}

window.quickOrder = function (productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    let msg = `Hello ${BUSINESS_SETTINGS.businessName}! 🌸\n\n`;
    msg += `I would like to order:\n\n`;
    msg += `Product: ${product.name}\n`;
    msg += `Quantity: 1\n`;
    msg += `Price: ₹${product.price}\n`;
    msg += `Total: ₹${product.price}\n\n`;
    msg += `Please confirm availability and delivery details.\n\nThank you! 🌸`;

    const waUrl = `https://wa.me/${BUSINESS_SETTINGS.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');
};

/* ==========================================================================
   PRODUCT MODAL LOGIC
   ========================================================================== */
window.openProductModal = function (productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    currentProduct = product;

    // Populate modal
    const imgEl = document.getElementById('pm-img');
    imgEl.onerror = function () { this.onerror = null; this.src = 'https://via.placeholder.com/500x500.png?text=Image+Coming+Soon'; };
    imgEl.src = product.image;

    document.getElementById('pm-cat').textContent = product.category;
    document.getElementById('pm-title').textContent = product.name;
    document.getElementById('pm-price').textContent = `₹${product.price}`;
    document.getElementById('pm-desc').textContent = product.description;

    const availEl = document.getElementById('pm-avail');
    if (product.availability) {
        availEl.innerHTML = `<i class="fas fa-check-circle"></i> <span>In Stock</span>`;
        availEl.style.color = '#25D366';
    } else {
        availEl.innerHTML = `<i class="fas fa-times-circle"></i> <span>Out of Stock</span>`;
        availEl.style.color = '#ff4d4f';
    }

    document.getElementById('pm-qty-val').textContent = '1';

    // Show modal
    document.getElementById('pm-overlay').classList.add('active');
    // document.body.style.overflow = 'hidden'; // Commented out to prevent layout shift glitch
};

function closeProductModal() {
    document.getElementById('pm-overlay').classList.remove('active');
    // document.body.style.overflow = 'auto';
}

/* ==========================================================================
   CART LOGIC
   ========================================================================== */
window.addToCart = function (productId, qty = 1) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.qty += qty;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            qty: qty
        });
    }

    saveCart();
    updateCartUI();

    // Show quick toast/alert
    // alert(`${product.name} added to cart!`);
};

window.removeFromCart = function (productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
};

window.updateCartQty = function (productId, delta) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartUI();
        }
    }
};

function saveCart() {
    localStorage.setItem('padmini_cart', JSON.stringify(cart));
}

function updateCartUI() {
    // Update badge count
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById('cart-count').textContent = count;
    document.getElementById('cart-header-count').textContent = count;

    // Update cart items container
    const container = document.getElementById('cart-items-container');
    const checkoutForm = document.getElementById('checkout-form');

    if (cart.length === 0) {
        container.innerHTML = `<div class="empty-cart-msg">Your cart is empty.<br>Start adding some beautiful plants!</div>`;
        document.getElementById('cart-total').textContent = '₹0';
        checkoutForm.style.display = 'none';
        document.getElementById('checkout-btn').disabled = true;
        document.getElementById('clear-cart-btn').style.display = 'none';
        return;
    }

    checkoutForm.style.display = 'flex';
    document.getElementById('checkout-btn').disabled = false;
    document.getElementById('clear-cart-btn').style.display = 'block';

    let total = 0;

    // Calculate total and inject all cart items at once to guarantee they all render perfectly
    container.innerHTML = cart.map(item => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;

        return `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.src='https://via.placeholder.com/80x80.png?text=Img'">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">₹${item.price}</div>
                    <div class="cart-item-controls">
                        <button class="qty-btn" onclick="updateCartQty('${item.id}', -1)">-</button>
                        <span style="font-weight: 600;">${item.qty}</span>
                        <button class="qty-btn" onclick="updateCartQty('${item.id}', 1)">+</button>
                        <button class="remove-btn" onclick="removeFromCart('${item.id}')">Remove</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    document.getElementById('cart-total').textContent = `₹${total}`;
}

function openCart() {
    document.getElementById('cart-overlay').classList.add('active');
    // document.body.style.overflow = 'hidden';
}

function closeCart() {
    document.getElementById('cart-overlay').classList.remove('active');
    // document.body.style.overflow = 'auto';
}

/* ==========================================================================
   CHECKOUT (WHATSAPP ORDERING) LOGIC
   ========================================================================== */
function handleCheckout() {
    if (cart.length === 0) return;

    // Validate form
    const name = document.getElementById('cust-name').value.trim();
    const phone = document.getElementById('cust-phone').value.trim();
    const address = document.getElementById('cust-address').value.trim();
    const notes = document.getElementById('cust-notes').value.trim();

    if (!name || !phone || !address) {
        alert("Please fill in your Name, Phone Number, and Delivery Address before checking out.");
        return;
    }

    // Build WhatsApp Message
    let msg = `Hello ${BUSINESS_SETTINGS.businessName}! 🌸\n\n`;
    msg += `I would like to place an order.\n\n`;
    msg += `*ORDER DETAILS*\n\n`;

    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;
        msg += `🌿 ${item.name} × ${item.qty}\n`;
        msg += `₹${item.price} × ${item.qty} = ₹${itemTotal}\n\n`;
    });

    msg += `*TOTAL: ₹${total}*\n\n`;

    msg += `*CUSTOMER DETAILS*\n\n`;
    msg += `Name: ${name}\n`;
    msg += `Phone: ${phone}\n`;
    msg += `Delivery Address: ${address}\n`;

    if (notes) {
        msg += `\nNotes: ${notes}\n`;
    }

    msg += `\nPlease confirm the availability and delivery details.\n\nThank you! 🌸`;

    // Redirect to WhatsApp
    const waUrl = `https://wa.me/${BUSINESS_SETTINGS.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');

    // Optional: clear cart after successful redirection
    // cart = [];
    // saveCart();
    // updateCartUI();
    // closeCart();
}
