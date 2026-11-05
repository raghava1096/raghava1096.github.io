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
export const buildWords = ['cloud consoles', 'design systems', 'AI assistants', 'payroll platforms', 'edge orchestration UIs']

export const stats = [
  { value: 9, suffix: '+', label: 'years building software' },
  { value: 10000, suffix: '+', label: 'edge nodes managed by ZedControl' },
  { value: 3, suffix: '', label: 'promotions, Jr. Engineer to Staff' },
]

export const highlights = [
  {
    where: 'Zededa · ZedControl',
    title: 'AI Assistant',
    text: 'Led frontend architecture and delivery of the ZedControl AI Assistant. Integrated an MCP server and AI agent workflows so users can query their edge infrastructure in real time, which helped cut support tickets and drive product adoption.',
    tags: ['React', 'TypeScript', 'MCP', 'AI agents'],
  },
  {
    where: 'Zededa · ZedControl',
    title: 'Design System and frontend standards',
    text: 'Started and led the product-wide Design System component library, bringing one consistent UI across the console. Set the coding standards and component patterns for the React, Redux and TypeScript codebase, reviewed pull requests, and defined API contracts and feature scope with product and backend.',
    tags: ['React', 'Redux', 'Design System', 'Code review'],
  },
  {
    where: 'Zededa · ZedControl',
    title: 'Edge console features, end to end',
    text: 'Built edge node management, Kubernetes service management, device orchestration, the app marketplace, user onboarding and TOTP 2FA, from technical design through implementation, Jest unit tests and Cypress E2E tests.',
    tags: ['React', 'Redux', 'Jest', 'Cypress'],
  },
  {
    where: 'Zededa · ZedControl',
    title: '802.1X network authentication',
    text: 'Implemented the 802.1X network authentication flow end to end: the backend service in Go and the frontend integration in React, for secure network access control across edge devices.',
    tags: ['Go', 'gRPC', 'React'],
  },
  {
    where: 'Introsort',
    title: 'Payroll processing service',
    text: 'Designed and built a new payroll service, delivered as a proof of concept for a new client, that calculates pay for a facility’s employees over a period from their contracts, hours worked and bonuses.',
    tags: ['Deno', 'TypeScript', 'AWS'],
  },
  {
    where: 'Introsort',
    title: 'Infra as code and platform design',
    text: 'Set up the AWS infrastructure and deployment pipelines as code with AWS CDK, and worked on the architecture for a unified platform, moving an existing monolith toward microservices.',
    tags: ['AWS CDK', 'CI/CD', 'Microservices'],
  },
]

export type Role = {
  title: string
  dates: string
  summary?: string
  points: string[]
}

export type Job = {
  company: string
  about: string
  span: string
  current?: boolean
  roles: Role[]
}

export const jobs: Job[] = [
  {
    company: 'Introsort Technologies',
    about: 'Scheduling and payroll calculation platform for healthcare, built with React, TypeScript, Deno and AWS.',
    span: 'Jul 2026 – now',
    current: true,
    roles: [
      {
        title: 'Staff Software Engineer, Full Stack',
        dates: 'Jul 2026 – now',
        points: [
          'Designed and built a new payroll processing service, delivered as a proof of concept for a new client, that calculates pay for a facility’s employees over a period from contracts, hours worked and bonuses.',
          'Set up the AWS infrastructure and deployment pipelines as code using AWS CDK.',
          'Worked on the architecture design for a unified platform, moving an existing monolith toward a microservices structure.',
          'Built payroll features across React/TypeScript frontend screens and Deno backend services, while mentoring a junior engineer on the team.',
        ],
      },
    ],
  },
  {
    company: 'Zededa',
    about: 'ZedControl: cloud-native SaaS console for deploying and orchestrating edge AI workloads across 10,000+ edge nodes on EVE-OS.',
    span: 'Oct 2021 – Jun 2026',
    roles: [
      {
        title: 'Staff Software Engineer',
        dates: 'Jan 2026 – Jun 2026',
        points: [
          'Led frontend architecture and delivery of ZedControl’s AI Assistant, integrating an MCP server and AI agent workflows so users could query their edge infrastructure in real time, helping reduce support tickets and drive product adoption.',
          'Initiated and led the product-wide Design System component library, bringing consistency to the UI and cutting per-feature frontend rework.',
          'Established frontend coding standards and component patterns across the React, Redux and TypeScript codebase; reviewed pull requests and defined API contracts and feature scope with product and backend teams.',
        ],
      },
      {
        title: 'Senior Software Engineer',
        dates: 'Oct 2021 – Jan 2026',
        summary: 'Started on the React/Redux/TypeScript console, then took full-stack ownership with Go, gRPC and Kafka backend work.',
        points: [
          'Built the frontend for edge node management, Kubernetes-based service management, device orchestration, app marketplace, user onboarding and TOTP-based 2FA, from technical design through implementation, Jest unit tests and Cypress E2E tests.',
          'Implemented the 802.1X network authentication flow end to end, writing the backend service in Go and the frontend integration in React.',
          'Worked with Kafka-based streaming pipelines, gRPC services and PostgreSQL supporting real-time device telemetry and event-driven processing across edge nodes.',
        ],
      },
    ],
  },
  {
    company: 'InTimeTec VisionSoft',
    about: 'Web, serverless cloud, IoT and embedded projects for clients including HP.',
    span: 'Jul 2017 – Sep 2021',
    roles: [
      {
        title: 'Senior Software Engineer',
        dates: 'May 2020 – Sep 2021',
        summary: 'HP PS Service Portal: full-stack and serverless work for HP.',
        points: [
          'Built React frontend features in JavaScript and TypeScript for HP’s Personal Systems Services portal, where HP customers book HP services.',
          'Built serverless APIs in Node.js on AWS Lambda with DynamoDB, MongoDB and S3, covered by Jest unit tests and Cypress end-to-end tests.',
        ],
      },
      {
        title: 'Software Engineer',
        dates: 'May 2018 – Jul 2020',
        summary: 'HP-JAB IoT: IoT and embedded Linux work for HP.',
        points: [
          'Built Docker containers running shell-script services on a Raspberry Pi based Linux device to collect data from HP printers and send it to the cloud, including Wi-Fi and LAN setup.',
          'Implemented secure boot with GRUB and shim signing and TPM-based encryption for device credentials, managed services with systemd, and automated flashing of bootable images.',
        ],
      },
      {
        title: 'Jr. Software Engineer',
        dates: 'Jul 2017 – Jul 2018',
        summary: 'SGW project; started with C and C++ training.',
        points: ['Worked in C on a handheld STM32-based GPS device that marks a target’s position and distance and guides the user to it.'],
      },
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
