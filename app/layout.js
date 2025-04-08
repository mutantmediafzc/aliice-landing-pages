import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Aesthetics - Plastic Surgery & Aesthetic Medicine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/fontawesome.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/animated-text.css" />
        <link rel="stylesheet" href="/assets/css/slick.min.css" />
        <link rel="stylesheet" href="/assets/css/light_gallery.min.css" />
        <link rel="stylesheet" href="/assets/css/odometer.css" />
        <link rel="stylesheet" href="/assets/css/timepicker.min.css" />
        <link rel="stylesheet" href="/assets/css/jquery-ui.min.css" />
        <link rel="stylesheet" href="/assets/css/select2.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />
      </head>

      <body>
        {children}

        <Script
          src="https://cdn.jsdelivr.net/npm/sweetalert2@11"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/jquery-3.6.0.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/wow.min.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/jquery.slick.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/light_gallery.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/odometer.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/isotope.pkg.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/jquery-timepicker.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/jquery-ui.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/select2.min.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/animated-text.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/ripple.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/YTPlayer.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/fetch-services.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
