/* ==========================================
   EYE ZONE OPTICS - Main Application JS
   ========================================== */

// ============================
// Product Data
// ============================
const products = [
    {
        id: 1,
        name: "Classic Rectangle",
        category: "prescription",
        subcategory: "rectangle",
        price: 3500,
        oldPrice: 4500,
        image: "images/glasses-rectangular.png",
        badge: "hot",
        rating: 4.8,
        reviews: 124,
        shape: "rectangle",
        color: "black",
        material: "metal",
        gender: "unisex",
        size: "medium",
        description: "Timeless rectangular frames in sleek black metal. Perfect for professional and casual wear.",
        isSunglasses: false
    },
    {
        id: 2,
        name: "Vintage Round",
        category: "fashion",
        subcategory: "round",
        price: 2800,
        oldPrice: 3800,
        image: "images/glasses-round.png",
        badge: "new",
        rating: 4.7,
        reviews: 98,
        shape: "round",
        color: "tortoise",
        material: "acetate",
        gender: "unisex",
        size: "medium",
        description: "Stylish round tortoiseshell frames that blend vintage charm with modern fashion.",
        isSunglasses: false
    },
    {
        id: 3,
        name: "Elegant Cat Eye",
        category: "fashion",
        subcategory: "cat-eye",
        price: 3200,
        oldPrice: 4200,
        image: "images/glasses-cateye.png",
        badge: "new",
        rating: 4.9,
        reviews: 156,
        shape: "cat-eye",
        color: "pink",
        material: "acetate",
        gender: "women",
        size: "medium",
        description: "Feminine cat eye frames in rose gold. An elegant choice for fashion-forward women.",
        isSunglasses: false
    },
    {
        id: 4,
        name: "Aviator Sunglasses",
        category: "sunglasses",
        subcategory: "aviator",
        price: 4500,
        oldPrice: 5500,
        image: "images/sunglasses-aviator.png",
        badge: "hot",
        rating: 4.9,
        reviews: 203,
        shape: "aviator",
        color: "gold",
        material: "metal",
        gender: "unisex",
        size: "large",
        description: "Classic aviator sunglasses with gold frame and dark polarized lenses for superior UV protection.",
        isSunglasses: true,
        sunCategory: ["men", "women", "polarized"]
    },
    {
        id: 5,
        name: "Blue Light Shield",
        category: "computer",
        subcategory: "rectangle",
        price: 2500,
        oldPrice: 3200,
        image: "images/glasses-bluelight.png",
        badge: "sale",
        rating: 4.6,
        reviews: 87,
        shape: "square",
        color: "transparent",
        material: "tr90",
        gender: "unisex",
        size: "medium",
        description: "Transparent square frames with blue light blocking technology. Perfect for screen time.",
        isSunglasses: false
    },
    {
        id: 6,
        name: "Geometric Hex",
        category: "fashion",
        subcategory: "geometric",
        price: 3800,
        oldPrice: 4800,
        image: "images/glasses-geometric.png",
        badge: "new",
        rating: 4.7,
        reviews: 72,
        shape: "geometric",
        color: "black",
        material: "metal",
        gender: "unisex",
        size: "medium",
        description: "Bold geometric hexagonal frames in matte black. A statement piece for the fashion-forward.",
        isSunglasses: false
    },
    {
        id: 7,
        name: "Executive Pro",
        category: "prescription",
        subcategory: "rectangle",
        price: 4200,
        oldPrice: 5200,
        image: "images/glasses-rectangular.png",
        badge: null,
        rating: 4.8,
        reviews: 145,
        shape: "rectangle",
        color: "silver",
        material: "titanium",
        gender: "men",
        size: "large",
        description: "Premium titanium rectangular frames. Ultra-lightweight and durable for everyday professional wear.",
        isSunglasses: false
    },
    {
        id: 8,
        name: "Retro Round Gold",
        category: "fashion",
        subcategory: "round",
        price: 3100,
        oldPrice: null,
        image: "images/glasses-round.png",
        badge: null,
        rating: 4.5,
        reviews: 63,
        shape: "round",
        color: "gold",
        material: "metal",
        gender: "unisex",
        size: "small",
        description: "Retro-inspired round frames in gorgeous gold finish. A timeless classic upgraded for today.",
        isSunglasses: false
    },
    {
        id: 9,
        name: "Polarized Sport",
        category: "sunglasses",
        subcategory: "rectangle",
        price: 3900,
        oldPrice: 4900,
        image: "images/sunglasses-aviator.png",
        badge: "sale",
        rating: 4.7,
        reviews: 118,
        shape: "rectangle",
        color: "black",
        material: "tr90",
        gender: "men",
        size: "large",
        description: "High-performance polarized sport sunglasses with anti-glare coating and UV400 protection.",
        isSunglasses: true,
        sunCategory: ["men", "polarized"]
    },
    {
        id: 10,
        name: "Fashion Oversized",
        category: "sunglasses",
        subcategory: "square",
        price: 3400,
        oldPrice: 4200,
        image: "images/glasses-cateye.png",
        badge: "new",
        rating: 4.8,
        reviews: 95,
        shape: "square",
        color: "brown",
        material: "acetate",
        gender: "women",
        size: "large",
        description: "Oversized fashion sunglasses with gradient lenses. Turn heads wherever you go.",
        isSunglasses: true,
        sunCategory: ["women", "fashion"]
    },
    {
        id: 11,
        name: "Smart Blue Block",
        category: "computer",
        subcategory: "rectangle",
        price: 2200,
        oldPrice: 2800,
        image: "images/glasses-bluelight.png",
        badge: null,
        rating: 4.4,
        reviews: 56,
        shape: "rectangle",
        color: "black",
        material: "tr90",
        gender: "unisex",
        size: "medium",
        description: "Sleek blue light blocking glasses for comfortable all-day screen use. Reduce eye strain.",
        isSunglasses: false
    },
    {
        id: 12,
        name: "Cat Eye Luxe",
        category: "fashion",
        subcategory: "cat-eye",
        price: 3600,
        oldPrice: null,
        image: "images/glasses-cateye.png",
        badge: null,
        rating: 4.6,
        reviews: 81,
        shape: "cat-eye",
        color: "tortoise",
        material: "acetate",
        gender: "women",
        size: "medium",
        description: "Luxurious cat eye frames in tortoiseshell acetate. Perfect blend of elegance and comfort.",
        isSunglasses: false
    },
    {
        id: 13,
        name: "Titanium Air",
        category: "prescription",
        subcategory: "rectangle",
        price: 5500,
        oldPrice: 7000,
        image: "images/glasses-geometric.png",
        badge: "sale",
        rating: 4.9,
        reviews: 167,
        shape: "rectangle",
        color: "silver",
        material: "titanium",
        gender: "men",
        size: "medium",
        description: "Ultra-lightweight titanium frames weighing only 12g. Premium comfort for all-day wear.",
        isSunglasses: false
    },
    {
        id: 14,
        name: "Classic Wayfarer",
        category: "sunglasses",
        subcategory: "rectangle",
        price: 3200,
        oldPrice: 4000,
        image: "images/glasses-rectangular.png",
        badge: "hot",
        rating: 4.7,
        reviews: 189,
        shape: "rectangle",
        color: "black",
        material: "acetate",
        gender: "unisex",
        size: "medium",
        description: "The iconic wayfarer design with premium UV protection. A timeless sunglasses choice.",
        isSunglasses: true,
        sunCategory: ["men", "women", "fashion"]
    },
    {
        id: 15,
        name: "Round Polarized",
        category: "sunglasses",
        subcategory: "round",
        price: 4100,
        oldPrice: null,
        image: "images/glasses-round.png",
        badge: null,
        rating: 4.6,
        reviews: 74,
        shape: "round",
        color: "gold",
        material: "metal",
        gender: "unisex",
        size: "small",
        description: "Round sunglasses with premium polarized lenses. Vintage style meets modern lens technology.",
        isSunglasses: true,
        sunCategory: ["polarized", "fashion"]
    },
    {
        id: 16,
        name: "Geo Modern",
        category: "fashion",
        subcategory: "geometric",
        price: 3300,
        oldPrice: 4100,
        image: "images/glasses-geometric.png",
        badge: null,
        rating: 4.5,
        reviews: 42,
        shape: "geometric",
        color: "blue",
        material: "metal",
        gender: "unisex",
        size: "medium",
        description: "Modern geometric frames in deep blue. A unique statement piece for bold wearers.",
        isSunglasses: false
    }
];

