---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_setting-tab-form-\{tab\}

Filters additional form attributes for a specific settings tab. The dynamic portion of the hook name, `{tab}`, refers to the settings tab slug (e.g., `general`, `color`, `custom_css`). The filtered value is echoed directly inside the opening `<form>` tag.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$attributes` | string | Additional HTML attributes to add to the form tag. Default empty string. |

## Usage

```php
<?php
add_filter( 'vc_setting-tab-form-general', 'my_settings_form_attributes' );

function my_settings_form_attributes( $attributes ) {
    // Add a custom data attribute to the general settings form
    return $attributes . ' data-custom="true"';
}
```

## Source

File: `include/templates/pages/vc-settings/tab.php`
