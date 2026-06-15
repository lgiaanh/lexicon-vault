# 📰 Lexicon Vault

A sophisticated, self-contained client-side web application designed to help IELTS candidates and advanced English learners master academic vocabulary, phrasal verbs, and collocations. 

Lexicon Vault integrates advanced reading analysis, cognitive spaced repetition (SM-2), force-directed semantic graphs, and interactive listening games into a single, cohesive dashboard.

---

## 🚀 Key Features

### 1. 📰 IELTS Article Analyzer & Reading Log
* **Inflected Word Parser:** Strips plural endings, past tense suffixes, and adverbial endings locally to match roots to a dictionary database.
* **Document Import (PDF/TXT):** Upload and parse articles from PDF files with automated inline image extraction (covers and distributed figures).
* **Robust Client-Side OCR:** Powered by Tesseract.js, the app automatically detects scanned PDFs, streams real-time recognition progress, and performs OCR directly in the browser to extract text from images.
* **Direct Vocabulary Saving:** Double-click or tap highlighted words to display definitions, register synonyms, and save them immediately to your vault.

### 2. 🗂️ Spaced Repetition System (SM-2 Algorithm)
* **Custom Learning Stats:** Tracks review sessions, count of encounters, and accuracy rates for every entry.
* **Session Setup Dashboard:** Filter cards by specific CEFR levels, vocabulary types, specific folders, or due dates before starting.
* **SM-2 Adaptive Spacing:** Uses Anki-style response options (`Again`, `Hard`, `Good`, `Easy`) with strictly increasing intervals to match your cognitive retention curve.

### 3. 🎨 D3 force-directed Semantic Graph
* **Interactive Semantic Graph:** Visualizes vocabulary connections, showing topic groupings (semantic fields) and register synonyms.
* **Mối Tương Quan (Relationship) Labels:** Renders SVG text paths directly along relationship edges (e.g., synonym registers or semantic fields).
* **Opacity Controls:** Toggle link labels smoothly via a dedicated graph control sidebar.

### 4. 🧩 Gamified Phrasal Verbs Practice
* **Duolingo-Style Gap Filling:** Programmatically masks separable and inseparable phrasal verbs inside sentences.
* **Immediate Feedback:** Color-coded option buttons and session summaries detailing XP gains and accuracy.

### 5. 🗺️ Spatial Listening Dictation
* **Interactive SVG Maps:** Five custom SVGs including Greenwood Park, Central Museum Floorplan, Solar Water Heating System, Farming Village Development, and Hydroelectric Power Station.
* **Audio Synthesis Engine:** Uses the Web Speech API to read IELTS dictation sentences at realistic listening speeds.
* **One-Click Imports:** Directly save new prepositions or vocabulary words from the map exercises into your vault database.

---

## 🛠️ Technology Stack
* **Core Structure:** HTML5 (Semantic elements, responsive layout)
* **Logic/UI Engine:** React.js (Loaded locally in the browser via Babel compiler)
* **Visualization:** D3.js (Force layout simulation, SVG rendering)
* **OCR Core:** Tesseract.js (Web Workers & WebAssembly port)
* **Styles:** Custom Premium Vanilla CSS (Theme variables, responsive grid, micro-animations)

---

## 📦 How to Run Locally

Because the application uses Web Workers and WebAssembly (for OCR) and loads modules dynamically, **it cannot be opened directly via the `file://` protocol** (double-clicking `index.html`) without browser security blocks.

### Run via Local HTTP Server:
Run a local server in the project directory:

```bash
# Using Python 3
python3 -m http.server 8000
```

Once running, visit: **[http://localhost:8000](http://localhost:8000)** in your web browser.

---

## 🛸 Deploying to Vercel

To host this repository live on Vercel:
1. Push this Git repository to your GitHub account (`lgiaanh/lexicon-vault`).
2. Log in to [vercel.com](https://vercel.com).
3. Import the repository and click **Deploy**. Vercel will automatically host the static application for you.