// ============================
// State Management
// ============================
let cart = JSON.parse(localStorage.getItem('ezo_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('ezo_wishlist') || '[]');
let currentPage = 'home';
let currentStep = 1;
let selectedFrame = null;
let selectedLens = null;
let uploadedFile = null;

// ============================
// Initialization
// ============================
document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initRouter();
    initNavigation();
    initSearch();
    initCart();
    initWishlist();
    initScrollEffects();
    initCounters();
    renderHomeProducts();
    renderShopProducts();
    renderSunglasses();
    renderPrescriptionFrames();
    initFilters();
    initPrescriptionSteps();
    initUpload();
    initForms();
    initParticles();
});

// ============================
// Preloader
// ============================
function initPreloader() {
    setTimeout(() => {
        document.getElementById('preloader').classList.add('hidden');
    }, 2000);
}

// ============================
// Router (SPA Hash Navigation)
// ============================
function initRouter() {
    window.addEventListener('hashchange', handleRoute);
    handleRoute();
}

function handleRoute() {
    const hash = window.location.hash.slice(1) || 'home';
    navigateTo(hash);
}

function navigateTo(page) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    // Show target page
    const target = document.getElementById('page-' + page);
    if (target) {
        target.classList.add('active');
        currentPage = page;
        
        // Update nav active state
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.toggle('active', link.getAttribute('data-page') === page);
        });
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Close mobile menu
        document.getElementById('nav-links').classList.remove('active');
        document.getElementById('mobile-menu-btn').classList.remove('active');
        
        // Update hash without triggering hashchange
        if (window.location.hash.slice(1) !== page) {
            history.pushState(null, '', '#' + page);
        }
    }
}

