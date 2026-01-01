# 📘 Flipbook Portfolio (2027 Premium Edition)

A futuristic, high- personal portfolio website featuring a stunning **3D Flipbook** navigation system. Built with a aesthetic, it combines holographic glassmorphism, liquid text animations, and deep atmospheric textures to create an immersive user experience.

![Portfolio Preview](./assets/screenshots/preview.png)
*(Note: Add a screenshot of your portfolio in an assets/screenshots folder for a better README)*

## ✨ Features

-   **📖 3D Flipbook Navigation:** Realistic page-turning animations that feel tangible and interactive.
    -   **Holographic Glassmorphism:** Frosted, gradient-glass backgrounds for cards.
    -   **Liquid Text Shimmer:** animated text gradients that flow like liquid light.
    -   **Film Grain Texture:** a subtle global noise overlay for a cinematic feel.
-   **🌌 Dynamic Atmosphere:** Deep Navy/Charcoal interactive background with floating particles.
-   **🎨 Color Psychology:**
    -   **Tech Blue (`#3b82f6`):** Used for structure and identity (Trust/Stability).
    -   **Success Green (`#22c55e`):** Used strictly for positive actions (Hover states, confirmation).
-   **📱 Fully Responsive:** Seamlessly adapts from a desktop 3D book to a stacked mobile scroll layout.
-   **📧 Working Contact Form:** Integrated with [FormSubmit.co](https://formsubmit.co/) for serverless email submissions.

## 🛠️ Tech Stack

-   **HTML5:** Semantic structure and content.
-   **CSS3:** Advanced animations, 3D transforms (`perspective`, `rotateY`), CSS Variables, and Flexbox/Grid layouts.
-   **JavaScript (Vanilla):** Logic for page turning, z-index management, and navigation state.
-   **Boxicons:** For consistent, high-quality iconography.
-   **Google Fonts:** "Poppins" for modern, clean typography.

## 🚀 Getting Started

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/your-username/Flipbook-Portfolio.git
    cd Flipbook-Portfolio
    ```

2.  **Run Locally:**
    -   Simply open `index.html` in your web browser.
    -   *Recommended:* Use a local server (like Live Server in VS Code) for the best experience with loading assets.

## 📂 Project Structure

```
Flipbook-Portfolio/
├── index.html          # Main HTML structure
├── style/
│   └── style.css       # All styles, animations, and responsive rules
├── javaScript/
│   └── main.js         # Flip functionality and interactivity
└── assets/
    └── [your_images]   # Images, PDFs, etc.
```

## 🎨 Customization

### 1. **Personal Information:**
Update `index.html` with your details:
-   **Name & Title:** Look for the `profile-page` section.
-   **Links:** Update `href` attributes for LinkedIn, GitHub, and Resume.
-   **Content:** Edit the text in Education, Projects, and Skills sections.

### 2. **Contact Form:**
In `index.html`, find the `<form>` tag:
```html
<form action="https://formsubmit.co/YOUR_EMAIL@gmail.com" method="POST">
```
Replace `YOUR_EMAIL@gmail.com` with your actual email address to receive messages.

### 3. **Images:**
Replace `profile.jpg` or other assets in the `assets/` folder with your own images. Ensure to update the file paths in the HTML/CSS if filenames change.

### 4. **Color Theme:**
The site uses CSS variables for easy theming. Open `style/style.css` and adjust `:root`:

```css
:root {
    --main-color: #3b82f6;    /* Your Primary Color */
    --accent-green: #22c55e;  /* Your Accent Color */
    /* ... other variables */
}
```

## 🤝 Contributing

Contributions are welcome! If you have ideas for new features or animations:
1.  Fork the project.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

**Crafted with 💙 by [Radheshyam Bhati]**
