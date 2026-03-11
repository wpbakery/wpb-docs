---
id: plugin-structure
title: Plugin Structure
sidebar_label: Plugin Structure
sidebar_position: 31
hide_table_of_contents: true
slug: /developers-how-tos/plugin-structure
---

# Plugin Structure

This document explains the folder and file structure of custom addons/elements for WPBakery Page Builder, helping developers understand how the plugin is organized and where to find specific functionality.

**Reference:** [WPBakery Dev Example Plugin](https://github.com/wpbakery/dev-example) provides a complete working reference.

## Recommended Plugin Structure

Here's the recommended folder structure for a 3rd-party plugin that adds custom WPBakery elements:

### Root Directory Overview

```php
your-wpbakery-elements/
├── your-wpbakery-elements.php # Main plugin file
├── readme.txt # WordPress plugin readme
├── elements/ # All custom elements
│ ├── basic-box/ # Example: Basic element
│ │ ├── basic-box.php # Element registration & class
│ │ └── basic-box.tpl.php # Frontend template
│ ├── pricing-table/ # Example: Element with logic
│ │ ├── pricing-table.php # Element registration & class
│ │ └── pricing-table.tpl.php # Frontend template
│ └── tabs-container/ # Example: Nested element
│ ├── tabs-container.php # Parent element
│ ├── tabs-container.tpl.php
│ ├── tab-item/ # Child element
│ │ ├── tab-item.php
│ │ └── tab-item.tpl.php
├── assets/ # Optional: Element assets
│ ├── css/
│ │ ├── basic-box.css
│ │ └── pricing-table.css
│ ├── js/
│ │ ├── basic-box.js
│ │ └── pricing-table.js
│ └── images/
│ └── icons/
└── includes/ # Optional: Helper functions
 └── helpers.php
…………
```


## Core Folders Explained

### 1. Main Plugin File

**File:** `your-wpbakery-elements.php`

This is the WordPress plugin header file that initializes your custom elements.

You can see an example code here: [https://github.com/wpbakery/dev-example/blob/master/dev-example.php](https://github.com/wpbakery/dev-example/blob/master/dev-example.php)
### 2. /elements/ – Element Files

Each element gets its own directory containing:

```php
File: `elements/{element-name}/{element-name}.php`
- `vc_map()` registration
- Element class (extends `WPBakeryShortCode` or `WPBakeryShortCodesContainer`)
- Asset enqueueing (if element-specific)


File: `elements/{element-name}/{element-name}.tpl.php`
- Frontend HTML template
- Receives `$atts`, `$content`, and `$this` variables
```


Example structure:

```php
elements/basic-box/
├── basic-box.php # Registration + Class
└── basic-box.tpl.php # Template
```


### 3. /assets/ – Static Assets (Optional)

Store CSS, JavaScript, and images used by your elements:

```php
assets/
├── css/
│ ├── elements.css # Combined styles for all elements
│ ├── basic-box.css # Element-specific styles
│ └── pricing-table.css
├── js/
│ ├── elements.js # Combined scripts
│ ├── basic-box.js # Element-specific scripts
│ └── pricing-table.js
└── images/
 ├── icons/
 │ ├── box-icon.svg
 │ └── price-icon.svg
 └── placeholders/
 └── default.png
```


**Best Practice:** Combine common CSS/JS into single files to reduce HTTP requests.
### 4. /includes/ – Helper Functions (Optional)

Common utility functions used across multiple elements:

```php
**File**: `includes/helpers.php`


<?php
/**
* Helper functions for your elements
*/


if ( ! defined( 'ABSPATH' ) ) {
 exit;
}


/**
* Get element asset URL
*/
function your_elements_get_asset_url( $path ) {
 return YOUR_ELEMENTS_URL . 'assets/' . ltrim( $path, '/' );
}


/**
* Sanitize element classes
*/
function your_elements_sanitize_classes( $classes ) {
 if ( is_array( $classes ) ) {
 return implode( ' ', array_map( 'sanitize_html_class', $classes ) );
 }
 return sanitize_html_class( $classes );
}


/**
* Get element template
*/
function your_elements_get_template( $element_name, $atts = [], $content = '' ) {
 $template_path = YOUR_ELEMENTS_PATH . "elements/{$element_name}/{$element_name}.tpl.php";


 if ( file_exists( $template_path ) ) {
 ob_start();
 include $template_path;
 return ob_get_clean();
 }


 return '';
}
```


 
## File Naming Conventions

### Element Files

- **Element folder:** `elements/{element-slug}/`
- **Registration file:** `{element-slug}.php`
- **Template file:** `{element-slug}.tpl.php`
- **Example:** `elements/basic-box/basic-box.php` and `basic-box.tpl.php`

### Element Class

- **Pattern:** `WPBakeryShortCode_{Your}_{Element}_{Base}`
- **Example:** `WPBakeryShortCode_Your_Basic_Box` for `[your_basic_box]`
- **Note:** Use underscores, not hyphens, in class names

### Element Base (Shortcode Tag)

- **Pattern:** `{your_prefix}_{element_name}`
- **Example:** `your_basic_box`, `your_pricing_table`
- **Best Practice:** Use a unique prefix to avoid conflicts

 
## Best Practices

### 1. Use Unique Prefixes

Always prefix your element base names to avoid conflicts:

- ✅ **Good:** `'base' => 'acme_pricing_table'`
- ❌ **Bad** – might conflict with other plugins: `'base' => 'pricing_table'`
### 2. Organize by Feature

Group related elements together:

```php
elements/
├── pricing/
│ ├── pricing-table/
│ └── price-box/
└── testimonials/
 ├── testimonial-slider/
 └── testimonial-grid/
```


### 3. Check for WPBakery

Always verify WPBakery is active before initializing:

```php
if ( ! defined( 'WPB_VC_VERSION' ) ) {
 // Show admin notice
 return;
}
```


### 4. Use Constants

Define plugin paths as constants for easy reference:

```php
define( 'YOUR_ELEMENTS_PATH', plugin_dir_path( __FILE__ ) );
define( 'YOUR_ELEMENTS_URL', plugin_dir_url( __FILE__ ) );
```


### 5. Enqueue Assets Conditionally

Only load CSS/JS when elements are actually used on the page.
