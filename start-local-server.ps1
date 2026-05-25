$ErrorActionPreference = "Stop"

$port = 8081
$root = Split-Path -Parent $MyInvocation.MyCommand.Path

Set-Location $root

$python = Get-Command python -ErrorAction SilentlyContinue
$pythonCommand = if ($python) {
    "python"
} else {
    $py = Get-Command py -ErrorAction SilentlyContinue
    if ($py) {
        "py"
    } else {
        throw "Fant ikke python eller py. Installer Python, eller start en annen lokal webserver."
    }
}

$listener = Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue
if ($listener) {
    Write-Host "Port $port er allerede i bruk. Åpner http://localhost:$port/ ..."
    Start-Process "http://localhost:$port/"
    return
}

Write-Host "Starter lokal server i $root"
Write-Host "Åpner http://localhost:$port/"
Write-Host "Stopp serveren med Ctrl+C."

Start-Process "http://localhost:$port/"
& $pythonCommand -m http.server $port
