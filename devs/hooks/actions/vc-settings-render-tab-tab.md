---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc-settings-render-tab-\{tab\}

Fires when a specific WPBakery settings tab is being rendered. The dynamic portion of the hook name, `\{tab\}`, refers to the slug of the settings tab being displayed. This allows you to modify the page object or perform actions specific to a particular settings tab.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$page` | `Vc_Page` | The page object for the current settings tab, containing the slug, title, and template path. |

## Usage

```php
add_action( 'vc-settings-render-tab-general', 'wpb_custom_general_tab_render' );

function wpb_custom_general_tab_render( $page ) {
    // Modify the page object or add custom output for the general settings tab
    // e.g., change the template path for a custom layout
    $page->setTemplatePath( 'my-custom-templates/general-tab.php' );
}
```

## Source

File: `include/classes/settings/class-vc-settings.php`
