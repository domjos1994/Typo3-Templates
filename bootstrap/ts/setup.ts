# create top menu
lib.menu-top = COA
lib.menu-top {
    20 = HMENU
    20.excludeUidList = {$domjos_bootstrap.menu.menu_top.exclude}
    20 {
        1 = TMENU
        1 {
            expAll = 1
            accessKey = 1

            NO = 1
            NO {
                ATagTitle.field = title
                wrapItemAndSub = <li>|</li>
            }

            CUR < .NO
            CUR {
                wrapItemAndSub = <li class="active">|</li>
            }

            ACT < .CUR

            IFSUB = 1
            IFSUB {
                ATagTitle.field = title
                ATagParams = class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"
                linkWrap = |<b class="caret"></b>
                ATagBeforeWrap = 1
                wrapItemAndSub = <li class="dropdown">|</li>
            }

            ACTIFSUB < .IFSUB
            ACTIFSUB {
                wrapItemAndSub = <li class="dropdown active">|</li>
            }

            CURIFSUB < .ACTIFSUB
        }

        2 < .1
        2 {
            wrap = <ul class="dropdown-menu">|</ul>

            // because default Bootstrap 3 doesn't support more submenu levels:
            IFSUB >
            ACTIFSUB >
            CURIFSUB >

            SPC = 1
            SPC {
                wrapItemAndSub.cObject = COA
                wrapItemAndSub.cObject {
                    // no divider, if first menu item on this level:
                    10 = TEXT
                    10.value = <li class="dropdown-header">|</li>
                    10.if.value.data = register:count_MENUOBJ
                    10.if.equals = 1

                    // otherwise:
                    20 = TEXT
                    20.value = <li class="divider"></li><li class="dropdown-header">|</li>
                    20.if.value.data = register:count_MENUOBJ
                    20.if.equals = 1
                    20.if.negate = 1
                }
            }
        }
    }
}


# create sub menu
lib.menu-sub = COA
lib.menu-sub {
    20 = HMENU
    20 {
      noBlur = 1
      special = directory
      special.value.data = leveluid:2
      entryLevel = 2
        1 = TMENU
        1 {
            expAll = 1
            accessKey = 1
            wrap = <div id="sub-menu"><nav class="navbar navbar-default"><div class="container-fluid"><ul class="nav navbar-nav">|</ul></div></nav></div>
            NO = 1
            NO {
                ATagTitle.field = title
                wrapItemAndSub = <li>|</li>
            }

            CUR < .NO
            CUR {
                wrapItemAndSub = <li class="active">|</li>
            }

            ACT < .CUR

            IFSUB = 1
            IFSUB {
                ATagTitle.field = title
                ATagParams = class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"
                linkWrap = |<b class="caret"></b>
                ATagBeforeWrap = 1
                wrapItemAndSub = <li class="dropdown">|</li>
            }

            ACTIFSUB < .IFSUB
            ACTIFSUB {
                wrapItemAndSub = <li class="dropdown active">|</li>
            }

            CURIFSUB < .ACTIFSUB
        }

        2 < .1
        2 {
            wrap = <ul class="dropdown-menu">|</ul>

            // because default Bootstrap 3 doesn't support more submenu levels:
            IFSUB >
            ACTIFSUB >
            CURIFSUB >

            SPC = 1
            SPC {
                wrapItemAndSub.cObject = COA
                wrapItemAndSub.cObject {
                    // no divider, if first menu item on this level:
                    10 = TEXT
                    10.value = <li class="dropdown-header">|</li>
                    10.if.value.data = register:count_MENUOBJ
                    10.if.equals = 1

                    // otherwise:
                    20 = TEXT
                    20.value = <li class="divider"></li><li class="dropdown-header">|</li>
                    20.if.value.data = register:count_MENUOBJ
                    20.if.equals = 1
                    20.if.negate = 1
                }
            }
        }
    }
}


