<?php
require_once("Smarty.class.php");
class miSmarty extends Smarty
{
    private string $app, $rutaBase;
    public function __construct($app)
    {
        parent::__construct();
        $this->app = $app;
        $this->rutaBase = $rutaBase = "/var/www/phpdata/smarty/" . $app;
        $this->template_dir = "$rutaBase/templates/";
        $this->compile_dir = "$rutaBase/templaces_c/";
        $this->config_dir = "$rutaBase/configs/";
        $this->cache_dir = "$rutaBase/cache/";
        $this->assign('css_dir', '../view/css');
        $this->assign('imgs_dir', '../view/imgs');
    }
    public function getRutaBase()
    {
        return $this->rutaBase;
    }
    public function getApp()
    {
        return $this->app;
    }
}