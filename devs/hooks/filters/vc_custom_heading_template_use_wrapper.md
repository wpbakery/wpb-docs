---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_custom_heading_template_use_wrapper

Filters whether the Custom Heading element should use an additional wrapper `<div>` around the heading tag. When set to `true`, the heading is wrapped in a `<div>` with CSS classes and attributes. When `false` (default), the CSS class and attributes are applied directly to the heading tag.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$use_wrapper` | bool | Whether to use a wrapper div. Default `false`. |

## Usage

```php
<?php
add_filter( 'vc_custom_heading_template_use_wrapper', '__return_true' );
```

## Source

File: `include/templates/shortcodes/vc_custom_heading.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.4 | Introduced. |
