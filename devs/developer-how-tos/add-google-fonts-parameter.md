---
id: add-google-fonts-parameter
title: Add Google fonts parameter
sidebar_label: Add Google fonts parameter
sidebar_position: 8
hide_table_of_contents: true
slug: /developers-how-tos/add-google-fonts-parameter
---

# Add Google fonts parameter

It is possible to add Google Fonts parameter to a custom element of WPBakery Page Builder, by following these steps:

1. Map attribute `'google_fonts'`
2. Parse google fonts value in template
3. Get google fonts settings for enqueue
4. Enqueue font-family
5. Create inline-style string to add google-fonts
6. Add inline style to element

```php
<?php
if ( ! defined( 'ABSPATH' ) ) {
 die( '' ); // Don't call directly
}
add_action( 'vc_after_init', function () {
 vc_lean_map( 'vc_custom_google_fonts', null, dirname( __FILE__ ) . '/shortcode/vcmap.php' );
 require_once "shortcode/class.php";
}
);
```

For full example of Google Fonts param usage please visit GitHub repository with example element – [VC Google Fonts Element](https://github.com/AngeIII/vc-google-fonts-element).
