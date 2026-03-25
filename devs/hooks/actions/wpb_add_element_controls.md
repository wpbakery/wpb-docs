---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# wpb\_add\_element\_controls

Fires after the element edit form panel body and footer are rendered, just before the modal wrapper closes. Use this hook to add custom controls or additional UI elements to the element editing panel.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'wpb_add_element_controls', 'wpb_custom_element_controls' );

function wpb_custom_element_controls() {
    echo '<div class="my-custom-controls">';
    echo '<button type="button" class="vc_general vc_ui-button">';
    echo esc_html__( 'My Custom Action', 'my-plugin' );
    echo '</button>';
    echo '</div>';
}
```

## Source

File: `include/templates/editors/popups/vc_ui-panel-edit-element.tpl.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.2 | Introduced. |
