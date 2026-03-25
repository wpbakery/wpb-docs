---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_get_settings_locale

Filters the array of localized strings used by the WPBakery settings page JavaScript. These strings are localized via `wp_localize_script()` as the `i18nLocaleSettings` object and include confirmation messages, button labels, and status text.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$locale` | `array` | An associative array of locale strings for the settings page (e.g., `'saving' => 'Saving...'`, `'save' => 'Save Changes'`, `'saved' => 'Design Options successfully saved.'`). |

## Usage

```php
add_filter( 'vc_get_settings_locale', 'wpb_customize_settings_strings' );

function wpb_customize_settings_strings( $locale ) {
    $locale['saved'] = 'Your settings have been saved successfully!';
    return $locale;
}
```

## Source

File: `include/classes/settings/class-vc-settings.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.2 | Introduced. |
