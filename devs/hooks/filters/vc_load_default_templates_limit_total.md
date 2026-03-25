---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_load_default_templates_limit_total

Filters the maximum number of default templates displayed in the templates panel. Use this to increase or decrease how many built-in templates are shown to users.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$total` | int | The maximum number of default templates to display. Default `6`. |

## Usage

```php
<?php
add_filter( 'vc_load_default_templates_limit_total', 'my_change_default_templates_limit', 10, 1 );

function my_change_default_templates_limit( $total ) {
    // Show up to 12 default templates
    return 12;
}
```

## Source

File: `include/classes/editors/popups/class-vc-templates-panel-editor.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.4 | Introduced. |
