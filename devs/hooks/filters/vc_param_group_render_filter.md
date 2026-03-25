---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_param_group_render_filter

Filters the rendered HTML output of a param_group field. Use this to modify the rendered markup of parameter group form fields before they are displayed in the editor.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$output` | string | The rendered HTML output of the param_group field. |

## Usage

```php
<?php
add_filter( 'vc_param_group_render_filter', 'my_modify_param_group_output', 10, 1 );

function my_modify_param_group_output( $output ) {
    // Add a custom wrapper around param group output
    return '<div class="my-param-group-wrapper">' . $output . '</div>';
}
```

## Source

File: `include/params/param_group/param_group.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.4 | Introduced. |
