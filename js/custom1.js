$(function ($) {
    'use strict';
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus');
    });
});