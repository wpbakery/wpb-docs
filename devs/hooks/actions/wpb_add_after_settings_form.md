---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# wpb_add_after_settings_form

Fires after the closing `</form>` tag on WPBakery settings pages. Use this hook to add custom HTML content or scripts after the settings form.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'wpb_add_after_settings_form', 'wpb_custom_after_settings_form' );

function wpb_custom_after_settings_form() {
    echo '<div class="my-custom-section">';
    echo '<h3>' . esc_html__( 'Additional Information', 'my-plugin' ) . '</h3>';
    echo '<p>' . esc_html__( 'Custom content displayed after the settings form.', 'my-plugin' ) . '</p>';
    echo '</div>';
}
```

## Source

File: `include/templates/pages/vc-settings/tab.php`
