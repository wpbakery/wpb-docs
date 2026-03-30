---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_autocomplete_render_filter

Filters the rendered output of the autocomplete parameter field. Use this to override the full HTML output of the autocomplete param in the edit form.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$output` | string | The rendered HTML of the autocomplete field. |

## Usage

```php
<?php
add_filter( 'vc_autocomplete_render_filter', 'my_custom_function', 10, 1 );

function my_custom_function( $output ) {
    // Modify autocomplete field HTML
    $output = str_replace( 'class="vc_autocomplete"', 'class="vc_autocomplete my-custom-class"', $output );

    return $output;
}
```

## Source

File: `include/params/autocomplete/autocomplete.php`
