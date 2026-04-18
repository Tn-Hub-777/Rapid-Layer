const MATERIALS = {
  pla: {
    label: "PLA",
    density: 1.24,
    rate: 3.0
  },
  petg: {
    label: "PETG",
    density: 1.27,
    rate: 3.5
  },
  abs: {
    label: "ABS",
    density: 1.04,
    rate: 3.5
  },
  tpu: {
    label: "TPU",
    density: 1.21,
    rate: 4.0
  }
};

const STORAGE_KEYS = {
  cart: "rapidlayer-cart",
  orders: "rapidlayer-orders",
  session: "rapidlayer-session",
  users: "rapidlayer-users"
};

const ORDER_STATUSES = [
  "Pending Review",
  "Queued",
  "In Production",
  "Quality Check",
  "Completed"
];

const CATALOG_ITEMS = [
  {
    id: "drone-frame",
    name: "Micro Drone Frame",
    description: "Lightweight quadcopter frame tuned for compact robotics, lab demos, and rapid assembly testing.",
    image: "images/catalog/drone-frame.jpg",
    materialKey: "petg",
    category: "Robotics",
    weightPerPart: 118,
    totalPrice: 2499,
    dimensionsMm: { x: 164, y: 164, z: 42 },
    leadTime: "2 day dispatch",
    featured: true
  },
  {
    id: "enclosure-tray",
    name: "Electronics Enclosure Tray",
    description: "Deep-walled tray with clean cable space and mounting pockets for control boards and sensor packs.",
    image: "images/catalog/enclosure-tray.jpg",
    materialKey: "pla",
    category: "Enclosures",
    weightPerPart: 96,
    totalPrice: 1490,
    dimensionsMm: { x: 172, y: 118, z: 34 },
    leadTime: "Next day dispatch",
    featured: true
  },
  {
    id: "mounting-bracket",
    name: "Precision Mounting Bracket",
    description: "Rigid alignment bracket for machine retrofits, electronics fixtures, and low-volume jigging.",
    image: "images/catalog/mounting-bracket.jpg",
    materialKey: "abs",
    category: "Fixtures",
    weightPerPart: 74,
    totalPrice: 1125,
    dimensionsMm: { x: 108, y: 84, z: 58 },
    leadTime: "2 day dispatch",
    featured: true
  },
  {
    id: "wheel-kit",
    name: "Turbine Wheel Kit",
    description: "Matched wheel and ring set for experimental drives, model assemblies, and airflow prototyping.",
    image: "images/catalog/wheel-kit.jpg",
    materialKey: "pla",
    category: "Motion",
    weightPerPart: 82,
    totalPrice: 1370,
    dimensionsMm: { x: 122, y: 122, z: 28 },
    leadTime: "2 day dispatch"
  },
  {
    id: "shelf-bracket",
    name: "Reinforced Wall Bracket",
    description: "Triangulated support bracket for compact mounting, shop fixtures, and custom interior fitouts.",
    image: "images/catalog/shelf-bracket.jpg",
    materialKey: "petg",
    category: "Mounting",
    weightPerPart: 102,
    totalPrice: 1595,
    dimensionsMm: { x: 134, y: 112, z: 68 },
    leadTime: "3 day dispatch"
  },
  {
    id: "snap-clip",
    name: "Snap-fit Sensor Clip",
    description: "Palm-sized retention clip designed for quick attachment, repeat positioning, and neat cable management.",
    image: "images/catalog/snap-clip.jpg",
    materialKey: "tpu",
    category: "Accessories",
    weightPerPart: 24,
    totalPrice: 420,
    dimensionsMm: { x: 62, y: 36, z: 18 },
    leadTime: "Same day dispatch"
  },
  {
    id: "carriage-block",
    name: "Carriage Block",
    description: "Dense utility block with through-holes for sliders, rails, and print-on-demand mechanical builds.",
    image: "images/catalog/carriage-block.jpg",
    materialKey: "abs",
    category: "Mechanical",
    weightPerPart: 88,
    totalPrice: 1340,
    dimensionsMm: { x: 86, y: 74, z: 42 },
    leadTime: "2 day dispatch"
  },
  {
    id: "tool-stand",
    name: "Ergonomic Tool Stand",
    description: "Angled handheld stand suited for workshop tools, docks, or custom product display fixtures.",
    image: "images/catalog/tool-stand.jpg",
    materialKey: "pla",
    category: "Workshop",
    weightPerPart: 132,
    totalPrice: 1785,
    dimensionsMm: { x: 138, y: 96, z: 142 },
    leadTime: "3 day dispatch"
  },
  {
    id: "deadpool-charm",
    name: "Deadpool Mini Charm",
    description: "Painted collectible key charm showing how RapidLayer can move from utility parts into custom merch runs.",
    image: "images/catalog/deadpool-charm.jpg",
    materialKey: "pla",
    category: "Collectibles",
    weightPerPart: 18,
    totalPrice: 349,
    dimensionsMm: { x: 42, y: 30, z: 8 },
    leadTime: "Next day dispatch"
  },
  {
    id: "organizer-tray",
    name: "Organizer Tray Insert",
    description: "Wide tray insert for dashboard, desk, or device-storage projects with a clean presentation finish.",
    image: "images/catalog/organizer-tray.jpg",
    materialKey: "petg",
    category: "Lifestyle",
    weightPerPart: 140,
    totalPrice: 1990,
    dimensionsMm: { x: 208, y: 126, z: 26 },
    leadTime: "3 day dispatch"
  }
];

const DEFAULT_USERS = [
  {
    id: "admin-core",
    name: "Aarav Mehta",
    email: "admin@rapidlayer.in",
    password: "rapidlayer123",
    role: "admin",
    company: "RapidLayer Operations",
    status: "active",
    joinDate: "2026-01-04T09:30:00.000Z",
    lastActive: "2026-04-18T09:15:00.000Z"
  },
  {
    id: "user-skylabs",
    name: "Mira Kulkarni",
    email: "mira@skylabs.in",
    password: "prototype123",
    role: "customer",
    company: "SkyLabs Robotics",
    status: "active",
    joinDate: "2026-02-12T10:00:00.000Z",
    lastActive: "2026-04-17T17:10:00.000Z"
  },
  {
    id: "user-lattice",
    name: "Rohan Sen",
    email: "rohan@latticeworks.in",
    password: "printbatch123",
    role: "customer",
    company: "Lattice Works",
    status: "active",
    joinDate: "2026-03-03T08:20:00.000Z",
    lastActive: "2026-04-16T11:42:00.000Z"
  }
];

const DEFAULT_ORDERS = [
  {
    id: "seed-order-2401",
    number: "RL-2401",
    userId: "user-skylabs",
    customerName: "Mira Kulkarni",
    customerEmail: "mira@skylabs.in",
    company: "SkyLabs Robotics",
    source: "quote",
    status: "In Production",
    totalQuantity: 4,
    totalWeight: 148.32,
    totalPrice: 519.12,
    createdAt: "2026-04-14T11:00:00.000Z",
    items: [
      {
        id: "seed-item-a",
        type: "quote",
        fileName: "Drone_arm_brace_v4.stl",
        materialKey: "petg",
        materialLabel: "PETG",
        quantity: 4,
        volumeCm3: 29.2,
        weightPerPart: 37.08,
        totalWeight: 148.32,
        unitRate: 3.5,
        totalPrice: 519.12,
        dimensionsMm: { x: 112.4, y: 34.6, z: 26.5 },
        description: "Functional brace batch for a compact aerial assembly."
      }
    ]
  },
  {
    id: "seed-order-2402",
    number: "RL-2402",
    userId: "user-lattice",
    customerName: "Rohan Sen",
    customerEmail: "rohan@latticeworks.in",
    company: "Lattice Works",
    source: "catalog",
    status: "Pending Review",
    totalQuantity: 2,
    totalWeight: 192,
    totalPrice: 2980,
    createdAt: "2026-04-17T08:40:00.000Z",
    items: [
      createCatalogCartItem(CATALOG_ITEMS.find((item) => item.id === "enclosure-tray"), 2, "seed-item-b")
    ]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  bootstrapAppData();
  ensureLogout();
  syncSessionUi();
  updateCartCount();
  initRevealAnimations();
  initTiltCards();

  const page = document.body.dataset.page;

  if (page === "home") {
    initHomePage();
  }

  if (page === "products") {
    initProductsPage();
  }

  if (page === "upload") {
    initUploadPage();
  }

  if (page === "cart") {
    initCartPage();
  }

  if (page === "admin") {
    initAdminPage();
  }

  if (page === "login") {
    initLoginPage();
  }
});

