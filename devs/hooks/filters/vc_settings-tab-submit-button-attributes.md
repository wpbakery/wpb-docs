---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_settings-tab-submit-button-attributes

Filters the HTML attributes array for the submit button on WPBakery settings tabs. Use this to add custom data attributes, classes, or other HTML attributes to the settings save button.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$submit_button_attributes` | array | Associative array of HTML attribute name-value pairs for the submit button. |
| `$tab` | string | The current settings tab slug (e.g., `'general'`, `'color'`, `'vc-roles'`). |

## Usage

```php
<?php
add_filter( 'vc_settings-tab-submit-button-attributes', 'my_modify_submit_button', 10, 2 );

function my_modify_submit_button( $submit_button_attributes, $tab ) {
    // Add a confirmation data attribute to the color tab submit button
    if ( 'color' === $tab ) {
        $submit_button_attributes['data-confirm'] = 'true';
    }
    return $submit_button_attributes;
}
```

## Source

File: `include/templates/pages/vc-settings/tab.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.5 | Introduced. |
