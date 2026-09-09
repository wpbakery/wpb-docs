---
id: grid-builder
title: Grid builder
sidebar_label: Grid builder
sidebar_position: 17
---

***Since 4.4***

Starting from version 4.4 WPBakery Page Builder comes together with Grid Builder which allows to create and modify grid element templates for Post Grid, Masonry Post Grid, Media Grid and Masonry Media Grid. Grid Builder can be accessed via WordPress admin "Grid Elements".

## Interface

### Top Menu Bar

WPBakery Page Builder Grid Builder has a native WPBakery Page Builder interface with top main menu bar which consists of following controls:

- **Grid template block** – allows to choose one of predefined grid element templates as a starting point for creating new grid element. **Note:** choosing template will overwrite created layout.
- **Grid Element Settings** – Design Options – standard WPBakery Page Builder Design Options module which affects all grid element.
- **Animation Presets *(dropdown)*** – by default set to "Single block" which means there is no "Hover" state for your grid element. Selecting animation preset adds "Hover" tab, next to "Normal" tab in Grid Builder layout.
- **Preview and Save options**.

![Grid Builder Top Menu](/img/screenshots/image2015-1-19-16_12_45.png)

### Builder Layout and Zones

Grid Builder has a WPBakery Page Builder Backend style layout with defined blocks:

- **"Normal" zone** – main part to operate with. This zone consists of 3 (three) rows which can be divided into several columns.
- **"Hover" zone** – similar to "Normal" zone, but defines layout on "Hover" state. **Note:** this zone is visible only if "Animation preset" is selected different from "Single block". Depending on animation chosen "Hover" zone may appear on top of "Normal", replace "Normal" or partly replace "Normal" zone.
- **"Additional" zone** – places for additional zone are located around "Normal" and "Hover" zones. **Note:** "Additional" zone can not be animated with "Animation Presets" and only one "Additional" zone can be added at the time.

![Grid Builder Layout](/img/screenshots/image2015-1-19-16_21_44.png)

## Settings

WPBakery Page Builder Grid Builder has styling options and settings for following elements:

- Grid Element Settings;
- "Normal" and "Hover" zone settings;
- Column settings;
- Content elements.

### Grid Element Settings

| Param name | Description |
|------------|-------------|
| Design Options | Control borders, background and other styling options |

### "Normal" and "Hover" Zone Settings

| Param name | Description |
|------------|-------------|
| Height mode | Sizing proportions for height and width.<br/>**Note:** Select "Original" to scale image without cropping (Example: for masonry style grid). |
| Add link | Select link option (Values: Post link, Large image, Large image (prettyPhoto), Custom)<br/>**Note:** Additional option "Woo Commerce Add to Cart" if Woo Commerce plugin is active |
| Use featured image on background? | Featured image overwrites background image and color from "Design options". |
| Image size | Enter image size (Example: "thumbnail", "medium", "large", "full" or other sizes defined by theme). Alternatively enter size in pixels (Example: 200×100 (Width x Height)). |
| Extra class name | If you wish to style particular content element differently, then use this field to add a class name and then refer to it in your css file. |
| Design Options | Control borders, background and other styling options. |

### Column Settings

| Param name | Description |
|------------|-------------|
| Width | Select column width. |
| Use featured image on background? | Featured image overwrites background image and color from "Design options". |
| Image size | Enter image size (Example: "thumbnail", "medium", "large", "full" or other sizes defined by theme). Alternatively enter size in pixels (Example: 200×100 (Width x Height)). |
| Extra class name | If you wish to style particular content element differently, then use this field to add a class name and then refer to it in your css file. |
| Design Options | Control borders, background and other styling options. |

## Content Elements

Grid Builder offers content elements which can be used to build and style your grid element template.

### Text Block

| | |
|-|-|
| ![Text Block](/img/elements/text-1.png) | "Text block" allows you to insert paragraph type text and format it using WYSIWYG editor. Moreover text block allows adding media(images and videos). |

