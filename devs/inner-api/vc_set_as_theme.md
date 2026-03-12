---
sidebar_position: 14
---

# vc_set_as_theme()

You as a theme author may want to hide certain WPBakery Page Builder settings tabs, for example: "Design options" and "Custom CSS" tabs under WP Dashboard -> WPBakery Page Builder page.

To do that, you should call `vc_set_as_theme()` function from your *functions.php* file.


```php
<?php vc_set_as_theme(); ?>
```

## Parameters

None.

## Example
How to remove "Design options", "Custom CSS" tabs.

```php
<?php
add_action( 'vc_before_init', 'your_prefix_vcSetAsTheme' );

function your_prefix_vcSetAsTheme() {
  vc_set_as_theme();
}
?>
```
