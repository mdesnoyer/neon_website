 "use strict"; 

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function neonJumpHandler(e) {
    if (e) {
        var url = e.target.href,
            hash = url.substring(url.indexOf('#'))
        ;
        if (hash.length > 0) {
            Jump.jump(hash, {
                duration: 1000
            });
        }
    }
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// Entry point
var Jump = new Jump(),
    neonJumpAnchors = document.getElementsByClassName('js-neon-jump'),
    i = 0
;

while (i < neonJumpAnchors.length) {
    neonJumpAnchors[i++].addEventListener('click', neonJumpHandler, false);
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
