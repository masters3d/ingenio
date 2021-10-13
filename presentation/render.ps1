

 param (
    [bool]$clearCache = $false
 )

# Get-Location only gets the current workng path. See https://www.autoitconsulting.com/site/scripting/get-current-script-directory-powershell-vbscript-batch/
$location = Split-Path $script:MyInvocation.MyCommand.Path  
$renderLocation = "$location/render"

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
        Write-Output "creating powerpoint for $name"
        pandoc $location/$name.md -o $renderLocation/$name.pptx
    }
 
}