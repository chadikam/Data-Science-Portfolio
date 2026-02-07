import { Terminal, Github, Linkedin } from './Icons';

const footerLinks = {
  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ],
  social: [
    { label: 'GitHub', href: 'https://github.com/chadikam', icon: Github },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/chadi-kammoun/', icon: Linkedin },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#home" className="flex items-center gap-2 text-foreground">
              <Terminal className="h-6 w-6 text-primary" />
              <span className="font-semibold text-lg">Portfolio</span>
            </a>
            <p className="text-sm text-muted-foreground max-w-xs">
              Passionate about data science, AI, and building intelligent systems that solve real-world problems. Let's collaborate on transforming data into insights.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.navigation.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {footerLinks.social.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Feel free to reach out anytime!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex justify-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Chadi Kammoun. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
