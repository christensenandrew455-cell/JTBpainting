import Link from "next/link";
import config from "../homeConfig";
import siteConfig from "../siteConfig";
import aboutConfig from "../aboutConfig";

export default function AboutPage() {
  return (
    <main className={`${config.font} text-gray-900 bg-gray-100`}>
      {siteConfig.showHeader && (
        <header
          className={`
            border-b
            ${config.headerBorder}
            ${config.headerBackground}
            p-4
            ${
              siteConfig.stickyHeader
                ? "sticky top-0 bg-white z-50"
                : ""
            }
          `}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              {config.showLogo && config.logoUrl && (
                <img
                  src={config.logoUrl}
                  alt={config.businessName}
                  className="h-12 w-auto object-contain"
                />
              )}

              <h1
                className={`font-bold text-xl ${config.headerTextColor}`}
              >
                {config.businessName}
              </h1>
            </div>

            {config.showNavLinks && (
              <nav className="hidden md:flex items-center gap-6 ml-auto">
                {config.headerLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`
                      px-4
                      py-2
                      rounded-lg
                      transition
                      hover:bg-gray-100
                      ${config.headerTextColor}
                    `}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            )}
          </div>
        </header>
      )}

      <div className="max-w-6xl mx-auto p-6 md:p-12">
        {/* PAGE HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {aboutConfig.pageTitle}
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn more about our company, our mission, and our commitment to delivering quality land services throughout Central Massachusetts.
          </p>
        </div>

        {/* HERO IMAGE */}
        <div className="mb-16">
          <img
            src={aboutConfig.heroImage}
            alt={aboutConfig.pageTitle}
            className="w-full h-[500px] object-cover rounded-3xl shadow-xl"
          />
        </div>

        {/* CONTENT CARDS */}
        <div className="space-y-8">
          {aboutConfig.sections.map((section) => (
            <section
              key={section.title}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border"
            >
              <h2 className="text-3xl font-bold mb-4">
                {section.title}
              </h2>

              <p className="text-lg leading-relaxed text-gray-700">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        {/* CTA */}
        <section className="text-center mt-16">
          <Link
            href={siteConfig.contactPageRoute}
            className="inline-block bg-blue-600 text-white px-10 py-5 rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
          >
            {aboutConfig.contactButtonText}
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
