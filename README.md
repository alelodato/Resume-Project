# 💼 Resume Project — Personal Portfolio Website

A responsive, multilingual resume website built with HTML, CSS, and JavaScript. Designed to showcase a developer's skills, work history, and contact information, this portfolio is easily customizable and deployable via GitHub Pages.

---

## 📘 Project Overview

This website serves as an online resume for developers or professionals looking to present their experience and projects in a clean, modern way.

- Fully responsive layout (mobile-first design)
- Multiple language support (currently English and Italian)
- Clean, semantic HTML5 and modular CSS
- Easily extendable (add portfolio, blog, testimonials, etc.)
- Ready for deployment with GitHub Pages
- Includes Gitpod and Docker setup for quick development

---

## 🌐 Live Demo

🔗 [View Live Website](https://alelodato.github.io/Resume-Project/)

---

## 🧭 Pages and Structure

| Page | Description |
|------|-------------|
| `index.html` | Landing page that welcomes users and briefly introduces the site. Acts as a visual entry point with links to the resume and contact pages. |
| `resume.html` | Main resume page containing: personal statement, skills, work experience, education, and downloadable CV. |
| `contact.html` | Displays essential contact information (email, phone, links to GitHub/LinkedIn, etc.). |
| `lang/` | JSON files for dynamic language switching (English and Italian available). |
| `assets/` | Contains all media files (icons, images, CV PDFs, etc.). |
| `.gitpod.yml` + `.gitpod.dockerfile` | Configuration files to spin up the project instantly in Gitpod, a cloud development environment. |
| `Dockerfile` | Allows the project to be containerized and run locally using Docker. |
| `CNAME` | Optional file for setting up a custom domain on GitHub Pages. |
| `.gitignore` | Specifies which files/folders Git should ignore. |
| `sitemap.xml` | Helps with SEO indexing when the site is deployed.

---

## 🛠️ Tech Stack

- **HTML5** – Semantic, accessible markup  
- **CSS3** – Responsive layout and design  
- **JavaScript (Vanilla)** – Dynamic features and language switching  
- **Git + GitHub** – Version control and deployment  
- **GitHub Pages** – Free static hosting  
- **Gitpod** – One-click cloud IDE for development  
- **Docker** – Containerized development environment (optional)

---

## 🧪 Manual Testing

The site was manually tested using the following methods:

### ✅ Browser Compatibility
Tested on:
- Google Chrome (desktop + mobile)
- Mozilla Firefox
- Safari (Mac + iPhone)
- Microsoft Edge

### ✅ Responsiveness
Tested on:
- iPhone 13, 14
- iPad
- Android (Pixel 5, Samsung S21)
- Desktop (Full HD, 1440p, 4K)

Breakpoints manually verified to ensure content scales correctly on all screen sizes.

### ✅ Functionality
- Language switching between English and Italian works without reload
- Navigation links between pages work correctly
- External links (email, GitHub, LinkedIn) open in new tabs
- Resume PDF downloads correctly in both languages
- Gitpod and Docker environments start successfully (where supported)

### ✅ Lighthouse Audit
Performed Google Lighthouse analysis:
- ✅ Accessibility: 
- ✅ Performance: 
- ✅ SEO: 
- ✅ Best Practices: 

---

## 🚀 Getting Started Locally

### 1. Clone the Repository
```bash
git clone https://github.com/alelodato/Resume-Project.git
cd Resume-Project
```

### 2. Open in browser
You can simply open `index.html`, `resume.html`, or `contact.html` in any browser.

### Optional: Run with Docker
```bash
docker build -t resume-project .
docker run -p 8080:80 resume-project
```

Then visit `http://localhost:8080` in your browser.

---

## 📤 Deployment (GitHub Pages)

1. Make sure your homepage is named `index.html`.
2. Push the code to the `main` branch.
3. Go to your repository settings → Pages → Set branch to `main` and folder to `/root`.

Your site will be available at:
```
https://yourusername.github.io/Resume-Project/
```

---

## 🧩 Future Improvements

- Add a “Portfolio” section with project cards and GitHub links  
- Include contact form with form handling (Formspree, Netlify, or backend)  
- Add dark mode toggle  
- Improve accessibility with ARIA labels  
- Expand language support (French, Spanish, etc.)

---

## 👤 Author

**Alessio Lodato**  
🌍 [alessiolodato.dev](https://alessiolodato.dev)  
🐙 [GitHub](https://github.com/alelodato)  
✉️ See contact page in the site

---

## 📄 License

This project is licensed under the MIT License.  
You are free to use, modify, and distribute it.

```
MIT License

Copyright (c) 2025 Alessio Lodato

Permission is hereby granted, free of charge, to any person obtaining a copy...
```

---

## 🙏 Acknowledgements

- Code Institute for the original template structure

---

## 📌 Note

This is a static front-end project. No backend or database is included. If you're looking to extend this into a full-stack portfolio (with blog, admin panel, project CMS, etc.), feel free to fork and build upon it.

---
