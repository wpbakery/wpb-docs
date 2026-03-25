---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# wpb\_shortcode\_acf\_display\_when\_empty\_value

Filters whether the ACF (Advanced Custom Fields) shortcode element should render output when the field value is empty. By default, the element does not display anything when the ACF field has no value.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$show_empty` | bool | Whether to display the element when the ACF field value is empty. Default `false`. |

## Usage

```php
<?php
add_filter( 'wpb_shortcode_acf_display_when_empty_value', '__return_true' );
```

## Source

File: `include/classes/vendors/plugins/acf/class-vc-acf-shortcode.php`

## Changelog

| Version | Description |
|---------|-------------|
| 7.0 | Introduced. |
