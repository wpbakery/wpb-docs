---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_settings_page_show_typography_tab

Controls whether the Typography tab is displayed on the WPBakery Page Builder settings page.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$show` | bool | Whether to show the Typography tab. Default `true`. |

## Usage

```php
<?php
add_filter( 'vc_settings_page_show_typography_tab', 'my_hide_typography_tab' );

function my_hide_typography_tab( $show ) {
    // Hide the Typography tab from the settings page.
    return false;
}
```

## Source

File: `modules/typography/class-vc-typography-module-settings.php`
