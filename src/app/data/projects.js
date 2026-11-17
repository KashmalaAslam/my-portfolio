/**
 * Single source of truth for the project cards on the home page AND the
 * case-study pages at /projects/[slug].
 *
 * To add a project: add an object below and (optionally) drop its images in /public/images.
 *
 * Fields
 * ------
 * slug         URL part, e.g. "campus-bite" -> /projects/campus-bite
 * title        Project name
 * category     Short label shown on the card
 * summary      One or two sentences shown at the top of the case study
 * cover        { src, width, height, alt } main image (card + case-study header)
 * role         What you personally did
 * tools        Array of tools/technologies
 * type         e.g. "Web app", "Mobile app concept"
 * overview     Array of paragraphs
 * highlights   Array of short bullet points (what was built / designed)
 * process      OPTIONAL array of { title, text } steps - section is hidden when empty
 * outcome      OPTIONAL array of paragraphs - section is hidden when empty
 * screenshots  OPTIONAL array of { src, width, height, alt, caption } - gallery is hidden when empty
 * links        Array of { label, href } (live site, Figma, GitHub ...)
 *
 * Only write things that are true. Recruiters check.
 */

export const projects = [
  {
    slug: "devboard",
    title: "DevBoard",
    category: "Frontend / Next.js / Tailwind",
    summary:
      "A project management dashboard that keeps tasks, deadlines and progress in one clear, simple workspace.",
    cover: {
      src: "/images/01.png",
      width: 1536,
      height: 905,
      alt: "DevBoard dashboard shown on a laptop and a phone",
    },
    role: "UI design & frontend development",
    type: "Web app",
    tools: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    overview: [
      "DevBoard is a responsive project management dashboard built with Next.js and React. The goal was a workspace where projects, tasks and deadlines are easy to scan without clutter.",
      "I worked on both the interface design and the frontend implementation, with a focus on clear information presentation and intuitive navigation.",
    ],
    highlights: [
      "Reusable components for the dashboard, navigation, tasks and calendar views",
      "Responsive layout that works on desktop and mobile",
      "Dashboard cards for productivity, completed tasks, time tracked and recent projects",
      "Marketing landing page with feature, workflow and sign-up sections",
    ],
    process: [], // TODO: add steps, e.g. { title: "Research", text: "..." }
    outcome: [], // TODO: add what you learned / results
    screenshots: [], // TODO: add real screenshots, e.g. { src: "/images/devboard/tasks.png", width: 1440, height: 900, alt: "...", caption: "Tasks view" }
    links: [
      { label: "View live site", href: "https://devboard-gamma-five.vercel.app/" },
    ],
  },
  {
    slug: "campus-bite",
    title: "Campus Bite",
    category: "UI design / Mobile",
    summary:
      "A mobile app concept for pre-ordering food from the campus cafeteria and picking it up without waiting in line.",
    cover: {
      src: "/images/02.png",
      width: 1536,
      height: 1024,
      alt: "Campus Bite onboarding and home screens on two phones",
    },
    role: "UI/UX design",
    type: "Mobile app concept",
    tools: ["Figma"],
    overview: [
      "Campus Bite is an early-stage mobile app concept for ordering food on campus. Students pre-order from their campus cafeteria and pick the food up when it is ready.",
      "I designed the initial screens covering the key entry and browsing experiences: onboarding, the home screen and food discovery.",
    ],
    highlights: [
      "Friendly onboarding screen that explains the idea in one line",
      "Home screen with search, category chips (All, Main, Snacks, Drinks, Desserts) and a 'Popular near you' list",
      "Simple bottom navigation: Home, Orders, Favorites and Profile",
      "Warm green and orange colour palette with a custom illustrated look",
    ],
    process: [], // TODO: who is it for, what problem it solves, how you decided on the flow
    outcome: [], // TODO: e.g. feedback from classmates, what you would improve
    screenshots: [], // TODO: export 3-5 key screens from Figma as PNG and list them here
    links: [
      {
        label: "View Figma file",
        href: "https://www.figma.com/design/tWOhrSuNtWSjm2xLfIzC3V/CampusBite?node-id=2105-2",
      },
    ],
  },
  {
    slug: "vizmart",
    title: "Vizmart",
    category: "Full Stack - Next.js, Flask (Python)",
    summary:
      "An AI-driven e-commerce website built as my final year project, exploring how AI features can improve online shopping.",
    cover: {
      src: "/images/03.png",
      width: 1536,
      height: 1024,
      alt: "Vizmart e-commerce website on desktop and mobile",
    },
    role: "UI/UX design & frontend development (contributor)",
    type: "Final year project",
    tools: ["Next.js", "Flask (Python)"], // TODO: add any other tools you used
    overview: [
      "Vizmart is an e-commerce website developed as my final year project at National Textile University. The project explored how AI-based functionality can be integrated into an online shopping experience.",
      "My contribution focused on the user interface and the frontend of the storefront.",
    ],
    highlights: [
      "Storefront home page with hero banner, categories and flash-sale section",
      "Product cards with ratings, discounts and badges",
      "Header designed with search, wishlist, cart and profile shortcuts",
      "Responsive layout designed for both desktop and mobile",
    ],
    process: [], // TODO: team size, your exact tasks, how the AI feature works
    outcome: [], // TODO: grade/feedback, what you learned
    screenshots: [], // TODO: real screenshots of the running site
    links: [], // TODO: add live link / GitHub if available
  },
  {
    slug: "al-khalid-academy",
    title: "Al-Khalid Academy",
    category: "Social Media & Visual Design",
    summary:
      "Social media posts, posters and short video content created to build the digital presence of a Quran academy.",
    cover: {
      src: "/images/04.png",
      width: 759,
      height: 1024,
      alt: "Collection of Al-Khalid Quran Academy social media designs",
    },
    role: "Visual design & video editing (freelance)",
    type: "Branding & social media",
    tools: ["Canva", "CapCut", "InShot"],
    overview: [
      "I worked with Al-Khalid Quran Academy to create a consistent, welcoming look for its social media channels.",
      "The work includes course announcement posts, a painting-competition poster, class promotion graphics and a short promotional video.",
    ],
    highlights: [
      "A cohesive set of branded posts in one colour palette and style",
      "Course and registration announcements designed for Instagram and WhatsApp",
      "Event poster with clear registration steps",
      "Short-form promotional video with simple motion and audio sync",
    ],
    process: [],
    outcome: [], // TODO: add real results only if you have them (followers, registrations, feedback)
    screenshots: [], // TODO: add individual posts / a video link
    links: [],
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}

/** Returns the previous and next project (wraps around) for the footer navigation. */
export function getAdjacentProjects(slug) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return { previous: null, next: null };

  return {
    previous: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  };
}
