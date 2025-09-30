# Custom Theme – NextGen ERPNext Desk Theme

A modern ERPNext Desk Theme with:
- Dark & Light mode support
- Glassmorphism UI for sidebar and navbar
- Neumorphic module cards with hover animation
- Floating Action Button (FAB) for quick creation
- Styled forms, tables, buttons, and checkboxes

---
<img width="1426" height="356" alt="Screenshot 2025-09-30 at 1 19 43 PM" src="https://github.com/user-attachments/assets/80484497-f82a-49e3-be06-af4ba2f6b928" />

<img width="1275" height="198" alt="Screenshot 2025-09-30 at 1 20 09 PM" src="https://github.com/user-attachments/assets/58fe9f8c-b6d0-483c-b086-99d1890a700f" />

<img width="1360" height="333" alt="Screenshot 2025-09-30 at 1 20 35 PM" src="https://github.com/user-attachments/assets/10ed8958-c84e-4713-9b1e-34f11ecdf9ec" />


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

