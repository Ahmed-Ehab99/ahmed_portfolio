export const servicesData = [
  {
    title: "Frontend Development",
    description:
      "Your digital presence deserves cutting-edge performance and stunning design. I build lightning-fast Next.js applications with server-side rendering, optimized performance, and pixel-perfect responsive interfaces that convert visitors into customers.",
    items: [
      {
        title: "Next.js Excellence",
        description: "(App Router, SSR/SSG, API Routes, Server Components)",
      },
      {
        title: "React Mastery",
        description:
          "(TypeScript, Custom Hooks, State Management, Performance)",
      },
      {
        title: "Performance Optimization",
        description: "(Core Web Vitals, Image Optimization, Bundle Analysis)",
      },
    ],
  },
  {
    title: "UI/UX Design & Development",
    description:
      "Beautiful interfaces that actually work. I transform complex user journeys into intuitive experiences, combining modern design principles with accessibility standards to create interfaces that users love and businesses profit from.",
    items: [
      {
        title: "Design Systems",
        description: "(Component Libraries, Figma to Code, Brand Consistency)",
      },
      {
        title: "User Experience",
        description:
          "(Wireframing, Prototyping, User Testing, Conversion Optimization)",
      },
      {
        title: "Responsive Design",
        description: "(Mobile-First, Cross-Browser, Accessibility Compliance)",
      },
    ],
  },
  {
    title: "eCommerce Development",
    description:
      "From product browsing to secure checkout, I build lightning-fast eCommerce experiences with clean UI, optimized API workflows, and reliable cart, auth, and order systems.",
    items: [
      {
        title: "Custom Storefronts",
        description: "(Next.js SSR/ISR, Highly-optimized UI, i18n support)",
      },
      {
        title: "Cart & Checkout Systems",
        description: "(React Query, Debounced Actions, Secure State Handling)",
      },
      {
        title: "Admin & Dashboard Tools",
        description: "(Inventory, Orders, Roles, Analytics Panels)",
      },
    ],
  },
  {
    title: "Modern Web Architecture",
    description:
      "Scalable frontend architectures that grow with your business. I implement cutting-edge patterns like server components, micro-frontends, and JAMstack to deliver blazing-fast user experiences with maintainable codebases.",
    items: [
      {
        title: "Server Components",
        description: "(React Server Components, Streaming, Data Fetching)",
      },
      {
        title: "State Management",
        description: "(Zustand, Redux Toolkit, React Query, Context API)",
      },
      {
        title: "Build Optimization",
        description: "(Webpack, Vite, Code Splitting, Tree Shaking)",
      },
    ],
  },
  {
    title: "Performance & Code Optimization",
    description:
      "I help existing websites achieve top Lighthouse scores and eliminate bottlenecks through code refactoring, image optimization, bundle analysis, and UX improvements.",
    items: [
      {
        title: "Frontend Optimization",
        description: "(Lazy Loading, RSC, Code Splitting, Bundle Reduction)",
      },
      {
        title: "Performance Auditing",
        description: "(Lighthouse, Web Vitals, Real-world Metrics)",
      },
      {
        title: "Accessibility & SEO",
        description: "(Semantic Structure, Metadata, Search Optimization)",
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "HEMEX Landing Page",
    description:
      "Built a modern, responsive landing page for company using React.js, Shadcn, React Hook Form, Tanstack Query, ZOD, Zustand, TypeScript and some help from react bits. Implemented features like videos carousel, login and sign up logic, whatsapp contact, alot of animations. Utilized Tailwind CSS, ShadCN, and Framer Motion for a polished UI/UX. Integrated React Hook Form and Zod for robust form validation, and TanStack Query for efficient data fetching and caching.",
    href: "https://hemex.ai/",
    image: "/assets/projects/HEMEX.webp",
    bgImage: "",
    frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "Typescript" },
      { id: 3, name: "Tanstack Query" },
      { id: 4, name: "React-Hook-Form" },
      { id: 5, name: "Zod" },
      { id: 6, name: "Tailwind CSS" },
      { id: 7, name: "Framer Motion" },
    ],
  },
  {
    id: 2,
    name: "Imaginify SAAS App",
    description:
      "An AI image SaaS platform that excels in image processing capabilities, integrates a secure payment infrastructure, offers advanced image search functionalities, and supports multiple AI features, including image restoration, recoloring, object removal, generative filling, and background removal.",
    href: "https://imaginify-six-gray.vercel.app/",
    image: "/assets/projects/imaginify.webp",
    bgImage: "",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Typescript" },
      { id: 3, name: "MongoDb" },
      { id: 4, name: "Stripe API" },
      { id: 5, name: "Cloudinary" },
      { id: 6, name: "Tailwind CSS" },
    ],
  },
  {
    id: 3,
    name: "NextGenShop",
    description:
      "A Modern E-Commerce Application with many features like dark-mode, logIn, signUp, LogOut, search input for search about product, filtring in shop page and cart sheet with optimistic updates",
    href: "https://next-gen-shop.vercel.app/",
    image: "/assets/projects/NextGenShop.webp",
    bgImage: "",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Typescript" },
      { id: 3, name: "React-Hook-Form" },
      { id: 4, name: "T3 ENV" },
      { id: 5, name: "Tanstack Query" },
      { id: 6, name: "Tailwind CSS" },
    ],
  },
  {
    id: 4,
    name: "Shoper",
    description:
      "A complete e-commerce application. including smoth UI, authentication using clerk, search input for search about products, selecting category, basket page, orders page and many more features. some technologies used: zustand state management to hande basket operations, sanity CMS backend and stripe for payment.",
    href: "https://shoper-ecommerce.vercel.app/",
    image: "/assets/projects/shoper.webp",
    bgImage: "",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Sanity CMS" },
      { id: 3, name: "Clerk" },
      { id: 4, name: "Zustand" },
      { id: 5, name: "Stripe API" },
      { id: 6, name: "Framer Motion" },
      { id: 7, name: "Tailwind CSS" },
    ],
  },
  {
    id: 5,
    name: "Movie App",
    description:
      "A simple movie application allow user to show top 5 movies that other users search about them, and also user can search for movies and show details about them. with some help from react-use library to delay fetching movies until user stop typing (useDebounce). finally i use appwrite as backend to store count of searching of movies to display top movies section.",
    href: "https://movie-app-533o.vercel.app/",
    image: "/assets/projects/movie_app.webp",
    bgImage: "",
    frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "AppWrite CMS" },
      { id: 3, name: "Tailwind CSS" },
      { id: 4, name: "React Router Dom" },
    ],
  },
  {
    id: 6,
    name: "Awwwards",
    description:
      "Amazing Gaming Landing with an amazing animation and modern user interface including some videos, audios and clip paths with some helps from react-icons and uiverse and react-use.",
    href: "https://awwwards-silk.vercel.app/",
    image: "/assets/projects/awwwards.webp",
    bgImage: "",
    frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "GSAP" },
      { id: 3, name: "Tailwind CSS" },
      { id: 4, name: "React Icons" },
    ],
  },
  {
    id: 7,
    name: "Iphone Store",
    description:
      "Landing Page Showing IPhone, its Contents, and more Effects and Videos. You Can See the IPhone from All Sides Through a 3D Model.",
    href: "https://iphone-store-teal.vercel.app/",
    image: "/assets/projects/iphone.webp",
    bgImage: "",
    frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "GSAP" },
      { id: 3, name: "Tailwind CSS" },
      { id: 4, name: "React Three" },
    ],
  },
  {
    id: 8,
    name: "BrainWave",
    description: "A Modern AI Landing Page with an Amazing Design and Pricing.",
    href: "https://brainwave-omega-gray.vercel.app/",
    image: "/assets/projects/brainwave.webp",
    bgImage: "",
    frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "React Parallax" },
      { id: 3, name: "Tailwind CSS" },
      { id: 4, name: "React Router Dom" },
    ],
  },
];

export const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", to: "home" },
  { label: "Services", ariaLabel: "View my services", to: "services" },
  { label: "About", ariaLabel: "Learn about me", to: "about" },
  { label: "Work", ariaLabel: "Show my work", to: "work" },
  { label: "Contact", ariaLabel: "Get in touch", to: "contact" },
];

export const socialItems = [
  { label: "LinkedIn", link: "https://www.linkedin.com/in/a7med-eha6/" },
  { label: "GitHub", link: "https://github.com/Ahmed-Ehab99" },
];
