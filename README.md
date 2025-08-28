# 🥕 Farmers Market 🌽

A modern, responsive **Farmers Market web application** built with **Vite + React.js**.  
This app simulates an online store where users can browse farm-fresh products like **flowers, vegetables**, and **fruits**, add them to a cart, and place orders.

---

## 🚀 Features

- 🛒 Add-to-cart & place order
- 🌻 Product categories (flowers, vegetables, etc.)
- 🧑‍🌾 Products fetched from local `json-server`
- 📱 Fully responsive UI (mobile/tablet/desktop)
- 🔄 Dynamic routing with React Router
- 💚 Clean layout and reusable components

---

## 🧰 Tech Stack

| Tech                                                   | Purpose                        |
| ------------------------------------------------------ | ------------------------------ |
| [React.js](https://reactjs.org/)                       | Frontend UI library            |
| [Vite](https://vitejs.dev/)                            | Development & bundling tool    |
| [JSON Server](https://github.com/typicode/json-server) | Local REST API for `db.json`   |
| [react-router-dom](https://reactrouter.com/)           | Navigation & routing           |
| CSS                                                    | Custom styles & responsiveness |

---

## 📸 Screenshot

![Farmers Market Screenshot](.images/screenshot.png)

> 📌 Be sure to upload `screenshot.png` to your GitHub repo root.

---

## 📂 Folder Structure

```bash
farmers-market/
├── public/
│   └── Images          # Product images
├── src/
│   ├── assets/         # Images & fonts
│   ├── components/     # Card, Footer, Navbar, etc.
│   ├── context/        # React Context API (Cart, Product)
│   ├── pages/          # Pages like About, Home, Cart
│   ├── App.jsx
│   └── main.jsx
├── db.json             # JSON Database
├── package.json
├── vite.config.js
└── README.md

```
