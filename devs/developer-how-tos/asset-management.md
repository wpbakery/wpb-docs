---
id: asset-management
title: Asset management
sidebar_label: Asset management
sidebar_position: 29
hide_table_of_contents: true
slug: /developers-how-tos/asset-management
---

# Asset management

This document explains how to properly include and manage assets (CSS, JavaScript, images, fonts) in WPBakery Page Builder elements, and how to use the plugin’s built-in assets.

## Asset Types

WPBakery elements can include several types of assets:

- **CSS files** – Styling for your elements
- **JavaScript files** – Interactive functionality
- **Images** – Icons, placeholders, backgrounds
- **Fonts** – Custom icon fonts or web fonts
- **External libraries** – jQuery plugins, icon libraries, etc.

## Asset Loading Methods

### 1. Using wp_enqueue_* Functions (Recommended)

The standard WordPress way to include assets:

```php
<?php

/**
 * Enqueue element assets
 */

function enqueue_custom_element_assets() {
 // CSS
 wp_enqueue_style(
 'custom-element-style', // Handle
 plugins_url( 'assets/css/custom-element.css', __FILE__ ), // URL
 [], // Dependencies
 '1.0.0', // Version
 'all' // Media
 );

 // JavaScript
 wp_enqueue_script(
 'custom-element-script', // Handle
 plugins_url( 'assets/js/custom-element.js', __FILE__ ), // URL
 ['jquery'], // Dependencies
 '1.0.0', // Version
 true // In footer
 );

 // Pass data to JavaScript
 wp_localize_script(
 'custom-element-script', // Script handle
 'customElementData', // Object name
 [
 'ajaxUrl' => admin_url( 'admin-ajax.php' ),
 'nonce' => wp_create_nonce( 'custom-element-nonce' ),
 ]
 );
}
```


### When to Enqueue

#### A. Always Load (Global)

```php
// For frontend

add_action( 'wp_enqueue_scripts', 'enqueue_custom_element_assets' );

// For backend editor

add_action( 'admin_enqueue_scripts', 'enqueue_custom_element_assets_admin' );

function enqueue_custom_element_assets_admin( $hook ) {
 // Only on page editor pages
 if ( 'post.php' === $hook || 'post-new.php' === $hook ) {
 wp_enqueue_style( 'custom-element-admin' );
 }
}
```


#### B. Conditional Loading (When Element is Used)

```php
// In your shortcode class

class WPBakeryShortCode_Custom_Element extends WPBakeryShortCode {
 /**
 * Enqueue assets only when element is used
 */

 public function __construct( $settings ) {
 parent::__construct( $settings );
 // Frontend
 add_action( 'wp_enqueue_scripts', [ $this, 'enqueueAssets' ] );
 // Backend editor
 add_action( 'admin_enqueue_scripts', [ $this, 'enqueueAdminAssets' ] );
 }

 /**
 * Frontend assets
 */

 public function enqueueAssets() {
 wp_enqueue_style(
 'vc-custom-element',
 plugins_url( 'assets/css/element.css', __FILE__ ),
 [],
 '1.0.0'
 );

 wp_enqueue_script(
 'vc-custom-element',
 plugins_url( 'assets/js/element.js', __FILE__ ),
 ['jquery'],
 '1.0.0',
 true
 );
 }

 /**
 * Backend editor assets
 */
 public function enqueueAdminAssets() {
 wp_enqueue_style( 'vc-custom-element-admin' );
 wp_enqueue_script( 'vc-custom-element-admin' );

 }

}
```


#### C. Lazy Loading (Only on Pages Using Element)

```php
// Track if element is used
$custom_element_used = false;

// In shortcode output function
function custom_element_shortcode( $atts, $content = null ) {
 global $custom_element_used;
 $custom_element_used = true;
}

// Enqueue only if used
add_action( 'wp_footer', 'maybe_enqueue_custom_element_assets' );
function maybe_enqueue_custom_element_assets() {
 global $custom_element_used;
 if ( $custom_element_used ) {
 wp_enqueue_style( 'custom-element' );
 wp_enqueue_script( 'custom-element' );
 }
}
```


### 2. Inline Styles and Scripts
For small, element-specific code:

```php
// In template file
$custom_css = "
.custom-element-{$unique_id} {
 background-color: {$bg_color};
 padding: {$padding}px;
}
";

$output = '<style>' . esc_html( $custom_css ) . '</style>';
$output .= '<div class="custom-element-' . esc_attr( $unique_id ) . '">';
// ... element content
$output .= '</div>';
// For JavaScript
$custom_js = "
jQuery(document).ready(function($) {
 $('.custom-element-{$unique_id}').customPlugin();
});
";

$output .= '<script>' . $custom_js . '</script>';
```


**Warning:** Use sparingly as it can cause performance issues and duplicate code.
### 3. Using vc_* Helper Functions
WPBakery provides helper functions for common assets:

```php
// Enqueue icon fonts

vc_icon_element_fonts_enqueue( 'fontawesome' ); // Font Awesome
vc_icon_element_fonts_enqueue( 'openiconic' ); // Open Iconic
vc_icon_element_fonts_enqueue( 'typicons' ); // Typicons
vc_icon_element_fonts_enqueue( 'entypo' ); // Entypo
vc_icon_element_fonts_enqueue( 'linecons' ); // Linecons
vc_icon_element_fonts_enqueue( 'material' ); // Material Icons
// In your template

if ( 'fontawesome' === $icon_type ) {
 vc_icon_element_fonts_enqueue( 'fontawesome' );
}
```


 
## Working with Images

