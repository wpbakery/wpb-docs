---
sidebar_position: 2
---

# Environment Setup
Before developing custom elements or extending WPBakery Page Builder, you need a properly configured development environment. This ensures that you can build, test, and debug your components efficiently and safely.

## Requirements

|Tool| Description                                                                                                                                                                                                   |
|---|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|WordPress| Version 5.0+ is recommended. WPBakery is compatible with most modern WordPress setups.                                                                                                                        |
|WPBakery Page Builder| Ensure the plugin is installed and activated. It may come bundled with your theme or be installed as a standalone plugin.                                                                                     |
|Theme or Plugin| Custom elements are best added via a child theme or a custom plugin. Avoid editing core files.                                                                                                                |
|PHP| Minimum PHP 7.4 is recommended.                                                                                                                                                                               |
|MySQL| 8.0 or higher or MariaDB 10.4 or higher.                                                                                                                                                                               |
|Code Editor| Use a modern editor like [VS Code](https://code.visualstudio.com/) or [PhpStorm](https://www.jetbrains.com/phpstorm/) for syntax highlighting and productivity.                                               |
|Browser| Chrome, Firefox, or any browser with good DevTools support.                                                                                                                                                   |
|(Optional) Local Dev Environment| Tools like [LocalWP](https://localwp.com/), [XAMPP](https://www.apachefriends.org/), [Laragon](https://laragon.org/), or [DevKinsta](https://kinsta.com/devkinsta/) help isolate and manage projects locally. |

## Installing WPBakery Page Builder
If WPBakery is **bundled with a theme** (common in ThemeForest themes), it's often located inside the theme's `/plugins/` folder and installed via the theme setup wizard.

If you **purchased it separately**, you can upload it like any other plugin:

* Go to **Plugins → Add New → Upload Plugin**
* Upload the `js_composer.zip` file
* Click **Install Now** and then **Activate**

Once active, you'll see **WPBakery Page Builder** in the admin menu and its editor inside Pages, Posts, or Custom Post Types (based on your settings).

## Choose How to Extend WPBakery
You can extend WPBakery using either of the following:

### Option A: Create a Custom Plugin
Ideal for reusable, portable element libraries or plugin-based projects.

```bash
/wp-content/plugins/my-wpbakery-extension/
```
Structure it with a `my-wpbakery-extension.php` file and load your elements via `vc_before_init`.

:::tip Kickstart with the Official Boilerplate
Use the [WPBakery Dev Example](https://github.com/wpbakery/dev-example) plugin as a starting point. It includes working examples of custom elements covering common patterns like basic elements, custom PHP classes, and nested shortcodes.
:::

### Option B: Add Code to a Child Theme
Use this method when extending WPBakery as part of a theme project.

```bash
/wp-content/themes/your-child-theme/functions.php
```
Ensure custom element files are required from a maintainable location like `includes/vc-elements/`.

## Testing Tips
Enable WP_DEBUG in wp-config.php:

```php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', true);
```


Use the WPBakery Backend Editor for structured testing and the Frontend Editor to test rendering and UX.

## Common Pitfalls to Avoid

* **Never edit WPBakery core files** — your changes will be overwritten during updates.
* Don't directly enqueue styles/scripts inside your element file without checking the context (`is_admin()`).
* Avoid outputting raw attributes — always sanitize them using `esc_attr()`, `esc_html()`, or `wp_kses()`.
