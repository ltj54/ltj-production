$ErrorActionPreference = "Stop"

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

$port = 8081
while ($port -le 8090 -and (Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue)) {
    $port++
}

if ($port -gt 8090) {
    throw "Fant ingen ledig port mellom 8081 og 8090. Stopp en lokal server og prøv igjen."
}

Write-Host "Starter lokal server i $root"
Write-Host "Åpner http://localhost:$port/"
Write-Host "Stopp serveren med Ctrl+C."

Start-Process "http://localhost:$port/"
& $pythonCommand -m http.server $port
