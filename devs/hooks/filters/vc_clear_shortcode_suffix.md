---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_clear_shortcode_suffix

Filters the shortcode tag name used during Frontend Editor rendering. This filter is applied when building the shortcode output for frontend editing, allowing modification of the shortcode tag (e.g., removing or replacing suffixes added by automapping).

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$tag` | string | The shortcode tag name. |

## Usage

```php
<?php
add_filter( 'vc_clear_shortcode_suffix', 'my_clear_shortcode_suffix' );

function my_clear_shortcode_suffix( $tag ) {
    // Remove a custom suffix from automapped shortcode tags
    if ( strpos( $tag, '_mapped' ) !== false ) {
        $tag = str_replace( '_mapped', '', $tag );
    }
    return $tag;
}
```

## Source

File: `include/classes/editors/class-vc-frontend-editor.php`

## Changelog

| Version | Description |
|---------|-------------|
| 7.0 | Introduced. |
