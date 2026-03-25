---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc\_ui-pointers-\{screen\_id\}

Filters UI pointers for a specific admin screen. The dynamic portion of the hook name, `{screen_id}`, refers to the WordPress admin screen ID (e.g., `post`, `page`, `edit-post`). This allows adding custom admin pointers (tooltips) to specific screens.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$pointers` | array | An associative array of pointer definitions. Each pointer should include configuration keys such as `target`, `options` (with `content` and `position`), etc. |

## Usage

```php
<?php
add_filter( 'vc_ui-pointers-post', 'my_custom_admin_pointers' );

function my_custom_admin_pointers( $pointers ) {
    $pointers['my-pointer'] = [
        'target' => '#my-element',
        'options' => [
            'content' => '<h3>My Pointer</h3><p>This is a custom admin pointer.</p>',
            'position' => [
                'edge' => 'left',
                'align' => 'center',
            ],
        ],
    ];
    return $pointers;
}
```

## Source

File: `include/autoload/hooks/vc-ui-pointers.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.5 | Introduced. |
