"use client";

import Script from "next/script";

export default function BotpressChat() {
  return (
    <>
      {/* Load Botpress v2.3 Webchat Core */}
      <Script
        src="https://cdn.botpress.cloud/webchat/v2.3/inject.js"
        strategy="afterInteractive"
      />

      {/* Load Your Custom Webchat Configuration Script */}
      <Script
        src="https://files.bpcontent.cloud/2025/04/11/15/20250411154233-XJ3VIVMT.js"
        strategy="afterInteractive"
      />
    </>
  );
}

