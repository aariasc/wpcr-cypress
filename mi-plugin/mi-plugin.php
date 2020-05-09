<?php

/*
Plugin Name: Mi Plugin de Pruebas
Description: Lorem Ipsum
Version: 1.0
Author: Juan Vainas
Author URI: http://jvainas.org
*/

// add_action('init', 'mi_plugin_register_shortcodes');


function mi_plugin_register_shortcodes()
{
  add_shortcode('miplugin_shortcode', 'mi_plugin_output');
}


function mi_plugin_output($args, $content = "")
{
  $output = '
    <div class="mi-plugin-wrapper">
      <h2>Aviso Especial</h2>
      <span>Hola hola gavilán si cola</span>
    </div>
  ';

  return $output;
}
