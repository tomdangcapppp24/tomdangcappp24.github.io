export const sectionLinks = [
  { id: "research", label: "Research" },
  { id: "foundations", label: "Foundations" },
  { id: "recognition", label: "Recognition" },
  { id: "community", label: "Community" },
] as const;

export const introduction = {
  name: "Bui Duc Anh",
  location: "Hanoi, Vietnam",
  role: "A-level student · Nguyen Sieu High School",
  summary:
    "I’m an A-level student in Hanoi exploring chemistry, materials science, and the processes behind semiconductor fabrication. I’m interested in how the behaviour of materials at small scales connects to practical engineering questions.",
  interests: [
    "Materials science",
    "Semiconductor fabrication",
    "Chemical engineering",
  ],
};

export const research = {
  title: "How does a thin film grow?",
  subtitle: "Semiconductor thin-film growth simulation",
  role: "Co-developer",
  period: "October 2026 – present",
  description:
    "How do arriving atoms become a film? I’m exploring that question through a Python-based Monte Carlo simulation of deposition, surface relaxation, thermal diffusion, and trench filling.",
  contribution:
    "As a co-developer, I helped build the model and its interactive interface. I use it to explore how substrate temperature, deposition rate, and trench geometry relate to film roughness and void formation.",
  processes: [
    {
      title: "Deposition",
      description: "Follow atomic deposition on the substrate.",
    },
    {
      title: "Surface evolution",
      description: "Explore surface relaxation and thermal diffusion.",
    },
    {
      title: "Film quality",
      description:
        "Look at film roughness, trench filling, and void formation.",
    },
  ],
  parameters: ["Substrate temperature", "Deposition rate", "Trench geometry"],
  tools: ["Python", "NumPy", "Matplotlib", "Monte Carlo"],
};

export const foundations = {
  school: "Nguyen Sieu High School",
  period: "2024 – 2027",
  programme: "Science-specialized class · A-level studies",
  subjects: [
    { name: "Mathematics", grade: "A", note: "AS Level" },
    { name: "Chemistry", grade: "A", note: "AS Level" },
    { name: "Physics", grade: "A", note: "AS Level" },
  ],
  igcse: "IGCSE: Mathematics A* · Physics A* · Chemistry A",
  coursework: {
    title: "Mathematics for Engineers",
    provider: "HKUST · Coursera",
    status: "Specialization in progress",
    completed: ["Calculus for Engineers", "Matrix Algebra for Engineers"],
    description:
      "These courses are helping me work with calculus, optimisation, linear systems, and eigenvalue analysis. I’m continuing the specialization to develop that foundation further.",
  },
  skills: [
    {
      title: "Working at the bench",
      text: "Chemical handling, solution preparation, titration, and experimental procedures.",
    },
    {
      title: "Building a model",
      text: "Python, NumPy, Matplotlib, and Monte Carlo simulation.",
    },
    {
      title: "Interpreting results",
      text: "Quantitative analysis, data interpretation, and mathematical modelling.",
    },
  ],
};

export const activities = [
  {
    title: "Connected World Club",
    role: "Vice President & Event Leader",
    period: "October 2025 – present",
    text: "I help organise charitable trips, monthly fundraising, and learning support at Dong Da Friendship Childcare House. I also help prepare festival activities for the children, from Mid-Autumn Festival to Lunar New Year.",
  },
  {
    title: "Warm Nests for the Future",
    role: "Project organiser",
    period: "Community & conservation",
    text: "I helped organise an environmental project focused on protecting habitats and conserving storks.",
  },
  {
    title: "Le Stella Di Music Club",
    role: "Finance & External Relations Member",
    period: "September 2025 – July 2026",
    text: "I supported the club’s financial administration, event planning, and external communications.",
  },
  {
    title: "Evergreen Club",
    role: "Logistics Member",
    period: "September 2025 – present",
    text: "I coordinate materials, equipment, and on-site arrangements to help club activities run smoothly.",
  },
  {
    title: "Classroom leadership",
    role: "Class Monitor · Youth Union Executive Committee",
    period: "School community",
    text: "I served as class monitor from August 2024 to May 2026 and have been a Youth Union committee member since August 2025, helping classmates communicate with teachers and organise student-led activities.",
  },
  {
    title: "Beyond the classroom",
    role: "Basketball · Hanoi Basketball Academy",
    period: "August 2026",
    text: "I placed third in a 3×3 tournament at Hanoi Basketball Academy. Basketball is another part of my life built around practice and teamwork.",
  },
];
