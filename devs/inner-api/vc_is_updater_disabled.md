---
sidebar_position: 8
---

# vc_is_updater_disabled()

Helper function that will return (bool) true if automatic updates are disabled for WPBakery Page Builder when it is integrated in to the theme. This is true if theme author called [`vc_set_as_theme(true)`](/docs/inner-api/vc_set_as_theme) from theme’s functions.php file.

```php
<?php vc_is_updater_disabled(); ?>
```

## Parameters

None.

## Example
Check if updates are disabled for WPBakery Page Builder when it is running in a "theme mode".


```php
<?php
if ( vc_is_updater_disabled() ) {
  //Do something
}
?>
```
