---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_basic_grid_filter_query_suppress_filters

Filters the `suppress_filters` parameter used in the Post Grid WP_Query. By default, this is set to `true`, which prevents other query filters from modifying the grid query. Set to `false` to allow other plugins (such as WPML) to filter the query.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$suppress_filters` | bool | Whether to suppress query filters. Default `true`. |

## Usage

```php
<?php
// Allow WPML or other plugins to filter the grid query
add_filter( 'vc_basic_grid_filter_query_suppress_filters', '__return_false' );
```

## Source

File: `include/classes/shortcodes/vc-basic-grid.php`
