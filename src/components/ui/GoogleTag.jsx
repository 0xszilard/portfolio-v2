// app/components/GoogleTag.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

export default function GoogleTag({ gaId }) {
  const [consent, setConsent] = useState(null);
  const first = useRef(true);

  // 1) load saved choice
  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent");
    setConsent(
      stored === "granted" ? "granted" : stored === "denied" ? "denied" : null,
    );
  }, []);

  // 2) patch setItem ONCE so every time we write cookie-consent → gtag('consent','update',…)
  useEffect(() => {
    if (!first.current) return;
    first.current = false;

    const orig = window.localStorage.setItem;
    window.localStorage.setItem = function (key, value) {
      orig.apply(this, [key, value]);
      if (key === "cookie-consent") {
        // call the official gtag helper
        window.gtag?.("consent", "update", {
          ad_storage: value,
          analytics_storage: value,
          // you can also include other categories if you need them
        });
      }
    };
  }, []);

  // 3) don’t inject GA until we know their choice
  if (consent === null) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('consent','default',{
            ad_storage: '${consent}',
            analytics_storage: '${consent}',
            ad_user_data: '${consent}',
            ad_personalization: '${consent}'
          });
          gtag('config','${gaId}',{ page_path: window.location.pathname });
        `}
      </Script>
    </>
  );
}