window.addEventListener("storage", () => {
  updateCartCount();
  syncSessionUi();
});

function bootstrapAppData() {
  if (!readUsers().length) {
    saveUsers(DEFAULT_USERS);
  }

  if (!readOrders().length) {
    saveOrders(DEFAULT_ORDERS);
  }
}

function ensureLogout() {
  if (typeof window.logout === "function") {
    return;
  }

  window.logout = logout;
}

async function logout() {
  clearSession();

  try {
    if (window.supabaseClient?.auth?.signOut) {
      await window.supabaseClient.auth.signOut();
    }
  } catch (error) {
    console.error("Supabase sign out failed:", error);
  }

  window.location.href = "login.html";
}

function syncSessionUi() {
  const actionButton = document.querySelector(".logout");
  const session = getSession();

  if (!actionButton) {
    return;
  }

  if (session) {
    actionButton.textContent = "Logout";
    actionButton.disabled = false;
    actionButton.onclick = logout;
    return;
  }

  actionButton.textContent = "Login";
  actionButton.onclick = () => {
    window.location.href = "login.html";
  };
}

function initRevealAnimations() {
  if (!window.gsap || !window.ScrollTrigger) {
    return;
  }

  window.gsap.registerPlugin(window.ScrollTrigger);

  document.querySelectorAll("[data-reveal]").forEach((element) => {
    window.gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 34
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.95,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 84%"
        }
      }
    );
  });
}

function initTiltCards() {
  if (!window.matchMedia("(pointer:fine)").matches) {
    return;
  }

  document.querySelectorAll("[data-tilt]").forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const offsetX = event.clientX - rect.left - rect.width / 2;
      const offsetY = event.clientY - rect.top - rect.height / 2;
      const rotateY = (offsetX / rect.width) * 10;
      const rotateX = -(offsetY / rect.height) * 10;

      card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg)";
    });
  });
}

function initHomePage() {
  initHomeScene();
  renderFeaturedProducts();
}

