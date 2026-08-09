/**
 * Portfolio content is intentionally centralized here so future updates do not
 * require changes to the page components.
 */

export type CourseworkItem = {
  number: string;
  title: string;
  courseContext: string;
  category: string;
  description: string;
  process: string;
  learning: string;
  media:
    | { type: "youtube"; url: string }
    | { type: "image"; src: string; alt: string; width: number; height: number }
    | { type: "google-doc"; url: string };
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type ExperienceItem = {
  period: string;
  title: string;
  organization: string;
  summary: string;
  details: string[];
};

export type PersonalProject = {
  title: string;
  category: string;
  url: string;
  description: string;
  features: string[];
};

export const portfolio = {
  identity: {
    name: "Sam Lanier",
    role: "Biomedical Engineering Student",
    eyebrow: "Ohio State University • Class of 2028",
    tagline: "Engineering ideas into products that improve lives.",
    introduction:
      "I am majoring in Biomedical Engineering and minoring in Business at Ohio State University with the goal of entering the medical-device industry. My experience spans two years of biomedical engineering coursework, CAD and prototyping, customer service and rental operations, and personal web and app development. I am seeking a research opportunity during the 2026–27 academic year and a medical-device internship for Summer 2027.",
    credentials: [
      "Biomedical Engineering major",
      "Business minor",
      "3.42 cumulative GPA",
    ],
    photo: {
      src: "/sam-lanier-profile.jpg",
      alt: "Professional portrait of Sam Lanier",
      width: 3268,
      height: 4896,
    } as null | {
      src: string;
      alt: string;
      width: number;
      height: number;
    },
  },
  opportunity: {
    label: "Currently seeking",
    headline: "Research now. Medical-device experience next.",
    detail:
      "I am pursuing biomedical engineering research during the 2026–27 academic year while preparing for a Summer 2027 internship in the medical-device field.",
  },
  achievements: [
    {
      value: "3.42",
      title: "Cumulative GPA",
      detail:
        "A growing academic foundation built through biomedical engineering coursework at Ohio State.",
    },
    {
      value: "01",
      title: "Engineering Showcase selection",
      detail:
        "My team of four was selected to present a product we designed and developed into a working prototype.",
    },
    {
      value: "02",
      title: "Summer Catalyst selection",
      detail:
        "A business venture I am developing with two friends was selected for an Ohio State summer catalyst program.",
    },
  ],
  skillGroups: [
    {
      title: "Engineering",
      skills: ["CAD", "Prototyping", "Problem solving", "Equipment operation"],
    },
    {
      title: "Business & operations",
      skills: [
        "Customer service",
        "Rental operations",
        "Dispatch & logistics",
        "Quotes, contracts & billing",
        "SWOT analysis",
      ],
    },
    {
      title: "Digital",
      skills: ["Web development", "Application development"],
    },
    {
      title: "Professional strengths",
      skills: ["Quick learning", "Collaboration", "Clear communication"],
    },
  ] satisfies SkillGroup[],
  experienceIntro:
    "Leppo Rents is my family’s business, founded by my great-great-grandfather in 1945. It has grown to 14 stores and approximately 200 employees. Over four summers, my responsibilities progressed from utility work to road service and then a full-time rental specialist internship.",
  experience: [
    {
      period: "Age 13 • One summer",
      title: "Hands-on landscaping",
      organization: "Family landscaping work",
      summary:
        "I worked 20 hours a week with my great-grandfather, learning the fundamentals of plants, mulching, landscaping, and dependable physical work.",
      details: ["Operated a skid steer", "Operated an excavator"],
    },
    {
      period: "Three summers • 20–30 hours/week",
      title: "Utility & road service progression",
      organization: "Leppo Rents",
      summary:
        "I began with utility work and moved into the road service department as my knowledge of the company and its operations grew.",
      details: [
        "Maintained the store, stocked shelves, completed inventory, and received orders",
        "Answered service calls, built work orders, and filed warranties",
      ],
    },
    {
      period: "11 weeks • 45–50 hours/week",
      title: "Rental Specialist Intern",
      organization: "Leppo Rents • Cleveland",
      summary:
        "After training with the previous rental specialist, I took ownership of the primary customer and operational responsibilities for the rental desk.",
      details: [
        "Handled customer calls, equipment questions, availability, future reservations, and equipment sourcing",
        "Coordinated delivery and pickup dispatch, prepared quotes and contracts, and completed billing",
        "Delivered an end-of-internship SWOT analysis and presentation covering the company and Cleveland location",
      ],
    },
  ] satisfies ExperienceItem[],
  personalProjects: [
    {
      title: "Personal Budget Tracker",
      category: "Full-stack web application",
      url: "https://budgeting-app-rose.vercel.app/",
      description:
        "A personal money-management dashboard designed to make monthly finances easier to understand and act on.",
      features: ["Income & spending", "Savings goals", "Budgets & reimbursements"],
    },
    {
      title: "That’s Whatsupp",
      category: "Guided product-discovery application",
      url: "https://thats-whatsupp-frontend.vercel.app/",
      description:
        "A calm, safety-conscious supplement discovery experience that helps users narrow options without unnecessary jargon or pressure.",
      features: ["Guided search", "Conversational assistance", "Goal, ingredient & budget filters"],
    },
  ] satisfies PersonalProject[],
  goals: [
    {
      title: "What I bring",
      detail:
        "An engineering foundation, practical operations experience, customer awareness, and a business-minded approach to solving problems.",
    },
    {
      title: "Where I am growing",
      detail:
        "I plan to build deeper research experience and continue developing my skills in biomedical engineering, product development, and medical devices.",
    },
    {
      title: "What comes next",
      detail:
        "My next goals are a Summer 2027 medical-device internship and graduate study through Ohio State’s Medical Product Development BS/MS program.",
    },
  ],
  linkedInUrl: "https://www.linkedin.com/in/sam-lanier-7243792ba/",
  coursework: [
    {
      number: "01",
      title: "Product Panorama",
      courseContext: "Campaign 2 • Level 1",
      category: "Product & packaging analysis",
      description:
        "This assignment analyzes the Owala water bottle and its brand, with particular attention to the product’s packaging and distinguishing features.",
      process:
        "I selected Owala because of its recent popularity. Although a water bottle appears to be a basic product, I examined the thoughtful features that distinguish Owala from competing brands and how those differences are communicated.",
      learning:
        "I learned how different types of packaging help products stand out in stores, how products are classified, and how those classifications affect the way companies market them.",
      media: {
        type: "youtube",
        url: "https://www.youtube.com/watch?v=oCoCXcHkCk0",
      },
    },
    {
      number: "02",
      title: "Target Market Persona",
      courseContext: "Xander Games 3 • Canva",
      category: "Audience research",
      description:
        "This target-market persona was based on a survey about an in-car tire-inflation system that lets drivers fill their tires by pressing a button inside the vehicle.",
      process:
        "I translated survey responses about income, driving frequency, location, age, and gender into a defined audience. Higher-income respondents, frequent drivers, suburban residents, and people around age 40 showed the strongest interest. Interest was evenly split by gender, so I created one male and one female persona.",
      learning:
        "The project taught me how survey evidence, customer behavior, and willingness to pay can be combined into clear personas that guide product positioning and communication.",
      media: {
        type: "image",
        src: "/target-market-persona.png",
        alt: "Two 40-year-old target-market personas for an in-car tire-inflation system, based on survey findings",
        width: 1920,
        height: 1080,
      },
    },
    {
      number: "03",
      title: "Place & Price Analysis",
      courseContext: "Xander Games 4 • Written analysis",
      category: "Retail research",
      description:
        "For this assignment, I visited Marc’s, CVS, and Walgreens to compare the price and availability of Ben & Jerry’s The Tonight Dough.",
      process:
        "I found the selected flavor at Marc’s and Walgreens and found a different flavor at CVS. I then compared each retailer’s assortment, store format, purchasing model, and pricing.",
      learning:
        "I learned why prices vary by retailer. Grocery stores such as Marc’s can use broad selection, lower prices, and bulk purchasing to attract customers, while CVS and Walgreens charge more for the convenience and accessibility created by their pharmacy-focused locations.",
      media: {
        type: "google-doc",
        url: "https://docs.google.com/document/d/1GhZOfyXGgu-VEal1I_Xc6xPozdETAL238vAizx8E2Eo/edit?usp=sharing",
      },
    },
  ] satisfies CourseworkItem[],
};