[globalVar = LIT:1 = {$domjos_bootstrap.enabled.menu_lang}]
lib.menu_lang = HMENU
lib.menu_lang {
    special = language
    special.value = 2,1
    special.normalWhenNoLanguage = 2
    wrap = <ul id="lang-menu" class="nav navbar-nav navbar-right">|</ul>

    1 = TMENU
    1 {
        noBlur = 1

        NO = 1
        NO {
            linkWrap =<li>|</li>
            stdWrap.override = <img title="german" alt="german" src="{$domjos_bootstrap.other.url}fileadmin/template/img/de.png" width="16" height="11"> || <img title="english" alt="english" src="{$domjos_bootstrap.other.url}fileadmin/template/img/gb.png" width="16" height="11">
        }

        ACT < .NO
        ACT {
            ATagParams = class="act"
        }

        USERDEF1 < .NO
        USERDEF1 {
            doNotLinkIt = 1
        }

        USERDEF2 < .ACT
        USERDEF2 {
            doNotLinkIt = 1
        }
    }
}
[else]
lib.menu_lang = TEXT
lib.menu_lang.value
[global]

[globalVar = LIT:1 = {$domjos_bootstrap.enabled.bread_crumb}]
lib.breadcrumb = HMENU
lib.breadcrumb {
    special = rootline
    special.range = 1|-1
    wrap = <ol class="breadcrumb"><li><span class="glyphicon glyphicon-home"/> Domjos</li>|</ol>

    1 = TMENU
    1.accessKey = 1
    1.target = _top
    1.NO {
        stdWrap.htmlSpecialChars = 1
        linkWrap = <li>|</li>
        doNotLinkIt = |*| 0 |*| 1
    }

    1.ACT < .1.NO
    1.ACT {
      linkWrap = <li class="selected">|</li>
    }
}
[else]
lib.breadcrumb = TEXT
lib.breadcrumb.value = 
[global]

[globalVar = LIT:1 = {$domjos_bootstrap.enabled.menu_bottom}]
lib.menu-bottom = COA
lib.menu-bottom {
  20 = HMENU
  20 {
    noBlur = 1
    special = directory
    special.value = {$domjos_bootstrap.menu.menu_bottom}
    1 = TMENU
    1 {
      expAll = 1
      accessKey = 1
      wrap = <ul class="nav nav-pills nav-stacked nav-justified">|</ul>
      NO = 1
      NO {
          ATagTitle.field = title
          wrapItemAndSub = <li role="presentation">|</li>
      }

      ACT < .NO
      ACT {
        wrapItemAndSub = <li role="presentation" class="active">|</li>
      }

      CUR < .ACT
    }
  }
}
[else]
lib.menu-bottom = TEXT
lib.menu-bottom.value
[global]

[globalVar = LIT:1 = {$domjos_bootstrap.enabled.menu_social}]
lib.menu-social = COA
lib.menu-social {
  20 = HMENU
  20 {
    noBlur = 1
    special = directory
    special.value = {$domjos_bootstrap.menu.menu_social}
    1 = TMENU
    1 {
      expAll = 1
      accessKey = 1
      wrap = <ul class="nav nav-pills nav-stacked nav-justified">|</ul>
      NO = 1
      NO {
          ATagTitle.field = title
          wrapItemAndSub = <li role="presentation">|</li>
      }

      ACT < .NO
      ACT {
        wrapItemAndSub = <li role="presentation" class="active">|</li>
      }

      CUR < .ACT
    }
  }
}
[else]
lib.menu-social = TEXT
lib.menu-social.value
[global]

[globalVar = LIT:1 = {$domjos_bootstrap.enabled.slider}]
lib.slider = COA

