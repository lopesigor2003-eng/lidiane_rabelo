export interface SpecialityItem {
  id: string;
  category: "access" | "business" | "options" | "amenities" | "planning" | "parking";
  label: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  avatar: string;
  rating: number;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
}
