---
sidebar_position: 0
sidebar_label: Filters
hide_table_of_contents: true
slug: /hooks/filters
className: hooks-overview
---

# Filters

Filters are WordPress hooks that allow you to modify data before it's used by WPBakery Page Builder. Use `add_filter()` to hook into them:

```php
add_filter('filter_name', 'your_custom_function', 10, 2);

function your_custom_function($value, $additional_params) {
    // Modify $value as needed
    return $value;
}
```

## All Filters

| Filter | Description |
|--------|-------------|
| [`vc-tta-get-params-tabs-list`](/devs/hooks/filters/vc-tta-get-params-tabs-list) | Filters the TTA (Tabs, Tours, Accordions) tabs list HTML output before it is returned. |
| [`vc-ui-pointers`](/devs/hooks/filters/vc-ui-pointers) | Filters the list of UI pointers (admin help tooltips) registered for the current screen. |
| [`vc_add_element_box_buttons`](/devs/hooks/filters/vc_add_element_box_buttons) | Filters the rendered HTML output of the add element box buttons. |
| [`vc_add_element_categories`](/devs/hooks/filters/vc_add_element_categories) | Filters the tab categories displayed in the "Add Element" panel. |
| [`vc_add_new_elements_to_box`](/devs/hooks/filters/vc_add_new_elements_to_box) | Filters the list of mapped shortcodes displayed in the "Add Element" box. |
| [`vc_animation_style_render_filter`](/devs/hooks/filters/vc_animation_style_render_filter) | Filters the rendered output of the animation style parameter field. |
| [`vc_autocomplete_{tag}_{param_name}_callback`](/devs/hooks/filters/vc_autocomplete_callback) | Provides autocomplete suggestions for a specific shortcode parameter via AJAX. |
| [`vc_autocomplete_render_filter`](/devs/hooks/filters/vc_autocomplete_render_filter) | Filters the rendered output of the autocomplete parameter field. |
| [`vc_autoload_components_list`](/devs/hooks/filters/vc_autoload_components_list) | Filters the list of components that are autoloaded during WPBakery initialization. |
| [`vc_autoload_components_manifest_file`](/devs/hooks/filters/vc_autoload_components_manifest_file) | Filters the file path to the autoload components manifest file. |
| [`vc_base_build_shortcodes_{type}_css`](/devs/hooks/filters/vc_base_build_shortcodes_type_css) | Filters the parsed shortcode CSS for a specific type before it is saved as post meta. |
| [`vc_base_save_post_{meta_name}`](/devs/hooks/filters/vc_base_save_post_meta_name) | Filters the post meta value before it is saved during post update. |
| [`vc_basic_grid_filter_query_filters`](/devs/hooks/filters/vc_basic_grid_filter_query_filters) | Filters the custom query string used in the Post Grid element when the post type is set to "custom". |
| [`vc_basic_grid_filter_query_suppress_filters`](/devs/hooks/filters/vc_basic_grid_filter_query_suppress_filters) | Filters the `suppress_filters` parameter used in the Post Grid WP_Query. |
| [`vc_basic_grid_find_post_shortcode`](/devs/hooks/filters/vc_basic_grid_find_post_shortcode) | Filters the shortcode data found by ID in a specific post. |
| [`vc_basic_grid_items_per_page_all_max_items`](/devs/hooks/filters/vc_basic_grid_items_per_page_all_max_items) | Filters the maximum number of items per page when the grid pagination is set to display all items. |
| [`vc_basic_grid_max_items`](/devs/hooks/filters/vc_basic_grid_max_items) | Filters the maximum number of items that can be displayed in the Post Grid element. |
| [`vc_basic_grid_template_filter`](/devs/hooks/filters/vc_basic_grid_template_filter) | Filters the rendered HTML output of the grid filter (taxonomy filter) template before it is appended to the grid output. |
| [`vc_before_update_post_data`](/devs/hooks/filters/vc_before_update_post_data) | Filters the post data object before WPBakery Page Builder updates the post with its own data. |
| [`vc_btn_a_href`](/devs/hooks/filters/vc_btn_a_href) | Filters the URL (href attribute) of the Button element before it is rendered. |
| [`vc_btn_a_title`](/devs/hooks/filters/vc_btn_a_title) | Filters the title attribute of the Button element anchor tag before it is rendered. |
| [`vc_check_post_type_validation`](/devs/hooks/filters/vc_check_post_type_validation) | Filters the post type validation result when checking if WPBakery Page Builder should be enabled for a specific post type. |
| [`vc_clear_shortcode_suffix`](/devs/hooks/filters/vc_clear_shortcode_suffix) | Filters the shortcode tag name used during Frontend Editor rendering. |
| [`vc_css_editor`](/devs/hooks/filters/vc_css_editor) | Filters the complete HTML output of the CSS Editor (Design Options) parameter field. |
| [`vc_css_editor_background_image_control`](/devs/hooks/filters/vc_css_editor_background_image_control) | Filters the HTML output of the background image control in the CSS Editor (Design Options). |
| [`vc_css_editor_background_style_options_data`](/devs/hooks/filters/vc_css_editor_background_style_options_data) | Filters the available background style options in the CSS Editor (Design Options). |
| [`vc_css_editor_border_radius_options_data`](/devs/hooks/filters/vc_css_editor_border_radius_options_data) | Filters the available border radius options in the CSS Editor (Design Options). |
| [`vc_css_editor_border_style_options_data`](/devs/hooks/filters/vc_css_editor_border_style_options_data) | Filters the available border style options in the CSS Editor (Design Options). |
| [`vc_css_editor_layer_controls`](/devs/hooks/filters/vc_css_editor_layer_controls) | Filters the HTML output of a specific layer's input controls in the CSS Editor (Design Options) onion layout. |
| [`vc_css_editor_onion_layout`](/devs/hooks/filters/vc_css_editor_onion_layout) | Filters the HTML output of the onion layout (box model diagram) in the CSS Editor (Design Options). |
| [`vc_custom_code_categories`](/devs/hooks/filters/vc_custom_code_categories) | Filters the list of tab categories displayed in the Custom Code popup panel. |
| [`vc_custom_code_templates`](/devs/hooks/filters/vc_custom_code_templates) | Filters the list of tab templates used in the Custom Code popup panel. |
| [`vc_custom_heading_template_use_wrapper`](/devs/hooks/filters/vc_custom_heading_template_use_wrapper) | Filters whether the Custom Heading element should use an additional wrapper `<div>` around the heading tag. |
| [`vc_custom_markup_render_filter`](/devs/hooks/filters/vc_custom_markup_render_filter) | Filters the rendered output of the `custom_markup` parameter type in the shortcode edit form. |
| [`vc_edit_form_class`](/devs/hooks/filters/vc_edit_form_class) | Filters the array of CSS classes applied to the edit form fields container element. |
| [`vc_edit_form_css_class`](/devs/hooks/filters/vc_edit_form_css_class) | Filters the CSS class string applied to the shortcode edit form panel container. |
| [`vc_edit_form_enqueue_script`](/devs/hooks/filters/vc_edit_form_enqueue_script) | Filters the array of scripts registered for parameter types in the edit form. |
| [`vc_edit_form_fields_attributes_{tag}`](/devs/hooks/filters/vc_edit_form_fields_attributes_tag) | Filters the shortcode attributes before they are used to populate the edit form fields. |
| [`vc_edit_form_fields_optional_params`](/devs/hooks/filters/vc_edit_form_fields_optional_params) | Filters the list of optional parameter types that should not be initialized by default in the edit form. |
| [`vc_edit_form_fields_render_field_{type}_before`](/devs/hooks/filters/vc_edit_form_fields_render_field_type_before) | Filters the HTML output rendered **before** a parameter field of a specific type in the WPBakery element edit form. |
| [`vc_el_id_render_filter`](/devs/hooks/filters/vc_el_id_render_filter) | Filters the rendered HTML output of the `el_id` parameter type form field. |
| [`vc_element_settings_filter`](/devs/hooks/filters/vc_element_settings_filter) | Filters the settings array for a WPBakery element after it has been initialized from its configuration. |
| [`vc_enqueue_frontend_editor_js`](/devs/hooks/filters/vc_enqueue_frontend_editor_js) | Filters the array of JavaScript dependency handles that are enqueued for the WPBakery frontend editor. |
| [`vc_fe_render_shortcode`](/devs/hooks/filters/vc_fe_render_shortcode) | Filters the shortcode data array before it is rendered in the frontend editor. |
| [`vc_font_container_get_allowed_tags`](/devs/hooks/filters/vc_font_container_get_allowed_tags) | Filters the list of allowed HTML tags available in the font container parameter's tag selector. |
| [`vc_font_container_get_fonts_filter`](/devs/hooks/filters/vc_font_container_get_fonts_filter) | Filters the list of web-safe fonts available in the font container parameter's font family selector. |
| [`vc_font_container_output_data`](/devs/hooks/filters/vc_font_container_output_data) | Filters the rendered output data array for the font container parameter before it is assembled into the final HTML output. |
| [`vc_font_container_render_filter`](/devs/hooks/filters/vc_font_container_render_filter) | Filters the final rendered HTML output of the entire font container parameter form field. |
| [`vc_form_fields_render_field_{base}_{param_name}_param`](/devs/hooks/filters/vc_form_fields_render_field_param) | Dynamic filters that allow modification of a specific parameter's configuration or value when rendering the element edit form. |
| [`vc_front_render_shortcodes`](/devs/hooks/filters/vc_front_render_shortcodes) | Filters the final HTML output of all rendered shortcodes in the frontend editor after they have been processed and assembled. |
| [`vc_frontend_editor_iframe_url`](/devs/hooks/filters/vc_frontend_editor_iframe_url) | This filter may be handy if you want to change transfer protocol. |
| [`vc_frontend_editor_load_shortcode_ajax_output`](/devs/hooks/filters/vc_frontend_editor_load_shortcode_ajax_output) | Filters the complete AJAX output when loading a shortcode in the frontend editor. |
| [`vc_frontend_editor_new_post_data`](/devs/hooks/filters/vc_frontend_editor_new_post_data) | Filters the post data array used when creating or updating a new post through the frontend editor. |
| [`vc_frontend_editor_to_string`](/devs/hooks/filters/vc_frontend_editor_to_string) | Filters the shortcode data array before it is converted to a frontend editor string representation. |
| [`vc_frontend_template_the_content`](/devs/hooks/filters/vc_frontend_template_the_content) | Filters the parsed template content before it is output in the frontend editor template view. |
| [`vc_get_all_templates`](/devs/hooks/filters/vc_get_all_templates) | Filters the complete array of template categories and their templates displayed in the WPBakery templates panel. |
| [`vc_get_editor_locale`](/devs/hooks/filters/vc_get_editor_locale) | Filters the array of localized strings used by the WPBakery editor JavaScript. |
| [`vc_get_editor_wpb_data`](/devs/hooks/filters/vc_get_editor_wpb_data) | Filters the WPBakery data array that is localized and passed to the editor JavaScript. |
| [`vc_get_inline_url`](/devs/hooks/filters/vc_get_inline_url) | Filters the URL used to open the WPBakery frontend (inline) editor for a specific post. |
| [`vc_get_settings_locale`](/devs/hooks/filters/vc_get_settings_locale) | Filters the array of localized strings used by the WPBakery settings page JavaScript. |
| [`vc_get_settings_wpb_data`](/devs/hooks/filters/vc_get_settings_wpb_data) | Filters the WPBakery data array that is localized and passed to the settings page JavaScript. |
| [`vc_get_user_templates`](/devs/hooks/filters/vc_get_user_templates) | Filters the array of user-saved templates retrieved from the WordPress options table. |
| [`vc_get_vc_grid_data_response`](/devs/hooks/filters/vc_get_vc_grid_data_response) | Filters the AJAX response output of a WPBakery Grid element when data is loaded or paginated via AJAX. |
| [`vc_gitem_add_link_param`](/devs/hooks/filters/vc_gitem_add_link_param) | Filters the "Add link" parameter definition array used by Grid Item shortcodes. |
| [`vc_gitem_add_link_target_param`](/devs/hooks/filters/vc_gitem_add_link_target_param) | Filters the "Open link in a new tab" parameter definition array used by Grid Item shortcodes. |
| [`vc_gitem_attribute_featured_image_img`](/devs/hooks/filters/vc_gitem_attribute_featured_image_img) | Filters the featured image data returned by `wpb_getImageBySize()` for a Grid Item's featured image attribute. |
| [`vc_gitem_post_data_get_link_real_title`](/devs/hooks/filters/vc_gitem_post_data_get_link_real_title) | Filters the `title` attribute string for a grid item link when creating a "real" link (as opposed to a template placeholder link). |
| [`vc_gitem_post_data_get_link_rel`](/devs/hooks/filters/vc_gitem_post_data_get_link_rel) | Filters the `rel` attribute string for a grid item link. |
| [`vc_gitem_post_data_get_link_title`](/devs/hooks/filters/vc_gitem_post_data_get_link_title) | Filters the `title` attribute string for a grid item link in the template-based link creation. |
| [`vc_gitem_template_attribute_acf_value`](/devs/hooks/filters/vc_gitem_template_attribute_acf_value) | Filters the ACF (Advanced Custom Fields) field value before it is displayed in a grid item template. |
| [`vc_gitem_template_attribute_{name}`](/devs/hooks/filters/vc_gitem_template_attribute_name) | Dynamic filter that allows modification of a specific grid item template attribute value. |
| [`vc_gitem_template_attribute_post_image_background_image_css_value`](/devs/hooks/filters/vc_gitem_template_attribute_post_image_background_image_css_value) | Filters the CSS background-image property value for a post's featured image in a grid item template. |
| [`vc_gitem_template_attribute_post_image_html`](/devs/hooks/filters/vc_gitem_template_attribute_post_image_html) | Filters the HTML output of a post's featured image in a grid item template. |
| [`vc_gitem_template_attribute_post_image_url_value`](/devs/hooks/filters/vc_gitem_template_attribute_post_image_url_value) | Filters the post image URL value used in grid item templates. |
| [`vc_gitem_template_attribute_post_title`](/devs/hooks/filters/vc_gitem_template_attribute_post_title) | Filters the post title used in the `title` attribute of lightbox image links within grid item templates. |
| [`vc_gitem_template_attribute_vc_btn`](/devs/hooks/filters/vc_gitem_template_attribute_vc_btn) | Filters the rendered button output used in grid item templates, particularly for the "Load More" button in pageable grid elements. |
| [`vc_gitem_template_attribute_woocommerce_order_{field}`](/devs/hooks/filters/vc_gitem_template_attribute_woocommerce_order_field) | Dynamic filter that allows modification of WooCommerce order field values displayed in grid item templates. |
| [`vc_gitem_template_attribute_woocommerce_product_{field}`](/devs/hooks/filters/vc_gitem_template_attribute_woocommerce_product_field) | Dynamic filter that allows modification of WooCommerce product field values displayed in grid item templates. |
| [`vc_gitem_template_attribute_woocommerce_product_link_value`](/devs/hooks/filters/vc_gitem_template_attribute_woocommerce_product_link_value) | Filters the WooCommerce "Add to Cart" URL for a product displayed in a grid item template. |
| [`vc_gitem_zone_grid_item_not_content_shortcodes`](/devs/hooks/filters/vc_gitem_zone_grid_item_not_content_shortcodes) | Filters the list of shortcodes that are not allowed inside the content zone of a grid item. |
| [`vc_gitem_zone_image_block_link`](/devs/hooks/filters/vc_gitem_zone_image_block_link) | Filters the image block link HTML in a grid item zone. |
| [`vc_global_js_data`](/devs/hooks/filters/vc_global_js_data) | Filters the global JavaScript data object (`vcData`) that is localized and made available to the WPBakery settings page scripts. |
| [`vc_google_fonts_get_fonts_filter`](/devs/hooks/filters/vc_google_fonts_get_fonts_filter) | Filters the list of Google Fonts available in the Google Fonts parameter type. |
| [`vc_google_fonts_render_filter`](/devs/hooks/filters/vc_google_fonts_render_filter) | Filters the rendered HTML output of the Google Fonts parameter field in the editor panel. |
| [`vc_grid_get_all_templates`](/devs/hooks/filters/vc_grid_get_all_templates) | Filters the complete list of grid item templates available in the grid item template picker. |
| [`vc_grid_get_grid_data_access`](/devs/hooks/filters/vc_grid_get_grid_data_access) | Filters whether the current AJAX request is allowed to retrieve grid data. |
| [`vc_grid_item_predefined_templates`](/devs/hooks/filters/vc_grid_item_predefined_templates) | Filters the predefined grid item templates. |
| [`vc_grid_item_preview_render_default_width_value`](/devs/hooks/filters/vc_grid_item_preview_render_default_width_value) | Filters the default width value used when rendering a grid item preview in the editor. |
| [`vc_grid_item_shortcodes`](/devs/hooks/filters/vc_grid_item_shortcodes) | Filters the list of shortcodes available for use within the grid item editor. |
| [`vc_grid_request_url`](/devs/hooks/filters/vc_grid_request_url) | Filters the AJAX request URL used by the grid element for loading data (pagination, filtering, and lazy loading). |
| [`vc_hooks_vc_post_settings`](/devs/hooks/filters/vc_hooks_vc_post_settings) | Filters the post settings array before it is saved as post meta (`_vc_post_settings`). |
| [`vc_iconpicker-type-{type}`](/devs/hooks/filters/vc_iconpicker-type) | Dynamic filter that provides the list of icons for a specific icon picker type. |
| [`vc_iconpicker_render_filter`](/devs/hooks/filters/vc_iconpicker_render_filter) | Filters the rendered HTML output of the icon picker parameter field in the editor panel. |
| [`vc_import_allow_fetch_attachments`](/devs/hooks/filters/vc_import_allow_fetch_attachments) | Filters whether downloading attachments is allowed during the WPBakery template import process. |
| [`vc_import_attachment_size_limit`](/devs/hooks/filters/vc_import_attachment_size_limit) | Filters the maximum file size for downloaded attachments during the WPBakery template import process. |
| [`vc_import_post_data_processed`](/devs/hooks/filters/vc_import_post_data_processed) | Filters the processed post data array just before the post is inserted into the database during the WPBakery template import. |
| [`vc_import_post_data_raw`](/devs/hooks/filters/vc_import_post_data_raw) | Filters the raw post data from the import file before it is processed during the WPBakery template import. |
| [`vc_import_post_meta`](/devs/hooks/filters/vc_import_post_meta) | Filters the array of post meta entries before they are saved during the WPBakery template import process. |
| [`vc_import_post_meta_key`](/devs/hooks/filters/vc_import_post_meta_key) | Filters the meta key for each post meta entry during the WPBakery template import process. |
| [`vc_import_posts`](/devs/hooks/filters/vc_import_posts) | Filters the complete array of posts before they are processed during the WPBakery template import. |
| [`vc_inline_template_content`](/devs/hooks/filters/vc_inline_template_content) | Filters the template content retrieved for the frontend (inline) editor. |
| [`vc_is_valid_post_type_be`](/devs/hooks/filters/vc_is_valid_post_type_be) | Filters whether a given post type is valid for the backend editor. |
| [`vc_layerslider_shortcode`](/devs/hooks/filters/vc_layerslider_shortcode) | Filters the rendered output of the LayerSlider shortcode within the WPBakery LayerSlider element. |
| [`vc_load_default_templates`](/devs/hooks/filters/vc_load_default_templates) | More information about operating with templates you can in [Add More Custom Templates](/devs/inner-api/vc_add_default_templates) page. |
| [`vc_load_default_templates_limit_total`](/devs/hooks/filters/vc_load_default_templates_limit_total) | Filters the maximum number of default templates displayed in the templates panel. |
| [`vc_map_add_css_animation`](/devs/hooks/filters/vc_map_add_css_animation) | Filters the CSS animation parameter data array used when registering the animation param for elements. |
| [`vc_map_get_attributes`](/devs/hooks/filters/vc_map_get_attributes) | Filters the merged shortcode attributes after combining user-supplied values with registered defaults. |
| [`vc_map_get_param_defaults`](/devs/hooks/filters/vc_map_get_param_defaults) | Filters the default value resolved for an individual shortcode parameter. |
| [`vc_mapper_attribute`](/devs/hooks/filters/vc_mapper_attribute) | Filters each parameter (attribute) definition when a shortcode is being mapped. |
| [`vc_mapper_attribute_{type}`](/devs/hooks/filters/vc_mapper_attribute_type) | Filters a shortcode param attribute by its type during mapping. |
| [`vc_nav_control_list`](/devs/hooks/filters/vc_nav_control_list) | Filters the list of navbar controls displayed in the WPBakery editor navigation bar. |
| [`vc_nav_front_logo`](/devs/hooks/filters/vc_nav_front_logo) | Filters the HTML output of the WPBakery Page Builder logo displayed in the frontend editor navbar. |
| [`vc_page-welcome-slugs-list`](/devs/hooks/filters/vc_page-welcome-slugs-list) | Filters the list of tab slugs and labels displayed on the WPBakery Welcome screen. |
| [`vc_param_animation_style_list`](/devs/hooks/filters/vc_param_animation_style_list) | Filters the list of available CSS animation styles for the animation_style parameter type. |
| [`vc_param_group_render_filter`](/devs/hooks/filters/vc_param_group_render_filter) | Filters the rendered HTML output of a param_group field. |
| [`vc_path_filter`](/devs/hooks/filters/vc_path_filter) | Filters file paths resolved by the `Vc_Manager::path()` method. |
| [`vc_pointers_list`](/devs/hooks/filters/vc_pointers_list) | Filters the list of WordPress admin pointer IDs used by WPBakery Page Builder. |
| [`vc_popup_save_as_template_elements`](/devs/hooks/filters/vc_popup_save_as_template_elements) | Filters the list of element tags that show a "Save as Template" option instead of presets in the element settings popup. |
| [`vc_post_custom_css`](/devs/hooks/filters/vc_post_custom_css) | Filters the custom CSS stored in post meta before it is output on the frontend. |
| [`vc_post_custom_layout_name`](/devs/hooks/filters/vc_post_custom_layout_name) | Filters the custom layout name for the current post. |
| [`vc_post_custom_layout_template`](/devs/hooks/filters/vc_post_custom_layout_template) | Filters the template file path used for a custom post layout. |
| [`vc_post_meta_list`](/devs/hooks/filters/vc_post_meta_list) | Filters the list of post meta keys managed by WPBakery Page Builder. |
| [`vc_raw_html_module_content`](/devs/hooks/filters/vc_raw_html_module_content) | Filters the decoded content of the Raw HTML element before it is rendered on the frontend. |
| [`vc_render_settings_preset_popup`](/devs/hooks/filters/vc_render_settings_preset_popup) | Filters the template file path used to render the settings preset popup. |
| [`vc_render_settings_preset_title_prompt`](/devs/hooks/filters/vc_render_settings_preset_title_prompt) | Filters the template file path used to render the preset title prompt dialog. |
| [`vc_render_template_preview_include_template`](/devs/hooks/filters/vc_render_template_preview_include_template) | Filters the template file path used to render the template preview in the backend editor. |
| [`vc_revslider_shortcode`](/devs/hooks/filters/vc_revslider_shortcode) | Filters the rendered output of the Revolution Slider shortcode within the WPBakery Revolution Slider element. |
| [`vc_role_access_all_caps_role`](/devs/hooks/filters/vc_role_access_all_caps_role) | Filters the WordPress role object before its capabilities are read by the WPBakery role access controller. |
| [`vc_role_access_with_{part}_can`](/devs/hooks/filters/vc_role_access_with_part_can) | Filters whether a role can perform an action for a specific access part. |
| [`vc_role_access_with_{part}_can_{rule}`](/devs/hooks/filters/vc_role_access_with_part_can_rule) | Filters a specific rule check for a role access part. |
| [`vc_roles_parts_list`](/devs/hooks/filters/vc_roles_parts_list) | Filters the list of role access parts (sections) available in the WPBakery Role Manager settings. |
| [`vc_setting-tab-form-{tab}`](/devs/hooks/filters/vc_setting-tab-form-tab) | Filters additional form attributes for a specific settings tab. |
| [`vc_settings-less-variables`](/devs/hooks/filters/vc_settings-less-variables) | Filters the LESS variable definitions used for compiling custom design options colors on the WPBakery settings page. |
| [`vc_settings-render-tab-{tab}`](/devs/hooks/filters/vc_settings-render-tab-tab) | Filters the template path used to render a specific settings tab. |
| [`vc_settings-tab-submit-button-attributes-{tab}`](/devs/hooks/filters/vc_settings-tab-submit-button-attributes-tab) | Filters the submit button attributes for a specific settings tab. |
| [`vc_settings-tab-submit-button-attributes`](/devs/hooks/filters/vc_settings-tab-submit-button-attributes) | Filters the HTML attributes array for the submit button on WPBakery settings tabs. |
| [`vc_settings_exclude_post_type`](/devs/hooks/filters/vc_settings_exclude_post_type) | Filters the list of post types excluded from the WPBakery Role Manager settings. |
| [`vc_settings_page_show_color-picker-tab`](/devs/hooks/filters/vc_settings_page_show_color-picker-tab) | Filters whether the Color Picker Settings tab is displayed on the WPBakery Page Builder settings page. |
| [`vc_settings_page_show_design_tabs`](/devs/hooks/filters/vc_settings_page_show_design_tabs) | Controls whether the Design Options tab is displayed on the WPBakery Page Builder settings page when the plugin is activated as a theme-bundled... |
| [`vc_settings_page_show_typography_tab`](/devs/hooks/filters/vc_settings_page_show_typography_tab) | Controls whether the Typography tab is displayed on the WPBakery Page Builder settings page. |
| [`vc_settings_tabs`](/devs/hooks/filters/vc_settings_tabs) | Filters the array of settings tabs displayed on the WPBakery Page Builder settings page. |
| [`vc_shared_templates_import_shortcodes`](/devs/hooks/filters/vc_shared_templates_import_shortcodes) | Filters the list of shortcodes and their attribute keys that should be processed during shared template import for ID remapping. |
| [`vc_shortcode_content_filter`](/devs/hooks/filters/vc_shortcode_content_filter) | Filter the output of elements before it is rendered in the shortcode template. |
| [`vc_shortcode_content_filter_after`](/devs/hooks/filters/vc_shortcode_content_filter_after) | Filter the output of elements after it is rendered in the shortcode template. |
| [`vc_shortcode_output`](/devs/hooks/filters/vc_shortcode_output) | Filter the output of WPBakery elements that were defined using the WPBakeryShortCode class. |
| [`vc_shortcode_prepare_atts`](/devs/hooks/filters/vc_shortcode_prepare_atts) | Filters the prepared shortcode attributes after they have been processed and sanitized by WPBakery Page Builder. |
| [`vc_shortcode_set_template_{shortcode}`](/devs/hooks/filters/vc_shortcode_set_template_shortcode) | Filters the template file path for a specific shortcode. |
| [`vc_shortcodes_css_class`](/devs/hooks/filters/vc_shortcodes_css_class) | Example how you can alter class names that are outputted for built-in content elements and elements that follow up our coding guidelines and utilize... |
| [`vc_shortcodes_is_admin`](/devs/hooks/filters/vc_shortcodes_is_admin) | Filters the result of the admin check used by shortcode classes to determine whether the current request is an admin context. |
| [`vc_shortcodes_{type}_css`](/devs/hooks/filters/vc_shortcodes_type_css) | Filters stored shortcodes CSS for a given asset type. |
| [`vc_show_button_fe`](/devs/hooks/filters/vc_show_button_fe) | Filters whether the Frontend Editor button should be displayed for a given post. |
| [`vc_show_user_templates`](/devs/hooks/filters/vc_show_user_templates) | Filters whether the "My Templates" category is shown in the templates panel. |
| [`vc_single_param_edit`](/devs/hooks/filters/vc_single_param_edit) | Filters a single parameter configuration array before the edit form field is rendered in the shortcode settings panel. |
| [`vc_single_param_edit_holder_output`](/devs/hooks/filters/vc_single_param_edit_holder_output) | Filters the complete HTML output of a single parameter edit holder in the shortcode settings panel. |
| [`vc_site_attached_images_query_limit`](/devs/hooks/filters/vc_site_attached_images_query_limit) | Filters the query limit for retrieving site-attached images in the deprecated `vc_siteAttachedImages()` function. |
| [`vc_template_custom_code`](/devs/hooks/filters/vc_template_custom_code) | Filters the custom code data passed to the Custom Code panel UI template. |
| [`vc_templates_render_backend_template`](/devs/hooks/filters/vc_templates_render_backend_template) | Filters the rendered output of a backend template when it is loaded via AJAX in the templates panel. |
| [`vc_templates_render_backend_template_preview`](/devs/hooks/filters/vc_templates_render_backend_template_preview) | Filters the preview content of a backend template rendered in the templates panel preview area. |
| [`vc_templates_render_category`](/devs/hooks/filters/vc_templates_render_category) | Filters the rendered output for a template category tab in the templates panel. |
| [`vc_templates_render_frontend_template`](/devs/hooks/filters/vc_templates_render_frontend_template) | Filters the rendered output of a template when it is loaded via AJAX in the Frontend Editor. |
| [`vc_templates_render_template`](/devs/hooks/filters/vc_templates_render_template) | Filters the HTML output of a single template item within a template category list in the templates panel. |
| [`vc_third_party_modules_list`](/devs/hooks/filters/vc_third_party_modules_list) | Filters the list of third-party modules that should be registered with the WPBakery Page Builder module system. |
| [`vc_translate_column_width_class`](/devs/hooks/filters/vc_translate_column_width_class) | Filters the CSS class generated from a column width fraction (e.g., `1/2` becomes `vc_col-sm-6`). |
| [`vc_tta_accordion_general_classes`](/devs/hooks/filters/vc_tta_accordion_general_classes) | Filters the array of CSS classes applied to the accordion (TTA) element wrapper. |
| [`vc_tta_container_classes`](/devs/hooks/filters/vc_tta_container_classes) | Filters the array of CSS classes applied to the TTA (Tabs, Tours, Accordions) container element. |
| [`vc_tta_section_param_heading_tag`](/devs/hooks/filters/vc_tta_section_param_heading_tag) | Filters the HTML heading tag used for TTA section titles (e.g., accordion panel or tab heading). |
| [`vc_ui-pointers-{screen_id}`](/devs/hooks/filters/vc_ui-pointers-screen_id) | Filters UI pointers for a specific admin screen. |
| [`vc_user_access_check-shortcode_all`](/devs/hooks/filters/vc_user_access_check-shortcode_all) | Filters the access check result for a shortcode before the default role-based access logic runs. |
| [`vc_user_access_with_{part}_get_state`](/devs/hooks/filters/vc_user_access_with_part_get_state) | Filters the access state for a specific part for the current user. |
| [`vc_vendor_layerslider_old`](/devs/hooks/filters/vc_vendor_layerslider_old) | Filters whether to use the old-style LayerSlider vendor integration that queries the database directly instead of using the `LS_Sliders` class. |
| [`vc_vendor_qtranslate_enqueue_js_backend`](/devs/hooks/filters/vc_vendor_qtranslate_enqueue_js_backend) | Filters whether to enqueue the qTranslate backend JavaScript integration regardless of the current post type validity check. |
| [`vc_wp_text_widget_shortcode`](/devs/hooks/filters/vc_wp_text_widget_shortcode) | Filters the content of the WP Text Widget shortcode element before it is passed to the widget instance. |
| [`vc_wpb_getimagesize`](/devs/hooks/filters/vc_wpb_getimagesize) | Filters the image data returned by `wpb_getImageBySize()`, which includes a thumbnail HTML tag and the large image source array. |
| [`vc_wpbakery_shortcode_get_column_controls_modular_template`](/devs/hooks/filters/vc_wpbakery_shortcode_get_column_controls_modular_template) | Filters the template file path used for rendering modular column controls in the backend editor. |
| [`vc_wpbakery_shortcode_get_controls_list`](/devs/hooks/filters/vc_wpbakery_shortcode_get_controls_list) | Filters the list of control actions available for a shortcode element in the backend editor (e.g., edit, clone, copy, delete). |
| [`vc_wpbakeryshortcode_single_param_html_holder_value`](/devs/hooks/filters/vc_wpbakeryshortcode_single_param_html_holder_value) | Filters the parameter value used when rendering a single param HTML holder in the backend editor. |
| [`wpb_ai_content_type_list`](/devs/hooks/filters/wpb_ai_content_type_list) | Filters the list of content type options displayed in the "Content type" dropdown of the WPBakery AI popup. |
| [`wpb_ai_modal_type_dependency`](/devs/hooks/filters/wpb_ai_modal_type_dependency) | Filters the mapping between parameter types and their AI modal template paths. |
| [`wpb_ai_number_of_symbols_list`](/devs/hooks/filters/wpb_ai_number_of_symbols_list) | Filters the list of content length options displayed in the "Length" dropdown of the WPBakery AI popup. |
| [`wpb_ai_tone_of_voice_list`](/devs/hooks/filters/wpb_ai_tone_of_voice_list) | Filters the list of tone-of-voice options displayed in the "Tone of voice" dropdown of the WPBakery AI popup. |
| [`wpb_cta_text`](/devs/hooks/filters/wpb_cta_text) | Filters the call-to-action text HTML output in the CTA Button element. |
| [`wpb_custom_html_elements`](/devs/hooks/filters/wpb_custom_html_elements) | Filters the list of element shortcode tags that are considered to contain custom HTML. |
| [`wpb_disable_local_fonts`](/devs/hooks/filters/wpb_disable_local_fonts) | Filters whether to disable the local Google Fonts feature. |
| [`wpb_download_all_google_fonts`](/devs/hooks/filters/wpb_download_all_google_fonts) | Filters whether to download all Google Fonts for local hosting instead of only the fonts used on the site. |
| [`wpb_enqueue_backend_editor_css`](/devs/hooks/filters/wpb_enqueue_backend_editor_css) | Filters the list of CSS stylesheet handles to enqueue in the backend editor. |
| [`wpb_enqueue_backend_editor_js`](/devs/hooks/filters/wpb_enqueue_backend_editor_js) | Filters the list of JavaScript handles to enqueue in the backend editor. |
| [`wpb_enqueue_frontend_editor_css`](/devs/hooks/filters/wpb_enqueue_frontend_editor_css) | Filters the list of CSS stylesheet handles to enqueue in the frontend editor. |
| [`wpb_get_ai_icon_template`](/devs/hooks/filters/wpb_get_ai_icon_template) | Filters the template path used to render the AI icon for a given field. |
| [`wpb_is_post_custom_layout_blank`](/devs/hooks/filters/wpb_is_post_custom_layout_blank) | Filters whether the current post uses a blank custom layout. |
| [`wpb_loop_query_build_args`](/devs/hooks/filters/wpb_loop_query_build_args) | Filters the WP_Query arguments built by the loop parameter type before the query is executed. |
| [`wpb_module_ai_element_param_types`](/devs/hooks/filters/wpb_module_ai_element_param_types) | Filters the list of element parameter types that display the AI icon in the editor. |
| [`wpb_module_ai_text_field_words`](/devs/hooks/filters/wpb_module_ai_text_field_words) | Filters the list of keywords used to determine whether a `textfield` parameter should display the AI icon. |
| [`wpb_module_ai_type_response_route_lib`](/devs/hooks/filters/wpb_module_ai_type_response_route_lib) | Filters the routing configuration that maps element parameter types to their AI response handler classes and API endpoints. |
| [`wpb_navbar_getControlScreenSize`](/devs/hooks/filters/wpb_navbar_getControlScreenSize) | Filters the available screen sizes for the responsive preview control in the frontend editor navbar. |
| [`wpb_set_post_custom_meta`](/devs/hooks/filters/wpb_set_post_custom_meta) | Filters the custom meta values associated with a post in the editor. |
| [`wpb_shortcode_acf_display_when_empty_value`](/devs/hooks/filters/wpb_shortcode_acf_display_when_empty_value) | Filters whether the ACF (Advanced Custom Fields) shortcode element should render output when the field value is empty. |
| [`wpb_toggle_heading`](/devs/hooks/filters/wpb_toggle_heading) | Filters the heading HTML output of the Toggle (FAQ) element. |
| [`wpb_update_post_param_list`](/devs/hooks/filters/wpb_update_post_param_list) | Filters the list of post parameter names that WPBakery will update when saving a post from the editor. |
| [`wpb_vc_js_status_filter`](/devs/hooks/filters/wpb_vc_js_status_filter) | Filters the WPBakery editor status for the current post. |
| [`wpb_widget_title`](/devs/hooks/filters/wpb_widget_title) | To output title for content elements WPBakery Page Builder is using `h2` tag, if you need to modify it, here is how it can be done: |
