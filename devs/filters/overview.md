---
sidebar_position: 0
sidebar_label: Overview
hide_table_of_contents: true
---

# Filters

WPBakery Page Builder provides a comprehensive set of filters that allow developers to customize and extend its functionality. These filters give you fine-grained control over how content is processed, displayed, and rendered.

Filters are WordPress hooks that allow you to modify data before it's used by WPBakery Page Builder. You can use these filters to customize shortcode output, modify content rendering, adjust styles, and much more.

## How to Use Filters

To use a WPBakery filter, add your custom function to the filter hook using WordPress's `add_filter()` function:

```php
add_filter('filter_name', 'your_custom_function', 10, 2);

function your_custom_function($value, $additional_params) {
    // Modify $value as needed
    return $value;
}
```

## Content & Output Filters

<div className="topic-cards">
  <a href="/devs/filters/vc_shortcode_content_filter" className="topic-card">
    <h3>vc_shortcode_content_filter</h3>
    <p>Filter shortcode content before it's processed by WPBakery Page Builder.</p>
  </a>

  <a href="/devs/filters/vc_shortcode_content_filter_after" className="topic-card">
    <h3>vc_shortcode_content_filter_after</h3>
    <p>Filter shortcode content after it has been processed.</p>
  </a>

  <a href="/devs/filters/vc_shortcode_output" className="topic-card">
    <h3>vc_shortcode_output</h3>
    <p>Modify the final HTML output of a shortcode before rendering.</p>
  </a>

  <a href="/devs/filters/vc_shortcodes_css_class" className="topic-card">
    <h3>vc_shortcodes_css_class</h3>
    <p>Filter and customize CSS classes applied to shortcode elements.</p>
  </a>

  <a href="/devs/filters/wpb_widget_title" className="topic-card">
    <h3>wpb_widget_title</h3>
    <p>Customize widget titles in WPBakery Page Builder elements.</p>
  </a>
</div>

## Editor Filters

<div className="topic-cards">
  <a href="/devs/filters/vc_frontend_editor_iframe_url" className="topic-card">
    <h3>vc_frontend_editor_iframe_url</h3>
    <p>Modify the iframe URL used in the frontend editor.</p>
  </a>

  <a href="/devs/filters/vc_load_default_templates" className="topic-card">
    <h3>vc_load_default_templates</h3>
    <p>Control which default templates are loaded in the template library.</p>
  </a>
</div>

## AI Module Filters

<div className="topic-cards">
  <a href="/devs/filters/wpb_ai_content_type_list" className="topic-card">
    <h3>wpb_ai_content_type_list</h3>
    <p>Customize the list of content types available in WPBakery AI.</p>
  </a>

  <a href="/devs/filters/wpb_ai_number_of_symbols_list" className="topic-card">
    <h3>wpb_ai_number_of_symbols_list</h3>
    <p>Modify the symbol count options for AI-generated content.</p>
  </a>

  <a href="/devs/filters/wpb_ai_tone_of_voice_list" className="topic-card">
    <h3>wpb_ai_tone_of_voice_list</h3>
    <p>Customize tone of voice options for AI content generation.</p>
  </a>

  <a href="/devs/filters/wpb_module_ai_element_param_types" className="topic-card">
    <h3>wpb_module_ai_element_param_types</h3>
    <p>Filter parameter types that support AI content generation.</p>
  </a>

  <a href="/devs/filters/wpb_module_ai_text_field_words" className="topic-card">
    <h3>wpb_module_ai_text_field_words</h3>
    <p>Customize word count settings for AI text fields.</p>
  </a>

  <a href="/devs/filters/wpb_module_ai_type_response_route_lib" className="topic-card">
    <h3>wpb_module_ai_type_response_route_lib</h3>
    <p>Modify AI response routing for different content types.</p>
  </a>
</div>



