# Fitness Chatbot

Welcome to the **Fitness Chatbot** project! This chatbot is designed to help users achieve their fitness goals by providing personalized recommendations, and answering questions. Powered by **Gemini's API**, the chatbot delivers intelligent and context-aware responses. The project leverages **Next.js** for the frontend and **ShadCN** for elegant and customizable UI components.

## Features

- **Personalized Fitness Plans**: Generate tailored fitness plans based on user preferences and goals.
- **AI-Powered Assistance**: Ask the chatbot fitness-related questions for instant, accurate advice.
- **User-Friendly Interface**: Clean and intuitive design using ShadCN components.

## Tech Stack

### Frameworks and Libraries
- **Next.js**: Provides a robust framework for server-rendered React applications.
- **ShadCN**: Delivers reusable and highly customizable UI components.
- **TypeScript**: Ensures type safety and improves code maintainability.

### API Integration
- **Gemini's API**: Powers the chatbot with AI capabilities for dynamic and intelligent interactions.

### Styling
- **Tailwind CSS**: Enables rapid styling with utility-first CSS classes.

## Installation and Setup

### Prerequisites
Ensure you have the following installed:
- **Node.js** (version 18 or above)
- **npm** or **pnpm**

### Steps to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/sebastian-nyberget/chatbot.git
   cd chatbot
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. Create an `.env` file in the root directory and add your API keys and configuration:
   ```env
   GEMINI_API_KEY=your-gemini-api-key
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Usage

1. **Interact with the chatbot**:
   - Ask questions like, *"What are the best exercises for abs?"*
   - Request fitness plans tailored to your goals.

2. **Track your progress**:
   - Log workouts.
   - Monitor fitness statistics through dynamic visualizations.

## Acknowledgments

- [Gemini](https://gemini.com) for their powerful API.
- [Next.js](https://nextjs.org) for their excellent framework.
- [ShadCN](https://shadcn.dev) for beautiful and customizable UI components.
