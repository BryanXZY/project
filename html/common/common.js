$(document).ready(function() {

  //移动端处理click300ms延迟
  if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
    }, {passive: false});
  }
});
