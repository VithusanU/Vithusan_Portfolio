/** @type {import('next').NextConfig} */

// Sent on every response. Vercel already sets Strict-Transport-Security, so
// these are the ones that were missing.
const securityHeaders = [
  // Stop the browser second-guessing Content-Type, which is what turns a
  // mislabelled upload into executable script.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Nobody should be framing a portfolio; blocks clickjacking overlays.
  { key: "X-Frame-Options", value: "DENY" },
  // Send the origin to other sites, never the full path someone was reading.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // This site asks for none of these, so hand them back.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

const nextConfig = {
  // Don't advertise the framework version.
  poweredByHeader: false,

  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
