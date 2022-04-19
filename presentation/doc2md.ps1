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
$filename_temp_prefix = "___temp___"

Write-Output "location $location"


function executeWithFilename {
    param (
        [string]$name
        )
        $sourceFile = "$location/$name.$filetype_source"
        $sourceFileTemp = "$location/$filename_temp_prefix$name.$filetype_source"
        $outputFile = "$renderLocation/${name}_$filetype_source.$filetype_target"

        # The media folder here is matches the name of an already created file. pandoc creates a /media/ folder but we are going to add the name of the file as subfolder
        # final path will be something like  "$location/media/$name/media" where the last media is create by pandoch
        # we want the paths to be relative so we are going to use . for current folder
        $renderLocationForMediaRoot = "./media" 

        # the naming schema is not unique image1.png| image2.png so we need to add the name of the file to distiwish
        $renderLocationForMediaForFile = "$renderLocationForMediaRoot/$name"

        # We have to make a copy since pandoc is not able to open the original file
        # Erro from pandoc openBinaryFile: permission denied (Permission denied)
        copy-item -path $sourceFile -destination $sourceFileTemp

        Write-Output "creating $filetype_target for $name"

        Write-Output "sourceFile $sourceFile"
        Write-Output "outputFile $outputFile" 

        pandoc $sourceFileTemp --extract-media $renderLocationForMediaForFile -t gfm -o $outputFile
    }

if ($single -ne "none") {
    executeWithFilename $single
    exit(0);
}

foreach ($each in Get-ChildItem -Path "$location" ) {
    if ("$each".EndsWith($filetype_source))
    {
        if ("$each".StartsWith($filename_temp_prefix))
        {
            continue
        }

        $name = "$each".Substring(0, "$each".Length - $filetype_source.Length - 1)
        executeWithFilename $name
    }
 
}
