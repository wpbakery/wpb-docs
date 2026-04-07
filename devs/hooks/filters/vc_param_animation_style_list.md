---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_param_animation_style_list

Filters the list of available CSS animation styles for the animation_style parameter type. Use this to add custom animation groups or remove existing animation options.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$styles` | array | Array of animation style groups. Each group contains a `label` and a `values` array of animation names. |

## Usage

```php
<?php
add_filter( 'vc_param_animation_style_list', 'my_custom_animation_styles', 10, 1 );

function my_custom_animation_styles( $styles ) {
    // Add a custom animation group
    $styles[] = [
        'label' => esc_html__( 'My Custom Animations', 'my-theme' ),
        'values' => [
            esc_html__( 'Slide Up', 'my-theme' ) => [
                'value' => 'my-slide-up',
                'type' => 'in',
            ],
            esc_html__( 'Slide Down', 'my-theme' ) => [
                'value' => 'my-slide-down',
                'type' => 'in',
            ],
        ],
    ];
    return $styles;
}
```

## Source

File: `include/params/animation_style/animation_style.php`
