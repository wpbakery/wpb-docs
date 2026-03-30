---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# wpb_add_before_closing_form_tag

Fires just before the closing `</form>` tag on WPBakery settings pages. Use this hook to inject hidden fields, additional form sections, or custom HTML inside the settings form before it closes.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'wpb_add_before_closing_form_tag', 'wpb_add_hidden_fields' );

function wpb_add_hidden_fields() {
    // Add custom hidden fields inside the settings form
    echo '<input type="hidden" name="my_custom_field" value="' . esc_attr( get_option( 'my_custom_field', '' ) ) . '" />';
}
```

## Source

File: `include/templates/pages/vc-settings/tab.php`
