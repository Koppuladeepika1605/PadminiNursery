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
       category: "Category Name", // Must match one of: "Water Lily", "Outdoor Plants", "Indoor Plants", "Creeper Plants", "Seeds"
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
        name: "Pink Water Lily",
        category: "Water Lily",
        price: 250,
        description: "Beautiful and vibrant pink water lily, perfect for small to medium ponds.",
        image: "images/placeholder-wl-pink.jpg",
        availability: true
    },
    {
        id: "wl_02",
        name: "White Water Lily",
        category: "Water Lily",
        price: 220,
        description: "Elegant white water lily that blooms in the morning and brings peace to your garden.",
        image: "images/placeholder-wl-white.jpg",
        availability: true
    },
    {
        id: "wl_03",
        name: "Red Water Lily",
        category: "Water Lily",
        price: 280,
        description: "Stunning red water lily with large, beautiful flowers.",
        image: "images/placeholder-wl-red.jpg",
        availability: true
    },
    {
        id: "wl_04",
        name: "Blue Water Lily",
        category: "Water Lily",
        price: 300,
        description: "Rare and exotic blue water lily. A true centerpiece for your water garden.",
        image: "images/placeholder-wl-blue.jpg",
        availability: true
    },

    // --- OUTDOOR PLANTS ---
    {
        id: "op_01",
        name: "Rose Plant",
        category: "Outdoor Plants",
        price: 150,
        description: "Freshly bloomed rose plant with a classic fragrance.",
        image: "images/placeholder-plant-rose.jpg",
        availability: true
    },
    {
        id: "op_02",
        name: "Hibiscus Plant",
        category: "Outdoor Plants",
        price: 100,
        description: "Large, colorful hibiscus flowers, ideal for daily prayers.",
        image: "images/placeholder-plant-hibiscus.jpg",
        availability: true
    },
    {
        id: "op_03",
        name: "Jasmine Plant",
        category: "Outdoor Plants",
        price: 120,
        description: "Highly fragrant jasmine plant. Perfect for garlands or home decor.",
        image: "images/placeholder-plant-jasmine.jpg",
        availability: true
    },
    {
        id: "op_04",
        name: "Marigold Plant",
        category: "Outdoor Plants",
        price: 80,
        description: "Bright orange and yellow marigolds, great for festivals and decorations.",
        image: "images/placeholder-plant-marigold.jpg",
        availability: true
    },
    {
        id: "op_05",
        name: "Bougainvillea Plant",
        category: "Outdoor Plants",
        price: 180,
        description: "Vibrant and hardy bougainvillea perfect for sunny outdoor spots.",
        image: "images/placeholder-plant-bougainvillea.jpg",
        availability: true
    },

    // --- INDOOR PLANTS ---
    {
        id: "ip_01",
        name: "Money Plant",
        category: "Indoor Plants",
        price: 120,
        description: "Easy to care for indoor creeper that brings good luck.",
        image: "images/placeholder-plant-money.jpg",
        availability: true
    },
    {
        id: "ip_02",
        name: "Snake Plant",
        category: "Indoor Plants",
        price: 200,
        description: "Excellent air-purifying indoor plant requiring low maintenance.",
        image: "images/placeholder-plant-snake.jpg",
        availability: true
    },
    {
        id: "ip_03",
        name: "Peace Lily",
        category: "Indoor Plants",
        price: 250,
        description: "Elegant indoor plant with beautiful white flowers and dark green leaves.",
        image: "images/placeholder-plant-peacelily.jpg",
        availability: true
    },
    {
        id: "ip_04",
        name: "Spider Plant",
        category: "Indoor Plants",
        price: 150,
        description: "Popular indoor plant with cascading green and white striped leaves.",
        image: "images/placeholder-plant-spider.jpg",
        availability: true
    },
    {
        id: "ip_05",
        name: "Aloe Vera",
        category: "Indoor Plants",
        price: 100,
        description: "Useful medicinal plant that thrives indoors with bright light.",
        image: "images/placeholder-plant-aloe.jpg",
        availability: true
    },

    // --- CREEPER PLANTS ---
    {
        id: "cp_01",
        name: "Money Plant Creeper",
        category: "Creeper Plants",
        price: 150,
        description: "Lush trailing money plant, perfect for hanging baskets or climbing moss poles.",
        image: "images/placeholder-creeper-money.jpg",
        availability: true
    },
    {
        id: "cp_02",
        name: "Bougainvillea",
        category: "Creeper Plants",
        price: 250,
        description: "Stunning blooming creeper that thrives in bright sunshine.",
        image: "images/placeholder-creeper-bougainvillea.jpg",
        availability: true
    },
    {
        id: "cp_03",
        name: "Jasmine Creeper",
        category: "Creeper Plants",
        price: 200,
        description: "Fragrant climbing jasmine that creates a beautiful blooming wall.",
        image: "images/placeholder-creeper-jasmine.jpg",
        availability: true
    },
    {
        id: "cp_04",
        name: "Rangoon Creeper",
        category: "Creeper Plants",
        price: 220,
        description: "Vibrant creeper with beautiful clusters of red and pink fragrant flowers.",
        image: "images/placeholder-creeper-rangoon.jpg",
        availability: true
    },
    {
        id: "cp_05",
        name: "Morning Glory",
        category: "Creeper Plants",
        price: 180,
        description: "Fast-growing creeper with beautiful blue and purple trumpet-shaped flowers.",
        image: "images/placeholder-creeper-morningglory.jpg",
        availability: true
    },

    // --- SEEDS ---
    {
        id: "sd_01",
        name: "Rose Seeds",
        category: "Seeds",
        price: 80,
        description: "Premium rose seeds for growing your own beautiful roses.",
        image: "images/placeholder-seed-rose.jpg",
        availability: true
    },
    {
        id: "sd_02",
        name: "Marigold Seeds",
        category: "Seeds",
        price: 50,
        description: "Easy-to-grow marigold seeds, perfect for beginners.",
        image: "images/placeholder-seed-marigold.jpg",
        availability: true
    },
    {
        id: "sd_03",
        name: "Sunflower Seeds",
        category: "Seeds",
        price: 60,
        description: "Giant sunflower seeds that grow tall and bright.",
        image: "images/placeholder-seed-sunflower.jpg",
        availability: true
    },
    {
        id: "sd_04",
        name: "Hibiscus Seeds",
        category: "Seeds",
        price: 70,
        description: "Quality hibiscus seeds for a colorful garden.",
        image: "images/placeholder-seed-hibiscus.jpg",
        availability: true
    },
    {
        id: "sd_05",
        name: "Flower Mix Seeds",
        category: "Seeds",
        price: 90,
        description: "A lovely mix of easy-to-grow seasonal flower seeds.",
        image: "images/placeholder-seed-mix.jpg",
        availability: true
    },
    {
        id: "sd_06",
        name: "Vegetable Seeds",
        category: "Seeds",
        price: 80,
        description: "Assortment of common vegetable seeds for your home garden.",
        image: "images/placeholder-seed-veg.jpg",
        availability: true
    }
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
    imgEl.onerror = function () { this.onerror=null; this.src = 'https://via.placeholder.com/500x500.png?text=Image+Coming+Soon'; };
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
