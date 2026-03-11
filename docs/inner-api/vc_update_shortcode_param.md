---
sidebar_position: 19
---

# vc_update_shortcode_param()

Since 4.2

```php
<?php vc_update_shortcode_param($name, $attribute = []) ?>
```

Change the param attributes of the mapped shortcode or add a new one.

### Params

| Param name | Type | Required | Description |
|------------|------|----------|-------------|
| $tag | String | Yes | The base tag name of the element shortcode. |
| $attribute | Array | No | The attribute list that needs to be updated. |

### Example

You can update the existing param attribute of the element shortcode.

```php
<?php
add_action( 'vc_after_init', 'custom_vc_after_init' );
function custom_vc_after_init() {
    $update_att = [
        'type' => 'dropdown',
        'heading' => esc_html__( 'Alignment Update', 'js_composer' ),
        'param_name' => 'align',
        'value' => [
            esc_html__( 'Left', 'js_composer' ) => 'left',
            esc_html__( 'Center', 'js_composer' ) => 'center',
            esc_html__( 'Right', 'js_composer' ) => 'right',
            esc_html__( 'Top', 'js_composer' ) => 'top',
        ],
        'description' => esc_html__( 'Select icon alignment.', 'js_composer' ),
    ];
    vc_update_shortcode_param('vc_copyright', $update_att);
}
?>
```

### Code explanation

We updated the native "Copyright" element 'align' param with a new name and added an additional 'Top' value to the dropdown.
