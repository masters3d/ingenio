## Summary

pandoc is able to apply a single powerpoint as a reference for a presentation. These powerpoint needs to have certain format to be able to be used in pandoc


``
pandoc -o reference_two.pptx --print-default-data-file reference.pptx
```

This will create a compatible reference that you can just edit to the way you want. 
