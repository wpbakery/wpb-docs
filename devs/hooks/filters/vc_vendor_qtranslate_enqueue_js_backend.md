---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_vendor_qtranslate_enqueue_js_backend

Filters whether to enqueue the qTranslate backend JavaScript integration regardless of the current post type validity check.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$enqueue` | bool | Whether to enqueue the qTranslate backend script. Default `false`. |

## Usage

```php
<?php
add_filter( 'vc_vendor_qtranslate_enqueue_js_backend', 'my_enqueue_qtranslate_backend' );

function my_enqueue_qtranslate_backend( $enqueue ) {
    // Force enqueue qTranslate backend script on all post types.
    return true;
}
```

## Source

File: `include/classes/vendors/plugins/class-vc-vendor-qtranslate.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.3 | Introduced. |