### 1. Element Icons (Editor)

```php
// In config file

return [
 'name' => 'Custom Element',
 'base' => 'custom_element',
 'icon' => 'icon-wpb-custom', // CSS class
 // or
 'icon' => plugins_url( 'assets/images/element-icon.png', __FILE__ ),
];
```


### 2. Content Images

```php
// In template - using WordPress attachment

$image_id = $atts['image'];
$image_src = wp_get_attachment_image_src( $image_id, 'full' );
if ( $image_src ) {
 $output .= '<img src="' . esc_url( $image_src[0] ) . '" ';
 $output .= 'width="' . esc_attr( $image_src[1] ) . '" ';
 $output .= 'height="' . esc_attr( $image_src[2] ) . '" ';
 $output .= 'alt="' . esc_attr( get_post_meta( $image_id, '_wp_attachment_image_alt', true ) ) . '" />';
}

// Or use WordPress function

$output .= wp_get_attachment_image( $image_id, 'large', false, [ 'class' => 'custom-image' ] );
```


### 3. Background Images

```php
// Using CSS
$image_url = wp_get_attachment_image_src( $atts['bg_image'], 'full' );
if ( $image_url ) {
 $inline_style = 'background-image: url(' . esc_url( $image_url[0] ) . ');';
 $output .= '<div class="element" style="' . esc_attr( $inline_style ) . '">';
}
```


### 4. Responsive Images

```php
// Generate srcset for responsive images

$image_id = $atts['image'];
$image_src = wp_get_attachment_image_src( $image_id, 'full' );
$image_srcset = wp_get_attachment_image_srcset( $image_id, 'full' );
$image_sizes = wp_get_attachment_image_sizes( $image_id, 'full' );
$output .= '<img src="' . esc_url( $image_src[0] ) . '" ';
if ( $image_srcset ) {
 $output .= 'srcset="' . esc_attr( $image_srcset ) . '" ';
}

if ( $image_sizes ) {
 $output .= 'sizes="' . esc_attr( $image_sizes ) . '" ';
}

$output .= 'alt="" />';
```


## Working with Fonts

### 1. Web Fonts (Google Fonts, etc.)

```php
// Enqueue Google Fonts
function enqueue_custom_fonts() {
 wp_enqueue_style(
 'custom-google-fonts',
 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap',
 [],
 null
 );
}

add_action( 'wp_enqueue_scripts', 'enqueue_custom_fonts' );
```

Use in CSS:

```css
.custom-element {
 font-family: 'Roboto', sans-serif;
}
```


### 2. Custom Icon Fonts

```php
// Enqueue custom icon font

function enqueue_custom_icon_font() {
 wp_enqueue_style(
 'custom-icons',
 plugins_url( 'assets/fonts/custom-icons/custom-icons.css', __FILE__ ),
 [],
 '1.0.0'
 );
}

add_action( 'wp_enqueue_scripts', 'enqueue_custom_icon_font' );
```


CSS (custom-icons.css):

```css
@font-face {
 font-family: 'CustomIcons';
 src: url('custom-icons.woff2') format('woff2'),
 url('custom-icons.woff') format('woff'),
 url('custom-icons.ttf') format('truetype');
 font-weight: normal;
 font-style: normal;
 font-display: block;
}

.custom-icon {
 font-family: 'CustomIcons';
 font-style: normal;
 font-weight: normal;
 font-variant: normal;
 text-transform: none;
 line-height: 1;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
}

.custom-icon-home:before {
 content: "\e001";
}

.custom-icon-star:before {
 content: "\e002";
}
```


## External Libraries

### jQuery Plugins

```php
function enqueue_jquery_plugin() {

 // Enqueue the plugin

 wp_enqueue_script(
 'slick-slider',
 plugins_url( 'assets/lib/slick/slick.min.js', __FILE__ ),
 ['jquery'],
 '1.8.1',
 true
 );

 // Enqueue plugin CSS
 wp_enqueue_style(
 'slick-slider',
 plugins_url( 'assets/lib/slick/slick.css', __FILE__ ),
 [],
 '1.8.1'
 );
}

add_action( 'wp_enqueue_scripts', 'enqueue_jquery_plugin' );
```


 
## Best Practices

- Always use `wp_enqueue_*` – Never hard-code script/style tags
- Register first, enqueue later – Improves performance
- Use version numbers – For cache busting
- Declare dependencies – Ensure load order
- Load in footer when possible – Better page performance
- Minify production assets – Reduce file sizes
- Use CDNs with fallbacks – Improve loading speed
- Conditional loading – Only load what’s needed
- Proper escaping – Always escape URLs and attributes
- RTL support – Provide RTL styles when needed

 
## Troubleshooting

### Assets Not Loading

- Check file paths and URLs are correct
- Verify hooks are firing (use did_action())
- Check for JavaScript errors in console
- Ensure dependencies are loaded first
- Check file permissions

### Style Conflicts

- Use specific CSS selectors
- Increase specificity without !important
- Use unique class prefixes
- Check for theme/plugin conflicts
- Test with default theme

### Script Errors

- Check browser console for errors
- Verify jQuery is loaded (check dependencies)
- Ensure script runs after DOM ready
- Check for namespace conflicts
- Use try-catch for error handling
