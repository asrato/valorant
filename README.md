# Valorant App

Responsive web application built with React + TypeScript + Vite, consuming the [Valorant API](https://dash.valorant-api.com/) to display information about Valorant game.

## ✨ Features

- List of playable Valorant agents, with navigation to each agent's details
- Detailed view for each agent: name, codename, description, role, image, and abilities
- List of available buddies (gun buddies) in the game
- Responsive UI: optimized experience for both desktop and mobile
- Fast navigation between Home, Agents, and Buddies
- Friendly loading and error handling

## 🚀 Deployment

The project is live [here](https://asrato.github.io/valorant-app/#/)

Automatic deployment via GitHub Actions to GitHub Pages on every push to the `main` branch.

## 🛠️ Technologies & Tools

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Router DOM](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [Valorant API](https://valorant-api.com/)
- [GitHub Actions](https://github.com/features/actions) for CI/CD

## 📁 Project Structure

```
src/
  api/           # Valorant API integration
  data/          # Types and helper data
  hooks/         # Custom React hooks
  layout/        # Layout components (navbar, sidebar, loading, error, etc)
  shared/        # Shared components (button, image, spinner)
  views/         # Pages/views: home, agents, agent, buddies
    agents/      # Agents list
    agent/       # Agent detail
    buddies/     # Buddies list
    home/        # Home page
```

## 📦 Installation & Local Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/asrato/valorant-app.git
   cd valorant-app
   ```
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Run the project locally:
   ```bash
   yarn dev
   ```
4. Open [http://localhost:5173](http://localhost:5173)

## 🧪 Available Scripts

- `yarn dev` — start the development server
- `yarn build` — production build
- `yarn preview` — preview the production build
- `yarn lint` — lint the code with ESLint

## 📝 Development Notes

- The project uses ESLint with configuration for React, TypeScript, and hooks.
- Deployment is automatic to GitHub Pages via the workflow in `.github/workflows/deploy.yml`.
- Vite's base is set to `/valorant-app/` to work with GitHub Pages.
- The design is fully responsive, with separate components for desktop and mobile.

## � Motivation

- To learn and practice modern React (with hooks, functional components, and TypeScript)
- To explore building fully responsive UIs for both desktop and mobile using `navigator.userAgent`
- To practice clean code structure and modular component design
- For fun and as a portfolio project

## �📄 License

This project is for educational purposes only and is not affiliated with Riot Games.
