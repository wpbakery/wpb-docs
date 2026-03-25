---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_gitem_template_attribute_woocommerce_product_\{field\}

Dynamic filter that allows modification of WooCommerce product field values displayed in grid item templates. The `{field}` portion of the filter name is replaced with the specific product field being filtered (e.g., `id`, `sku`, `price`, `regular_price`, `sale_price`, `stock_quantity`, `stock_status`, `weight`, `length`, `width`, `height`, `on_sale`).

Two related dynamic filters are available:
- `vc_gitem_template_attribute_woocommerce_product_{field}_value` — filters the field value.
- `vc_gitem_template_attribute_woocommerce_product_{field}_label` — filters the field label when the labeled variant is used.

## Parameters

### For the `_value` variant

| Parameter | Type | Description |
|-----------|------|-------------|
| `$value` | string | The WooCommerce product field value. |

### For the `_label` variant

| Parameter | Type | Description |
|-----------|------|-------------|
| `$label` | string | The field label string with a trailing colon and space (e.g., `"Price: "`). |

## Usage

```php
<?php
// Filter the product price value
add_filter( 'vc_gitem_template_attribute_woocommerce_product_price_value', 'my_custom_product_price', 10, 1 );

function my_custom_product_price( $value ) {
    // Format the product price
    return wc_price( $value );
}

// Filter the product price label
add_filter( 'vc_gitem_template_attribute_woocommerce_product_price_label', 'my_custom_product_price_label', 10, 1 );

function my_custom_product_price_label( $label ) {
    return esc_html__( 'Product Price: ', 'my-theme' );
}
```

## Source

File: `include/classes/vendors/plugins/woocommerce/grid-item-attributes.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.4 | Introduced. |
