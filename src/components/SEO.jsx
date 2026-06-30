import { useEffect } from 'react'

function SEO({ title, description, keywords, ogImage, ogType = 'website', canonicalUrl, schemaJson }) {
  useEffect(() => {
    // 1. Update document title
    const formattedTitle = title ? `${title} | BYMA` : 'BYMA | Creative Full-Stack Development';
    document.title = formattedTitle;

    // Helper to update or create meta tags
    const updateMetaTag = (name, value, isProperty = false) => {
      if (!value) return;
      const attrName = isProperty ? 'property' : 'name';
      const selector = `meta[${attrName}="${name}"]`;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    // 2. Update standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // 3. Update Open Graph tags
    updateMetaTag('og:title', formattedTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:image', ogImage || 'https://byma.co.ke/me.png', true);
    updateMetaTag('og:url', canonicalUrl || window.location.href, true);

    // 4. Update Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', formattedTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage || 'https://byma.co.ke/me.png');

    // 5. Update Canonical link
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', canonicalUrl || window.location.href);

    // 6. Handle JSON-LD Structured Data Injection
    const schemaId = 'seo-schema-jsonld';
    let schemaEl = document.getElementById(schemaId);
    if (schemaEl) {
      schemaEl.remove();
    }

    if (schemaJson) {
      schemaEl = document.createElement('script');
      schemaEl.id = schemaId;
      schemaEl.type = 'application/ld+json';
      schemaEl.text = JSON.stringify(schemaJson);
      document.head.appendChild(schemaEl);
    }

    // Cleanup: remove injected schema element on component unmount to prevent duplicate tags
    return () => {
      const el = document.getElementById(schemaId);
      if (el) {
        el.remove();
      }
    };
  }, [title, description, keywords, ogImage, ogType, canonicalUrl, schemaJson]);

  return null;
}

export default SEO;
