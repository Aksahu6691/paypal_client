## 🌍 Project Name: Online Service Centre

## Project Description:

This project is an Online Service Centre Website that allows users to access various government and digital services online. It is designed for a Common Service Centre (CSC) ID holder to provide services like Aadhar & PAN assistance, bill payments, and more.

**Goals of the Project**

- Provide an easy-to-use online portal for customers.
- Offer multiple government and financial services under one roof.
- Allow users to contact the centre for assistance & support.

## 📌 Features & Functionalities:

**🟢 1. Homepage (Home.tsx)**

- Displays Welcome Section, Popular Services, and Testimonials.
- Introduces users to the services offered.

**🟢 2. Services Page (Services.tsx)**

- Lists all available government & digital services.
- Users can browse and choose a service they need.

**🟢 4. About Page (About.tsx)**

- Describes the mission, values, and purpose of the service centre.
- Builds trust with users by explaining the legitimacy of the services.

**🟢 5. Contact Page (Contact.tsx)**

- Contains a Contact Form (ContactForm.tsx) for customer inquiries.
- Users can ask questions, request services, or get support.

## 📌 How We Built This Project?

**🔹 1. Routing Setup (routes.tsx)**

- We use React Router to manage navigation.
- There are two types of routes:
  - Public Routes (Login Page)
  - Authenticated Routes (Home, Services, About, Contact) (it is just to development purpose)

**🔹 2. Page Sections (pageSections/)**

- Instead of repeating code, we divided reusable sections:
  - WelcomeSection.tsx → Introduction for Home Page
  - PopularServices.tsx → Highlights important services
  - TestimonialSection.tsx → Shows customer feedback
  - FooterSection.tsx → Common footer across pages

**🔹 3. UI Components (components/)**

- Navbar (nav/) → Handles navigation across the site.
- Common Components (common/) → Reusable UI elements (buttons, cards, inputs, etc).

**🔹 4. Service Listing (Services.tsx)**

- Each service is displayed using ServiceCard.tsx, a reusable card component.
- Icons and animations improve the UI experience.

**🔹 5. Contact Form (ContactForm.tsx)**

- Users can submit their queries through the form.
- Form fields include Name, Email, Message with validation.

## 📌 What We Plan to Do in This Project?

**✅ Features Implemented So Far:**

- ✔ Routing System with Authentication
- ✔ Home Page with Services & Testimonials
- ✔ Contact Form for User Queries
- ✔ Reusable Components for UI Consistency

**🚀 Future Improvements:**

- 🔹 Service Booking Feature → Allow users to book services online.
- 🔹 Admin Dashboard → Let the owner manage requests & responses.
- 🔹 Payment Integration → Support UPI, Debit Card, and Net Banking.
- 🔹 Multi-Language Support → Make the site accessible to a wider audience.

## 💡 Summary

This Online Service Centre Website simplifies government and digital services for users. It ensures a smooth user experience with a structured project setup using React.js, TypeScript, Next UI, and Tailwind CSS.

## 🌐 Project Flow Overview

- Routing System (routes.tsx) – Manages page navigation
- Page Structure (pages/) – Contains different screens like Home, Services, About, and Contact
- Components (components/) – Contains reusable UI components
- Page Sections (pageSections/) – Sections used in multiple pages
- Configurations (config/) – Stores global constants and settings

## Technologies Used

- [Vite](https://vitejs.dev/guide/)
- [HeroUI](https://heroui.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org)
- [Framer Motion](https://www.framer.com/motion)

## How to Use

To clone the project, run the following command:

```bash
git clone https://github.com/Aksahu6691/online_center.git
```

### Install dependencies

You can use one of them `npm`, `yarn`, `pnpm`, `bun`, Example using `npm`:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Setup pnpm (optional)

If you are using `pnpm`, you need to add the following code to your `.npmrc` file:

```bash
public-hoist-pattern[]=*@heroui/*
```

After modifying the `.npmrc` file, you need to run `pnpm install` again to ensure that the dependencies are installed correctly.

## License

Licensed under the [MIT license](https://github.com/frontio-ai/vite-template/blob/main/LICENSE).
