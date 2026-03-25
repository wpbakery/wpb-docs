---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_settings_page_show_color-picker-tab

Controls whether the Color Picker Settings tab is displayed on the WPBakery Page Builder settings page.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$show` | bool | Whether to show the Color Picker Settings tab. Default `true`. |

## Usage

```php
<?php
add_filter( 'vc_settings_page_show_color-picker-tab', 'my_hide_color_picker_tab' );

function my_hide_color_picker_tab( $show ) {
    // Hide the Color Picker Settings tab from the settings page.
    return false;
}
```

## Source

File: `modules/color-picker/class-vc-color-picker-module-settings.php`

## Changelog

| Version | Description |
|---------|-------------|
| 7.9 | Introduced. |
