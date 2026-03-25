---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# wpb\_update\_post\_param\_list

Filters the list of post parameter names that WPBakery will update when saving a post from the editor. This allows adding or removing post fields from the save process.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$params` | array | An indexed array of post parameter names to update (e.g., `post_title`, `post_excerpt`, `post_content`). |

## Usage

```php
<?php
add_filter( 'wpb_update_post_param_list', 'my_custom_post_params' );

function my_custom_post_params( $params ) {
    // Add a custom post parameter to the update list
    $params[] = 'post_date';
    return $params;
}
```

## Source

File: `include/classes/core/class-vc-post-admin.php`

## Changelog

| Version | Description |
|---------|-------------|
| 8.7 | Introduced. |
