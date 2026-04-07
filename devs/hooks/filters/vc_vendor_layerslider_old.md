---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_vendor_layerslider_old

Filters whether to use the old-style LayerSlider vendor integration that queries the database directly instead of using the `LS_Sliders` class.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$use_old` | bool | Whether to use the old LayerSlider integration style. Default depends on whether the `LS_Sliders` class exists. |

## Usage

```php
<?php
add_filter( 'vc_vendor_layerslider_old', 'my_force_old_layerslider' );

function my_force_old_layerslider( $use_old ) {
    // Force the old-style LayerSlider integration.
    return true;
}
```

## Source

File: `include/classes/vendors/plugins/class-vc-vendor-layerslider.php`