function initHomeScene() {
  if (!window.THREE) {
    return;
  }

  const canvas = document.getElementById("homeObject");
  const stage = document.getElementById("homeModelBg");

  if (!canvas || !stage) {
    return;
  }

  const THREE = window.THREE;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true
  });

  renderer.localClippingEnabled = true;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x0a1620, 1.08);
  const keyLight = new THREE.DirectionalLight(0xfff3e7, 1.4);
  const rimLight = new THREE.DirectionalLight(0xa4d8ff, 0.78);
  hemiLight.position.set(0, 1, 0);
  keyLight.position.set(5.5, 7.5, 4.5);
  rimLight.position.set(-4.5, 3.5, 5.2);
  scene.add(hemiLight, keyLight, rimLight);

  const clipPlane = new THREE.Plane(new THREE.Vector3(0, -1, 0), 0);
  const rig = new THREE.Group();
  const modelGroup = new THREE.Group();
  rig.add(modelGroup);
  scene.add(rig);

  function makePrintMaterial({
    color,
    emissive = 0x84d5ff,
    emissiveIntensity = 0.02,
    roughness = 0.3,
    metalness = 0.14
  }) {
    return new THREE.MeshPhysicalMaterial({
      color,
      emissive,
      emissiveIntensity,
      roughness,
      metalness,
      clearcoat: 0.92,
      clearcoatRoughness: 0.18,
      clippingPlanes: [clipPlane]
    });
  }

  function addBox(parent, width, height, depth, material, x, y, z, rx = 0, ry = 0, rz = 0) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), material);
    mesh.position.set(x, y, z);
    mesh.rotation.set(rx, ry, rz);
    parent.add(mesh);
    return mesh;
  }

  function buildBeam(start, end, radius, material) {
    const direction = end.clone().sub(start);
    const geometry = new THREE.CylinderGeometry(radius, radius, direction.length(), 12);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.copy(start.clone().add(end).multiplyScalar(0.5));
    mesh.quaternion.setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      direction.clone().normalize()
    );
    return mesh;
  }

  const frameMaterial = makePrintMaterial({
    color: 0xf2f5f7,
    emissive: 0x9dd6ff,
    emissiveIntensity: 0.022,
    roughness: 0.24,
    metalness: 0.12
  });

  const braceMaterial = makePrintMaterial({
    color: 0xbdc7ce,
    emissive: 0x86c8ff,
    emissiveIntensity: 0.016,
    roughness: 0.34,
    metalness: 0.18
  });

  const accentMaterial = makePrintMaterial({
    color: 0x456289,
    emissive: 0x5b7cae,
    emissiveIntensity: 0.04,
    roughness: 0.3,
    metalness: 0.18
  });

  const copperMaterial = makePrintMaterial({
    color: 0xc47d57,
    emissive: 0xffa36f,
    emissiveIntensity: 0.05,
    roughness: 0.28,
    metalness: 0.1
  });

  const propMaterial = makePrintMaterial({
    color: 0xdbe1e6,
    emissive: 0xf0f5fa,
    emissiveIntensity: 0.012,
    roughness: 0.46,
    metalness: 0.06
  });

  addBox(modelGroup, 0.78, 0.08, 0.78, frameMaterial, 0, 0.08, 0, 0, Math.PI / 4, 0);
  addBox(modelGroup, 0.62, 0.06, 0.62, braceMaterial, 0, 0.02, 0, 0, Math.PI / 4, 0);
  addBox(modelGroup, 0.28, 0.16, 0.26, frameMaterial, 0, 0.13, 0);
  addBox(modelGroup, 0.18, 0.08, 0.18, braceMaterial, 0, 0.24, 0);

  const armConfigs = [
    { x: 1.32, z: 1.32 },
    { x: -1.32, z: 1.32 },
    { x: -1.32, z: -1.32 },
    { x: 1.32, z: -1.32 }
  ];

  armConfigs.forEach(({ x, z }, index) => {
    const direction = new THREE.Vector3(x, 0, z).normalize();
    const lateral = new THREE.Vector3(-direction.z, 0, direction.x);
    const root = direction.clone().multiplyScalar(0.46).add(new THREE.Vector3(0, 0.06, 0));
    const tip = new THREE.Vector3(x, 0.06, z);

    const topLeftStart = root.clone().add(lateral.clone().multiplyScalar(0.065)).add(new THREE.Vector3(0, 0.05, 0));
    const topRightStart = root.clone().add(lateral.clone().multiplyScalar(-0.065)).add(new THREE.Vector3(0, 0.05, 0));
    const bottomStart = root.clone().add(new THREE.Vector3(0, -0.04, 0));

    const topLeftEnd = tip.clone().add(lateral.clone().multiplyScalar(0.05)).add(new THREE.Vector3(0, 0.035, 0));
    const topRightEnd = tip.clone().add(lateral.clone().multiplyScalar(-0.05)).add(new THREE.Vector3(0, 0.035, 0));
    const bottomEnd = tip.clone().add(new THREE.Vector3(0, -0.025, 0));

    modelGroup.add(buildBeam(topLeftStart, topLeftEnd, 0.016, frameMaterial));
    modelGroup.add(buildBeam(topRightStart, topRightEnd, 0.016, frameMaterial));
    modelGroup.add(buildBeam(bottomStart, bottomEnd, 0.016, frameMaterial));

    [0.28, 0.52, 0.76].forEach((fraction) => {
      modelGroup.add(
        buildBeam(
          topLeftStart.clone().lerp(topLeftEnd, fraction),
          bottomStart.clone().lerp(bottomEnd, Math.min(fraction + 0.1, 0.96)),
          0.011,
          braceMaterial
        )
      );
      modelGroup.add(
        buildBeam(
          topRightStart.clone().lerp(topRightEnd, fraction),
          bottomStart.clone().lerp(bottomEnd, Math.max(fraction - 0.1, 0.12)),
          0.011,
          braceMaterial
        )
      );
    });

    addBox(
      modelGroup,
      0.2,
      0.06,
      0.12,
      braceMaterial,
      direction.x * 0.78,
      0.04,
      direction.z * 0.78,
      0,
      Math.atan2(direction.x, direction.z),
      0
    );

    const motorBase = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 0.12, 20), accentMaterial);
    motorBase.position.copy(tip);
    modelGroup.add(motorBase);

    const motorBand = new THREE.Mesh(new THREE.CylinderGeometry(0.115, 0.115, 0.05, 20), copperMaterial);
    motorBand.position.copy(tip.clone().add(new THREE.Vector3(0, 0.075, 0)));
    modelGroup.add(motorBand);

    const motorCap = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.08, 18), frameMaterial);
    motorCap.position.copy(tip.clone().add(new THREE.Vector3(0, 0.14, 0)));
    modelGroup.add(motorCap);

    const propGroup = new THREE.Group();
    propGroup.position.copy(tip.clone().add(new THREE.Vector3(0, 0.22, 0)));
    propGroup.rotation.y = (Math.PI / 4) * index;

    const bladeA = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.014, 0.08), propMaterial);
    bladeA.position.x = 0.02;
    bladeA.rotation.z = 0.04;

    const bladeB = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.014, 0.08), propMaterial);
    bladeB.rotation.y = Math.PI / 2;
    bladeB.position.z = -0.02;
    bladeB.rotation.x = -0.04;

    const propHub = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.042, 14), braceMaterial);
    propGroup.add(bladeA, bladeB, propHub);
    modelGroup.add(propGroup);
  });

  addBox(modelGroup, 0.32, 0.1, 0.08, braceMaterial, -0.48, 0.02, 0.02, 0, 0.25, 0);
  addBox(modelGroup, 0.18, 0.1, 0.14, frameMaterial, 0.54, 0.03, -0.02, 0, -0.16, 0);
  addBox(modelGroup, 0.26, 0.02, 0.26, frameMaterial, 0, 0.28, 0);

  const bounds = new THREE.Box3().setFromObject(modelGroup);
  const minY = bounds.min.y;
  const maxY = bounds.max.y;
  const modelHeight = Math.max(maxY - minY, 0.1);

  const motionState = {
    progress: 0,
    targetProgress: 0,
    targetBoost: 0,
    boost: 0,
    spinAngle: 0
  };

  if (window.ScrollTrigger) {
    window.ScrollTrigger.create({
      trigger: document.documentElement,
      start: "top top",
      end: "max",
      onUpdate(self) {
        motionState.targetProgress = self.progress;
        motionState.targetBoost = Math.min(Math.abs(self.getVelocity()) / 2200, 2.4);
      }
    });
  } else {
    const updateProgress = () => {
      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      motionState.targetProgress = window.scrollY / maxScroll;
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
  }

  const clock = new THREE.Clock();

  function resizeScene() {
    const width = stage.clientWidth || window.innerWidth;
    const height = stage.clientHeight || window.innerHeight;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  function getRigOffsetX() {
    if (window.innerWidth < 900) {
      return 0;
    }

    return 1.3;
  }

  function animate() {
    const elapsed = clock.getElapsedTime();
    motionState.progress += (motionState.targetProgress - motionState.progress) * 0.1;
    const visibleProgress = Math.max(motionState.progress, 0.015);
    const revealY = minY + modelHeight * visibleProgress;
    const orbitProgress = motionState.progress;
    const orbitAngle = 0.72 + orbitProgress * 0.92;
    const radius = THREE.MathUtils.lerp(6.6, 5.28, orbitProgress);
    const height = THREE.MathUtils.lerp(2.85, 2.08, orbitProgress);

    motionState.boost += (motionState.targetBoost - motionState.boost) * 0.16;
    motionState.targetBoost *= 0.9;
    motionState.spinAngle += 0.0028 + motionState.boost * 0.026;

    clipPlane.constant = revealY;
    rig.rotation.y = -0.28 + motionState.spinAngle + Math.sin(elapsed * 0.22) * 0.04;
    rig.rotation.x = Math.sin(elapsed * 0.28) * 0.02;
    rig.position.y = -0.08;
    rig.position.x = getRigOffsetX();

    camera.position.set(Math.cos(orbitAngle) * radius, height, Math.sin(orbitAngle) * radius);
    camera.lookAt(rig.position.x, 0.18, 0);

    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
  }

  window.addEventListener("resize", resizeScene);
  resizeScene();
  animate();
}

function renderFeaturedProducts() {
  const container = document.getElementById("featuredCatalog");

  if (!container) {
    return;
  }

  container.innerHTML = getFeaturedCatalogItems()
    .map((product) => renderProductCard(product, true))
    .join("");

  bindCatalogActions(container, {
    quantitySelector: false
  });
}

function initProductsPage() {
  const container = document.getElementById("catalogGrid");
  const status = document.getElementById("catalogStatus");

  if (!container) {
    return;
  }

  container.innerHTML = CATALOG_ITEMS.map((product) => renderProductCard(product, false)).join("");
  bindCatalogActions(container, {
    quantitySelector: true,
    statusElement: status
  });
}

function bindCatalogActions(container, options = {}) {
  const { quantitySelector = false, statusElement = null } = options;

  container.addEventListener("click", (event) => {
    const button = event.target.closest("[data-add-product]");

    if (!button) {
      return;
    }

    const product = getCatalogItem(button.dataset.addProduct);

    if (!product) {
      return;
    }

    const quantity = quantitySelector
      ? getProductQuantity(container, product.id)
      : 1;

    addCatalogProductToCart(product, quantity);

    if (statusElement) {
      statusElement.textContent = `${product.name} added to cart with quantity ${quantity}.`;
      statusElement.classList.remove("is-error");
    }
  });
}

function getProductQuantity(container, productId) {
  const input = container.querySelector(`[data-product-quantity="${productId}"]`);
  const quantity = Number.parseInt(input?.value || "1", 10);
  return Number.isFinite(quantity) && quantity > 0 ? quantity : 1;
}

function addCatalogProductToCart(product, quantity = 1) {
  const cart = readCart();
  cart.push(createCatalogCartItem(product, quantity));
  saveCart(cart);
  updateCartCount();
}

function renderProductCard(product, compact = false) {
  const material = MATERIALS[product.materialKey];
  const cardClass = compact ? "catalog-card compact-card glass-card" : "catalog-card glass-card";

  return `
    <article class="${cardClass}" data-tilt>
      <div class="catalog-image-wrap">
        <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}">
      </div>
      <div class="catalog-body">
        <div class="catalog-head">
          <p class="panel-label">${escapeHtml(product.category)}</p>
          <h3>${escapeHtml(product.name)}</h3>
        </div>
        <p>${escapeHtml(product.description)}</p>
        <div class="catalog-meta">
          <div class="meta-chip">
            <span>Material</span>
            <strong>${escapeHtml(material.label)}</strong>
          </div>
          <div class="meta-chip">
            <span>Weight</span>
            <strong>${formatMass(product.weightPerPart)}</strong>
          </div>
          <div class="meta-chip">
            <span>Lead Time</span>
            <strong>${escapeHtml(product.leadTime)}</strong>
          </div>
          <div class="meta-chip">
            <span>Price</span>
            <strong>${formatCurrency(product.totalPrice)}</strong>
          </div>
        </div>
        ${compact ? "" : `
          <div class="catalog-actions">
            <label class="field compact-field">
              <span>Quantity</span>
              <input type="number" min="1" step="1" value="1" data-product-quantity="${escapeHtml(product.id)}">
            </label>
            <button class="button button-primary" type="button" data-add-product="${escapeHtml(product.id)}">Add to Cart</button>
          </div>
        `}
        ${compact ? `<button class="button button-secondary" type="button" data-add-product="${escapeHtml(product.id)}">Add to Cart</button>` : ""}
      </div>
    </article>
  `;
}

function initUploadPage() {
  const viewerElement = document.getElementById("modelViewer");
  const placeholderElement = viewerElement?.querySelector(".viewer-placeholder");
  const fileInput = document.getElementById("fileInput");
  const dropZone = document.getElementById("dropZone");
  const materialSelect = document.getElementById("materialSelect");
  const quantityInput = document.getElementById("quantityInput");
  const addToCartButton = document.getElementById("addToCartButton");
  const selectedFileName = document.getElementById("selectedFileName");
  const statusElement = document.getElementById("uploadStatus");
  const volumeValue = document.getElementById("volumeValue");
  const weightValue = document.getElementById("weightValue");
  const totalWeightValue = document.getElementById("totalWeightValue");
  const priceValue = document.getElementById("priceValue");
  const materialRateValue = document.getElementById("materialRateValue");
  const dimensionsValue = document.getElementById("dimensionsValue");

  if (!viewerElement || !fileInput || !dropZone || !materialSelect || !quantityInput || !addToCartButton) {
    return;
  }

  const THREE = window.THREE || null;
  const OrbitControlsCtor = window.THREE?.OrbitControls || window.OrbitControls || null;
  let scene = null;
  let camera = null;
  let renderer = null;
  let grid = null;
  let controls = null;
  let currentModelGroup = null;
  let viewerReady = false;

  if (THREE) {
    try {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(42, 1, 0.1, 4000);
      camera.position.set(160, 120, 220);

      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
      });

      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      viewerElement.appendChild(renderer.domElement);

      const ambientLight = new THREE.AmbientLight(0xffffff, 1.15);
      const keyLight = new THREE.DirectionalLight(0xffd2ae, 1.4);
      keyLight.position.set(130, 140, 170);
      const fillLight = new THREE.PointLight(0x7ed8cb, 1.1, 1500);
      fillLight.position.set(-120, 40, 140);
      grid = new THREE.GridHelper(260, 18, 0x335161, 0x1e2d37);
      grid.position.y = -70;
      grid.material.transparent = true;
      grid.material.opacity = 0.4;

      scene.add(ambientLight, keyLight, fillLight, grid);

      controls = OrbitControlsCtor
        ? new OrbitControlsCtor(camera, renderer.domElement)
        : null;

      if (controls) {
        controls.enableDamping = true;
        controls.enablePan = false;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 1.1;
      }

      viewerReady = true;
    } catch (error) {
      console.error("Viewer initialization failed:", error);
      viewerReady = false;
    }
  }

  const quoteState = {
    fileName: "",
    volumeCm3: 0,
    positions: null,
    dimensionsMm: {
      x: 0,
      y: 0,
      z: 0
    }
  };

  function resizeViewer() {
    if (!viewerReady || !renderer || !camera) {
      return;
    }

    const width = viewerElement.clientWidth;
    const height = viewerElement.clientHeight;

    if (!width || !height) {
      return;
    }

    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  function animate() {
    if (!viewerReady || !renderer || !scene || !camera) {
      return;
    }

    if (controls) {
      controls.update();
    }

    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
  }

  function setStatus(message, isError = false) {
    statusElement.textContent = message;
    statusElement.classList.toggle("is-error", isError);
  }

  function getQuantity() {
    const quantity = Number.parseInt(quantityInput.value, 10);

    if (!Number.isFinite(quantity) || quantity < 1) {
      quantityInput.value = "1";
      return 1;
    }

    return quantity;
  }

  function updateMaterialRateLabel() {
    const material = MATERIALS[materialSelect.value];
    materialRateValue.textContent = `Rs ${material.rate.toFixed(2)} / g`;
  }

  function updateQuoteDisplay() {
    updateMaterialRateLabel();

    if (!quoteState.volumeCm3) {
      volumeValue.textContent = "0.00 cm3";
      weightValue.textContent = "0.00 g";
      totalWeightValue.textContent = "0.00 g";
      priceValue.textContent = "Rs 0.00";
      dimensionsValue.textContent = "0 x 0 x 0 mm";
      addToCartButton.disabled = true;
      return;
    }

    const quote = calculateQuoteForVolume(quoteState.volumeCm3, materialSelect.value, getQuantity());
    volumeValue.textContent = formatVolume(quoteState.volumeCm3);
    weightValue.textContent = formatMass(quote.weightPerPart);
    totalWeightValue.textContent = formatMass(quote.totalWeight);
    priceValue.textContent = formatCurrency(quote.totalPrice);
    dimensionsValue.textContent = formatDimensions(quoteState.dimensionsMm);
    addToCartButton.disabled = false;
  }

  function fitCameraToModel(modelGroup) {
    if (!viewerReady || !camera || !THREE || !grid) {
      return;
    }

    const bounds = new THREE.Box3().setFromObject(modelGroup);
    const size = bounds.getSize(new THREE.Vector3());
    const center = bounds.getCenter(new THREE.Vector3());
    const maxDimension = Math.max(size.x, size.y, size.z, 1);
    const fitHeightDistance = maxDimension / (2 * Math.tan((Math.PI * camera.fov) / 360));
    const distance = fitHeightDistance * 1.75;

    camera.position.set(distance * 0.8, distance * 0.42, distance);
    camera.near = Math.max(distance / 100, 0.1);
    camera.far = distance * 12;
    camera.updateProjectionMatrix();

    if (controls) {
      controls.target.copy(center);
      controls.update();
    }

    grid.position.y = bounds.min.y - size.y * 0.12;
  }

  function renderGeometry(positions) {
    if (!viewerReady || !scene || !THREE) {
      return;
    }

    if (currentModelGroup) {
      currentModelGroup.traverse((child) => {
        if (child.geometry) {
          child.geometry.dispose();
        }

        if (child.material?.dispose) {
          child.material.dispose();
        }
      });

      scene.remove(currentModelGroup);
    }

    const geometry = buildGeometryFromPositions(positions, THREE);
    const solidMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xf1ede8,
      emissive: 0xff8b47,
      emissiveIntensity: 0.08,
      metalness: 0.22,
      roughness: 0.22,
      clearcoat: 1,
      clearcoatRoughness: 0.1
    });

    const mesh = new THREE.Mesh(geometry, solidMaterial);
    const edges = new THREE.LineSegments(
      new THREE.EdgesGeometry(geometry),
      new THREE.LineBasicMaterial({
        color: 0xff8b47,
        transparent: true,
        opacity: 0.3
      })
    );

    currentModelGroup = new THREE.Group();
    currentModelGroup.add(mesh, edges);
    scene.add(currentModelGroup);

    fitCameraToModel(currentModelGroup);

    if (placeholderElement) {
      placeholderElement.classList.add("is-hidden");
    }
  }

  async function handleFile(file) {
    if (!file) {
      return;
    }

    if (!/\.stl$/i.test(file.name)) {
      setStatus("Please upload an STL file to calculate weight and pricing.", true);
      return;
    }

    selectedFileName.textContent = file.name;
    setStatus(`Analyzing ${file.name}...`);

    try {
      const buffer = await file.arrayBuffer();
      const parsedModel = parseStlBuffer(buffer);

      quoteState.fileName = file.name;
      quoteState.positions = parsedModel.positions;
      quoteState.volumeCm3 = parsedModel.volumeCm3;
      quoteState.dimensionsMm = parsedModel.dimensionsMm;

      renderGeometry(parsedModel.positions);
      updateQuoteDisplay();
      setStatus(
        viewerReady
          ? "Model analyzed successfully. Weight uses volume x density and price uses total weight x material rate."
          : "Model analyzed successfully. Preview is unavailable here, but weight and pricing are calculated correctly."
      );
    } catch (error) {
      console.error("Failed to analyze STL:", error);
      setStatus("The STL could not be parsed. Please try another printable model.", true);
    }
  }

  function bindDropZone() {
    dropZone.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        fileInput.click();
      }
    });

    fileInput.addEventListener("change", (event) => {
      handleFile(event.target.files?.[0]);
      fileInput.value = "";
    });

    ["dragenter", "dragover"].forEach((eventName) => {
      dropZone.addEventListener(eventName, (event) => {
        event.preventDefault();
        dropZone.classList.add("is-dragover");
      });
    });

    ["dragleave", "dragend"].forEach((eventName) => {
      dropZone.addEventListener(eventName, () => {
        dropZone.classList.remove("is-dragover");
      });
    });

    dropZone.addEventListener("drop", (event) => {
      event.preventDefault();
      dropZone.classList.remove("is-dragover");
      handleFile(event.dataTransfer?.files?.[0]);
    });
  }

  function addQuoteToCart() {
    if (!quoteState.volumeCm3 || !quoteState.fileName) {
      setStatus("Upload an STL model before adding a quote to the cart.", true);
      return;
    }

    const quantity = getQuantity();
    const quote = calculateQuoteForVolume(quoteState.volumeCm3, materialSelect.value, quantity);
    const cart = readCart();

    cart.push({
      id: createId(),
      type: "quote",
      fileName: quoteState.fileName,
      description: "STL-generated production quote",
      materialKey: materialSelect.value,
      materialLabel: quote.material.label,
      quantity,
      volumeCm3: roundNumber(quoteState.volumeCm3, 2),
      weightPerPart: roundNumber(quote.weightPerPart, 2),
      totalWeight: roundNumber(quote.totalWeight, 2),
      unitRate: quote.material.rate,
      totalPrice: roundNumber(quote.totalPrice, 2),
      dimensionsMm: {
        x: roundNumber(quoteState.dimensionsMm.x, 1),
        y: roundNumber(quoteState.dimensionsMm.y, 1),
        z: roundNumber(quoteState.dimensionsMm.z, 1)
      },
      createdAt: new Date().toISOString()
    });

    saveCart(cart);
    updateCartCount();
    setStatus("Quote added to cart. You can continue uploading or move to the cart to place the production request.");
  }

  materialSelect.addEventListener("change", updateQuoteDisplay);
  quantityInput.addEventListener("input", updateQuoteDisplay);
  addToCartButton.addEventListener("click", addQuoteToCart);

  bindDropZone();
  resizeViewer();
  updateQuoteDisplay();

  if (viewerReady) {
    animate();
    window.addEventListener("resize", resizeViewer);
  } else if (placeholderElement) {
    placeholderElement.innerHTML = "<p>Preview unavailable in this browser. Upload still calculates volume, weight, and price.</p>";
  }
}

