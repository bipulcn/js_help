
      /* ---- helpers ---- */
      const $ = (id) => document.getElementById(id);
      const num = (id) => Number($(id).value);
      const val = (id) => $(id).value;
      function log(id, text, cls) {
        $(id).innerHTML = cls ? `<span class="${cls}">${text}</span>` : text;
      }
      
      /* ================= 4. SELECTORS ================= */
      function runS1() {
        $("s1-target").style.background = "#EAF7F1";
        $("s1-target").style.color = "#159473";
        log("out-s1", 'getElementById → found & highlighted "product-42"');
      }
      function runS2() {
        $("s2-sale").style.background = "#FFF4E5";
        log("out-s2", 'querySelector(".sale") → found "Backpack"');
      }
      function runS3() {
        document.querySelectorAll("#s3-row .pill").forEach((p) => {
          p.style.background = "#EAF7F1";
          p.style.color = "#159473";
        });
        log("out-s3", "querySelectorAll → 4 pills highlighted");
      }
      function runS4() {
        log("out-s4", `input value: "${val("s4-box")}"`);
      }
      function runS5() {
        const n = document.querySelectorAll(".s5-top:checked").length;
        log("out-s5", `${n} topping(s) selected`);
      }
      function runS6() {
        const chosen = document.querySelector(
          'input[name="s6-ship"]:checked',
        ).value;
        log("out-s6", `chosen shipping: ${chosen}`);
      }
      function runS7() {
        const sku = val("s7-sku");
        const el = document.querySelector(`#s7-row [data-sku="${sku}"]`);
        log(
          "out-s7",
          el ? `found: ${el.textContent}` : "no product with that SKU",
          el ? "good" : "bad",
        );
      }
      function runS8(el) {
        log(
          "out-s8",
          `closest(".pill") → clicked card is "${el.dataset.name}"`,
        );
      }
      function runS9() {
        log("out-s9", `title only: "${$("s9-title").textContent}"`);
      }
      function runS10() {
        const n = document.querySelectorAll(".s10-msg.unread").length;
        log("out-s10", `${n} unread message(s)`);
      }