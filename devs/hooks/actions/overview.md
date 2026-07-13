---
sidebar_position: 0
sidebar_label: Actions
hide_table_of_contents: true
slug: /hooks/actions
className: hooks-overview
---

# Actions

Actions are WordPress hooks that allow you to execute custom code at specific points during WPBakery Page Builder's execution. Unlike filters, actions don't return a value — they allow you to add custom behavior.

```php
add_action('action_name', 'your_custom_function', 10, 2);

function your_custom_function($param1, $param2) {
    // Your custom code here
}
```

## All Actions

| Action | Description |
|--------|-------------|
| [`vc-render-templates-preview-template`](/devs/hooks/actions/vc-render-templates-preview-template) | Fires during the template preview rendering process. |
| [`vc-settings-render-tab-{tab}`](/devs/hooks/actions/vc-settings-render-tab-tab) | Fires when a specific WPBakery settings tab is being rendered. |
| [`vc-vendor-acf-load`](/devs/hooks/actions/vc-vendor-acf-load) | Fires after the Advanced Custom Fields (ACF) vendor integration has been loaded and initialized. |
| [`vc_activation_hook`](/devs/hooks/actions/vc_activation_hook) | Fires during the WPBakery Page Builder plugin activation process. |
| [`vc_after_init`](/devs/hooks/actions/vc_after_init) | Fires after WPBakery Page Builder has fully completed its initialization sequence. |
| [`vc_after_init_autoload`](/devs/hooks/actions/vc_after_init_autoload) | Fires after the autoload manager has been initialized. |
| [`vc_after_init_automapper`](/devs/hooks/actions/vc_after_init_automapper) | Fires after the automapper component has been initialized. |
| [`vc_after_init_base`](/devs/hooks/actions/vc_after_init_base) | Fires after the base class initialization is complete. |
| [`vc_after_init_config`](/devs/hooks/actions/vc_after_init_config) | Fires after the configuration library has been initialized. |
| [`vc_after_init_license`](/devs/hooks/actions/vc_after_init_license) | Fires after the license manager has been initialized. |
| [`vc_after_init_modules`](/devs/hooks/actions/vc_after_init_modules) | Fires after the modules manager has been initialized. |
| [`vc_after_init_settings`](/devs/hooks/actions/vc_after_init_settings) | Fires after the settings manager has been initialized. |
| [`vc_after_init_updater`](/devs/hooks/actions/vc_after_init_updater) | Fires after the updater component has been initialized. |
| [`vc_after_init_vc`](/devs/hooks/actions/vc_after_init_vc) | Fires after the main WPBakery Page Builder instance has been initialized. |
| [`vc_after_mapping`](/devs/hooks/actions/vc_after_mapping) | Fires after all default shortcodes have been mapped. |
| [`vc_after_set_mode`](/devs/hooks/actions/vc_after_set_mode) | Fires after the WPBakery Page Builder editor mode has been determined and set. |
| [`vc_backend_editor_enqueue_js_css`](/devs/hooks/actions/vc_backend_editor_enqueue_js_css) | Fires after the backend editor has enqueued its JavaScript and CSS files. |
| [`vc_backend_editor_footer_render`](/devs/hooks/actions/vc_backend_editor_footer_render) | Fires after the backend editor footer has been rendered. |
| [`vc_backend_editor_render`](/devs/hooks/actions/vc_backend_editor_render) | Fires after the backend editor has been rendered. |
| [`vc_base_register_admin_css`](/devs/hooks/actions/vc_base_register_admin_css) | Fires during admin CSS registration. |
| [`vc_base_register_admin_js`](/devs/hooks/actions/vc_base_register_admin_js) | Fires during admin JavaScript registration. |
| [`vc_base_register_front_css`](/devs/hooks/actions/vc_base_register_front_css) | Fires after front-end CSS styles have been registered. |
| [`vc_base_register_front_js`](/devs/hooks/actions/vc_base_register_front_js) | Fires after front-end JavaScript libraries have been registered. |
| [`vc_before_init`](/devs/hooks/actions/vc_before_init) | Fires at the very beginning of WPBakery Page Builder initialization. |
| [`vc_before_init_autoload`](/devs/hooks/actions/vc_before_init_autoload) | Fires before the autoload manager is initialized. |
| [`vc_before_init_automapper`](/devs/hooks/actions/vc_before_init_automapper) | Fires before the automapper component is initialized. |
| [`vc_before_init_backend_editor`](/devs/hooks/actions/vc_before_init_backend_editor) | Fires before the backend editor component is initialized. |
| [`vc_before_init_base`](/devs/hooks/actions/vc_before_init_base) | Fires before the base class initialization begins. |
| [`vc_before_init_config`](/devs/hooks/actions/vc_before_init_config) | Fires before the config component is initialized. |
| [`vc_before_init_frontend_editor`](/devs/hooks/actions/vc_before_init_frontend_editor) | Fires before the frontend editor component is initialized. |
| [`vc_before_init_license`](/devs/hooks/actions/vc_before_init_license) | Fires before the license component is initialized. |
| [`vc_before_init_modules`](/devs/hooks/actions/vc_before_init_modules) | Fires before the modules component is initialized. |
| [`vc_before_init_settings`](/devs/hooks/actions/vc_before_init_settings) | Fires before the settings component is initialized. |
| [`vc_before_init_updater`](/devs/hooks/actions/vc_before_init_updater) | Fires before the updater component is initialized. |
| [`vc_before_init_vc`](/devs/hooks/actions/vc_before_init_vc) | Fires before the main VC instance is initialized. |
| [`vc_before_mapping`](/devs/hooks/actions/vc_before_mapping) | Fires before shortcode mapping begins. |
| [`vc_build_admin_page`](/devs/hooks/actions/vc_build_admin_page) | Fires when building an admin page. |
| [`vc_build_page`](/devs/hooks/actions/vc_build_page) | Fires when building a frontend page. |
| [`vc_edit_form_fields_after_render`](/devs/hooks/actions/vc_edit_form_fields_after_render) | Fires after the element edit form fields are rendered. |
| [`vc_editor_footer`](/devs/hooks/actions/vc_editor_footer) | Fires when rendering the editor footer partial. |
| [`vc_enqueue_font_icon_element`](/devs/hooks/actions/vc_enqueue_font_icon_element) | Hook for custom enqueue of icon font stylesheets. |
| [`vc_front_load_page_{action}`](/devs/hooks/actions/vc_front_load_page_action) | Dynamic hook fired when loading a frontend editor page action. |
| [`vc_frontend_editor_enqueue_js_css`](/devs/hooks/actions/vc_frontend_editor_enqueue_js_css) | Fires when enqueueing JavaScript and CSS for the frontend editor. |
| [`vc_frontend_editor_hook_load_edit`](/devs/hooks/actions/vc_frontend_editor_hook_load_edit) | Fires when the frontend editor loads an edit page. |
| [`vc_frontend_editor_render`](/devs/hooks/actions/vc_frontend_editor_render) | Fires when the frontend editor is rendered. |
| [`vc_frontend_editor_render_template`](/devs/hooks/actions/vc_frontend_editor_render_template) | Fires when rendering a template in the frontend editor. |
| [`vc_import_end`](/devs/hooks/actions/vc_import_end) | Fires at the end of a template import process. |
| [`vc_import_insert_post`](/devs/hooks/actions/vc_import_insert_post) | Fires after a post is inserted during a template import. |
| [`vc_import_post_exists`](/devs/hooks/actions/vc_import_post_exists) | Fires when an imported post has an invalid post type. |
| [`vc_import_post_meta`](/devs/hooks/actions/vc_import_post_meta) | Fires when importing post meta during a template import. |
| [`vc_import_pre_end`](/devs/hooks/actions/vc_import_pre_end) | Fires just before the import process ends. |
| [`vc_import_start`](/devs/hooks/actions/vc_import_start) | Fires at the start of a template import process. |
| [`vc_inline_editor_page_view`](/devs/hooks/actions/vc_inline_editor_page_view) | Fires when the inline (frontend) editor page view is loaded. |
| [`vc_load_default_params`](/devs/hooks/actions/vc_load_default_params) | Fires after WPBakery registers its built-in parameter types (textfield, textarea, dropdown, etc.). |
| [`vc_load_default_templates_action`](/devs/hooks/actions/vc_load_default_templates_action) | Fires after the default templates have been loaded and the `vc_load_default_templates` filter has been applied. |
| [`vc_load_iframe_jscss`](/devs/hooks/actions/vc_load_iframe_jscss) | Fires after the frontend editor enqueues its core JavaScript and CSS assets for the inline iframe. |
| [`vc_load_shortcode`](/devs/hooks/actions/vc_load_shortcode) | Fires when the frontend editor loads shortcodes for rendering. |
| [`vc_mapper_call_activities_before`](/devs/hooks/actions/vc_mapper_call_activities_before) | Fires before the mapper processes its queued activities (element mappings, parameter modifications, etc.). |
| [`vc_mapper_init_after`](/devs/hooks/actions/vc_mapper_init_after) | Fires after the WPBakery mapper has completed initialization, including loading parameter definitions, setting the init flag, loading the lean map... |
| [`vc_mapper_init_before`](/devs/hooks/actions/vc_mapper_init_before) | Fires before the WPBakery mapper begins initialization. |
| [`vc_menu_page_build`](/devs/hooks/actions/vc_menu_page_build) | Fires after the main WPBakery Page Builder admin menu page has been registered. |
| [`vc_network_menu_page_build`](/devs/hooks/actions/vc_network_menu_page_build) | Fires after the WPBakery Page Builder network admin menu page has been registered in a WordPress multisite environment. |
| [`vc_page_settings_build`](/devs/hooks/actions/vc_page_settings_build) | Fires after the WPBakery settings page tabs have been built and their load callbacks registered. |
| [`vc_page_settings_render-{page}`](/devs/hooks/actions/vc_page_settings_render_page) | Dynamic action that fires before a specific WPBakery settings page is rendered. |
| [`vc_plugins_loaded`](/devs/hooks/actions/vc_plugins_loaded) | Fires when WPBakery Page Builder has finished loading during the WordPress `plugins_loaded` hook. |
| [`vc_settings_set_sections`](/devs/hooks/actions/vc_settings_set_sections) | Fires after all settings sections and tabs have been configured. |
| [`vc_settings_tab-{tab}`](/devs/hooks/actions/vc_settings_tab_tab) | Dynamic action that fires for each registered settings tab during section initialization. |
| [`vc_templates_delete_templates`](/devs/hooks/actions/vc_templates_delete_templates) | Fires when a template deletion is requested for a non-default template type. |
| [`vc_ui-template-preview`](/devs/hooks/actions/vc_ui-template-preview) | Fires during the template preview rendering in both the backend editor and the grid item editor. |
| [`vc_vc_grid_item_editor_render`](/devs/hooks/actions/vc_vc_grid_item_editor_render) | Fires when the WPBakery Grid Item editor is rendered. |
| [`vc_vendor_yoastseo_filter_results`](/devs/hooks/actions/vc_vendor_yoastseo_filter_results) | Fires before WPBakery content is parsed for Yoast SEO analysis. |
| [`wpb_add_after_settings_form`](/devs/hooks/actions/wpb_add_after_settings_form) | Fires after the closing `</form>` tag on WPBakery settings pages. |
| [`wpb_add_before_closing_form_tag`](/devs/hooks/actions/wpb_add_before_closing_form_tag) | Fires just before the closing `</form>` tag on WPBakery settings pages. |
| [`wpb_add_before_open_form_tag`](/devs/hooks/actions/wpb_add_before_open_form_tag) | Fires inside the opening `<form>` tag on WPBakery settings pages, after the `action` attribute but before the `method` attribute. |
| [`wpb_add_before_settings_form`](/devs/hooks/actions/wpb_add_before_settings_form) | Fires before the opening `<form>` tag on WPBakery settings pages. |
| [`wpb_add_element_controls`](/devs/hooks/actions/wpb_add_element_controls) | Fires after the element edit form panel body and footer are rendered, just before the modal wrapper closes. |
| [`wpb_after_enqueue_element_google_fonts`](/devs/hooks/actions/wpb_after_enqueue_element_google_fonts) | Fires after a Google Font has been enqueued for a WPBakery element. |
| [`wpb_after_register_backend_editor_css`](/devs/hooks/actions/wpb_after_register_backend_editor_css) | Fires after WPBakery registers its CSS stylesheets for the backend editor. |
| [`wpb_after_register_backend_editor_js`](/devs/hooks/actions/wpb_after_register_backend_editor_js) | Fires after WPBakery registers its JavaScript files for the backend editor. |
| [`wpb_after_register_frontend_editor_css`](/devs/hooks/actions/wpb_after_register_frontend_editor_css) | Fires after WPBakery registers its CSS stylesheets for the frontend editor. |
| [`wpb_after_register_frontend_editor_js`](/devs/hooks/actions/wpb_after_register_frontend_editor_js) | Fires after WPBakery registers its JavaScript files for the frontend editor. |
