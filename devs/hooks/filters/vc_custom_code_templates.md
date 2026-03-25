---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_custom_code_templates

Filters the list of tab templates used in the Custom Code popup panel. Modules such as Custom CSS and Custom JS use this filter to register their editor templates for each tab in the panel.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$templates` | array | Array of template data for the custom code panel tabs. Default empty array. |

## Usage

```php
<?php
add_filter( 'vc_custom_code_templates', 'my_custom_code_templates' );

function my_custom_code_templates( $templates ) {
    // Add a custom template for the code panel
    $templates[] = array(
        'slug'     => 'custom_php',
        'template' => plugin_dir_path( __FILE__ ) . 'templates/custom-php-editor.php',
    );
    return $templates;
}
```

## Source

File: `include/classes/editors/popups/class-vc-custom-code.php`

## Changelog

| Version | Description |
|---------|-------------|
| 8.0 | Introduced. |
