---
sidebar_position: 1
---

# Introduction

TODO: Update structure of the docs.

WPBakery Page Builder (formerly Visual Composer) is a powerful drag-and-drop WordPress plugin that allows users to build complex layouts with ease.

While it provides a visual interface for users, developers can extend its functionality by registering custom elements, integrating custom controls, and tweaking rendering logic on both backend and frontend.

These developer docs are tailored to help you extend WPBakery in a modular, structured, and maintainable way. Whether you're creating a simple content block or building a complete suite of elements, this guide is built to support you.

## How to Start Development?
There are 6 steps to start developing elements for the WPBakery Page Builder plugin:

1. Follow the requirements ([see below](#requirements));
2. Download and [install](https://kb.wpbakery.com/docs/getting-started/plugin-installation/) WPBakery Page Builder plugin;
3. [Activate](https://kb.wpbakery.com/docs/getting-started/activation/) WPBakery Page Builder plugin;
4. Get familiar with the [Add-on Development Rules](https://kb.wpbakery.com/docs/add-ons/add-on-development-rules/);
5. Use [plugin boilerplate](https://github.com/wpbakery/vc-dev-example) to start developing your custom elements;
6. Follow this documentation to learn how to create custom elements, use the WPBakery Page Builder API, and understand the available hooks and filters.

## Requirements

To optimize your usage of the WPBakery Page Builder plugin, we kindly advise adhering to the following [system requirements](/docs/getting-started/environment-setup#requirements):

**Recommended Server Configuration:**

The WPBakery Page Builder relies on official [WordPress requirements](https://wordpress.org/about/requirements/).

* PHP Version: 7.4 or higher;
* MySQL version: 8.0 or higher or MariaDB 10.4 or higher;
* HTTPS support 

Required PHP extensions:

* Zip (read more [here](https://www.php.net/manual/en/book.zip.php));
* cURL (read more [here](https://www.php.net/manual/en/book.curl.php));
* Exif (read more [here](https://www.php.net/manual/en/book.exif.php));
* GD (read more [here](https://www.php.net/manual/en/book.image.php)).

The minimum memory limit is 256MB.

For installation, the `upload_max_filesize` should be greater than 7MB.

## Resources

* [WPBakery Page Builder Official Website](https://wpbakery.com/)
* [WPBakery Page Builder Knowledge Base](https://kb.wpbakery.com/)
* [WPBakery Page Builder Support](https://support.wpbakery.com/)
* [WPBakery Page Builder GitHub Page](https://github.com/wpbakery/)
