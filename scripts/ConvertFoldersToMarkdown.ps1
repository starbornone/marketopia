$directoryPath = "G:\marketopia\src\app"
$outputFile = "G:\marketopia\scripts\titles.md"

Clear-Content -Path $outputFile -ErrorAction SilentlyContinue
New-Item -Path $outputFile -ItemType File -Force | Out-Null

$folders = Get-ChildItem -Path $directoryPath -Directory

foreach ($folder in $folders) {
    $words = $folder.Name -split '-'

    $titleCasedWords = $words | ForEach-Object {
        if ($_.Length -gt 0) {
            $_.Substring(0,1).ToUpper() + $_.Substring(1).ToLower()
        } else {
            $_
        }
    }

    $formattedName = $titleCasedWords -join ' '

    "- $formattedName" | Out-File -FilePath $outputFile -Append -Encoding utf8
}

Write-Output "Titles have been written to $outputFile"
