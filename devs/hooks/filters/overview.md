---
sidebar_position: 0
sidebar_label: Filters
hide_table_of_contents: true
slug: /hooks/filters
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
| [`get_lib_ai_icon_words`](/devs/hooks/filters/get_lib_ai_icon_words) | For a `text_field` array type, we have a list of words based on which we output the AI icon if the element param name co |
| [`vc-tta-get-params-tabs-list`](/devs/hooks/filters/vc-tta-get-params-tabs-list) | Filters the TTA (Tabs, Tours, Accordions) tabs list HTML output before it is returned. |
| [`vc-ui-pointers`](/devs/hooks/filters/vc-ui-pointers) | Filters the list of UI pointers (admin help tooltips) registered for the current screen. |
| [`vc_add_element_box_buttons`](/devs/hooks/filters/vc_add_element_box_buttons) | Filters the rendered HTML output of the add element box buttons. This allows you to modify the complete list of element  |
| [`vc_add_element_categories`](/devs/hooks/filters/vc_add_element_categories) | Filters the tab categories displayed in the "Add Element" panel. Use this to modify, add, or remove category tabs. |
| [`vc_add_new_elements_to_box`](/devs/hooks/filters/vc_add_new_elements_to_box) | Filters the list of mapped shortcodes displayed in the "Add Element" box. This allows you to modify which elements are a |
| [`vc_animation_style_render_filter`](/devs/hooks/filters/vc_animation_style_render_filter) | Filters the rendered output of the animation style parameter field. Use this to override the full HTML output of the CSS |
| [`vc_autocomplete_callback`](/devs/hooks/filters/vc_autocomplete_callback) | Provides autocomplete suggestions for a specific shortcode parameter via AJAX. The filter name is dynamic — replace `\{ |
| [`vc_autocomplete_render_filter`](/devs/hooks/filters/vc_autocomplete_render_filter) | Filters the rendered output of the autocomplete parameter field. Use this to override the full HTML output of the autoco |
| [`vc_autoload_components_list`](/devs/hooks/filters/vc_autoload_components_list) | Filters the list of components that are autoloaded during WPBakery initialization. Components are loaded from a manifest |
| [`vc_autoload_components_manifest_file`](/devs/hooks/filters/vc_autoload_components_manifest_file) | Filters the file path to the autoload components manifest file. This allows developers to override the default manifest  |
| [`vc_base_build_shortcodes_type_css`](/devs/hooks/filters/vc_base_build_shortcodes_type_css) | Filters the parsed shortcode CSS for a specific type before it is saved as post meta. The dynamic portion of the hook na |
| [`vc_base_save_post_meta_name`](/devs/hooks/filters/vc_base_save_post_meta_name) | Filters the post meta value before it is saved during post update. The dynamic portion of the hook name, `\{meta_name\}`,  |
| [`vc_basic_grid_filter_query_filters`](/devs/hooks/filters/vc_basic_grid_filter_query_filters) | Filters the custom query string used in the Post Grid element when the post type is set to "custom". This allows modific |
| [`vc_basic_grid_filter_query_suppress_filters`](/devs/hooks/filters/vc_basic_grid_filter_query_suppress_filters) | Filters the `suppress_filters` parameter used in the Post Grid WP_Query. By default, this is set to `true`, which preven |
| [`vc_basic_grid_find_post_shortcode`](/devs/hooks/filters/vc_basic_grid_find_post_shortcode) | Filters the shortcode data found by ID in a specific post. This filter is applied after the grid element searches post m |
| [`vc_basic_grid_items_per_page_all_max_items`](/devs/hooks/filters/vc_basic_grid_items_per_page_all_max_items) | Filters the maximum number of items per page when the grid pagination is set to display all items. The default value is  |
| [`vc_basic_grid_max_items`](/devs/hooks/filters/vc_basic_grid_max_items) | Filters the maximum number of items that can be displayed in the Post Grid element. This filter is applied when the post |
| [`vc_basic_grid_template_filter`](/devs/hooks/filters/vc_basic_grid_template_filter) | Filters the rendered HTML output of the grid filter (taxonomy filter) template before it is appended to the grid output. |
| [`vc_before_update_post_data`](/devs/hooks/filters/vc_before_update_post_data) | Filters the post data object before WPBakery Page Builder updates the post with its own data. This filter allows modific |
| [`vc_btn_a_href`](/devs/hooks/filters/vc_btn_a_href) | Filters the URL (href attribute) of the Button element before it is rendered. This allows modification of button links d |
| [`vc_btn_a_title`](/devs/hooks/filters/vc_btn_a_title) | Filters the title attribute of the Button element anchor tag before it is rendered. This allows modification of the butt |
| [`vc_check_post_type_validation`](/devs/hooks/filters/vc_check_post_type_validation) | Filters the post type validation result when checking if WPBakery Page Builder should be enabled for a specific post typ |
| [`vc_clear_shortcode_suffix`](/devs/hooks/filters/vc_clear_shortcode_suffix) | Filters the shortcode tag name used during Frontend Editor rendering. This filter is applied when building the shortcode |
| [`vc_css_editor`](/devs/hooks/filters/vc_css_editor) | Filters the complete HTML output of the CSS Editor (Design Options) parameter field. This allows customization of the en |
| [`vc_css_editor_background_image_control`](/devs/hooks/filters/vc_css_editor_background_image_control) | Filters the HTML output of the background image control in the CSS Editor (Design Options). This control renders the ima |
| [`vc_css_editor_background_style_options_data`](/devs/hooks/filters/vc_css_editor_background_style_options_data) | Filters the available background style options in the CSS Editor (Design Options). These options control how the backgro |
| [`vc_css_editor_border_radius_options_data`](/devs/hooks/filters/vc_css_editor_border_radius_options_data) | Filters the available border radius options in the CSS Editor (Design Options). These options define the selectable bord |
| [`vc_css_editor_border_style_options_data`](/devs/hooks/filters/vc_css_editor_border_style_options_data) | Filters the available border style options in the CSS Editor (Design Options). These options define the selectable CSS b |
| [`vc_css_editor_layer_controls`](/devs/hooks/filters/vc_css_editor_layer_controls) | Filters the HTML output of a specific layer's input controls in the CSS Editor (Design Options) onion layout. Each layer |
| [`vc_css_editor_onion_layout`](/devs/hooks/filters/vc_css_editor_onion_layout) | Filters the HTML output of the onion layout (box model diagram) in the CSS Editor (Design Options). The onion layout dis |
| [`vc_custom_code_categories`](/devs/hooks/filters/vc_custom_code_categories) | Filters the list of tab categories displayed in the Custom Code popup panel. Modules such as Custom CSS and Custom JS us |
| [`vc_custom_code_templates`](/devs/hooks/filters/vc_custom_code_templates) | Filters the list of tab templates used in the Custom Code popup panel. Modules such as Custom CSS and Custom JS use this |
| [`vc_custom_heading_template_use_wrapper`](/devs/hooks/filters/vc_custom_heading_template_use_wrapper) | Filters whether the Custom Heading element should use an additional wrapper `<div>` around the heading tag. When set to  |
| [`vc_custom_markup_render_filter`](/devs/hooks/filters/vc_custom_markup_render_filter) | Filters the rendered output of the `custom_markup` parameter type in the shortcode edit form. This hook allows overridin |
| [`vc_edit_form_class`](/devs/hooks/filters/vc_edit_form_class) | Filters the array of CSS classes applied to the edit form fields container element. This allows adding or modifying CSS  |
| [`vc_edit_form_css_class`](/devs/hooks/filters/vc_edit_form_css_class) | Filters the CSS class string applied to the shortcode edit form panel container. This allows modification of the panel's |
| [`vc_edit_form_enqueue_script`](/devs/hooks/filters/vc_edit_form_enqueue_script) | Filters the array of scripts registered for parameter types in the edit form. This allows adding, removing, or modifying |
| [`vc_edit_form_fields_attributes_tag`](/devs/hooks/filters/vc_edit_form_fields_attributes_tag) | Filters the shortcode attributes before they are used to populate the edit form fields. The dynamic portion of the hook  |
| [`vc_edit_form_fields_optional_params`](/devs/hooks/filters/vc_edit_form_fields_optional_params) | Filters the list of optional parameter types that should not be initialized by default in the edit form. Parameters in t |
| [`vc_edit_form_fields_render_field_type_before`](/devs/hooks/filters/vc_edit_form_fields_render_field_type_before) | Filters the HTML output rendered **before** a parameter field of a specific type in the WPBakery element edit form. A co |
| [`vc_el_id_render_filter`](/devs/hooks/filters/vc_el_id_render_filter) | Filters the rendered HTML output of the `el_id` parameter type form field. This parameter type is used to create an inpu |
| [`vc_element_settings_filter`](/devs/hooks/filters/vc_element_settings_filter) | Filters the settings array for a WPBakery element after it has been initialized from its configuration. This allows you  |
| [`vc_enqueue_frontend_editor_js`](/devs/hooks/filters/vc_enqueue_frontend_editor_js) | Filters the array of JavaScript dependency handles that are enqueued for the WPBakery frontend editor. This allows you t |
| [`vc_fe_render_shortcode`](/devs/hooks/filters/vc_fe_render_shortcode) | Filters the shortcode data array before it is rendered in the frontend editor. This hook is called for each shortcode be |
| [`vc_font_container_get_allowed_tags`](/devs/hooks/filters/vc_font_container_get_allowed_tags) | Filters the list of allowed HTML tags available in the font container parameter's tag selector. By default, the allowed  |
| [`vc_font_container_get_fonts_filter`](/devs/hooks/filters/vc_font_container_get_fonts_filter) | Filters the list of web-safe fonts available in the font container parameter's font family selector. By default, this in |
| [`vc_font_container_output_data`](/devs/hooks/filters/vc_font_container_output_data) | Filters the rendered output data array for the font container parameter before it is assembled into the final HTML outpu |
| [`vc_font_container_render_filter`](/devs/hooks/filters/vc_font_container_render_filter) | Filters the final rendered HTML output of the entire font container parameter form field. This is applied after all sub- |
| [`vc_form_fields_render_field_param`](/devs/hooks/filters/vc_form_fields_render_field_param) | Dynamic filters that allow modification of a specific parameter's configuration or value when rendering the element edit |
| [`vc_front_render_shortcodes`](/devs/hooks/filters/vc_front_render_shortcodes) | Filters the final HTML output of all rendered shortcodes in the frontend editor after they have been processed and assem |
| [`vc_frontend_editor_iframe_url`](/devs/hooks/filters/vc_frontend_editor_iframe_url) | This filter may be handy if you want to change transfer protocol. E.g. from http to https. |
| [`vc_frontend_editor_load_shortcode_ajax_output`](/devs/hooks/filters/vc_frontend_editor_load_shortcode_ajax_output) | Filters the complete AJAX output when loading a shortcode in the frontend editor. This output includes the rendered shor |
| [`vc_frontend_editor_new_post_data`](/devs/hooks/filters/vc_frontend_editor_new_post_data) | Filters the post data array used when creating or updating a new post through the frontend editor. This allows modificat |
| [`vc_frontend_editor_to_string`](/devs/hooks/filters/vc_frontend_editor_to_string) | Filters the shortcode data array before it is converted to a frontend editor string representation. This is used during  |
| [`vc_frontend_template_the_content`](/devs/hooks/filters/vc_frontend_template_the_content) | Filters the parsed template content before it is output in the frontend editor template view. The content has already be |
| [`vc_get_all_templates`](/devs/hooks/filters/vc_get_all_templates) | Filters the complete array of template categories and their templates displayed in the WPBakery templates panel. Use thi |
| [`vc_get_editor_locale`](/devs/hooks/filters/vc_get_editor_locale) | Filters the array of localized strings used by the WPBakery editor JavaScript. These strings are passed to the frontend  |
| [`vc_get_editor_wpb_data`](/devs/hooks/filters/vc_get_editor_wpb_data) | Filters the WPBakery data array that is localized and passed to the editor JavaScript. This data is made available as th |
| [`vc_get_inline_url`](/devs/hooks/filters/vc_get_inline_url) | Filters the URL used to open the WPBakery frontend (inline) editor for a specific post. The URL points to `admin_url()`  |
| [`vc_get_settings_locale`](/devs/hooks/filters/vc_get_settings_locale) | Filters the array of localized strings used by the WPBakery settings page JavaScript. These strings are localized via `w |
| [`vc_get_settings_wpb_data`](/devs/hooks/filters/vc_get_settings_wpb_data) | Filters the WPBakery data array that is localized and passed to the settings page JavaScript. This data is made availabl |
| [`vc_get_user_templates`](/devs/hooks/filters/vc_get_user_templates) | Filters the array of user-saved templates retrieved from the WordPress options table. These are templates that users hav |
| [`vc_get_vc_grid_data_response`](/devs/hooks/filters/vc_get_vc_grid_data_response) | Filters the AJAX response output of a WPBakery Grid element when data is loaded or paginated via AJAX. This is called af |
| [`vc_gitem_add_link_param`](/devs/hooks/filters/vc_gitem_add_link_param) | Filters the "Add link" parameter definition array used by Grid Item shortcodes. This parameter provides a dropdown allow |
| [`vc_gitem_add_link_target_param`](/devs/hooks/filters/vc_gitem_add_link_target_param) | Filters the "Open link in a new tab" parameter definition array used by Grid Item shortcodes. This parameter provides a  |
| [`vc_gitem_attribute_featured_image_img`](/devs/hooks/filters/vc_gitem_attribute_featured_image_img) | Filters the featured image data returned by `wpb_getImageBySize()` for a Grid Item's featured image attribute. This allo |
| [`vc_gitem_post_data_get_link_real_title`](/devs/hooks/filters/vc_gitem_post_data_get_link_real_title) | Filters the `title` attribute string for a grid item link when creating a "real" link (as opposed to a template placehol |
| [`vc_gitem_post_data_get_link_rel`](/devs/hooks/filters/vc_gitem_post_data_get_link_rel) | Filters the `rel` attribute string for a grid item link. This filter is used in the template-based grid item link creati |
| [`vc_gitem_post_data_get_link_title`](/devs/hooks/filters/vc_gitem_post_data_get_link_title) | Filters the `title` attribute string for a grid item link in the template-based link creation. Unlike the `vc_gitem_post |
| [`vc_gitem_template_attribute_acf_value`](/devs/hooks/filters/vc_gitem_template_attribute_acf_value) | Filters the ACF (Advanced Custom Fields) field value before it is displayed in a grid item template. |
| [`vc_gitem_template_attribute_name`](/devs/hooks/filters/vc_gitem_template_attribute_name) | Dynamic filter that allows modification of a specific grid item template attribute value. The `\{name\}` part is the attri |
| [`vc_gitem_template_attribute_post_image_background_image_css_value`](/devs/hooks/filters/vc_gitem_template_attribute_post_image_background_image_css_value) | Filters the CSS background-image property value for a post's featured image in a grid item template. |
| [`vc_gitem_template_attribute_post_image_html`](/devs/hooks/filters/vc_gitem_template_attribute_post_image_html) | Filters the HTML output of a post's featured image in a grid item template. |
| [`vc_gitem_template_attribute_post_image_url_value`](/devs/hooks/filters/vc_gitem_template_attribute_post_image_url_value) | Filters the post image URL value used in grid item templates. This filter is applied in multiple contexts including imag |
| [`vc_gitem_template_attribute_post_title`](/devs/hooks/filters/vc_gitem_template_attribute_post_title) | Filters the post title used in the `title` attribute of lightbox image links within grid item templates. |
| [`vc_gitem_template_attribute_vc_btn`](/devs/hooks/filters/vc_gitem_template_attribute_vc_btn) | Filters the rendered button output used in grid item templates, particularly for the "Load More" button in pageable grid |
| [`vc_gitem_template_attribute_woocommerce_order_field`](/devs/hooks/filters/vc_gitem_template_attribute_woocommerce_order_field) | Dynamic filter that allows modification of WooCommerce order field values displayed in grid item templates. The `\{field} |
| [`vc_gitem_template_attribute_woocommerce_product_field`](/devs/hooks/filters/vc_gitem_template_attribute_woocommerce_product_field) | Dynamic filter that allows modification of WooCommerce product field values displayed in grid item templates. The `\{fiel |
| [`vc_gitem_template_attribute_woocommerce_product_link_value`](/devs/hooks/filters/vc_gitem_template_attribute_woocommerce_product_link_value) | Filters the WooCommerce "Add to Cart" URL for a product displayed in a grid item template. |
| [`vc_gitem_zone_grid_item_not_content_shortcodes`](/devs/hooks/filters/vc_gitem_zone_grid_item_not_content_shortcodes) | Filters the list of shortcodes that are not allowed inside the content zone of a grid item. These shortcodes are structu |
| [`vc_gitem_zone_image_block_link`](/devs/hooks/filters/vc_gitem_zone_image_block_link) | Filters the image block link HTML in a grid item zone. This filter is applied after the link type has been determined (e |
| [`vc_global_js_data`](/devs/hooks/filters/vc_global_js_data) | Filters the global JavaScript data object (`vcData`) that is localized and made available to the WPBakery settings page  |
| [`vc_google_fonts_get_fonts_filter`](/devs/hooks/filters/vc_google_fonts_get_fonts_filter) | Filters the list of Google Fonts available in the Google Fonts parameter type. This allows adding, removing, or modifyin |
| [`vc_google_fonts_render_filter`](/devs/hooks/filters/vc_google_fonts_render_filter) | Filters the rendered HTML output of the Google Fonts parameter field in the editor panel. |
| [`vc_grid_get_all_templates`](/devs/hooks/filters/vc_grid_get_all_templates) | Filters the complete list of grid item templates available in the grid item template picker. This includes both predefin |
| [`vc_grid_get_grid_data_access`](/devs/hooks/filters/vc_grid_get_grid_data_access) | Filters whether the current AJAX request is allowed to retrieve grid data. By default, access is granted when a valid pu |
| [`vc_grid_item_predefined_templates`](/devs/hooks/filters/vc_grid_item_predefined_templates) | Filters the predefined grid item templates. These are the built-in template layouts available in the grid item editor te |
| [`vc_grid_item_preview_render_default_width_value`](/devs/hooks/filters/vc_grid_item_preview_render_default_width_value) | Filters the default width value used when rendering a grid item preview in the editor. The value represents the number o |
| [`vc_grid_item_shortcodes`](/devs/hooks/filters/vc_grid_item_shortcodes) | Filters the list of shortcodes available for use within the grid item editor. These shortcodes define the elements that  |
| [`vc_grid_request_url`](/devs/hooks/filters/vc_grid_request_url) | Filters the AJAX request URL used by the grid element for loading data (pagination, filtering, and lazy loading). By def |
| [`vc_hooks_vc_post_settings`](/devs/hooks/filters/vc_hooks_vc_post_settings) | Filters the post settings array before it is saved as post meta (`_vc_post_settings`). This hook is used internally by t |
| [`vc_iconpicker-type`](/devs/hooks/filters/vc_iconpicker-type) | Dynamic filter that provides the list of icons for a specific icon picker type. The `\{type\}` portion of the filter name  |
| [`vc_iconpicker_render_filter`](/devs/hooks/filters/vc_iconpicker_render_filter) | Filters the rendered HTML output of the icon picker parameter field in the editor panel. |
| [`vc_import_allow_fetch_attachments`](/devs/hooks/filters/vc_import_allow_fetch_attachments) | Filters whether downloading attachments is allowed during the WPBakery template import process. |
| [`vc_import_attachment_size_limit`](/devs/hooks/filters/vc_import_attachment_size_limit) | Filters the maximum file size for downloaded attachments during the WPBakery template import process. |
| [`vc_import_post_data_processed`](/devs/hooks/filters/vc_import_post_data_processed) | Filters the processed post data array just before the post is inserted into the database during the WPBakery template im |
| [`vc_import_post_data_raw`](/devs/hooks/filters/vc_import_post_data_raw) | Filters the raw post data from the import file before it is processed during the WPBakery template import. This is appli |
| [`vc_import_post_meta`](/devs/hooks/filters/vc_import_post_meta) | Filters the array of post meta entries before they are saved during the WPBakery template import process. |
| [`vc_import_post_meta_key`](/devs/hooks/filters/vc_import_post_meta_key) | Filters the meta key for each post meta entry during the WPBakery template import process. Returning a falsy value will  |
| [`vc_import_posts`](/devs/hooks/filters/vc_import_posts) | Filters the complete array of posts before they are processed during the WPBakery template import. This allows modificat |
| [`vc_inline_template_content`](/devs/hooks/filters/vc_inline_template_content) | Filters the template content retrieved for the frontend (inline) editor. Allows modification of the raw template content |
| [`vc_is_valid_post_type_be`](/devs/hooks/filters/vc_is_valid_post_type_be) | Filters whether a given post type is valid for the backend editor. Use this to override the default post type validation |
| [`vc_layerslider_shortcode`](/devs/hooks/filters/vc_layerslider_shortcode) | Filters the rendered output of the LayerSlider shortcode within the WPBakery LayerSlider element. Allows modification of |
| [`vc_load_default_templates`](/devs/hooks/filters/vc_load_default_templates) | More information about operating with templates you can in [Add More Custom Templates](/devs/inner-api/vc_add_default_te |
| [`vc_load_default_templates_limit_total`](/devs/hooks/filters/vc_load_default_templates_limit_total) | Filters the maximum number of default templates displayed in the templates panel. Use this to increase or decrease how m |
| [`vc_map_add_css_animation`](/devs/hooks/filters/vc_map_add_css_animation) | Filters the CSS animation parameter data array used when registering the animation param for elements. Allows modificati |
| [`vc_map_get_attributes`](/devs/hooks/filters/vc_map_get_attributes) | Filters the merged shortcode attributes after combining user-supplied values with registered defaults. This runs after ` |
| [`vc_map_get_param_defaults`](/devs/hooks/filters/vc_map_get_param_defaults) | Filters the default value resolved for an individual shortcode parameter. Called once per parameter when building the de |
| [`vc_mapper_attribute`](/devs/hooks/filters/vc_mapper_attribute) | Filters each parameter (attribute) definition when a shortcode is being mapped. This hook fires for every parameter of e |
| [`vc_mapper_attribute_type`](/devs/hooks/filters/vc_mapper_attribute_type) | Filters a shortcode param attribute by its type during mapping. The dynamic portion of the hook name, `\{type\}`, refers t |
| [`vc_nav_control_list`](/devs/hooks/filters/vc_nav_control_list) | Filters the list of navbar controls displayed in the WPBakery editor navigation bar. Use this to add, remove, or reorder |
| [`vc_nav_front_logo`](/devs/hooks/filters/vc_nav_front_logo) | Filters the HTML output of the WPBakery Page Builder logo displayed in the frontend editor navbar. Use this to replace o |
| [`vc_page-welcome-slugs-list`](/devs/hooks/filters/vc_page-welcome-slugs-list) | Filters the list of tab slugs and labels displayed on the WPBakery Welcome screen. Use this to add, remove, or modify ta |
| [`vc_param_animation_style_list`](/devs/hooks/filters/vc_param_animation_style_list) | Filters the list of available CSS animation styles for the animation_style parameter type. Use this to add custom animat |
| [`vc_param_group_render_filter`](/devs/hooks/filters/vc_param_group_render_filter) | Filters the rendered HTML output of a param_group field. Use this to modify the rendered markup of parameter group form  |
| [`vc_path_filter`](/devs/hooks/filters/vc_path_filter) | Filters file paths resolved by the `Vc_Manager::path()` method. Use this to redirect or modify the file system paths use |
| [`vc_pointers_list`](/devs/hooks/filters/vc_pointers_list) | Filters the list of WordPress admin pointer IDs used by WPBakery Page Builder. Pointers are used to guide users through  |
| [`vc_popup_save_as_template_elements`](/devs/hooks/filters/vc_popup_save_as_template_elements) | Filters the list of element tags that show a "Save as Template" option instead of presets in the element settings popup. |
| [`vc_post_custom_css`](/devs/hooks/filters/vc_post_custom_css) | Filters the custom CSS stored in post meta before it is output on the frontend. Use this to modify, sanitize, or extend  |
| [`vc_post_custom_layout_name`](/devs/hooks/filters/vc_post_custom_layout_name) | Filters the custom layout name for the current post. The layout name determines which template layout (e.g., "blank", "d |
| [`vc_post_custom_layout_template`](/devs/hooks/filters/vc_post_custom_layout_template) | Filters the template file path used for a custom post layout. This allows you to override the resolved template path for |
| [`vc_post_meta_list`](/devs/hooks/filters/vc_post_meta_list) | Filters the list of post meta keys managed by WPBakery Page Builder. Modules use this filter to register their meta keys |
| [`vc_raw_html_module_content`](/devs/hooks/filters/vc_raw_html_module_content) | Filters the decoded content of the Raw HTML element before it is rendered on the frontend. The content has already been  |
| [`vc_render_settings_preset_popup`](/devs/hooks/filters/vc_render_settings_preset_popup) | Filters the template file path used to render the settings preset popup. Use this to replace the default preset popup te |
| [`vc_render_settings_preset_title_prompt`](/devs/hooks/filters/vc_render_settings_preset_title_prompt) | Filters the template file path used to render the preset title prompt dialog. This prompt is shown when a user saves a n |
| [`vc_render_template_preview_include_template`](/devs/hooks/filters/vc_render_template_preview_include_template) | Filters the template file path used to render the template preview in the backend editor. Use this to replace the defaul |
| [`vc_revslider_shortcode`](/devs/hooks/filters/vc_revslider_shortcode) | Filters the rendered output of the Revolution Slider shortcode within the WPBakery Revolution Slider element. Allows mod |
| [`vc_role_access_all_caps_role`](/devs/hooks/filters/vc_role_access_all_caps_role) | Filters the WordPress role object before its capabilities are read by the WPBakery role access controller. Use this to m |
| [`vc_role_access_with_part_can`](/devs/hooks/filters/vc_role_access_with_part_can) | Filters whether a role can perform an action for a specific access part. The dynamic portion of the hook name, `\{part\}`, |
| [`vc_role_access_with_part_can_rule`](/devs/hooks/filters/vc_role_access_with_part_can_rule) | Filters a specific rule check for a role access part. The dynamic portions of the hook name, `\{part\}` and `\{rule\}`, refe |
| [`vc_roles_parts_list`](/devs/hooks/filters/vc_roles_parts_list) | Filters the list of role access parts (sections) available in the WPBakery Role Manager settings. Each part represents a |
| [`vc_setting-tab-form-tab`](/devs/hooks/filters/vc_setting-tab-form-tab) | Filters additional form attributes for a specific settings tab. The dynamic portion of the hook name, `\{tab\}`, refers to |
| [`vc_settings-less-variables`](/devs/hooks/filters/vc_settings-less-variables) | Filters the LESS variable definitions used for compiling custom design options colors on the WPBakery settings page. The |
| [`vc_settings-render-tab-tab`](/devs/hooks/filters/vc_settings-render-tab-tab) | Filters the template path used to render a specific settings tab. The dynamic portion of the hook name, `\{tab\}`, refers  |
| [`vc_settings-tab-submit-button-attributes-tab`](/devs/hooks/filters/vc_settings-tab-submit-button-attributes-tab) | Filters the submit button attributes for a specific settings tab. The dynamic portion of the hook name, `\{tab\}`, refers  |
| [`vc_settings-tab-submit-button-attributes`](/devs/hooks/filters/vc_settings-tab-submit-button-attributes) | Filters the HTML attributes array for the submit button on WPBakery settings tabs. Use this to add custom data attribute |
| [`vc_settings_exclude_post_type`](/devs/hooks/filters/vc_settings_exclude_post_type) | Filters the list of post types excluded from the WPBakery Role Manager settings. Post types in this list will not appear |
| [`vc_settings_page_show_color_picker_tab`](/devs/hooks/filters/vc_settings_page_show_color_picker_tab) | Controls whether the Color Picker Settings tab is displayed on the WPBakery Page Builder settings page. |
| [`vc_settings_page_show_design_tabs`](/devs/hooks/filters/vc_settings_page_show_design_tabs) | Controls whether the Design Options tab is displayed on the WPBakery Page Builder settings page when the plugin is activ |
| [`vc_settings_page_show_typography_tab`](/devs/hooks/filters/vc_settings_page_show_typography_tab) | Controls whether the Typography tab is displayed on the WPBakery Page Builder settings page. |
| [`vc_settings_tabs`](/devs/hooks/filters/vc_settings_tabs) | Filters the array of settings tabs displayed on the WPBakery Page Builder settings page. Allows adding, removing, or reo |
| [`vc_shared_templates_import_shortcodes`](/devs/hooks/filters/vc_shared_templates_import_shortcodes) | Filters the list of shortcodes and their attribute keys that should be processed during shared template import for ID re |
| [`vc_shortcode_content_filter`](/devs/hooks/filters/vc_shortcode_content_filter) | Filter the output of elements before it is rendered in the shortcode template. |
| [`vc_shortcode_content_filter_after`](/devs/hooks/filters/vc_shortcode_content_filter_after) | Filter the output of elements after it is rendered in the shortcode template. |
| [`vc_shortcode_output`](/devs/hooks/filters/vc_shortcode_output) | Filter the output of WPBakery elements that were defined using the WPBakeryShortCode class. |
| [`vc_shortcode_prepare_atts`](/devs/hooks/filters/vc_shortcode_prepare_atts) | Filters the prepared shortcode attributes after they have been processed and sanitized by WPBakery Page Builder. |
| [`vc_shortcode_set_template_shortcode`](/devs/hooks/filters/vc_shortcode_set_template_shortcode) | Filters the template file path for a specific shortcode. The dynamic portion of the hook name, `\{shortcode\}`, refers to  |
| [`vc_shortcodes_css_class`](/devs/hooks/filters/vc_shortcodes_css_class) | Example how you can alter class names that are outputted for built-in content elements and elements that follow up our c |
| [`vc_shortcodes_is_admin`](/devs/hooks/filters/vc_shortcodes_is_admin) | Filters the result of the admin check used by shortcode classes to determine whether the current request is an admin con |
| [`vc_shortcodes_type_css`](/devs/hooks/filters/vc_shortcodes_type_css) | Filters stored shortcodes CSS for a given asset type. The dynamic portion of the hook name, `\{type\}`, refers to the CSS  |
| [`vc_show_button_fe`](/devs/hooks/filters/vc_show_button_fe) | Filters whether the Frontend Editor button should be displayed for a given post. |
| [`vc_show_user_templates`](/devs/hooks/filters/vc_show_user_templates) | Filters whether the "My Templates" category is shown in the templates panel. |
| [`vc_single_param_edit`](/devs/hooks/filters/vc_single_param_edit) | Filters a single parameter configuration array before the edit form field is rendered in the shortcode settings panel. |
| [`vc_single_param_edit_holder_output`](/devs/hooks/filters/vc_single_param_edit_holder_output) | Filters the complete HTML output of a single parameter edit holder in the shortcode settings panel. |
| [`vc_site_attached_images_query_limit`](/devs/hooks/filters/vc_site_attached_images_query_limit) | Filters the query limit for retrieving site-attached images in the deprecated `vc_siteAttachedImages()` function. |
| [`vc_template_custom_code`](/devs/hooks/filters/vc_template_custom_code) | Filters the custom code data passed to the Custom Code panel UI template. |
| [`vc_templates_render_backend_template`](/devs/hooks/filters/vc_templates_render_backend_template) | Filters the rendered output of a backend template when it is loaded via AJAX in the templates panel. |
| [`vc_templates_render_backend_template_preview`](/devs/hooks/filters/vc_templates_render_backend_template_preview) | Filters the preview content of a backend template rendered in the templates panel preview area. |
| [`vc_templates_render_category`](/devs/hooks/filters/vc_templates_render_category) | Filters the rendered output for a template category tab in the templates panel. The returned array should include an `ou |
| [`vc_templates_render_frontend_template`](/devs/hooks/filters/vc_templates_render_frontend_template) | Filters the rendered output of a template when it is loaded via AJAX in the Frontend Editor. |
| [`vc_templates_render_template`](/devs/hooks/filters/vc_templates_render_template) | Filters the HTML output of a single template item within a template category list in the templates panel. |
| [`vc_third_party_modules_list`](/devs/hooks/filters/vc_third_party_modules_list) | Filters the list of third-party modules that should be registered with the WPBakery Page Builder module system. |
| [`vc_translate_column_width_class`](/devs/hooks/filters/vc_translate_column_width_class) | Filters the CSS class generated from a column width fraction (e.g., `1/2` becomes `vc_col-sm-6`). |
| [`vc_tta_accordion_general_classes`](/devs/hooks/filters/vc_tta_accordion_general_classes) | Filters the array of CSS classes applied to the accordion (TTA) element wrapper. |
| [`vc_tta_container_classes`](/devs/hooks/filters/vc_tta_container_classes) | Filters the array of CSS classes applied to the TTA (Tabs, Tours, Accordions) container element. |
| [`vc_tta_section_param_heading_tag`](/devs/hooks/filters/vc_tta_section_param_heading_tag) | Filters the HTML heading tag used for TTA section titles (e.g., accordion panel or tab heading). |
| [`vc_ui-pointers-screen_id`](/devs/hooks/filters/vc_ui-pointers-screen_id) | Filters UI pointers for a specific admin screen. The dynamic portion of the hook name, `\{screen_id\}`, refers to the Word |
| [`vc_user_access_check_shortcode_all`](/devs/hooks/filters/vc_user_access_check_shortcode_all) | Filters the access check result for shortcode operations. Returning a non-null value bypasses the default access logic a |
| [`vc_user_access_with_part_get_state`](/devs/hooks/filters/vc_user_access_with_part_get_state) | Filters the access state for a specific part for the current user. The dynamic portion of the hook name, `\{part\}`, refer |
| [`vc_vendor_layerslider_old`](/devs/hooks/filters/vc_vendor_layerslider_old) | Filters whether to use the old-style LayerSlider vendor integration that queries the database directly instead of using  |
| [`vc_vendor_qtranslate_enqueue_js_backend`](/devs/hooks/filters/vc_vendor_qtranslate_enqueue_js_backend) | Filters whether to enqueue the qTranslate backend JavaScript integration regardless of the current post type validity ch |
| [`vc_wp_text_widget_shortcode`](/devs/hooks/filters/vc_wp_text_widget_shortcode) | Filters the content of the WP Text Widget shortcode element before it is passed to the widget instance. |
| [`vc_wpb_getimagesize`](/devs/hooks/filters/vc_wpb_getimagesize) | Filters the image data returned by `wpb_getImageBySize()`, which includes a thumbnail HTML tag and the large image sourc |
| [`vc_wpbakery_shortcode_get_column_controls_modular_template`](/devs/hooks/filters/vc_wpbakery_shortcode_get_column_controls_modular_template) | Filters the template file path used for rendering modular column controls in the backend editor. |
| [`vc_wpbakery_shortcode_get_controls_list`](/devs/hooks/filters/vc_wpbakery_shortcode_get_controls_list) | Filters the list of control actions available for a shortcode element in the backend editor (e.g., edit, clone, copy, de |
| [`vc_wpbakeryshortcode_single_param_html_holder_value`](/devs/hooks/filters/vc_wpbakeryshortcode_single_param_html_holder_value) | Filters the parameter value used when rendering a single param HTML holder in the backend editor. This allows overriding |
| [`wpb_ai_content_type_list`](/devs/hooks/filters/wpb_ai_content_type_list) | Since 8.3 |
| [`wpb_ai_modal_type_dependency`](/devs/hooks/filters/wpb_ai_modal_type_dependency) | Filters the mapping between parameter types and their AI modal template paths. This allows adding or modifying which AI  |
| [`wpb_ai_number_of_symbols_list`](/devs/hooks/filters/wpb_ai_number_of_symbols_list) | Since 8.3 |
| [`wpb_ai_tone_of_voice_list`](/devs/hooks/filters/wpb_ai_tone_of_voice_list) | Since 8.3 |
| [`wpb_cta_text`](/devs/hooks/filters/wpb_cta_text) | Filters the call-to-action text HTML output in the CTA Button element. This allows modifying the heading markup and cont |
| [`wpb_custom_html_elements`](/devs/hooks/filters/wpb_custom_html_elements) | Filters the list of element shortcode tags that are considered to contain custom HTML. These elements receive special ha |
| [`wpb_disable_local_fonts`](/devs/hooks/filters/wpb_disable_local_fonts) | Filters whether to disable the local Google Fonts feature. When this filter returns `true`, Google Fonts will not be ser |
| [`wpb_download_all_google_fonts`](/devs/hooks/filters/wpb_download_all_google_fonts) | Filters whether to download all Google Fonts for local hosting instead of only the fonts used on the site. By default, o |
| [`wpb_enqueue_backend_editor_css`](/devs/hooks/filters/wpb_enqueue_backend_editor_css) | Filters the list of CSS stylesheet handles to enqueue in the backend editor. This allows adding or removing stylesheets  |
| [`wpb_enqueue_backend_editor_js`](/devs/hooks/filters/wpb_enqueue_backend_editor_js) | Filters the list of JavaScript handles to enqueue in the backend editor. This allows adding or removing scripts that are |
| [`wpb_enqueue_frontend_editor_css`](/devs/hooks/filters/wpb_enqueue_frontend_editor_css) | Filters the list of CSS stylesheet handles to enqueue in the frontend editor. This allows adding or removing stylesheets |
| [`wpb_get_ai_icon_template`](/devs/hooks/filters/wpb_get_ai_icon_template) | Filters the template path used to render the AI icon for a given field. This allows replacing the default AI icon templa |
| [`wpb_is_post_custom_layout_blank`](/devs/hooks/filters/wpb_is_post_custom_layout_blank) | Filters whether the current post uses a blank custom layout. This is used in the page settings tab to determine if the l |
| [`wpb_loop_query_build_args`](/devs/hooks/filters/wpb_loop_query_build_args) | Filters the WP_Query arguments built by the loop parameter type before the query is executed. This allows modifying quer |
| [`wpb_module_ai_element_param_types`](/devs/hooks/filters/wpb_module_ai_element_param_types) | Since 8.3 |
| [`wpb_module_ai_text_field_words`](/devs/hooks/filters/wpb_module_ai_text_field_words) | Since 8.3 |
| [`wpb_module_ai_type_response_route_lib`](/devs/hooks/filters/wpb_module_ai_type_response_route_lib) | Since 8.3 |
| [`wpb_navbar_getControlScreenSize`](/devs/hooks/filters/wpb_navbar_getControlScreenSize) | Filters the available screen sizes for the responsive preview control in the frontend editor navbar. This allows adding, |
| [`wpb_set_post_custom_meta`](/devs/hooks/filters/wpb_set_post_custom_meta) | Filters the custom meta values associated with a post in the editor. This allows injecting additional custom meta data t |
| [`wpb_shortcode_acf_display_when_empty_value`](/devs/hooks/filters/wpb_shortcode_acf_display_when_empty_value) | Filters whether the ACF (Advanced Custom Fields) shortcode element should render output when the field value is empty. B |
| [`wpb_toggle_heading`](/devs/hooks/filters/wpb_toggle_heading) | Filters the heading HTML output of the Toggle (FAQ) element. This allows modifying the toggle heading markup before it i |
| [`wpb_update_post_param_list`](/devs/hooks/filters/wpb_update_post_param_list) | Filters the list of post parameter names that WPBakery will update when saving a post from the editor. This allows addin |
| [`wpb_vc_js_status_filter`](/devs/hooks/filters/wpb_vc_js_status_filter) | Filters the WPBakery editor status for the current post. This determines whether the WPBakery editor is enabled or disab |
| [`wpb_widget_title`](/devs/hooks/filters/wpb_widget_title) | To output title for content elements WPBakery Page Builder is using `h2` tag, if you need to modify it, here is how it c |
