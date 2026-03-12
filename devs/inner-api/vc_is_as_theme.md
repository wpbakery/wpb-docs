---
sidebar_position: 7
---

# vc_is_as_theme()

Helper function that will return (bool) true if WPBakery Page Builder is integrated in to the theme. This is true if theme author called [`vc_set_as_theme()`](/docs/inner-api/vc_set_as_theme) from theme's functions.php file.

```php
<?php vc_is_as_theme(); ?>
```

## Parameters

None.

## Example
Check if WPBakery Page Builder is running in a "theme mode".

```php
<?php
if ( vc_is_as_theme() ) {
  //Do something
}
?>
```
