
# TradeU 🎓

### Trade Skills. Build Experience. Grow Together.

**A student-focused skill exchange platform that connects people through knowledge, collaboration, and opportunity.**

TradeU is a full-stack web application designed to help students exchange skills and services without relying entirely on traditional monetary transactions.

The platform allows users to discover skills, create service listings, connect with other students, and coordinate exchanges while building practical experience and professional credibility.

By combining a skill-based marketplace with user profiles, reputation systems, and a trade-credit concept, TradeU aims to make learning and collaboration more accessible.

**Status:** Active Development — MVP

---

## Overview

Students often have valuable skills but limited financial resources to access services, tutoring, or professional assistance.

A student who understands programming might need help with graphic design. A photography student might need assistance preparing a resume. Someone experienced in fitness might benefit from language tutoring.

TradeU explores a different approach to exchanging value.

Rather than requiring every interaction to involve money, the platform is designed around students exchanging their knowledge and abilities.

The goal is to create an environment where students can:

- Share their knowledge and expertise
- Discover skills offered by other students
- Connect with potential collaborators
- Exchange services and experience
- Build portfolios through completed work
- Develop professional reputations
- Participate in a student-centered marketplace

TradeU is being developed as a scalable web application with a modular architecture and a planned Supabase-backed data layer.

---

## Key Features

### Skill Marketplace

Students can explore a marketplace organized around different skills and services.

The application includes interfaces for browsing listings, discovering opportunities, and finding relevant services.

Planned marketplace categories include:

- Programming and technology
- Graphic design
- Tutoring and academics
- Career development
- Fitness and wellness
- Photography and media
- Music and creative services

### Skill Listings

The application includes interactive listing creation forms.

Users can describe the skills or services they want to offer, helping potential trade partners understand the available opportunities.

The listing experience incorporates form validation and structured data handling.

### Trade Requests

TradeU includes interfaces for initiating exchanges between users.

The exchange workflow is designed to support a structured process in which students can propose and coordinate skill trades.

Future development will connect these interactions to persistent records and expanded trade-management functionality.

### Student Profiles

The application includes profile-related interfaces designed to represent users within the marketplace.

The broader product vision includes:

- Personal skill information
- Educational background
- Offered services
- Completed exchanges
- Portfolio accomplishments
- Reputation and credibility indicators

These features are being developed progressively as the application moves toward a connected backend.

### User Onboarding

Interactive onboarding forms introduce users to the TradeU experience.

The onboarding flow is designed to collect relevant profile information and help students prepare to participate in the marketplace.

### Messaging and Communication

The application contains messaging interfaces intended to support communication between students.

These interfaces establish the foundation for coordinating potential exchanges.

Persistent, user-to-user messaging remains part of the backend integration roadmap.

### Administrative Tools

TradeU includes an administrative preview with a moderation queue interface.

This establishes an initial foundation for future marketplace safety, content review, and administrative workflows.

---

## Technology Stack

| Technology | Purpose |
|---|---|
| Next.js 16 | Full-stack application framework |
| React 19 | Component-based user interfaces |
| TypeScript | Type-safe application development |
| Tailwind CSS 4 | Responsive styling and design |
| Supabase | Planned authentication, database, and storage |
| PostgreSQL | Relational data persistence |
| Zod | Schema validation |
| React Hook Form | Interactive forms and input handling |
| Vitest | Unit testing |
| Playwright | End-to-end browser testing |
| ESLint | Static code analysis |
| Vercel | Intended deployment platform |

### Frontend

TradeU uses React and Next.js App Router to organize the application into reusable components and distinct navigation areas.

TypeScript supports type safety throughout the codebase.

Tailwind CSS provides a consistent styling foundation for responsive interfaces.

### Backend and Data

The repository includes a Supabase integration foundation, PostgreSQL migration scripts, and supporting application utilities.

The architecture is intended to support:

- User authentication
- Persistent student profiles
- Skill listings
- Trade requests
- Marketplace relationships
- Storage and administrative workflows

The current application also contains typed mock data structures for developing and testing the user experience before full backend integration.

### Validation and Security

Zod and React Hook Form provide structured form handling and input validation.

The repository also contains security-related utilities and guard logic intended to support safe marketplace interactions.

The database migration plan includes Row Level Security policies for controlling access to application data.

---

## Application Architecture

TradeU uses a modular structure that separates application routes, interface components, domain models, validation, and data integration.

### Project Structure

```text
TradeU/
├── app/
│   ├── (admin)/
│   ├── (app)/
│   │   ├── browse/
│   │   ├── dashboard/
│   │   ├── listings/
│   │   ├── messages/
│   │   ├── onboarding/
│   │   ├── profile/
│   │   └── trades/
│   ├── (public)/
│   │   ├── how-it-works/
│   │   ├── login/
│   │   ├── safety/
│   │   ├── signup/
│   │   └── waitlist/
│   ├── auth/
│   ├── globals.css
│   └── layout.tsx
│
├── components/
│   ├── providers/
│   └── tradeu/
│
├── hooks/
│
├── lib/
│   ├── constants/
│   ├── mock/
│   ├── security/
│   ├── supabase/
│   ├── types/
│   └── validation/
│
├── public/
├── scripts/
├── supabase/
│   └── migrations/
├── tests/
│   ├── e2e/
│   ├── trade-guards.test.ts
│   └── validation.test.ts
│
├── package.json
├── playwright.config.ts
├── vitest.config.ts
└── tsconfig.json
```

### Architectural Approach

**Separation of Concerns**

Application routes, reusable components, validation, security, and data access are organized into distinct areas.

**Type Safety**

