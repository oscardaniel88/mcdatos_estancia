var tl813v = sf14gv;
(function () {
    var tl813 = document.createElement('script'); tl813.type = 'text/javascript'; tl813.async = true;

    if (tl813v < 21000 && tl813v != 13070) {
        tl813.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + '4.tl813.com/tl813.js';
    }
    else if (tl813v >= 21000 && tl813v <= 30000 && tl813v != 26249) {
        tl813.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 't2.trackalyzer.com/tl813.js';
    }
    else { tl813.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + '1.tl813.com/tl813.js'; }

    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(tl813, s);
})();