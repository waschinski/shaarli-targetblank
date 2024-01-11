<?php

/**
 * Shaarli targetblank Plugin
 *
 * @author Andreas Waschinski
 * @link
 */

use Shaarli\Config\ConfigManager;
use Shaarli\Plugin\PluginManager;

function hook_targetblank_render_footer(array $data, ConfigManager $conf): array
{
    $data['js_files'][] = PluginManager::$PLUGINS_PATH . '/targetblank/targetblank.js';
    return $data;
}
