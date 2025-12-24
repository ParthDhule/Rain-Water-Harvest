# Rainwater Harvesting App
# 🌧️ P14: Smart Rooftop Rainwater Harvester

A web-based assessment tool designed for on-spot evaluation of **Rooftop Rainwater Harvesting (RTRWH)** and **Artificial Recharge (AR)** potential. This project aims to help homeowners and urban planners in India calculate water conservation benefits easily.

---

## 🚀 Project Overview
This tool allows users to input their rooftop area and material to calculate how much rainwater can be harvested annually based on local rainfall data.

### Key Features
* **Real-time Calculation:** Instant assessment of harvesting and recharge potential.
* **Location Awareness:** Fetch local annual rainfall data (via API).
* **Storage Recommendations:** Suggests optimal tank sizes based on potential.
* **Mobile First:** Responsive design for on-field assessment.

---

## 📂 Project Structure

```text
rainwater-assessment-app/
│
├── assets/data                               # Icons, logos, and static data
│     │      └── rainfall_data.json           #rainfall data
│     └── favicons         
├── css/
│   └── style.css                             # Custom styling (Flexbox/Grid)
├── js/
│   ├── calculate.js                          # Core logic & mathematical formulas
│   └── main.js                               # DOM manipulation & event listeners
├── index.html                                # Main application entry point
├── README.md                                 # Project documentation
└── .gitignore                                # Files to ignore in Git
