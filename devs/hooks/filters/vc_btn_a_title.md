---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_btn_a_title

Filters the title attribute of the Button element anchor tag before it is rendered. This allows modification of the button's title text, which is typically displayed as a tooltip on hover.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$a_title` | string | The button title text extracted from the link field. |

## Usage

```php
<?php
add_filter( 'vc_btn_a_title', 'my_custom_btn_title' );

function my_custom_btn_title( $a_title ) {
    // Append additional context to button titles
    if ( ! empty( $a_title ) ) {
        $a_title .= ' - Click to learn more';
    }
    return $a_title;
}
```

## Source

File: `include/templates/shortcodes/vc_btn.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.5 | Introduced. |