[globalVar = LIT:1 = {$domjos_bootstrap.enabled.slider.fade}]
lib.slider.wrap = <div id="carousel-slider" class="carousel slide carousel-fade" data-ride="carousel" data-interval="{$domjos_bootstrap.other.slider.time}">|</div>
[else]
lib.slider.wrap = <div id="carousel-slider" class="carousel slide" data-ride="carousel" data-interval="{$domjos_bootstrap.other.slider.time}">|</div>
[global]
lib.slider{
  10 = FILES
  10{
    stdWrap.wrap = <div class="carousel-inner">|</div>
    references{
      data = levelmedia:-1, slide
      treatIdAsReference = 1
    }
    renderObj = COA
    renderObj {
      wrap = <div class="item active">|</div>|*|<div class="item">|</div>
      4 = IMAGE
      4{
        stdWrap.wrap = |
        stdWrap.required = 1
        file.import.data = file:current:originalUid
        altText = background-image
        # hier croppe ich mir die Bilder nochmal zurecht und habe mir dafür 2 Konstanten erstellt
        file.width = {$dis.tpitb.silderWidth}c
        file.height = {$dis.tpitb.silderHeight}c
        # Setze den Link der im Bild eingestellt ist.
        stdWrap.typolink.parameter.data = file:current:link
      }
      # Hier gebe ich den Titel und die Beschreibung für das Bild aus. Das Ganze muss dann noch per CSS nach Wünschen gestylt werden.
      10 = COA
      10{
        wrap = <div class="carousel-caption">|</div>
        stdWrap.required = 1
        stdWrap.typolink.parameter.data = file:current:link
        4 = TEXT
        4{
            wrap = <p>|</p>
            data = file:current:title
        }
        8 = TEXT
        8{
            wrap = <p>|</p>
            data = file:current:description
        }
      }
    }
  }
}
[else]
lib.slider = TEXT
lib.slider.value =
[global]

lib.stdheader.5.date >
lib.stdheader.5.strftime = %H:%M, %e. %b %Y

#configuration
config {
  pageTitleFirst = 1
  noPageTitle = 2
  baseURL = {$domjos_bootstrap.other.url}
  simulateStaticDocuments = 0
  tx_realurl_enable = 1
  extTarget = _blank
  index_enable = 1
  index_externals = 0
  index_metatags = 0
  language = de
  locale_all = de_DE
  language = de
  locale_all = de_DE.iso88591
  config.sys_language_uid = 0
  config.sys_language_overlay = 1
  config.linkVars=L
}
  
  config.concatenateCss = 1 
config.concatenateJs = 1 

[globalVar = LIT:1 = {$domjos_bootstrap.enabled.email}]
config.spamProtectEmailAddresses = 1
config.spamProtectEmailAddresses_atSubst = (at)
config.spamProtectEmailAddresses_lastDotSubst = (dot)
[global]

[globalVar = LIT:1 = {$domjos_bootstrap.enabled.compression}]
config.cache_clearAtMidnight = 1
config.no_cache = 0
[global]

[globalVar = GP:L = 1]
config.sys_language_uid = 1
config.language = en
config.locale_all = en_US
config.htmlTag_langKey = en-US
[global]

plugin.tx_indexedsearch {
    _DEFAULT_PI_VARS.lang = 0
    show.rules = 0
    blind.sections = 0
    blind.order = 0
    blind.lang = 0
} 

plugin.tx_seo {
    config {
        xmlSitemap {
            sitemaps {
                pages { 
                    config {
                        #excludedDoktypes = 9818, 500
                        additionalWhere = AND no_index = 0
                    }
                }
              	news {
                    provider = TYPO3\CMS\Seo\XmlSitemap\RecordsXmlSitemapDataProvider
                    config {
                        table = tx_news_domain_model_news
                        sortField = sorting
                        lastModifiedField = tstamp
                        recursive = 1
                        pid = 155
                        url {
                            pageId = 130
                            fieldToParameterMap {
                                uid = tx_news_pi1[news]
                            }
                            additionalGetParameters {
                                tx_news_pi1.controller = News
                                tx_news_pi1.action = detail
                            }
                            useCacheHash = 1
                        }
                    }
                }
            }
        }
    }
}

# default page-object
page = PAGE
page.typeNum = 0
page.shortcutIcon = fileadmin/template/img/favicon.ico
page.config.locale_all = de_DE.UTF-8

page.CSS_inlineStyle (
   div#wrapper div#menu-top {
      background-color: {$domjos_bootstrap.color.top_color};
   }
   div#wrapper div#breadcrumb {
      background-color: {$domjos_bootstrap.color.top_color};
   }
   div#wrapper div#scrollable-content {
      background-color: rgba(255,255,255, {$domjos_bootstrap.color.transparency});
   }
)

