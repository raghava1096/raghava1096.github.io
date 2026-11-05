// all resume content lives here so the components stay simple

export const profile = {
  name: 'Raghava S',
  title: 'Staff Software Engineer · Full Stack',
  location: 'Bengaluru',
  email: 'raghavashettysar@gmail.com',
  linkedin: 'https://www.linkedin.com/in/raghava-shetty',
  github: 'https://github.com/raghava1096',
  resumePdf: 'Raghava_S_Resume.pdf',
}

// words that rotate in the hero headline
export const buildWords = ['cloud consoles', 'design systems', 'payroll engines', 'edge fleets', 'firmware']

export const stats = [
  { value: 9, suffix: '+', label: 'years building software' },
  { value: 10000, suffix: '+', label: 'edge nodes managed by ZedControl' },
  { value: 40, suffix: '%', prefix: '~', label: 'less frontend rework after the Design System' },
]

export const highlights = [
  {
    where: 'Zededa · ZedControl',
    title: 'AI Assistant',
    text: 'Led the frontend architecture. Wired in an MCP server and agent workflows so users can ask about their edge fleet in plain language.',
  },
  {
    where: 'Zededa · ZedControl',
    title: 'Design System',
    text: 'Started and led the product-wide component library. Cut per-feature frontend rework by around 40%.',
  },
  {
    where: 'Introsort',
    title: 'Payroll service POC',
    text: 'Designed and built a payroll service that works out pay from contracts, hours and bonuses. Infra and pipeline in AWS CDK.',
  },
]

export type Job = {
  company: string
  role: string
  dates: string
  current?: boolean
  about: string
  points: string[]
}

export const jobs: Job[] = [
  {
    company: 'Introsort Technologies',
    role: 'Staff Software Engineer, Full Stack',
    dates: 'Jul 2026 – now',
    current: true,
    about: 'Scheduling and payroll platform for healthcare. React, TypeScript, Deno, AWS.',
    points: [
      'Built a payroll processing service as a POC for a new client: pay per employee from contracts, hours worked and bonuses.',
      'Set up AWS infrastructure and deployment pipelines as code with AWS CDK.',
      'Worked on the architecture for moving an existing monolith toward microservices.',
      'Built payroll screens in React and backend services in Deno; mentoring a junior engineer.',
    ],
  },
  {
    company: 'Zededa',
    role: 'Staff Software Engineer, Full Stack',
    dates: 'Oct 2021 – Jun 2026',
    about: 'ZedControl: SaaS console for deploying and running edge AI workloads across 10,000+ nodes on EVE-OS.',
    points: [
      'Led frontend architecture and delivery of the AI Assistant (MCP server, agent workflows).',
      'Started the product-wide Design System; around 40% less per-feature rework.',
      'Set frontend standards across the React/Redux codebase, reviewed PRs, defined API contracts with backend.',
      'Built the 802.1X network auth flow end to end: Go service plus React integration.',
      'Shipped node management, Kubernetes service management, app marketplace, onboarding and TOTP 2FA, with Jest and Cypress tests.',
      'Worked with Kafka pipelines, gRPC services and PostgreSQL for real-time device telemetry.',
    ],
  },
  {
    company: 'InTimeTec VisionSoft',
    role: 'Sr. Software Engineer (from Jr. Software Engineer)',
    dates: 'Jul 2017 – Oct 2021',
    about: 'Web, serverless, IoT and embedded projects for clients including HP.',
    points: [
      'HP PS Service Portal: React frontend; Node.js APIs on AWS Lambda with DynamoDB, MongoDB and S3.',
      'HP-JAB IoT: Docker services on a Raspberry Pi device collecting printer data; secure boot, TPM-backed credentials, systemd.',
      'SGW Embedded: C firmware for a handheld STM32 GPS device.',
    ],
  },
]

export const skills = [
  { group: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'Redux', 'HTML', 'SCSS', 'Design Systems'] },
  { group: 'Backend', items: ['Node.js', 'Go', 'Deno'] },
  { group: 'APIs and architecture', items: ['REST', 'gRPC', 'Kafka', 'Microservices'] },
  { group: 'Cloud and DevOps', items: ['AWS', 'AWS CDK', 'Lambda', 'Serverless', 'Docker', 'CI/CD'] },
  { group: 'Data', items: ['PostgreSQL', 'DynamoDB', 'MongoDB'] },
  { group: 'Testing', items: ['Jest', 'Cypress'] },
  { group: 'AI', items: ['AI agents', 'MCP servers', 'LLM integration'] },
  { group: 'Other', items: ['Linux', 'Shell', 'Git', 'C', 'C++'] },
]

export const education = {
  degree: 'B.E., Information Science',
  school: 'The National Institute of Engineering, Mysore',
  year: '2017',
}

export const languages = ['Kannada', 'English', 'Telugu', 'Hindi']
