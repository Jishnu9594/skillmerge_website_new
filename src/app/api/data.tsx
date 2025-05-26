export const TrustedCompanies = [
  { imgSrc: "/images/companies/jbc.png", name: "JBC" },
  { imgSrc: "/images/companies/fedex.svg", name: "FedEx" },
  { imgSrc: "/images/companies/google.svg", name: "Google" },
  { imgSrc: "/images/companies/hubspot.svg", name: "HubSpot" },
  { imgSrc: "/images/companies/microsoft.svg", name: "Microsoft" },
  { imgSrc: "/images/companies/walmart.svg", name: "Walmart" },
  { imgSrc: "/images/companies/airbnb.svg", name: "Airbnb" },
];

export const courseData: {
  heading: string;
  imgSrc: string;
  description: string;
  students: number;
  classes: number;
}[] = [
  {
    heading: "CCSA - Certified Cyber Security Associate",
    imgSrc: "/images/companies/jbc.png",
    description:
      "Certified Cybersecurity Associate is a fully practical course focused on offensive security. Learn ethical hacking, real-world attack techniques, and how to think like a hacker to build a strong foundation in cybersecurity.",
    students: 150,
    classes: 12,
  },
  {
    heading: "CCSA+ Internship",
    imgSrc: "/images/companies/jbc.png",
    description:
      "Certified Cybersecurity Associate + Internship is a fully practical, offensive security-focused program designed to teach you real-world ethical hacking and penetration testing skills. After the training, eligible students will work on hands-on projects during the internship, gaining real-time experience and applying what they've learned in live environments—preparing you for a strong start in the cybersecurity field.",
    students: 130,
    classes: 12,
  },
  {
    heading: "Certified Cyber Security Specialist (CCSS)",
    imgSrc: "/images/companies/jbc.png",
    description:
      "Cybersecurity Specialist is a fully practical program covering both offensive and defensive security. Learn to hack like an attacker and defend like a pro through real-world, hands-on training designed to build complete cybersecurity expertise.",
    students: 120,
    classes: 12,
  },
  {
    heading: "Advanced Diploma in Purple Teaming (ADPT)",
    imgSrc: "/images/companies/jbc.png",
    description:
      "Advanced Diploma in Purple Teaming is a fully practical program that combines both offensive (red team) and defensive (blue team) techniques to build complete cybersecurity skills. You'll learn real-world attack and defense strategies through hands-on training. Eligible students will also work on live internship projects based on their performance, gaining valuable, real-time experience in purple teaming operations.",
    students: 150,
    classes: 12,
  },
  {
    heading: "Certified Ethical Hacker (CEH) – 1 Month Training",
    imgSrc: "/images/companies/jbc.png",
    description:
      "The CEH certification by EC-Council validates ethical hacking skills. This 1-month intensive course covers key hacking techniques, tools like Metasploit and Nmap, and hands-on labs, preparing you to pass the CEH exam and excel in penetration testing.",
    students: 150,
    classes: 12,
  },
  {
    heading: "We Launch Delia Webflow this Week!",
    imgSrc: "/images/companies/jbc.png",
    description:
      "A quick course on launching a secure, high-performance website using Webflow.",
    students: 150,
    classes: 12,
  },
];

export const MentorData: {
  profession: string;
  name: string;
  imgSrc: string;
}[] = [
  {
    profession: "Senior UX Designer",
    name: "Shoo Thar Mien",
    imgSrc: "/images/mentor/ashi-removebg-preview (1).png",
  },
  {
    profession: "Senior UX Designer",
    name: "Shoo Thar Mien",
    imgSrc: "/images/mentor/ashi-removebg-preview (1).png",
  },
  {
    profession: "Senior UX Designer",
    name: "Shoo Thar Mien",
    imgSrc: "/images/mentor/ashi-removebg-preview (1).png",
  },
  {
    profession: "Senior UX Designer",
    name: "Shoo Thar Mien",
    imgSrc: "/images/mentor/ashi-removebg-preview (1).png",
  },
  {
    profession: "Senior UX Designer",
    name: "Shoo Thar Mien",
    imgSrc: "/images/mentor/ashi-removebg-preview (1).png",
  },
  {
    profession: "Senior UX Designer",
    name: "Shoo Thar Mien",
    imgSrc: "/images/mentor/ashi-removebg-preview (1).png",
  },
];

