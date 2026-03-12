---
sidebar_position: 6
---

# vc_enabled_frontend()

Returns (bool) true if front end editor is enabled or (bool) false if theme author previously used [`vc_disable_frontend()`](/docs/inner-api/vc_disable_frontend) to disabled front end editor on the site.

```php
<?php vc_enabled_frontend(); ?>
```

## Parameters

None.

## Example
Check if frontend editing mode is enabled on your site.

```php
<?php
if ( vc_enabled_frontend() ) {
  // Front end editor mode is enabled. Do something.
}
?>
```
