---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_gitem_template_attribute_\{name\}

Dynamic filter that allows modification of a specific grid item template attribute value. The `{name}` part is the attribute name being requested (e.g., a post field like `post_title`, `post_date`, or a custom attribute like `acf_value`, `woocommerce_product_price_value`).

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$value` | `mixed` | The attribute value. For standard post fields, this is the value of `$post->{name}`. For custom attributes, this is the processed value from the attribute callback. |
| `$data` | `array` | A context array containing `post` (the `WP_Post` object) and `data` (additional attribute data string). |

## Usage

```php
// Filter the post_title attribute in grid items
add_filter( 'vc_gitem_template_attribute_post_title', 'wpb_modify_gitem_post_title', 10, 2 );

function wpb_modify_gitem_post_title( $value, $data ) {
    // Truncate long titles in grid items
    if ( strlen( $value ) > 50 ) {
        $value = substr( $value, 0, 50 ) . '...';
    }
    return $value;
}

// Filter a custom attribute (e.g., ACF value)
add_filter( 'vc_gitem_template_attribute_acf_value', 'wpb_modify_gitem_acf_value' );

function wpb_modify_gitem_acf_value( $value ) {
    return wp_kses_post( $value );
}
```

## Source

File: `include/params/vc_grid_item/attributes.php`
