// Inject the css that sets up the animations
var css = '@keyframes nodeInserted{from{outline-color:#fff}to{outline-color:#000}}@-moz-keyframes nodeInserted{from{outline-color:#fff}to{outline-color:#000}}@-webkit-keyframes nodeInserted{from{outline-color:#fff}to{outline-color:#000}}@-ms-keyframes nodeInserted{from{outline-color:#fff}to{outline-color:#000}}@-o-keyframes nodeInserted{from{outline-color:#fff}to{outline-color:#000}}[data-timing]{-webkit-animation-name:nodeInserted;-moz-animation-name:nodeInserted;-ms-animation-name:nodeInserted;-o-animation-name:nodeInserted;animation-name:nodeInserted;-webkit-animation-duration:.001s;-moz-animation-duration:.001s;-ms-animation-duration:.001s;-o-animation-duration:.001s;animation-duration:.001s}';
var head = document.head || document.getElementsByTagName('head')[0];
var style = document.createElement('style');

style.type = 'text/css';
if (style.styleSheet){
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}

head.appendChild(style);

// Fired when a node is inserted that has a data-timing-category attribute
// Inspiration: http://davidwalsh.name/detect-node-insertion
var timingNodeInserted = function(event){
    if (event.animationName === 'nodeInserted') {
        var timingName = event.target.getAttribute('data-timing');
        if (timingName) {
            console.timeEnd(timingName);
            console.log('Time since load: ', window.performance.now());
        }
    }
};

document.addEventListener('animationstart', timingNodeInserted, false);
document.addEventListener('MSAnimationStart', timingNodeInserted, false);
document.addEventListener('webkitAnimationStart', timingNodeInserted, false);
