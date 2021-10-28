## Summary

```powershell
.\render.ps1  

.\render.ps1   -clearCache  $true
```
Please run it from inside the presentation folder otherwise contextual image paths will fail to load. 
> File ../media/synergies.png not found in resource path

pandoc only supports md -> pptx. 

There are few different ways we can make presentations with markdown. I am going to be experimenting with https://marp.app  Currently using the vscode extension to preview changes but using pandoc to do the actual conversion.

marp doesn't yet have direct support for mermaid.js https://github.com/marp-team/marp-core/issues/139


The other version of markdown that I am interesting in exploring for presentations is the pandoc version. https://ashwinschronicles.github.io/beamer-slides-using-markdown-and-pandoc

It seems that most open source tooling have very similar syntax but understandably they need to add additional syntax to be able to support more feature complete features that are supported in presentations.