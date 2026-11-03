---
id: can-i-copy-design-options-between-elements-in-wpbakery
sidebar_position: 45
hide_table_of_contents: true
slug: /faq/can-i-copy-design-options-between-elements-in-wpbakery
title: Can I Copy Design Options in WPBakery?
description: Learn how to copy and paste Design Options between elements and pages in WPBakery 9.1, including supported settings and limitations.
keywords:
  - WPBakery copy design options
---

# Can I copy Design Options from one element to another in WPBakery?

Starting with WPBakery 9.1, you can use the **Copy Design Options** feature to copy styling settings from one element and apply them to another. This helps you maintain consistent spacing, borders, backgrounds, colors, and other design settings without entering the same values repeatedly.

### How to copy and paste Design Options

![Copy Design Options menu in the Design Options tab](/img/screenshots/copy-design-options.webp)

1. Open the element you want to copy the styling from.
2. Go to the **Design Options** tab.
3. Open the menu (≡) at the top and select **Copy**.
4. Open the element where you want to apply the styling.
5. Go to its **Design Options** tab, open the same menu, and select **Paste**.

The copied settings will be applied to the selected element.

You can also copy and paste Design Options **between different pages**, making it easier to reuse existing styles across your website.

### What settings can I copy?

The feature copies supported values from the Design Options tab, including spacing, borders, backgrounds, colors, and other available styling settings.

It only copies Design Options settings, not all attributes or content of the element.

### Can I copy custom Design Options added by third-party developers?

Custom attributes added to Design Options by third-party themes or plugins are not copied automatically.

Developers can add support for their custom attributes using a dedicated hook. For instructions, see [How to add copy/paste to a third-party element](https://kb.wpbakery.com/devs/developer-tutorials/add-copy-paste-to-third-party-element) in the WPBakery Developer Knowledge Base.

### Can I copy Design Options between different websites?

Copying Design Options between different websites is currently being investigated. For now, the feature supports copying between elements on the same page or across different pages within a website.
