---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_render_settings_preset_popup

Filters the template file path used to render the settings preset popup. Use this to replace the default preset popup template with a custom one.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$template` | string | The relative template file path. Default: `'editors/partials/settings_presets_popup.tpl.php'`. |

## Usage

```php
<?php
add_filter( 'vc_render_settings_preset_popup', 'my_custom_preset_popup_template', 10, 1 );

function my_custom_preset_popup_template( $template ) {
    // Use a custom template for the preset popup
    return 'editors/partials/my-custom-presets-popup.tpl.php';
}
```

## Source

File: `include/classes/core/presets/class-vc-settings-presets.php`

## Changelog

| Version | Description |
|---------|-------------|
| 5.2 | Introduced. |
