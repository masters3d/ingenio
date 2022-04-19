## Source https://github.com/masters3d/ingenio/blob/main/presentation/doc2md.ps1

 param (
    [string]$single = "none"
 )


# Get-Location only gets the current workng path. See https://www.autoitconsulting.com/site/scripting/get-current-script-directory-powershell-vbscript-batch/
# $location = Split-Path $script:MyInvocation.MyCommand.Path  
$location = Get-Location
$renderLocation = $location
$filetype_source = "docx"
$filetype_target = "md"

Write-Output "location $location"


function executeWithFilename {
    param (
        [string]$name
        )
        $sourceFile = "$location/$name.$filetype_source"
        $outputFile = "$renderLocation/${name}_$filetype_source.$filetype_target"

        Write-Output "creating $filetype_target for $name"

        Write-Output "sourceFile $sourceFile"
        Write-Output "outputFile $outputFile" 

        pandoc $sourceFile -t gfm -o $outputFile
    }

if ($single -ne "none") {
    executeWithFilename $single
    exit(0);
}

foreach ($each in Get-ChildItem -Path "$location" ) {
    if ("$each".EndsWith($filetype_source))
    {
        $name = "$each".Substring(0, "$each".Length - $filetype_source.Length - 1)
        executeWithFilename $name
    }
 
}
