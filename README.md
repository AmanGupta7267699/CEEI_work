# 🚀 CEEI Frontend Assignment

A modern React + TypeScript + Vite project to fetch, display, and manage a list of users — built as part of a technical assignment for **CEEI**.

---

## 🧩 Features

- ⚛️ Built with **React**, **TypeScript**, and **Vite**
- 🌐 **API Integration** to fetch users
- 🗃️ **Redux Toolkit** for state management (search and sort)
- 🔁 **React Query** for fetching and caching user data (5-minute stale time)
- 🔍 **Search** and **Sort** functionality
- ⏳ Custom **Loader** with a simulated delay
- 🧪 **Unit testing** with **Jest** and **React Testing Library**
- 💅 Styled using **TailwindCSS**
- 📁 Clean and organized folder structure

---

## 📁 Folder Structure

```
src/
├── api/           # API utilities (fetchUsers)
├── components/    # UI components (UserCard, Loader, etc.)
├── pages/         # Pages like HomePage and About
├── store/         # Redux store and UI slice
├── types/         # TypeScript types (e.g., SlimUser)
└── __tests__/     # Unit tests (using Jest)
```

---

## 📦 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/AmanGupta7267699/CEEI_work.git
cd CEEI_work
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app locally

```bash
npm run dev
```

## 🧪 Running Tests

This project uses **Jest** and **React Testing Library** for unit testing.

```bash
npm test
```

Test coverage includes:
* Loader display on initial load
* Error message if fetch fails
* Rendered user list after successful fetch

## ⚙️ Build for Production

```bash
npm run build
```

## 🧠 Implementation Details

### API Integration
- Uses axios for fetching data from the DummyJSON API
- Data is transformed into a consistent format using TypeScript interfaces

### State Management
- Redux Toolkit for UI state (search term and sort order)
- React Query for API data fetching and caching

### Testing Strategy
- Unit tests for components using Jest and React Testing Library
- Mocked API calls for predictable test behavior

## 🔧 Technologies Used

- React 18
- TypeScript
- Vite
- Redux Toolkit
- React Query (TanStack Query)
- TailwindCSS
- Axios
- Lucide React (for icons)
- Jest & React Testing Library

