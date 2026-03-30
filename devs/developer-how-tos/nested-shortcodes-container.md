---
id: nested-shortcodes-container
title: Nested Shortcodes (container)
sidebar_label: Nested Shortcodes (container)
sidebar_position: 19
hide_table_of_contents: true
slug: /developers-how-tos/nested-shortcodes-container
---

# Nested Shortcodes (container)

This document explains how to create and work with nested elements (container elements that can hold other elements), such as tabs, accordions, and custom container components.

## What are Nested Elements?

Nested elements are container elements that can hold child elements.

Common examples include:

- **Tabs** (`vc_tta_tabs` → `vc_tta_section`)
- **Accordions** (`vc_tta_accordion` → `vc_tta_section`)
- **Call to Action boxes** (container → buttons, text, etc.)

**Simple examples in shortcode format:**

```text
[tabs]
 [tab title="Tab 1"]Content for Tab 1[/tab]
 [tab title="Tab 2"]Content for Tab 2[/tab]
[/tabs]

[accordion]
 [accordion_section title="Section 1"]Content for Section 1[/accordion_section]
 [accordion_section title="Section 2"]Content for Section 2[/accordion_section]
[/accordion]

[your_gallery param="foo"]
 [single_img]
 [single_img]
 [single_img]
[/your_gallery]
```


## Types of Nested Elements

### 1. Container Elements (Parent)

Elements that can contain other elements (e.g., Tabs, Accordion, Custom Box)

### 2. Child Elements (Section)

Elements designed to be used inside containers (e.g., Tab Section, Accordion Section)

### 3. Multi-level Nesting

Elements that can both contain and be contained (e.g., Columns can contain elements and be inside rows)

## Creating a Parent (Container) Element

### Configuration Requirements

A container element requires special configuration properties:

```php
<?php
/**
 * Configuration for parent container element
 */

return [
 'name' => __( 'Content Tabs', 'text-domain' ),
 'base' => 'content_tabs',
 'icon' => 'icon-wpb-tabs',
 'category' => __( 'Content', 'text-domain' ),
 'description' => __( 'Tabbed content container', 'text-domain' ),

 // Required for containers
 'is_container' => true, // Mark as container
 'show_settings_on_create' => false, // Don't show settings popup immediately

 // Define allowed children
 'as_parent' => [
 'only' => 'content_tab' // Only allow content_tab as child
 // or use 'except' => 'vc_row' to allow all except specific elements
 ],
 // Default content (initial child elements)
 'default_content' => '[content_tab title="Tab 1"][/content_tab][content_tab title="Tab 2"][/content_tab]',

 // JavaScript controller for admin editor
 'js_view' => 'VcColumnView', // Need to specify for inner elements
 'params' => [
 // Container parameters
 [
 'type' => 'dropdown',
 'heading' => __( 'Tab Style', 'text-domain' ),
 'param_name' => 'style',
 'value' => [
 __( 'Default', 'text-domain' ) => 'default',
 __( 'Modern', 'text-domain' ) => 'modern',
 ],
 ],

 // ... more parameters
 ],
];
```


### Key Container Properties

| Property | Type | Description |
|----------|------|-------------|
| `is_container` | bool | Must be true for containers |
| `show_settings_on_create` | bool | Show settings panel on creation |
| `as_parent` | array | Define allowed child elements |
| `default_content` | string | Initial child elements (shortcode format) |
| `js_view` | string | JavaScript view controller |
| `content_element` | bool | Set to false to hide from add elements panel |
| `allowed_container_element` | bool | Set to false to prevent being used as container |

### as_parent Configuration Options

```php
<?php
// Option 1: Only specific elements allowed
$as_parent = [
 'only' => 'content_tab', // Single element
];

// Option 2: Multiple elements allowed
$as_parent = [
 'only' => 'content_tab,another_element', // Comma-separated
];

// Option 3: All except specific elements
$as_parent = [
 'except' => 'vc_row,vc_column', // Block these elements
];

// Option 4: No restrictions
$as_parent = [
 'only' => '', // Allow all elements
];
```


### Container Template

```php
<?php

/**
 * Template for [content_tabs] container
 */

if ( ! defined( 'ABSPATH' ) ) {
 die( '-1' );
}

/**
 * @var array $atts
 * @var string $content - Contains child shortcodes
 * @var WPBakeryShortCode_Content_Tabs $this
 */

$atts = vc_map_get_attributes( $this->getShortcode(), $atts );
extract( $atts );
$wrapper_classes = [ 'content-tabs', 'content-tabs--' . $style ];
$output = '';
$output .= '<div class="' . esc_attr( implode( ' ', $wrapper_classes ) ) . '">';
$output .= '<ul class="content-tabs__nav" role="tablist">';

// Parse child shortcodes to build tab navigation
$tabs = $this->getChildSections( $content );
foreach ( $tabs as $index => $tab ) {
 $active = $index === 0 ? ' class="active"' : '';
 $output .= '<li' . $active . '>';
 $output .= '<a href="#tab-' . $index . '" role="tab">';
 $output .= esc_html( $tab['title'] );
 $output .= '</a>';
 $output .= '</li>';
}

$output .= '</ul>';

// Render tab content (child shortcodes)

$output .= '<div class="content-tabs__content">';
$output .= do_shortcode( $content ); // Process child shortcodes
$output .= '</div>';
$output .= '</div>';

return $output;
```


### Container Class

