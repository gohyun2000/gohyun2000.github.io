@echo off
REM cv.html 을 고친 뒤 이 파일을 더블클릭하면 assets\cv.pdf 가 다시 만들어집니다.

setlocal
set "CHROME=%ProgramFiles%\Google\Chrome\Application\chrome.exe"
if not exist "%CHROME%" set "CHROME=%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe"
if not exist "%CHROME%" (
  echo [!] Chrome / Edge 를 찾지 못했습니다.
  echo     cv.html 을 브라우저로 열고 Ctrl+P - "PDF로 저장" 하셔도 됩니다.
  pause & exit /b 1
)

"%CHROME%" --headless=new --disable-gpu --no-sandbox --no-pdf-header-footer ^
  --user-data-dir="%TEMP%\cvbuild" ^
  --print-to-pdf="%~dp0assets\cv.pdf" ^
  "%~dp0cv.html"

if exist "%~dp0assets\cv.pdf" (
  echo [OK] assets\cv.pdf 생성 완료
) else (
  echo [!] 생성 실패
)
pause
