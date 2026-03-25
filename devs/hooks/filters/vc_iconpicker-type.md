---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_iconpicker-type-\{type\}

Dynamic filter that provides the list of icons for a specific icon picker type. The `{type}` portion of the filter name is replaced with the icon library type (e.g., `fontawesome`, `openiconic`, `typicons`, `entypo`, `linecons`, `monosocial`, `material`). This filter is used to register custom icon libraries or modify existing ones.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$icons` | array | An array of icon definitions. Can be a flat array of icon CSS classes or a categorized array where each element contains a group label and its icons. |

## Usage

```php
<?php
// Register a custom icon library type
add_filter( 'vc_iconpicker-type-my_custom_icons', 'my_custom_icon_library', 10, 1 );

function my_custom_icon_library( $icons ) {
    return array(
        'My Icons' => array(
            array( 'my-icon-home' => 'Home' ),
            array( 'my-icon-user' => 'User' ),
            array( 'my-icon-settings' => 'Settings' ),
        ),
    );
}

// Modify an existing icon library (e.g., Font Awesome)
add_filter( 'vc_iconpicker-type-fontawesome', 'my_custom_fontawesome_icons', 10, 1 );

function my_custom_fontawesome_icons( $icons ) {
    // Add custom icons to the Font Awesome list
    $icons[] = array( 'fa fa-custom-icon' => 'Custom Icon' );
    return $icons;
}
```

## Source

File: `include/params/iconpicker/iconpicker.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.4 | Introduced. |
