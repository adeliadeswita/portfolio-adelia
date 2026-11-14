@echo off
set "PATH=C:\Program Files\nodejs;%PATH%"
cd /d "%~dp0portfolio-adelia-main"
echo ========================================================
echo   Menjalankan Portfolio Next.js Development Server
echo   Akses di browser: http://localhost:3000
echo ========================================================
echo.
npm.cmd run dev
pause
