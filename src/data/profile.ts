// ---------------------------------------------------------------------------
// Single source of truth for all portfolio content.
// Edit THIS file to update copy, experience, projects, skills, etc. — the
// UI components read from here and should never need to change for a
// content update.
//
// Anything wrapped in quotes below is real, user-provided information.
// Fields left `undefined` (dates, LinkedIn, etc.) are intentionally omitted
// rather than invented — see README.md "Updating content" for how to fill
// them in.
// ---------------------------------------------------------------------------

import type {
  AWSArchitectureNode,
  Certification,
  ControlPlaneNode,
  EducationItem,
  ExperienceItem,
  Incident,
  JourneyStage,
  NavLink,
  PipelineStage,
  Project,
  SkillGroup,
  SocialLinks,
  Stat,
} from "@/types/profile";

export const profile = {
  name: "Manoj Shivalingaiah",
  currentTitle: "QA Engineer 1",
  currentEmployer: "Smartfrog Services GmbH",
  location: "Berlin, Germany",
  positioning: "DevOps Engineer / Cloud DevOps Engineer",
  heroHeadline: "Engineering Reliable Infrastructure. Automating the Path to Production.",
  heroSubtitle: "DevOps Engineer | AWS | Kubernetes | Docker | Terraform | CI/CD",
  heroDescription:
    "I build and support automated cloud delivery workflows, containerized applications, CI/CD pipelines, and Kubernetes-based deployments, with a strong foundation in software quality and production troubleshooting.",
  aboutNarrative:
    "My engineering journey began in software quality and automation and expanded toward DevOps, cloud infrastructure, CI/CD, containerization, and Kubernetes-based delivery. In my current role as a QA Engineer 1, I contribute to Jenkins-based release automation, Docker containerization, Amazon ECR publishing, Kubernetes/EKS deployment support, pipeline validation, and production issue investigation. I enjoy understanding how applications move from source code into reliable production environments and helping make that journey repeatable.",
  aboutFocus: [
    "Automation",
    "Infrastructure as Code",
    "Cloud platforms",
    "Containerization",
    "Kubernetes",
    "CI/CD",
    "Observability",
    "Reliability",
    "Security",
    "Troubleshooting",
    "Cost optimization",
  ],
  lifecycle: [
    "Develop",
    "Build",
    "Test",
    "Containerize",
    "Provision",
    "Deploy",
    "Monitor",
    "Secure",
    "Troubleshoot",
    "Optimize",
    "Scale",
  ],
  resumeFile: "/Manoj-Shivalingaiah-DevOps-Resume.pdf",
};

