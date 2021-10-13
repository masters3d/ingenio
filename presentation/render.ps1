

 param (
    [bool]$clearCache = $false,
    [string]$single = "none"
 )


# Get-Location only gets the current workng path. See https://www.autoitconsulting.com/site/scripting/get-current-script-directory-powershell-vbscript-batch/
$location = Split-Path $script:MyInvocation.MyCommand.Path  
$renderLocation = "$location/render"

function executeWithFilename {
    param (
        [string]$name
        )
        Write-Output "creating powerpoint for $name"
        pandoc $location/$name.md -o $renderLocation/$name.pptx
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