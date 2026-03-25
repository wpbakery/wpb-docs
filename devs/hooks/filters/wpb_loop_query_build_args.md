---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# wpb\_loop\_query\_build\_args

Filters the WP_Query arguments built by the loop parameter type before the query is executed. This allows modifying query arguments for elements that use the loop parameter (e.g., Post Grid).

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$args` | array | The WP_Query arguments array built from the loop parameter value. |

## Usage

```php
<?php
add_filter( 'wpb_loop_query_build_args', 'my_custom_loop_args' );

function my_custom_loop_args( $args ) {
    // Exclude sticky posts from all loop queries
    $args['ignore_sticky_posts'] = true;
    return $args;
}
```

## Source

File: `include/params/loop/loop.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.4 | Introduced. |
