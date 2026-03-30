---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_base_register_front_js

Fires after front-end JavaScript libraries have been registered. This hook runs at the end of the `Vc_Base::frontJsRegister()` method, after all default front-end scripts (PrettyPhoto, Lightbox2, Waypoints, jQuery UI Tabs Rotate, Isotope, TWBS Pagination, Nivo Slider, Flexslider, and the main front-end JS) have been registered with `wp_register_script`.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_base_register_front_js', 'wpb_register_custom_front_js' );

function wpb_register_custom_front_js() {
    // Register additional front-end JavaScript files
    wp_register_script(
        'my-vc-element-js',
        plugins_url( 'js/my-element.js', __FILE__ ),
        [ 'jquery-core' ],
        '1.0.0',
        true
    );
}
```

## Source

File: `include/classes/core/class-vc-base.php`
