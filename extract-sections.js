const fs = require('fs');
const path = require('path');

// Read the current sectionData.json
const sectionDataPath = path.join(__dirname, '../src/sectionData.json');
const sectionData = JSON.parse(fs.readFileSync(sectionDataPath, 'utf8'));

// Read the categories template to get the mapping
const categoriesPath = path.join(__dirname, '../src/database/categories-templates.txt');
const categoriesData = JSON.parse(fs.readFileSync(categoriesPath, 'utf8'));

// GitHub username (you'll need to replace this)
const GITHUB_USERNAME = 'YOUR_USERNAME'; // Replace with your actual GitHub username

// Category to folder mapping
const categoryToFolder = {
  'Headers': 'headers',
  'Hero Sections': 'heroes',
  'Feature Sections': 'features',
  'Portfolio Sections': 'portfolios',
  'CTA Sections': 'ctas',
  'Footer': 'footers',
  'Testimonial Sections': 'testimonials',
  'Pricing Sections': 'pricing',
  'Contact Sections': 'contacts',
  'Content Sections': 'content',
  'Blog Sections': 'blogs',
  'Gallery': 'galleries',
  'FAQ Sections': 'faqs',
  'Event Sections': 'events',
  'Logo Sections': 'logos',
  'Megamenu Sections': 'megamenus',
  'Offcanvas': 'offcanvas',
  'Popup Sections': 'popups',
  'Single Portfolio Sections': 'single-portfolios',
  'Single Post Hero': 'single-posts',
  'Single Post Section': 'single-posts',
  'Single Product Sections': 'single-products',
  'Products Sections': 'products',
  'Team Sections': 'teams',
  'Timeline Sections': 'timelines',
  'Banner Section': 'banners',
  'Cart Page': 'cart-pages',
  'Checkout Page': 'checkout-pages',
  'Coming Soon Page': 'coming-soon',
  'Dashboard Pages': 'dashboard-pages',
  'Error Pages': 'error-pages',
  'Link Page': 'link-pages',
  'Login Pages': 'login-pages',
  'Category Filters': 'category-filters'
};

// Create metadata structure
const metadata = {};

// Process each category
Object.entries(categoriesData).forEach(([category, sectionNames]) => {
  const folderName = categoryToFolder[category];
  if (!folderName) {
    console.warn(`No folder mapping for category: ${category}`);
    return;
  }

  metadata[category] = {};

  // Process each section in the category
  sectionNames.forEach(sectionName => {
    if (sectionData[sectionName]) {
      // Create the section file
      const sectionFileName = sectionName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') + '.json';
      const sectionFilePath = path.join(__dirname, 'sections', folderName, sectionFileName);
      
      // Ensure directory exists
      const sectionDir = path.dirname(sectionFilePath);
      if (!fs.existsSync(sectionDir)) {
        fs.mkdirSync(sectionDir, { recursive: true });
      }

      // Write section data
      fs.writeFileSync(sectionFilePath, JSON.stringify(sectionData[sectionName], null, 2));
      console.log(`Created: ${sectionFilePath}`);

      // Add to metadata
      const sectionId = sectionFileName.replace('.json', '');
      metadata[category][sectionName] = {
        id: sectionId,
        category: category,
        defaultClass: `brixies-${sectionId}`,
        remoteUrl: `https://raw.githubusercontent.com/${GITHUB_USERNAME}/brixies-sections-data/main/sections/${folderName}/${sectionFileName}`
      };
    } else {
      console.warn(`Section data not found for: ${sectionName}`);
    }
  });
});

// Write metadata file
const metadataPath = path.join(__dirname, 'metadata', 'section-metadata.json');
fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
console.log(`Created metadata: ${metadataPath}`);

console.log('\nExtraction complete!');
console.log('Next steps:');
console.log('1. Replace YOUR_USERNAME in the metadata file with your actual GitHub username');
console.log('2. Initialize git repository: git init');
console.log('3. Add files: git add .');
console.log('4. Commit: git commit -m "Initial commit"');
console.log('5. Add remote: git remote add origin https://github.com/YOUR_USERNAME/brixies-sections-data.git');
console.log('6. Push: git push -u origin main'); 