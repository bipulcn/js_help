
      // State stores
      let countVar = 0;
      let swapA = "Red",
        swapB = "Blue";
      let fontSizeVar = 12;

      
      // 2. Conditionals logic
      function runTraffic() {
        let val = document.getElementById("c4").value;
        let target = document.getElementById("o4-c");
        if (val === "Green")
          target.innerHTML = '<span class="tag tag-green">GO SAFELY</span>';
        else if (val === "Yellow")
          target.innerHTML =
            '<span class="tag tag-yellow">PREPARE TO STOP</span>';
        else target.innerHTML = '<span class="tag tag-red">FULL STOP</span>';
      }

      function runWeather() {
        let t = +document.getElementById("c5").value;
        let msg =
          t < 0
            ? "Freezing: Wear winter coat"
            : t < 20
              ? "Mild: Light jacket recommended"
              : "Warm: T-shirt weather";
        document.getElementById("o5-c").innerText = msg;
      }

      function runPassCheck() {
        let v = document.getElementById("c7").value;
        let res =
          v.length >= 8 && /[!@#$%^&*]/.test(v)
            ? '<span class="tag tag-green">STRONG</span>'
            : v.length >= 6
              ? '<span class="tag tag-yellow">MODERATE</span>'
              : '<span class="tag tag-red">WEAK</span>';
        document.getElementById("o7-c").innerHTML = res;
      }

      function runBMI() {
        let w = +document.getElementById("c9-w").value;
        let h = +document.getElementById("c9-h").value;
        let bmi = (w / (h * h)).toFixed(1);
        let desc =
          bmi < 18.5
            ? "Underweight"
            : bmi <= 24.9
              ? "Normal weight"
              : "Overweight";
        document.getElementById("o9-c").innerText = `BMI: ${bmi} (${desc})`;
      }

      function runShipping() {
        let d = +document.getElementById("c10-d").value;
        let r = +document.getElementById("c10-rush").value;
        let fee = 5 + d * 0.2 + (r ? 15 : 0);
        document.getElementById("o10-c").innerText =
          `Shipping Fee: $${fee.toFixed(2)}`;
      }


      /* ---- helpers ---- */
      const $ = (id) => document.getElementById(id);
      const num = (id) => Number($(id).value);
      const val = (id) => $(id).value;
      function log(id, text, cls) {
        $(id).innerHTML = cls ? `<span class="${cls}">${text}</span>` : text;
      }


      /* ================= 2. CONDITIONALS ================= */
      function runC1() {
        const a = num("c1-age");
        log("out-c1", a >= 18 ? "✓ You can vote." : "✗ Not yet.");
      }
      function runC2() {
        const n = num("c2-n");
        log("out-c2", `${n} is ${n % 2 === 0 ? "even" : "odd"}`);
      }
      function runC3() {
        const ok = val("c3-u") === "admin" && val("c3-p") === "1234";
        log(
          "out-c3",
          ok ? "✓ Logged in." : "✗ Incorrect credentials.",
          ok ? "good" : "bad",
        );
      }
      function runC4() {
        const a = num("c4-age");
        let price = a < 12 ? 150 : a >= 60 ? 200 : 350;
        log("out-c4", `age ${a} → ৳${price} ticket`);
      }
      function runC5() {
        const bal = 2000,
          amt = num("c5-amt");
        log(
          "out-c5",
          amt <= bal
            ? `✓ Withdrew ৳${amt}. New balance: ৳${bal - amt}`
            : "✗ Insufficient funds.",
          amt <= bal ? "good" : "bad",
        );
      }
      function runC6() {
        const s = num("c6-score");
        let g;
        if (s >= 90) g = "A";
        else if (s >= 80) g = "B";
        else if (s >= 70) g = "C";
        else if (s >= 60) g = "D";
        else g = "F";
        log("out-c6", `score ${s} → grade ${g}`);
      }
      function runC7() {
        const t = num("c7-temp");
        let m;
        if (t < 10) m = "🧥 heavy coat";
        else if (t < 20) m = "🧶 light jacket";
        else if (t < 30) m = "👕 t-shirt";
        else m = "🩳 stay cool, it's hot";
        log("out-c7", m);
      }
      function runC8() {
        const c = num("c8-cart");
        log(
          "out-c8",
          c >= 1500
            ? "✓ Free shipping!"
            : `✗ Add ৳${1500 - c} more for free shipping.`,
          c >= 1500 ? "good" : "flag",
        );
      }
      function runC9() {
        const b = num("c9-bmi");
        let cat;
        if (b < 18.5) cat = "underweight";
        else if (b < 25) cat = "normal";
        else if (b < 30) cat = "overweight";
        else cat = "obese";
        log("out-c9", `BMI ${b} → ${cat}`);
      }
      let c10Light = "red";
      function runC10() {
        c10Light =
          c10Light === "red" ? "green" : c10Light === "green" ? "amber" : "red";
        $("c10-red").style.background =
          c10Light === "red" ? "#C23B31" : "#E4E4E7";
        $("c10-amber").style.background =
          c10Light === "amber" ? "#F5A623" : "#E4E4E7";
        $("c10-green").style.background =
          c10Light === "green" ? "#159473" : "#E4E4E7";
        log("out-c10", `current: ${c10Light}`);
      }
