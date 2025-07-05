# Brixies Sections Data

This repository contains section data for the Brixies Exporter Figma plugin. The data is organized by category and can be accessed via GitHub Raw URLs.

## Structure

```
sections/
├── headers/          # Header sections
├── heroes/           # Hero sections  
├── features/         # Feature sections
├── portfolios/       # Portfolio sections
├── ctas/            # Call-to-action sections
├── footers/         # Footer sections
├── testimonials/    # Testimonial sections
├── pricing/         # Pricing sections
├── contacts/        # Contact sections
├── abouts/          # About sections
├── blogs/           # Blog sections
├── content/         # Content sections
├── galleries/       # Gallery sections
├── faqs/            # FAQ sections
├── events/          # Event sections
├── logos/           # Logo sections
├── megamenus/       # Megamenu sections
├── offcanvas/       # Offcanvas sections
├── popups/          # Popup sections
├── single-portfolios/ # Single portfolio sections
├── single-posts/    # Single post sections
├── single-products/ # Single product sections
├── products/        # Product sections
├── teams/           # Team sections
├── timelines/       # Timeline sections
├── banners/         # Banner sections
├── cart-pages/      # Cart page sections
├── checkout-pages/  # Checkout page sections
├── coming-soon/     # Coming soon page sections
├── dashboard-pages/ # Dashboard page sections
├── error-pages/     # Error page sections
├── link-pages/      # Link page sections
├── login-pages/     # Login page sections
└── category-filters/ # Category filter sections

metadata/
└── section-metadata.json  # Section metadata for plugin
```

## Usage

Each section is stored as a JSON file containing the complete BricksCode structure. Files can be accessed via GitHub Raw URLs:

```
https://raw.githubusercontent.com/YOUR_USERNAME/brixies-sections-data/main/sections/headers/header-1.json
```

## For Plugin Developers

The `metadata/section-metadata.json` file contains:
- Section names and categories
- Default class names
- Remote URLs for full data
- Section IDs for matching

This metadata is embedded in the Figma plugin for fast section detection and matching. 