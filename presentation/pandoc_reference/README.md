## Summary

pandoc is able to apply a single powerpoint as a reference for a presentation. These powerpoint needs to have certain format to be able to be used in pandoc


``
pandoc -o reference_two.pptx --print-default-data-file reference.pptx
```

This will create a compatible reference that you can just edit to the way you want. 

You want to edit the master slides style. 

https://support.microsoft.com/en-us/office/what-is-a-slide-master-b9abb2a0-7aef-4257-a14e-4329c904da54?redirectsourcepath=%252fen-us%252farticle%252fwhat-is-a-slide-master-d8d1c49d-d6f1-4b83-a4e7-34311a11b546