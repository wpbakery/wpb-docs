---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc\_mapper\_init\_after

Fires after the WPBakery mapper has completed initialization, including loading parameter definitions, setting the init flag, loading the lean map configuration, and processing all queued activities. Use this hook to run code that depends on all elements being fully mapped and available.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_mapper_init_after', 'wpb_after_mapper_init' );

function wpb_after_mapper_init() {
    // All elements are now mapped - safe to query or modify them
    $element = WPBMap::getShortCode( 'vc_column_text' );
    if ( $element ) {
        // Modify element settings after full initialization
    }
}
```

## Source

File: `include/classes/core/class-vc-mapper.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.2 | Introduced. |
