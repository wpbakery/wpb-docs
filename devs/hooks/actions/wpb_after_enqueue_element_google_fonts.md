---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# wpb\_after\_enqueue\_element\_google\_fonts

Fires after a Google Font has been enqueued for a WPBakery element. Receives the font data array containing family, vendor, and other font details. Use this hook to enqueue additional font variations or perform actions based on which fonts are used.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$fonts_data` | `array` | Font data array containing `values` with keys like `font_family` and `font_vendor`. |

## Usage

```php
add_action( 'wpb_after_enqueue_element_google_fonts', 'wpb_track_google_fonts' );

function wpb_track_google_fonts( $fonts_data ) {
    if ( ! empty( $fonts_data['values']['font_family'] ) ) {
        // Track which Google Fonts are used on the page
        $used_fonts = get_transient( 'wpb_used_fonts' );
        if ( ! is_array( $used_fonts ) ) {
            $used_fonts = array();
        }
        $used_fonts[] = $fonts_data['values']['font_family'];
        set_transient( 'wpb_used_fonts', array_unique( $used_fonts ), HOUR_IN_SECONDS );
    }
}
```

## Source

File: `include/classes/shortcodes/vc-custom-heading.php`

## Changelog

| Version | Description |
|---------|-------------|
| 8.0 | Introduced. |