page.includeCSS.file1 = fileadmin/template/css/reset.css
page.includeCSS.file1.media = all
page.includeCSS.file2 = https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css
page.includeCSS.file2.disableCompression = 1 
page.includeCSS.file2.excludeFromConcatenation = 1 
page.includeCSS.file2.media = all
page.includeCSS.file3 = fileadmin/template/css/style.css
page.includeCSS.file3.media = all

page.includeJS.file1 = https://code.jquery.com/jquery.min.js
page.includeJS.file2 = https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.bundle.min.js

page.includeJSFooter.file1 = https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js
page.includeJSFooter.file2 = fileadmin/template/js/custom.js

page.headerData {
    10 = TEXT
    10 {
      field = title
      noTrimWrap = |<title>| - {$domjos_bootstrap.header.title}</title>|
    }
    20 = TEXT
    20.value = <meta name="viewport" content="width=device-width, initial-scale=1">
    50 = TEXT
    50.value = <meta name="author" content="{$domjos_bootstrap.header.author}">
    60 = TEXT
    60.value = <link rel="icon" href="fileadmin/template/img/favicon.ico" type="image/png" />
    90 = TEXT
    90.value = <link rel="apple-touch-icon" href="fileadmin/template/img/logo.jpg"/>
}

[globalVar = LIT:1 = {domjos_bootstrap.enabled.meta}]
page.headerData {
    30 = TEXT
    30.value = <meta name="description" content="{$domjos_bootstrap.header.description}">
    40 = TEXT
    40.value = <meta name="keywords" content="{$domjos_bootstrap.header.keywords}">
}
[global]

[globalVar = LIT:1 = {$domjos_bootstrap.enabled.rss}]
page.headerData.70 = TEXT
page.headerData.70.value = <link rel="alternate" type="application/rss+xml" title="Domjos - RSS Feed" href="{$domjos_bootstrap.other.url}rss.xml"/>
[global]

[globalVar = LIT:1 = {$domjos_bootstrap.enabled.analytics}]
page.headerData.80 = TEXT
page.headerData.80.value (
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-67426926-5"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '{$domjos_bootstrap.other.analytics}');
    </script>
)
[global]

page.10 = TEMPLATE
page.10 {
    template = FILE
    template.file = fileadmin/template/template.html
    workOnSubpart = DOCUMENT_BODY

    marks.PAGE_TITLE = TEXT
    marks.PAGE_TITLE.value = {$domjos_bootstrap.header.title}

    marks.PAGE_LINK = TEXT
    marks.PAGE_LINK.value = {$domjos_bootstrap.other.url}

    marks.PAGE_HEADER = TEXT
    marks.PAGE_HEADER.data = page : title

    marks.MENU_TOP < lib.menu-top
    marks.SUB_MENU < lib.menu-sub
    marks.BREADCRUMB < lib.breadcrumb
    marks.MENU_LANG < lib.menu_lang

    marks.CONTENT_MAIN < styles.content.get
    marks.CONTENT_MAIN.select.where = colPos = 0

    marks.CONTENT_SUB < styles.content.get
    marks.CONTENT_SUB.select.where = colPos = 2

    marks.FOOTER_LEFT < lib.menu-bottom
    marks.FOOTER_SOCIAL < lib.menu-social

    marks.BACKGROUND_SLIDER < lib.slider
}

[globalVar = LIT:1 = {$domjos_bootstrap.enabled.search}]
page.10.marks.SEARCH = TEMPLATE
page.10.marks.SEARCH.template = FILE
page.10.marks.SEARCH.template.file = fileadmin/template/ext/search/template.html
page.10.marks.SEARCH.marks.PID = TEXT
page.10.marks.SEARCH.marks.PID.value = {$domjos_bootstrap.other.search}
[else]
page.10.marks.SEARCH= TEXT
page.10.marks.SEARCH.value =
[global]
