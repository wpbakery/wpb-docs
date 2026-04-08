---
sidebar_position: 3
---

# Content elements

This is a list of 40+ available content elements that can be placed on the working canvas or inside of the columns. Think of them as bricks. With those bricks, you are building your layout. Most of the content elements have options to set them click pencil icon. To save changes click save button.

## <img src="/img/elements/add_row-e1691491172917.png" alt="Row Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Row

"Row" is the main content element of WPBakery Page Builder. Rows are used to divide your page into the logic blocks with columns, columns later will hold your content blocks. Rows can be divided into the layouts (eg. 1/2 + 1/2, 1/3 + 1/3 + 1/3, and so on). Your page can have an unlimited number of rows. To change row's position, click and drag row's drag handler (top left row's corner) and drag row around (vertical axis).

| Param name | Description |
|------------|-------------|
| Row stretch | Select stretching options for row and content (Note: stretched may not work properly if parent container has "overflow: hidden" CSS property). |
| Column gap | Set gap between columns, all columns within row will be affected by this value. |
| Full height row | Set row to be full height.<br />**Note:** if content will exceed screen size then row will be bigger than screen height as well. |
| Columns position | Set columns position for full height row - Top, Middle, Bottom.<br />**Note:** active only if "Full height row" is selected. |
| Equal height | Set all columns to be equal height.<br />**Note:** all columns will have same height as longest column. |
| Content position | Set content position within columns - Default, Top, Middle, Bottom.<br />**Note:** Default value will be used top or other if defined within theme. |
| Use video background | Set YouTube background for row. |
| YouTube link | Enter link to YouTube video to set it as row background.<br />**Note:** YouTube video will overwrite background images and can be used with parallax effect. |
| Parallax | Add parallax type background for row (Note: If no image is specified, parallax will use background image from Design Options). |
| Image | Select image from media library for parallax.<br />**Note:** active only if "Parallax" effect is chosen. |
| Parallax speed | Control parallax effect speed with 1.5 value set as default. For traditional parallax effect 1.0 is the minimum value.<br />**Note:** active only if Image or Video parallax effect is enabled. |
| Row ID | Enter row ID (Note: make sure it is unique and valid according to [w3c specification](http://www.w3schools.com/tags/att_global_id.asp)). |
| CSS Animation | Add animation to your element. |
| Extra class name | Add class name in order to refer to this element in CSS. |
| Design Options | Control borders, background and other styling options. |

**Important:** Row allows you build complex layouts by inserting inner row within root level row/column. Take into account that it is not allowed to insert inner row within inner row.

## Column

"Columns" are part of the row and they hold your content elements inside them. Columns can be reordered. Click and drag column around (horizontal axis). That way you can group elements in logical groups and then drag them around with your mouse (to re-position).

| Param name | Description |
|------------|-------------|
| Use video background | Set YouTube background for row. |
| YouTube link | Enter link to YouTube video to set it as row background.<br />**Note:** YouTube video will overwrite background images and can be used with parallax effect. |
| Parallax | Add parallax type background for row (Note: If no image is specified, parallax will use background image from Design Options). |
| Image | Select image from media library for parallax.<br />**Note:** active only if "Parallax" effect is chosen. |
| Parallax speed | Control parallax effect speed with 1.5 value set as default. For traditional parallax effect 1.0 is the minimum value.<br />**Note:** active only if Image or Video parallax effect is enabled. |
| Element ID | Add unique element ID (Note: make sure it is unique and valid according to [w3c specification](http://www.w3schools.com/tags/att_global_id.asp)). |
| Extra class name | Add class name in order to refer to this element in CSS. |
| Design Options | Control borders, background and other styling options. |
| Width & Responsiveness | Control width, offset and visibility of element on different devices. |

## <img src="/img/elements/Section-Element-Icon-1.png" alt="Section Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Section

"Section" is root type container element that allows you to 'group' several rows. You can insert section into root canvas only (section element can not be inserted into any other element, including row). Section element can contain only row elements.

| Param name | Description |
|------------|-------------|
| Section stretch | Add class name in order to refer to this element in CSS. |
| Full height section? | Set section to be full height.<br />**Note:** if content will exceed screen size then row will be bigger than screen height as well. |
| Content position | Set content position within columns - Default, Top, Middle, Bottom.<br />**Note:** Default value will be used top or other if defined within theme. |
| Use video background? | Set YouTube background for section. |
| YouTube link | Enter link to YouTube video to set it as section background.<br />**Note:** YouTube video will overwrite background images and can be used with parallax effect. |
| Parallax | Add parallax type background for section (Note: If no image is specified, parallax will use background image from Design Options). |
| Image | Select image from media library for parallax.<br />**Note:** active only if "Parallax" effect is chosen. |
| Parallax speed | Control parallax effect speed with 1.5 value set as default. For traditional parallax effect 1.0 is the minimum value.<br />**Note:** active only if Image or Video parallax effect is enabled. |
| CSS Animation | Add animation to your element. |
| Section ID | Enter section ID (Note: make sure it is unique and valid according to [w3c specification](http://www.w3schools.com/tags/att_global_id.asp)). |
| Disable section | Allows you to disable section (It will not be visible to the public). |
| Extra class name | Add class name in order to refer to this element in CSS. |
| Design Options | Control borders, background and other styling options. |

## <img src="/img/elements/text.png" alt="Text Block Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Text Block

"Text block" allows you to insert paragraph type text and format it using WYSIWYG editor. Moreover text block allows adding media(images and videos).

| Param name | Description |
|------------|-------------|
| Text | Add/Edit content using WYSIWYG editor TinyMCE. |
| CSS animations | Add animation to your element. |
| Element ID | Add unique element ID (Note: make sure it is unique and valid according to [w3c specification](http://www.w3schools.com/tags/att_global_id.asp)). |
| Extra class name | Add class name in order to refer to this element in CSS. |
| Design Options | Control borders, background and other styling options. |

## <img src="/img/elements/separator.png" alt="Separator Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Separator

"Separator" add separator line to your page.

| Param name | Description |
|------------|-------------|
| Color | Choose color of your separator line, including Custom color chosen with Color picker or defined as RGB code. |
| Separator alignment | Select separator alignment. |
| Style | Choose line styling - solid, dotted, dashed, shadow etc. |
| Border | Border width in pixels. |
| Element width | Define line width within column in percents. |
| CSS Animation | Add animation to your element. |
| Element ID | Add unique element ID (Note: make sure it is unique and valid according to [w3c specification](http://www.w3schools.com/tags/att_global_id.asp)). |
| Extra class name | Add class name in order to refer to this element in CSS. |
| Design Options | Control borders, background and other styling options. |

## <img src="/img/elements/separator_text.png" alt="Separator with Text Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Separator with Text

"Separator with Text" add separator line to your page together with text which can be positioned in the centre, left or right sides of line.

| Param name | Description |
|------------|-------------|
| Title | Text which will appear on the line. |
| Add icon | Add icon to separator from Icon Library. |
| Title position | Allows positioning of your text in the centre, left or right side of the line. |
| Separator alignment | Select separator alignment. |
| Color | Choose color of your separator line, including Custom color chosen with Color picker or defined as RGB code. |
| Style | Choose line styling - solid, dotted, dashed, shadow etc. |
| Border | Border width in pixels. |
| Element width | Define line width within column in percents. |
| CSS Animation | Add animation to your element. |
| Element ID | Add unique element ID (Note: make sure it is unique and valid according to [w3c specification](http://www.w3schools.com/tags/att_global_id.asp)). |
| Extra class name | Add class name in order to refer to this element in CSS. |
| Design Options | Control borders, background and other styling options. |

## <img src="/img/elements/zigzag-icon.png" alt="ZigZag Separator Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> ZigZag Separator

"ZigZag separator" add separator line in form of zig zag. It uses SVG graphics to form the line and can be positioned in the centre, left or right sides of line.

| Param name | Description |
|------------|-------------|
| Separator alignment | Select separator alignment. |
| Color | Choose color of your separator line, including Custom color chosen with Color picker or defined as RGB code. |
| Element width | Define line width within column in percents. |
| Border width | Border width size with "Medium" as default. |
| CSS Animation | Add animation to your element. |
| Element ID | Add unique element ID (Note: make sure it is unique and valid according to [w3c specification](http://www.w3schools.com/tags/att_global_id.asp)). |
| Extra class name | Add class name in order to refer to this element in CSS. |
| Design Options | Control borders, background and other styling options. |

## <img src="/img/elements/message_box.png" alt="Message Box Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Message Box

"Message Box" add noticeable message to your website in order to show success, error, warning etc.

| Param name | Description |
|------------|-------------|
| Message Box Presets | Select predefined message box designs or choose "Custom" for custom styling. |
| Style | Select message box style. |
| Shape | Select message box shape. |
| Color | Select message box color. |
| Icon library | Select icon library. |
| Icon | Select icon from library. |
| Message text | Add/Edit content using WYSIWYG editor TinyMCE |
| CSS animation | Add animation to your element. |
| Element ID | Add unique element ID (Note: make sure it is unique and valid according to [w3c specification](http://www.w3schools.com/tags/att_global_id.asp)). |
| Extra class name | Add class name in order to refer to this element in CSS. |
| Design Options | Control borders, background and other styling options. |

## <img src="/img/elements/facebook.png" alt="Facebook Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Facebook 'Like'

"Facebook Like" add social 'Like' button.

| Param name | Description |
|------------|-------------|
| Button type | Select type of your button from predefined layouts. |
| CSS Animation | Add animation to your element. |
| Element ID | Add unique element ID (Note: make sure it is unique and valid according to [w3c specification](http://www.w3schools.com/tags/att_global_id.asp)). |
| Extra class name | Add class name in order to refer to this element in CSS. |
| Design Options | Control borders, background and other styling options. |

## <img src="/img/elements/twitter.png" alt="Twitter Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Tweetmeme Button

"Tweetmeme button" add default social 'Tweet' button.

| Param name | Description |
|------------|-------------|
| Choose a button | Select Twitter button type: Share a link, Follow, Hashtag, Mention |
|  | Depending on chosen button type align parameters for Twitter button |
| Language | Select Twitter button language. |
| CSS Animation | Add animation to your element. |
| Element ID | Add unique element ID (Note: make sure it is unique and valid according to [w3c specification](http://www.w3schools.com/tags/att_global_id.asp)). |
| Extra class name | Add class name in order to refer to this element in CSS. |
| Design Options | Control borders, background and other styling options. |

## <img src="/img/elements/pinterest.png" alt="Pinterest Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Pinterest

"Pinterest" add social 'Pinit' button.

| Param name | Description |
|------------|-------------|
| Button layout | Select type of button layout. |
| CSS Animation | Add animation to your element. |
| Element ID | Add unique element ID (Note: make sure it is unique and valid according to [w3c specification](http://www.w3schools.com/tags/att_global_id.asp)). |
| Extra class name | Add class name in order to refer to this element in CSS. |
| Design Options | Control borders, background and other styling options. |

## <img src="/img/elements/faq.png" alt="FAQ Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> FAQ (Toggle)

"FAQ" add collapsible toggle to your page.

| Param name | Description |
|------------|-------------|
| Toggle title | Title of toggle which will be displayed near open/collapse button. |
| Toggle content | Content of toggle editable using WYSIWYG editor TinyMCE. |
| Style | Toggle style. |
| Color | Toggle icon color. |
| Size | Toggle size. |
| Default state | Ability to set default state of toggle open or closed(collapsed). |
| Element ID | Enter toggle ID (Note: make sure it is unique and valid according to [w3c specification](http://www.w3schools.com/tags/att_global_id.asp)). |
| CSS animation | Add animation to your element. |
| Extra class name | Add class name in order to refer to this element in CSS. |
| Design Options | Control borders, background and other styling options. |

## <img src="/img/elements/single_image.png" alt="Single Image Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Single Image

Add simple image to your layout and style it. Add CSS animation or apply Design Options.

| Param name | Description |
|------------|-------------|
| Widget title | Title of element which will be displayed above widget. |
| Image source | Media Library for inserting images from Media Library;<br />External link for inserting link to image;<br />Featured image for using Featured image (if specified). |
| Image | Select image from media library. You can also upload images using media library. |
| External link | Enter direct link to external image.<br />**Note:** available if "External link" is chosen in "Image source". |
| CSS animation | Add animation to your element. |
| Image size | Set size of your image. Set large, small etc. or set your own width x height in pixels.<br />**Note:** External images accept only pixel values. |
| Add caption | Add caption defined in Media Library. |
| Caption | Insert caption - available only for External images. |
| Image alignment | Set alignment of element within a column. |
| Image style | Set image style - choose from square, rounded, border etc. |
| OnClick action | Select onclick action:<ul><li>None</li><li>Link to large image</li><li>Open prettyPhoto</li><li>Open custom link</li><li>Zoom</li></ul> |
| Image link | Enter link for onclick event.<br />**Note:** available if "Open custom link" is chosen in "OnClick action". |
| Design Options | Control borders, background and other styling options. |
| Element ID | Add unique element ID (Note: make sure it is unique and valid according to [w3c specification](http://www.w3schools.com/tags/att_global_id.asp)). |
| Extra class name | Add class name in order to refer to this element in CSS. |

## <img src="/img/elements/gallery.png" alt="Image Gallery Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Image Gallery

Add responsive Image gallery. Choose your gallery type from Flex Slider, Nivo Slider or Image grid.

| Param name | Description |
|------------|-------------|
| Widget title | Title of element which will be displayed above widget. |
| Gallery type | Select gallery type from Flex Slider, Nivo Slider or Image grid. |
| Auto rotate slides | Select interval between auto-rotation of images or disable it. |
| Image source | Media Library for inserting images from Media Library;<br />External links for inserting link to image; |
| Images | Select images from media library. You can also upload images using media library. |
| External links | Enter direct link to external images.<br />**Note:** available if "External links" is chosen in "Image source". |
| Image size | Set size of your image. Set large, small etc. or set your own width x height in pixels.<br />**Note:** External images accept only pixel values. |
| OnClick action | Select onclick action:<ul><li>None</li><li>Link to large image</li><li>Open prettyPhoto</li><li>Open custom link</li></ul> |
| Custom links | Enter links for onclick event.<br />**Note:** available if "Open custom link" is chosen in "OnClick action". |
| CSS Animation | Add animation to your element. |
| Design Options | Control borders, background and other styling options. |
| Element ID | Add unique element ID (Note: make sure it is unique and valid according to [w3c specification](http://www.w3schools.com/tags/att_global_id.asp)). |
| Extra class name | Add class name in order to refer to this element in CSS. |

## <img src="/img/elements/image_carrousel.png" alt="Image Carousel Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Image Carousel

Add fixed size animated image carousel.

| Param name | Description |
|------------|-------------|
| Widget title | Title of element which will be displayed above widget. |
| Auto rotate slides | Select interval between auto-rotation of images or disable it. |
| Images | Select images from media library. You can also upload images using media library. |
| Image size | Set size of your image. Set large, small etc. or set your own width x height in pixels. |
| On click | Define action for onclick event if needed. |
| Slider mode | Slides will be positioned horizontally (for horizontal swipes) or vertically (for vertical swipes). |
| Slider speed | Duration of animation between slides (in ms). |
| Slides per view | Set numbers of slides you want to display at the same time on slider's container for carousel mode. Supports also "auto" value, in this case it will fit slides depending on container's width. "auto" mode isn't compatible with loop mode. |
| Slider autoplay | Enables autoplay mode. |
| Hide pagination control | If YES pagination control will be removed. |
| Hide prev/next buttons | If YES prev/next control will be removed. |
| Partial view | If YES part of the next slide will be visible on the right side. |
| Slider loop | Enables loop mode. |
| CSS Animation | Add animation to your element. |
| Element ID | Add unique element ID (Note: make sure it is unique and valid according to [w3c specification](http://www.w3schools.com/tags/att_global_id.asp)). |
| Extra class name | Add class name in order to refer to this element in CSS. |
| Design Options | Control borders, background and other styling options. |

## <img src="/img/elements/pageable_content_icon.png" alt="Pageable Container Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Pageable Container

Pageable Container is Tab based complex element which consists of inner section collections(tabs) and its structure is similar to row and column hierarchy. You can create as many inner sections within the element as you wish and then place any type of content within.

| Param name | Description |
|------------|-------------|
| Widget title | Title of element which will be displayed above widget. |
| Autoplay | Select auto rotate for tabs in seconds.<br />**Note:** disabled by default. |
| Active section | Enter active section number.<br />**Note:** to have all sections closed on initial load enter non-existing number. |
| Pagination style | Select pagination style. |
| Pagination color | Select pagination color.<br />**Note:** available only if "Pagination style" is selected. |
| Pagination position | Select pageable navigation position. |
| CSS Animation | Add animation to your element. |
| Element ID | Add unique element ID (Note: make sure it is unique and valid according to [w3c specification](http://www.w3schools.com/tags/att_global_id.asp)). |
| Extra class name | Add class name in order to refer to this element in CSS. |
| Design Options | Control borders, background and other styling options. |

## <img src="/img/elements/pageable_content_icon.png" alt="Pageable Container Section Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Pageable Container Section

Pageable container section is an instance of Pageable Container element and controls one specific section. It is similar to principe row and column.

| Param name | Description |
|------------|-------------|
| Title | Enter section title.<br />**Note:** you can leave it empty |
| Section ID | Enter section ID (**Note:** make sure it is unique and valid according to [w3c specification](http://www.w3schools.com/tags/att_global_id.asp)). |
| Add icon | Add icon to button from icon library. |
| Extra class name | Add class name in order to refer to this element in CSS. |

## <img src="/img/elements/tabs.png" alt="Tabs Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Tabs

Tabs is a complex element which consists of inner section collections(tabs) and its structure is similar to row and column hierarchy. You can create as many inner sections within element as you wish and then place any type of content within.

| Param name | Description |
|------------|-------------|
| Widget title | Title of element which will be displayed above widget. |
| Style | Select tabs display style. |
| Shape | Select tabs shape. |
| Color | Select tabs color. |
| Do not fill content area | Do not fill content area with color.<br />**Note:** content area of tab will be transparent. |
| Spacing | Select tabs spacing.<br />**Note:** space between tab titles. |
| Gap | Select tabs gap.<br />**Note:** space between tab titles and content area. |
| Alignment | Select tabs section title alignment. |
| Autoplay | Select auto rotate for tabs in seconds.<br />**Note:** disabled by default. |
| Active section | Enter active section number.<br />**Note:** to have all sections closed on initial load enter non-existing number. |
| Pagination style | Select pagination style. |
| Pagination color | Select pagination color.<br />**Note:** available only if "Pagination style" is selected. |
| CSS Animation | Add animation to your element. |
| Element ID | Add unique element ID (Note: make sure it is unique and valid according to [w3c specification](http://www.w3schools.com/tags/att_global_id.asp)). |
| Extra class name | Add class name in order to refer to this element in CSS. |
| Design Options | Control borders, background and other styling options. |

## <img src="/img/elements/tabs.png" alt="Tabs Section Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Tabs Section

Tabs section is an instance of Tabs element and controls one specific tab/section. It is similar to principe row and column.

| Param name | Description |
|------------|-------------|
| Title | Enter section title.<br />**Note:** you can leave it empty. |
| Section ID | Enter section ID (**Note:** make sure it is unique and valid according to [w3c specification](http://www.w3schools.com/tags/att_global_id.asp)). |
| Add icon | Add icon to button from icon library. |
| Extra class name | Add class name in order to refer to this element in CSS. |

## <img src="/img/elements/tours.png" alt="Tours Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Tours

Tours is a complex element which consists of inner section collections and its structure is similar to row and column hierarchy. You can create as many inner sections within element as you wish and then place any type of content within.

| Param name | Description |
|------------|-------------|
| Widget title | Title of element which will be displayed above widget. |
| Style | Select tour display style. |
| Shape | Select tour shape. |
| Color | Select tour color. |
| Do not fill content area | Do not fill content area with color.<br />**Note:** content area of tour will be transparent. |
| Spacing | Select tour spacing.<br />**Note:** space between tour titles. |
| Gap | Select tour gap.<br />**Note:** space between tour titles and content area. |
| Position | Select tour navigation position "Left" or "Right". |
| Alignment | Select section title alignment. |
| Navigation width | Select tour navigation width. |
| Autoplay | Select auto rotate for tour in seconds.<br />**Note:** disabled by default. |
| Active section | Enter active section number.<br />**Note:** to have all sections closed on initial load enter non-existing number. |
| Pagination style | Select pagination style. |
| Pagination color | Select pagination color.<br />**Note:** available only if "Pagination style" is selected. |
| CSS Animation | Add animation to your element. |
| Element ID | Add unique element ID (Note: make sure it is unique and valid according to [w3c specification](http://www.w3schools.com/tags/att_global_id.asp)). |
| Extra class name | Add class name in order to refer to this element in CSS. |
| Design Options | Control borders, background and other styling options. |

## <img src="/img/elements/tours.png" alt="Tours Section Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Tours Section

Tours section is an instance of Tours element and controls one specific section. It is similar to principe row and column.

| Param name | Description |
|------------|-------------|
| Title | Enter section title.<br />**Note:** you can leave it empty. |
| Section ID | Enter section ID (**Note:** make sure it is unique and valid according to [w3c specification](http://www.w3schools.com/tags/att_global_id.asp)). |
| Add icon | Add icon to button from icon library. |
| Extra class name | Add class name in order to refer to this element in CSS. |

## <img src="/img/elements/tours.png" alt="Accordion Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Accordion

Accordion is a complex element which consists of inner section collections and its structure is similar to row and column hierarchy. You can create as many inner sections within element as you wish and then place any type of content within.

| Param name | Description |
|------------|-------------|
| Widget title | Title of element which will be displayed above widget. |
| Style | Select accordion display style. |
| Shape | Select accordion shape. |
| Color | Select accordion color. |
| Do not fill content area | Do not fill content area with color.<br />**Note:** content area of accordion will be transparent. |
| Spacing | Select accordion spacing.<br />**Note:** space between accordion sections, section titles and content area. |
| Gap | Select accordion gap.<br />**Note:** space between accordion sections. |
| Alignment | Select accordion section title alignment. |
| Autoplay | Select auto rotate for tabs in seconds.<br />**Note:** disabled by default. |
| Allow collapsible all | Allow collapse all accordion sections. |
| Icon | Select accordion navigation icon. |
| Position | Select accordion navigation icon position. |
| Active section | Enter active section number.<br />**Note:** to have all sections closed on initial load enter non-existing number. |
| CSS Animation | Add animation to your element. |
| Element ID | Add unique element ID (Note: make sure it is unique and valid according to [w3c specification](http://www.w3schools.com/tags/att_global_id.asp)). |
| Extra class name | Add class name in order to refer to this element in CSS. |
| Design Options | Control borders, background and other styling options. |

## <img src="/img/elements/tours.png" alt="Accordion Section Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Accordion Section

Accordion section is an instance of Accordion element and controls one specific section. It is similar to principe row and column.

| Param name | Description |
|------------|-------------|
| Title | Enter section title.<br />**Note:** you can leave it empty. |
| Section ID | Enter section ID (**Note:** make sure it is unique and valid according to [w3c specification](http://www.w3schools.com/tags/att_global_id.asp)). |
| Add icon | Add icon to button from icon library. |
| Extra class name | Add class name in order to refer to this element in CSS. |

## <img src="/img/elements/post_grid.png" alt="Post Grid Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Post Grid

Add posts of your WordPress site in grid view. Choose posts type, build your own unique query and define what kind of information to display.

| Param name | Tab | Description |
|------------|-----|-------------|
| Data source | General | Select content type for your grid. |
| Narrow data source | General | Enter categories, tags or custom taxonomies. |
| Total items | General | Set max limit for items in grid or enter -1 to display all (limited to 1000). |
| Display Style | General | Select display style for grid. |
| Show filter | General | Append filter to grid. |
| Grid elements per row | General | Select number of single grid elements per row. |
| Gap | General | Select gap between grid elements. |
| Include only | General | Add posts, pages, etc. by title.<br />**Note:** active only if "Data source" is set to "List of IDs". |
| Custom query | General | Build custom query according to [WordPress Codex](http://codex.wordpress.org/Function_Reference/query_posts).<br />**Note:** active only if "Data source" is set to "Custom query" |
| Items per page | General | Number of items to show per page.<br />**Note:** active only if "Display style" is set to "Load more button", "Lazy loading" or "Paginator". |
| Order by | Data settings | Select order type. If "Meta value" or "Meta value Number" is chosen then meta key is required. |
| Sorting | Data settings | Select sorting order. |
| Offset | Data settings | Number of grid elements to displace or pass over. |
| Exclude | Data settings | Exclude posts, pages, etc. by title. |
| Grid element template | Item design | Select predefined grid element template.<br />**Note:** It is allowed to create new template or modify selected. Predefined templates will be cloned. |
| Filter by | Filter | Select filter source. |
| Style | Filter | Select filter display style. |
| Alignment | Filter | Select filter alignment. |
| Color | Filter | Select filter color. |
| Filter size | Filter | Select filter size. |
| Button Text | Load more button | Enter text for "Load more" button.<br />**Note:** "Load more" will be used by default. |
| Button style | Load more button | Select button style. |
| Button shape | Load more button | Select button shape. |
| Button color | Load more button | Select button color. |
| Button size | Load more button | Select button size. |
| Button alignment | Load more button | Select button alignment. |
| Button icon | Load more button | Add icon to "Load more" button. |
| Arrows design | Pagination | Select design for arrows. |
| Arrows position | Pagination | Arrows will be displayed inside or outside grid.<br />**Note:** active only if "Arrow design" is chosen. |
| Arrows color | Pagination | Select color for arrows.<br />**Note:** active only if "Arrow design" is chosen. |
| Pagination style | Pagination | Select pagination style. |
| Pagination color | Pagination | Select pagination color.<br />**Note:** active only if "Pagination style" is chosen. |
| Loop pages? | Pagination | Allow items to be repeated in infinite loop (carousel). |
| Autoplay delay | Pagination | Enter value in seconds. Set -1 to disable autoplay. |
| Animation In | Pagination | Select "animation in" for page transition. |
| Animation Out | Pagination | Select "animation out" for page transition. |
| Design Options |  | Control borders, background and other styling options. |

## <img src="/img/elements/masonry_post_grid_ico.png" alt="Masonry Post Grid Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Masonry Post Grid

Add posts of your WordPress site in masonry grid view. Choose posts type, build your own unique query and define what kind of information to display.

| Param name | Tab | Description |
|------------|-----|-------------|
| Data source | General | Select content type for your grid. |
| Narrow data source | General | Enter categories, tags or custom taxonomies. |
| Total items | General | Set max limit for items in grid or enter -1 to display all (limited to 1000). |
| Display Style | General | Select display style for grid. |
| Show filter | General | Append filter to grid. |
| Grid elements per row | General | Select number of single grid elements per row. |
| Gap | General | Select gap between grid elements. |
| Include only | General | Add posts, pages, etc. by title.<br />**Note:** active only if "Data source" is set to "List of IDs" |
| Custom query | General | Build custom query according to [WordPress Codex](http://codex.wordpress.org/Function_Reference/query_posts).<br />**Note:** active only if "Data source" is set to "Custom query" |
| Items per page | General | Number of items to show per page.<br />**Note:** active only if "Display style" is set to "Load more button", "Lazy loading" or "Paginator". |
| Order by | Data settings | Select order type. If "Meta value" or "Meta value Number" is chosen then meta key is required. |
| Sorting | Data settings | Select sorting order. |
| Offset | Data settings | Number of grid elements to displace or pass over. |
| Exclude | Data settings | Exclude posts, pages, etc. by title. |
| Grid element template | Item design | Select predefined grid element template.<br />**Note:** It is allowed to create new template or modify selected. Predefined templates will be cloned. |
| Filter by | Filter | Select filter source. |
| Style | Filter | Select filter display style. |
| Alignment | Filter | Select filter alignment. |
| Color | Filter | Select filter color. |
| Filter size | Filter | Select filter size. |
| Button Text | Load more button | Enter text for "Load more" button.<br />**Note:** "Load more" will be used by default. |
| Button style | Load more button | Select button style. |
| Button shape | Load more button | Select button shape. |
| Button color | Load more button | Select button color. |
| Button size | Load more button | Select button size. |
| Button alignment | Load more button | Select button alignment. |
| Button icon | Load more button | Add icon to "Load more" button. |
| Design Options |  | Control borders, background and other styling options. |

## <img src="/img/elements/media_grid_ico.png" alt="Media Grid Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Media Grid

Add media from Media library to your WordPress site in grid view.

| Param name | Tab | Description |
|------------|-----|-------------|
| Images | General | Select images from media library. |
| Display Style | General | Select display style for grid. |
| Show filter | General | Append filter to grid. |
| Grid elements per row | General | Select number of single grid elements per row. |
| Gap | General | Select gap between grid elements. |
| Include only | General | Add posts, pages, etc. by title.<br />**Note:** active only if "Data source" is set to "List of IDs" |
| Custom query | General | Build custom query according to [WordPress Codex](http://codex.wordpress.org/Function_Reference/query_posts).<br />**Note:** active only if "Data source" is set to "Custom query" |
| Items per page | General | Number of items to show per page.<br />**Note:** active only if "Display style" is set to "Load more button", "Lazy loading" or "Paginator". |
| Grid element template | Item design | Select predefined grid element template.<br />**Note:** It is allowed to create new template or modify selected. Predefined templates will be cloned. |
| Filter by | Filter | Select filter source. |
| Style | Filter | Select filter display style. |
| Alignment | Filter | Select filter alignment. |
| Color | Filter | Select filter color. |
| Filter size | Filter | Select filter size. |
| Button Text | Load more button | Enter text for "Load more" button.<br />**Note:** "Load more" will be used by default. |
| Button style | Load more button | Select button style. |
| Button shape | Load more button | Select button shape. |
| Button color | Load more button | Select button color. |
| Button size | Load more button | Select button size. |
| Button alignment | Load more button | Select button alignment. |
| Button icon | Load more button | Add icon to "Load more" button. |
| Arrows design | Pagination | Select design for arrows. |
| Arrows position | Pagination | Arrows will be displayed inside or outside grid.<br />**Note:** active only if "Arrow design" is chosen. |
| Arrows color | Pagination | Select color for arrows.<br />**Note:** active only if "Arrow design" is chosen. |
| Pagination style | Pagination | Select pagination style. |
| Pagination color | Pagination | Select pagination color.<br />**Note:** active only if "Pagination style" is chosen. |
| Loop pages? | Pagination | Allow items to be repeated in infinite loop (carousel). |
| Autoplay delay | Pagination | Enter value in seconds. Set -1 to disable autoplay. |
| Animation In | Pagination | Select "animation in" for page transition. |
| Animation Out | Pagination | Select "animation out" for page transition. |
| Design Options |  | Control borders, background and other styling options. |

## <img src="/img/elements/masonry_media_grid_ico.png" alt="Masonry Media Grid Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Masonry Media Grid

Add media from Media library to your WordPress site in masonry grid view.

| Param name | Tab | Description |
|------------|-----|-------------|
| Images | General | Select images from media library. |
| Display Style | General | Select display style for grid. |
| Show filter | General | Append filter to grid. |
| Grid elements per row | General | Select number of single grid elements per row. |
| Gap | General | Select gap between grid elements. |
| Include only | General | Add posts, pages, etc. by title.<br />**Note:** active only if "Data source" is set to "List of IDs". |
| Custom query | General | Build custom query according to [WordPress Codex](http://codex.wordpress.org/Function_Reference/query_posts).<br />**Note:** active only if "Data source" is set to "Custom query". |
| Items per page | General | Number of items to show per page.<br />**Note:** active only if "Display style" is set to "Load more button", "Lazy loading" or "Paginator". |
| Grid element template | Item design | Select predefined grid element template.<br />**Note:** It is allowed to create new template or modify selected. Predefined templates will be cloned. |
| Filter by | Filter | Select filter source. |
| Style | Filter | Select filter display style. |
| Alignment | Filter | Select filter alignment. |
| Color | Filter | Select filter color. |
| Filter size | Filter | Select filter size. |
| Button Text | Load more button | Enter text for "Load more" button.<br />**Note:** "Load more" will be used by default. |
| Button style | Load more button | Select button style. |
| Button shape | Load more button | Select button shape. |
| Button color | Load more button | Select button color. |
| Button size | Load more button | Select button size. |
| Button alignment | Load more button | Select button alignment. |
| Button icon | Load more button | Add icon to "Load more" button. |
| Design Options |  | Control borders, background and other styling options. |

## <img src="/img/elements/posts_slider.png" alt="Post Slider Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Post Slider

Create slider from your WordPress site posts, pages or custom posts. Display featured images and take full control over their settings and styling.

| Param name | Description |
|------------|-------------|
| Widget title | Enter text used as widget title (Note: located above content element). |
| Slider type | Select slider type: Flex slider fade, Flex slider slide, Nivo slider. |
| Slider count | Enter number of slides to display (Note: Enter "All" to display all slides). |
| Auto rotate | Auto rotate slides each X seconds. |
| Post types | Select source for slider: post, page. |
| Description | Select source to use for description (Note: some sliders do not support it). |
| Link | Link type: Link to post, Link to bigger image, Open custom links, No link. |
| Custom links | Enter links for each slide here. Divide links with line breaks (Enter).**Note:** active only if "Link" is set to "Open custom links". |
| Thumbnail size | Enter thumbnail size. Example: thumbnail, medium, large, full or other sizes defined by current theme. Alternatively enter image size in pixels: 200×100 (Width x Height). |
| Post/Page IDs | Enter page/posts IDs to display only those records (Note: separate values by commas (,)). Use this field in conjunction with "Post types" field. |
| Categories | Enter categories by names to narrow output (Note: only listed categories will be displayed, divide categories with linebreak (Enter)). |
| Order by | Select how to sort retrieved posts. More at WordPress codex page. |
| Sort order | Select ascending or descending order. More at WordPress codex page. |
| Element ID | Add unique element ID (Note: make sure it is unique and valid according to [w3c specification](http://www.w3schools.com/tags/att_global_id.asp)). |
| Extra class name | Add class name in order to refer to this element in CSS. |
| Design Options | Control borders, background and other styling options. |

## <img src="/img/elements/widget_sidebar.png" alt="Widgetised Sidebar Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Witgetised Sidebar

"Widgetised Sidebar" add widget area created before.

| Param name | Description |
|------------|-------------|
| Widget title | Title of element which will be displayed above widget. |
| Sidebar | Choose which widget area to output. |
| Element ID | Add unique element ID (Note: make sure it is unique and valid according to [w3c specification](http://www.w3schools.com/tags/att_global_id.asp)). |
| Extra class name | Add class name in order to refer to this element in CSS. |
| Design Options | Control borders, background and other styling options. |

## <img src="/img/elements/button.png" alt="Button Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Button

Add button with multiple color and styling options:

- Modern
- Classic
- Flat
- Outline
- 3D
- Custom
- Outline custom

| Param name | Description |
|------------|-------------|
| Text | Text which will appear on the button. |
| URL (Link) | Button link. |
| Style | Select button display style. |
| Shape | Select button shape. |
| Color | Select color of the button.<br />**Note:** Available if "Style" is not "Custom". |
| Background color | Select color for background of the button with color picker.<br />**Note:** Available if "Style" is set to "Custom". |
| Text color | Select color for text on the button with color picker.<br />**Note:** Available if "Style" is set to "Custom". |
| Size | Select button display size. |
| Alignment | Select button alignment. |
| Set full width button? | Set button to full width within column.<br />**Note:** Available if "Alignment" is not "Inline". |
| Add icon? | Add icon to button from icon library. Control alignment of icon. |
| CSS Animation | Add animation to your element. |
| Element ID | Add unique element ID (Note: make sure it is unique and valid according to [w3c specification](http://www.w3schools.com/tags/att_global_id.asp)). |
| Extra class name | Add class name in order to refer to this element in CSS. |
| Design Options | Control borders, background and other styling options. |

## <img src="/img/elements/call_to_action.png" alt="Call to Action Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Call to Action

Create call to action block with heading, text, button and control its styling.

| Param name | Description |
|------------|-------------|
| Heading | Enter text for heading line. |
| Subheading | Enter text for subheading line. |
| Use Custom font for Heading? | Adds option to set Custom font to Heading. |
| Use Custom font for Subheading? | Adds option to set Custom font to Subheading. |
| Text alignment | Select text alignment in "Call to Action" block. |
| Shape | Select call to action shape. |
| Style | Select call to action display style. |
| Color | Select color of the Call to Action.<br />**Note:** Available if "Style" is not "Custom". |
| Background color | Select color for background with color picker.<br />**Note:** Available if "Style" is set to "Custom". |
| Text color | Select color for text with color picker.<br />**Note:** Available if "Style" is set to "Custom". |
| Text | Add/Edit text of call to action block using WYSIWYG editor TinyMCE. |
| Width | Select call to action width (percentage). |
| Add button? | Add button to Call to Action. Control position, alignment, style, color etc. |
| Add icon? | Add icon to Call to Action. Control position, alignment, background, color etc. |
| CSS animation | Add animation to your element. |
| Element ID | Add unique element ID (Note: make sure it is unique and valid according to [w3c specification](http://www.w3schools.com/tags/att_global_id.asp)). |
| Extra class name | Add class name in order to refer to this element in CSS. |
| Design Options | Control borders, background and other styling options. |

## <img src="/img/elements/hover-box-icon.png" alt="Hover Box Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Hover Box

Add interactive hover box with image and paragraph content and active state control.

| Param name | Tab | Description |
|------------|-----|-------------|
| Image | General | Select image from media library. |
| Primary title | General | Enter text for the heading line. |
| Use custom font? | General | Adds option to set Custom font to Heading. |
| Primary title alignment | General | Select alignment for the title. |
| Shape | General | Select hover box shape. |
| Width | General | Select hover box width in percentage of a parent container. |
| Alignment | General | Select hover box alignment in a parent container. |
| Reverse blocks | General | Set active side of the hover box. |
| CSS animation | General | Add animation to your element. |
| Element ID | General | Add unique element ID (Note: make sure it is unique and valid according to [w3c specification](http://www.w3schools.com/tags/att_global_id.asp)). |
| Extra class name | General | Add class name in order to refer to this element in CSS. |
| Design Options | Design Options | Control borders, background and other styling options. |
| Hover title | Hover Block | Enter text for the hover heading line. |
| Use custom font? | Hover Block | Adds option to set Custom font to Hover title. |
| Hover title alignment | Hover Block | Select alignment for the title. |
| Hover text | Hover Block | Enter paragraph text for the hover block. |
| Background color | Hover Block | Select background color for the hover block. (Note: Select Custom to choose a color with the color picker) |
| Add button? | Hover Block | Adds option to set button at the bottom of the hover block. |

## <img src="/img/elements/video.png" alt="Video Player Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Video Player

Insert video in your layout. Choose from multiple formats accepted by WordPress.

| Param name | Description |
|------------|-------------|
| Widget title | Title of widget which will be displayed above widget. |
| Video link | Link to the video. More about supported formats at WordPress [codex page](http://codex.wordpress.org/Embeds#Okay.2C_So_What_Sites_Can_I_Embed_From.3F). |
| Video width | Select video width in percentage. Percentage will be calculated from the size of container (column). |
| Video aspect ratio | Select aspect ratio of video with 16:9 set as default. |
| Alignment | Control alignment of video player within container (column). |
| CSS Animation | Add animation to your element. |
| Element ID | Add unique element ID (Note: make sure it is unique and valid according to [w3c specification](http://www.w3schools.com/tags/att_global_id.asp)). |
| Extra class name | Add class name in order to refer to this element in CSS. |
| Design Options | Control borders, background and other styling options. |

## <img src="/img/elements/google_map.png" alt="Google Maps Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Google Maps

Insert Google Maps within your iframe.

| Param name | Description |
|------------|-------------|
| Widget title | Title of widget which will be displayed above widget. |
| Map embed iframe | 1. Visit Google maps to create your map.<br />2. Find location<br />3. Click "Share" and make sure map is public on the web<br />4. Click folder icon to reveal "Embed on my site" link<br />5. Copy iframe code and paste it |
| Map height | Enter map height in pixels. |
| CSS Animation | Add animation to your element. |
| Element ID | Add unique element ID (Note: make sure it is unique and valid according to [w3c specification](http://www.w3schools.com/tags/att_global_id.asp)). |
| Extra class name | Add class name in order to refer to this element in CSS. |
| Design Options | Control borders, background and other styling options. |

## <img src="/img/elements/html.png" alt="Raw HTML Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Raw HTML

Insert your custom HTML content if necessary

| Param name | Description |
|------------|-------------|
| Raw HTML | Enter your HTML content. |
| Element ID | Add unique element ID (Note: make sure it is unique and valid according to [w3c specification](http://www.w3schools.com/tags/att_global_id.asp)). |
| Extra class name | Add class name in order to refer to this element in CSS. |
| Design Options | Control borders, background and other styling options. |

## <img src="/img/elements/js.png" alt="Raw JS Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Raw JS

Insert your custom JS code if necessary

| Param name | Description |
|------------|-------------|
| Raw JS | Enter your JS code. |
| Element ID | Add unique element ID (Note: make sure it is unique and valid according to [w3c specification](http://www.w3schools.com/tags/att_global_id.asp)). |
| Extra class name | Add class name in order to refer to this element in CSS. |
| Design Options | Control borders, background and other styling options. |

## <img src="/img/elements/flickr.png" alt="Flickr Widget Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Flickr Widget

Display your photo stream from Flickr on your WordPress site with Flickr Widget. In order to place images you will need to determine your Flickr ID - which you can retrieve here: [http://idgettr.com/](http://idgettr.com/)

| Param name | Description |
|------------|-------------|
| Widget title | Title of widget which will be displayed above widget. |
| Flickr ID | Enter Flickr ID. |
| Number of photos | Choose number of photos to display. |
| Type | Choose photo stream type. |
| Display | Choose photo display order. |
| CSS Animation | Add animation to your element. |
| Element ID | Add unique element ID (Note: make sure it is unique and valid according to [w3c specification](http://www.w3schools.com/tags/att_global_id.asp)). |
| Extra class name | Add class name in order to refer to this element in CSS. |
| Design Options | Control borders, background and other styling options. |

## <img src="/img/elements/progress_bar.png" alt="Progress Bar Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Progress Bar

Display progress bar with custom values. Style your whole progress bar or separate values according to your needs.

| Param name | Description |
|------------|-------------|
| Widget title | Title of widget which will be displayed above widget. |
| Units | Enter measurement units (if needed) Eg. %, px, points, etc. Graph value and unit will be appended to the graph title. |
| Color | Select global bar color. |
| **Values:** Label | Enter text used as title of bar. |
| **Values:** Value | Enter value of bar. |
| **Values:** Color | Select single bar background color. |
| **Options:** Add Stripes? | Add stripes to your progress bars. |
| **Options:** Add animation? | Add animation to stripes. Will be visible with striped bars. |
| CSS Animation | Add animation to your element. |
| Element ID | Add unique element ID (Note: make sure it is unique and valid according to [w3c specification](http://www.w3schools.com/tags/att_global_id.asp)). |
| Extra class name | Add class name in order to refer to this element in CSS. |
| Design Options | Control borders, background and other styling options. |

## <img src="/img/elements/piechart.png" alt="Pie Chart Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Pie Chart

Display pie chart with your custom value and styling parameters.

| Param name | Description |
|------------|-------------|
| Widget title | Title of widget which will be displayed above widget. |
| Pie value | Input graph value here. Choose range between 0 and 100. |
| Pie label value | Input integer value for label. If empty "Pie value" will be used. |
| Units | Enter measurement units (if needed) Eg. %, px, points, etc. Graph value and unit will be appended to the graph title. |
| Bar color | Select pie chart color. |
| CSS Animation | Add animation to your element. |
| Element ID | Add unique element ID (Note: make sure it is unique and valid according to [w3c specification](http://www.w3schools.com/tags/att_global_id.asp)). |
| Extra class name | Add class name in order to refer to this element in CSS. |
| Design Options | Control borders, background and other styling options. |

## <img src="/img/elements/Doughnut_icon.png" alt="Round Chart Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Round Chart

Display chart with your custom value and styling parameters in following formats:

- Round
- Doughnut

| Param name | Description |
|------------|-------------|
| Widget title | Title of widget which will be displayed above widget. |
| Design | Select type of chart from Round or Doughnut. |
| Style | Select chart color style.<br />**Note:** If chosen Custom then all predefined color dropdowns will be changed to color picker. |
| Gap | Select gap between chart values. |
| Outline color | Select color for gap and outline. |
| Custom outline color | Set custom outline color.<br />**Note:** available only when "Outline color" is set to Custom. |
| Show legend | Select to display legend. |
| Show hover values | Select to display values on hover. |
| **Values:** Title | Enter title for chart area. |
| **Values:** Value | Enter value for chart area. |
| **Values:** Color | Select color for chart area. |
| Animation | Select chart animation style. |
| CSS Animation | Add animation to your element. |
| Element ID | Add unique element ID (Note: make sure it is unique and valid according to [w3c specification](http://www.w3schools.com/tags/att_global_id.asp)). |
| Extra class name | Add class name in order to refer to this element in CSS. |
| Design Options | Control borders, background and other styling options. |

## <img src="/img/elements/Linechart_Icon.png" alt="Line Chart Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Line Chart

Display chart with your custom value and styling parameters in following formats:

- Line
- Vertical bar

| Param name | Description |
|------------|-------------|
| Widget title | Title of widget which will be displayed above widget. |
| Design | Select type of chart from Round or Doughnut. |
| Style | Select chart color style.<br />**Note:** If chosen Custom then all predefined color dropdowns will be changed to color picker. |
| Gap | Select gap between chart values. |
| Outline color | Select color for gap and outline. |
| Custom outline color | Set custom outline color.<br />**Note:** available only when "Outline color" is set to Custom. |
| Show legend | Select to display legend. |
| Show hover values | Select to display values on hover. |
| X-axis values | Enter values for X-axis.<br />**Note:** Separate values with semicolon. |
| **Values:** Title | Enter title for chart area. |
| **Values:** Y-axis values | Enter values for chart area Y-axis.<br />**Note:** Separate values with semicolon. |
| **Values:** Color | Select color for chart area. |
| Animation | Select chart animation style. |
| CSS Animation | Add animation to your element. |
| Element ID | Add unique element ID (Note: make sure it is unique and valid according to [w3c specification](http://www.w3schools.com/tags/att_global_id.asp)). |
| Extra class name | Add class name in order to refer to this element in CSS. |
| Design Options | Control borders, background and other styling options. |

## <img src="/img/elements/empty_space.png" alt="Empty Space Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Empty Space

Insert empty space between elements with custom height.

| Param name | Description |
|------------|-------------|
| Height | Enter empty space height. |
| Element ID | Add unique element ID (Note: make sure it is unique and valid according to [w3c specification](http://www.w3schools.com/tags/att_global_id.asp)). |
| Extra class name | Add class name in order to refer to this element in CSS. |
| Design Options | Control borders, background and other styling options. |

## <img src="/img/elements/custom_heading.png" alt="Custom Heading Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Custom Heading

Create custom heading with Google Fonts, choose one of predefined fonts and apply styling.**Important:** If you are using non-latin characters be sure to activate them under Settings/WPBakery Page Builder/General Settings.

| Param name | Description |
|------------|-------------|
| Text | Enter your content. |
| Element tag | Select element tag.<br />**Note:** H1 tag is available for Custom Heading starting from version 4.7. |
| Text align | Select text alignment. |
| Font size | Select font size. By default the size defined by your theme for specific tag will be used. |
| Line height | Select line height to set space between lines. |
| Text color | Select color of your text. |
| Use font family from the theme | Set font family of Custom Heading to theme default.<br />**Note:** This will disable Font Family and Font Style options. |
| Font Family | Select Google Font family from predefined list. |
| Font style | Select font styling available for chosen font family. For example light, normal, bold, italic, etc. |
| Google Fonts preview | See how you chosen Font Family and Font style looks like. |
| CSS Animation | Add animation to your element. |
| Element ID | Add unique element ID (Note: make sure it is unique and valid according to [w3c specification](http://www.w3schools.com/tags/att_global_id.asp)). |
| Extra class name | Add class name in order to refer to this element in CSS. |
| Design Options | Control borders, background and other styling options. |

## <img src="/img/elements/icon_icon.png" alt="Icon Element Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Icon Element

With WPBakery Page Builder you can easily add icons from following libraries:

- Font Awesome
- Open icons
- Typicons
- Entype
- Linecons

| Param name | Description |
|------------|-------------|
| Icons source | Select icon source (Library). |
| Icon | Select icon from chosen Icon source (Library). |
| Color | Select color of your icon.<br />**Note:** Custom color is available. |
| Background style | Select background style for your icon (default is 'None'). |
| Background color | Select color of icon's background (only if Background style is chosen).<br />**Note:** Custom color is available. |
| Size | Select icon size from Mini, Small, Medium, Large, Extra Large. |
| Icon alignment | Select icon alignment. |
| URL (link) | Icon link. |
| CSS animation | Add animation to your element. |
| Element ID | Add unique element ID (Note: make sure it is unique and valid according to [w3c specification](http://www.w3schools.com/tags/att_global_id.asp)). |
| Extra class name | Add class name in order to refer to this element in CSS. |
| Design Options | Control borders, background and other styling options. |

## <img src="/img/elements/woo_icon.png" alt="Woo Elements Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Woo Elements

Starting from version 4.4.0 WPBakery Page Builder offers all Woo Commerce shortcodes automatically mapped within your 'Add Element' window once you have Woo Commerce and WPBakery Page Builder installed on your WordPress site.

## <img src="/img/elements/wp.png" alt="WP Widgets Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Default Widgets of WP

With WPBakery Page Builder you can easily add all existing default WP widgets. All widgets are listed within WPBakery Page Builder element list.

| Param name | Description |
|------------|-------------|
| Widget title | Title of widget which will be displayed above widget. |
| Element ID | Add unique element ID (Note: make sure it is unique and valid according to [w3c specification](http://www.w3schools.com/tags/att_global_id.asp)). |
| Extra class name | Add class name in order to refer to this element in CSS. |

## <img src="/img/elements/gutenberg_icon.png" alt="Gutenberg Element Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Gutenberg Element

Insert Gutenberg editor in your layout

| Param name | Description |
|------------|-------------|
| Text | Opens the Gutenberg Editor |
| CSS animation | Add animation to your element. |
| Element ID | Add unique element ID (Note: make sure it is unique and valid according to [w3c specification](http://www.w3schools.com/tags/att_global_id.asp)). |
| Extra class name | Add class name in order to refer to this element in CSS. |
| Design Options | Control borders, background and other styling options. |

## <img src="/img/elements/toggle.png" alt="Toggle Container Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Toggle Container

Pageable Content Container

| Param name | Description |
|------------|-------------|
| On color | Select custom toggle color |
| Off color | Select custom toggle hover color |
| Toggle Position | Select pageable navigation position |
| CSS animation | Add animation to your element. |
| Element ID | Add unique element ID (Note: make sure it is unique and valid according to [w3c specification](http://www.w3schools.com/tags/att_global_id.asp)). |
| Extra class name | Add class name in order to refer to this element in CSS. |
| Design Options | Control borders, background and other styling options. |

## <img src="/img/elements/pricing.png" alt="Pricing Table Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Pricing Table

Output Pricing table on your page

| Param name | Description |
|------------|-------------|
| Heading | Enter text for heading line |
| Subheading | Enter text for subheading line |
| Currency | Enter your price currency |
| Price | Enter your price |
| Period | Enter your price action period |
| Text | Enter the text |
| Markers color | Select custom color for your list marker |
| Add Button | Add button for Call to Action |
| Button Text | Enter text for the button |
| Button URL | Enter button URL |
| Button Style | Select Button Display Style |
| Button Shape | Select Button Shape |
| Button Color | Select Button color |
| Button Size | Select Button size |
| Button Alignment | Select Button alignment |
| Set Full Width Button | To display full-width button |
| Add Icon | To set icon |
| Icon Alignment | Select icon Alignment |
| Icon Library | Select icon Library |
| Icon | Select the icon |
| Advanced On Click action | Insert inline onclick javascript action |
| On Click code | Enter onclick action code |
| CSS Animation | Add animation to your element. |
| Extra class name | Add class name in order to refer to this element in CSS. |
| Design Options | Control borders, background and other styling options. |

## <img src="/img/ui/copyright.png" alt="Copyright Element Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Copyright Element

Insert copyright with dynamic year

| Param name | Description |
|------------|-------------|
| Prefix | Text displayed before the year. |
| Postfix | Text displayed after the year. |
| Alignment | Align the content to left, center or right. |
| Element ID | Add unique element ID (Note: make sure it is unique and valid according to [w3c specification](http://www.w3schools.com/tags/att_global_id.asp)). |
| Extra class name | Add class name in order to refer to this element in CSS. |
| Design Options | Control borders, background and other styling options. |

## DEPRECATED Elements

### <img src="/img/elements/google_plus.png" alt="Google+ Icon" style={{width: '32px', height: '32px', verticalAlign: 'middle', marginRight: '10px'}} /> Google +

**DEPRECATED**

"Google+ button" add social "Google+" button.

| Param name | Description |
|------------|-------------|
| Button size | Select size of the button. |
| Annotation | Select type of annotation presented together with button. |
| CSS Animation | Add animation to your element. |
| Element ID | Add unique element ID (Note: make sure it is unique and valid according to [w3c specification](http://www.w3schools.com/tags/att_global_id.asp)). |
| Extra class name | Add class name in order to refer to this element in CSS. |
| Design Options | Control borders, background and other styling options. |

### Button 1.0

**DEPRECATED**

Add button with or without icon to your layout. Control size, link and text of the button.

| Param name | Description |
|------------|-------------|
| Text on the button | Text which will appear on the button. |
| URL (Link) | Button link. |
| Color | Color of the button. |
| Icon | Set icon which you want to display on button. Icon is not mandatory and by default field value is 'None'. |
| Size | Choose one of the predefined sizes for your button. |
| Extra class name | Add class name in order to refer to this element in CSS. |

### Button 2.0

**DEPRECATED**

Add button with multiple color and styling options.

| Param name | Description |
|------------|-------------|
| Text on the button | Text which will appear on the button. |
| URL (Link) | Button link. |
| Button Alignment | Select button alignment. |
| Style | Select predefined style of the button, including square, rounded, outline, round, etc. |
| Color | Color of the button. |
| Size | Choose one of the predefined sizes for your button. |
| Extra class name | Add class name in order to refer to this element in CSS. |

### Post Carousel

**DEPRECATED**

Add posts of your WordPress site in carousel view. Choose posts type, build your own unique query and define what kind of information to display.**Important:** do not place posts carrousel element within same type of posts. Such option will trigger infinite loop.

### Call to Action 1.0

**DEPRECATED**

Create call to action block with text, button and control its styling.

| Param name | Description |
|------------|-------------|
| Text | Text which will appear on call to action block. |
| Text on the button | Text which will appear on the button. |
| Color | Color of the button. |
| Icon | Set icon which you want to display on button. Icon is not mandatory and by default field value is "None". |
| Size | Choose one of the predefined sizes for your button. |
| Button position | Choose one of predefined button positions. |
| CSS animation | Add animation to your element. |
| Extra class name | Add class name in order to refer to this element in CSS. |

### Call to Action 2.0

**DEPRECATED**

Create call to action block with heading, text, button and control its styling.

| Param name | Description |
|------------|-------------|
| Heading first line | Text which will appear as a heading on call to action block. |
| Heading second line | Text which will appear as a second heading on call to action block. |
| CTA style | Choose styling of call to action block from round, square, etc. |
| Element width | Call to action element width in percents within a column. |
| Text align | Choose text align within call to action block. |
| Custom Background Color | Choose custom background color for call to action block with color picker which allow control opacity. |
| Promotional text | Add/Edit text of call to action block using WYSIWYG editor TinyMCE. |
| Text on the button | Text which will appear on the button. |
| URL (Link) | Button link. |
| Style | Select predefined style of the button, including square, rounded, outline, round, etc. |
| Color | Color of the button. |
| Size | Choose one of the predefined sizes for your button. |
| Button position | Choose one of predefined button positions. |
| CSS animation | Add animation to your element. |
| Extra class name | Add class name in order to refer to this element in CSS. |

### Tabs 1.0

**DEPRECATED**

"Tabs" is a complex element which consists of inner section collections(tabs) and its structure is similar to row and column hierarchy. You can create as many inner sections within element as you wish and then place any type of content within.Tabs and tab element has different parameters to operate with.

**Tabs Parameters**

| Param name | Description |
|------------|-------------|
| Widget title | Title of element which will be displayed above widget. |
| Auto rotate tabs | Auto rotate tabs each X seconds. |
| Extra class name | Add class name in order to refer to this element in CSS. |

**Tab Parameters**

| Param name | Description |
|------------|-------------|
| Title | Title of tab which will be displayed in Tab header. |
| Tab ID | unique tab id which can be used within link (can not be modified). |

**Important:** Tabs are considered as complex elements which do not allow to insert other complex elements within.

### Tour 1.0

**DEPRECATED**

"Tour" is a complex element which consists of inner sections(tabs) collection and its structure is similar to row and column hierarchy. You can create as many inner sections within element as you wish and then place any type of content within.Tour and inner tab element has different parameters to operate with.

**Tour Parameters**

| Param name | Description |
|------------|-------------|
| Widget title | Title of element which will be displayed above widget. |
| Auto rotate tabs | Auto rotate tabs each X seconds. |
| Extra class name | Add class name in order to refer to this element in CSS. |

**Tab Parameters**

| Param name | Description |
|------------|-------------|
| Title | Title of tab which will be displayed in Tab header. |
| Tab ID | unique tab id which can be used within link (can not be modified). |

**Important:** Tour are considered as complex elements which do not allow to insert other complex elements within.

### Accordion 1.0

**DEPRECATED**

"Accordion" is a complex element which consists of inner sections collection and its structure is similar to row and column hierarchy. You can create as many inner sections within element as you wish and then place any type of content within.Accordion and inner section element has different parameters to operate with.

**Tour Parameters**

| Param name | Description |
|------------|-------------|
| Widget title | Title of element which will be displayed above widget. |
| Active section | Enter section number to be active on load or enter false to collapse all sections. |
| Allow collapsible all | Select to allow all sections to be collapsible. |
| Extra class name | Add class name in order to refer to this element in CSS. |

**Tab Parameters**

| Param name | Description |
|------------|-------------|
| Title | Title of section which will be displayed in Section header. |

**Important:** Accordion are considered as complex elements which do not allow to insert other complex elements within.

## 3rd Party Plugins Support

Occasionally WPBakery Page Builder is extended with support for popular 3rd party plugins. Currently these 3rd party plugins are supported:

1. Layer Slider
2. Revolution Slider
3. Contact Form 7
4. Gravity Form
5. Ninja Forms
6. ACF
7. Woo Commerce
8. Essential Grid

After placing content element to the working canvas (page), click pencil icon to see options available for this particular content element.