```php
<?php
/**
 * Class WPBakeryShortCode_Content_Tabs
 */

if ( ! defined( 'ABSPATH' ) ) {
 die( '-1' );
}

class WPBakeryShortCode_Content_Tabs extends WPBakeryShortCodesContainer {
 /**
 * Parse child shortcodes and extract data
 */

 protected function getChildSections( $content ) {
 $tabs = [];
 // Parse shortcodes in content
 preg_match_all( '/\[content_tab([^\]]*)\](.*?)\[\/content_tab\]/s', $content, $matches );

 if ( ! empty( $matches[1] ) ) {
 foreach ( $matches[1] as $index => $atts_string ) {
 // Parse attributes
 $atts = shortcode_parse_atts( $atts_string );
 $tabs[] = [
 'title' => isset( $atts['title'] ) ? $atts['title'] : 'Tab',
 'content' => $matches[2][ $index ],
 ];
 }
 }

 return $tabs;
 }

 /**
 * Define default template for child elements
 */

 public function getChildDefaultContent() {
 return '[content_tab title="' . __( 'Tab 1', 'text-domain' ) . '"][/content_tab]';
 }

}
```


## Creating a Child Element

### Configuration Requirements

```php
<?php

/**
 * Configuration for child element
 */

return [
 'name' => __( 'Tab Section', 'text-domain' ),
 'base' => 'content_tab',
 'icon' => 'icon-wpb-tab',
 'category' => __( 'Content', 'text-domain' ),
 'description' => __( 'Single tab content', 'text-domain' ),
 // Required for child elements

 'as_child' => [
 'only' => 'content_tabs' // Can only be used inside content_tabs
 ],

 // Can also be a container itself

 'is_container' => true,
 'content_element' => true, // Show in elements panel (usually false for children)
 'js_view' => 'VcColumnView', // Need to specify for inner elements
 'params' => [
 [
 'type' => 'textfield',
 'heading' => __( 'Tab Title', 'text-domain' ),
 'param_name' => 'title',
 'admin_label' => true, // Show in element title
 'value' => __( 'Tab', 'text-domain' ),
 ],
 [

 'type' => 'textarea_html',
 'heading' => __( 'Tab Content', 'text-domain' ),
 'param_name' => 'content',
 'value' => __( 'Tab content goes here', 'text-domain' ),
 ],
 [
 'type' => 'attach_image',
 'heading' => __( 'Tab Icon', 'text-domain' ),
 'param_name' => 'icon',
 ],
 ],
];
```


### Key Child Properties

| Property | Type | Description |
|----------|------|-------------|
| `as_child` | array | Define allowed parent elements |
| `content_element` | bool | Show in add elements panel (usually false) |
| `is_container` | bool | true if child can contain other elements |

### as_child Configuration Options

```php
<?php
// Only specific parent(s)
$as_child = [
 'only' => 'content_tabs', // Single parent
];

// Multiple parents
$as_child = [
 'only' => 'content_tabs,another_container', // Comma-separated
];

// All except specific parents
$as_child = [
 'except' => 'vc_column', // Block this parent
];
```


### Child Template

```php
<?php
/**
 * Template for [content_tab] child element
 */

if ( ! defined( 'ABSPATH' ) ) {
 die( '-1' );
}

/**
 * @var array $atts
 * @var string $content
 * @var WPBakeryShortCode_Content_Tab $this
 */

$atts = vc_map_get_attributes( $this->getShortcode(), $atts );
extract( $atts );

// Get index from parent
static $tab_index = 0;
$tab_id = 'tab-' . $tab_index;
$tab_index++;
$output = '';
$output .= '<div id="' . esc_attr( $tab_id ) . '" class="content-tab" role="tabpanel">';
// Add icon if provided
if ( ! empty( $icon ) ) {
 $icon_src = wp_get_attachment_image_src( $icon, 'thumbnail' );
 if ( $icon_src ) {
 $output .= '<img src="' . esc_url( $icon_src[0] ) . '" alt="" class="content-tab__icon" />';
 }
}
// Add content

$output .= '<div class="content-tab__content">';

$output .= wpb_js_remove_wpautop( $content, true );
$output .= '</div>';
$output .= '</div>';

return $output;
```


### Child Class

```php
<?php

/**
 * Class WPBakeryShortCode_Content_Tab
 */

if ( ! defined( 'ABSPATH' ) ) {
 die( '-1' );
}

class WPBakeryShortCode_Content_Tab extends WPBakeryShortCode {

 /**
 * Get parent element
 */

 protected function getParent() {
 return $this->parent;
 }

 /**
 * Get sibling elements
 */

 protected function getSiblings() {
 $parent = $this->getParent();
 if ( $parent ) {
 return $parent->get_children();
 }

 return [];
 }

 
 /**
 * Get element index among siblings
 */

 protected function getIndex() {
 $siblings = $this->getSiblings();
 return array_search( $this, $siblings, true );
 }
}
```

## Common Patterns

### Tabs/Accordion Pattern

- Parent generates navigation
- Children generate content panels
- JavaScript handles interaction

### List/Item Pattern

- Parent wraps items in container
- Children render individual items
- Parent can count/style items

## Best Practices

- Use descriptive element names that indicate the relationship
- Set `content_element` = false for children that should only appear inside parents
- Provide `default_content` to help users get started
- Use `admin_label` on child titles to show content in editor
- Validate parent/child relationships in your classes
- Handle empty content gracefully
- Consider keyboard navigation for interactive nested elements
- Test deeply nested scenarios (3+ levels)

## Troubleshooting

### Children not appearing in editor

- Check `as_child` configuration
- Verify parent `as_parent` allows the child
- Ensure `content_element` is true or omitted

### Parent not acting as container

- Confirm `is_container` is true
- Check `js_view` is set correctly
- Verify class extends `WPBakeryShortCodesContainer`

### Content not rendering

- Make sure to call `do_shortcode( $content )` in parent template
- Check for proper shortcode nesting syntax
- Verify both elements are registered
