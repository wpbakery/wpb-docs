---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_templates_render_category

Filters the rendered output for a template category tab in the templates panel. The returned array should include an `output` key containing the HTML string.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$category` | array | The category data array containing keys such as `category`, `category_name`, `category_description`, `category_weight`, and `templates`. |

## Usage

```php
<?php
add_filter( 'vc_templates_render_category', 'my_render_template_category' );

function my_render_template_category( $category ) {
    if ( 'my_custom_category' === $category['category'] ) {
        $category['output'] = '<div class="my-templates-grid">Custom category output</div>';
    }

    return $category;
}
```

## Source

File: `include/templates/editors/popups/vc_ui-panel-templates.tpl.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.4 | Introduced. |
