const config = {
  // BUSINESS INFO
  businessName: "Jtb painting",
  phone: "",
  email: "Taborpainting508@gmail.com",

  // BRANDING
  logoUrl: "", // Provide your logo URL here
  showLogo: true,

  // BUTTONS
  contactButtonText: "Contact Us",

  // HEADER CONFIGURATION
  showNavLinks: false, // Toggle to show or hide the Home, Services, About Us, Contact buttons
  headerLinks: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
  ],
  headerBackground: "bg-white",
  headerBorder: "border-gray-200",
  headerTextColor: "text-gray-800",

  headerButtonBg: "bg-blue-600",
  headerButtonHover: "hover:bg-blue-700",
  headerButtonText: "text-white",

  // STYLE
  font: "font-sans",
  primaryColor: "blue-600",
  secondaryColor: "gray-200",

  // HERO SECTION
  heroTitle: "JTB painting",
  heroSubtitle:
    "Precision in Every Stroke. Excellence in Every Project.",
  heroUseImage: false,
  heroImage:
    "",
  heroBackgroundColor: "bg-blue-600",

  // ABOUT SECTION
  companyStory:
    "Founded by Jason Beirne after working with Student Painters, our company was built on hard work, quality craftsmanship, and a commitment to delivering outstanding results",

  mission:
    "To provide professional, high-quality painting services with excellent workmanship, reliable communication, and customer satisfaction on every project.",

  // WHAT WE DO
  whatWeDo:
    "JTB Painting specializes in delivering high-quality painting services with precision strokes, attention to detail, and lasting results that enhance the beauty of every property",

  // WHY CHOOSE US
  whyChooseUs:
    "We deliver exceptional painting results, complete projects on time, and treat every property with the care and attention it deserves.",

  // SERVICE AREAS
  serviceAreas: ["all over Massachusetts"],

  // MEDIA
  images: [
    "https://via.placeholder.com/400",
    "https://via.placeholder.com/400",
    "https://via.placeholder.com/400",
  ],

  video: "",

  // TESTIMONIALS
  testimonials: [
    {
      name: "Chris",
      stars: 5,
      review: "The room looks brand new!",
    },
    {
      name: "Mike",
      stars: 5,
      review: "these guys know what they are doing!",
    },
    {
      name: "Sarah",
      stars: 4,
      review: "Jason and his team were so resepctful and im gonna refer you guys for sure!",
    },
  ],

  googleReviewsLink: "",
};

export default config;