| Param name | Description |
|------------|-------------|
| Text | WYSIWYG editor for inserting content. |
| CSS Animation | Select type of animation if you want this element to be animated when it enters into the browsers viewport. Note: Works only in modern browsers. |
| Extra class name | Add class name in order to refer to this element in CSS. |
| Design Options | Control borders, background and other styling options. |

### Separator

| | |
|-|-|
| ![Separator](/img/elements/separator.png) | "Separator" add separator line to your page. |

| Param name | Description |
|------------|-------------|
| Color | Separator color. |
| Separator alignment | Select separator alignment. |
| Style | Separator style. |
| Border width | Border width in pixels. |
| Element width | Separator element width in percents. |
| Extra class name | If you wish to style particular content element differently, then use this field to add a class name and then refer to it in your css file. |
| Design Options | Control borders, background and other styling options |

### Separator with Text

| | |
|-|-|
| ![Separator with Text](/img/elements/separator_text.png) | "Separator with Text" add separator line to your page together with text which can be positioned in the centre, left or right sides of line. |

| Param name | Description |
|------------|-------------|
| Title | Separator title. |
| Title position | Select title location. |
| Color | Separator color. |
| Separator alignment | Select separator alignment. |
| Style | Separator style. |
| Border width | Border width in pixels. |
| Element width | Separator element width in percents. |
| Extra class name | If you wish to style particular content element differently, then use this field to add a class name and then refer to it in your css file. |
| Design Options | Control borders, background and other styling options |

### Icon

| | |
|-|-|
| ![Icon](/img/elements/icon_icon.png) | With WPBakery Page Builder you can easily add icons from following libraries:<br/>- Font Awesome<br/>- Open icons<br/>- Typicons<br/>- Entypo<br/>- Linecons<br/>- Mono Social<br/>- Material |

| Param name | Description |
|------------|-------------|
| Add link | Select link option.<br/>**Note:** Additional option "Woo Commerce Add to Cart" if Woo Commerce plugin is active |
| Icon library | Select icon library. |
| Icon | Select icon from library. |
| Color | Icon color. |
| Background shape | Background shape for icon. |
| Background color | Select color for background shape.<br/>**Note:** Select custom color to enable color picker |
| Size | Icon size. |
| Icon alignment | Select icon alignment. |
| URL (Link) | Add link to icon. |
| CSS Animation | Select type of animation if you want this element to be animated when it enters into the browsers viewport. Note: Works only in modern browsers. |
| Extra class name | If you wish to style particular content element differently, then use this field to add a class name and then refer to it in your css file. |
| Design Options | Control borders, background and other styling options |

### Single Image

| | |
|-|-|
| ![Single Image](/img/elements/single_image.png) | Add simple image to your layout and style it. Add CSS animation or apply Design Options. |

| Param name | Description |
|------------|-------------|
| Add link | Select link option.<br/>**Note:** Additional option "Woo Commerce Add to Cart" if Woo Commerce plugin is active |
| Widget title | Enter text which will be used as widget title. Leave blank if no title is needed. |
| Image source | Image source from Media Library (default) or External link |
| Image | Select image from media library |
| External link | Enter external link to image.<br/>**Note:** available if "External link" is chosen from "Image source" |
| CSS Animation | Select type of animation if you want this element to be animated when it enters into the browsers viewport. Note: Works only in modern browsers. |
| Image size | Enter image size. Example: "thumbnail", "medium", "large", "full" or other sizes defined by current theme. Alternatively enter image size in pixels: 200×100 (Width x Height). Leave empty to use "thumbnail" size. |
| Image alignment | Select image alignment. |
| Image style | Select display style. |
| Extra class name | If you wish to style particular content element differently, then use this field to add a class name and then refer to it in your css file. |
| Design Options | Control borders, background and other styling options |

### Button

| | |
|-|-|
| ![Button](/img/elements/button.png) | Add button with multiple color and styling options. |