function buildGeometryFromPositions(positions, THREE) {
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.computeVertexNormals();
  geometry.computeBoundingBox();

  const center = geometry.boundingBox.getCenter(new THREE.Vector3());
  geometry.translate(-center.x, -center.y, -center.z);

  return geometry;
}

function parseStlBuffer(buffer) {
  const positions = isBinaryStl(buffer)
    ? parseBinaryStl(buffer)
    : parseAsciiStl(buffer);

  if (!positions.length || positions.length % 9 !== 0) {
    throw new Error("Invalid STL triangle data.");
  }

  const dimensionsMm = getDimensionsFromPositions(positions);

  return {
    positions,
    dimensionsMm,
    volumeCm3: calculateVolumeFromPositions(positions)
  };
}

function isBinaryStl(buffer) {
  if (buffer.byteLength < 84) {
    return false;
  }

  const dataView = new DataView(buffer);
  const faceCount = dataView.getUint32(80, true);
  const expectedLength = 84 + faceCount * 50;

  if (expectedLength === buffer.byteLength) {
    return true;
  }

  const header = new TextDecoder().decode(buffer.slice(0, 5)).toLowerCase();
  return header !== "solid";
}

function parseBinaryStl(buffer) {
  const dataView = new DataView(buffer);
  const faceCount = dataView.getUint32(80, true);
  const positions = new Float32Array(faceCount * 9);
  let positionIndex = 0;
  let offset = 84;

  for (let faceIndex = 0; faceIndex < faceCount; faceIndex += 1) {
    offset += 12;

    for (let vertexIndex = 0; vertexIndex < 3; vertexIndex += 1) {
      positions[positionIndex] = dataView.getFloat32(offset, true);
      positions[positionIndex + 1] = dataView.getFloat32(offset + 4, true);
      positions[positionIndex + 2] = dataView.getFloat32(offset + 8, true);
      positionIndex += 3;
      offset += 12;
    }

    offset += 2;
  }

  return positions;
}

