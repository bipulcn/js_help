
      // State stores
      let countVar = 0;
      let swapA = "Red",
        swapB = "Blue";
      let fontSizeVar = 12;

      
      // 3. Loops logic
      function renderSwatches() {
        let colors = ["#f87171", "#fbbf24", "#34d399", "#60a5fa", "#a78bfa"];
        let html = "";
        for (let c of colors)
          html += `<div style="width:16px;height:16px;background:${c};border-radius:2px;"></div>`;
        document.getElementById("o5-l").innerHTML = html;
      }

      function renderTags() {
        let tags = ["HTML", "CSS", "JS", "JSON"];
        let html = "";
        tags.forEach((t) => {
          html += `<span class="tag tag-yellow">${t}</span>`;
        });
        document.getElementById("o6-l").innerHTML = html;
      }

      function runCoinStreak() {
        let flips = 0,
          outcome = "";
        while (outcome !== "H") {
          flips++;
          outcome = Math.random() > 0.5 ? "H" : "T";
        }
        document.getElementById("o7-l").innerText =
          `Tossed ${flips} time(s) to hit Heads`;
      }

      function runMatrixGen() {
        let matrix = [];
        for (let r of ["A", "B"]) {
          for (let c = 1; c <= 3; c++) matrix.push(r + c);
        }
        document.getElementById("o10-l").innerText = matrix.join(" ");
      }

      /* ---- helpers ---- */
      const $ = (id) => document.getElementById(id);
      const num = (id) => Number($(id).value);
      const val = (id) => $(id).value;
      function log(id, text, cls) {
        $(id).innerHTML = cls ? `<span class="${cls}">${text}</span>` : text;
      }


      /* ================= 3. LOOPS ================= */
      function runL1() {
        const n = num("l1-n");
        let lines = [];
        for (let i = 1; i <= 10; i++) lines.push(`${n} × ${i} = ${n * i}`);
        log("out-l1", lines.join("\n"));
      }
      function runL2() {
        let c = num("l2-n");
        let lines = [];
        while (c > 0) {
          lines.push(String(c));
          c--;
        }
        lines.push("🚀 liftoff");
        log("out-l2", lines.join("\n"));
      }
      function runL3() {
        const items = [120, 75, 340, 95, 60];
        let total = 0;
        for (const p of items) total += p;
        log("out-l3", `items: ${items.join(", ")}\ntotal: ৳${total}`);
      }
      function runL4() {
        let lines = [];
        const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        for (const d of days)
          lines.push(`${d}: ${Math.floor(3000 + Math.random() * 7000)} steps`);
        log("out-l4", lines.join("\n"));
      }
      function runL5() {
        const s = [68, 91, 77, 85, 59, 94, 72];
        let max = s[0];
        for (const v of s) if (v > max) max = v;
        log("out-l5", `scores: ${s.join(", ")}\nhighest: ${max}`);
      }
      function runL6() {
        const n = num("l6-n");
        let f = 1;
        for (let i = n; i > 1; i--) f *= i;
        log("out-l6", `${n}! = ${f}`);
      }
      function runL7() {
        const pw = val("l7-pw");
        let letters = 0,
          digits = 0,
          symbols = 0;
        for (const ch of pw) {
          if (/[a-zA-Z]/.test(ch)) letters++;
          else if (/[0-9]/.test(ch)) digits++;
          else symbols++;
        }
        const score = Math.min(
          100,
          pw.length * 8 + (digits > 0 ? 15 : 0) + (symbols > 0 ? 15 : 0),
        );
        $("l7-bar").style.width = score + "%";
        log(
          "out-l7",
          `letters:${letters} digits:${digits} symbols:${symbols} → strength ${score}%`,
        );
      }
      function runL8() {
        const max = num("l8-max");
        let lines = [];
        for (let i = 1; i <= max; i++) {
          if (i % 15 === 0) lines.push("FizzBuzz");
          else if (i % 3 === 0) lines.push("Fizz");
          else if (i % 5 === 0) lines.push("Buzz");
          else lines.push(String(i));
        }
        log("out-l8", lines.join("  "));
      }
      function runL9() {
        const size = Math.max(2, Math.min(12, num("l9-size")));
        const grid = $("l9-grid");
        grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        grid.innerHTML = "";
        for (let row = 0; row < size; row++)
          for (let col = 0; col < size; col++) {
            const cell = document.createElement("div");
            cell.className = "cell";
            cell.style.background =
              (row + col) % 2 === 0 ? "#1F2328" : "#7C6CF0";
            grid.appendChild(cell);
          }
        log("out-l9", `painted a ${size}×${size} board`);
      }
      function runL10() {
        const rows = num("l10-rows");
        let lines = [];
        for (let r = 1; r <= rows; r++)
          lines.push(" ".repeat(rows - r) + "★ ".repeat(r).trim());
        log("out-l10", lines.join("\n"));
      }
