
      /* ---- helpers ---- */
      const $ = (id) => document.getElementById(id);
      const num = (id) => Number($(id).value);
      const val = (id) => $(id).value;
      function log(id, text, cls) {
        $(id).innerHTML = cls ? `<span class="${cls}">${text}</span>` : text;
      }
      
      /* ================= 8. EVENTS ================= */
      let e1Count = 0;
      function runE1() {
        e1Count++;
        $("e1-count").textContent = "cart: " + e1Count;
        log("out-e1", `click event fired → cart = ${e1Count}`);
      }
      let e2Liked = false;
      function runE2() {
        e2Liked = !e2Liked;
        $("e2-post").textContent = e2Liked
          ? "❤️ Liked!"
          : "📷 Double-click this photo";
        log("out-e2", `dblclick event → liked = ${e2Liked}`);
      }
      function runE3(entering) {
        log(
          "out-e3",
          entering
            ? "mouseover → showing preview: Running Shoes, ৳2,400"
            : "mouseout → preview hidden",
        );
      }
      function runE4() {
        const fruits = ["Apple", "Banana", "Mango", "Grapes", "Melon"];
        const q = val("e4-search").toLowerCase();
        const matches = fruits.filter((f) => f.toLowerCase().includes(q));
        log("out-e4", matches.length ? matches.join(", ") : "no matches");
      }
      function runE5() {
        const prices = { S: 300, M: 400, L: 500 };
        const size = val("e5-size");
        const labels = { S: "Small", M: "Medium", L: "Large" };
        log("out-e5", `${labels[size]} — ৳${prices[size]}`);
      }
      function runE6() {
        const email = val("e6-email");
        const ok = email.includes("@");
        log(
          "out-e6",
          ok ? "✓ Form submitted." : "✗ Enter a valid email first.",
          ok ? "good" : "bad",
        );
      }
      function runE7(focused) {
        $("e7-field").style.borderColor = focused ? "#159473" : "#E4E4E7";
        log(
          "out-e7",
          focused
            ? "focus event → field is now active"
            : "blur event → field lost focus",
        );
      }
      function runE8(down) {
        log(
          "out-e8",
          down ? "🔴 recording... (mousedown)" : "⏹ stopped (mouseup)",
        );
      }
      function runE9(evt) {
        if (evt.key === "Enter") {
          log("out-e9", `Enter pressed → sent: "${val("e9-msg")}"`);
          evt.target.value = "";
        }
      }
      let e10Timer = null;
      function runE10start() {
        if (e10Timer) return;
        e10Timer = setInterval(() => {
          $("e10-clock").textContent = new Date().toLocaleTimeString();
        }, 1000);
        log("out-e10", "clock started — updates every second");
      }
      function runE10stop() {
        clearInterval(e10Timer);
        e10Timer = null;
        log("out-e10", "clock stopped");
      }