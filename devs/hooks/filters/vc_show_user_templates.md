---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_show_user_templates

Filters whether the "My Templates" category is shown in the templates panel.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$show` | bool | Whether to show user templates. Default `true`. |

## Usage

```php
<?php
add_filter( 'vc_show_user_templates', 'my_hide_user_templates' );

function my_hide_user_templates( $show ) {
    // Hide the "My Templates" category for non-admin users.
    if ( ! current_user_can( 'manage_options' ) ) {
        return false;
    }

    return $show;
}
```

## Source

File: `include/classes/editors/popups/class-vc-templates-panel-editor.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.4 | Introduced. |
