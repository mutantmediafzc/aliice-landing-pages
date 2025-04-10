import "./globals.css";
import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./_universal-css/bootstrap.min.css";
import "./_universal-css/fontawesome.min.css";
import "./_universal-css/animate.css";
import "./_universal-css/animated-text.css";
import "./_universal-css/slick.min.css";
import "./_universal-css/light_gallery.min.css";
import "./_universal-css/odometer.css";
import "./_universal-css/timepicker.min.css";
import "./_universal-css/jquery-ui.min.css";
import "./_universal-css/select2.min.css";
import "./_universal-css/style.css";
import Script from "next/script";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-open-sans",
});

const ivyModeLight = localFont({
  src: "../public/assets/fonts/ivy-mode/IvyMode-Light.woff2",
  variable: "--font-ivy-mode-light",
  display: "swap",
});

const ivyModeReg = localFont({
  src: "../public/assets/fonts/ivy-mode/IvyMode-Regular.woff2",
  variable: "--font-ivy-mode-reg",
  display: "swap",
});

export const metadata = {
  title: "Aesthetics - Plastic Surgery & Aesthetic Medicine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />
      </head>

      <body
        className={`${openSans.variable} ${ivyModeLight.variable} ${ivyModeReg.variable} antialiased`}
      >
        {children}

        <Script
          src="https://cdn.jsdelivr.net/npm/sweetalert2@11"
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
