export interface LeadFormInput {
  name: string;
  email: string;
  restaurantName: string;
  locations: number;
  phone: string;
  posSystem: string;
}

export interface DemoResponse {
  success: boolean;
  message: string;
  leadId: string;
}

export interface AdvisorRequest {
  concept: string;
  locations: number;
  bottleneck: string;
  posSystem: string;
}

export interface AdvisorResponse {
  advice: string;
  simulated?: boolean;
}

export interface MetricCard {
  id: string;
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  restaurant: string;
  improvement: string;
  rating: number;
  image: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  billing: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  badge: string;
  details: string[];
}
