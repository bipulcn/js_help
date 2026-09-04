
      // State stores
      let countVar = 0;
      let swapA = "Red",
        swapB = "Blue";
      let fontSizeVar = 12;

      
      // 5. Functions logic
      function calcDozen(n) {
        return n * 12;
      }
      function getGreeting(h) {
        return h < 12
          ? "Good Morning"
          : h < 18
            ? "Good Afternoon"
            : "Good Evening";
      }
      function calcCircleArea(r) {
        return (Math.PI * r * r).toFixed(2);
      }
      function toTitleCase(s) {
        return s.replace(/\b\w/g, (c) => c.toUpperCase());
      }
      function rollDice(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      function maskEmail(e) {
        return e.replace(/^(.)(.*)(.@.*)$/, (_, a, b, c) => a + "***" + c);
      }
      function isPalindrome(s) {
        let c = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        return c === c.split("").reverse().join("");
      }
      function computeDiscount(val, disc) {
        let pct = disc !== "" && !isNaN(disc) ? +disc : 10;
        return (val - val * (pct / 100)).toFixed(2);
      }
      function buildSlug(s) {
        return s
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "");
      }

      // Closure vault
      let myBankVault = (function () {
        let balance = 90;
        return function (amount) {
          balance += amount;
          return balance;
        };
      })();

      /* ---- helpers ---- */
      const $ = (id) => document.getElementById(id);
      const num = (id) => Number($(id).value);
      const val = (id) => $(id).value;
      function log(id, text, cls) {
        $(id).innerHTML = cls ? `<span class="${cls}">${text}</span>` : text;
      }


      /* ================= 6. FUNCTIONS ================= */
      function greet(name) {
        return `Hey ${name}, welcome back!`;
      }
      function runF1() {
        log("out-f1", greet(val("f1-name") || "friend"));
      }
      function orderTotal(sub) {
        return sub + sub * 0.075;
      }
      function runF2() {
        log(
          "out-f2",
          `subtotal ৳${num("f2-sub")} + 7.5% tax = ৳${orderTotal(num("f2-sub")).toFixed(0)}`,
        );
      }
      function addTip(bill, pct) {
        return bill + (bill * pct) / 100;
      }
      function runF3() {
        log(
          "out-f3",
          `bill ৳${num("f3-bill")} + ${num("f3-pct")}% tip = ৳${addTip(num("f3-bill"), num("f3-pct")).toFixed(0)}`,
        );
      }
      function toCelsius(f) {
        return ((f - 32) * 5) / 9;
      }
      function runF4() {
        log(
          "out-f4",
          `${num("f4-f")}°F = ${toCelsius(num("f4-f")).toFixed(1)}°C`,
        );
      }
      function discount(price, pct) {
        return price - (price * pct) / 100;
      }
      function runF5() {
        log(
          "out-f5",
          `৳${num("f5-price")} at ${num("f5-off")}% off = ৳${discount(num("f5-price"), num("f5-off")).toFixed(0)}`,
        );
      }
      function isValidPassword(pw) {
        return pw.length >= 8 && /[0-9]/.test(pw);
      }
      function runF6() {
        const ok = isValidPassword(val("f6-pw"));
        log(
          "out-f6",
          ok ? "✓ Valid password." : "✗ Needs 8+ chars and a digit.",
          ok ? "good" : "bad",
        );
      }
      function runF7() {
        const products = [120, 340, 80, 210, 95];
        const max = num("f7-max");
        const kept = products.filter((p) => p <= max);
        log("out-f7", `under ৳${max} → [${kept.join(", ")}]`);
      }
      function runF8() {
        const bdt = [610, 1220, 305];
        const usd = bdt.map((p) => (p / 122).toFixed(2));
        log("out-f8", `BDT [${bdt.join(", ")}] → USD [${usd.join(", ")}]`);
      }
      function runF9() {
        const items = [120, 340, 80, 210, 95];
        const total = items.reduce((sum, p) => sum + p, 0);
        log("out-f9", `total = ৳${total}`);
      }
      function runF10(dir) {
        const products = [
          { n: "Shirt", p: 450 },
          { n: "Cap", p: 150 },
          { n: "Shoes", p: 900 },
        ];
        const sorted = [...products].sort((a, b) =>
          dir === "asc" ? a.p - b.p : b.p - a.p,
        );
        log("out-f10", sorted.map((p) => `${p.n} ৳${p.p}`).join(" → "));
      }
