// import austereLogoRectangle from '@/assets/logos/austere/austere-logo-rectangle.svg';

import type { WebsiteConfig } from "@/lib/types";
import logo from '@/assets/logos/austere/austere-logo-rectangle.svg';
import bgImage from '@/assets/images/stock/desert-vehicles-convoy.webp';

// Social Icons
import IconMail from '@/assets/icons/IconMail.astro';
import IconLinkedin from '@/assets/icons/IconLinkedin.astro';
import IconTwitter from '@/assets/icons/IconTwitter.astro';
import { consultants, courses, products, sectors, services } from "./src/content";


// import { version } from "../package.json"


export const config: WebsiteConfig = {
  company: {
    name: 'Austere Risk Pty Ltd',
    abn: '34632094396',
    acn: '632094396',
    social: [
      {
        label: 'Email',
        href: 'mailto:contact@austererisk.com',
        icon: IconMail,
      },
      {
        label: 'LinkedIn',
        href: 'https://linkedin.com/company/austererisk',
        icon: IconLinkedin,
      },
      {
        label: 'Twitter',
        href: 'https://twitter.com/austererisk',
        icon: IconTwitter,
      },
    ],
  },
  site: {
    url: 'https://austererisk.com',
    canonical: 'https://www.austererisk.com',
    title: 'Austere Risk',
    aptabaseKey: 'A-EU-2922423219',
    pocketbaseInstance: 'austererisk-com',
    version: '1.0.0',
    logo: logo,
    backgroundImage: bgImage,
    headline: 'Navigate Risk in Remote and Complex Environments',
    description:
      'Safety, medical and security support for safe and effective teams. Austere Risk delivers a range of consulting, on-location, training, and software solutions for teams working in difficult, dynamic and austere regions of the world.',
    color: '#93481b',
    keywords:
      "'medical, expedition, safety, security, security risk, travel risk, journey management, communications, offline apps, conflict,disaster, first-aid, wilderness first-aid, first aid'",
    cta: {
      title: 'Discuss Your Project',
      description:
        'Get in touch for a no-obligation chat about delivering a safe and effective project',
      action: '/contact',
    },
    header: {
      links: [
        {
          href: '/',
          label: 'Home',
        },
        {
          href: '/about',
          label: 'About',
        },
        {
          href: '/services',
          label: 'Services',
          children: services.map((item) => ({
            label: item.data.title,
            href: `/services/${item.slug}`,
          })),
        },
        {
          href: '/sectors',
          label: 'Sectors',
          children: sectors.map((item) => ({
            label: item.data.title,
            href: `/sectors/${item.slug}`,
          })),
        },
        {
          href: '/courses',
          label: 'Courses',
          children: courses.map((item) => ({
            label: item.data.title,
            href: `/courses/${item.slug}`,
          })),
        },
        {
          href: '/products',
          label: 'Products',
          children: products.map((item) => ({
            label: item.data.title,
            href: `/products/${item.slug}`,
          })),
        },
        {
          href: '/consultants',
          label: 'Consultants',
          children: consultants.map((item) => ({
            label: item.data.name,
            href: `/consultants/${item.slug}`,
          })),
        },
        {
          href: '/contact',
          label: 'Contact',
        }
      ]
    },
    footer: {
      links: [
        {
          href: '/docs',
          label: 'Knowledge Base',
        },
        {
          href: '/privacy/website',
          label: 'Privacy Policy',
        },
        {
          href: '/terms-conditions/website',
          label: 'Terms & Conditions',
        },
      ],
      associations: [
        {
          text: 'Proudly supporting',
          // logo: exrmedLogo,
          href: 'https://exrmed.org',
          alt: 'exrmed-logo',
        },
      ],
    },

    collections: {
      about: {
        title: 'About',
        description: 'About Austere Risk and our mission',
      },
      services: {
        title: 'Services',
        description: ' A full-compliment of services to support safe and effective teams',
      },
      sectors: {
        title: 'Sectors',
        description: 'Supporting a range of sectors to achieve mission success',
      },
      products: {
        title: 'Products',
        description: 'Products to support the mission; wherever that may be',
      },
      consultants: {
        title: 'Consultants',
        description: 'Experienced and qualified consultants to support your projects',
      },
      articles: {
        title: 'Articles',
        description: 'Articles from the field across a range of environments and industries',
      },
      docs: {
        title: 'Knowledge Base',
        description: 'Technical and legal documents covering our services and products',
      },
      toolbox: {
        title: '',
        description: '',
      },
      courses: {
        title: 'Courses',
        description: 'Accredited and non-accredited courses to prepare your team for the unexpected',
      },
    },

    notFoundMessage: 'The page you attempted to navigate to was not found.',
  },
};