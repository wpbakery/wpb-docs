---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_gitem_template_attribute_woocommerce_order_\{field\}

Dynamic filter that allows modification of WooCommerce order field values displayed in grid item templates. The `{field}` portion of the filter name is replaced with the specific order field being filtered (e.g., `id`, `order_number`, `order_total`, `order_date`, `billing_address_country`, `shipping_address_country`).

Two related dynamic filters are available:
- `vc_gitem_template_attribute_woocommerce_order_{field}_value` — filters the field value.
- `vc_gitem_template_attribute_woocommerce_order_{field}_label` — filters the field label when the labeled variant is used.

## Parameters

### For the `_value` variant

| Parameter | Type | Description |
|-----------|------|-------------|
| `$value` | string | The WooCommerce order field value. |

### For the `_label` variant

| Parameter | Type | Description |
|-----------|------|-------------|
| `$label` | string | The field label string with a trailing colon and space (e.g., `"Order Total: "`). |

## Usage

```php
<?php
// Filter the order total value
add_filter( 'vc_gitem_template_attribute_woocommerce_order_order_total_value', 'my_custom_order_total', 10, 1 );

function my_custom_order_total( $value ) {
    // Format the order total with a currency prefix
    return '$' . number_format( (float) $value, 2 );
}

// Filter the order total label
add_filter( 'vc_gitem_template_attribute_woocommerce_order_order_total_label', 'my_custom_order_total_label', 10, 1 );

function my_custom_order_total_label( $label ) {
    return esc_html__( 'Total Amount: ', 'my-theme' );
}
```

## Source

File: `include/classes/vendors/plugins/woocommerce/grid-item-attributes.php`