export const TestimonialData: {
  profession: string;
  comment: string;
  imgSrc: string;
  name: string;
  rating: number;
}[] = [
  {
    name: "Robert Fox",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc: "/images/testimonial/user.svg",
    rating: 5,
  },
  {
    name: "Leslie Alexander",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc: "/images/mentor/user2.png",
    rating: 5,
  },
  {
    name: "Cody Fisher",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc: "/images/mentor/user3.png",
    rating: 5,
  },
  {
    name: "Robert Fox",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc: "/images/mentor/user1.png",
    rating: 5,
  },
  {
    name: "Leslie Alexander",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc: "/images/mentor/user2.png",
    rating: 5,
  },
  {
    name: "Cody Fisher",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc: "/images/mentor/user3.png",
    rating: 5,
  },
];
// app/api/data.tsx

export const courses = [
  {
    slug: "advanced-diploma-in-purple-teaming-adpt",
    title: "Advanced Diploma in purple teaming (ADPT)",
    hours: " 10 months",
    lessons: "12 lessons",
    image: "/images/courses/incident-response.jpg",
    details:
      " Advanced Diploma in Purple Teaming is a fully practical program that combines both offensive (red team) and defensive (blue team) techniques to build complete cybersecurity skills. You'll learn real-world attack and defense strategies through hands-on training. Eligible students will also work on live internship projects based on their performance, gaining valuable, real-time experience in purple teaming operations.",
    whatYouLearn: [
      "Incident detection and response",
      "Digital forensics fundamentals",
      "Evidence collection and preservation",
      "Analyzing and reporting incidents",
    ],
    modules: [
      "Incident Response Planning",
      "Forensic Investigation Techniques",
      "Data Collection and Preservation",
      "Incident Analysis and Reporting",
    ],
    careerOpportunities:
      "Incident Responder, Digital Forensics Analyst, Cyber Threat Analyst.",
    certificate: "Professional Certificate in Incident Response and Forensics.",
  },
  {
    slug: "cca-plus-internship",
    title: "CCA+ Internship",
    hours: "5 months",
    lessons: "18 lessons",
    image: "/images/courses/ethical-hacking.jpg",
    details:
      "Certified Cybersecurity Associate + Internship is a fully practical, offensive security-focused program designed to teach you real-world ethical hacking and penetration testing skills. After the training, eligible students will work on hands-on projects during the internship, gaining real-time experience and applying what they've learned in live environments—preparing you for a strong start in the cybersecurity field.",
    whatYouLearn: [
      "Ethical hacking fundamentals",
      "Penetration testing techniques",
      "Using Kali Linux and Metasploit",
      "Vulnerability scanning and assessment",
    ],
    modules: [
      "Ethical Hacking Overview",
      "Penetration Testing Methodologies",
      "Kali Linux Essentials",
      "Metasploit Framework",
      "Vulnerability Scanning",
    ],
    careerOpportunities:
      "Penetration Tester, Ethical Hacker, Red Team Specialist, Vulnerability Analyst.",
    certificate:
      "Industry-recognized Certificate in Ethical Hacking and Penetration Testing.",
  },
  {
    slug: "cca-certified-cyber-security-associate",
    title: "CCA - Certified Cyber Security Associate",
    hours: "2 months",
    lessons: "20 lessons",
    image: "/images/courses/cyber.jpg",
    details:
      "Certified Cybersecurity Associate is a fully practical course focused on offensive security. Learn ethical hacking, real-world attack techniques, and how to think like a hacker to build a strong foundation in cybersecurity.",
    whatYouLearn: [
      "Information Security Introduction",
      "Linux Fundamentals",
      "Networking",
      "Vulnerability assessment",
      "Using Metasploitframework",
      "Attacking common services",
      "Web application Hacking",
    ],
    modules: [
      "CIA/AAA",
      "Hacker’s and its type",
      "Types of Testing",
      "Ethical Hacking",
      "Shell",
      "Basic navigation commands",
      "Permission management",
      "User management",
      "Packet management",
      "Services and Process management",
      "Networking standard",
      "IP address",
      "Subnetting",
      "Network address translation and PAT",
      "Common protocols and port numbers",
      "CISCO packet tracer",
      "Vulnerability Research and Analysis",
      "CVE and CVSS",
      "Nessus scanning and output",
      "OpenVAS",
      "Modules",
      "Sessions and Jobs",
      "Meterpreter",
      "The concept of Attack",
      "Service Misconfigurations",
      "Finding sensitive information",
      "Attacking FTP",
      "Attacking SMB",
      "Attacking HTTP",
      "Web application structure and web Requests",
      "Using Web proxies (burp, zap, Caido)",
      "Cross-site scripting",
      "SQL Injection",
      "Command Injection",
      "File Upload",
      "SSRF",
      "Login Brute Forcing",
      "Broken Authentication",
      "Session Security",
      "File Inclusion Vulnerability",
      "Web Attacks",
      "Documentation and Reporting",
      "Bug Bounty hunting process",
    ],
    careerOpportunities:
      "Entry-level roles in cybersecurity support, SOC teams, and junior analyst positions.",
    certificate:
      "Certificate of Completion recognized by industry professionals in cybersecurity.",
  },

  {
    slug: "certified-cyber-security-specialist-ccs",
    title: "Certified Cyber Security Specialist (CCS)",
    hours: "4 months",
    lessons: "15 lessons",
    image: "/images/courses/network-security.jpg",
    details:
      "Cybersecurity Specialist is a fully practical program covering both offensive and defensive security. Learn to hack like an attacker and defend like a pro through real-world, hands-on training designed to build complete cybersecurity expertise.",
    whatYouLearn: [
      "Network security principles",
      "Firewall configuration",
      "VPN setup and management",
      "Network traffic monitoring",
    ],
    modules: [
      "Introduction to Network Security",
      "Firewalls and Access Control",
      "VPNs and Remote Access",
      "Network Monitoring and Analysis",
    ],
    careerOpportunities:
      "Network Administrator, SOC Analyst, IT Support Engineer.",
    certificate: "Certificate of Completion in Network Security Fundamentals.",
  },

  {
    slug: "certified-ethical-hacker-ceh-1-month-training",
    title: "Certified Ethical Hacker (CEH) – 1 Month Training",
    hours: "1 Month Training",
    lessons: "14 lessons",
    image: "/images/courses/cloud-security.jpg",
    details:
      "The CEH certification by EC-Council validates ethical hacking skills. This 1-month intensive course covers key hacking techniques, tools like Metasploit and Nmap, and hands-on labs, preparing you to pass the CEH exam and excel in penetration testing.",
    whatYouLearn: [
      "Cloud computing basics",
      "Cloud security challenges",
      "AWS, Azure, and GCP security features",
      "Identity and access management in cloud",
    ],
    modules: [
      "Introduction to Cloud Computing",
      "Cloud Security Concepts",
      "AWS Security Services",
      "Azure Security Fundamentals",
      "Google Cloud Security",
    ],
    careerOpportunities:
      "Cloud Security Engineer, Cloud Architect, DevSecOps Engineer.",
    certificate: "Certificate in Cloud Security Fundamentals upon completion.",
  },
  {
    slug: "6-months-Internship",
    title: "6 months Internship",
    hours: "6 months",
    lessons: "20 lessons",
    image: "/images/courses/certification-prep.jpg",
    details:
      "6-Month Cybersecurity Internship is a fully practical program focused on both offensive and defensive security. Gain real-world experience through hands-on training, live attack and defense scenarios, and work on real projects based on your performance and eligibility—perfect for building strong, job-ready skills in cybersecurity.",
    whatYouLearn: [
      "Certification exam strategies",
      "CompTIA Security+ core topics",
      "CISSP domains overview",
      "Certified Ethical Hacker essentials",
    ],
    modules: [
      "CompTIA Security+ Preparation",
      "CISSP Exam Domains",
      "CEH Exam Coverage",
      "Practice Tests and Tips",
    ],
    careerOpportunities:
      "Security+ Certified Analyst, CISSP Professional, CEH Ethical Hacker, InfoSec Manager.",
    certificate:
      "Certificate of Completion and exam readiness badge for Security+, CISSP, and CEH.",
  },
  {
    slug: "1-month-Internshipfor-students",
    title: "1 month Internship for students",
    hours: "1 months",
    lessons: "20 lessons",
    image: "/images/courses/certification-prep.jpg",
    details:
      "6-Month Cybersecurity Internship is a fully practical program focused on both offensive and defensive security. Gain real-world experience through hands-on training, live attack and defense scenarios, and work on real projects based on your performance and eligibility—perfect for building strong, job-ready skills in cybersecurity.",
    whatYouLearn: [
      "Certification exam strategies",
      "CompTIA Security+ core topics",
      "CISSP domains overview",
      "Certified Ethical Hacker essentials",
    ],
    modules: [
      "CompTIA Security+ Preparation",
      "CISSP Exam Domains",
      "CEH Exam Coverage",
      "Practice Tests and Tips",
    ],
    careerOpportunities:
      "Security+ Certified Analyst, CISSP Professional, CEH Ethical Hacker, InfoSec Manager.",
    certificate:
      "Certificate of Completion and exam readiness badge for Security+, CISSP, and CEH.",
  },
];