// Fill these in — see README.md. Left undefined so the UI hides the link
// rather than pointing recruiters at a fake URL.
export const social: SocialLinks = {
  email: "manojgowda.s0423@gmail.com",
  linkedin: "https://linkedin.com/in/manoj-s",
  github: "https://github.com/manoj-s0423",
  location: "Berlin, Germany",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "DevOps Stack", href: "#control-plane" },
  { label: "Certifications", href: "#certifications" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export const stats: Stat[] = [
  { value: "5+", label: "Years of Software Engineering / QA Experience" },
  { value: "AWS", label: "Cloud Platform" },
  { value: "K8s", label: "Container Orchestration" },
  { value: "CI/CD", label: "Automation & Delivery" },
  { value: "Docker", label: "Containerization" },
];

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------

export const experience: ExperienceItem[] = [
  {
    id: "smartfrog",
    company: "Smartfrog Services GmbH",
    title: "QA Engineer I",
    location: "Berlin, Germany",
    period: "Jan 2026 – Present",
    current: true,
    summary:
      "Software quality engineering role with meaningful DevOps, CI/CD, containerization, and cloud deployment-support contributions on IoT and connected-camera products.",
    responsibilities: [
      "Contributed to CI/CD and release automation by configuring and maintaining Jenkins pipelines for application build, validation, and deployment workflows.",
      "Built and containerized microservices using Docker and published container images to Amazon ECR for deployment on Kubernetes/Amazon EKS.",
      "Collaborated with DevOps and backend teams to support containerized application deployments, release activities, pipeline validation, and production issue investigation.",
      "Participated in troubleshooting application and deployment issues through log analysis and root-cause investigation across cloud-connected systems.",
      "Supported reliable software delivery by validating builds, deployments, and production releases in CI-driven environments.",
      "Performed manual and functional testing of web applications and IoT-related systems, including defect identification, validation, and regression testing.",
      "Tested application features, firmware-related functionality, and system integrations to support software quality and reliable releases.",
    ],
    devOpsHighlights: [
      "Jenkins pipeline configuration & maintenance",
      "Docker-based microservice containerization",
      "Amazon ECR image publishing",
      "Kubernetes / Amazon EKS deployment support",
      "Pipeline validation & release activities",
      "Log analysis & root-cause investigation",
    ],
    tech: ["Jenkins", "Docker", "Amazon ECR", "Kubernetes", "Amazon EKS", "AWS S3", "Git"],
  },
  {
    id: "vtiger",
    company: "Vtiger Systems India Pvt. Ltd.",
    title: "Senior QA Automation Engineer",
    location: "Bengaluru, India",
    period: "Aug 2022 – May 2025",
    current: false,
    summary:
      "Test automation and software quality engineering, building and maintaining automated test suites and API test coverage in CI-driven release workflows.",
    responsibilities: [
      "Managed and optimized test environments, maintaining 99% availability for automated and manual validation workflows.",
      "Built and maintained Selenium-based automation frameworks, increasing test coverage by 30% and reducing regression cycle time.",
      "Analyzed automated test reports, application issues, and release failures while collaborating with engineering teams to improve release readiness, software delivery processes, and troubleshooting efficiency.",
      "Performed API testing and request/response validation using Postman.",
      "Managed test builds and dependencies with Maven as part of CI-related engineering workflows.",
    ],
    devOpsHighlights: [
      "CI/CD-related engineering workflows",
      "Test environment management",
      "Release validation",
    ],
    tech: ["Java", "Selenium WebDriver", "Postman", "Maven"],
  },
  {
    id: "appright",
    company: "Appright Software Solutions Pvt Ltd.",
    title: "Quality Analyst",
    location: "Bengaluru, India",
    period: "Oct 2020 – Jul 2022",
    current: false,
    summary:
      "Foundational quality assurance role — functional, regression, and exploratory testing, and early exposure to test automation. The starting point of my automation and troubleshooting mindset.",
    responsibilities: [
      "Designed and executed functional, regression, UI, and exploratory testing strategies across software releases.",
      "Reduced regression testing time by 40% through early automation adoption and structured test documentation.",
    ],
    devOpsHighlights: [],
    tech: ["Manual Testing", "Regression Testing", "Test Planning", "Defect Tracking"],
  },
];

// ---------------------------------------------------------------------------
// DevOps journey (Testing → Production Engineering)
// ---------------------------------------------------------------------------

export const journeyStages: JourneyStage[] = [
  {
    id: "testing",
    stage: "01",
    label: "Software Testing",
    technologies: ["Manual Testing", "Regression Testing", "Selenium WebDriver"],
    concepts: ["Functional validation", "Defect lifecycle", "Test planning"],
    relatedProjects: ["Appright — Quality Analyst", "Vtiger — Senior QA Automation Engineer"],
    connection: "Understanding how software breaks is what later made pipeline and deployment validation intuitive.",
  },
  {
    id: "automation",
    stage: "02",
    label: "Automation",
    technologies: ["Java", "Selenium WebDriver", "Postman", "Maven"],
    concepts: ["Automated test suites", "API testing", "Build tooling"],
    relatedProjects: ["Vtiger — Senior QA Automation Engineer"],
    connection: "Automating repetitive validation is the same instinct that drives CI/CD pipeline design.",
  },
  {
    id: "cicd",
    stage: "03",
    label: "CI/CD",
    technologies: ["Jenkins", "Git", "GitHub Actions"],
    concepts: ["Build pipelines", "Pipeline validation", "Release automation"],
    relatedProjects: ["Smartfrog Services GmbH — QA Engineer 1", "AWS Cost Optimization & Cloud Delivery Automation"],
    connection: "A pipeline that validates code is only useful if it also ships it — which leads to packaging and containers.",
  },
  {
    id: "docker",
    stage: "04",
    label: "Docker",
    technologies: ["Docker", "Amazon ECR"],
    concepts: ["Containerization", "Image publishing"],
    relatedProjects: ["Smartfrog Services GmbH — QA Engineer 1", "Production-Grade Microservices Platform on AWS EKS"],
    connection: "Once an application is containerized, it needs infrastructure to run on — reliably and repeatably.",
  },
  {
    id: "iac",
    stage: "05",
    label: "Infrastructure as Code",
    technologies: ["Terraform", "Ansible"],
    concepts: ["Provisioning", "Repeatable environments"],
    relatedProjects: ["Production-Grade Microservices Platform on AWS EKS (in progress)"],
    connection: "Provisioned infrastructure needs a cloud platform to run on and scale within.",
  },
  {
    id: "aws",
    stage: "06",
    label: "AWS",
    technologies: ["EC2", "EKS", "ECR", "S3", "IAM", "CloudWatch"],
    concepts: ["Cloud architecture", "Access control", "Managed services"],
    relatedProjects: ["Smartfrog Services GmbH — QA Engineer 1", "Production-Grade Microservices Platform on AWS EKS"],
    connection: "Cloud compute on its own doesn't orchestrate containers at scale — that's where Kubernetes comes in.",
  },
  {
    id: "kubernetes",
    stage: "07",
    label: "Kubernetes",
    technologies: ["Kubernetes", "Amazon EKS", "Helm"],
    concepts: ["Deployments", "Services", "Scaling"],
    relatedProjects: ["Smartfrog Services GmbH — QA Engineer 1", "Production-Grade Microservices Platform on AWS EKS (in progress)"],
    connection: "Running workloads reliably means knowing how they're actually behaving in production — observability.",
  },
  {
    id: "observability",
    stage: "08",
    label: "Observability",
    technologies: ["Prometheus", "Grafana", "CloudWatch", "Log Analysis"],
    concepts: ["Metrics", "Dashboards", "Alerting"],
    relatedProjects: ["Production-Grade Microservices Platform on AWS EKS (in progress)"],
    connection: "Dashboards tell you something is wrong — troubleshooting is how you find out why.",
  },
  {
    id: "troubleshooting",
    stage: "09",
    label: "Production Troubleshooting",
    technologies: ["kubectl", "CloudWatch Logs", "Root-Cause Analysis"],
    concepts: ["Incident investigation", "Log analysis", "Root-cause analysis"],
    relatedProjects: ["Smartfrog Services GmbH — QA Engineer 1", "Production Troubleshooting scenarios"],
    connection: "Consistently resolving production issues is what shapes an engineer's move toward full DevOps ownership.",
  },
  {
    id: "devops",
    stage: "10",
    label: "DevOps Engineering",
    technologies: ["Full delivery lifecycle: Git → CI/CD → Containers → Kubernetes → Cloud → Observability"],
    concepts: ["End-to-end ownership", "Reliability", "Continuous delivery"],
    relatedProjects: ["Current career objective"],
    connection: "The direction this journey is heading — not yet my official title, but the throughline of everything above.",
  },
];

// ---------------------------------------------------------------------------
// Projects — exactly two, per scope.
// ---------------------------------------------------------------------------

export const projects: Project[] = [
  {
    id: "microservices-eks",
    title: "Production-Grade Microservices Platform on AWS EKS",
    subtitle: "ShopStream — a 6-service polyglot e-commerce platform, application layer complete",
    category: "Cloud / Kubernetes / DevOps",
    projectType: "Portfolio Project — In Progress",
    statusLabel: "In Progress",
    statusTone: "warning",
    description:
      "A production-oriented microservices platform being built on AWS EKS. The application layer — 6 independently deployable services across 5 languages — is complete and on GitHub. The infrastructure and delivery layer (Docker, Terraform, CI/CD, GitOps, security scanning, and observability) is the architecture currently being implemented on top of it.",
    technologies: [
      "AWS", "EKS", "EC2", "ECR", "Kubernetes", "Docker", "Terraform", "Ansible",
      "Jenkins", "Helm", "Argo CD", "Prometheus", "Grafana", "SonarQube", "Trivy", "Git",
    ],
    pipeline: [
      "Developer", "Git Repository", "Jenkins", "Build & Test", "SonarQube", "Docker Build",
      "Trivy Scan", "Amazon ECR", "Argo CD", "Amazon EKS", "Prometheus", "Grafana",
    ],
    github: "https://github.com/manoj-s0423/microservices-platform",
    demo: undefined,
    ctaCaseStudy: "Explore Architecture",
    caseStudy: {
      overview:
        "ShopStream is a realistic polyglot microservices e-commerce system: an API gateway plus 5 backend services (Java/Spring Boot, Python/FastAPI, Go/Gin, .NET/ASP.NET Core, TypeScript/Express), each owning its own database and communicating over REST with health checks, retries, timeouts, and graceful shutdown built in.",
      problem:
        "Design and build an application suite realistic enough to require a genuine DevOps handoff: multiple languages and runtimes, independent databases per service, inter-service HTTP calls, and no shortcuts that a single-language demo app would allow.",
      architecture:
        "API Gateway (Node.js/Express) routes to User Service (Java/Spring Boot), Product Service (Python/FastAPI), Order Service (Go/Gin), and Payment Service (.NET/ASP.NET Core). A Notification Service (TypeScript/Express + MongoDB) is built and independently testable. Each service owns a dedicated PostgreSQL (or MongoDB) database — no service reaches into another's data store directly.",
      infrastructure:
        "Planned: AWS EKS as the target Kubernetes platform, with Terraform for provisioning (VPC, EKS cluster, ECR repositories, IAM roles) and Ansible for any host-level configuration. Not yet implemented in the repository.",
      cicd:
        "Planned: a Jenkins pipeline that runs build & test, SonarQube static analysis, Docker image builds, Trivy vulnerability scanning, and publishes to Amazon ECR ahead of an Argo CD-driven deploy. The application layer already documents exact build/test/run commands per service, which is what the pipeline stages will be built against.",
      containerization:
        "Planned: one Dockerfile per service (5 backend services + gateway), each written against that service's own README (language/runtime version, build tool, exposed port, environment variables) so no source-reading is required to containerize it.",
      kubernetes:
        "Planned: Kubernetes Deployments and Services per microservice on Amazon EKS, fronted by the API Gateway, with Helm charts for templated, repeatable releases and Argo CD for GitOps-driven sync.",
      security:
        "Planned: Trivy image scanning in the pipeline before anything reaches ECR, plus IAM least-privilege roles for cluster and service access and Kubernetes RBAC once workloads are deployed.",
      observability:
        "Planned: Prometheus metrics scraping and Grafana dashboards across the 6 services, building on the health/readiness endpoints each service already exposes.",
      troubleshooting:
        "The application layer already surfaces real cross-service investigation cases — e.g. the API gateway's readiness check depends on the User Service's Spring Boot Actuator health path, and JWT_SECRET must match between the gateway and User Service or auth fails silently across the boundary.",
      challenges: [
        {
          title: "Polyglot handoff without shortcuts",
          detail:
            "Keeping 5 languages/frameworks each idiomatic (Spring Boot, FastAPI, Gin, ASP.NET Core, Express) rather than collapsing to one stack, so the DevOps layer has to handle genuinely different build/runtime requirements per service.",
          labeled: "confirmed",
        },
        {
          title: "Service boundary integrity",
          detail:
            "Ensuring cross-service data (e.g. Order Service needing a Product's price and stock) is fetched over HTTP with timeouts and bounded retries rather than direct database access — a common shortcut in demo systems that this repo deliberately avoids.",
          labeled: "confirmed",
        },
      ],
      solution:
        "The repository was scoped explicitly as an application/developer handoff — deliberately excluding Dockerfiles, CI/CD, Kubernetes manifests, Helm charts, Terraform, Ansible, and observability config — so the infrastructure layer above can be built and practiced from a clean, realistic starting point rather than a toy app.",
      outcome:
        "Built and pushed: a 6-service polyglot application with per-service databases, health/readiness checks, and full build/run documentation per service. In progress: the Docker, Terraform, Kubernetes/EKS, GitOps, security-scanning, and observability layer shown in the architecture above.",
    },
  },
  {
    id: "aws-cost-delivery",
    title: "AWS Cost Optimization & Cloud Delivery Automation",
    subtitle: "Applied CI/CD and cloud delivery work at Smartfrog Services GmbH",
    category: "AWS / CI/CD / Cloud Automation",
    date: "June 2026",
    projectType: "Professional Experience — Smartfrog Services GmbH",
    statusLabel: "Professional Experience",
    statusTone: "info",
    description:
      "Applied cloud delivery and automation work performed as part of my QA Engineer 1 role: Jenkins-driven build and deployment pipelines, Docker containerization, Amazon ECR publishing for Kubernetes/EKS, and log-based investigation to support reliable software delivery.",
    technologies: ["AWS", "Jenkins", "Docker", "Amazon ECR", "Amazon EKS"],
    pipeline: [
      "Developer", "Source Code", "Jenkins", "Application Build", "Validation",
      "Docker Image", "Amazon ECR", "Amazon EKS", "Log Analysis & Root-Cause Investigation",
    ],
    github: undefined,
    demo: undefined,
    ctaCaseStudy: "Explore Delivery Flow",
    caseStudy: {
      overview:
        "A cloud delivery and automation workflow built and maintained as part of my day-to-day QA Engineer 1 responsibilities at Smartfrog Services GmbH — not a standalone repo, but a real, applied CI/CD and container delivery flow.",
      problem:
        "Application builds needed a repeatable, validated path from source code to a deployable container image on Kubernetes/EKS, with a way to investigate issues when a build, deployment, or release didn't behave as expected.",
      architecture:
        "Source code triggers a Jenkins pipeline that builds and validates the application, produces a Docker image, and publishes it to Amazon ECR for deployment on Kubernetes/Amazon EKS.",
      infrastructure:
        "AWS-hosted delivery target: Amazon ECR for image storage and Amazon EKS for container orchestration, as part of the team's existing cloud environment.",
      cicd:
        "Configured and maintained Jenkins pipelines covering application build, validation, and deployment stages.",
      containerization:
        "Containerized application components with Docker ahead of publishing to Amazon ECR.",
      kubernetes:
        "Images published to ECR are deployed on Kubernetes/Amazon EKS, in collaboration with the DevOps and backend teams responsible for cluster operations.",
      security:
        "Not directly owned in this role; security scanning and IAM/RBAC policy are handled by the DevOps team. Noted here for accuracy rather than implied.",
      observability:
        "Investigation relies on application and deployment logs rather than a dedicated dashboard stack owned by this role.",
      troubleshooting:
        "Investigated application and deployment issues through log analysis and root-cause investigation to support reliable releases across cloud-connected systems.",
      challenges: [
        {
          title: "Diagnosing failures across build, image, and deployment boundaries",
          detail:
            "A release can fail at the build stage, inside the container image, or at deployment time on EKS — narrowing down which layer is responsible is a production-style diagnostic workflow encountered in this kind of pipeline.",
          labeled: "production-style scenario",
        },
      ],
      solution:
        "Validating builds, deployments, and releases at each stage of the CI-driven pipeline, and using log analysis to trace issues back to their root cause before they reach production.",
      outcome:
        "A working Jenkins → Docker → Amazon ECR → Kubernetes/EKS delivery path supporting reliable application releases, with production issue investigation as an ongoing part of the workflow.",
    },
  },
];

// ---------------------------------------------------------------------------
// Production troubleshooting scenarios (clearly labeled as demonstrations)
// ---------------------------------------------------------------------------

export const incidents: Incident[] = [
  {
    id: "jenkins-disk",
    title: "Jenkins Server Disk Full",
    label: "Production-style troubleshooting scenario",
    scenario:
      "A demonstration of the investigation workflow used when a CI server runs out of disk space and builds start failing.",
    steps: [
      { step: "Alert", detail: "Jenkins builds start failing with disk-space errors; monitoring flags the host." },
      { step: "Investigation", detail: "Connect to the Jenkins host to check overall disk usage." },
      { step: "df -h", detail: "Run df -h to confirm which volume is full and by how much." },
      { step: "Identify Large Files", detail: "Use du to locate the largest directories consuming space." },
      { step: "Jenkins Workspace / Logs", detail: "Narrow down to Jenkins job workspaces and old build logs/artifacts as the likely cause." },
      { step: "Cleanup", detail: "Clear stale workspaces, old artifacts, and rotate/compress logs." },
      { step: "Verify Disk", detail: "Re-run df -h to confirm space has been reclaimed and builds can proceed." },
      { step: "Prevent Recurrence", detail: "Configure workspace cleanup and log/artifact retention policies in Jenkins to stop the issue from repeating." },
    ],
    note: "This is a demonstration of an investigation workflow, not a claim of a real production incident.",
  },
  {
    id: "crashloop",
    title: "Kubernetes Pod CrashLoopBackOff",
    label: "Production-style troubleshooting workflow",
    scenario:
      "A structured workflow for diagnosing a pod stuck in CrashLoopBackOff on Kubernetes.",
    steps: [
      { step: "Alert", detail: "A deployment's pods are repeatedly restarting; readiness checks fail." },
      { step: "kubectl get pods", detail: "Confirm the CrashLoopBackOff status and restart count." },
      { step: "kubectl describe pod", detail: "Inspect events for the pod — image pull errors, OOMKilled, failed probes." },
      { step: "kubectl logs", detail: "Check current and previous container logs (--previous) for the actual crash reason." },
      { step: "Identify Root Cause", detail: "Narrow to a likely cause: bad config, missing secret/env var, failing dependency, resource limits." },
      { step: "Fix Configuration", detail: "Correct the manifest, ConfigMap, Secret, or resource limits causing the crash." },
      { step: "Redeploy", detail: "Roll out the corrected configuration." },
      { step: "Verify Health", detail: "Confirm the pod reaches Running/Ready and stays stable." },
    ],
    note: "This is a production-style troubleshooting workflow demonstration, not a claim of a real incident.",
  },
  {
    id: "unreachable",
    title: "Application Unreachable",
    label: "Structured connectivity investigation workflow",
    scenario:
      "A layer-by-layer connectivity investigation for when an application is reported unreachable.",
    steps: [
      { step: "DNS", detail: "Confirm the domain resolves to the expected address." },
      { step: "Load Balancer", detail: "Check load balancer health checks and target group status." },
      { step: "Security Group", detail: "Verify inbound/outbound rules allow the expected traffic." },
      { step: "Network", detail: "Check routing, subnets, and connectivity between components." },
      { step: "Service", detail: "Confirm the Kubernetes Service has healthy endpoints." },
      { step: "Ingress", detail: "Check ingress rules and TLS configuration are routing correctly." },
      { step: "Pod", detail: "Confirm target pods are Running and passing readiness probes." },
      { step: "Application", detail: "Check application-level logs for the actual failure once infrastructure is ruled out." },
    ],
    note: "This is a structured connectivity investigation workflow demonstration, not a claim of a real incident.",
  },
];

// ---------------------------------------------------------------------------
// DevOps Control Plane
// ---------------------------------------------------------------------------

export const controlPlane: ControlPlaneNode[] = [
  { id: "source", stage: "Source Control", tools: ["Git", "GitHub"], description: "Version control for application code and infrastructure definitions.", context: "professional" },
  { id: "ci", stage: "CI", tools: ["Jenkins", "GitHub Actions"], description: "Build and validation pipelines triggered on every change.", context: "professional", relatedProject: "Smartfrog Services GmbH" },
  { id: "build", stage: "Build", tools: ["Maven", "Docker"], description: "Compiling/packaging applications and building container images.", context: "professional" },
  { id: "quality", stage: "Quality Validation", tools: ["Automated Testing", "SonarQube"], description: "Automated tests and static analysis before code moves forward.", context: "portfolio", relatedProject: "Production-Grade Microservices Platform on AWS EKS" },
  { id: "security", stage: "Security", tools: ["Trivy"], description: "Vulnerability scanning of container images before publishing.", context: "portfolio", relatedProject: "Production-Grade Microservices Platform on AWS EKS" },
  { id: "registry", stage: "Registry", tools: ["Amazon ECR"], description: "Central store for versioned, scanned container images.", context: "professional" },
  { id: "infra", stage: "Infrastructure", tools: ["Terraform", "Ansible"], description: "Provisioning cloud infrastructure and configuration as code.", context: "learning", relatedProject: "Production-Grade Microservices Platform on AWS EKS" },
  { id: "orchestration", stage: "Orchestration", tools: ["Kubernetes", "Amazon EKS"], description: "Running and scheduling containerized workloads.", context: "professional" },
  { id: "gitops", stage: "GitOps", tools: ["Argo CD", "Helm"], description: "Declarative, Git-driven deployment to Kubernetes.", context: "learning", relatedProject: "Production-Grade Microservices Platform on AWS EKS" },
  { id: "observability", stage: "Observability", tools: ["Prometheus", "Grafana"], description: "Metrics, dashboards, and alerting for running workloads.", context: "learning", relatedProject: "Production-Grade Microservices Platform on AWS EKS" },
  { id: "production", stage: "Production", tools: ["AWS"], description: "Where it all runs — and where troubleshooting happens when it doesn't.", context: "professional" },
];

// ---------------------------------------------------------------------------
// How I ship software — interactive pipeline
// ---------------------------------------------------------------------------

export const shipPipeline: PipelineStage[] = [
  { id: "commit", stage: "Commit", technologies: "Git / GitHub" },
  { id: "build", stage: "Build", technologies: "Jenkins / GitHub Actions" },
  { id: "validate", stage: "Validate", technologies: "Automated Testing / Build Validation" },
  { id: "scan", stage: "Scan", technologies: "SonarQube / Trivy" },
  { id: "package", stage: "Package", technologies: "Docker" },
  { id: "push", stage: "Push", technologies: "Amazon ECR" },
  { id: "deploy", stage: "Deploy", technologies: "Kubernetes / Amazon EKS / Argo CD" },
  { id: "monitor", stage: "Monitor", technologies: "Prometheus / Grafana / CloudWatch" },
  { id: "troubleshoot", stage: "Troubleshoot", technologies: "Logs / Root-Cause Investigation" },
];

// ---------------------------------------------------------------------------
// Skills
// ---------------------------------------------------------------------------

export const skills: SkillGroup[] = [
  { domain: "Cloud", blurb: "AWS services used professionally and in portfolio infrastructure work.", items: ["AWS", "EC2", "S3", "ECR", "EKS", "IAM", "VPC", "CloudWatch", "RDS", "Lambda", "EventBridge", "DynamoDB", "Multi-AZ", "Load Balancing"] },
  { domain: "Containers", blurb: "Packaging applications for consistent, portable deployment.", items: ["Docker", "Docker Compose", "Container Images", "Multi-stage Builds"] },
  { domain: "Kubernetes", blurb: "Orchestrating and operating containerized workloads.", items: ["Kubernetes", "EKS", "Deployments", "Services", "ConfigMaps", "Secrets", "Ingress", "TLS", "Namespaces", "Helm", "Horizontal Pod Autoscaling", "RBAC", "Persistent Volumes", "Persistent Volume Claims", "Custom Resource Definitions"] },
  { domain: "Infrastructure as Code", blurb: "Provisioning and managing infrastructure declaratively.", items: ["Terraform", "Terraform Modules", "State Management", "Infrastructure Provisioning"] },
  { domain: "Configuration Management", blurb: "Automating host and application configuration.", items: ["Ansible"] },
  { domain: "CI/CD", blurb: "Automating build, validation, and release workflows.", items: ["Jenkins", "GitHub Actions", "Git", "GitHub", "Maven", "CI/CD Pipelines", "Build Validation", "Release Validation"] },
  { domain: "GitOps", blurb: "Declarative, Git-driven deployment to Kubernetes.", items: ["Argo CD", "Helm"] },
  { domain: "Observability", blurb: "Understanding system behavior through metrics and logs.", items: ["Prometheus", "Grafana", "CloudWatch", "Node Exporter", "ELK Stack", "Log Analysis", "Alerting", "Root-Cause Analysis"] },
  { domain: "Security", blurb: "Scanning, access control, and secure delivery practices.", items: ["Trivy", "SonarQube", "IAM", "Security Groups", "Kubernetes RBAC", "Least Privilege", "Secrets Management"] },
  { domain: "Programming & Scripting", blurb: "Languages and libraries used for automation and tooling.", items: ["Python", "Bash", "Java", "Boto3"] },
  { domain: "Testing & Automation", blurb: "The QA automation foundation this journey builds on.", items: ["Selenium", "Postman", "Maven", "Functional Testing", "Regression Testing", "API Testing"] },
  { domain: "Operating Systems", blurb: "Day-to-day operating environment.", items: ["Linux"] },
  { domain: "Networking", blurb: "Understanding how traffic actually reaches an application.", items: ["TCP/IP", "DNS", "HTTP/HTTPS", "SSH", "VPC", "Subnets", "Routing", "Load Balancing"] },
];

// ---------------------------------------------------------------------------
// Certifications & Education
// ---------------------------------------------------------------------------

export const certifications: Certification[] = [
  {
    id: "iit-roorkee",
    name: "Advanced Certification in Cloud Computing & DevOps",
    issuer: "IIT Roorkee",
    status: "completed",
    credentialId: "IPTIH2412265",
    credentialUrl: undefined, // resume references a "View Certificate" link but no plain URL was extractable from the PDF — add it here if you have it
  },
  {
    id: "cka",
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    status: "in-progress",
    credentialUrl: undefined,
  },
];

export const education: EducationItem[] = [
  {
    id: "masters",
    degree: "M.Sc. Software Engineering",
    institution: "University of Europe for Applied Sciences",
    location: "Potsdam, Germany",
    period: "Sep 2025 – Aug 2026",
    focusAreas: ["Software Engineering", "Cloud Computing", "DevOps", "Distributed Systems", "CI/CD", "Cloud Infrastructure", "Software Architecture"],
  },
  {
    id: "bachelors",
    degree: "B.E. Electronics & Communication Engineering",
    institution: "Visvesvaraya Technological University",
    location: "Belagavi, India",
    period: "Aug 2015 – Aug 2019",
    focusAreas: [],
  },
];

export const languages: { name: string; level: string }[] = [
  { name: "English", level: "Fluent" },
  { name: "German", level: "A2 — Actively learning" },
  { name: "Kannada", level: "Native" },
];

export const currentlyExploring: string[] = [
  "Advanced Kubernetes",
  "AWS Architecture",
  "DevSecOps",
  "GitOps",
  "Platform Engineering",
  "Observability",
  "Cloud Cost Optimization",
  "SRE Practices",
  "Production Incident Management",
];

export const awsArchitecture: AWSArchitectureNode[] = [
  { id: "internet", label: "Internet", service: "Client Traffic", description: "Inbound requests from users or clients reaching the platform.", relatedProject: "Both projects" },
  { id: "lb", label: "Load Balancer", service: "Elastic Load Balancing", description: "Distributes incoming traffic across healthy targets.", relatedProject: "Production-Grade Microservices Platform on AWS EKS (planned)" },
  { id: "eks", label: "Kubernetes / EKS", service: "Amazon EKS", description: "Managed Kubernetes control plane orchestrating containerized workloads.", relatedProject: "Both projects" },
  { id: "nodes", label: "Worker Nodes", service: "Amazon EC2", description: "EC2 instances that run the Kubernetes worker nodes and scheduled pods.", relatedProject: "Production-Grade Microservices Platform on AWS EKS (planned)" },
  { id: "pods", label: "Pods", service: "Kubernetes Pods", description: "Running instances of each containerized microservice.", relatedProject: "Both projects" },
  { id: "services", label: "Services", service: "Kubernetes Services", description: "Stable networking endpoints routing traffic to the right pods.", relatedProject: "Both projects" },
  { id: "ecr", label: "Amazon ECR", service: "Elastic Container Registry", description: "Stores versioned container images published by the CI pipeline.", relatedProject: "Both projects" },
  { id: "s3", label: "S3", service: "Amazon S3", description: "Object storage — used at Smartfrog for device/video data validation.", relatedProject: "Smartfrog Services GmbH (professional)" },
  { id: "cloudwatch", label: "CloudWatch", service: "Amazon CloudWatch", description: "Centralized logs and metrics for monitoring and investigation.", relatedProject: "Production-Grade Microservices Platform on AWS EKS (planned)" },
];

export const seo = {
  title: "Manoj Shivalingaiah | DevOps Engineer | AWS • Kubernetes • Terraform",
  description:
    "Manoj Shivalingaiah is a DevOps and Cloud Engineering professional based in Berlin, Germany, with a background in QA automation and experience contributing to CI/CD, Docker, Amazon ECR, Kubernetes/EKS deployment workflows, automation, and observability.",
};
