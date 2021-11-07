

 param (
    [bool]$clearCache = $false,
    [string]$single = "none"
 )


# Get-Location only gets the current workng path. See https://www.autoitconsulting.com/site/scripting/get-current-script-directory-powershell-vbscript-batch/
$location = Split-Path $script:MyInvocation.MyCommand.Path  
$renderLocation = "$location/render"

# A way to clean up incompatible tokens
function replacingTokenReturnPath {
    param (
        [string]$textFilePath
        )
    $tokens = @{'<!---:::'=':::';':::--->'=":::"}
    $fileContents = Get-Content -Path $textFilePath -Encoding UTF8

    foreach ($each in $tokens.GetEnumerator()) {
        $fileContents =  $fileContents -replace $each.Name, $each.Value
    }

    if ($fileContents -ne (Get-Content -Path $textFilePath)) {
        $tempFile = $textFilePath -replace ".md", "_temp.md"
        Write-Output  $fileContents | Out-File -FilePath $tempFile -Encoding utf8 
        return $tempFile
    }

    return $textFilePath
}



function executeWithFilename {
    param (
        [string]$name
        )
        Write-Output "creating powerpoint for $name"
        $newPath = replacingTokenReturnPath $location/$name.md
        pandoc $newPath -o $renderLocation/$name.pptx --reference-doc=$location/pandoc_reference/reference_one.pptx
        
        if ($clearCache)
        {
            if ( $newPath -ne "$location/$name.md")
            {
                Write-Output "Cleaning up $newPath"
                Remove-Item $newPath
            }
        }
    }

if ($single -ne "none") {
    executeWithFilename $single
    exit(0);
}


if ($clearCache) {
    foreach ($each in Get-ChildItem -Path "$renderLocation" ) {
        $filetype = ".pptx"
        if ("$each".EndsWith($filetype))
        {
            Write-Output "deleting $each"
            Remove-Item $renderLocation/$each
        }
    }
}

foreach ($each in Get-ChildItem -Path "$location" ) {
    if ("$each" -eq "README.md") 
    {
        continue;
    }
    $filetype = ".md"
    if ("$each".EndsWith($filetype))
    {
        $name = "$each".Substring(0, "$each".Length - $filetype.Length)
        executeWithFilename $name
    }
 
}