---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# wpb_ai_modal_type_dependency

Filters the mapping between parameter types and their AI modal template paths. This allows adding or modifying which AI modal template is used for each parameter type.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$type_dependency` | array | Associative array mapping parameter type names to their AI modal template file paths. |

## Usage

```php
<?php
add_filter( 'wpb_ai_modal_type_dependency', 'my_custom_ai_modal_types' );

function my_custom_ai_modal_types( $type_dependency ) {
    // Add a custom parameter type with a specific AI modal template
    $type_dependency['my_custom_field'] = 'editors/popups/ai/generate-text.php';
    return $type_dependency;
}
```

## Source

File: `modules/ai/class-vc-ai-modal-controller.php`
