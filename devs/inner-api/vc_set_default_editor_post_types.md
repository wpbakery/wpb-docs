---
sidebar_position: 15
---

# vc_set_default_editor_post_types()

To enable WPBakery Page Builder for theme defined post types by default, you can make use of `vc_set_default_editor_post_types()` API function.

```php
<?php vc_set_default_editor_post_types( $list ); ?>
```

## Parameters

### $list

* Type - Array
* Description - An array of post types for which WPBakery Page Builder should be enabled by default.
* Example:
```php
$list = array( 'post', 'page', 'custom_post_type' );
```

## Example
How to add WPBakery Page Builder editing mode to your custom post type.

```php
<?php
$list = array(
  'page',
  'custom_post_type'
);
vc_set_default_editor_post_types( $list );
?>
```
