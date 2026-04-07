---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_get_editor_locale

Filters the array of localized strings used by the WPBakery editor JavaScript. These strings are passed to the frontend via `wp_localize_script()` and include labels for UI elements such as buttons, dialogs, and media library prompts.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$locale` | `array` | An associative array of locale string key-value pairs (e.g., `'add_image' => 'Add Image'`, `'settings' => 'Settings'`). |

## Usage

```php
add_filter( 'vc_get_editor_locale', 'wpb_customize_editor_strings' );

function wpb_customize_editor_strings( $locale ) {
    // Override specific editor UI strings
    $locale['add_image'] = 'Insert Image';
    $locale['settings'] = 'Options';
    return $locale;
}
```

## Source

File: `include/classes/core/class-vc-base.php`
