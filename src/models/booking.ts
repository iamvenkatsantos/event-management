export interface ITicketTier {
  id: string;
  name: 'Premium' | 'Gold' | 'Silver';
  price: number;
  description: string;
  available: boolean;
  totalSeats?: number;
  availableSeats?: number;
}

export interface ICastMember {
  id: string;
  name: string;
  role: string;
  imageUrl?: string;
}

export interface IBookingItem {
  ticketTier: ITicketTier;
  quantity: number;
  subtotal: number;
}

export interface IPaymentBreakdown {
  items: IBookingItem[];
  subtotal: number;
  gst: number;
  sgst: number;
  convenienceFee: number;
  total: number;
}

export interface IBookingDetails {
  id: string;
  eventId: string;
  eventName: string;
  eventDateTime: string;
  bookingItems: IBookingItem[];
  paymentBreakdown: IPaymentBreakdown;
  bookingStatus: 'pending' | 'confirmed' | 'cancelled';
  bookingDate: string;
  totalAmount: number;
}

export interface IEventDetails {
  id: string;
  name: string;
  rating: number;
  latitude: number;
  longitude: number;
  address: string;
  description: string;
  bannerImage?: string;
  totalBookings: number;
  totalMembers: number;
  castAndCrew: ICastMember[];
  ticketTiers: ITicketTier[];
  eventDateTime: string;
  duration?: string;
}
