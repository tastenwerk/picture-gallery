<?php
/**
 * @package PictureGallery
 * @version 1.0
 */
/*
Plugin Name: PictureGallery
Plugin URI: https://github.com/tastenwerk/picture-gallery
Description: Picture Gallery for Wordpress
Author: DR (TASTENWERK)
Version: 1.0
Author URI: http://tastenwerk.com
*/

defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

if ( ! function_exists( 'get_plugins' ) ) {
  require_once ABSPATH . 'wp-admin/includes/plugin.php';
}

class PictureGallery{

  function __construct() {   
    add_action( 'init', array( $this, 'add_js_and_css_files' ) );
    add_action( 'admin_init', array( $this, 'insert_gallery' ) );
  }

  public function insert_gallery(){
    // echo substr( require( "./views/icons_gallery.php" ), 0, -3);
  }

  public function add_js_and_css_files(){
    wp_enqueue_script('modal', plugin_dir_url( __FILE__ ).'js/modal.js', array( 'jquery' ) );
    wp_enqueue_style('modal_css', plugin_dir_url( __FILE__ ).'css/modal.css');
  }

}

new PictureGallery();

?>