TypeScript interfaces and domain models provide structure for application data and reduce inconsistencies between components.

**Data Layer Abstraction**

Typed mock data allows frontend experiences to be developed independently while the persistent Supabase integration is completed.

**Security Considerations**

Validation utilities, guard functions, and planned database access policies establish a foundation for protecting user and marketplace operations.

**Testing**

Unit tests and end-to-end testing infrastructure provide mechanisms for checking application behavior and preventing regressions.

---

## Getting Started

### Prerequisites

Before running TradeU, install:

- Node.js
- npm
- Git

A Supabase project is required to configure the persistent backend integration.

### 1. Clone the Repository

```bash
git clone https://github.com/Michael-Blake-Donaldson/TradeU.git
cd TradeU
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Copy the environment example:

```bash
cp .env.example .env.local
```

Open `.env.local` and configure the necessary environment variables.

For Supabase integration, provide your project connection and authentication credentials according to the environment template.

Never commit personal credentials or secret keys to the repository.

### 4. Start the Development Server

```bash
npm run dev
```

Open:

http://localhost:3000

The development application should now be available locally.

### 5. Create a Production Build

```bash
npm run build
```

Run the production server:

```bash
npm run start
```

---

## Database Setup

TradeU includes SQL migration scripts for establishing the planned PostgreSQL database structure.

### Supabase Configuration

1. Create a Supabase project.
2. Configure the required environment variables.
3. Supply the PostgreSQL connection string.
4. Apply the database migrations.
5. Seed the initial reference data.
6. Verify database access policies.

### Run Database Migrations

```bash
npm run db:migrate
```

### Seed Reference Data

```bash
npm run db:seed
```

Migration files are located in:

```text
supabase/migrations/
```

The existing migration plan includes initial application tables and reference data.

**Note:** Completing the database configuration does not automatically replace every mock-data integration. Some application workflows still require wiring to Supabase.

---

## Testing and Quality Assurance

TradeU includes testing tools intended to improve reliability and maintainability.

### Unit Tests

Vitest is used for unit testing.

The repository includes tests for validation and trade-related guard behavior.

Run tests using:

```bash
npm run test
```

### Watch Mode

```bash
npm run test:watch
```

### End-to-End Testing

Playwright provides browser-based testing infrastructure.

Run end-to-end tests using:

```bash
npm run test:e2e
```

Playwright browser dependencies may need to be installed before running the tests.

### Type Checking

```bash
npm run typecheck
```

### Linting

```bash
npm run lint
```

These commands can be used during development to detect errors, validate application behavior, and identify code-quality issues.

---

## Development Status

**Current Phase: MVP Development**

### Implemented Foundation

- Next.js application structure
- Public marketing and informational pages
- Responsive interface components
- Dashboard and marketplace navigation
- Student onboarding interfaces
- Interactive skill listing forms
- Trade request forms
- Profile and messaging page structures
- Administrative moderation preview
- Typed mock application data
- Form validation and security guard utilities
- Supabase integration scaffolding
- PostgreSQL migration scripts
- Unit and end-to-end testing infrastructure

### In Progress / Planned

- Complete Supabase authentication integration
- Connect mock data to persistent database records
- Persist student profiles and skill listings
- Implement full trade lifecycle management
- Connect messaging interfaces to real conversations
- Develop trade-credit accounting
- Expand reputation and review functionality
- Complete administrative moderation workflows
- Strengthen authorization and database access controls
- Expand automated test coverage
- Validate deployment readiness

---

## Future Development

### Trade Credit System

A planned credit system will allow students to exchange value through completed skill contributions.

The goal is to support flexible transactions beyond direct one-to-one exchanges.

### Reputation and Portfolio Building

Future functionality will allow users to establish credibility through verified participation and completed work.

This may include exchange history, reviews, achievements, and portfolio evidence.

### Expanded Student Communities

TradeU is intended to support students across different institutions and professional interests.

Future improvements may include school-based discovery and additional community features.

### Marketplace Safety

Expanded moderation, reporting, and verification tools will help establish a trustworthy environment for students.

### Performance and Scalability

Additional work will focus on optimizing database access, improving the application architecture, and preparing for increased user activity.

---

## Engineering Goals

TradeU serves as a practical exploration of full-stack application design and product development.

The project focuses on several engineering challenges:

### Full-Stack Application Architecture

Designing a modular application that separates frontend interfaces, business logic, validation, and persistent data access.

### Relational Data Modeling

Planning database relationships for users, skills, listings, exchanges, and marketplace activity.

### Authentication and Authorization

Establishing secure authentication flows and appropriate access restrictions for user-specific and administrative functionality.

### Input Validation

Using structured schemas to validate information and improve consistency across application forms.

### Testable Software Design

Developing isolated validation and guard logic that can be tested independently of the user interface.

### Product-Oriented Engineering

Translating a real-world problem into a software product with clearly defined users, workflows, and future development requirements.

---

## Deployment

The application is designed for a Vercel deployment workflow.

A production deployment will require:

- A successful application build
- Configured environment variables
- A connected Supabase project
- Applied database migrations
- Validated authentication and authorization
- Successful testing of critical user workflows

The platform should be treated as a development-stage application until these requirements are verified.

---

## Author

**Michael Blake Donaldson**

Computer Science Student  
Software Engineering Concentration

**GitHub:**  
https://github.com/Michael-Blake-Donaldson

**Portfolio:**  
https://michael-blake-donaldson.github.io/MichaelDonaldson_Portfolio/

---

## License

No open-source license has been specified for this repository.

Unless a license is added, the project remains under standard copyright protections.

---

**TradeU — Your skills have value. Trade them.**
