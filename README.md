# 🔖 Bookmark Manager Web App

A **simple and intuitive** web application that allows users to manage their favorite websites.  
You can **add**, **view**, and **delete** bookmarks with real-time **input validation** and **persistent storage** using `localStorage`.

---

## 💡 Features

- ✅ Add new bookmarks with automatic validation of URL and name
- ✅ Delete individual bookmarks
- ✅ View all saved bookmarks in a clean layout
- ✅ Data persistence using `localStorage`
- ✅ Fully responsive and mobile-friendly design

---

## 🧰 Technologies Used

- `HTML5` – semantic structure  
- `CSS3` – styling and responsive layout  
- `JavaScript` – core logic, DOM manipulation, localStorage

---
⚙️ How It Works

1. The user enters a website name and URL into the input fields.
2. JavaScript validates the input:
   - The name field must not be empty.
   - The URL must follow a valid format (e.g. `https://example.com`)
3. On submission:
   - The bookmark is saved to `localStorage`
   - A new bookmark card is displayed in the UI
4. Each bookmark has a delete button to remove it from both the UI and storage.
