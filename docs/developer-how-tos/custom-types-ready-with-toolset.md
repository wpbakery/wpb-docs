---
id: custom-types-ready-with-toolset
title: Custom Types Ready with Toolset
sidebar_label: Custom Types Ready with Toolset
sidebar_position: 3
hide_table_of_contents: true
slug: /developers-how-tos/custom-types-ready-with-toolset
---

# Custom Types Ready with Toolset

WPBakery Page Builder is fully custom types ready by ensuring compatibility with Toolset. This allows you to build sites based on custom post types. This document will explain to you how to build custom types based solutions by using travel site example.

## 1. Add custom post types, fields and taxonomies to your site

You need to build a worldwide travel destination site with sights and activities. In order to create the custom content, WordPress default pages and posts will not be enough: you need custom post types.

We also add a custom taxonomy for tour types, and some custom fields for the price, duration, and other information.

| | |
|---|---|
| **Custom Post Types**<br />Tours | ![CPTs Tours](https://kb.wpbakery.com/wp-content/uploads/2018/01/CPTs-Tours.png) |
| **Custom Taxonomies**<br />Tour types: Family Friendly, | ![Custom Taxonomies](https://kb.wpbakery.com/wp-content/uploads/2018/01/Custom-Taxonomies.png) |
| **Custom Fields**<br />Price, duration, gallery, description of the tour, highlights, special offer etc. | ![Custom Fields](https://kb.wpbakery.com/wp-content/uploads/2018/01/Custom-Fields.png) |

## 2. Build templates for custom post types

To display custom post types on the front-end you need to create a content template.

Integrated with Toolset, you can use the WPBakery Page Builder to design one template for all "Tours". Insert the custom fields you just created, display them on your page. This includes the price, type of tour, city, gallery, description of the tour and any other fields.

![Toolset shortcode](https://kb.wpbakery.com/wp-content/uploads/2018/01/Toolset-shortcode.png)

This is how template for Tours looks like in the end.

![CPT Template](https://kb.wpbakery.com/wp-content/uploads/2018/01/CPT-Template-1.png)

We have built one single template and all your custom post types will have the same design, with their own information.

## 3. Create advanced content

- Create list of custom post types and design each post entry with the WPBakery Page Builder;
- Build advanced search with custom filters and display results on a map;
- Create a front-end submission form and insert it in a page;

![Google Maps Search](https://kb.wpbakery.com/wp-content/uploads/2018/01/Google-Maps-Search.png)

Toolset lets you build custom searches for any custom post type, this includes inputs by custom fields, taxonomy, relationship and text searches. A good custom search allows visitors to find exactly what they need. You can easily style the search and the map according to the theme you are using.

## For theme authors

If your theme is using the 5.4 version of WPBakery Page Builder, then the integration with Toolset will work seamlessly.

Toolset team is happy to develop a tighter integration including your theme options when users create templates. Toolset will also make sure that your shortcodes will work with their custom fields.

Get in touch with Toolset team and join their "Beyond Pages" compatibility program.

For a detailed tutorial, visit Toolset knowledge base article on how to use WPBakery Page Builder and Toolset.
