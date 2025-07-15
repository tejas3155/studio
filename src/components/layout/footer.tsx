import { Logo } from '@/components/logo';
import { Twitter, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

const footerLinks = {
  'Product': [
    { title: 'AI', href: '#' },
    { title: 'Docs', href: '#' },
    { title: 'Wikis', href: '#' },
    { title: 'Projects', href: '#' },
    { title: 'Pricing', href: '#' },
  ],
  'Solutions': [
    { title: 'Enterprise', href: '#' },
    { title: 'Small business', href: '#' },
    { title: 'Personal use', href: '#' },
    { title: 'Remote work', href: '#' },
    { title: 'Startups', href: '#' },
  ],
  'Download': [
    { title: 'iOS & Android', href: '#' },
    { title: 'Mac & Windows', href: '#' },
    { title: 'Web Clipper', href: '#' },
  ],
  'Build': [
    { title: 'Integrations', href: '#' },
    { title: 'Templates', href: '#' },
    { title: 'API', href: '#' },
  ],
  'Learn': [
    { title: 'Customer stories', href: '#' },
    { title: 'Help center', href: '#' },
    { title: 'Webinars', href: '#' },
    { title: 'Blog', href: '#' },
  ],
  'Get Started': [
    { title: 'Request a demo', href: '#' },
    { title: 'Switch from...', href: '#' },
    { title: 'Log in', href: '/login' },
    { title: 'Register', href: '/register' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: '#', name: 'Twitter' },
  { icon: Linkedin, href: '#', name: 'LinkedIn' },
  { icon: Github, href: '#', name: 'GitHub' },
];

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-7">
          <div className="col-span-2 lg:col-span-1">
            <Logo />
            <div className="mt-4 flex space-x-4">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.href} className="text-muted-foreground hover:text-foreground" aria-label={social.name}>
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground">{category}</h3>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.title}>
                    <Link href={link.href} className="text-muted-foreground hover:text-foreground">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t pt-8 text-sm text-muted-foreground">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p>&copy; {new Date().getFullYear()} CoperVise, Inc. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
              <Link href="#" className="hover:text-foreground">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