function parseAsciiStl(buffer) {
  const text = new TextDecoder().decode(buffer);
  const matches = text.matchAll(/vertex\s+([+-]?\d*\.?\d+(?:[eE][+-]?\d+)?)\s+([+-]?\d*\.?\d+(?:[eE][+-]?\d+)?)\s+([+-]?\d*\.?\d+(?:[eE][+-]?\d+)?)/g);
  const positions = [];

  for (const match of matches) {
    positions.push(
      Number.parseFloat(match[1]),
      Number.parseFloat(match[2]),
      Number.parseFloat(match[3])
    );
  }

  return Float32Array.from(positions);
}

function getDimensionsFromPositions(positions) {
  const bounds = getBoundsFromPositions(positions);

  return {
    x: bounds.max.x - bounds.min.x,
    y: bounds.max.y - bounds.min.y,
    z: bounds.max.z - bounds.min.z
  };
}

function getBoundsFromPositions(positions) {
  const bounds = {
    min: {
      x: Number.POSITIVE_INFINITY,
      y: Number.POSITIVE_INFINITY,
      z: Number.POSITIVE_INFINITY
    },
    max: {
      x: Number.NEGATIVE_INFINITY,
      y: Number.NEGATIVE_INFINITY,
      z: Number.NEGATIVE_INFINITY
    }
  };

  for (let index = 0; index < positions.length; index += 3) {
    const x = positions[index];
    const y = positions[index + 1];
    const z = positions[index + 2];

    bounds.min.x = Math.min(bounds.min.x, x);
    bounds.min.y = Math.min(bounds.min.y, y);
    bounds.min.z = Math.min(bounds.min.z, z);
    bounds.max.x = Math.max(bounds.max.x, x);
    bounds.max.y = Math.max(bounds.max.y, y);
    bounds.max.z = Math.max(bounds.max.z, z);
  }

  return bounds;
}

function calculateVolumeFromPositions(positions) {
  let volume = 0;

  for (let index = 0; index < positions.length; index += 9) {
    const ax = positions[index];
    const ay = positions[index + 1];
    const az = positions[index + 2];
    const bx = positions[index + 3];
    const by = positions[index + 4];
    const bz = positions[index + 5];
    const cx = positions[index + 6];
    const cy = positions[index + 7];
    const cz = positions[index + 8];

    volume += signedTetrahedronVolume(ax, ay, az, bx, by, bz, cx, cy, cz);
  }

  return Math.abs(volume) / 1000;
}

