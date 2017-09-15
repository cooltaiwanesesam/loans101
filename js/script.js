$(function() {
    var profile = document.getElementById("sticky"),
        anchor = profile.getElementsByTagName("a"),
        current = window.location;

    console.log("anchor = ",anchor,"current = ",current);

    for (var i = 0; i < anchor.length; i++) {
    if(anchor[i].href == current) {
        anchor[i].className = "active";
    }
}
});

(function($){
    // Caption
    $('.article-entry').each(function(i){
        $(this).find('img').each(function(){
            if ($(this).parent().hasClass('fancybox')) {
                return;
            }
            var alt = this.alt;
            if (alt) {
                $(this).after('<span class="caption">' + alt + '</span>');
            }

            $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox"></a>');
        });

        $(this).find('.fancybox').each(function(){
            $(this).attr('rel', 'article' + i);
        });
    });
    if ($.fancybox){
        $('.fancybox').fancybox();
    }

    // Profile card
    $(document).on('click', function () {
        $('#profile').removeClass('card');
    }).on('click', '#profile-anchor', function (e) {
        e.stopPropagation();
        $('#profile').toggleClass('card');
    }).on('click', '.profile-inner', function (e) {
        e.stopPropagation();
    });

})(jQuery);


// -------------------------------------------------------
// Repayment calculator
'use strict';

// Pmt = (P*(((1+i/200)^(1/6)-1))/(1-(((1+i/200)^(1/6)))^-(n*12)))
function payment(amount, rate, frequency, period) {
  const P = parseFloat(amount);
  const n = parseInt(period, 10);
  const accelerated = /a/.test(frequency)
  frequency = parseInt(frequency.replace('a',''), 10);

  let i = parseFloat(rate) / 200;
  let Pmt;

  if (accelerated) {
    i = Math.pow(1 + i, 1 / 6);
    Pmt = P * ((i - 1) / (1 - Math.pow(i, -12 * n)));
    Pmt = (Pmt * 13) / frequency;
  }
  else {
    i = Math.pow(1 + i, 1 / (frequency / 2));
    Pmt = P * ((i - 1) / (1 - Math.pow(i, -frequency * n)));
  }

  return Pmt;
}

(function () {
  const amount = $('[name="amount"]');
  const rate = $('[name="rate"]');
  const freq = $('[name="freq"]');
  const amort = $('[name="amort"]');

  function update() {
    const pmt = payment(amount.value, rate.value, freq.value, amort.value);
     output.value = `$${pmt.toFixed(2)}`;
  }

  function $(selector) {
    var el = document.querySelectorAll(selector)
    if (el.length < 2) {
      return el[0]
    }
    return el
  }

  update();
  document.addEventListener('change', update, true);
  document.addEventListener('keyup', update, true);
})();


// ===================== STAMP DUTY CALCULATOR ====================
