
$location = Get-Location
foreach ($each in Get-ChildItem -Path "$location" ) {
    if ("$each" -eq "README.md") 
    {
        continue;
    }
    $filetype = ".md"
    if ("$each".EndsWith($filetype))
    {
        $name = "$each".Substring(0, "$each".Length - $filetype.Length)
        Write-Output "$name"
        pandoc $location/$name.md -o $location/render/$name.pptx
    }
 
}