// ============================
// Navigation
// ============================
function initNavigation() {
    // Mobile menu
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    
    mobileBtn.addEventListener('click', () => {
        mobileBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Nav links click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const page = link.getAttribute('data-page');
            navigateTo(page);
        });
    });
    
    // Footer links and other internal links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.length > 1) {
                const page = href.slice(1);
                if (document.getElementById('page-' + page)) {
                    e.preventDefault();
                    navigateTo(page);
                }
            }
        });
    });
}

// ============================
// Scroll Effects
// ============================
function initScrollEffects() {
    const header = document.getElementById('main-header');
    const backToTop = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        // Header scroll effect
        header.classList.toggle('scrolled', scrollY > 50);
        
        // Back to top
        backToTop.classList.toggle('visible', scrollY > 500);
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ============================
// Animated Counters
// ============================
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-count'));
                animateCounter(entry.target, target);
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, { threshold: 0.5 });
    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(el, target) {
    let current = 0;
    const step = target / 60;
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        el.textContent = Math.floor(current);
    }, 20);
}

// ============================
// Search
// ============================
function initSearch() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    
    const performSearch = () => {
        const query = searchInput.value.trim().toLowerCase();
        if (query) {
            navigateTo('shop');
            // Filter products based on search
            const filtered = products.filter(p => 
                p.name.toLowerCase().includes(query) ||
                p.category.toLowerCase().includes(query) ||
                p.shape.toLowerCase().includes(query) ||
                p.description.toLowerCase().includes(query)
            );
            renderProductGrid('shop-products-grid', filtered);
            document.getElementById('shop-result-count').textContent = `Showing ${filtered.length} results for "${query}"`;
        }
    };
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });
}

