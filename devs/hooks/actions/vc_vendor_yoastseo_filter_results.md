---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_vendor_yoastseo_filter_results

Fires before WPBakery content is parsed for Yoast SEO analysis. This hook runs just before shortcodes in the post content are processed via `do_shortcode()` for Yoast SEO compatibility. Use it to modify global state or register shortcode handlers before the SEO content analysis.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_vendor_yoastseo_filter_results', 'wpb_prepare_yoast_analysis' );

function wpb_prepare_yoast_analysis() {
    // Ensure custom shortcodes are registered before Yoast analysis
    // This helps Yoast properly analyze content built with WPBakery
    if ( ! shortcode_exists( 'my_custom_element' ) ) {
        add_shortcode( 'my_custom_element', 'my_custom_element_render' );
    }
}
```

## Source

File: `include/classes/vendors/plugins/class-vc-vendor-yoast_seo.php`
