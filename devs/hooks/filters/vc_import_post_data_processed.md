---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_import_post_data_processed

Filters the processed post data array just before the post is inserted into the database during the WPBakery template import. This is applied after the raw import data has been mapped to WordPress post fields.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$postdata` | array | The processed post data array ready for `wp_insert_post()`. Contains keys like `post_author`, `post_date`, `post_content`, `post_excerpt`, `post_title`, `post_status`, `post_name`, `comment_status`, `ping_status`, `post_parent`, `menu_order`, `post_type`, and `post_password`. |
| `$post` | array | The original raw post data from the import file. |
| `$importer` | Vc_WP_Import | The importer instance. |

## Usage

```php
<?php
add_filter( 'vc_import_post_data_processed', 'my_custom_import_post_data', 10, 3 );

function my_custom_import_post_data( $postdata, $post, $importer ) {
    // Change the post status of imported posts to draft
    $postdata['post_status'] = 'draft';
    return $postdata;
}
```

## Source

File: `include/classes/core/shared-templates/importer/class-vc-wp-import.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.4 | Introduced. |
