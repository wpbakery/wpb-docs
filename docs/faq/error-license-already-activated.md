---
id: error-license-already-activated
sidebar_position: 44
hide_table_of_contents: true
slug: /faq/how-to-fix-wpbakery-license-error-the-license-is-already-activated
---

# How to fix “WPBakery License Error: The license is already activated”

If you see an error like this in your WordPress admin dashboard area:

> "WPBakery License Error: The license is already activated on https://example.com, but this request came from https://example.net ..."

it can mean that our license checker found that the license is already active on another site, such as a staging website. If you activated the license on staging first, deactivate it there before activating it on the live website.

But if your server has multiple domains pointing to the same WordPress installation, like:

```text
example.com ─┐
example.de  ─┼──> /var/www/example
example.fr  ─┘
```

In such cases, your license can be deactivated when a request is sent from a domain that is not the main one, so you should specify your main domain in `wp-config.php` with the constant:

```php
define( 'WP_SITEURL', 'example.com' );
```

Please note that you need to add this constant near the top of the file, because if you add it at the bottom, the plugin may not see it. For example, a good place for it is after the constant blocks that WordPress defines in `wp-config.php`:

```php
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'wordpress' );

/** Database password */
define( 'DB_PASSWORD', 'wordpress' );

/** Database hostname */
define( 'DB_HOST', 'mysql' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );
```

Also please note that you should specify your main site URL in the constant.

After that, activate your license with your main site again, and it should not be deactivated by our checker anymore.
