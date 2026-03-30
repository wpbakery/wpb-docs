---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_page-welcome-slugs-list

Filters the list of tab slugs and labels displayed on the WPBakery Welcome screen. Use this to add, remove, or modify tabs on the welcome page.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$tabs` | array | Associative array of tab slugs mapped to their display labels. Default tabs include `vc-welcome`, `vc-faq`, and `vc-resources`. |

## Usage

```php
<?php
add_filter( 'vc_page-welcome-slugs-list', 'my_modify_welcome_tabs', 10, 1 );

function my_modify_welcome_tabs( $tabs ) {
    // Add a custom tab to the welcome screen
    $tabs['vc-my-custom-tab'] = esc_html__( 'My Custom Tab', 'my-theme' );
    return $tabs;
}
```

## Source

File: `include/autoload/vc-pages/welcome-screen.php`
