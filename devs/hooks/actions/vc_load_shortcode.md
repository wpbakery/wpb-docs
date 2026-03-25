---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc\_load\_shortcode

Fires when the frontend editor loads shortcodes for rendering. Called both during initial page content parsing (with no parameters) and during AJAX shortcode rendering (with a `$shortcodes` array). Use this hook to perform setup before shortcodes are rendered in the frontend editor.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$shortcodes` | `array` | Optional. Array of shortcode data to be rendered. Only passed during AJAX shortcode load requests. |

## Usage

```php
add_action( 'vc_load_shortcode', 'wpb_on_shortcode_load', 10, 1 );

function wpb_on_shortcode_load( $shortcodes = array() ) {
    if ( ! empty( $shortcodes ) ) {
        // AJAX render - shortcodes are being loaded dynamically
        foreach ( $shortcodes as $shortcode ) {
            // Prepare resources for each shortcode
        }
    }
    // Runs in both cases - enqueue shared assets
    wp_enqueue_style( 'my-shortcode-styles', plugins_url( 'css/shortcodes.css', __FILE__ ) );
}
```

## Source

File: `include/classes/editors/class-vc-frontend-editor.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.2 | Introduced. |
