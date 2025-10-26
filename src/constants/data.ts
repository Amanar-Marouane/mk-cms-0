export interface NavItem {
  title: string;
  url: string;
  icon: string;
  isActive?: boolean;
  shortcut?: string[];
  items?: NavItem[];
  permission?: string | null;
}

export const navItems: NavItem[] = [];

export interface NavLink {
  name: string;
  href: string;
}

// Navigation links for the site
export const navLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Technology', href: '/technology' },
  { name: 'For Investors', href: '/investors' },
  { name: 'Business Model', href: '/business-model' },
  { name: 'About', href: '/about' },
  // { name: 'Contact', href: '/contact' },
];
