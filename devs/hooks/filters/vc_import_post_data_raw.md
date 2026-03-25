---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_import_post_data_raw

Filters the raw post data from the import file before it is processed during the WPBakery template import. This is applied to each post entry before any validation or data transformation occurs.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$post` | array | The raw post data array from the import file. Contains fields like `post_id`, `post_type`, `post_title`, `post_content`, `post_status`, `post_date`, `post_name`, `post_author`, `postmeta`, and other WordPress post fields. |

## Usage

```php
<?php
add_filter( 'vc_import_post_data_raw', 'my_custom_import_raw_data', 10, 1 );

function my_custom_import_raw_data( $post ) {
    // Modify the raw post content before processing
    $post['post_content'] = str_replace( 'old-shortcode', 'new-shortcode', $post['post_content'] );
    return $post;
}
```

## Source

File: `include/classes/core/shared-templates/importer/class-vc-wp-import.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.4 | Introduced. |
