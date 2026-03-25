---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc\_load\_iframe\_jscss

Fires after the frontend editor enqueues its core JavaScript and CSS assets for the inline iframe. Use this hook to enqueue additional scripts or styles that should be loaded inside the frontend editor iframe.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_load_iframe_jscss', 'wpb_enqueue_iframe_assets' );

function wpb_enqueue_iframe_assets() {
    wp_enqueue_script(
        'my-iframe-script',
        plugins_url( 'js/iframe-custom.js', __FILE__ ),
        array( 'jquery' ),
        '1.0.0',
        true
    );
    wp_enqueue_style(
        'my-iframe-style',
        plugins_url( 'css/iframe-custom.css', __FILE__ ),
        array(),
        '1.0.0'
    );
}
```

## Source

File: `include/classes/editors/class-vc-frontend-editor.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.2 | Introduced. |
