---
sidebar_position: 24
---

# vc_editor_set_post_types()

SINCE 4.4

```php
<?php vc_editor_set_post_types($post_types) ?>
```

Use this function to programmatically define which post types should have WPBakery Page Builder enabled.

### Params

| Param name | Type | Required | Description |
|------------|------|----------|-------------|
| $post_types | Array | Yes | Array of post type names. |

### Example

Enable WPBabery for posts.

```php
<?php
add_action( 'vc_before_init', 'custom_set_wpbakery_editor_post_types' );
function custom_set_wpbakery_editor_post_types() {
    vc_editor_set_post_types( [ 'post', 'portfolio' ] );
}
?>
```
