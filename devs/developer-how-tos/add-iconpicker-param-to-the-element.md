---
id: add-iconpicker-param-to-the-element
title: Add Iconpicker Param to the Element
sidebar_label: Add Iconpicker Param to the Element
sidebar_position: 2
hide_table_of_contents: true
slug: /developers-how-tos/add-iconpicker-param-to-the-element
---

# Add Iconpicker Param to the Element

WPBakery Page Builder allows you to add an `iconpicker` parameter type to your custom elements, enabling users to select an icon from various icon libraries. Below is a step-by-step guide on how to integrate an icon picker with support for multiple icon libraries.

## 1. Add the Icon Library Dropdown

First, you need to add a `dropdown` parameter to let users select which icon library they want to use. This will output the dropdown field with all the available options:

```php
// Icon library dropdown param definition
[
  'type' => 'dropdown',
  'heading' => esc_html__( 'Icon library', 'js_composer' ),
  'value' => [
     esc_html__( 'Font Awesome', 'js_composer' ) => 'fontawesome',
     esc_html__( 'Open Iconic', 'js_composer' ) => 'openiconic',
     esc_html__( 'Typicons', 'js_composer' ) => 'typicons',
     esc_html__( 'Entypo', 'js_composer' ) => 'entypo',
     esc_html__( 'Linecons', 'js_composer' ) => 'linecons',
     esc_html__( 'Mono Social', 'js_composer' ) => 'monosocial',
     esc_html__( 'Material', 'js_composer' ) => 'material',
  ],
  'admin_label' => true,
  'param_name' => 'type',
  'description' => esc_html__( 'Select icon library.', 'js_composer' ),
]
```

## 2. Add Icon Picker Fields for Each Library

