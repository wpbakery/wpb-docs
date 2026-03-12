---
sidebar_position: 23
---

# vc_default_editor_post_types()

SINCE 4.2

```php
<?php vc_default_editor_post_types() ?>
```

Returns a list of default post-types where you can use the WPBakery Page Builder editor.

### Example

You can check if the current post type is in the list of default WPBakery editor post types and add an additional class to the body element if it is in there.

```php
<?php
add_action( 'wp', 'custom_handle_vc_enabled_post_types' );
function custom_handle_vc_enabled_post_types() {
    if ( ! is_singular() ) {
       return; // Only single post/page/custom-post views.
    }

    $current_post_type = get_post_type();

    if ( ! $current_post_type ) {
       return; // No post type found.
    }

    $vc_post_types = vc_default_editor_post_types();

    if ( in_array( $current_post_type, $vc_post_types, true ) ) {
       // This post type supports WPBakery editor.

       // Example: Add a special body class
       add_filter( 'body_class', function( $classes ) {
          $classes[] = 'custom-addition-body-class';
          return $classes;
       } );
    }
}
?>
```
