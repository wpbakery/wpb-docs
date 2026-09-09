---
id: custom-css
title: Custom CSS
sidebar_label: Custom CSS
sidebar_position: 8
hide_table_of_contents: true
---

WPBakery Page Builder offers several ways for users to interact with CSS:

**First:** You can access WP Dashboard -> WPBakery Page Builder -> Design Options tab where you change default color and margin/padding settings for content elements.

<div style={{textAlign: 'center'}}>
  <iframe style={{maxWidth: '700px', width: '100%'}} height="450" src="https://www.youtube.com/embed/0IUKAACdd6E?feature=oembed&modestbranding=1&showinfo=0&rel=0" title="How to Edit Your WordPress Site Look with WPBakery Page Builder Design Options" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

**Second:** Under WPBakery Page Builder -> Custom CSS tab you can add your own custom CSS style rules.

<div style={{textAlign: 'center'}}>
  <iframe style={{maxWidth: '700px', width: '100%'}} height="450" src="https://www.youtube.com/embed/HEP16aj5eXs?feature=oembed&modestbranding=1&showinfo=0&rel=0" title="How to Add Custom CSS to Your WordPress Site with WPBakery Page Builder" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

**Third:** You can add custom CSS rules for exact Page or Post. In the Page or Post edit window, you will see CSS button on the right top side above WPBakery Page Builder window, click it to open form where you can place custom CSS rules for this particular page or post.

<div style={{textAlign: 'center'}}>
  <iframe style={{maxWidth: '700px', width: '100%'}} height="450" src="https://www.youtube.com/embed/poE_tPJ1JQM?feature=oembed&modestbranding=1&showinfo=0&rel=0" title="How to Add Custom CSS to Your WordPress Page with WPBakery Page Builder" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

**Fourth:** If you wish to style particular content element differently, then you can add class name for exact element on your Page or Post by entering it in the "Extra CSS Class name" in the edit window of your element. Important: you can not add CSS code within "Extra CSS class name" field directly – this field is for class name only. CSS code should be stored in the proper place (your theme css files, custom css field in WPB settings page, etc.)

<div style={{textAlign: 'center'}}>
  <iframe style={{maxWidth: '700px', width: '100%'}} height="450" src="https://www.youtube.com/embed/3-BW2YPTVZU?feature=oembed&modestbranding=1&showinfo=0&rel=0" title="How to Add CSS to Element with WPBakery Page Builder for WordPress" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

**Fifth:** To override class names that are applied to WPBakery Page Builder content elements you should use WordPress [add_filter("vc_shortcodes_css_class")](/devs/hooks/filters/vc_shortcodes_css_class).

Since the 7.2 update, CSS code can be generated in Custom CSS using the [WPBakery AI](/docs/learning-more/wpbakery-ai) feature.
