---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# wpb_cta_text

Filters the call-to-action text HTML output in the CTA Button element. This allows modifying the heading markup and content of the CTA text.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$output` | string | The HTML output for the CTA text, wrapped in an `h2` tag with class `wpb_call_text`. |
| `$args` | array | An associative array containing the `content` key with the raw call text string. |

## Usage

```php
<?php
add_filter( 'wpb_cta_text', 'my_custom_cta_text', 10, 2 );

function my_custom_cta_text( $output, $args ) {
    // Change the heading tag from h2 to h3
    $output = '<h3 class="wpb_call_text">' . esc_html( $args['content'] ) . '</h3>';
    return $output;
}
```

## Source

File: `include/templates/shortcodes/vc_cta_button.php`
