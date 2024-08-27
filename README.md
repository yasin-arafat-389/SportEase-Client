# SportEase

## Introduction

This project is the frontend part of an application, providing users with the ability to browse sports facility, book a facility, and proceed to checkout.

## Project Description

SportEase is a fully integrated web application designed to streamline the process of browsing, booking, and managing sports facilities. The platform features a user-friendly interface with a responsive design, enabling users to easily search for facilities, check availability, and make bookings. It includes a comprehensive user dashboard for managing bookings and an admin dashboard for facility and user management. The platform is connected to a robust backend that handles secure payments, user authentication, and data management, ensuring a seamless and intuitive user experience.

## Features

- Separate dashboards for users to manage bookings and for admins to manage facilities and bookings.
- Easily search for and filter facilities by name, location, and price.
- Interactive interface for checking availability and booking facilities, with secure payment integration.
- Fully responsive UI/UX design for optimal use on mobile, tablet, and desktop devices.
- Custom 404 and unauthorized access pages with navigation options.
- Slider showcasing user feedback to enhance credibility.
- Enhances navigation by allowing users to quickly return to the top of the page.

## Technology Stack

- React
- TypeScript
- Redux Toolkit
- React Router
- Tailwind CSS

## Installation Guideline

### Prerequisites

- Node.js (version 14 or above)
- npm (version 6 or above) or yarn (version 1.22 or above)

### Installation Steps

1. **Clone the repository**

   ```sh
   https://github.com/yasin-arafat-389/SportEase-Client
   ```

   2. **Navigate to the project directory**

   ```sh
   cd SportEase-Client

   ```

   3. **Install the dependencies**

   ```sh
   npm install
   ```

### Configuration

1.  **Replace base URL according to your local machine**

```sh
const baseQuery = fetchBaseQuery({
baseUrl: "http://localhost:5000/api",
});
```

## Usage

1.  **Start the development server**

```sh
npm run dev

```
