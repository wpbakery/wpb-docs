---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_settings_page_show_color-picker-tab

Filters whether the Color Picker Settings tab is displayed on the WPBakery Page Builder settings page. Return `false` to hide the tab and prevent users from accessing the color picker configuration.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$show` | bool | Whether to show the Color Picker Settings tab. Default `true`. |

## Usage

```php
<?php
add_filter( 'vc_settings_page_show_color-picker-tab', 'my_hide_color_picker_tab' );

function my_hide_color_picker_tab( $show ) {
    // Hide the color picker settings tab for non-administrators
    if ( ! current_user_can( 'manage_options' ) ) {
        return false;
    }
    return $show;
}
```

## Source

File: `modules/color-picker/class-vc-color-picker-module-settings.php`
