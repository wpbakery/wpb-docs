---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc\_mapper\_call\_activities\_before

Fires before the mapper processes its queued activities (element mappings, parameter modifications, etc.). This hook runs at the beginning of `callActivities()` and `callElementActivities()`, allowing you to perform setup before elements are mapped or modified.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_mapper_call_activities_before', 'wpb_before_mapper_activities' );

function wpb_before_mapper_activities() {
    // Run custom logic before element mapping activities are processed
    // For example, conditionally load additional element configurations
    if ( class_exists( 'WooCommerce' ) ) {
        require_once 'my-woo-elements.php';
    }
}
```

## Source

File: `include/classes/core/class-vc-mapper.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.2 | Introduced. |
