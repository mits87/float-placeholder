(function ($) {

  'use strict';

  $.fn.floatPlaceholder = function (options) {
    var settings = $.extend({
      labelElement: '.float-label',
      labelActiveClass: 'float-label--active',
      wrapperElement: '.form-group',
      wrapperActiveClass: 'form-group--float-label',
    }, options);

    return this.each(function (index, element) {
      var $input   = $(element),
          $label   = $input.siblings(settings.labelElement),
          $wrapper = $input.closest(settings.wrapperElement);

      $input.off('focus.fp keyup.fp2').on('focus.fp keyup.fp2', function () {
        $label.addClass(settings.labelActiveClass);
      }).off('blur.fp').on('blur.fp', function () {
        $label.removeClass(settings.labelActiveClass);
      });

      $input.off('keyup.fp change.fp').on('keyup.fp change.fp', function () {
        if ($input.val() === '') {
          $wrapper.removeClass(settings.wrapperActiveClass);
        } else {
          $wrapper.addClass(settings.wrapperActiveClass);
        }
      }).trigger('keyup.fp');
    });
  };

} (jQuery));
