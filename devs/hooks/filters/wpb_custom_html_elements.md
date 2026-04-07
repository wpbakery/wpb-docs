---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# wpb_custom_html_elements

Filters the list of element shortcode tags that are considered to contain custom HTML. These elements receive special handling for their content (e.g., raw HTML, raw JS, Google Maps).

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$elements` | array | An indexed array of shortcode base tags that contain custom HTML. Default includes `vc_raw_html`, `vc_raw_js`, and `vc_gmaps`. |

## Usage

```php
<?php
add_filter( 'wpb_custom_html_elements', 'my_custom_html_elements' );

function my_custom_html_elements( $elements ) {
    // Add a custom element that contains raw HTML
    $elements[] = 'my_raw_element';
    return $elements;
}
```

## Source

File: `include/helpers/helpers.php`
