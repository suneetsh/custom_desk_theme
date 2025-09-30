# Custom Theme – NextGen ERPNext Desk Theme

A modern ERPNext Desk Theme with:
- Dark & Light mode support
- Glassmorphism UI for sidebar and navbar
- Neumorphic module cards with hover animation
- Floating Action Button (FAB) for quick creation
- Styled forms, tables, buttons, and checkboxes

---

## Installation

Use the [bench CLI](https://github.com/frappe/bench) to install:

```bash
# go to your bench folder
cd ~/frappe-bench

bench get-app https://github.com/suneetsh/custom_desk_themee.git

bench --site ENTER_YOUR_SITE_NAME install-app custom_desk_theme

# build assets & restart bench
bench build
bench restart

