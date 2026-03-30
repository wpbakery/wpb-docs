---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# wpb_disable_local_fonts

Filters whether to disable the local Google Fonts feature. When this filter returns `true`, Google Fonts will not be served locally even if the option is enabled in settings.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$disable` | bool | Whether to disable local fonts. Default `false`. |

## Usage

```php
<?php
add_filter( 'wpb_disable_local_fonts', '__return_true' );
```

## Source

File: `include/autoload/classes/class-local-fonts.php`
