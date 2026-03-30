---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_add_element_box_buttons

Filters the rendered HTML output of the add element box buttons. This allows you to modify the complete list of element buttons displayed in the "Add Element" panel.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$output` | string | The complete HTML output of element box buttons. |

## Usage

```php
<?php
add_filter( 'vc_add_element_box_buttons', 'my_custom_function', 10, 1 );

function my_custom_function( $output ) {
    // Append custom HTML to the element box
    $output .= '<div class="my-custom-element-button">Custom Element</div>';
    return $output;
}
```

## Source

File: `include/classes/editors/popups/class-vc-add-element-box.php`
