
      // State stores
      let countVar = 0;
      let swapA = "Red",
        swapB = "Blue";
      let fontSizeVar = 12;

      
      // 1. Variables logic
      function runHexConvert() {
        let hex = document.getElementById("v10").value.replace("#", "");
        let r = parseInt(hex.substring(0, 2), 16) || 0;
        let g = parseInt(hex.substring(2, 4), 16) || 0;
        let b = parseInt(hex.substring(4, 6), 16) || 0;
        document.getElementById("o10").innerText = `rgb(${r}, ${g}, ${b})`;
      }




      /* ---- helpers ---- */
      const $ = (id) => document.getElementById(id);
      const num = (id) => Number($(id).value);
      const val = (id) => $(id).value;
      function log(id, text, cls) {
        $(id).innerHTML = cls ? `<span class="${cls}">${text}</span>` : text;
      }


      /* ================= 1. VARIABLES ================= */
      function runV1() {
        log("out-v1", `${val("v1-name")} — ৳${num("v1-price")}`);
      }
      function runV2() {
        log("out-v2", `${val("v2-first")} ${val("v2-last")}`);
      }
      function runV3() {
        const c = num("v3-c");
        log("out-v3", `${c}°C = ${((c * 9) / 5 + 32).toFixed(1)}°F`);
      }
      function runV4() {
        const y = num("v4-year");
        log("out-v4", `born ${y} → age ${2026 - y}`);
      }
      function runV5() {
        const w = num("v5-w"),
          h = num("v5-h") / 100;
        log("out-v5", `BMI = ${(w / (h * h)).toFixed(1)}`);
      }
      function runV6() {
        const p = num("v6-p"),
          r = num("v6-r"),
          t = num("v6-t");
        log(
          "out-v6",
          `interest = ৳${((p * r * t) / 100).toFixed(0)} over ${t} years`,
        );
      }
      function runV7() {
        log(
          "out-v7",
          `${num("v7-usd")} USD = ৳${(num("v7-usd") * 122).toFixed(0)}`,
        );
      }
      let v8On = false;
      function runV8() {
        v8On = !v8On;
        $("v8-dot").style.background = v8On ? "#159473" : "#E4E4E7";
        log("out-v8", `isOn = ${v8On}`);
      }
      let v9Cart = 3;
      function runV9(isConst) {
        if (!isConst) {
          v9Cart++;
          log(
            "out-v9",
            `cartCount: ${v9Cart} | TAX_RATE: 0.05  (let allows this)`,
          );
        } else
          log(
            "out-v9",
            `⛔ TypeError: Assignment to constant variable.`,
            "bad",
          );
      }
      function runV10() {
        const qty = val("v10-qty");
        log(
          "out-v10",
          `qty (as typed) = "${qty}"\nprice × qty = 50${qty}  ← string got glued, not multiplied!`,
          "bad",
        );
      }
      function runV10fix() {
        const qty = Number(val("v10-qty"));
        log(
          "out-v10",
          `Number(qty) = ${qty}\nprice × qty = ${50 * qty}`,
          "good",
        );
      }