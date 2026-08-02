export const COMPANY = {
  name: "Omkar Enterprise",
  tagline: "The Road to Safety Starts With U",
  phone: "+91 9673 66 4411",
  phoneRaw: "+919673664411",
  whatsapp: "919673664411",
  email: "omkarenterprises@gmail.com",
  gst: "27AKAPG1826C1ZS",
  address:
    "Shop No. 7, Vora Plaza, Navghar, Vasai (East), Dist. Palghar - 401203, Maharashtra, India",
  mapEmbed:
    "https://www.google.com/maps?q=Vora%20Plaza%2C%20Navghar%2C%20Vasai%20East%2C%20Palghar%20401203&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Vora+Plaza+Navghar+Vasai+East+Palghar+401203",
} as const;

export const NAV = [
  { id: "home", key: "nav.home" },
  { id: "about", key: "nav.about" },
  { id: "services", key: "nav.services" },
  { id: "gallery", key: "nav.gallery" },
  { id: "why", key: "nav.why" },
  { id: "contact", key: "nav.contact" },
] as const;
