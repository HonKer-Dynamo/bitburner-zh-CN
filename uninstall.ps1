# Bitburner Simplified Chinese Patch - uninstaller
# Restores every patched file. Works even if .bak-zh backups are missing (uses safe fallbacks).
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
if (-not $game) { Write-Host '[X] Game folder not found. Run:  .\uninstall.ps1 -GameDir "path\to\Bitburner"' -ForegroundColor Red; exit 1 }
$app = Join-Path $game 'resources\app'

foreach ($f in @('index.html','main.js','menu.js','utils.js','exit.html','export.html')) {
  $t = Join-Path $app $f
  if (Test-Path "$t.bak-zh") { Move-Item "$t.bak-zh" $t -Force; Write-Host "[OK] restored $f from backup"; continue }
  if ($f -eq 'index.html' -and (Test-Path $t)) {
    $h = [IO.File]::ReadAllText($t)
    if ($h -match 'zh-locale/') {
      $h2 = [regex]::Replace($h, '(?m)^\s*<script defer src="dist/zh-locale/[^"]+"></script>\r?\n', '')
      [IO.File]::WriteAllText($t, $h2, (New-Object Text.UTF8Encoding $false))
      Write-Host '[OK] index.html: removed zh-locale script tags (no backup existed)'
    }
    continue
  }
  # mainproc fallback: if current file equals OUR translated version, restore bundled official original
  if (Test-Path (Join-Path $scriptDir "payload\orig\$f")) {
    $cur = (Get-FileHash $t -Algorithm SHA256).Hash.ToLower()
    $our = (Get-FileHash (Join-Path $scriptDir "payload\mainproc\$f") -Algorithm SHA256).Hash.ToLower()
    if ($cur -eq $our) {
      Copy-Item (Join-Path $scriptDir "payload\orig\$f") $t -Force
      Write-Host "[OK] $f restored from bundled official original"
    } else {
      Write-Host "[..] $f is neither our translated file nor backed up - left untouched (it is yours)."
    }
  }
}
$zl = Join-Path $app 'dist\zh-locale'
if (Test-Path $zl) { Remove-Item $zl -Recurse -Force; Write-Host '[OK] removed dist/zh-locale' }
Write-Host ''
Write-Host '=== Patch removed. Game is back to English. ===' -ForegroundColor Green
Write-Host 'Tip: you can also restore via Steam: right-click Bitburner > Properties > Installed Files > "Verify integrity of game files".'
