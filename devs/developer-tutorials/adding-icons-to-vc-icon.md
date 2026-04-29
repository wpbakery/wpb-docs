---
id: adding-icons-to-vc-icon
title: Adding icons to vc_icon
sidebar_label: Adding icons to vc_icon
sidebar_position: 10
hide_table_of_contents: true
slug: /developer-tutorials/adding-icons-to-vc_icon
---

# Adding icons to vc_icon

It is possible to add your own icons to WPBakery Page Builder shortcode vc_icon by following these steps:

1) Add icons param to [vc_map](/devs/inner-api/vc_map) with type **"iconpicker"**

```php
<?php
// Iconpicker param definition
$param = [
      'type' => 'iconpicker',
      'heading' => __( 'Icon', 'js_composer' ),
      'param_name' => 'icon_openiconic',
      'settings' => [
        'emptyIcon' => false, // default true, display an "EMPTY" icon?
        'type' => 'openiconic',
        'iconsPerPage' => 200, // default 100, how many icons per/page to display
      ],
      'dependency' => [
        'element' => 'icon_type',
        'value' => 'openiconic',
      ],
      'description' => __( 'Select icon from library.', 'js_composer' ),
    ];
```

2) Next you need to update icon source dropdown – add value to it (*check dependency as well*) – **vc_map_update param "icon_type" add: __( 'Your icon set name', 'js_composer' ) => 'your_icon_set'**

3) Add filter **vc_iconpicker-type-[type_of_icon_picker_settings]** (*e.g. vc_iconpicker-type-fontawesome*) and return array in this function (*check our `wp-content\plugins\js_composer\include\params\iconpicker\iconpicker.php`*)

4) Next enqueue CSS when necessary: add_action vc_enqueue_font_icon_element (*e.g. \vc_icon_element_fonts_enqueue function*) and enqueue CSS:

```php
<?php
function vc_icon_element_fonts_enqueue( $font ) {
  switch ( $font ) {
    case 'fontawesome':
      wp_enqueue_style( 'font-awesome' );
      // ... other cases
  }
}
```
