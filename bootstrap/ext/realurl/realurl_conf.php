<?php
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl'] = array (
    '_DEFAULT' => array (
        'init' => array (
            'enableCHashCache' => true,
            'appendMissingSlash' => 'ifNotFile,redirect',
            'adminJumpToBackend' => true,
            'enableUrlDecodeCache' => true,
            'enableUrlEncodeCache' => true,
            'emptyUrlReturnValue' => '/',
        ),
        'pagePath' => array (
            'type' => 'user',
            'userFunc' => 'EXT:realurl/class.tx_realurl_advanced.php:&tx_realurl_advanced->main',
            'spaceCharacter' => '-',
            'languageGetVar' => 'L',
            'rootpage_id' => 1,
            'expireDays' => 3,
        ),
        'fileName' => array (
            'defaultToHTMLsuffixOnPrev' => true,
            'acceptHTMLsuffix' => 1,
            'index' => array (
                'print' => array (
                    'keyValues' => array (
                        'type' => 98,
                    ),
                ),
                'rss.xml' => array (
                    'keyValues' => array (
                        'type' => '100',
                    ),
                ),
            ),
        ),
        'preVars' => array (
            0 => array (
               'GETvar' => 'L',
               'valueMap' => array (
                   'en' => 1,
                   'de' => 2
                ),
                'noMatch' => 'bypass',
                'valueDefault' => 'de',
            ),
        ),
        'postVarSets' => array (
            '_DEFAULT' => array (
                'article' => array (
                    array (
                        'GETvar' => 'tx_ttnews[tt_news]',
                        'lookUpTable' => array (
                            'table' => 'tt_news',
                            'id_field' => 'uid',
                            'alias_field' => 'title',
                            'addWhereClause' => ' AND NOT deleted AND NOT hidden',
                            'useUniqueCache' => 1,
                            'useUniqueCache_conf' => array (
                                'strtolower' => 1,
                                'spaceCharacter' => '-',
                            ),
                        ),
                    ),
                    array(
                      'GETvar' => 'tx_t3extblog_blogsystem[year]',
                    ),
                    array(
                      'GETvar' => 'tx_t3extblog_blogsystem[month]',
                    ),
                    array(
                      'GETvar' => 'tx_t3extblog_blogsystem[day]',
                    ),
                    array(
                      'GETvar' => 'tx_t3extblog_blogsystem[post]',
                      'lookUpTable' => array(
                        'table' => 'tx_t3blog_post',
                        'id_field' => 'uid',
                        'alias_field' => 'title',
                        'addWhereClause' => ' AND NOT deleted AND NOT hidden',
                        'useUniqueCache' => 1,
                        'useUniqueCache_conf' => array(
                          'strtolower' => 1,
                          'spaceCharacter' => '-',
                        ),
                        'enable404forInvalidAlias' => 1,
                        'autoUpdate' => 1,
                        'expireDays' => 180,
                        'languageGetVar' => 'L',
                        'languageExceptionUids' => '',
                        'languageField' => 'sys_language_uid',
                        'transOrigPointerField' => 'l18n_parent',
                      ),
                    ),
                ),
                't3extblog-action' => array(
                  array(
                    'GETvar' => 'tx_t3extblog_blogsystem[action]',
                    'noMatch' => 'bypass',
                  ),
                ),
                'comment' => array(
                  array(
                    'GETvar' => 'tx_t3extblog_blogsystem[controller]',
                    'noMatch' => 'bypass',
                    'valueMap' => array(
                      'new' => 'Comment',
                    ),
                  ),
                ),
                'permalink' => array(
                  array(
                    'GETvar' => 'tx_t3extblog_blogsystem[permalinkPost]',
                  ),
                ),
                'preview' => array(
                  array(
                    'GETvar' => 'tx_t3extblog_blogsystem[previewPost]',
                  ),
                ),
                'tags' => array(
                  array(
                    'GETvar' => 'tx_t3extblog_blogsystem[tag]',
                  ),
                ),
                'category' => array(
                  array(
                    'GETvar' => 'tx_t3extblog_blogsystem[category]',
                    'lookUpTable' => array(
                      'table' => 'tx_t3blog_cat',
                      'id_field' => 'uid',
                      'alias_field' => 'catname',
                      'addWhereClause' => ' AND deleted !=1 AND hidden !=1',
                      'useUniqueCache' => 1,
                      'useUniqueCache_conf' => array(
                        'strtolower' => 1,
                        'spaceCharacter' => '-',
                      ),
                      'enable404forInvalidAlias' => 1,
                      'autoUpdate' => 1,
                      'expireDays' => 180,
                      'languageGetVar' => 'L',
                      'languageExceptionUids' => '',
                      'languageField' => 'sys_language_uid',
                      'transOrigPointerField' => 'l18n_parent',
                    )
                  )
                ),
                'page' => array(
                  array(
                    'GETvar' => 'tx_t3extblog_blogsystem[@widget_0][currentPage]',
                  ),
                ),
                'subscription' => array(
                  array(
                    'GETvar' => 'tx_t3extblog_subscriptionmanager[action]',
                    'valueMap' => array(
                      'confirmation' => 'confirm',
                      'delete' => 'delete',
                      'error' => 'error',
                      'logout' => 'logout',
                    ),
                    'noMatch' => 'bypass',
                  ),
                  array(
                    'GETvar' => 'tx_t3extblog_subscriptionmanager[code]',
                  ),
                ),
              ),
        ),
    ),
);
?>
