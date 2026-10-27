# DIYAR-E-LIBAS website prototype — V10 responsive refinement

This package contains the static website prototype and local image assets.

## Pages
- `index.html` — homepage
- `wash-wear.html` — Wash & Wear page (new product layout, same as the -product file)
- `wash-wear-product.html` — Wash & Wear product detail
- `legend-winter-cotton.html` — Legend Winter Cotton page (new product layout, same as the -product file)
- `legend-winter-cotton-product.html` — Legend Winter Cotton product detail

## Update summary
- Responsive desktop, tablet and mobile layout refinements.
- Homepage hero copy centered in the lower-middle of the existing full-width hero image.
- Three benefit items remain on one row on mobile.
- Consistent page gutters, readable typography, softer rounded cards and buttons.
- Product detail gallery stacks cleanly on phones with horizontally scrollable thumbnails.

## Important
This remains a prototype. Verify all product specifications, colour names, stock, delivery and return policies before launch. Checkout/order submission and tracking may require separate configuration. Test on actual devices and confirm no missing assets after deployment.

## Product page redesign (latest)
- All four Wash & Wear and Legend Winter Cotton pages (collection and product files) use the new layout: desktop two-column (gallery left, details right), mobile single column.
- New files: `css/product.css` (all product-page styling) and `js/product.js` (colour select, gallery, quantity, tabs, cart counter).
- Add to Cart only updates the cart counter; checkout is not connected. Colour names, fabric length, composition, care and delivery charges still need supplier confirmation.
