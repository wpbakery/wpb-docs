---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_frontend_editor_new_post_data

Filters the post data array used when creating or updating a new post through the frontend editor. This allows modification of the default post data (ID, status, title) before `wp_update_post()` is called.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$post_data` | `array` | The post data array with keys `ID` (post ID), `post_status` (default `'draft'`), and `post_title` (default empty string). |
| `$post` | `WP_Post` | The current post object being edited. |

## Usage

```php
add_filter( 'vc_frontend_editor_new_post_data', 'wpb_modify_new_post_data', 10, 2 );

function wpb_modify_new_post_data( $post_data, $post ) {
    // Set a default title for new posts created via the frontend editor
    if ( empty( $post_data['post_title'] ) ) {
        $post_data['post_title'] = 'New Page - ' . current_time( 'Y-m-d' );
    }
    return $post_data;
}
```

## Source

File: `include/classes/editors/class-vc-frontend-editor.php`

## Changelog

| Version | Description |
|---------|-------------|
| 8.5 | Introduced. |
