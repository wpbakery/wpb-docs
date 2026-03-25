---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_get_inline_url

Filters the URL used to open the WPBakery frontend (inline) editor for a specific post. The URL points to `admin_url()` with query parameters for the post ID, post type, and optional page URL.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$url` | `string` | The full frontend editor URL (e.g., `https://example.com/wp-admin/post.php?vc_action=vc_inline&post_id=123&post_type=page`). |

## Usage

```php
add_filter( 'vc_get_inline_url', 'wpb_modify_inline_editor_url' );

function wpb_modify_inline_editor_url( $url ) {
    // Add a custom query parameter to the frontend editor URL
    return add_query_arg( 'my_param', '1', $url );
}
```

## Source

File: `include/classes/editors/class-vc-frontend-editor.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.2 | Introduced. |
