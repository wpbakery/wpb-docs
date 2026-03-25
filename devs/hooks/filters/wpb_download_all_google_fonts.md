---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# wpb\_download\_all\_google\_fonts

Filters whether to download all Google Fonts for local hosting instead of only the fonts used on the site. By default, only fonts referenced in the content are downloaded.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$download_all` | bool | Whether to download all Google Fonts. Default `false`. |

## Usage

```php
<?php
add_filter( 'wpb_download_all_google_fonts', '__return_true' );
```

## Source

File: `include/autoload/classes/class-local-fonts.php`

## Changelog

| Version | Description |
|---------|-------------|
| 7.6 | Introduced. |
