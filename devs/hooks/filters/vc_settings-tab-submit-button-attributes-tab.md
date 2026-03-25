---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc\_settings-tab-submit-button-attributes-\{tab\}

Filters the submit button attributes for a specific settings tab. The dynamic portion of the hook name, `{tab}`, refers to the settings tab slug (e.g., `general`, `color`, `custom_css`). This allows modifying the HTML attributes of the submit button on a per-tab basis.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$attributes` | array | An array of HTML attributes for the submit button. |
| `$tab` | string | The current settings tab slug. |

## Usage

```php
<?php
add_filter( 'vc_settings-tab-submit-button-attributes-general', 'my_submit_button_attrs', 10, 2 );

function my_submit_button_attrs( $attributes, $tab ) {
    // Add a confirmation data attribute to the submit button
    $attributes['data-confirm'] = 'Are you sure you want to save?';
    return $attributes;
}
```

## Source

File: `include/templates/pages/vc-settings/tab.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.8 | Introduced. |
