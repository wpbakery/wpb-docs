---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc\_settings-render-tab-\{tab\}

Filters the template path used to render a specific settings tab. The dynamic portion of the hook name, `{tab}`, refers to the settings tab slug (e.g., `general`, `color`, `custom_css`). This allows replacing the default tab template with a custom one.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$template_path` | string | The template file path relative to the templates directory. Default `pages/vc-settings/tab.php`. |

## Usage

```php
<?php
add_filter( 'vc_settings-render-tab-general', 'my_custom_settings_tab_template' );

function my_custom_settings_tab_template( $template_path ) {
    // Use a custom template for the general settings tab
    return 'my-plugin/custom-settings-tab.php';
}
```

## Source

File: `include/classes/settings/class-vc-settings.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.5 | Introduced. |