// ============================
// Product Rendering
// ============================
function createProductCard(product, selectable = false) {
    const card = document.createElement('div');
    card.className = 'product-card' + (selectable && selectedFrame && selectedFrame.id === product.id ? ' selected' : '');
    card.setAttribute('data-id', product.id);
    
    const badgeHTML = product.badge ? `<span class="product-badge badge-${product.badge}">${product.badge.toUpperCase()}</span>` : '';
    const oldPriceHTML = product.oldPrice ? `<span class="product-old-price">Rs. ${product.oldPrice.toLocaleString()}</span>` : '';
    
    const stars = Array(5).fill(0).map((_, i) => {
        if (i < Math.floor(product.rating)) return '<i class="fas fa-star"></i>';
        if (i < product.rating) return '<i class="fas fa-star-half-alt"></i>';
        return '<i class="far fa-star"></i>';
    }).join('');
    
    card.innerHTML = `
        <div class="product-image">
            ${badgeHTML}
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <div class="product-actions-overlay">
                <button class="product-action-btn" onclick="openQuickView(${product.id})" title="Quick View">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="product-action-btn" onclick="toggleWishlist(${product.id})" title="Add to Wishlist">
                    <i class="fas fa-heart"></i>
                </button>
                <button class="product-action-btn" onclick="addToCart(${product.id})" title="Add to Cart">
                    <i class="fas fa-shopping-bag"></i>
                </button>
            </div>
        </div>
        <div class="product-info">
            <p class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
            <h3 class="product-name">${product.name}</h3>
            <div class="product-rating">
                ${stars}
                <span>(${product.reviews})</span>
            </div>
            <div class="product-price-row">
                <div>
                    <span class="product-price">Rs. ${product.price.toLocaleString()}</span>
                    ${oldPriceHTML}
                </div>
                <button class="product-add-btn" onclick="addToCart(${product.id})" title="Add to Cart">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
        </div>
    `;
    
    if (selectable) {
        card.addEventListener('click', (e) => {
            if (e.target.closest('.product-action-btn') || e.target.closest('.product-add-btn')) return;
            selectFrame(product);
        });
    }
    
    return card;
}

function renderProductGrid(containerId, productList) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    productList.forEach(product => {
        container.appendChild(createProductCard(product));
    });
}

function renderHomeProducts() {
    // Show top 8 best sellers (highest rating, most reviews)
    const bestSellers = [...products]
        .sort((a, b) => (b.rating * b.reviews) - (a.rating * a.reviews))
        .slice(0, 8);
    renderProductGrid('home-products-grid', bestSellers);
}

function renderShopProducts(filtered = null) {
    const list = filtered || products.filter(p => !p.isSunglasses);
    renderProductGrid('shop-products-grid', list);
    document.getElementById('shop-result-count').textContent = `Showing ${list.length} products`;
}

function renderSunglasses(category = 'all') {
    let list = products.filter(p => p.isSunglasses);
    if (category !== 'all') {
        list = list.filter(p => p.sunCategory && p.sunCategory.includes(category));
    }
    renderProductGrid('sunglasses-grid', list);
}

function renderPrescriptionFrames() {
    const list = products.filter(p => !p.isSunglasses);
    const container = document.getElementById('rx-frames-grid');
    if (!container) return;
    container.innerHTML = '';
    list.forEach(product => {
        container.appendChild(createProductCard(product, true));
    });
}

