---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_btn_a_href

Filters the URL (href attribute) of the Button element before it is rendered. This allows modification of button links dynamically.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$a_href` | string | The button URL extracted from the link field. |

## Usage

```php
<?php
add_filter( 'vc_btn_a_href', 'my_custom_btn_href' );

function my_custom_btn_href( $a_href ) {
    // Add UTM tracking parameters to all button links
    if ( strpos( $a_href, 'example.com' ) !== false ) {
        $a_href = add_query_arg( 'utm_source', 'wpbakery', $a_href );
    }
    return $a_href;
}
```

## Source

File: `include/templates/shortcodes/vc_btn.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.5 | Introduced. |
