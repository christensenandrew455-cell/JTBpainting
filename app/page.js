import Link from "next/link";
import config from "./homeConfig";
import siteConfig from "./siteConfig";

export default function Home() {
  return (
    <main
      className={`
        ${config.font}
        text-gray-900
        ${
          siteConfig.contentAlignment === "center"
            ? "text-center"
            : "text-left"
        }
      `}
    >
      {siteConfig.showHeader && (
        <header
          className={`
            border-b
            p-4
            ${
              siteConfig.stickyHeader
                ? "sticky top-0 bg-white z-50"
                : ""
            }
          `}
        >
          <div className="max-w-7xl mx-auto grid grid-cols-3 items-center">
            {/* LEFT */}
            <div>
              {config.logoUrl && (
                <img
                  src={config.logoUrl}
                  alt={config.businessName}
                  className="h-12 object-contain"
                />
              )}
            </div>

            {/* CENTER */}
            <div className="text-center">
              <h1 className="text-2xl font-bold">
                {config.businessName}
              </h1>
            </div>

            {/* RIGHT */}
            <div className="flex justify-end">
              <Link
                href={siteConfig.contactPageRoute}
                className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
              >
                {config.contactButtonText}
              </Link>
            </div>
          </div>
        </header>
      )}

      <div
        className={`mx-auto ${siteConfig.maxWidth} ${siteConfig.pagePadding}`}
      >
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">
            {config.slogan}
          </h1>

          <p>{config.companyStory}</p>

          <h2 className="text-2xl font-semibold mt-6">
            Mission
          </h2>

          <p>{config.mission}</p>

          <h2 className="text-2xl font-semibold mt-6">
            Why Choose Us
          </h2>

          <p>{config.whyChooseUs}</p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-4">
            Our Work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {config.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Work ${i + 1}`}
                className="rounded-xl shadow"
              />
            ))}
          </div>

          {config.video && (
            <video
              src={config.video}
              controls
              className="mt-6 w-full rounded-xl"
            />
          )}
        </section>

        <section className="mt-10 bg-gray-50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">
            Testimonials
          </h2>

          <div className="space-y-4">
            {config.testimonials.map((t, i) => (
              <div
                key={i}
                className="p-4 bg-white rounded-xl shadow"
              >
                <p className="font-semibold">
                  {t.name}
                </p>

                <p>{"⭐".repeat(t.stars)}</p>

                <p>{t.review}</p>
              </div>
            ))}
          </div>

          {config.googleReviewsLink && (
            <a
              href={config.googleReviewsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline mt-4 block"
            >
              View Google Reviews
            </a>
          )}
        </section>

        {/* CONTACT CTA */}
        <section className="mt-12 text-center">
          <Link
            href={siteConfig.contactPageRoute}
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition"
          >
            {config.contactButtonText}
          </Link>
        </section>
      </div>

      {siteConfig.showFooter && (
        <footer
          className={`
            p-6
            border-t
            ${
              siteConfig.footerCentered
                ? "text-center"
                : "text-left"
            }
          `}
        >
          <p>{config.email}</p>
          <p>{config.phone}</p>

          <Link
            href={siteConfig.privacyPageRoute}
            className="block mt-3 text-blue-600 underline"
          >
            Privacy Policy
          </Link>
        </footer>
      )}
    </main>
  );
}
