---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_wp_text_widget_shortcode

Filters the content of the WP Text Widget shortcode element before it is passed to the widget instance.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$content` | string | The shortcode content (text entered in the widget text area). |

## Usage

```php
<?php
add_filter( 'vc_wp_text_widget_shortcode', 'my_modify_wp_text_content' );

function my_modify_wp_text_content( $content ) {
    // Process shortcodes within the text widget content.
    $content = do_shortcode( $content );

    return $content;
}
```

## Source

File: `include/templates/shortcodes/vc_wp_text.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.3 | Introduced. |
