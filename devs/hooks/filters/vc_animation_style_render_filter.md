---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_animation_style_render_filter

Filters the rendered output of the animation style parameter field. Use this to override the full HTML output of the CSS animation param in the edit form.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$output` | string | The rendered HTML of the animation style field. |
| `$settings` | array | The param settings array. |
| `$value` | string | The current param value. |
| `$tag` | string | The shortcode tag. |

## Usage

```php
<?php
add_filter( 'vc_animation_style_render_filter', 'my_custom_function', 10, 4 );

function my_custom_function( $output, $settings, $value, $tag ) {
    // Add custom markup to the animation param field
    $output .= '<div class="my-custom-animation-note">Custom animation options enabled.</div>';

    return $output;
}
```

## Source

File: `include/params/animation_style/animation_style.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.4 | Introduced. |
