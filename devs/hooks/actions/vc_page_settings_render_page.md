---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc\_page\_settings\_render-\{page\}

Dynamic action that fires before a specific WPBakery settings page is rendered. The `{page}` portion of the hook name is replaced with the current page slug from the query parameter. Use this hook to execute code or output content before a particular settings page renders.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_page_settings_render-vc-general', 'wpb_before_general_settings_render' );

function wpb_before_general_settings_render() {
    // Run custom logic before the General settings page renders
    echo '<div class="notice notice-info"><p>Custom notice on the General settings page.</p></div>';
}
```

## Source

File: `include/autoload/vc-pages/settings-tabs.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.5 | Introduced. |
