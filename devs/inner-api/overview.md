---
sidebar_position: 0
sidebar_label: Overview
hide_table_of_contents: true
slug: /inner-api
---

# Inner API

![WPBakery Page Builder](/img/wpb-logo.png)

During the development process, we always receive some quality feedback from our users and developers and based on that feedback we are adding new features to the WPBakery Page Builder. One of that features was Inner API.

## Element Mapping

<div className="topic-cards">
  <a href="/docs/inner-api/vc_map" className="topic-card">
    <h3>vc_map()</h3>
    <p>Register a new content element with WPBakery Page Builder.</p>
  </a>

  <a href="/docs/inner-api/vc_lean_map" className="topic-card">
    <h3>vc_lean_map()</h3>
    <p>Register elements with lazy loading for better performance.</p>
  </a>

  <a href="/docs/inner-api/vc_map_update" className="topic-card">
    <h3>vc_map_update()</h3>
    <p>Update settings of an existing mapped element.</p>
  </a>

  <a href="/docs/inner-api/vc_remove_element" className="topic-card">
    <h3>vc_remove_element()</h3>
    <p>Remove a content element from the page builder.</p>
  </a>

  <a href="/docs/inner-api/vc_remove_all_elements" className="topic-card">
    <h3>vc_remove_all_elements()</h3>
    <p>Remove all registered content elements at once.</p>
  </a>

  <a href="/docs/inner-api/vc_get_shortcode" className="topic-card">
    <h3>vc_get_shortcode()</h3>
    <p>Get settings of a registered shortcode element.</p>
  </a>
</div>

## Parameters

<div className="topic-cards">
  <a href="/docs/inner-api/vc_add_param" className="topic-card">
    <h3>vc_add_param()</h3>
    <p>Add a single parameter to an existing element.</p>
  </a>

  <a href="/docs/inner-api/vc_add_params" className="topic-card">
    <h3>vc_add_params()</h3>
    <p>Add multiple parameters to an existing element.</p>
  </a>

  <a href="/docs/inner-api/vc_remove_param" className="topic-card">
    <h3>vc_remove_param()</h3>
    <p>Remove a parameter from an existing element.</p>
  </a>

  <a href="/docs/inner-api/vc_update_shortcode_param" className="topic-card">
    <h3>vc_update_shortcode_param()</h3>
    <p>Update a specific parameter in an element.</p>
  </a>

  <a href="/docs/inner-api/vc_add_shortcode_param" className="topic-card">
    <h3>vc_add_shortcode_param()</h3>
    <p>Register a new custom parameter type.</p>
  </a>

  <a href="/docs/inner-api/vc_map_get_attributes" className="topic-card">
    <h3>vc_map_get_attributes()</h3>
    <p>Get attributes from shortcode settings.</p>
  </a>

  <a href="/docs/inner-api/vc_map_get_defaults" className="topic-card">
    <h3>vc_map_get_defaults()</h3>
    <p>Get default values for element parameters.</p>
  </a>
</div>

## Shortcode Integration

<div className="topic-cards">
  <a href="/docs/inner-api/vc_map_integrate_shortcode" className="topic-card">
    <h3>vc_map_integrate_shortcode()</h3>
    <p>Integrate third-party shortcodes with the page builder.</p>
  </a>

  <a href="/docs/inner-api/vc_map_integrate_parse_atts" className="topic-card">
    <h3>vc_map_integrate_parse_atts()</h3>
    <p>Parse attributes for integrated shortcodes.</p>
  </a>
</div>

## Editor & Post Types

<div className="topic-cards">
  <a href="/docs/inner-api/vc_editor_post_types" className="topic-card">
    <h3>vc_editor_post_types()</h3>
    <p>Get list of post types where the editor is enabled.</p>
  </a>

  <a href="/docs/inner-api/vc_editor_set_post_types" className="topic-card">
    <h3>vc_editor_set_post_types()</h3>
    <p>Set which post types can use the page builder.</p>
  </a>

  <a href="/docs/inner-api/vc_default_editor_post_types" className="topic-card">
    <h3>vc_default_editor_post_types()</h3>
    <p>Get default post types for the editor.</p>
  </a>

  <a href="/docs/inner-api/vc_set_default_editor_post_types" className="topic-card">
    <h3>vc_set_default_editor_post_types()</h3>
    <p>Set default post types for the editor.</p>
  </a>

  <a href="/docs/inner-api/vc_disable_frontend" className="topic-card">
    <h3>vc_disable_frontend()</h3>
    <p>Disable frontend editor functionality.</p>
  </a>

  <a href="/docs/inner-api/vc_enabled_frontend" className="topic-card">
    <h3>vc_enabled_frontend()</h3>
    <p>Check if frontend editor is enabled.</p>
  </a>
</div>

## Templates & Theme Integration

<div className="topic-cards">
  <a href="/docs/inner-api/vc_add_default_templates" className="topic-card">
    <h3>vc_add_default_templates()</h3>
    <p>Add custom default templates to the template library.</p>
  </a>

  <a href="/docs/inner-api/vc_set_shortcodes_templates_dir" className="topic-card">
    <h3>vc_set_shortcodes_templates_dir()</h3>
    <p>Set custom directory for shortcode templates.</p>
  </a>

  <a href="/docs/inner-api/vc_shortcodes_theme_templates_dir" className="topic-card">
    <h3>vc_shortcodes_theme_templates_dir()</h3>
    <p>Get theme templates directory for shortcodes.</p>
  </a>

  <a href="/docs/inner-api/vc_set_as_theme" className="topic-card">
    <h3>vc_set_as_theme()</h3>
    <p>Set WPBakery Page Builder as part of a theme.</p>
  </a>

  <a href="/docs/inner-api/vc_is_as_theme" className="topic-card">
    <h3>vc_is_as_theme()</h3>
    <p>Check if page builder is running as part of a theme.</p>
  </a>

  <a href="/docs/inner-api/vc_is_updater_disabled" className="topic-card">
    <h3>vc_is_updater_disabled()</h3>
    <p>Check if automatic updates are disabled.</p>
  </a>
</div>

## Useful to Check

<div className="topic-cards">
  <a href="/docs/filters" className="topic-card">
    <h3>Filters</h3>
    <p>Explore available WordPress filters for extending WPBakery Page Builder.</p>
  </a>

  <a href="/docs/developers-how-tos" className="topic-card">
    <h3>Developers "How To's"</h3>
    <p>Practical guides and tutorials for developers.</p>
  </a>
</div>




