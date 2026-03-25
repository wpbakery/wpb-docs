---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_settings_page_show_design_tabs

Controls whether the Design Options tab is displayed on the WPBakery Page Builder settings page when the plugin is activated as a theme-bundled version.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$show` | bool | Whether to show the Design Options tab. Default `false`. |

## Usage

```php
<?php
add_filter( 'vc_settings_page_show_design_tabs', 'my_show_design_tabs' );

function my_show_design_tabs( $show ) {
    // Show the Design Options tab even in theme-bundled mode.
    return true;
}
```

## Source

File: `modules/design-options/class-vc-design-options-module-settings.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.8 | Introduced. |
