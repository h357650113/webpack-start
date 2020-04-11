// import _ from 'lodash';
import { cube } from './math.js';
import printMe from './print.js';

function component() {
    // var element = document.createElement('div');
    // var btn = document.createElement('button');

    var element = document.createElement('pre');

    element.innerHTML = [ 
        'Hello webpack!',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n');
  
    // 字符串拼接
    // element.innerHTML = _.join(['Hello', 'webpack', 'test 111'], ' ');

    // btn.innerHTML = 'Click me and check the console!';
    // btn.onclick = printMe;
 
    // element.appendChild(btn);

    return element;
  }
  
document.body.appendChild(component());

if (module.hot) {
    console.log('===============', module)

    module.hot.accept('./print.js', function() {

        console.log('Accepting the updated printMe module!');
        printMe();

    })
}