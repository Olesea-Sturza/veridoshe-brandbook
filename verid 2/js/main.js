function show(id) {
  var tabs  = document.querySelectorAll('main .tab');
  var links = document.querySelectorAll('.nl');
  for (var i = 0; i < tabs.length;  i++) tabs[i].classList.remove('on');
  for (var i = 0; i < links.length; i++) links[i].classList.remove('on');
  var el = document.getElementById(id);
  if (el) el.classList.add('on');
  var lk = document.querySelector('.nl[onclick*="' + id + '"]');
  if (lk) lk.classList.add('on');
  window.scrollTo(0, 0);
}