// ============================
// Quick View
// ============================
function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    document.getElementById('quickview-img').src = product.image;
    document.getElementById('quickview-img').alt = product.name;
    document.getElementById('quickview-name').textContent = product.name;
    document.getElementById('quickview-price').textContent = `Rs. ${product.price.toLocaleString()}`;
    document.getElementById('quickview-desc').textContent = product.description;
    document.getElementById('qv-frame').textContent = product.shape.charAt(0).toUpperCase() + product.shape.slice(1);
    document.getElementById('qv-material').textContent = product.material.charAt(0).toUpperCase() + product.material.slice(1);
    document.getElementById('qv-gender').textContent = product.gender.charAt(0).toUpperCase() + product.gender.slice(1);
    
    const modal = document.getElementById('quickview-modal');
    modal.classList.add('active');
    
    // Set up add to cart button
    document.getElementById('qv-add-cart').onclick = () => {
        addToCart(productId);
        modal.classList.remove('active');
    };
    
    document.getElementById('qv-add-wishlist').onclick = () => {
        toggleWishlist(productId);
    };
}

// Close quick view
document.addEventListener('click', (e) => {
    if (e.target.id === 'quickview-close' || e.target.closest('#quickview-close')) {
        document.getElementById('quickview-modal').classList.remove('active');
    }
    if (e.target.id === 'quickview-modal') {
        document.getElementById('quickview-modal').classList.remove('active');
    }
});

// ============================
// Cart System
// ============================
function initCart() {
    updateCartUI();
    
    document.getElementById('cart-btn').addEventListener('click', () => {
        document.getElementById('cart-sidebar').classList.add('active');
        document.getElementById('cart-overlay').classList.add('active');
    });
    
    document.getElementById('cart-close').addEventListener('click', closeCart);
    document.getElementById('cart-overlay').addEventListener('click', closeCart);
    
    document.getElementById('checkout-btn').addEventListener('click', () => {
        closeCart();
        navigateTo('order');
    });
}

function closeCart() {
    document.getElementById('cart-sidebar').classList.remove('active');
    document.getElementById('cart-overlay').classList.remove('active');
}

function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingIndex = cart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
        cart[existingIndex].quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }
    
    saveCart();
    updateCartUI();
    showToast(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

function updateCartQuantity(productId, delta) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(productId);
            return;
        }
        saveCart();
        updateCartUI();
    }
}

function saveCart() {
    localStorage.setItem('ezo_cart', JSON.stringify(cart));
}

