# Bitburner Simplified Chinese Patch - installer
# For Bitburner (Steam) version 3.0.1 only. Your files are only modified when they match the official originals.
# Usage:  .\install.ps1 [-GameDir "X:\path\to\Bitburner"]
param([string]$GameDir = "")
$ErrorActionPreference = 'Stop'
try { [Console]::OutputEncoding = [Text.Encoding]::UTF8 } catch {}

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path

function Find-Game {
  if ($GameDir) { return $GameDir }
  $cands = @()
  foreach ($d in (Get-PSDrive -PSProvider FileSystem).Root) {
    $cands += (Join-Path $d 'Steam\steamapps\common\Bitburner')
    $cands += (Join-Path $d 'SteamLibrary\steamapps\common\Bitburner')
  }
  foreach ($c in $cands) { if ($c -and (Test-Path (Join-Path $c 'resources\app\package.json'))) { return $c } }
  return $null
}

$game = Find-Game
if (-not $game -or -not (Test-Path (Join-Path $game 'resources\app\package.json'))) {
  Write-Host '[X] Bitburner game folder not found. Re-run with:  .\install.ps1 -GameDir "D:\SteamLibrary\steamapps\common\Bitburner"' -ForegroundColor Red
  exit 1
}
$app = Join-Path $game 'resources\app'
$pkg = Get-Content (Join-Path $app 'package.json') -Raw | ConvertFrom-Json
if ($pkg.version -ne '3.0.1') {
  Write-Host "[X] This patch is built for Bitburner 3.0.1 (found: $($pkg.version)). Aborted - your game was NOT modified." -ForegroundColor Red
  exit 1
}
Write-Host "[OK] Found Bitburner 3.0.1 at: $game"

# ---- 1) renderer layer: zh-locale + index.html tag insertion ----
$htmlPath = Join-Path $app 'index.html'
$html = [IO.File]::ReadAllText($htmlPath)
if ($html -notmatch 'dist/vendor\.bundle\.js') {
  Write-Host '[X] index.html anchor (dist/vendor.bundle.js) not found. Aborted - nothing was modified.' -ForegroundColor Red
  exit 1
}
if ($html -match 'zh-locale/localize\.js') {
  Write-Host '[..] index.html already patched, skipping'
} else {
  [IO.File]::Copy($htmlPath, "$htmlPath.bak-zh", $false)
  $tagList = @(
    'dist/zh-locale/localize.js',
    'dist/zh-locale/dict-core.js',
    'dist/zh-locale/dict-names.js',
    'dist/zh-locale/dict-pages1.js',
    'dist/zh-locale/dict-pages2.js',
    'dist/zh-locale/dict-pages3.js',
    'dist/zh-locale/dict-pages4.js',
    'dist/zh-locale/dict-pages5.js',
    'dist/zh-locale/dict-options.js',
    'dist/zh-locale/dict-runtime.js',
    'dist/zh-locale/dict-runtime2.js',
    'dist/zh-locale/dict-terminal.js',
    'dist/zh-locale/dict-docs1.js',
    'dist/zh-locale/dict-docs2.js',
    'dist/zh-locale/dict-docs3.js',
    'dist/zh-locale/dict-docs4.js',
    'dist/zh-locale/dict-docs5.js',
    'dist/zh-locale/dict-tutorial.js'
  )
  $tags = ($tagList | ForEach-Object { "    <script defer src=`"$_`"></script>" }) -join "`n"
  $html2 = $html -replace '(<script defer src="dist/vendor\.bundle\.js">)', "$tags`n    `$1"
  [IO.File]::WriteAllText($htmlPath, $html2, (New-Object Text.UTF8Encoding $false))
  Write-Host '[OK] index.html patched (original backed up to index.html.bak-zh)'
}

New-Item -ItemType Directory -Force (Join-Path $app 'dist\zh-locale') | Out-Null
Copy-Item (Join-Path $scriptDir 'payload\zh-locale\*.js') (Join-Path $app 'dist\zh-locale\') -Force
Write-Host '[OK] translation engine + dictionaries installed to dist/zh-locale'

# ---- 2) main-process layer: replace ONLY when file is byte-identical to the official 3.0.1 original ----
$origHash = @{
  'main.js'     = 'a469281cf447771e0308aa8ac0543fa03764f7ef5e5aa809296bafb94aefb20a'
  'menu.js'     = 'd71a885ef1fb902fd969b0ddf29d2fc2fbc1db4fbb272a3e0a758a47eaea65d7'
  'utils.js'    = 'ad1aead6ca6d97dd9a5cfea348ef12c08ace17be2a7a7f8627a549b1e25d604d'
  'exit.html'   = '1720083b924d7522a7ecc477e8091bdb28c1d5c9e2bbaee5008dd4157b0a2645'
  'export.html' = 'fb5e3f8534bf8c03af79a73a2b9a2ca824c0bf4c65fd95d42743b05a9a0713a6'
}
foreach ($f in @('main.js','menu.js','utils.js','exit.html','export.html')) {
  $target = Join-Path $app $f
  $cur  = (Get-FileHash $target -Algorithm SHA256).Hash.ToLower()
  $new  = (Get-FileHash (Join-Path $scriptDir "payload\mainproc\$f") -Algorithm SHA256).Hash.ToLower()
  if ($cur -eq $new) { Write-Host "[..] $f already localized, skipping"; continue }
  if ($cur -ne $origHash[$f]) { Write-Host "[!] $f differs from the official 3.0.1 original - NOT replacing (your file kept; game UI translation still works)." -ForegroundColor Yellow; continue }
  Copy-Item $target "$target.bak-zh" -Force
  Copy-Item (Join-Path $scriptDir "payload\mainproc\$f") $target -Force
  Write-Host "[OK] $f localized (backup: $f.bak-zh)"
}

Write-Host ''
Write-Host '=== Done! Launch Bitburner - the game is now in Simplified Chinese. ===' -ForegroundColor Green
Write-Host 'To remove: run uninstall.bat  (or use Steam: verify integrity of game files)'