function initCartPage() {
  const cartItemsElement = document.getElementById("cartItems");
  const emptyStateElement = document.getElementById("cartEmpty");
  const summaryItemsElement = document.getElementById("summaryItems");
  const summaryQuantityElement = document.getElementById("summaryQuantity");
  const summaryWeightElement = document.getElementById("summaryWeight");
  const summaryPriceElement = document.getElementById("summaryPrice");
  const checkoutButton = document.getElementById("checkoutButton");
  const clearCartButton = document.getElementById("clearCartButton");
  const statusElement = document.getElementById("cartStatus");

  if (!cartItemsElement || !emptyStateElement || !checkoutButton || !clearCartButton) {
    return;
  }

  function setStatus(message, isError = false) {
    if (!statusElement) {
      return;
    }

    statusElement.textContent = message;
    statusElement.classList.toggle("is-error", isError);
  }

  function renderCart() {
    const cart = readCart();
    const totals = calculateCartTotals(cart);

    updateCartCount();

    if (!cart.length) {
      emptyStateElement.classList.remove("hidden");
      cartItemsElement.innerHTML = "";
      summaryItemsElement.textContent = "0";
      summaryQuantityElement.textContent = "0";
      summaryWeightElement.textContent = "0.00 g";
      summaryPriceElement.textContent = "Rs 0.00";
      checkoutButton.disabled = true;
      clearCartButton.disabled = true;
      return;
    }

    emptyStateElement.classList.add("hidden");
    checkoutButton.disabled = false;
    clearCartButton.disabled = false;

    summaryItemsElement.textContent = String(cart.length);
    summaryQuantityElement.textContent = String(totals.totalQuantity);
    summaryWeightElement.textContent = formatMass(totals.totalWeight);
    summaryPriceElement.textContent = formatCurrency(totals.totalPrice);

    cartItemsElement.innerHTML = cart.map(renderCartItemCard).join("");
  }

  cartItemsElement.addEventListener("click", (event) => {
    const removeButton = event.target.closest("[data-remove-id]");

    if (!removeButton) {
      return;
    }

    const cart = readCart().filter((item) => item.id !== removeButton.dataset.removeId);
    saveCart(cart);
    renderCart();
    setStatus("Item removed from cart.");
  });

  clearCartButton.addEventListener("click", () => {
    saveCart([]);
    renderCart();
    setStatus("Cart cleared.");
  });

  checkoutButton.addEventListener("click", () => {
    const cart = readCart();

    if (!cart.length) {
      return;
    }

    const order = createOrderFromCart(cart);
    const orders = readOrders();
    orders.unshift(order);
    saveOrders(orders);
    saveCart([]);
    renderCart();
    setStatus(`Production request ${order.number} created successfully. It is now visible in the admin dashboard.`);
  });

  renderCart();
}

function initAdminPage() {
  const lockedState = document.getElementById("adminLocked");
  const content = document.getElementById("adminContent");
  const stats = document.getElementById("adminStats");
  const orders = document.getElementById("adminOrders");
  const users = document.getElementById("adminUsers");
  const queue = document.getElementById("adminQueue");
  const accessSummary = document.getElementById("adminAccessSummary");
  const dispatchNextButton = document.getElementById("dispatchNextButton");
  const adminStatus = document.getElementById("adminStatus");
  const sessionUser = getCurrentUser();

  if (!lockedState || !content || !stats || !orders || !users || !queue || !dispatchNextButton) {
    return;
  }

  function setStatus(message) {
    if (adminStatus) {
      adminStatus.textContent = message;
    }
  }

  if (!sessionUser || sessionUser.role !== "admin") {
    lockedState.classList.remove("hidden");
    content.classList.add("hidden");

    if (accessSummary) {
      accessSummary.textContent = sessionUser
        ? `${sessionUser.name} is signed in as ${sessionUser.role}. Use the admin demo account to manage full production data.`
        : "Sign in as the admin demo user to manage customers, quotes, and production requests.";
    }

    return;
  }

  lockedState.classList.add("hidden");
  content.classList.remove("hidden");

  if (accessSummary) {
    accessSummary.textContent = `Signed in as ${sessionUser.name}. You can review users, advance orders, and inspect every cart submission here.`;
  }

  function renderDashboard() {
    const allOrders = sortOrders(readOrders());
    const allUsers = sortUsers(readUsers());
    const pending = allOrders.filter((order) => order.status === "Pending Review" || order.status === "Queued");
    const inProduction = allOrders.filter((order) => order.status === "In Production");
    const completed = allOrders.filter((order) => order.status === "Completed");
    const totalRevenue = allOrders.reduce((sum, order) => sum + Number(order.totalPrice || 0), 0);

    stats.innerHTML = [
      {
        label: "Total Orders",
        value: String(allOrders.length),
        detail: `${pending.length} waiting for production review`
      },
      {
        label: "In Production",
        value: String(inProduction.length),
        detail: `${completed.length} jobs completed`
      },
      {
        label: "Active Users",
        value: String(allUsers.filter((user) => user.status === "active").length),
        detail: `${allUsers.length} total customer records`
      },
      {
        label: "Revenue Tracked",
        value: formatCurrency(totalRevenue),
        detail: "Across seeded and live local orders"
      }
    ].map((card) => `
      <article class="glass-card stat-panel">
        <p class="panel-label">${escapeHtml(card.label)}</p>
        <h3>${escapeHtml(card.value)}</h3>
        <p>${escapeHtml(card.detail)}</p>
      </article>
    `).join("");

    const nextJob = pending[0];
    queue.innerHTML = `
      <article class="queue-card">
        <div class="queue-row">
          <span>Printer lane</span>
          <strong>${pending.length ? "Ready" : "Open"}</strong>
        </div>
        <div class="queue-row">
          <span>Next job</span>
          <strong>${nextJob ? escapeHtml(nextJob.number) : "No pending order"}</strong>
        </div>
        <div class="queue-row">
          <span>Customer</span>
          <strong>${nextJob ? escapeHtml(nextJob.customerName) : "Queue clear"}</strong>
        </div>
        <div class="queue-row">
          <span>Print weight</span>
          <strong>${nextJob ? formatMass(nextJob.totalWeight) : "0.00 g"}</strong>
        </div>
      </article>
    `;

    orders.innerHTML = allOrders.map((order) => renderAdminOrderCard(order)).join("");
    users.innerHTML = allUsers.map((user) => renderAdminUserCard(user, allOrders)).join("");
  }

  dispatchNextButton.addEventListener("click", () => {
    const allOrders = sortOrders(readOrders());
    const nextJob = allOrders.find((order) => order.status === "Pending Review" || order.status === "Queued");

    if (!nextJob) {
      setStatus("No pending order is waiting to be dispatched.");
      return;
    }

    const updatedOrders = allOrders.map((order) => {
      if (order.id === nextJob.id) {
        return {
          ...order,
          status: "In Production"
        };
      }

      return order;
    });

    saveOrders(updatedOrders);
    renderDashboard();
    setStatus(`${nextJob.number} moved into production.`);
  });

  orders.addEventListener("change", (event) => {
    const select = event.target.closest("[data-order-status]");

    if (!select) {
      return;
    }

    const updatedOrders = readOrders().map((order) => {
      if (order.id === select.dataset.orderStatus) {
        return {
          ...order,
          status: select.value
        };
      }

      return order;
    });

    saveOrders(updatedOrders);
    renderDashboard();
    setStatus("Order status updated.");
  });

  users.addEventListener("click", (event) => {
    const button = event.target.closest("[data-toggle-user]");

    if (!button) {
      return;
    }

    const updatedUsers = readUsers().map((user) => {
      if (user.id !== button.dataset.toggleUser || user.role === "admin") {
        return user;
      }

      return {
        ...user,
        status: user.status === "active" ? "suspended" : "active"
      };
    });

    saveUsers(updatedUsers);
    renderDashboard();
    setStatus("User access updated.");
  });

  renderDashboard();
}

