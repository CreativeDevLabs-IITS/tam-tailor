// All wording, contact details and lists for the site live here. Edit this file and rebuild.

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://tamtailor.weebly.com").replace(/\/$/, "");

export const site = {
  name: "Tam Custom Tailor",
  street: "802 Ellice Avenue",
  city: "Winnipeg",
  region: "Manitoba",
  regionShort: "MB",
  postal: "R3G 0B9",
  phone: "204-775-1160",
  email: "tamnguyen22@hotmail.com",
  timeZone: "America/Winnipeg",
};

export const telHref = (p: string) => `tel:+1${p.replace(/\D/g, "")}`;
export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.street}, ${site.city}, ${site.regionShort} ${site.postal}`,
)}`;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/custom-clothing/", label: "Custom Clothing" },
  { href: "/adaptive-clothing/", label: "Adaptive Clothing" },
  { href: "/contact/", label: "Contact" },
];

// Opening hours, Sunday = 0. Minutes are from midnight; null = closed.
export const hours: { day: string; label: string; open: [number, number] | null }[] = [
  { day: "Monday", label: "9:00 am to 6:00 pm", open: [540, 1080] },
  { day: "Tuesday", label: "9:00 am to 6:00 pm", open: [540, 1080] },
  { day: "Wednesday", label: "9:00 am to 6:00 pm", open: [540, 1080] },
  { day: "Thursday", label: "9:00 am to 6:00 pm", open: [540, 1080] },
  { day: "Friday", label: "9:00 am to 6:00 pm", open: [540, 1080] },
  { day: "Saturday", label: "9:00 am to 4:00 pm", open: [540, 960] },
  { day: "Sunday", label: "Closed", open: null },
];

export const intro =
  "At Tam Custom Tailor, our tailors help you look your best. We create one-of-a-kind custom clothing for men, women and children, as well as perform expert alterations and recuts. We also offer skilled fur restyling and repairs to leather garments.";

export const services = [
  { title: "Custom suits and shirts", text: "Made to measure for both men and women." },
  { title: "Dresses and formalwear", text: "Custom design, including prom dresses and bridesmaids' dresses." },
  { title: "Pageant dresses and costumes", text: "Beauty pageant dresses and dance recital costumes." },
  { title: "Alterations and recuts", text: "Including beaded and sequined garments." },
  { title: "Adaptive clothing", text: "Independent dressing solutions for individuals with unique needs." },
  { title: "Monogramming", text: "Make a garment unmistakably yours." },
  { title: "Invisible reweaving", text: "Repairs that disappear into the cloth." },
];

export const fabrics = ["Wool", "Silk", "Blends", "Oxford", "Broadcloth", "Denim", "Twill", "Chambray", "Poplin"];

export const customSuits = {
  title: "Custom-made suits and shirts for both men and women",
  paragraphs: [
    "Come to our shop and choose from a fashionable selection of pattern styles and a generous assortment of fabrics. Our patterns range from traditional to modern and our swatch books provide a wide assortment of fabrics from elegant to casual in wool, silk, blends, oxford, broadcloth, denim, twill, chambray, poplin and more.",
    "Our master tailors will take your specific measurements to ensure a perfect fit for the finished garment. Orders are generally filled within four weeks.",
    "In addition, we will keep your measurements on file for future orders. When you're asked what you would like for your birthday or other occasions, refer gift-givers to us!",
  ],
  travel: "Are you a frequent traveler or a resident in two locations? For your convenience, we offer worldwide shipping for custom orders.",
};

export const customDesign = {
  title: "Custom design",
  text: "We design and sew a variety of custom-made garments including blouses, bridal gowns, costumes, uniforms and much more. You can bring us your pattern and fabric, or we can help you make a selection based on your budget and help you create a custom pattern using just a picture as a sample. At Tam Custom Tailor, we are committed to the highest standard of fine dressmaking to create a garment that is fitting and made just for you.",
  lead: "Our customers continue to be delighted with the following custom designed garments:",
  garments: [
    "Dresses, skirts and blouses",
    "Formal gowns and prom dresses",
    "Bridal gowns",
    "Bridesmaids dresses",
    "Beauty pageant dresses",
    "Dance recital costumes",
    "Halloween costumes",
  ],
};

export const orderSteps = [
  { title: "Choose", text: "Pick a pattern style and a fabric from our swatch books, or bring your own pattern and cloth." },
  { title: "Measure", text: "Our master tailors take your specific measurements. We keep them on file for next time." },
  { title: "Make", text: "Your garment is cut and sewn just for you. Orders are generally filled within four weeks." },
  { title: "Wear", text: "Collect it in the shop, or have it shipped. We offer worldwide shipping for custom orders." },
];

export const adaptive = {
  lead: "Tam Custom Tailor is pleased to now offer custom adaptive clothing.",
  points: [
    "Independent dressing solutions that utilize snaps, zippers, front, side and rear openings for all ages",
    "Clothing that offers comfort and style with cost in mind",
    "A wide variety of clothing ranging from socks to jackets in both men's and women's fashion",
    "Clothing personalized by need. If you have arthritis or are wheelchair bound, we have stylish and comfortable clothing to suit your specific needs",
  ],
};
