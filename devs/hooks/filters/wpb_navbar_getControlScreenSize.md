---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# wpb_navbar_getControlScreenSize

Filters the device list of the responsive preview dropdown in the navigation bar of both editors. Since version 9.1 the list is built from the [breakpoints](/docs/building-with-wpbakery/responsive-settings) set in Design Options, and selecting an entry also sets the device being edited.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$screen_sizes` | array | List of device entries, widest first. Each entry has `title`, `size` (CSS width of the preview, e.g. `1024px` or `100%`), `key` (icon: `default`, `landscape-tablets`, `portrait-tablets`, `landscape-smartphones` or `portrait-smartphones`), `device` (device key the entry edits: `xl`, `lg`, `md`, `sm` or `xs`), `min` and `max` (screen width range in px, `null` when open) and `active` on the default entry. |

## Usage

```php
<?php
add_filter( 'wpb_navbar_getControlScreenSize', 'my_custom_screen_sizes' );

function my_custom_screen_sizes( $screen_sizes ) {
    // Remove the mobile horizontal preview from the dropdown.
    return array_values( array_filter( $screen_sizes, function ( $screen ) {
        return 'sm' !== $screen['device'];
    } ) );
}
```

**Note:** when adding an entry, `key` must be one of the icon keys listed above, the navigation bar loads the icon template named after it.

## Source

File: `include/classes/editors/navbar/class-vc-navbar.php`
