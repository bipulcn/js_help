// State stores
let countVar = 0;
let swapA = "Red",
  swapB = "Blue";
let fontSizeVar = 12;

// 6. Objects logic
let accountObj = {
  balance: 175,
  deposit: function (n) {
    this.balance += n;
  },
  describe: function () {
    return `Balance: $${this.balance}`;
  },
};

let quizData = {
  q: "Capital of France?",
  choices: ["Madrid", "Paris"],
  answer: 1,
};
function evalQuiz(idx) {
  document.getElementById("o6-o").innerHTML =
    idx === quizData.answer
      ? '<span class="tag tag-green">Correct! Paris</span>'
      : '<span class="tag tag-red">Incorrect!</span>';
}

let staff = [
  { name: "Dev 1", dept: "Tech" },
  { name: "Dev 2", dept: "Tech" },
  { name: "Artist", dept: "Design" },
];
function runFilterStaff(dept) {
  let res = dept === "All" ? staff : staff.filter((s) => s.dept === dept);
  document.getElementById("o8-o").innerText =
    `Found ${res.length} staff member(s)`;
}

function calcInvoice() {
  let items = [{ price: 12.5 }, { price: 42.0 }, { price: 20.0 }];
  let total = items.reduce((acc, curr) => acc + curr.price, 0);
  document.getElementById("o9-o").innerText =
    `${items.length} Items | Total: $${total.toFixed(2)}`;
}

function buildDynamicJSON() {
  let k = document.getElementById("o10-k").value;
  let v = document.getElementById("o10-v").value;
  let obj = {};
  obj[k] = v;
  document.getElementById("o10-o").innerText = JSON.stringify(obj);
}

/* ---- helpers ---- */
const $ = (id) => document.getElementById(id);
const num = (id) => Number($(id).value);
const val = (id) => $(id).value;
function log(id, text, cls) {
  $(id).innerHTML = cls ? `<span class="${cls}">${text}</span>` : text;
}

/* ================= 7. OBJECTS & ARRAYS ================= */
function runO1() {
  const user = {
    name: "Nabila Islam",
    email: "nabila@mail.com",
    plan: "Pro",
  };
  log("out-o1", `${user.name} · ${user.email} · ${user.plan} plan`);
}
function runO2() {
  const product = {
    name: "Mechanical Keyboard",
    price: 3200,
    inStock: true,
  };
  log(
    "out-o2",
    `${product.name} — ৳${product.price} (${product.inStock ? "in stock" : "out of stock"})`,
  );
}
let o3Stock = 8;
function runO3() {
  o3Stock = Math.max(0, o3Stock - 1);
  $("o3-stock").textContent = `stock: ${o3Stock}`;
  log("out-o3", `product.stock -= 1 → ${o3Stock} left`);
}
function runO4() {
  const contacts = [{ name: "Tanvir" }, { name: "Nusrat" }, { name: "Farhan" }];
  const found = contacts.find(
    (c) => c.name.toLowerCase() === val("o4-name").toLowerCase(),
  );
  log(
    "out-o4",
    found ? `found: ${found.name}` : "no contact with that name",
    found ? "good" : "bad",
  );
}
const o5Account = {
  balance: 1000,
  deposit(a) {
    this.balance += a;
  },
  withdraw(a) {
    this.balance -= a;
  },
};
function runO5(action) {
  const amt = num("o5-amt");
  o5Account[action](amt);
  $("o5-balance").textContent = "৳" + o5Account.balance;
  log("out-o5", `account.${action}(${amt}) → ৳${o5Account.balance}`);
}
function runO6() {
  const products = [
    { n: "Shirt", stock: true },
    { n: "Shoes", stock: false },
    { n: "Cap", stock: true },
    { n: "Bag", stock: false },
  ];
  const inStock = products.filter((p) => p.stock);
  log("out-o6", `in stock: ${inStock.map((p) => p.n).join(", ")}`);
}
function runO7() {
  const contacts = [{ name: "Zayan" }, { name: "Amina" }, { name: "Kabir" }];
  const sorted = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
  log("out-o7", sorted.map((c) => c.name).join(" → "));
}
function runO8() {
  const cart = [
    { name: "Notebook", price: 120, qty: 2 },
    { name: "Pen", price: 20, qty: 5 },
    { name: "Bag", price: 600, qty: 1 },
  ];
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  log(
    "out-o8",
    `${cart.map((i) => `${i.name} ×${i.qty}`).join(", ")} → total ৳${total}`,
  );
}
function runO9() {
  const order = {
    id: "ORD-2291",
    shipping: { city: "Dhaka", zip: "1207" },
  };
  log(
    "out-o9",
    `order.id: ${order.id}\norder.shipping.city: ${order.shipping.city}`,
  );
}
function runO10() {
  const user = { name: "Rafi", email: "rafi@mail.com", age: 21 };
  const { name, email } = user;
  log("out-o10", `name: ${name}\nemail: ${email}`);
}
