---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc-ui-pointers

Filters the list of UI pointers (admin help tooltips) registered for the current screen.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$pointers` | array | An empty array to add pointer definitions to. |

## Usage

```php
<?php
add_filter( 'vc-ui-pointers', 'my_custom_function', 10, 1 );

function my_custom_function( $pointers ) {
    // Register a custom UI pointer
    $pointers[] = array(
        'id'       => 'my_custom_pointer',
        'screen'   => 'post',
        'target'   => '#my-element',
        'title'    => 'My Custom Pointer',
        'content'  => 'This is a helpful tooltip for my custom feature.',
        'position' => array( 'edge' => 'left', 'align' => 'middle' ),
    );
    return $pointers;
}
```

## Source

File: `include/autoload/hooks/vc-ui-pointers.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.8 | Introduced. |
