// 다크모드 토글 + 푸터 연도 자동 갱신. 이 파일은 손댈 일이 거의 없습니다.

(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');

  // 이전에 고른 테마가 있으면 복원 (없으면 OS 설정을 따라감)
  var saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) { /* 사생활 보호 모드 */ }
  if (saved === 'light' || saved === 'dark') {
    root.setAttribute('data-theme', saved);
  }

  if (btn) {
    btn.addEventListener('click', function () {
      var isDark = root.getAttribute('data-theme') === 'dark' ||
        (!root.hasAttribute('data-theme') &&
          window.matchMedia('(prefers-color-scheme: dark)').matches);
      var next = isDark ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) { /* 무시 */ }
    });
  }

  var yearEl = document.getElementById('year');
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }
})();
