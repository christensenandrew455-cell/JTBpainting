import Link from "next/link";
import config from "./homeConfig";
import siteConfig from "./siteConfig";

export default function Home() {
return (
<main
className={`${config.font} ${config.theme.pageBg} ${config.theme.pageText}`}
>
{siteConfig.showHeader && (
<header
className={`sticky top-0 z-50 border-b ${config.theme.headerBg} ${config.theme.headerBorder} backdrop-blur`}
> <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"> <div className="flex items-center gap-3">
{config.showLogo && config.logoUrl && ( <img
               src={config.logoUrl}
               alt={config.businessName}
               className="h-12 w-auto object-contain"
             />
)}

```
          <h1
            className={`text-2xl font-bold ${config.theme.accentText}`}
          >
            {config.businessName}
          </h1>
        </div>

        {config.showNavLinks && (
          <nav className="hidden md:flex gap-6">
            {config.headerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-blue-400 transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )}

  <section
    className={`min-h-screen flex items-center justify-center text-center px-6 ${config.theme.heroBg}`}
  >
    <div>
      <h1 className="text-6xl md:text-8xl font-extrabold mb-6">
        {config.heroTitle}
      </h1>

      <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
        {config.heroSubtitle}
      </p>

      <Link
        href={siteConfig.contactPageRoute}
        className={`inline-block mt-10 ${config.theme.button}`}
      >
        {config.contactButtonText}
      </Link>
    </div>
  </section>

  <div
    className={`mx-auto ${siteConfig.maxWidth} ${siteConfig.pagePadding}`}
  >
    <section className={`${config.theme.sectionBg} p-8 mb-12`}>
      <h2
        className={`text-4xl font-bold mb-8 ${config.theme.accentText}`}
      >
        About Us
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          ["Company Story", config.companyStory],
          ["Our Mission", config.mission],
          ["What We Do", config.whatWeDo],
          ["Areas We Serve", config.serviceAreas.join(", ")],
        ].map(([title, content]) => (
          <div
            key={title}
            className={`${config.theme.cardBg} p-6`}
          >
            <h3 className="text-2xl font-semibold mb-3">
              {title}
            </h3>
            <p className="text-gray-300">{content}</p>
          </div>
        ))}

        <div
          className={`${config.theme.cardBg} p-6 md:col-span-2`}
        >
          <h3 className="text-2xl font-semibold mb-3">
            Why Choose Us
          </h3>
          <p className="text-gray-300">
            {config.whyChooseUs}
          </p>
        </div>
      </div>
    </section>

    <section className={`${config.theme.sectionBg} p-8 mb-12`}>
      <h2
        className={`text-4xl font-bold mb-8 ${config.theme.accentText}`}
      >
        Our Work
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {config.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Work ${i + 1}`}
            className="rounded-2xl shadow-xl hover:scale-105 transition"
          />
        ))}
      </div>
    </section>

    <section className={`${config.theme.sectionBg} p-8`}>
      <h2
        className={`text-4xl font-bold mb-8 ${config.theme.accentText}`}
      >
        Testimonials
      </h2>

      <div className="space-y-6">
        {config.testimonials.map((t, i) => (
          <div
            key={i}
            className={`${config.theme.testimonialBg} p-6`}
          >
            <p className="font-semibold text-lg">
              {t.name}
            </p>

            <p className="text-blue-400 mb-2">
              {"★".repeat(t.stars)}
            </p>

            <p className="text-gray-300">
              {t.review}
            </p>
          </div>
        ))}
      </div>
    </section>

    <section className="text-center py-16">
      <h2 className="text-4xl font-bold mb-4">
        Ready To Transform Your Property?
      </h2>

      <p className="text-gray-400 mb-8">
        Contact JTB Painting today for a free estimate.
      </p>

      <Link
        href={siteConfig.contactPageRoute}
        className={config.theme.button}
      >
        {config.contactButtonText}
      </Link>
    </section>
  </div>

  {siteConfig.showFooter && (
    <footer className="border-t border-blue-500/20 py-8 text-center">
      <p>{config.email}</p>
      <p>{config.phone}</p>

      <Link
        href={siteConfig.privacyPageRoute}
        className="text-blue-400 hover:text-blue-300 mt-3 inline-block"
      >
        Privacy Policy
      </Link>
    </footer>
  )}
</main>
```

);
}
