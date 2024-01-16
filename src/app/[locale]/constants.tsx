interface topSectionHeader {
  title: string;
  link: string;
}

export const topSectionHeader: topSectionHeader[] = [
  {
    title: "Subscribe",
    link: "https://bestpractice.bmj.com/info/subscribe",
  },
  {
    title: "Access through your institution",
    link: "https://bestpractice.bmj.com/access-through-your-institution",
  },
  {
    title: "Log in",
    link: "https://bestpractice.bmj.com/login",
  },
];

interface NavItem {
  title: string;
  link: string;
  dropdown?: NavItem[];
}

export const loggedOutNav: NavItem[] = [
  {
    title: "About us",
    link: "/whats-new",
  },
  {
    title: "Who we help",
    link: "/how-to-use-bmj-best-practice",
  },
  {
    title: "How we help",
    link: "/how-to-use-bmj-best-practice",
  },
  {
    title: "Browse clinical content",
    link: "/how-to-use-bmj-best-practice",
  },
  {
    title: "What’s new",
    link: "/how-to-use-bmj-best-practice",
  },
  {
    title: "Access",
    link: "/how-to-use-bmj-best-practice",
  },
  {
    title: "Help",
    link: "/how-to-use-bmj-best-practice",
  },
];

export interface Link {
  title?: string;
  link?: string;
}

export interface FooterSection {
  section: string;
  links: Link[];
}

export const footerLinks: FooterSection[] = [
  {
    section: "Browse",
    links: [
      { title: "Home", link: "/home" },
      { title: "Recent updates", link: "/recent-updates" },
      { title: "Specialties", link: "/specialties" },
      { title: "Calculators", link: "/calculators" },
      { title: "Patient leaflets", link: "/patient-leaflets" },
      { title: "Procedural videos", link: "/procedural-videos" },
      { title: "Evidence", link: "/evidence" },
      { title: "Drugs", link: "/drugs" },
    ],
  },
  {
    section: "Services",
    links: [
      { title: "Log in", link: "/log-in" },
      { title: "Free trial", link: "/free-trial" },
      { title: "Subscribe", link: "/subscribe" },
      { title: "About us", link: "/about-us" },
      { title: "About CME/CPD", link: "/about-cme-cpd" },
      { title: "Contact us", link: "/contact-us" },
    ],
  },
  {
    section: "Legal",
    links: [
      { title: "Legal", link: "/legal" },
      { title: "Disclaimer", link: "/disclaimer" },
      { title: "Terms and conditions", link: "/terms-and-conditions" },
      { title: "Privacy notice", link: "/privacy-notice" },
      { title: "Cookie policy", link: "/cookie-policy" },
      { title: "Accessibily", link: "/accessibility" },
    ],
  },
];

interface SocialMediaLinks {
  link: string;
  image: string;
}

export const footerSocialMediaLinks: SocialMediaLinks[] = [
  {
    link: "https://www.facebook.com/bmjbestpractice/",
    image: "/images/icon-facebook.png",
  },
  {
    link: "https://twitter.com/bmj_latest",
    image: "/images/icon-twitter.png",
  },
  {
    link: "https://www.linkedin.com/company/bmj/",
    image: "/images/icon-linkedin.png",
  },
  {
    link: "https://www.youtube.com/user/bmjgroup",
    image: "/images/icon-youtube.png",
  },
];
