import { useContext, useEffect } from 'react'
import { SITE_URL } from '../seo/routes'
import { DEFAULT_IMAGE, HeadContext, formatTitle } from '../seo/head'

function SEO({ title, description, keywords, ogImage, ogType = 'website', path, schemaJson }) {
  const collect = useContext(HeadContext)
  if (collect) collect({ title, description, keywords, ogImage, ogType, path, schemaJson })

  useEffect(() => {
    const formattedTitle = formatTitle(title);
    const url = path ? `${SITE_URL}${path}` : window.location.href;
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

    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    updateMetaTag('og:title', formattedTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:image', ogImage || DEFAULT_IMAGE, true);
    updateMetaTag('og:url', url, true);

    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', formattedTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage || DEFAULT_IMAGE);

    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', url);

    // JSON-LD: replace any existing block (including the prerendered one) with this page's
    const schemaId = 'seo-schema-jsonld';
    document.getElementById(schemaId)?.remove();

    if (schemaJson) {
      const schemaEl = document.createElement('script');
      schemaEl.id = schemaId;
      schemaEl.type = 'application/ld+json';
      schemaEl.text = JSON.stringify(schemaJson);
      document.head.appendChild(schemaEl);
    }

    return () => {
      document.getElementById(schemaId)?.remove();
    };
  }, [title, description, keywords, ogImage, ogType, path, schemaJson]);

  return null;
}

export default SEO;