| Param name | Description |
|------------|-------------|
| Add link | Select link option.<br/>**Note:** Additional option "Woo Commerce Add to Cart" if Woo Commerce plugin is active |
| Text | Text which will appear on the button |
| Style | Select button display style |
| Shape | Select button shape |
| Color | Select color of the button<br/>**Note:** Available if "Style" is not "Custom" |
| Background color | Select color for background of the button with color picker<br/>**Note:** Available if "Style" is set to "Custom" |
| Text color | Select color for text on the button with color picker<br/>**Note:** Available if "Style" is set to "Custom" |
| Size | Select button display size |
| Alignment | Select button alignment |
| Set full width button? | Set button to full width within column<br/>**Note:** Available if "Alignment" is not "Inline" |
| Add icon? | Add icon to button from icon library. Control alignment of icon |
| CSS Animation | Add animation to your element |
| Extra class name | Add class name in order to refer to this element in CSS |
| Design Options | Control borders, background and other styling options |

### Custom Heading

| | |
|-|-|
| ![Custom Heading](/img/elements/custom_heading.png) | Create custom heading with Google Fonts, choose one of predefined fonts and apply styling.<br/><br/>**Important:** If you are using non-latin characters be sure to activate them under Settings/WPBakery Page Builder/General Settings. |

| Param name | Description |
|------------|-------------|
| Add link | Select link option.<br/>**Note:** Additional option "Woo Commerce Add to Cart" if Woo Commerce plugin is active |
| Text | If you are using non-latin characters be sure to activate them under Settings/WPBakery Page Builder/General Settings. |
| Element tag | Select element tag. |
| Text align | Select text alignment. |
| Font size | Enter font size. |
| Line height | Enter line height. |
| Text color | Select color for your element. |
| Use theme default font family | Use font family from the theme. |
| Font Family | Select font family. |
| Font style | Select font styling. |
| Extra class name | If you wish to style particular content element differently, then use this field to add a class name and then refer to it in your css file. |
| Design Options | Control borders, background and other styling options. |

### Empty Space

| | |
|-|-|
| ![Empty Space](/img/elements/empty_space.png) | Insert empty space between elements with custom height. |

| Param name | Description |
|------------|-------------|
| Height | Enter empty space height. |
| Extra class name | If you wish to style particular content element differently, then use this field to add a class name and then refer to it in your css file. |
| Design Options | Control borders, background and other styling options |

### Post Title

| | |
|-|-|
| ![Post Title](/img/elements/post_title_ico.png) | Post title element adds title of post, page or custom post types. In case of media grid it will add media title. |

| Param name | Description |
|------------|-------------|
| Add link | Select link option.<br/>**Note:** Additional option "Woo Commerce Add to Cart" if Woo Commerce plugin is active |
| Element tag | Select element tag. |
| Text align | Select text alignment. |
| Use custom fonts? | Enable Google fonts. **Note:** enables "Custom fonts" tab |
| Extra class name | If you wish to style particular content element differently, then use this field to add a class name and then refer to it in your css file. |
| Design Options | Control borders, background and other styling options. |

### Post Excerpt

| | |
|-|-|
| ![Post Excerpt](/img/elements/excerpt_icon.png) | Post excerpt element adds excerpt of post, page or custom post types. In case of media grid it will add media description. |

| Param name | Description |
|------------|-------------|
| Add link | Select link option.<br/>**Note:** Additional option "Woo Commerce Add to Cart" if Woo Commerce plugin is active |
| Element tag | Select element tag. |
| Text align | Select text alignment. |
| Use custom fonts? | Enable Google fonts. **Note:** enables "Custom fonts" tab |
| Extra class name | If you wish to style particular content element differently, then use this field to add a class name and then refer to it in your css file. |
| Design Options | Control borders, background and other styling options. |

### Post Date

| | |
|-|-|
| ![Post Date](/img/elements/post_date_ico.png) | This element adds post data to your grid element template. |