function initLoginPage() {
  const form = document.getElementById("loginForm");
  const emailInput = document.getElementById("loginEmail");
  const passwordInput = document.getElementById("loginPassword");
  const statusElement = document.getElementById("loginStatus");
  const sessionPanel = document.getElementById("sessionPanel");
  const sessionText = document.getElementById("sessionText");
  const sessionLogout = document.getElementById("sessionLogout");
  const quickActions = document.getElementById("quickActions");

  if (!form || !emailInput || !passwordInput || !statusElement) {
    return;
  }

  function setStatus(message, isError = false) {
    statusElement.textContent = message;
    statusElement.classList.toggle("is-error", isError);
  }

  function syncSessionPanel() {
    const session = getSession();

    if (!session || !sessionPanel || !sessionText || !quickActions) {
      sessionPanel?.classList.add("hidden");
      return;
    }

    sessionPanel.classList.remove("hidden");
    sessionText.textContent = `${session.name} is already signed in as ${session.role}.`;
    quickActions.innerHTML = `
      <a class="button button-secondary" href="${session.role === "admin" ? "admin.html" : "upload.html"}">
        ${session.role === "admin" ? "Open Admin" : "Open Upload"}
      </a>
      <a class="button button-primary" href="index.html">Go Home</a>
    `;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = emailInput.value.trim().toLowerCase();
    const password = passwordInput.value;
    const user = readUsers().find((entry) => entry.email.toLowerCase() === email);

    if (!user || user.password !== password) {
      setStatus("Email or password is incorrect. Use one of the demo accounts shown on the page.", true);
      return;
    }

    if (user.status !== "active") {
      setStatus("This account is currently suspended. Reactivate it from the admin panel first.", true);
      return;
    }

    const updatedUsers = readUsers().map((entry) => {
      if (entry.id !== user.id) {
        return entry;
      }

      return {
        ...entry,
        lastActive: new Date().toISOString()
      };
    });

    saveUsers(updatedUsers);
    saveSession({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      company: user.company
    });

    syncSessionUi();
    syncSessionPanel();
    setStatus(`Welcome back, ${user.name}. Redirecting you now.`);

    window.setTimeout(() => {
      window.location.href = user.role === "admin" ? "admin.html" : "upload.html";
    }, 500);
  });

  document.querySelectorAll("[data-demo-email]").forEach((button) => {
    button.addEventListener("click", () => {
      emailInput.value = button.dataset.demoEmail || "";
      passwordInput.value = button.dataset.demoPassword || "";
      setStatus("Demo credentials loaded. Press Sign In to continue.");
    });
  });

  sessionLogout?.addEventListener("click", logout);
  syncSessionPanel();
}

function calculateQuoteForVolume(volumeCm3, materialKey, quantity = 1) {
  const material = MATERIALS[materialKey] || MATERIALS.pla;
  const safeQuantity = Math.max(1, Number.parseInt(quantity, 10) || 1);
  const weightPerPart = volumeCm3 * material.density;
  const totalWeight = weightPerPart * safeQuantity;
  const totalPrice = totalWeight * material.rate;

  return {
    material,
    quantity: safeQuantity,
    weightPerPart,
    totalWeight,
    totalPrice
  };
}

function calculateVolumeCm3(geometry) {
  const positions = geometry.attributes.position.array;
  let volume = 0;

  for (let index = 0; index < positions.length; index += 9) {
    const ax = positions[index];
    const ay = positions[index + 1];
    const az = positions[index + 2];
    const bx = positions[index + 3];
    const by = positions[index + 4];
    const bz = positions[index + 5];
    const cx = positions[index + 6];
    const cy = positions[index + 7];
    const cz = positions[index + 8];

    volume += signedTetrahedronVolume(ax, ay, az, bx, by, bz, cx, cy, cz);
  }

  return Math.abs(volume) / 1000;
}

function getDimensionsMm(geometry) {
  geometry.computeBoundingBox();
  const size = geometry.boundingBox.getSize(new window.THREE.Vector3());

  return {
    x: size.x,
    y: size.y,
    z: size.z
  };
}

function signedTetrahedronVolume(ax, ay, az, bx, by, bz, cx, cy, cz) {
  return (
    ax * by * cz +
    ay * bz * cx +
    az * bx * cy -
    az * by * cx -
    ay * bx * cz -
    ax * bz * cy
  ) / 6;
}

function updateCartCount() {
  const countElement = document.getElementById("cartCount");

  if (!countElement) {
    return;
  }

  const totalQuantity = readCart().reduce((sum, item) => sum + Number(item.quantity || 0), 0);
  countElement.textContent = String(totalQuantity);
}

function createCatalogCartItem(product, quantity = 1, explicitId = createId()) {
  const safeQuantity = Math.max(1, Number.parseInt(quantity, 10) || 1);
  const totalWeight = product.weightPerPart * safeQuantity;
  const totalPrice = product.totalPrice * safeQuantity;
  const material = MATERIALS[product.materialKey] || MATERIALS.pla;

  return {
    id: explicitId,
    type: "catalog",
    productId: product.id,
    fileName: product.name,
    description: product.description,
    image: product.image,
    materialKey: product.materialKey,
    materialLabel: material.label,
    quantity: safeQuantity,
    volumeCm3: 0,
    weightPerPart: roundNumber(product.weightPerPart, 2),
    totalWeight: roundNumber(totalWeight, 2),
    unitRate: roundNumber(product.totalPrice / product.weightPerPart, 2),
    totalPrice: roundNumber(totalPrice, 2),
    dimensionsMm: {
      x: roundNumber(product.dimensionsMm.x, 1),
      y: roundNumber(product.dimensionsMm.y, 1),
      z: roundNumber(product.dimensionsMm.z, 1)
    },
    leadTime: product.leadTime,
    category: product.category,
    createdAt: new Date().toISOString()
  };
}

function renderCartItemCard(item) {
  const isCatalog = item.type === "catalog";
  const media = isCatalog && item.image
    ? `<div class="cart-item-media"><img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.fileName)}"></div>`
    : "";
  const label = isCatalog ? "Ready-to-order item" : "Quoted part";
  const description = isCatalog
    ? escapeHtml(item.description || "RapidLayer printed product")
    : "STL-generated production quote";

  return `
    <article class="glass-card cart-item ${isCatalog ? "cart-item-product" : ""}">
      ${media}
      <div class="cart-item-content">
        <div class="cart-item-header">
          <div>
            <p class="panel-label">${label}</p>
            <h3>${escapeHtml(item.fileName)}</h3>
            <p>${description}</p>
          </div>
          <button class="button button-secondary" type="button" data-remove-id="${escapeHtml(item.id)}">Remove</button>
        </div>

        <div class="cart-item-meta">
          <div class="meta-block">
            <span>Material</span>
            <strong>${escapeHtml(item.materialLabel)}</strong>
          </div>
          <div class="meta-block">
            <span>Quantity</span>
            <strong>${escapeHtml(String(item.quantity))}</strong>
          </div>
          <div class="meta-block">
            <span>Weight / part</span>
            <strong>${formatMass(Number(item.weightPerPart || 0))}</strong>
          </div>
          <div class="meta-block">
            <span>Total</span>
            <strong>${formatCurrency(Number(item.totalPrice || 0))}</strong>
          </div>
        </div>

        <div class="cart-item-footer">
          <div class="meta-block">
            <span>${isCatalog ? "Lead Time" : "Volume"}</span>
            <strong>${isCatalog ? escapeHtml(item.leadTime || "2 day dispatch") : formatVolume(Number(item.volumeCm3 || 0))}</strong>
          </div>
          <div class="meta-block">
            <span>Total weight</span>
            <strong>${formatMass(Number(item.totalWeight || 0))}</strong>
          </div>
          <div class="meta-block">
            <span>${isCatalog ? "Size" : "Bounds"}</span>
            <strong>${formatDimensions(item.dimensionsMm || { x: 0, y: 0, z: 0 })}</strong>
          </div>
          <div class="meta-block">
            <span>${isCatalog ? "Category" : "Rate"}</span>
            <strong>${isCatalog ? escapeHtml(item.category || "Printed part") : `Rs ${Number(item.unitRate || 0).toFixed(2)} / g`}</strong>
          </div>
        </div>
      </div>
    </article>
  `;
}

function calculateCartTotals(cart) {
  return {
    totalQuantity: cart.reduce((sum, item) => sum + Number(item.quantity || 0), 0),
    totalWeight: cart.reduce((sum, item) => sum + Number(item.totalWeight || 0), 0),
    totalPrice: cart.reduce((sum, item) => sum + Number(item.totalPrice || 0), 0)
  };
}

function createOrderFromCart(cart) {
  const user = getCurrentUser();
  const totals = calculateCartTotals(cart);
  const existingOrders = readOrders();

  return {
    id: createId(),
    number: getNextOrderNumber(existingOrders),
    userId: user?.id || "guest-checkout",
    customerName: user?.name || "Guest Customer",
    customerEmail: user?.email || "guest@rapidlayer.local",
    company: user?.company || "Walk-in request",
    source: cart.some((item) => item.type === "quote") ? "quote" : "catalog",
    status: "Pending Review",
    totalQuantity: roundNumber(totals.totalQuantity, 0),
    totalWeight: roundNumber(totals.totalWeight, 2),
    totalPrice: roundNumber(totals.totalPrice, 2),
    createdAt: new Date().toISOString(),
    items: cart.map((item) => ({
      ...item
    }))
  };
}

