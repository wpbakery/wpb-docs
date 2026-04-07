---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# wpb_toggle_heading

Filters the heading HTML output of the Toggle (FAQ) element. This allows modifying the toggle heading markup before it is rendered.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$heading_output` | string | The HTML output for the toggle heading. |
| `$args` | array | An associative array with `title` (the toggle title string) and `open` (whether the toggle is open by default). |

## Usage

```php
<?php
add_filter( 'wpb_toggle_heading', 'my_custom_toggle_heading', 10, 2 );

function my_custom_toggle_heading( $heading_output, $args ) {
    // Add an icon before the toggle title
    $heading_output = '<span class="toggle-icon"></span>' . $heading_output;
    return $heading_output;
}
```

## Source

File: `include/templates/shortcodes/vc_toggle.php`
