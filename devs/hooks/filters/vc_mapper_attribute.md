---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_mapper_attribute

Filters each parameter (attribute) definition when a shortcode is being mapped. This hook fires for every parameter of every element during the mapping process, allowing you to modify parameter settings globally.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$attribute` | array | The parameter definition array containing keys like `type`, `heading`, `param_name`, `value`, etc. |
| `$name` | string | The shortcode tag name (element base) that this parameter belongs to. |

## Usage

```php
<?php
add_filter( 'vc_mapper_attribute', 'my_modify_mapper_attribute', 10, 2 );

function my_modify_mapper_attribute( $attribute, $name ) {
    // Add a custom dependency to all textarea_html params
    if ( 'textarea_html' === $attribute['type'] ) {
        $attribute['description'] = esc_html__( 'Enter your content here.', 'my-theme' );
    }
    return $attribute;
}
```

## Source

File: `include/classes/core/class-wpb-map.php`
