
      // State stores
      let countVar = 0;
      let swapA = "Red",
        swapB = "Blue";
      let fontSizeVar = 12;

      
      // 4. DOM logic
      function appendTaskNode() {
        let val = document.getElementById("d6-txt").value;
        if (!val) return;
        let li = document.createElement("li");
        li.innerText = val;
        document.getElementById("d6-list").appendChild(li);
      }


      /* ---- helpers ---- */
      const $ = (id) => document.getElementById(id);
      const num = (id) => Number($(id).value);
      const val = (id) => $(id).value;
      function log(id, text, cls) {
        $(id).innerHTML = cls ? `<span class="${cls}">${text}</span>` : text;
      }

      /* ================= 5. DOM ================= */
      function runD1() {
        $("d1-status").textContent = "Shipped";
        log("out-d1", 'status.textContent = "Shipped"');
      }
      let d2Sale = false;
      function runD2() {
        d2Sale = !d2Sale;
        const b = $("d2-badge");
        b.textContent = d2Sale ? "-20% Sale" : "Regular price";
        b.style.background = d2Sale ? "#FDECEA" : "#EFEFEF";
        b.style.color = d2Sale ? "#C23B31" : "inherit";
        log("out-d2", `sale badge ${d2Sale ? "added" : "removed"}`);
      }
      function runD3() {
        const name = val("d3-item"),
          price = val("d3-price");
        if (!name) {
          log("out-d3", "type an item name first", "bad");
          return;
        }
        const li = document.createElement("li");
        li.innerHTML = `${name} <span class="pill">৳${price || 0}</span>`;
        $("d3-cart").appendChild(li);
        $("d3-item").value = "";
        $("d3-price").value = "";
        log("out-d3", "new <li> created and appended to the cart");
      }
      function runD5() {
        const c = $("d5-count");
        c.textContent = Number(c.textContent) + 1;
        log("out-d5", `badge updated to ${c.textContent}`);
      }
      function runD5clear() {
        $("d5-count").textContent = "0";
        log("out-d5", "badge cleared");
      }
      function runD6() {
        const len = val("d6-bio").length;
        log("out-d6", `${len} / 80 characters`);
      }
      function runD7() {
        const filled = [
          val("d7-name"),
          val("d7-email"),
          val("d7-phone"),
        ].filter((v) => v.trim()).length;
        const pct = Math.round((filled / 3) * 100);
        $("d7-bar").style.width = pct + "%";
        log("out-d7", `${pct}% complete`);
      }
      function runD8(color) {
        $("d8-preview").textContent = `Viewing: ${color}`;
        log("out-d8", `swapped preview to ${color}`);
      }
      const d9Contacts = [
        { name: "Tanvir Ahmed", phone: "017xx-111" },
        { name: "Nusrat Jahan", phone: "018xx-222" },
        { name: "Farhan Kabir", phone: "019xx-333" },
      ];
      function renderContacts(list) {
        $("d9-contacts").innerHTML = list
          .map((c) => `<li>${c.name} <span class="pill">${c.phone}</span></li>`)
          .join("");
      }
      function runD9() {
        renderContacts(d9Contacts);
        log("out-d9", `rendered ${d9Contacts.length} contacts from an array`);
      }
      function runD9sort() {
        renderContacts(
          [...d9Contacts].sort((a, b) => a.name.localeCompare(b.name)),
        );
        log("out-d9", "sorted a copy of the array A–Z");
      }
      function runD10() {
        $("d10-modal").style.display = "block";
        log("out-d10", "modal shown");
      }
      function runD10confirm() {
        $("d10-modal").style.display = "none";
        log("out-d10", "account deleted (simulated)", "bad");
      }
      function runD10cancel() {
        $("d10-modal").style.display = "none";
        log("out-d10", "cancelled, modal hidden");
      }
