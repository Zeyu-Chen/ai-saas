# AI SaaS Platform

[![Next.js](https://img.shields.io/badge/Next.js-14-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![MySQL](https://img.shields.io/badge/MySQL-8-4479A1?logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Prisma](https://img.shields.io/badge/Prisma-5-2D3748?logo=prisma&logoColor=white)](https://www.prisma.io/)
[![OpenAI](https://img.shields.io/badge/OpenAI-4-412991?logo=openai&logoColor=white)](https://openai.com/)
[![Clerk](https://img.shields.io/badge/Clerk-5-6C47FF?logo=clerk&logoColor=white)](https://clerk.dev/)
[![Stripe](https://img.shields.io/badge/Stripe-15-008CDD?logo=stripe&logoColor=white)](https://stripe.com/)

A modern AI SaaS platform built with Next.js that provides multiple AI capabilities including conversation, image generation, music generation, video generation and code generation with premium subscription features.

## Features

🤖 Multiple AI Models - Powered by OpenAI and Replicate
- Conversation AI
- Image Generation
- Music Generation  
- Video Generation
- Code Generation

💳 Premium Subscription
- Stripe integration for premium features
- Free trial with limited API calls
- Unlimited API calls for pro users

🔐 Authentication & Authorization
- Secure authentication with Clerk
- Role-based access control
- API rate limiting

📱 Modern UI/UX
- Clean and intuitive interface
- Responsive design
- Real-time loading states
- Toast notifications

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Database**: MySQL (PlanetScale)
- **ORM**: Prisma
- **Authentication**: Clerk
- **Payment**: Stripe
- **UI Components**: shadcn/ui
- **Form Handling**: react-hook-form, zod
- **State Management**: zustand
- **AI Providers**: OpenAI, Replicate

## Getting Started

### Prerequisites

- Node.js 18+
- MySQL database
- Clerk account
- Stripe account
- OpenAI API key
- Replicate API key

### Installation

1. Clone the repository
```bash
git clone git@github.com:Zeyu-Chen/AI-SaaS-Platform.git
cd AI-SaaS-Platform
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables
Create a .env file in the root directory and add the following variables:
```bash
# App
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Database
DATABASE_URL="mysql://user:password@host:3306/dbname"

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key

# OpenAI
OPENAI_API_KEY=your_openai_key

# Replicate
REPLICATE_API_TOKEN=your_replicate_token

# Stripe
STRIPE_API_KEY=your_stripe_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_publishable_key

# Other
NEXT_PUBLIC_APP_NAME="AI Platform"
```

4. Set up the database
```bash
npx prisma generate
npx prisma db push
```

5. Start the development server
```bash
npm run dev
# or
yarn dev
```

The app should now be running on http://localhost:3000

## Development

To run the development server:

```bash
npm run dev
# or
yarn dev
```

To build for production:

```bash
npm run build
# or
yarn build
```

To run in production mode:

```bash
npm start
# or
yarn start
```

## Database Schema

The application uses MySQL with Prisma ORM with the following main tables:

- UserApiLimit - Track API usage for free users
- UserSubscription - Manage premium subscriptions

## API Routes

- `/api/conversation` - OpenAI chat completion
- `/api/image` - OpenAI image generation  
- `/api/music` - Replicate music generation
- `/api/video` - Replicate video generation
- `/api/code` - OpenAI code generation
- `/api/stripe` - Stripe payment handling
- `/api/webhook` - Stripe webhooks