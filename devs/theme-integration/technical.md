---
sidebar_position: 2
---

# Theme Integration Technical

If you are theme author you may want to integrate [WPBakery Page Builder](https://wpbakery.com/) right into your WordPress theme.

To meet new [theme submission requirements](https://help.market.envato.com/hc/en-us/articles/202822450-WordPress-Theme-Submission-Requirements) follow these steps:

1. Include TGM Activation class into your theme PHP files (ex. in functions.php file)
2. Add settings for TGM Activation class and hook them to the `tgmpa_register` action
3. Call [`vc_set_as_theme()`](/devs/inner-api/vc_set_as_theme) function to initialize WPBakery Page Builder as a part of your theme

```php
<?php
/**
 * Include the TGM_Plugin_Activation class.
 */
require_once dirname( __FILE__ ) . '/class-tgm-plugin-activation.php';

add_action( 'tgmpa_register', 'my_theme_register_js_composer_plugins' );

/**
 * Register the required plugins for this theme.
 *
 * The variable passed to tgmpa_register_plugins() should be an array of plugin
 * arrays.
 *
 * This function is hooked into tgmpa_init, which is fired within the
 * TGM_Plugin_Activation class constructor.
 */
function my_theme_register_js_composer_plugins() {
    /**
     * Array of plugin arrays. Required keys are name and slug.
     * If the source is NOT from the .org repo, then source is also required.
     */
    $plugins = [
        // This is an example of how to include a plugin pre-packaged with a theme
        [
            'name'               => 'WPBakery Visual Composer', // The plugin name
            'slug'               => 'js_composer', // The plugin slug (typically the folder name)
            'source'             => get_stylesheet_directory() . '/js_composer.zip', // The plugin source
            'required'           => true, // If false, the plugin is only 'recommended' instead of required
            'version'            => '3.7', // E.g. 1.0.0. If set, the active plugin must be this version or higher
            'force_activation'   => false, // If true, plugin is activated upon theme activation
            'force_deactivation' => false, // If true, plugin is deactivated upon theme switch
            'external_url'       => '', // If set, overrides default API URL and points to an external URL
        ]
    ];

    // Change this to your theme text domain, used for internationalising strings
    $theme_text_domain = 'tgmpa';

    /**
     * Array of configuration settings. Amend each line as needed.
     */
    $config = [
        'domain'            => $theme_text_domain,
        'default_path'      => '',
        'parent_menu_slug'  => 'themes.php',
        'parent_url_slug'   => 'themes.php',
        'menu'              => 'install-required-plugins',
        'has_notices'       => true,
        'is_automatic'      => false,
        'message'           => '',
        'strings'           => [
            'page_title'                      => __( 'Install Required Plugins', $theme_text_domain ),
            'menu_title'                      => __( 'Install Plugins', $theme_text_domain ),
            'installing'                      => __( 'Installing Plugin: %s', $theme_text_domain ),
            'oops'                            => __( 'Something went wrong with the plugin API.', $theme_text_domain ),
            'notice_can_install_required'     => _n_noop( 'This theme requires the following plugin: %1$s.', 'This theme requires the following plugins: %1$s.' ),
            'notice_can_install_recommended'  => _n_noop( 'This theme recommends the following plugin: %1$s.', 'This theme recommends the following plugins: %1$s.' ),
            'notice_cannot_install'           => _n_noop( 'Sorry, but you do not have the correct permissions to install the %s plugin. Contact the administrator of this site for help on getting the plugin installed.', 'Sorry, but you do not have the correct permissions to install the %s plugins. Contact the administrator of this site for help on getting the plugins installed.' ),
            'notice_can_activate_required'    => _n_noop( 'The following required plugin is currently inactive: %1$s.', 'The following required plugins are currently inactive: %1$s.' ),
            'notice_can_activate_recommended' => _n_noop( 'The following recommended plugin is currently inactive: %1$s.', 'The following recommended plugins are currently inactive: %1$s.' ),
            'notice_cannot_activate'          => _n_noop( 'Sorry, but you do not have the correct permissions to activate the %s plugin. Contact the administrator of this site for help on getting the plugin activated.', 'Sorry, but you do not have the correct permissions to activate the %s plugins. Contact the administrator of this site for help on getting the plugins activated.' ),
            'notice_ask_to_update'            => _n_noop( 'The following plugin needs to be updated to its latest version to ensure maximum compatibility with this theme: %1$s.', 'The following plugins need to be updated to their latest version to ensure maximum compatibility with this theme: %1$s.' ),
            'notice_cannot_update'            => _n_noop( 'Sorry, but you do not have the correct permissions to update the %s plugin. Contact the administrator of this site for help on getting the plugin updated.', 'Sorry, but you do not have the correct permissions to update the %s plugins. Contact the administrator of this site for help on getting the plugins updated.' ),
            'install_link'                    => _n_noop( 'Begin installing plugin', 'Begin installing plugins' ),
            'activate_link'                   => _n_noop( 'Activate installed plugin', 'Activate installed plugins' ),
            'return'                          => __( 'Return to Required Plugins Installer', $theme_text_domain ),
            'plugin_activated'                => __( 'Plugin activated successfully.', $theme_text_domain ),
            'complete'                        => __( 'All plugins installed and activated successfully. %s', $theme_text_domain ),
            'nag_type'                        => 'updated' // Determines admin notice type - can only be 'updated' or 'error'
        ]
    ];

    tgmpa( $plugins, $config );
}

/**
 * Force Visual Composer to initialize as "built into the theme".
 * This will hide certain tabs under the Settings->Visual Composer page
 */
add_action( 'vc_before_init', 'your_prefix_vcSetAsTheme' );
function your_prefix_vcSetAsTheme() {
    vc_set_as_theme();
}
?>
```

That's it!

You can check results in **Pages → Add new**. If you completed all steps correctly, you should see blue WPBakery Page Builder button there now.
