AI DSA Dojo

AI DSA Dojo is a cutting-edge, AI-powered platform for mastering Data Structures & Algorithms (DSA) tailored specifically for coding interview preparation. Built with modern technologies including React, Tailwind CSS, Vite, and Auth0, it leverages AI models to dynamically generate, evaluate, and personalize problem-solving experiences — empowering developers to accelerate their learning journey.

## Table of Contents

* [Key Features](#key-features)
* [Demo](#demo)
* [Screenshots](#screenshots)
* [Tech Stack](#tech-stack)
* [Setup & Installation](#setup--installation)
* [Project Structure](#project-structure)
* [Authentication](#authentication)
* [AI Integration](#ai-integration)
* [Scripts](#scripts)
* [Deployment](#deployment)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)



## Key Features

* AI-Driven Problem Generator: Dynamically creates DSA challenges tailored by topic and difficulty.
* Automated Solution Feedback:** AI evaluates submitted solutions and provides actionable insights.
* Secure Auth0 Authentication: Seamless user login/logout and profile management.
* User Dashboard & Analytics: Visual progress tracking including solved problems, streaks, and personalized stats.
* Responsive & Modern UI:** Mobile-first design crafted with Tailwind CSS ensuring smooth UX across devices.
* Gamification:** Badges and achievements to motivate consistent learning.
* Integrated Support:** Built-in contact form for user feedback and assistance.


## Screenshots

![Hero Section](heropic.jpg)
*(Add additional screenshots or GIFs as needed to showcase UI/UX)*



## Tech Stack

* **Frontend:** React, Vite
* **Styling:** Tailwind CSS
* **Authentication:** Auth0 React SDK
* **AI Backend:** (Gemini API, OpenAI, or other)
* **State Management:** React Hooks
* **Utilities:** react-countup



## Setup & Installation

### Prerequisites

* Node.js v18+
* npm or yarn

### Steps

bash
git clone https://github.com/yourusername/ai-dsa-dojo.git
cd ai-dsa-dojo
npm install # or yarn install


Configure Auth0:

* Register for a free Auth0 account.
* Create a new app, retrieve your `domain` and `clientId`.
* Update these values in `src/main.jsx`.

Configure AI API credentials as needed (refer to your AI provider docs).

Start development server:

bash
npm run dev # or yarn dev


Open `http://localhost:5173` in your browser.



## Project Structure


.
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── assets/
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── package.json
└── README.md




## Authentication

* Auth0 React SDK manages authentication flows.
* Conditional rendering for Login/Logout buttons based on auth state.
* User profile details available post-login.



## AI Integration

* Uses AI models to generate tailored DSA problems dynamically.
* Evaluates code submissions to provide instant feedback and hints.
* API keys and endpoints must be configured securely.



## Scripts

| Command           | Description              |
| -- | ------------------------ |
| `npm run dev`     | Start dev server         |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

---

## Deployment

Recommended platforms:

* Netlify: Connect your GitHub repo, set build command to `npm run build`, publish directory `dist`.
* Vercel: Supports Vite apps with minimal config.
* GitHub Pages: For static hosting.

Remember to add environment variables for Auth0 and AI API keys on your platform dashboard.

---

## Contributing

Contributions welcome! Please:

* Fork the repo
* Create feature branches
* Open pull requests with clear descriptions
* Report issues or request features via GitHub Issues

---

## License

Distributed under the [MIT License](LICENSE).

---

## Contact

* Email: [hello@dsadojo.com](mailto:hello@dsadojo.com)
* Twitter: [@dsadojo](https://twitter.com/dsadojo)

---

Happy Coding! Accelerate your interview prep with AI DSA Dojo.**
