# customsubcategory=google=Google Analytics and Webmaster-Tools
# customsubcategory=slider=Bootstrap Slider
# customsubcategory=news=News Extension
# customsubcategory=social=Social Networks

plugin.tx_news {
    view {
        twb {
            partialRootPath = fileadmin/template/ext/news/
        }
    }
}

# cat=domjos_bootstrap/links/a; type=options[normal=_top,new tab=_blank]; label=External Links: Set the target for external links
domjos_bootstrap.links.ext_link = _blank

# cat=domjos_bootstrap/links/b; type=options[normal=_top,new tab=_blank]; label=Internal Links: Set the target for internal links
domjos_bootstrap.links.int_link = _top


# cat=domjos_bootstrap/cheader/a; type=string; label=Meta-Title: Set the title of the Website
domjos_bootstrap.header.title =

# cat=domjos_bootstrap/cheader/b; type=string; label=Meta-Author: Set the author of the Website
domjos_bootstrap.header.author =

# cat=domjos_bootstrap/cheader/c; type=string; label=Meta-Keywords: Set the keywords of the Website
domjos_bootstrap.header.keywords =

# cat=domjos_bootstrap/cheader/d; type=string; label=Meta-Description: Set the description of the Website
domjos_bootstrap.header.description =


# cat=domjos_bootstrap/enable/a; type=boolean; label=Meta-Data: Enable Meta-Data
domjos_bootstrap.enabled.meta = 1

# cat=domjos_bootstrap/enable/b; type=boolean; label=Spam-Protection: Enable the Spam-Protection of EMail-Addresses
domjos_bootstrap.enabled.email = 0

# cat=domjos_bootstrap/enable/c; type=boolean; label=RSS-Feed: Enable the RSS-Feed of the website
domjos_bootstrap.enabled.rss = 0

# cat=domjos_bootstrap/enable/d; type=boolean; label=Search: Enable the Search-Form
domjos_bootstrap.enabled.search = 0

# cat=domjos_bootstrap/enable/e; type=boolean; label=Resource-Compression: Enable the compression and concatenation of css and js
domjos_bootstrap.enabled.compression = 0

# cat=domjos_bootstrap/enable/f; type=boolean; label=HighlightJS: Enable HighlightJS for Code Highlighting
domjos_bootstrap.enabled.highlightjs = 0


# cat=domjos_bootstrap/cmenu/a; type=boolean; label=Bread-Crumb: Enable the Bread-Crumb und the top-menu
domjos_bootstrap.enabled.bread_crumb = 0

# cat=domjos_bootstrap/cmenu/b; type=boolean; label=Language-Menu: Enable the Language-Menu on the side next to top-menu
domjos_bootstrap.enabled.menu_lang = 0

# cat=domjos_bootstrap/cmenu/c; type=boolean; label=Social-Menu: Enable the Social-Menu in the footer
domjos_bootstrap.enabled.menu_social = 0

# cat=domjos_bootstrap/cmenu/d; type=boolean; label=Bottom-Menu: Enable the Bottom-Menu in the footer
domjos_bootstrap.enabled.menu_bottom = 0

# cat=domjos_bootstrap/cmenu/e; type=int; label=Menu-Bottom-PID: ID of the subfolder for the bottom-menu on the bottom
domjos_bootstrap.menu.menu_bottom = 0

# cat=domjos_bootstrap/cmenu/f; type=int; label=Menu-Social-PID: ID of the subfolder for the social-menu on the bottom
domjos_bootstrap.menu.menu_social = 0

# cat=domjos_bootstrap/cmenu/g; type=string; label=Exclude from Menu: PIDs excluding from Menu!
domjos_bootstrap.menu.menu_top.exclude = 


# cat=domjos_bootstrap/other/a; type=string; label=Domain: Domain-URL of the website
domjos_bootstrap.other.url = http://example.com

# cat=domjos_bootstrap/other/c; type=int; label=Search-PID: The PID for the search-plugin
domjos_bootstrap.other.search =


# cat=domjos_bootstrap/color/a; type=color; label=Menu-Color: The color of the Menu and Breadcrumb on the top of the website
domjos_bootstrap.color.top_color = #f8f8f8

# cat=domjos_bootstrap/color/b; type=double; label=Content-Transparency: The Background-Transpareny of the content (0.0 = transparent, 1.0 = white)
domjos_bootstrap.color.transparency = 0.7


# cat=domjos_bootstrap/google/a; type=boolean; label=Google-Analytics: Enable Google-Analytics
domjos_bootstrap.enabled.analytics = 0

# cat=domjos_bootstrap/google/b; type=string; label=Google-Analytics-ID: The Google-Analytics-ID
domjos_bootstrap.other.analytics =


# cat=domjos_bootstrap/slider/a; type=boolean; label=Background-Slider: Enable the Background-Slider (Pictures are in the Page-Settings as resources defined)
domjos_bootstrap.enabled.slider = 0

# cat=domjos_bootstrap/slider/b; type=boolean; label=Background-Slider-Fade: Enable the Background-Slider Fade-effect
domjos_bootstrap.enabled.slider.fade = 0

# cat=domjos_bootstrap/slider/c; type=int; label=Background-Slider-Time: Slide-Time (in ms)
domjos_bootstrap.other.slider.time = 5000


# cat=domjos_bootstrap/news/a; type=string; label=News: List of pids with News on it
domjos_bootstrap.news.pids =


# cat=domjos_bootstrap/social/a; type=boolean; label=Social Share: Enable social share
domjos_bootstrap.social.enable =

# cat=domjos_bootstrap/social/a; type=string; label=Social Share Services: Services for social share
domjos_bootstrap.social.services = telegram,twitter,linkedin