---
sidebar_position: 12
---

# vc_remove_element()

To remove content element from WPBakery Page Builder editor you should call `vc_remove_element()` function from your theme’s *functions.php* file with shortcode’s base passed as parameter.

```php
<?php vc_remove_element( $shortcode ); ?>
```

## Parameters

### $shortcode

* Type - String
* Description - Shortcode base. For `[my_shortcode]` shortcode base is `my_shortcode`. For default "Message box" element, base is `vc_message`.
* Example:
```php
$shortcode = 'my_shortcode';
```

## Example
To remove default "Message box" element from WPBakery Page Builder use this code:

```php
<?php
vc_remove_element( "vc_message" );
//Note: "vc_message" was used in the vc_map() function call as a base parameter for "Message box" element
?>
```