function renderAdminOrderCard(order) {
  return `
    <article class="glass-card admin-order-card">
      <div class="admin-order-header">
        <div>
          <p class="panel-label">${escapeHtml(order.number)} · ${escapeHtml(order.source === "quote" ? "Quote request" : "Catalog order")}</p>
          <h3>${escapeHtml(order.customerName)}</h3>
          <p>${escapeHtml(order.customerEmail)} · ${escapeHtml(order.company || "RapidLayer customer")}</p>
        </div>
        <div class="admin-order-controls">
          <span class="status-pill ${getStatusClassName(order.status)}">${escapeHtml(order.status)}</span>
          <select data-order-status="${escapeHtml(order.id)}">
            ${ORDER_STATUSES.map((status) => `
              <option value="${escapeHtml(status)}" ${status === order.status ? "selected" : ""}>${escapeHtml(status)}</option>
            `).join("")}
          </select>
        </div>
      </div>

      <div class="admin-order-meta">
        <div class="meta-block">
          <span>Placed</span>
          <strong>${formatDateTime(order.createdAt)}</strong>
        </div>
        <div class="meta-block">
          <span>Items</span>
          <strong>${escapeHtml(String(order.items.length))}</strong>
        </div>
        <div class="meta-block">
          <span>Total quantity</span>
          <strong>${escapeHtml(String(order.totalQuantity))}</strong>
        </div>
        <div class="meta-block">
          <span>Total price</span>
          <strong>${formatCurrency(order.totalPrice)}</strong>
        </div>
      </div>

      <div class="admin-order-items">
        ${order.items.map((item) => `
          <div class="order-item-row">
            <div>
              <strong>${escapeHtml(item.fileName)}</strong>
              <p>${escapeHtml(item.description || "Production-ready line item")}</p>
            </div>
            <div class="order-item-details">
              <span>${escapeHtml(item.materialLabel)}</span>
              <span>Qty ${escapeHtml(String(item.quantity))}</span>
              <span>${formatMass(item.totalWeight)}</span>
              <strong>${formatCurrency(item.totalPrice)}</strong>
            </div>
          </div>
        `).join("")}
      </div>
    </article>
  `;
}

function renderAdminUserCard(user, allOrders) {
  const orderCount = allOrders.filter((order) => order.userId === user.id).length;
  const isAdmin = user.role === "admin";

  return `
    <article class="user-card">
      <div class="user-card-head">
        <div>
          <h3>${escapeHtml(user.name)}</h3>
          <p>${escapeHtml(user.email)} · ${escapeHtml(user.company)}</p>
        </div>
        <div class="user-badges">
          <span class="status-pill ${isAdmin ? "status-admin" : "status-customer"}">${escapeHtml(user.role)}</span>
          <span class="status-pill ${user.status === "active" ? "status-active" : "status-suspended"}">${escapeHtml(user.status)}</span>
        </div>
      </div>
      <div class="user-card-meta">
        <div class="meta-block">
          <span>Joined</span>
          <strong>${formatDate(user.joinDate)}</strong>
        </div>
        <div class="meta-block">
          <span>Last active</span>
          <strong>${formatDateTime(user.lastActive)}</strong>
        </div>
        <div class="meta-block">
          <span>Orders</span>
          <strong>${escapeHtml(String(orderCount))}</strong>
        </div>
      </div>
      <button
        class="button button-secondary"
        type="button"
        data-toggle-user="${escapeHtml(user.id)}"
        ${isAdmin ? "disabled" : ""}
      >
        ${isAdmin ? "Primary admin" : user.status === "active" ? "Suspend User" : "Reactivate User"}
      </button>
    </article>
  `;
}

function getStatusClassName(status) {
  switch (status) {
    case "Completed":
      return "status-completed";
    case "In Production":
      return "status-production";
    case "Quality Check":
      return "status-quality";
    case "Queued":
      return "status-queued";
    default:
      return "status-pending";
  }
}

function getFeaturedCatalogItems() {
  return CATALOG_ITEMS.filter((item) => item.featured).slice(0, 3);
}

function getCatalogItem(productId) {
  return CATALOG_ITEMS.find((item) => item.id === productId) || null;
}

function readCart() {
  return readArrayStorage(STORAGE_KEYS.cart).map((item) => normalizeCartItem(item));
}

function saveCart(cart) {
  saveArrayStorage(STORAGE_KEYS.cart, cart);
}

function readOrders() {
  return readArrayStorage(STORAGE_KEYS.orders);
}

function saveOrders(orders) {
  saveArrayStorage(STORAGE_KEYS.orders, orders);
}

function readUsers() {
  return readArrayStorage(STORAGE_KEYS.users);
}

function saveUsers(users) {
  saveArrayStorage(STORAGE_KEYS.users, users);
}

function getSession() {
  try {
    const session = JSON.parse(window.localStorage.getItem(STORAGE_KEYS.session) || "null");
    return session && typeof session === "object" ? session : null;
  } catch (error) {
    console.error("Failed to parse session:", error);
    return null;
  }
}

function saveSession(session) {
  window.localStorage.setItem(STORAGE_KEYS.session, JSON.stringify(session));
}

function clearSession() {
  window.localStorage.removeItem(STORAGE_KEYS.session);
}

function getCurrentUser() {
  const session = getSession();

  if (!session?.id) {
    return null;
  }

  return readUsers().find((user) => user.id === session.id) || null;
}

function sortOrders(orders) {
  return [...orders].sort((left, right) => new Date(right.createdAt) - new Date(left.createdAt));
}

function sortUsers(users) {
  return [...users].sort((left, right) => new Date(right.lastActive) - new Date(left.lastActive));
}

function normalizeCartItem(item) {
  if (item.type === "catalog") {
    return {
      ...item,
      quantity: Math.max(1, Number.parseInt(item.quantity, 10) || 1),
      weightPerPart: Number(item.weightPerPart || 0),
      totalWeight: Number(item.totalWeight || 0),
      totalPrice: Number(item.totalPrice || 0),
      unitRate: Number(item.unitRate || 0)
    };
  }

  return {
    ...item,
    type: "quote",
    quantity: Math.max(1, Number.parseInt(item.quantity, 10) || 1),
    volumeCm3: Number(item.volumeCm3 || 0),
    weightPerPart: Number(item.weightPerPart || 0),
    totalWeight: Number(item.totalWeight || 0),
    unitRate: Number(item.unitRate || 0),
    totalPrice: Number(item.totalPrice || 0),
    dimensionsMm: item.dimensionsMm || { x: 0, y: 0, z: 0 }
  };
}

function readArrayStorage(key) {
  try {
    const value = JSON.parse(window.localStorage.getItem(key) || "[]");
    return Array.isArray(value) ? value : [];
  } catch (error) {
    console.error(`Failed to parse storage key ${key}:`, error);
    return [];
  }
}

function saveArrayStorage(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

function getNextOrderNumber(existingOrders) {
  const highest = existingOrders.reduce((max, order) => {
    const numeric = Number.parseInt(String(order.number || "").replace(/\D/g, ""), 10);
    return Number.isFinite(numeric) ? Math.max(max, numeric) : max;
  }, 2400);

  return `RL-${highest + 1}`;
}

function createId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function roundNumber(value, digits = 2) {
  return Number(value.toFixed(digits));
}

function formatCurrency(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(Number(value || 0));
}

function formatMass(value) {
  return `${Number(value || 0).toFixed(2)} g`;
}

function formatVolume(value) {
  return `${Number(value || 0).toFixed(2)} cm3`;
}

function formatDimensions(dimensions) {
  return `${Number(dimensions.x || 0).toFixed(1)} x ${Number(dimensions.y || 0).toFixed(1)} x ${Number(dimensions.z || 0).toFixed(1)} mm`;
}

function formatDate(value) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(new Date(value));
}

function formatDateTime(value) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit"
  }).format(new Date(value));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