| Param name | Description |
|------------|-------------|
| Add link | Select link option.<br/>**Note:** Additional option "Woo Commerce Add to Cart" if Woo Commerce plugin is active |
| Element tag | Select element tag. |
| Text align | Select text alignment. |
| Use custom fonts? | Enable Google fonts. **Note:** enables "Custom fonts" tab |
| Extra class name | If you wish to style particular content element differently, then use this field to add a class name and then refer to it in your css file. |
| Design Options | Control borders, background and other styling options. |

### Post Author

| | |
|-|-|
| ![Post Author](/img/elements/Author_Icon.png) | This element adds post author to your grid element template. |

| Param name | Description |
|------------|-------------|
| Add link | Select link option.<br/>**Note:** Additional option "Woo Commerce Add to Cart" if Woo Commerce plugin is active |
| Element tag | Select element tag. |
| Text align | Select text alignment. |
| Use custom fonts? | Enable Google fonts. **Note:** enables "Custom fonts" tab |
| Extra class name | If you wish to style particular content element differently, then use this field to add a class name and then refer to it in your css file. |
| Design Options | Control borders, background and other styling options. |

### Post Categories

| | |
|-|-|
| ![Post Categories](/img/elements/Category_icon.png) | This element adds post category or categories to your grid element template. |

| Param name | Description |
|------------|-------------|
| Add link | Select link option.<br/>**Note:** Additional option "Woo Commerce Add to Cart" if Woo Commerce plugin is active |
| Style | Select category display style: Comma, Rounded, etc. |
| Color | Select category style display color.<br/>**Note:** Active if style is different from None or Comma. |
| Category size | Select size of category display. |
| Extra class name | If you wish to style particular content element differently, then use this field to add a class name and then refer to it in your css file. |
| Design Options | Control borders, background and other styling options. |

### Post Image

| | |
|-|-|
| ![Post Image](/img/elements/featured_image_ico.png) | This element allows adding "Featured image' or point to placeholder for media image from post, custom post types or media library. |

| Param name | Description |
|------------|-------------|
| Add link | Select link option.<br/>**Note:** Additional option "Woo Commerce Add to Cart" if Woo Commerce plugin is active. |
| Image size | Enter image size (Example: "thumbnail", "medium", "large", "full" or other sizes defined by theme). Alternatively enter size in pixels (Example: 200×100 (Width x Height)). |
| Text align | Select alignment. |
| Extra class name | If you wish to style particular content element differently, then use this field to add a class name and then refer to it in your css file. |
| Design Options | Control borders, background and other styling options. |

### Custom Fields

| | |
|-|-|
| ![Custom Fields](/img/elements/custom_fields_ico.png) | Helps to retrieve custom field data from meta values of the post or custom post types. |

| Param name | Description |
|------------|-------------|
| Field key name | Custom field name to retrieve meta data value. |
| Label | Enter label to display before key value. |
| Align | Select alignment. |
| Extra class name | If you wish to style particular content element differently, then use this field to add a class name and then refer to it in your css file. |

### Woo Elements

| | |
|-|-|
| ![Woo Elements](/img/elements/woo_icon.png) | If you have Woo Commerce installed on your WordPress site - you will see list of Woo elements available for use in your grid template.<br/>**Note:** It will add also option to choose "Add to Cart" in link settings of linkable elements. |

### Advanced Custom Fields

| | |
|-|-|
| ![ACF](/img/elements/acf_ico.png) | If you have Advanced Custom Fields installed on your WordPress site - you will see ACF element available for use in your grid template. Using this element you can refer to a specific custom field. |

## Video Tutorial

See how easy it is to create grid element template from scratch by using WPBakery Page Builder Grid Builder.

<div style={{textAlign: 'center'}}>
  <iframe style={{maxWidth: '700px', width: '100%'}} height="450" src="https://www.youtube.com/embed/ER2njPVmsnk?feature=oembed&modestbranding=1&showinfo=0&rel=0" title="WPBakery Page Builder Grid Element Builder" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
