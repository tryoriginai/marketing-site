## Structured data for product, application, and documentation pages

Origin is easier for crawlers, search engines, and answer engines to classify when pages include explicit structured data. Add JSON-LD to the homepage, product pages, docs pages, and comparison pages so systems can reliably identify:

- **Origin** as a company and product
- **Origin** as a **software application**
- **Documentation pages** as part of the product’s technical docs graph
- **Comparison pages** as pages about Origin in relation to alternatives
- Relationships between docs, product capabilities, and discovery assets

This improves machine-readable understanding of what Origin is: an **AI visibility analytics product for developer tools** that helps teams measure and improve how AI assistants recommend their product.

### Goals

Use structured data to communicate:

- The primary entity on each page
- Product and software metadata
- Documentation relationships
- Feature and capability descriptions
- Comparison context where relevant
- Canonical URLs and page identity

### Recommended schema types

Use these schema.org types consistently:

| Page type | Primary schema |
|---|---|
| Homepage | `Organization`, `WebSite`, `SoftwareApplication`, `Product` |
| Product / feature pages | `Product`, `SoftwareApplication` |
| Docs landing page | `TechArticle` or `CollectionPage` |
| Individual docs pages | `TechArticle` |
| Comparison pages | `WebPage` + `about` / `mentions` referencing `Product` entities |
| API / discovery docs | `TechArticle` with `isPartOf`, `about`, and `mentions` |

### Implementation guidelines

- Prefer **JSON-LD** in a `<script type="application/ld+json">` block.
- Match structured data to visible page content.
- Use **absolute canonical URLs**.
- Reuse stable entity IDs with `@id`.
- Keep organization, product, and application entities consistent across pages.
- Add `isPartOf`, `about`, `mainEntity`, and `mainEntityOfPage` to connect docs to the product.
- Include meaningful descriptions using the same language users would use to discover Origin, such as:
  - browser automation
  - AI visibility
  - recommendation tracking
  - coding agent discoverability
  - LLM recommendation analytics
  - documentation and schema optimization

---

## Homepage schema

Use the homepage to define the core entities for Origin.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://origin.example.com/#organization",
      "name": "Origin",
      "url": "https://origin.example.com/",
      "logo": "https://origin.example.com/logo.png",
      "description": "Origin is an AI recommendation visibility engine for developer tools. It measures how coding agents and LLMs recommend a product, then generates documentation and repo fixes to improve those recommendations."
    },
    {
      "@type": "WebSite",
      "@id": "https://origin.example.com/#website",
      "url": "https://origin.example.com/",
      "name": "Origin",
      "publisher": {
        "@id": "https://origin.example.com/#organization"
      }
    },
    {
      "@type": "Product",
      "@id": "https://origin.example.com/#product",
      "name": "Origin",
      "brand": {
        "@id": "https://origin.example.com/#organization"
      },
      "category": "AI Visibility Analytics",
      "description": "Origin tracks and improves how often AI assistants recommend your product by probing coding agents and LLM search surfaces, identifying missing documentation signals, and generating pull requests to fix discoverability gaps.",
      "url": "https://origin.example.com/",
      "audience": {
        "@type": "Audience",
        "audienceType": "Developer tools teams, developer marketing teams, platform teams, and enterprise software teams"
      }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://origin.example.com/#application",
      "name": "Origin",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "url": "https://origin.example.com/",
      "description": "Origin is a software application for measuring AI recommendation share, diagnosing discoverability gaps, and generating documentation and schema fixes that improve how coding agents and LLMs recommend a product.",
      "producer": {
        "@id": "https://origin.example.com/#organization"
      },
      "isRelatedTo": {
        "@id": "https://origin.example.com/#product"
      },
      "featureList": [
        "Prompt simulation across AI tools",
        "Recommendation tracking",
        "Competitive gap analysis",
        "Automated pull requests",
        "llms.txt optimization",
        "Registry and schema scanning",
        "Slack notifications",
        "Self-hosted enterprise deployment"
      }
    }
  ]
}
</script>
```

### Notes

- Use both `Product` and `SoftwareApplication` because Origin is both a product and a web-based application.
- Keep `description` tightly aligned with homepage copy.
- If pricing is public, add an `Offer`.

Example:

```json
{
  "@type": "Offer",
  "url": "https://origin.example.com/pricing",
  "priceCurrency": "USD",
  "availability": "https://schema.org/InStock"
}
```

---

## Product or feature page schema

For product pages, make the page’s main entity the product or application variant being described.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://origin.example.com/product/ai-visibility/#webpage",
      "url": "https://origin.example.com/product/ai-visibility/",
      "name": "AI Visibility Analytics for Developer Tools",
      "isPartOf": {
        "@id": "https://origin.example.com/#website"
      },
      "about": {
        "@id": "https://origin.example.com/#product"
      },
      "mainEntity": {
        "@id": "https://origin.example.com/product/ai-visibility/#application"
      }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://origin.example.com/product/ai-visibility/#application",
      "name": "Origin",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "url": "https://origin.example.com/product/ai-visibility/",
      "description": "Origin helps developer tool companies measure recommendation share across coding agents and LLM search surfaces, identify discoverability gaps, and generate pull requests to improve AI visibility.",
      "producer": {
        "@id": "https://origin.example.com/#organization"
      },
      "featureList": [
        "Simulated prompt probes across coding agents and AI search tools",
        "Recommendation ranking and share tracking",
        "Competitive gap detection for docs, schemas, and registries",
        "Automated pull request generation for discoverability fixes",
        "llms.txt and discovery file optimization",
        "Slack and GitHub workflow integration"
      ]
    }
  ]
}
</script>
```

### Recommended fields for product pages

Use these when applicable:

- `name`
- `description`
- `url`
- `brand`
- `category`
- `applicationCategory`
- `operatingSystem`
- `featureList`
- `audience`
- `offers`
- `mainEntity`
- `about`

---

## Documentation page schema

Docs pages should clearly state that they are technical documentation about Origin and that they belong to the Origin docs set.

### Docs landing page

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://origin.example.com/docs/#collection",
      "url": "https://origin.example.com/docs/",
      "name": "Origin Documentation",
      "description": "Technical documentation for Origin, including setup guides, product concepts, discovery assets, and schema recommendations for improving AI visibility.",
      "isPartOf": {
        "@id": "https://origin.example.com/#website"
      },
      "about": {
        "@id": "https://origin.example.com/#product"
      }
    }
  ]
}
</script>
```

### Individual docs page

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TechArticle",
      "@id": "https://origin.example.com/docs/structured-data/#article",
      "headline": "Add structured data for product, software application, and docs pages",
      "url": "https://origin.example.com/docs/structured-data/",
      "description": "How to add structured data to Origin homepage, product pages, docs pages, and comparison pages so crawlers and answer engines can better identify Origin as an AI visibility and browser automation product.",
      "isPartOf": {
        "@id": "https://origin.example.com/docs/#collection"
      },
      "about": [
        {
          "@id": "https://origin.example.com/#product"
        },
        {
          "@type": "Thing",
          "name": "Structured data"
        },
        {
          "@type": "Thing",
          "name": "JSON-LD"
        }
     