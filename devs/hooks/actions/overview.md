---
sidebar_position: 0
sidebar_label: Actions
hide_table_of_contents: true
slug: /hooks/actions
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
| [`vc-render-templates-preview-template`](/devs/hooks/actions/vc-render-templates-preview-template) | Fires during the template preview rendering process. This hook runs when a template preview page is being loaded, allowi |
| [`vc-settings-render-tab-tab`](/devs/hooks/actions/vc-settings-render-tab-tab) | Fires when a specific WPBakery settings tab is being rendered. The dynamic portion of the hook name, `\{tab\\}`, refers t |
| [`vc-vendor-acf-load`](/devs/hooks/actions/vc-vendor-acf-load) | Fires after the Advanced Custom Fields (ACF) vendor integration has been loaded and initialized. This hook runs at the e |
| [`vc_activation_hook`](/devs/hooks/actions/vc_activation_hook) | Fires during the WPBakery Page Builder plugin activation process. This hook allows you to run custom logic when the plug |
| [`vc_admin_inline_editor`](/devs/hooks/actions/vc_admin_inline_editor) | **Deprecated.** Use [`vc_frontend_editor_render`](/devs/hooks/actions/vc_frontend_editor_render) instead. |
| [`vc_after_init`](/devs/hooks/actions/vc_after_init) | Fires after WPBakery Page Builder has fully completed its initialization sequence. This hook runs at the very end of the |
| [`vc_after_init_autoload`](/devs/hooks/actions/vc_after_init_autoload) | Fires after the autoload manager has been initialized. This hook runs inside the `Vc_Manager::autoload()` method, after  |
| [`vc_after_init_automapper`](/devs/hooks/actions/vc_after_init_automapper) | Fires after the automapper component has been initialized. This hook runs inside the `Vc_Manager::automapper()` method,  |
| [`vc_after_init_base`](/devs/hooks/actions/vc_after_init_base) | Fires after the base class initialization is complete. This hook runs at the end of the `Vc_Base::init()` method, after  |
| [`vc_after_init_config`](/devs/hooks/actions/vc_after_init_config) | Fires after the configuration library has been initialized. This hook runs inside the `Vc_Manager::config()` method, aft |
| [`vc_after_init_license`](/devs/hooks/actions/vc_after_init_license) | Fires after the license manager has been initialized. This hook runs inside the `Vc_Manager::license()` method, after th |
| [`vc_after_init_modules`](/devs/hooks/actions/vc_after_init_modules) | Fires after the modules manager has been initialized. This hook runs inside the `Vc_Manager::modules()` method, after th |
| [`vc_after_init_settings`](/devs/hooks/actions/vc_after_init_settings) | Fires after the settings manager has been initialized. This hook runs inside the `Vc_Manager::settings()` method, after  |
| [`vc_after_init_updater`](/devs/hooks/actions/vc_after_init_updater) | Fires after the updater component has been initialized. This hook runs inside the `Vc_Manager::updater()` method, after  |
| [`vc_after_init_vc`](/devs/hooks/actions/vc_after_init_vc) | Fires after the main WPBakery Page Builder instance has been initialized. This hook runs inside the `Vc_Manager::vc()` m |
| [`vc_after_mapping`](/devs/hooks/actions/vc_after_mapping) | Fires after all default shortcodes have been mapped. This hook runs inside the `Vc_Manager::init()` method, after `Vc_Ma |
| [`vc_after_set_mode`](/devs/hooks/actions/vc_after_set_mode) | Fires after the WPBakery Page Builder editor mode has been determined and set. This hook runs inside the `Vc_Manager::in |
| [`vc_backend_editor_enqueue_js_css`](/devs/hooks/actions/vc_backend_editor_enqueue_js_css) | Fires after the backend editor has enqueued its JavaScript and CSS files. This hook runs at the end of the `Vc_Backend_E |
| [`vc_backend_editor_footer_render`](/devs/hooks/actions/vc_backend_editor_footer_render) | Fires after the backend editor footer has been rendered. This hook runs at the end of the `renderEditorFooter()` method  |
| [`vc_backend_editor_render`](/devs/hooks/actions/vc_backend_editor_render) | Fires after the backend editor has been rendered. This hook runs inside the `renderEditor()` method of both `Vc_Backend_ |
| [`vc_base_register_admin_css`](/devs/hooks/actions/vc_base_register_admin_css) | Fires during admin CSS registration. This hook runs inside the `Vc_Base::registerAdminCss()` method, allowing you to reg |
| [`vc_base_register_admin_js`](/devs/hooks/actions/vc_base_register_admin_js) | Fires during admin JavaScript registration. This hook runs inside the `Vc_Base::registerAdminJavascript()` method, allow |
| [`vc_base_register_front_css`](/devs/hooks/actions/vc_base_register_front_css) | Fires after front-end CSS styles have been registered. This hook runs at the end of the `Vc_Base::frontCss()` method, af |
| [`vc_base_register_front_js`](/devs/hooks/actions/vc_base_register_front_js) | Fires after front-end JavaScript libraries have been registered. This hook runs at the end of the `Vc_Base::frontJsRegis |
| [`vc_before_init`](/devs/hooks/actions/vc_before_init) | Fires at the very beginning of WPBakery Page Builder initialization. This hook runs as the first action inside the `Vc_M |
| [`vc_before_init_autoload`](/devs/hooks/actions/vc_before_init_autoload) | Fires before the autoload manager is initialized. This hook runs inside the `Vc_Manager::autoload()` method, before the  |
| [`vc_before_init_automapper`](/devs/hooks/actions/vc_before_init_automapper) | Fires before the automapper component is initialized. This hook runs inside the `Vc_Manager::automapper()` method, befor |
| [`vc_before_init_backend_editor`](/devs/hooks/actions/vc_before_init_backend_editor) | Fires before the backend editor component is initialized. Use this hook to run custom code or register dependencies befo |
| [`vc_before_init_base`](/devs/hooks/actions/vc_before_init_base) | Fires before the base class initialization begins. This hook runs at the start of the `Vc_Base::init()` method, before p |
| [`vc_before_init_config`](/devs/hooks/actions/vc_before_init_config) | Fires before the config component is initialized. This hook runs before the `Wpb_Config_Lib` class is instantiated, allo |
| [`vc_before_init_frontend_editor`](/devs/hooks/actions/vc_before_init_frontend_editor) | Fires before the frontend editor component is initialized. Use this hook to run custom code or register dependencies bef |
| [`vc_before_init_license`](/devs/hooks/actions/vc_before_init_license) | Fires before the license component is initialized. This hook runs before the `Vc_License` class is instantiated, allowin |
| [`vc_before_init_modules`](/devs/hooks/actions/vc_before_init_modules) | Fires before the modules component is initialized. This hook runs before the `Vc_Modules_Manager` class is instantiated, |
| [`vc_before_init_settings`](/devs/hooks/actions/vc_before_init_settings) | Fires before the settings component is initialized. This hook runs before the `Vc_Settings` class is instantiated, allow |
| [`vc_before_init_updater`](/devs/hooks/actions/vc_before_init_updater) | Fires before the updater component is initialized. This hook runs before the `Vc_Updater` and `Vc_Updating_Manager` clas |
| [`vc_before_init_vc`](/devs/hooks/actions/vc_before_init_vc) | Fires before the main VC instance is initialized. This hook runs before the `Vc_Base` class is instantiated and configur |
| [`vc_before_mapping`](/devs/hooks/actions/vc_before_mapping) | Fires before shortcode mapping begins. This is the recommended hook for registering custom elements with `vc_map()` or m |
| [`vc_build_admin_page`](/devs/hooks/actions/vc_build_admin_page) | Fires when building an admin page. This hook runs at the start of `Vc_Base::initAdmin()`, before the edit form, template |
| [`vc_build_page`](/devs/hooks/actions/vc_build_page) | Fires when building a frontend page. This hook runs at the start of `Vc_Base::initPage()`, before template redirect acti |
| [`vc_edit_form_fields_after_render`](/devs/hooks/actions/vc_edit_form_fields_after_render) | Fires after the element edit form fields are rendered. This hook runs after all parameter fields and their associated sc |
| [`vc_editor_footer`](/devs/hooks/actions/vc_editor_footer) | Fires when rendering the editor footer partial. This hook runs at the end of the editor footer template and receives the |
| [`vc_enqueue_font_icon_element`](/devs/hooks/actions/vc_enqueue_font_icon_element) | Hook for custom enqueue of icon font stylesheets. This action fires when the requested icon font library is not one of t |
| [`vc_front_load_page_action`](/devs/hooks/actions/vc_front_load_page_action) | Dynamic hook fired when loading a frontend editor page action. The hook name is constructed dynamically using the `actio |
| [`vc_frontend_editor_enqueue_js_css`](/devs/hooks/actions/vc_frontend_editor_enqueue_js_css) | Fires when enqueueing JavaScript and CSS for the frontend editor. This hook runs after the frontend editor's built-in JS |
| [`vc_frontend_editor_hook_load_edit`](/devs/hooks/actions/vc_frontend_editor_hook_load_edit) | Fires when the frontend editor loads an edit page. This hook runs during the `hookLoadEdit()` method after the `current_ |
| [`vc_frontend_editor_render`](/devs/hooks/actions/vc_frontend_editor_render) | Fires when the frontend editor is rendered. This hook runs during the frontend editor's render process, after the inline |
| [`vc_frontend_editor_render_template`](/devs/hooks/actions/vc_frontend_editor_render_template) | Fires when rendering a template in the frontend editor. This hook runs inside the frontend editor template file after th |
| [`vc_import_end`](/devs/hooks/actions/vc_import_end) | Fires at the end of a template import process. This hook runs after term counting and comment counting are re-enabled, s |
| [`vc_import_insert_post`](/devs/hooks/actions/vc_import_insert_post) | Fires after a post is inserted during a template import. This hook provides the new post ID, the original post ID from t |
| [`vc_import_post_exists`](/devs/hooks/actions/vc_import_post_exists) | Fires when an imported post has an invalid post type. Despite its name, this hook fires when the post type specified in  |
| [`vc_import_post_meta`](/devs/hooks/actions/vc_import_post_meta) | Fires when importing post meta during a template import. This hook runs after each post meta entry is added to the datab |
| [`vc_import_pre_end`](/devs/hooks/actions/vc_import_pre_end) | Fires just before the import process ends. This hook runs after parent backfilling, attachment URL backfilling, and feat |
| [`vc_import_start`](/devs/hooks/actions/vc_import_start) | Fires at the start of a template import process. This hook runs after the import data has been parsed and the base URL h |
| [`vc_inline_editor_page_view`](/devs/hooks/actions/vc_inline_editor_page_view) | Fires when the inline (frontend) editor page view is loaded. This hook runs during the frontend editor's `buildEditableP |
| [`vc_load_default_params`](/devs/hooks/actions/vc_load_default_params) | Fires after WPBakery registers its built-in parameter types (textfield, textarea, dropdown, etc.). Use this hook to regi |
| [`vc_load_default_templates_action`](/devs/hooks/actions/vc_load_default_templates_action) | Fires after the default templates have been loaded and the `vc_load_default_templates` filter has been applied. Use this |
| [`vc_load_iframe_jscss`](/devs/hooks/actions/vc_load_iframe_jscss) | Fires after the frontend editor enqueues its core JavaScript and CSS assets for the inline iframe. Use this hook to enqu |
| [`vc_load_shortcode`](/devs/hooks/actions/vc_load_shortcode) | Fires when the frontend editor loads shortcodes for rendering. Called both during initial page content parsing (with no  |
| [`vc_mapper_call_activities_before`](/devs/hooks/actions/vc_mapper_call_activities_before) | Fires before the mapper processes its queued activities (element mappings, parameter modifications, etc.). This hook run |
| [`vc_mapper_init_after`](/devs/hooks/actions/vc_mapper_init_after) | Fires after the WPBakery mapper has completed initialization, including loading parameter definitions, setting the init  |
| [`vc_mapper_init_before`](/devs/hooks/actions/vc_mapper_init_before) | Fires before the WPBakery mapper begins initialization. This hook runs at the very start of `Vc_Mapper::init()`, before  |
| [`vc_menu_page_build`](/devs/hooks/actions/vc_menu_page_build) | Fires after the main WPBakery Page Builder admin menu page has been registered. Use this hook to add submenu pages under |
| [`vc_network_menu_page_build`](/devs/hooks/actions/vc_network_menu_page_build) | Fires after the WPBakery Page Builder network admin menu page has been registered in a WordPress multisite environment.  |
| [`vc_page_settings_build`](/devs/hooks/actions/vc_page_settings_build) | Fires after the WPBakery settings page tabs have been built and their load callbacks registered. Use this hook to add cu |
| [`vc_page_settings_render_page`](/devs/hooks/actions/vc_page_settings_render_page) | Dynamic action that fires before a specific WPBakery settings page is rendered. The `\{page\}` portion of the hook name is |
| [`vc_plugins_loaded`](/devs/hooks/actions/vc_plugins_loaded) | Fires when WPBakery Page Builder has finished loading during the WordPress `plugins_loaded` hook. Use this hook to run c |
| [`vc_settings_set_sections`](/devs/hooks/actions/vc_settings_set_sections) | Fires after all settings sections and tabs have been configured. Receives the `Vc_Settings` instance so you can register |
| [`vc_settings_tab_tab`](/devs/hooks/actions/vc_settings_tab_tab) | Dynamic action that fires for each registered settings tab during section initialization. The `\{tab\}` portion of the hoo |
| [`vc_templates_delete_templates`](/devs/hooks/actions/vc_templates_delete_templates) | Fires when a template deletion is requested for a non-default template type. This hook allows third-party code to handle |
| [`vc_ui-template-preview`](/devs/hooks/actions/vc_ui-template-preview) | Fires during the template preview rendering in both the backend editor and the grid item editor. Use this hook to enqueu |
| [`vc_vc_grid_item_editor_render`](/devs/hooks/actions/vc_vc_grid_item_editor_render) | Fires when the WPBakery Grid Item editor is rendered. This hook runs after the backend editor render action within the g |
| [`vc_vendor_yoastseo_filter_results`](/devs/hooks/actions/vc_vendor_yoastseo_filter_results) | Fires before WPBakery content is parsed for Yoast SEO analysis. This hook runs just before shortcodes in the post conten |
| [`wpb_add_after_settings_form`](/devs/hooks/actions/wpb_add_after_settings_form) | Fires after the closing `</form>` tag on WPBakery settings pages. Use this hook to add custom HTML content or scripts af |
| [`wpb_add_before_closing_form_tag`](/devs/hooks/actions/wpb_add_before_closing_form_tag) | Fires just before the closing `</form>` tag on WPBakery settings pages. Use this hook to inject hidden fields, additiona |
| [`wpb_add_before_open_form_tag`](/devs/hooks/actions/wpb_add_before_open_form_tag) | Fires inside the opening `<form>` tag on WPBakery settings pages, after the `action` attribute but before the `method` a |
| [`wpb_add_before_settings_form`](/devs/hooks/actions/wpb_add_before_settings_form) | Fires before the opening `<form>` tag on WPBakery settings pages. Use this hook to output custom HTML content, notices,  |
| [`wpb_add_element_controls`](/devs/hooks/actions/wpb_add_element_controls) | Fires after the element edit form panel body and footer are rendered, just before the modal wrapper closes. Use this hoo |
| [`wpb_after_enqueue_element_google_fonts`](/devs/hooks/actions/wpb_after_enqueue_element_google_fonts) | Fires after a Google Font has been enqueued for a WPBakery element. Receives the font data array containing family, vend |
| [`wpb_after_register_backend_editor_css`](/devs/hooks/actions/wpb_after_register_backend_editor_css) | Fires after WPBakery registers its CSS stylesheets for the backend editor. Receives the `Vc_Backend_Editor` instance. Us |
| [`wpb_after_register_backend_editor_js`](/devs/hooks/actions/wpb_after_register_backend_editor_js) | Fires after WPBakery registers its JavaScript files for the backend editor. Receives the `Vc_Backend_Editor` instance. U |
| [`wpb_after_register_frontend_editor_css`](/devs/hooks/actions/wpb_after_register_frontend_editor_css) | Fires after WPBakery registers its CSS stylesheets for the frontend editor. Receives the `Vc_Frontend_Editor` instance.  |
| [`wpb_after_register_frontend_editor_js`](/devs/hooks/actions/wpb_after_register_frontend_editor_js) | Fires after WPBakery registers its JavaScript files for the frontend editor. Receives the `Vc_Frontend_Editor` instance. |
