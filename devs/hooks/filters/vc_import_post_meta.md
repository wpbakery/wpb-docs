---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_import_post_meta

Filters the array of post meta entries before they are saved during the WPBakery template import process.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$postmeta` | array | An array of post meta entries. Each entry is an associative array with `key` and `value` keys. |
| `$post_id` | int | The ID of the newly inserted post. |
| `$post` | array | The original raw post data from the import file. |

## Usage

```php
<?php
add_filter( 'vc_import_post_meta', 'my_custom_import_post_meta', 10, 3 );

function my_custom_import_post_meta( $postmeta, $post_id, $post ) {
    // Add custom meta data to imported posts
    $postmeta[] = array(
        'key' => '_imported_from',
        'value' => 'wpbakery_template',
    );
    return $postmeta;
}
```

## Source

File: `include/classes/core/shared-templates/importer/class-vc-wp-import.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.4 | Introduced. |