For each icon library, define a separate `iconpicker` parameter. Use the [dependency option](/devs/inner-api/vc_map#param-dependencies) to show the relevant icon picker only when the corresponding icon library is selected.

This will output the icon picker button, which users will be able to click and select the icon from the list.

Here's an example for Font Awesome:

```php
// Iconpicker param definition for Font Awesome
[
  'type' => 'iconpicker',
  'heading' => esc_html__( 'Icon', 'js_composer' ),
  'param_name' => 'icon_fontawesome',
  'value' => 'fas fa-adjust', // Default icon
  'settings' => [
     'emptyIcon' => false,
     'iconsPerPage' => 500, // Display all icons on one page
  ],
  'dependency' => [
     'element' => 'type',
     'value' => 'fontawesome',
  ],
  'description' => esc_html__( 'Select icon from library.', 'js_composer' ),
]
```

## 3. Available icon libraries

Below, you will find all the available libraries within the WPBakey Page Builder. Each library will have its own value to be used in the `iconpicker` parameter.

| Icon Library | Value |
|--------------|-------|
| Font Awesome | `'value' => 'fas fa-adjust',` |
| Open Iconic | `'value' => 'vc-oi vc-oi-dial',` |
| Typicons | `'value' => 'typcn typcn-adjust-brightness',` |
| Entypo | `'value' => 'entypo-icon entypo-icon-note',` |
| Linecons | `'value' => 'vc_li vc_li-heart',` |
| Mono Social | `'value' => 'vc-mono vc-mono-fivehundredpx',` |
| Material | `'value' => 'vc-material vc-material-cake',` |

## 4. Complete code

The following code will create a library dropdown and a icon picker button, based on which library is selected from the dropdown. Add it to your params array.

```php
// Complete icon library dropdown and iconpicker params
$params = [
  [
  'type' => 'dropdown',
  'heading' => esc_html__( 'Icon library', 'js_composer' ),
  'value' => [
     esc_html__( 'Font Awesome', 'js_composer' ) => 'fontawesome',
     esc_html__( 'Open Iconic', 'js_composer' ) => 'openiconic',
     esc_html__( 'Typicons', 'js_composer' ) => 'typicons',
     esc_html__( 'Entypo', 'js_composer' ) => 'entypo',
     esc_html__( 'Linecons', 'js_composer' ) => 'linecons',
     esc_html__( 'Mono Social', 'js_composer' ) => 'monosocial',
     esc_html__( 'Material', 'js_composer' ) => 'material',
  ],
  'admin_label' => true,
  'param_name' => 'type',
  'description' => esc_html__( 'Select icon library.', 'js_composer' ),
],
[
  'type' => 'iconpicker',
  'heading' => esc_html__( 'Icon', 'js_composer' ),
  'param_name' => 'icon_fontawesome',
  'value' => 'fas fa-adjust',
  // default value to backend editor admin_label.
  'settings' => [
     'emptyIcon' => false,
     // default true, display an "EMPTY" icon.
     'iconsPerPage' => 500,
     // default 100, how many icons per/page to display, we use (big number) to display all icons in single page.
  ],
  'dependency' => [
     'element' => 'type',
     'value' => 'fontawesome',
  ],
  'description' => esc_html__( 'Select icon from library.', 'js_composer' ),
],
[
  'type' => 'iconpicker',
  'heading' => esc_html__( 'Icon', 'js_composer' ),
  'param_name' => 'icon_openiconic',
  'value' => 'vc-oi vc-oi-dial',
  // default value to backend editor admin_label.
  'settings' => [
     'emptyIcon' => false,
     // default true, display an "EMPTY" icon.
     'type' => 'openiconic',
     'iconsPerPage' => 4000,
     // default 100, how many icons per/page to display.
  ],
  'dependency' => [
     'element' => 'type',
     'value' => 'openiconic',
  ],
  'description' => esc_html__( 'Select icon from library.', 'js_composer' ),
],
[
  'type' => 'iconpicker',
  'heading' => esc_html__( 'Icon', 'js_composer' ),
  'param_name' => 'icon_typicons',
  'value' => 'typcn typcn-adjust-brightness',
  // default value to backend editor admin_label.
  'settings' => [
     'emptyIcon' => false,
     // default true, display an "EMPTY" icon.
     'type' => 'typicons',
     'iconsPerPage' => 4000,
     // default 100, how many icons per/page to display.
  ],
  'dependency' => [
     'element' => 'type',
     'value' => 'typicons',
  ],
  'description' => esc_html__( 'Select icon from library.', 'js_composer' ),
],
[
  'type' => 'iconpicker',
  'heading' => esc_html__( 'Icon', 'js_composer' ),
  'param_name' => 'icon_entypo',
  'value' => 'entypo-icon entypo-icon-note',
  // default value to backend editor admin_label.
  'settings' => [
     'emptyIcon' => false,
     // default true, display an "EMPTY" icon.
     'type' => 'entypo',
     'iconsPerPage' => 4000,
     // default 100, how many icons per/page to display.
  ],
  'dependency' => [
     'element' => 'type',
     'value' => 'entypo',
  ],
],
[
  'type' => 'iconpicker',
  'heading' => esc_html__( 'Icon', 'js_composer' ),
  'param_name' => 'icon_linecons',
  'value' => 'vc_li vc_li-heart',
  // default value to backend editor admin_label.
  'settings' => [
     'emptyIcon' => false,
     // default true, display an "EMPTY" icon.
     'type' => 'linecons',
     'iconsPerPage' => 4000,
     // default 100, how many icons per/page to display.
  ],
  'dependency' => [
     'element' => 'type',
     'value' => 'linecons',
  ],
  'description' => esc_html__( 'Select icon from library.', 'js_composer' ),
],
[
  'type' => 'iconpicker',
  'heading' => esc_html__( 'Icon', 'js_composer' ),
  'param_name' => 'icon_monosocial',
  'value' => 'vc-mono vc-mono-fivehundredpx',
  // default value to backend editor admin_label.
  'settings' => [
     'emptyIcon' => false,
     // default true, display an "EMPTY" icon.
     'type' => 'monosocial',
     'iconsPerPage' => 4000,
     // default 100, how many icons per/page to display.
  ],
  'dependency' => [
     'element' => 'type',
     'value' => 'monosocial',
  ],
  'description' => esc_html__( 'Select icon from library.', 'js_composer' ),
],
[
  'type' => 'iconpicker',
  'heading' => esc_html__( 'Icon', 'js_composer' ),
  'param_name' => 'icon_material',
  'value' => 'vc-material vc-material-cake',
  // default value to backend editor admin_label.
  'settings' => [
     'emptyIcon' => false,
     // default true, display an "EMPTY" icon.
     'type' => 'material',
     'iconsPerPage' => 4000,
     // default 100, how many icons per/page to display.
  ],
  'dependency' => [
     'element' => 'type',
     'value' => 'material',
  ],
  'description' => esc_html__( 'Select icon from library.', 'js_composer' ),
  ],
];
```
