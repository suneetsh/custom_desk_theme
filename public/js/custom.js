frappe.ready(() => {
    console.log("🚀 Custom Theme JS Loaded!");

    /* === Hover animations for Desk Cards === */
    const observer = new MutationObserver(() => {
        document.querySelectorAll(".module-card, .page-card").forEach(card => {
            card.addEventListener("mouseenter", () => {
                card.style.transform = "translateY(-12px) scale(1.05)";
                card.style.boxShadow = "0 25px 50px rgba(0,0,0,0.25)";
            });
            card.addEventListener("mouseleave", () => {
                card.style.transform = "translateY(0) scale(1)";
                card.style.boxShadow = "";
            });
        });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    /* === Floating Action Button (FAB) === */
    const fab = document.createElement("div");
    fab.innerHTML = `
        <div id="erp-fab" style="
            position: fixed;
            bottom: 25px;
            right: 25px;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: linear-gradient(135deg,#6C63FF,#00F0FF);
            box-shadow: 0 8px 20px rgba(0,0,0,0.25);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-size: 26px;
            cursor: pointer;
            z-index: 9999;
        ">
            ＋
        </div>
    `;
    document.body.appendChild(fab);

    const menu = document.createElement("div");
    menu.id = "erp-fab-menu";
    menu.style = `
        position: fixed;
        bottom: 95px;
        right: 25px;
        display: none;
        flex-direction: column;
        gap: 10px;
        z-index: 9999;
    `;
    menu.innerHTML = `
        <button class="btn btn-primary">New Sales Invoice</button>
        <button class="btn btn-primary">New Quotation</button>
        <button class="btn btn-primary">New Customer</button>
    `;
    document.body.appendChild(menu);

    document.getElementById("erp-fab").addEventListener("click", () => {
        menu.style.display = menu.style.display === "none" ? "flex" : "none";
    });

    /* === Quick Create Shortcuts === */
    menu.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("click", () => {
            const text = btn.innerText;
            if (text.includes("Sales Invoice")) {
                frappe.new_doc("Sales Invoice");
            } else if (text.includes("Quotation")) {
                frappe.new_doc("Quotation");
            } else if (text.includes("Customer")) {
                frappe.new_doc("Customer");
            }
            menu.style.display = "none";
        });
    });

    /* === Dark/Light Mode Toggle Fix === */
    const themeObserver = new MutationObserver(() => {
        if (document.documentElement.getAttribute("data-theme") === "dark") {
            document.body.classList.add("dark-theme-active");
        } else {
            document.body.classList.remove("dark-theme-active");
        }
    });
    themeObserver.observe(document.documentElement, { attributes: true });
});

