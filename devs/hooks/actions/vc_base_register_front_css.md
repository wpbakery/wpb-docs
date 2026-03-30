---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_base_register_front_css

Fires after front-end CSS styles have been registered. This hook runs at the end of the `Vc_Base::frontCss()` method, after all default front-end stylesheets (Flexslider, Nivo Slider, PrettyPhoto, Isotope, Font Awesome, Animate.css, Lightbox2, and the main front-end CSS) have been registered with `wp_register_style`.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_base_register_front_css', 'wpb_register_custom_front_css' );

function wpb_register_custom_front_css() {
    // Register additional front-end stylesheets
    wp_register_style(
        'my-vc-element-css',
        plugins_url( 'css/my-element.css', __FILE__ ),
        [ 'js_composer_front' ],
        '1.0.0'
    );
}
```

## Source

File: `include/classes/core/class-vc-base.php`
