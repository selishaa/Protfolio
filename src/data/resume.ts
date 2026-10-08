export type SocialLink = {
  name: string;
  href: string;
  icon: "github" | "linkedin" | "email" | "website";
};

export type ExperienceItem = {
  company: string;
  title: string;
  location?: string;
  start: string;
  end: string;
  description: string[];
};

export type EducationItem = {
  school: string;
  degree: string;
  start: string;
  end: string;
  details?: string[];
};

export type ProjectItem = {
  name: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  accent: "rose" | "peach" | "mint";
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type TravelSpot = {
  city: string;
  note: string;
  image: string;
};

export type NowItem = {
  label: string;
  detail: string;
};

export type Resume = {
  name: string;
  firstName: string;
  tagline: string;
  about: string;
  location?: string;
  resumeUrl: string;
  vibeunoProfileUrl: string;
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillGroup[];
  projects: ProjectItem[];
  socialLinks: SocialLink[];
  travelSpots: TravelSpot[];
  now: NowItem[];
  interests: string[];
};

export const resume: Resume = {
  name: "Selisha Thapa",
  firstName: "Selisha",
  tagline:
    "Software engineer, travel lover, and builder of Vibeuno — I turn curious ideas into bright, friendly products.",
  about:
    "Hi, I'm Selisha — a computer science grad who loves building things people actually enjoy using. When I'm not shipping AI tools or teaching Python, I'm usually thinking about the next place to explore (which is exactly why I made Vibeuno).",
  location: "United States",
  resumeUrl: "/Selisha_Resume.pdf",
  vibeunoProfileUrl: "https://www.vibeuno.com/profile/cm5rfdoqj0000k103y8ii583h",
  experience: [
    {
      company: "Cincinnati Sports Club",
      title: "Software Support & COF",
      start: "Aug 2024",
      end: "Present",
      description: [
        "Built an internal AI assistant and monitoring dashboards that cut quality defects by 30%.",
        "Shipped Python APIs and Docker/Kubernetes pipelines for smoother deployments.",
      ],
    },
    {
      company: "Northern Kentucky University",
      title: "Research Assistant",
      start: "May 2023",
      end: "Aug 2024",
      description: [
        "Fine-tuned Llama 3 for edge computing and reduced server workload by 60%.",
      ],
    },
    {
      company: "Namaste Courier and Cargo",
      title: "Software Engineer",
      start: "Aug 2021",
      end: "Sept 2023",
      description: [
        "Built an Angular customer portal and tracking features that cut delivery errors by 20%.",
      ],
    },
    {
      company: "Northern Kentucky University",
      title: "Teaching Assistant — Python",
      start: "Jan 2022",
      end: "May 2022",
      description: [
        "Helped 28 students learn Python with patience, clarity, and good debugging vibes.",
      ],
    },
  ],
  education: [
    {
      school: "Northern Kentucky University",
      degree: "B.S. in Computer Science & Mathematics",
      start: "2021",
      end: "Dec 2025",
      details: ["GPA 3.7 — and still endlessly curious."],
    },
  ],
  skills: [
    {
      category: "I write in",
      items: [
        "TypeScript",
        "JavaScript",
        "Python",
        "Java",
        "SQL",
        "C++",
        "Ruby",
      ],
    },
    {
      category: "I build with",
      items: [
        "React",
        "Next.js",
        "Node.js",
        "Angular",
        "Flask",
        "PostgreSQL",
        "Docker",
        "GCP",
      ],
    },
  ],
  projects: [
    {
      name: "Vibeuno",
      description:
        "A travel playground where locals and wanderers share cozy spots, wishlists, and city vibes.",
      tech: ["Next.js", "React", "Redux", "Node.js", "Stripe", "AWS S3"],
      liveUrl: "https://vibeuno.com",
      githubUrl: "https://github.com/selishaa",
      accent: "rose",
    },
    {
      name: "Find-me",
      description:
        "A sweet little matchmaker for students and professors who want to collaborate.",
      tech: ["React", "TypeScript", "Express", "Firebase", "Postgres"],
      githubUrl: "https://github.com/selishaa",
      accent: "peach",
    },
    {
      name: "Price Predictor",
      description:
        "An ML-powered home price helper — type in rooms and area, get a friendly estimate.",
      tech: ["Python", "Scikit-learn", "Flask", "Pandas"],
      githubUrl: "https://github.com/selishaa",
      accent: "mint",
    },
  ],
  socialLinks: [
    {
      name: "GitHub",
      href: "https://github.com/selishaa",
      icon: "github",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/selisha-thapa/",
      icon: "linkedin",
    },
    {
      name: "Email",
      href: "mailto:selishathapa5@gmail.com",
      icon: "email",
    },
  ],
  travelSpots: [
    {
      city: "Chicago",
      note: "Riverwalk nights and skyline energy",
      image: "/travel/chicago.jpg",
    },
    {
      city: "Zion",
      note: "Canyon light that feels unreal",
      image: "/travel/zion-national-park.jpg",
    },
    {
      city: "White Sands",
      note: "Soft dunes, endless sky",
      image: "/travel/white-sands.jpg",
    },
    {
      city: "Pokhara",
      note: "Lakeside calm and mountain air",
      image: "/travel/pokhara.jpg",
    },
    {
      city: "Las Vegas",
      note: "Bright lights, bigger stories",
      image: "/travel/las-vegas.jpg",
    },
    {
      city: "Taos",
      note: "Desert colors and quiet roads",
      image: "/travel/taos.jpg",
    },
  ],
  now: [
    {
      label: "Building",
      detail:
        "Leveling up Vibeuno into a multimodal trip engine — ETA estimation for driving vs flying, polyline-based distance math, fuel-stop optimization on the map, and a social feed of where people ate plus traveler-uploaded photos.",
    },
    {
      label: "Stack focus",
      detail:
        "Geospatial queries, map SDK routing APIs, REST services in Next.js/Node, S3 media pipelines, and recommendation-style feeds that feel a little like social media for places.",
    },
    {
      label: "Reading",
      detail:
        "Thriller novels on repeat — twisty plots, unreliable narrators, and “just one more chapter” energy.",
    },
  ],
  interests: [
    "Thriller novels",
    "Travel planning",
    "Vibeuno ideas",
    "Movies",
    "Outfits",
    "AI products",
    "Cute UI details",
    "Road trip snacks",
  ],
};
