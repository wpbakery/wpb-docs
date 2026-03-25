---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_raw_html_module_content

Filters the decoded content of the Raw HTML element before it is rendered on the frontend. The content has already been base64-decoded and URL-decoded at this point. Use this to sanitize or modify raw HTML output.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$content` | string | The decoded raw HTML content string. |

## Usage

```php
<?php
add_filter( 'vc_raw_html_module_content', 'my_filter_raw_html_content', 10, 1 );

function my_filter_raw_html_content( $content ) {
    // Remove script tags from raw HTML output
    $content = preg_replace( '/<script\b[^>]*>(.*?)<\/script>/is', '', $content );
    return $content;
}
```

## Source

File: `include/templates/shortcodes/vc_raw_html.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.3 | Introduced. |
