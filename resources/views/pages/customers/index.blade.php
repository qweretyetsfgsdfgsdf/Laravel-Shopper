@extends('shopper::layouts.'. config('shopper.system.theme'))
@section('title', __('Customers'))

@section('content')

    <livewire:shopper-customer-list />

@endsection
