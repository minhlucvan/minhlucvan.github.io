var AsweomeSubmit = function(selector) {
    if (!selector) return;
    if (typeof selector === 'string') {
        var el = document.querySelector(selector)
    } else {
        var el = selector;
    }
    var defaultState = {
        className: '',
        frontClass: '',
        frontText: '',
        frontIcon: '',
        backText: '',
        backIcon: '',
        live: 0
    };

    var states = {
        primary: {
            text: 'Submit',
            frontIcon: 'icon-arrow'
        },
        confrim: {
            className: 'confrim',
            frontClass: 'circle',  
            backText: 'Try again?',
            icon: 'icon-repeat'
        },
        process: {
            className: 'process',
            frontClass: 'circle',
            frontIcon: 'icon-bounce',
            backIcon: 'icon-cancel'
        },
        error: {
            className: 'error',
            frontClass: 'circle',
            backText: 'Oops! Something went wrong.',
            icon: 'icon-cancel'
        },
        success: {
            className: 'success',
            backText: 'Success',
            backIcon: 'icon-ok',
            live: 3000
        }
    };


    var staticClass = el.getAttribute('class');
    var inner = el.querySelector('.inner');
    var front = inner.querySelector('.front');
    var frontContent = front.querySelector('.content');
    var frontIcon = front.querySelector('[class^=icon-]');
    var back = inner.querySelector('.back');
    var backContent = back.querySelector('.content');
    var backIcon = back.querySelector('[class^=icon-]');

    var instance = function(el) {
        var state = 'primary';
        var value = 0;
        var error = false;

        var pushState = function(nextState) {
            if (!states[nextState]) return;
            var data = Object.assign({}, defaultState, states[nextState]);
            state = nextState;
            inner.className = 'inner ' + nextState;
            front.className = 'front ' + data.frontClass;
            frontContent.innerHTML = data.text || data.frontText;
            frontIcon.className = data.icon || data.frontIcon;
            backContent.innerHTML = data.backText;
            backIcon.className = data.backIcon;
        }

        inner.addEventListener('click', function(){
            switch(state){
              case 'error': { 
                el.AWE.confrim(); 
              } break;
              case 'confrim': {
                el.AWE.reset(); 
              } break;
              case 'success': {
                el.AWE.reset(); 
              } break;
            }
         })
      
      this.state = function(){
        return state;
      }
      
        this.reset = function() {
            pushState('primary');
        }

        this.process = function(value) {
            var prBar = backContent.querySelector('.progress-bar');
            if(!prBar) return;
            prBar.setAttribute('data-value', value);
            prBar.querySelector('.value').style.width = '' + value + '%';
        }

        this.success = function() {
            pushState('success');
            var that = this;
          
            setTimeout(function() {
              that.reset();
            }, 3000);
        }

        this.submit = function() {
            if (state !== 'primary') return;
            pushState('process');
            backContent.innerHTML = '<div class="progress-bar" data-value="0"><div class="value"></div></div>';


            var that = this;
            var value = 0;

            backIcon.onclick = function(e) {
                e.stopPropagation();
                e.preventDefault();
                that.cancel();
            }
        }

        this.cancel = function() {
            if (state !== 'process') return;
            this.reset();
        }

        this.error = function() {
            pushState('error');
        }
        
        this.confrim = function(){
          pushState('confrim');
        }
    }


    el.AWE = new instance(el);

    return el;
}

var button = AsweomeSubmit('.awesome-submit');
var value = 0;

function grow() {
  if(button.AWE.state() == 'error') return;
  
    button.AWE.process(value += 2);
    if (value <= 100) {
        setTimeout(grow, 200);
    } else {
     button.AWE.success();
    }
}

button.addEventListener('click', function(){
  if(this.AWE.state() != 'primary') return;
  value = 0;
  var willFail = (Math.random() > .6) ? false : true;
  this.AWE.submit();
  var _this = this;
  
  setTimeout(grow, 1000);
  if(!willFail) return;
  setTimeout(function(){
    _this.AWE.error();
  }, 8000)
});