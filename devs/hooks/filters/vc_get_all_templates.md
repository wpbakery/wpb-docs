---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_get_all_templates

Filters the complete array of template categories and their templates displayed in the WPBakery templates panel. Use this filter to add custom template categories or modify existing ones.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$data` | `array` | An array of template category arrays. Each category array contains keys like `category` (identifier), `category_name` (display name), `category_description`, `category_weight`, and `templates` (array of template items). |

## Usage

```php
add_filter( 'vc_get_all_templates', 'wpb_add_custom_template_category' );

function wpb_add_custom_template_category( $data ) {
    $data[] = [
        'category'             => 'my_custom_templates',
        'category_name'        => 'My Custom Templates',
        'category_description' => 'A collection of custom page layouts.',
        'category_weight'      => 10,
        'templates'            => [
            [
                'name'    => 'Landing Page',
                'content' => '[vc_row][vc_column][vc_column_text]Welcome[/vc_column_text][/vc_column][/vc_row]',
            ],
        ],
    ];
    return $data;
}
```

## Source

File: `include/classes/editors/popups/class-vc-templates-panel-editor.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.7 | Introduced. |
