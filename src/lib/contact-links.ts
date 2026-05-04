const bookingFallbackSubject = "Book a call with Dr. Sahil Haria, PhD";
const bookingFallbackBody =
  "Hi Sahil,%0D%0A%0D%0AI came from your portfolio and would like to book a short call.%0D%0A%0D%0AWhat I am exploring:%0D%0AStage:%0D%0ABest times:%0D%0A%0D%0A";
const defaultBookingUrl = "https://calendar.app.google/gJe3uipGZPyMipvXA";

export const email = "sahilaharia@gmail.com";
export const linkedinUrl = "https://www.linkedin.com/in/sahilharia92/";
export const whatsappUrl =
  "https://wa.me/15107665873?text=Hi%20Sahil%2C%20I%20came%20from%20your%20portfolio%20website%20and%20wanted%20to%20connect.";

export const bookingUrl =
  process.env.NEXT_PUBLIC_BOOKING_URL?.trim() ||
  defaultBookingUrl ||
  `mailto:${email}?subject=${encodeURIComponent(bookingFallbackSubject)}&body=${bookingFallbackBody}`;

export const hasBookingUrl = Boolean(process.env.NEXT_PUBLIC_BOOKING_URL?.trim() || defaultBookingUrl);
