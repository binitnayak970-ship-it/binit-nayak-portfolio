/**
 * Single source of truth for every word, link and number on the site.
 * Edit this file to change copy — the components only render what is here.
 *
 * Facts policy: everything below is either supplied by Binit or a plain
 * description of what he says he is learning. Nothing here should be invented
 * (no job titles, employers, clients, awards, metrics or testimonials).
 */

export type LearningItem = {
  /** Language, tool or concept. */
  name: string;
  /** Honest, non-numeric status label. */
  level: string;
  /** One line on where things actually stand. */
  note: string;
  /** Visual accent used for the rule mark next to the item. */
  accent: "ember" | "ochre" | "ink";
};

export type FaqItem = { question: string; answer: string };

export const siteConfig = {
  name: "Binit Nayak",
  alternateName: ["Binit Nayak Portfolio"],
  initials: "BN",
  /**
   * The canonical production URL. This must stay identical to the canonical
   * tags, sitemap, robots.txt, JSON-LD, Open Graph URLs and public/llms.txt.
   */
  url: "https://binit-nayak.vercel.app",
  locale: "en_NP",
  lang: "en",
  themeColor: "#F2EDE4",

  age: 17,
  jobTitle: "Student",
  email: "binitnayak970@gmail.com",
  location: {
    city: "Biratnagar",
    region: "Koshi",
    country: "Nepal",
    countryCode: "NP",
    display: "Biratnagar, Nepal",
  },
  school: {
    name: "Arniko College",
    city: "Biratnagar",
    display: "Arniko College, Biratnagar",
  },
  github: "https://github.com/binitnayak970-ship-it",
  githubHandle: "binitnayak970-ship-it",
  instagram: "https://instagram.com/9_.nayak._9",
  instagramHandle: "9_.nayak._9",

  seo: {
    title: "Binit Nayak — Student in Biratnagar, Nepal",
    titleTemplate: "%s | Binit Nayak",
    description:
      "Binit Nayak is a 17-year-old Class 12 student at Arniko College in Biratnagar, Nepal, learning HTML, CSS, JavaScript, React and SQL while building in public.",
    keywords: [
      "Binit Nayak",
      "Binit Nayak Biratnagar",
      "Binit Nayak portfolio",
      "Binit Nayak Arniko College",
      "student developer Nepal",
    ],
    ogImageAlt:
      "Binit Nayak — student in Biratnagar, Nepal, learning to build with code.",
  },

  /** Small uppercase labels reused across the layout. */
  motifs: {
    heroTop: ["Focus", "Believe", "Achieve"],
    heroBottom: ["Dream.", "Plan.", "Do.", "Repeat."],
    coordinates: "26.4525° N / 87.2718° E",
  },

  nav: [
    { label: "About", href: "#about" },
    { label: "Learning", href: "#learning" },
    { label: "Now", href: "#now" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export const hero = {
  microLabel: "Portfolio / 2026",
  name: "Binit Nayak",
  /** Answer-first: one plain factual sentence, no adjectives doing heavy lifting. */
  positioning:
    "17-year-old student in Biratnagar, Nepal, learning to build with code.",
  support:
    "Class 12 at Arniko College. I study the web in the open: HTML and CSS first, JavaScript and React next, with a database behind it eventually.",
  ctas: [
    { label: "What I'm learning", href: "#learning", variant: "solid" as const },
    { label: "Contact", href: "#contact", variant: "outline" as const },
  ],
  image: {
    src: "/portrait-binit-nayak.jpg",
    width: 860,
    height: 1075,
    alt: "Portrait of Binit Nayak, a 17-year-old student from Biratnagar, Nepal.",
    caption: "Biratnagar, Nepal",
  },
  scrollHint: "Scroll",
};

export const about = {
  index: "01",
  label: "About",
  heading: "A student, not a studio.",
  /** Answer-first sentence, then detail. */
  intro:
    "Binit Nayak is a 17-year-old student from Biratnagar, Nepal, currently in Class 12 at Arniko College.",
  paragraphs: [
    "I got into technology the ordinary way: I wanted to know how the things I use every day are actually made. That curiosity turned into HTML and CSS, then JavaScript, and now I am working through React and the basics of SQL so I can build something that stores real data instead of a static page.",
    "I am still learning, and I would rather say that plainly than dress it up. There is no client list and no years of experience here. What I do have is time, a laptop and the habit of building in public — writing down what I learn, shipping small things, and fixing them when they break.",
    "What I want to build next is a first complete project of my own: a small web app, designed and coded end to end, with a database behind it and a real person using it.",
  ],
  facts: [
    { label: "Age", value: "17" },
    { label: "Based in", value: "Biratnagar, Nepal" },
    { label: "Studying", value: "Class 12, Arniko College" },
    { label: "Focus", value: "Web development" },
  ],
};

export const learning = {
  index: "02",
  label: "What I'm learning",
  heading: "The honest list.",
  intro:
    "Binit Nayak is currently learning HTML and CSS, JavaScript, React and SQL, and is comfortable with the basics of markup and styling.",
  note:
    "No percentages attached. Each line describes where things actually stand, and this list changes as I do.",
  /** Confirmed by Binit — do not add anything he has not named. */
  items: [
    {
      name: "HTML & CSS",
      level: "Comfortable with the basics",
      note: "Semantic markup, layout and responsive styling — the part I reach for without thinking.",
      accent: "ochre",
    },
    {
      name: "JavaScript",
      level: "Learning",
      note: "Working through the fundamentals: functions, arrays, objects and the DOM.",
      accent: "ember",
    },
    {
      name: "React",
      level: "Learning",
      note: "Components, props and state. Building small screens and breaking them on purpose.",
      accent: "ember",
    },
    {
      name: "SQL & databases",
      level: "Learning",
      note: "Tables, queries and how data is actually stored — my first steps on the backend side.",
      accent: "ink",
    },
  ] satisfies LearningItem[],
  /** Concepts and habits that are not languages — kept separate, no proficiency claim. */
  also: [
    "Learning in public",
    "Reading documentation",
    "Git & version control",
  ],
};

export const now = {
  index: "03",
  label: "Now",
  heading: "This month.",
  intro:
    "This month Binit Nayak is finishing Class 12 at Arniko College while practising JavaScript and React in his own time.",
  updated: "November 2026",
  columns: [
    {
      title: "Studying",
      items: [
        "Class 12 at Arniko College, Biratnagar.",
        "JavaScript fundamentals, a little every day.",
        "React components and state.",
      ],
    },
    {
      title: "Working towards",
      items: [
        "A first React project that is genuinely mine.",
        "A small full-stack app with a real database behind it.",
        "Publishing what I learn as I learn it.",
      ],
    },
  ],
  closing: "If you want to know what I'm stuck on right now, just ask.",
};

export const faq = {
  index: "04",
  label: "FAQ",
  heading: "Plain answers.",
  intro:
    "Short, factual answers about Binit Nayak, written to be quoted whole.",
  items: [
    {
      question: "Who is Binit Nayak?",
      answer:
        "Binit Nayak is a 17-year-old student from Biratnagar, Nepal. He is in Class 12 at Arniko College and is learning web development by building projects of his own.",
    },
    {
      question: "What does Binit Nayak study?",
      answer:
        "Binit Nayak is in Class 12 at Arniko College in Biratnagar, Nepal. Outside school he studies web development: HTML and CSS, which he is comfortable with, and JavaScript, React and SQL, which he is currently learning.",
    },
    {
      question: "Where is Binit Nayak from?",
      answer:
        "Binit Nayak is from Biratnagar, a city in Koshi Province in eastern Nepal, and he lives and studies there.",
    },
    {
      question: "What is Binit Nayak learning?",
      answer:
        "Binit Nayak is learning JavaScript, React and SQL, and is already comfortable with the basics of HTML and CSS. His goal is to build a complete web application of his own, front end to database.",
    },
  ] satisfies FaqItem[],
};

export const contact = {
  index: "05",
  label: "Contact",
  heading: "Say hello.",
  intro:
    "Binit Nayak reads every message sent through this form. Questions about what he is learning, feedback on the site, or a pointer to something worth reading are all welcome.",
  directLabel: "Or email directly",
  form: {
    fields: {
      name: { label: "Your name", placeholder: "Ada Lovelace" },
      email: { label: "Email", placeholder: "you@example.com" },
      message: {
        label: "Message",
        placeholder: "What would you like to say?",
        hint: "Between 10 and 2000 characters.",
      },
    },
    submit: "Send message",
    submitting: "Sending…",
    success: {
      title: "Message sent.",
      body: "Thanks — your message is saved and I'll read it soon.",
    },
    errors: {
      generic: "Something went wrong and the message was not saved. Please try again, or email me directly.",
      rateLimited: "That's a few messages in a short time. Please wait a minute and try again.",
      network: "Could not reach the server. Check your connection and try again.",
    },
    validation: {
      name: "Please enter your name (2–80 characters).",
      email: "Please enter a valid email address.",
      message: "Please write a message between 10 and 2000 characters.",
    },
    privacy:
      "Your name, email and message are stored in a Supabase table so I can reply. Nothing else is collected and nothing is shared.",
  },
  socials: [
    { label: "Email", value: "binitnayak970@gmail.com" },
    { label: "GitHub", value: "@binitnayak970-ship-it" },
    { label: "Instagram", value: "@9_.nayak._9" },
  ],
};

export const footer = {
  credit: "Built by Binit Nayak · Biratnagar, Nepal",
  note: "Next.js, Tailwind CSS and Supabase.",
  top: "Back to top",
};

/** Used by the site's JSON-LD and by public/llms.txt for a single consistent entity. */
export const knowsAbout = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "SQL",
  "Web development",
] as const;
