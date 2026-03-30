---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_enqueue_font_icon_element

Hook for custom enqueue of icon font stylesheets. This action fires when the requested icon font library is not one of the built-in sets (Font Awesome, Open Iconic, Typicons, Entypo, Linecons, Monosocial, Material). Use it to enqueue stylesheets for custom icon font libraries.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$font` | `string` | The icon font family identifier that needs to be enqueued. |

## Usage

```php
add_action( 'vc_enqueue_font_icon_element', 'wpb_enqueue_custom_icon_font' );

function wpb_enqueue_custom_icon_font( $font ) {
    if ( 'my-custom-icons' === $font ) {
        wp_enqueue_style(
            'my-custom-icons',
            plugins_url( 'assets/css/my-custom-icons.css', __FILE__ )
        );
    }
}
```

## Source

File: `include/helpers/helpers.php`
