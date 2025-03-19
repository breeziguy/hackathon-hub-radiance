import React from 'react';
import { Database, Server, Globe, LucideIcon } from 'lucide-react';
type SponsorType = 'platinum' | 'gold' | 'silver' | 'bronze';
type Sponsor = {
  id: number;
  name: string;
  type: SponsorType;
  src: string;
  alt: string;
  icon: LucideIcon;
  placeholder?: boolean;
};
const sponsors: Sponsor[] = [{
  id: 1,
  name: 'Supabase',
  type: 'platinum',
  src: '/placeholder.svg',
  alt: 'Supabase logo',
  icon: Database,
  placeholder: true
}, {
  id: 2,
  name: 'Netlify',
  type: 'platinum',
  src: '/placeholder.svg',
  alt: 'Netlify logo',
  icon: Server,
  placeholder: true
}, {
  id: 3,
  name: 'CloudflareDev',
  type: 'gold',
  src: '/placeholder.svg',
  alt: 'CloudflareDev logo',
  icon: Globe,
  placeholder: true
}, {
  id: 4,
  name: 'GetSentry',
  type: 'gold',
  src: '/placeholder.svg',
  alt: 'GetSentry logo',
  icon: Server,
  placeholder: true
}, {
  id: 5,
  name: 'Loops',
  type: 'silver',
  src: '/placeholder.svg',
  alt: 'Loops logo',
  icon: Database,
  placeholder: true
}, {
  id: 6,
  name: 'AlgoFoundation',
  type: 'silver',
  src: '/placeholder.svg',
  alt: 'AlgoFoundation logo',
  icon: Globe,
  placeholder: true
}];
const Sponsors = () => {
  return;
};
export default Sponsors;