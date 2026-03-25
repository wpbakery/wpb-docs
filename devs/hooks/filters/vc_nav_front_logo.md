---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_nav_front_logo

Filters the HTML output of the WPBakery Page Builder logo displayed in the frontend editor navbar. Use this to replace or modify the logo branding.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$output` | string | The HTML markup for the logo brand button. |

## Usage

```php
<?php
add_filter( 'vc_nav_front_logo', 'my_custom_frontend_logo', 10, 1 );

function my_custom_frontend_logo( $output ) {
    // Replace with a custom logo
    return '<a href="#" class="vc_logo" title="My Builder">
        <img src="' . esc_url( get_template_directory_uri() . '/images/logo.png' ) . '" alt="My Builder" />
    </a>';
}
```

## Source

File: `include/classes/editors/navbar/class-vc-navbar.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.3 | Introduced. |
