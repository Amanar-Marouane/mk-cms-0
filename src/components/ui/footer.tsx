import Link from 'next/link';
import { Logo } from './logo';

const Footer = ({ className = "" }) => {
  const navigationLinks = [
    { title: 'Home', href: '/' },
    { title: 'Technology', href: '/technology' },
    { title: 'How It Works', href: '/how-it-works' },
    { title: 'Business Model', href: '/business-model' },
    { title: 'About', href: '/about' },
    { title: 'Investors', href: '/investors' },
    { title: 'Contact', href: '/contact' },
  ];

  return (
    <footer className={`border-t border-gray-800/20 bg-background/95 backdrop-blur-sm py-12 mt-auto ${className}`}>
      <div className='container mx-auto px-6'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex flex-col space-y-4">
              <Logo variant="monkeyscms" height={30} />
              <p className='text-sm text-muted-foreground max-w-md'>
                AI-Powered CMS that generates and optimizes websites in seconds
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-sm font-medium mb-4 regal-gradient-text">Quick Links</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-y-2 gap-x-4">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-sm font-medium mb-4 regal-gradient-text">Stay Updated</h3>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Subscribe to our newsletter for updates
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-md border border-gray-800/20 bg-background/50 px-3 py-2 text-sm min-w-0"
                />
                <button className="rounded-md regal-gradient-bg px-3 py-2 text-sm font-medium text-background hover:opacity-90 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/20 pt-6 flex flex-col md:flex-row justify-center items-center gap-4 text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            © MonkeysLegion {new Date().getFullYear()} – <span className="regal-gradient-text">AI-Powered CMS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;