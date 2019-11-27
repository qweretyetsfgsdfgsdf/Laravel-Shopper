<?php

use Maatwebsite\Sidebar\Middleware\ResolveSidebars;
use Shopper\Framework\Http\Middleware\Authenticate;

return [

    /*
    |--------------------------------------------------------------------------
    | Route Prefix
    |--------------------------------------------------------------------------
    |
    | This prefix method can be used for the prefix of each
    | route in the administration panel. For example, you can change to 'admin'
    |
    */

    'prefix' => env('DASHBOARD_PREFIX', 'shopper'),

    /*
    |--------------------------------------------------------------------------
    | Application Currency
    |--------------------------------------------------------------------------
    |
    | This value is the default currency of your store. This value is used when the
    | orders price is given. Your can use it on your frontend
    |
    */

    'currency'  => env('CURRENCY_SYMBOL', 'XAF'),

    /*
    |--------------------------------------------------------------------------
    | Shopper Resource
    |--------------------------------------------------------------------------
    |
    | Automatically connect the stored links. For example js and css files
    |
    */

    'resources' => [
        'stylesheets' => [],
        'scripts'     => [],
    ],

    /*
    |--------------------------------------------------------------------------
    | Middleware
    |--------------------------------------------------------------------------
    |
    | Provide a convenient mechanism for filtering HTTP
    | requests entering your shopper application.
    |
    */

    'middleware' => [
        'web',
        'permission:view-backend',
        Authenticate::class,
        ResolveSidebars::class,
    ],

    /*
    |--------------------------------------------------------------------------
    | Caching
    |--------------------------------------------------------------------------
    |
    | Define the way the Sidebar should be cached.
    | The cache store is defined by the Laravel
    |
    | Available: null|static|user-based
    |
    */

    'cache' => [
        'method'   => null,
        'duration' => 1440
    ],

    /*
    |--------------------------------------------------------------------------
    | Configurations for the user
    |--------------------------------------------------------------------------
    |
    | User configuration to manage user access using spatie/laravel-permission
    |
    */

    'users' => [
        'admin_role' => 'administrator',
        'default_role' => 'user',
    ]

];
