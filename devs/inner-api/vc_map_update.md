---
sidebar_position: 10
---

# vc_map_update()

After `vc_map()` function call all mapping data is stored in memory, if you need to modify one of the existing parameters you can use `vc_map_update()` function to do that.

This is useful if you want to make a simple change to the existing content elements.

For example: Change content element name.

```php
<?php vc_map_update( $shortcode, $settings ); ?>
```

## Parameters

### $shortcode

* Type - String
* Description - Shortcode base. For `[my_shortcode]` shortcode base is `my_shortcode`. For default "Message box" element, base is `vc_message`.
* Example:
```php
$shortcode = 'my_shortcode';
```

### $settings

* Type - String
* Description - Array with list of settings that should be updated for desired content element. List of [settings](docs/element-development/parameter-types) that can be changed.
* Example:
```php
$settings = array(
    'name' => __( 'New Name', 'my-text-domain' ),
    'description' => __( 'New description for the content element.', 'my-text-domain' ),
);
```

## Example
How to change default `name` and `category` values for "Message box" content element.

```php
<?php
$settings = array (
    'name' => __( 'Mew name', 'my-text-domain' ),
    'category' => __( 'New category name', 'my-text-domain' )
);

vc_map_update( 'vc_message', $settings ); // Note: 'vc_message' was used as a base for "Message box" element
?>
```
