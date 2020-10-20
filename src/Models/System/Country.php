<?php

namespace Shopper\Framework\Models\System;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'name_official',
        'cca3',
        'cca2',
        'flag',
        'latitude',
        'longitude',
        'currencies',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
      'currencies' => 'array',
    ];

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * Get the table associated with the model.
     *
     * @return string
     */
    public function getTable()
    {
        return shopper_table('system_countries');
    }
}