export type NavTab = 'home' | 'about' | 'mou' | 'stories' | 'gallery' | 'contact';

export interface StatItem {
  label: string;
  value: string;
  description: string;
}

export interface CurriculumItem {
  id: string;
  category: 'school' | 'festival' | 'corporate' | 'certificate';
  title: string;
  subtitle: string;
  target: string;
  duration: string;
  description: string;
  highlights: string[];
  tag: string;
}

export interface InstructorStory {
  id: string;
  name: string;
  role: string;
  category: 'flea' | 'school' | 'mou' | 'studio';
  title: string;
  quote: string;
  story: string;
  location: string;
  outcomes: string[];
  badge: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'food' | 'roombox' | 'traditional' | 'kit';
  categoryLabel: string;
  author: string;
  description: string;
  image: string;
  tags: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'mou' | 'instructor' | 'kit' | 'general';
}

export interface ConsultationFormData {
  organizationName: string;
  contactName: string;
  phone: string;
  email: string;
  inquiryType: string;
  targetAudience: string;
  expectedParticipants: string;
  preferredDate: string;
  message: string;
}