function updateCartUI() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
    
    const cartItems = document.getElementById('cart-items');
    const cartFooter = document.getElementById('cart-footer');
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-bag"></i>
                <p>Your cart is empty</p>
                <a href="#shop" class="btn btn-primary btn-sm">Start Shopping</a>
            </div>
        `;
        cartFooter.style.display = 'none';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-img">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">Rs. ${item.price.toLocaleString()}</div>
                    <div class="cart-item-actions">
                        <div class="qty-control">
                            <button class="qty-btn" onclick="updateCartQuantity(${item.id}, -1)">−</button>
                            <span class="qty-value">${item.quantity}</span>
                            <button class="qty-btn" onclick="updateCartQuantity(${item.id}, 1)">+</button>
                        </div>
                        <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="Remove">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
        
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        document.getElementById('cart-total-price').textContent = `Rs. ${total.toLocaleString()}`;
        cartFooter.style.display = 'flex';
    }
}

// ============================
// Wishlist System
// ============================
function initWishlist() {
    updateWishlistUI();
    
    document.getElementById('wishlist-btn').addEventListener('click', () => {
        document.getElementById('wishlist-sidebar').classList.add('active');
        document.getElementById('wishlist-overlay').classList.add('active');
    });
    
    document.getElementById('wishlist-close').addEventListener('click', closeWishlist);
    document.getElementById('wishlist-overlay').addEventListener('click', closeWishlist);
}

function closeWishlist() {
    document.getElementById('wishlist-sidebar').classList.remove('active');
    document.getElementById('wishlist-overlay').classList.remove('active');
}

function toggleWishlist(productId) {
    const index = wishlist.indexOf(productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        showToast('Removed from wishlist');
    } else {
        wishlist.push(productId);
        const product = products.find(p => p.id === productId);
        showToast(`${product.name} added to wishlist!`);
    }
    localStorage.setItem('ezo_wishlist', JSON.stringify(wishlist));
    updateWishlistUI();
}

function updateWishlistUI() {
    document.getElementById('wishlist-count').textContent = wishlist.length;
    
    const container = document.getElementById('wishlist-items');
    
    if (wishlist.length === 0) {
        container.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-heart"></i>
                <p>Your wishlist is empty</p>
                <a href="#shop" class="btn btn-primary btn-sm">Browse Frames</a>
            </div>
        `;
    } else {
        container.innerHTML = wishlist.map(id => {
            const product = products.find(p => p.id === id);
            if (!product) return '';
            return `
                <div class="cart-item">
                    <div class="cart-item-img">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="cart-item-info">
                        <div class="cart-item-name">${product.name}</div>
                        <div class="cart-item-price">Rs. ${product.price.toLocaleString()}</div>
                        <div class="cart-item-actions">
                            <button class="btn btn-primary btn-sm" onclick="addToCart(${product.id}); toggleWishlist(${product.id});">
                                <i class="fas fa-shopping-bag"></i> Add to Cart
                            </button>
                            <button class="cart-item-remove" onclick="toggleWishlist(${product.id})" title="Remove">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }
}

// ============================
// Product Filters
// ============================
function initFilters() {
    // Shape filters
    document.querySelectorAll('.shape-filter').forEach(cb => {
        cb.addEventListener('change', applyFilters);
    });
    
    // Material filters
    document.querySelectorAll('.material-filter').forEach(cb => {
        cb.addEventListener('change', applyFilters);
    });
    
    // Gender filters
    document.querySelectorAll('.gender-filter').forEach(cb => {
        cb.addEventListener('change', applyFilters);
    });
    
    // Size filters
    document.querySelectorAll('.size-filter').forEach(cb => {
        cb.addEventListener('change', applyFilters);
    });
    
    // Color swatches
    document.querySelectorAll('.color-swatch').forEach(swatch => {
        swatch.addEventListener('click', () => {
            swatch.classList.toggle('active');
            applyFilters();
        });
    });
    
    // Price range
    const priceMin = document.getElementById('price-min');
    const priceMax = document.getElementById('price-max');
    
    if (priceMin && priceMax) {
        priceMin.addEventListener('input', () => {
            document.getElementById('price-min-val').textContent = `Rs. ${parseInt(priceMin.value).toLocaleString()}`;
            applyFilters();
        });
        
        priceMax.addEventListener('input', () => {
            document.getElementById('price-max-val').textContent = `Rs. ${parseInt(priceMax.value).toLocaleString()}`;
            applyFilters();
        });
    }
    
    // Sort
    document.getElementById('shop-sort-select').addEventListener('change', applyFilters);
    
    // Clear filters
    document.getElementById('clear-filters').addEventListener('click', () => {
        document.querySelectorAll('.shape-filter, .material-filter, .gender-filter, .size-filter').forEach(cb => cb.checked = false);
        document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
        if (priceMin) priceMin.value = 0;
        if (priceMax) priceMax.value = 15000;
        document.getElementById('price-min-val').textContent = 'Rs. 0';
        document.getElementById('price-max-val').textContent = 'Rs. 15,000';
        document.getElementById('shop-sort-select').value = 'featured';
        applyFilters();
    });
    
    // Mobile filter button
    document.getElementById('mobile-filter-btn').addEventListener('click', () => {
        document.getElementById('shop-sidebar').classList.toggle('active');
    });
    
    // Sunglasses category buttons
    document.querySelectorAll('.sun-cat-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.sun-cat-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderSunglasses(btn.getAttribute('data-suncat'));
        });
    });
    
    // Filter group toggle
    document.querySelectorAll('.filter-title').forEach(title => {
        title.addEventListener('click', () => {
            const targetId = title.getAttribute('data-toggle');
            const content = document.getElementById(targetId);
            if (content) {
                content.style.display = content.style.display === 'none' ? '' : 'none';
                title.querySelector('i').classList.toggle('fa-chevron-up');
            }
        });
    });
}

function applyFilters() {
    let filtered = products.filter(p => !p.isSunglasses);
    
    // Shape
    const shapes = [...document.querySelectorAll('.shape-filter:checked')].map(cb => cb.value);
    if (shapes.length > 0) {
        filtered = filtered.filter(p => shapes.includes(p.shape));
    }
    
    // Material
    const materials = [...document.querySelectorAll('.material-filter:checked')].map(cb => cb.value);
    if (materials.length > 0) {
        filtered = filtered.filter(p => materials.includes(p.material));
    }
    
    // Gender
    const genders = [...document.querySelectorAll('.gender-filter:checked')].map(cb => cb.value);
    if (genders.length > 0) {
        filtered = filtered.filter(p => genders.includes(p.gender));
    }
    
    // Size
    const sizes = [...document.querySelectorAll('.size-filter:checked')].map(cb => cb.value);
    if (sizes.length > 0) {
        filtered = filtered.filter(p => sizes.includes(p.size));
    }
    
    // Color
    const colors = [...document.querySelectorAll('.color-swatch.active')].map(s => s.getAttribute('data-color'));
    if (colors.length > 0) {
        filtered = filtered.filter(p => colors.includes(p.color));
    }
    
    // Price range
    const minPrice = parseInt(document.getElementById('price-min').value) || 0;
    const maxPrice = parseInt(document.getElementById('price-max').value) || 15000;
    filtered = filtered.filter(p => p.price >= minPrice && p.price <= maxPrice);
    
    // Sort
    const sortVal = document.getElementById('shop-sort-select').value;
    switch (sortVal) {
        case 'price-low':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filtered.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'rating':
            filtered.sort((a, b) => b.rating - a.rating);
            break;
        default:
            // featured - default order
            break;
    }
    
    renderShopProducts(filtered);
}

// ============================
// Prescription Steps
// ============================
function initPrescriptionSteps() {
    const prevBtn = document.getElementById('step-prev');
    const nextBtn = document.getElementById('step-next');
    
    prevBtn.addEventListener('click', () => {
        if (currentStep > 1) {
            goToStep(currentStep - 1);
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (currentStep < 5) {
            goToStep(currentStep + 1);
        }
    });
    
    // Lens option selection
    document.querySelectorAll('.lens-option').forEach(opt => {
        opt.addEventListener('click', () => {
            document.querySelectorAll('.lens-option').forEach(o => o.classList.remove('selected'));
            opt.classList.add('selected');
            selectedLens = {
                type: opt.getAttribute('data-lens'),
                name: opt.querySelector('h3').textContent,
                price: opt.querySelector('.lens-price').textContent
            };
        });
    });
    
    // Add to cart from prescription
    document.getElementById('rx-add-cart').addEventListener('click', () => {
        if (selectedFrame) {
            addToCart(selectedFrame.id);
            showToast('Prescription glasses added to cart!');
            // Reset
            currentStep = 1;
            selectedFrame = null;
            selectedLens = null;
            goToStep(1);
        } else {
            showToast('Please select a frame first.');
        }
    });
}

function selectFrame(product) {
    selectedFrame = product;
    // Update visual selection
    document.querySelectorAll('#rx-frames-grid .product-card').forEach(card => {
        card.classList.toggle('selected', parseInt(card.getAttribute('data-id')) === product.id);
    });
    showToast(`Selected: ${product.name}`);
}

function goToStep(step) {
    currentStep = step;
    
    // Update step progress
    document.querySelectorAll('.step-item').forEach((item, i) => {
        const s = i + 1;
        item.classList.remove('active', 'completed');
        if (s === step) item.classList.add('active');
        if (s < step) item.classList.add('completed');
    });
    
    // Update step lines
    document.querySelectorAll('.step-line').forEach((line, i) => {
        line.classList.toggle('active', i < step - 1);
    });
    
    // Show current panel
    document.querySelectorAll('.step-panel').forEach(panel => panel.classList.remove('active'));
    const panel = document.getElementById('step-' + step);
    if (panel) panel.classList.add('active');
    
    // Update buttons
    document.getElementById('step-prev').disabled = step === 1;
    document.getElementById('step-next').style.display = step === 5 ? 'none' : '';
    
    // Update summary on step 5
    if (step === 5) {
        updateOrderSummary();
    }
}

function updateOrderSummary() {
    document.getElementById('summary-frame').textContent = selectedFrame ? selectedFrame.name : '—';
    document.getElementById('summary-lens').textContent = selectedLens ? selectedLens.name : '—';
    document.getElementById('summary-rx').textContent = uploadedFile ? 'Uploaded' : 
        (document.getElementById('rx-od-sph').value ? 'Entered manually' : 'Not provided');
    
    let total = selectedFrame ? selectedFrame.price : 0;
    if (selectedLens) {
        const lensPrice = parseInt(selectedLens.price.replace(/[^0-9]/g, '')) || 0;
        total += lensPrice;
    }
    document.getElementById('summary-total').textContent = `Rs. ${total.toLocaleString()}`;
}

// ============================
// File Upload
// ============================
function initUpload() {
    const uploadArea = document.getElementById('upload-area');
    const fileInput = document.getElementById('rx-file-input');
    const preview = document.getElementById('upload-preview');
    const content = uploadArea.querySelector('.upload-content');
    
    uploadArea.addEventListener('click', () => {
        if (!uploadedFile) fileInput.click();
    });
    
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    });
    
    uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('dragover');
    });
    
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        const files = e.dataTransfer.files;
        if (files.length > 0) handleFile(files[0]);
    });
    
    fileInput.addEventListener('change', () => {
        if (fileInput.files.length > 0) handleFile(fileInput.files[0]);
    });
    
    document.getElementById('remove-file').addEventListener('click', (e) => {
        e.stopPropagation();
        uploadedFile = null;
        content.style.display = '';
        preview.style.display = 'none';
        fileInput.value = '';
    });
}

function handleFile(file) {
    if (file.size > 5 * 1024 * 1024) {
        showToast('File too large. Max 5MB allowed.');
        return;
    }
    
    uploadedFile = file;
    document.getElementById('upload-filename').textContent = file.name;
    document.querySelector('#upload-area .upload-content').style.display = 'none';
    document.getElementById('upload-preview').style.display = 'flex';
    showToast('Prescription uploaded successfully!');
}

// ============================
// Forms
// ============================
function initForms() {
    // Order form
    document.getElementById('place-order-btn').addEventListener('click', () => {
        const name = document.getElementById('order-name').value;
        const phone = document.getElementById('order-phone').value;
        const address = document.getElementById('order-address').value;
        
        if (!name || !phone || !address) {
            showToast('Please fill in all required fields.');
            return;
        }
        
        // Simulated order placement
        showToast('Order placed successfully! We will contact you shortly.');
        document.getElementById('order-form').reset();
    });
    
    // Contact form
    document.getElementById('send-message-btn').addEventListener('click', () => {
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const message = document.getElementById('contact-message').value;
        
        if (!name || !email || !message) {
            showToast('Please fill in all required fields.');
            return;
        }
        
        showToast('Message sent! We will reply within 24 hours.');
        document.getElementById('contact-form').reset();
    });
}

// ============================
// Toast Notifications
// ============================
function showToast(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span class="toast-message">${message}</span>
    `;
    container.appendChild(toast);
    
    setTimeout(() => {
        if (toast.parentNode) toast.remove();
    }, 3000);
}

// ============================
// Hero Particles
// ============================
function initParticles() {
    const container = document.getElementById('hero-particles');
    if (!container) return;
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: rgba(79, 163, 247, ${Math.random() * 0.3 + 0.1});
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: float ${Math.random() * 6 + 4}s ease-in-out infinite;
            animation-delay: ${Math.random() * 4}s;
        `;
        container.appendChild(particle);
    }
}

// ============================
// Account Button (Simple Modal)
// ============================
document.getElementById('account-btn').addEventListener('click', () => {
    showToast('Account feature coming soon!');
});
