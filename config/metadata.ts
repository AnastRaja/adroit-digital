import { Metadata } from "next"

export const defaultMetadata: Metadata = {
  title: {
    default: "The Best Digital Marketing Company | Adroits Digital",
    template: "%s | Adroits Digital",
  },
  description:
    "We are experts in making you a brand. As the best Digital marketing company, we help you grow your business to the top level. Join us.",
  keywords: [
    "Digital marketing company",
    "top digital marketing company",
    "best digital marketing company",
    "digital marketing services",
    "web3 marketing",
    "web3 marketing service",
    "branding",
  ],
  openGraph: {
    locale: "en_US",
    type: "website",
    title: "Best Digital Marketing Company",
    description:
      "We have the best track record of providing digital marketing services to over 80+ clients globally.",
    url: "https://adroitsdigital.com",
    siteName: "Adroits Digital - We make your brand shine online",
    images: [
      {
        url: "https://res.cloudinary.com/dfyggl4b0/image/upload/v1710183666/gemog2o0pki1d4vnsr76.jpg",
        width: 1200,
        height: 630,
        alt: "Adroits Digital OG Image",
      },
    ],
  },
  metadataBase: new URL("https://adroitsdigital.com"),
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: "/assets/images/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/assets/images/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: {
      url: "/assets/images/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
    shortcut: "/assets/images/favicon-16x16.png",
    other: [
      {
        rel: "mask-icon",
        url: "/images/safari-pinned-tab.html",
        color: "#E9204F",
      },
    ],
  },
  manifest: "/assets/images/site.webmanifest",
  verification: {
    google: "_hLxDCoNPqB2atuG2lyCKX6yriPVSMWkL4kM6JHml5Q",
  },
  themeColor: "#E9204F",
  applicationName: "Adroits Digital",
  // Additional meta tags (not directly supported by Next.js Metadata) can be handled via <Head> if needed
}
