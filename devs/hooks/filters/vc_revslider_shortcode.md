---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_revslider_shortcode

Filters the rendered output of the Revolution Slider shortcode within the WPBakery Revolution Slider element. Allows modification of the slider HTML before it is appended to the element output.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$output` | string | The rendered HTML output from executing the `[rev_slider]` shortcode via `do_shortcode()`. |

## Usage

```php
<?php
add_filter( 'vc_revslider_shortcode', 'my_modify_revslider_output', 10, 1 );

function my_modify_revslider_output( $output ) {
    // Wrap the Revolution Slider output in a custom container
    return '<div class="my-revslider-wrapper">' . $output . '</div>';
}
```

## Source

File: `include/templates/shortcodes/rev_slider_vc.php`
