## Welcome to EAX Javascript Generator

EAX Javascript Generator, Multiple list, and pattern to be generated as one, see example

[Live Demo 1](https://code.eax.ro/generator/) - [Live Demo 2](https://eaxro.github.io/JsGenerator/generator/)

```
List <pEAX-0>: "EAX WebSite 1","EAX WebSite 2","EAX WebSite 3"
List <pEAX-1>: "Text 1","Text 2","Text 3"
List <pEAX-2>: "35 days left","30 days left","25 days left"
List <pEAX-3>: "https://files.eax.ro/img/gen/test1.jpg", "https://files.eax.ro/img/gen/test2.jpg", "https://files.eax.ro/img/gen/test3.jpg"
List <pEAX-4>: 1,2,3
```

# EAX Pattern 0 
(Attention! inside list " need to have '\\"' example:

- "&lt;!DOCTYPE html&gt;...background-image: URL(\\"&lt;pEAX-3&gt;\\");..."

```
"
# WebSite <pEAX-4>

<!DOCTYPE html>
<html>
<title><pEAX-0></title>
<meta charset=\"UTF-8\">
<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">
<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">
<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Raleway\">
<style>
body,h1 {font-family: \"Raleway\", sans-serif}
body, html {height: 100%}
.bgimg {
  background-image: URL(\"<pEAX-3>\");
  min-height: 100%;
  background-position: center;
  background-size: cover;
}
</style>
<body>
<div class=\"bgimg w3-display-container w3-animate-opacity w3-text-white\">
  <div class=\"w3-display-topleft w3-padding-large w3-xlarge\">
    <pEAX-0>
  </div>
  <div class=\"w3-display-middle\">
    <h1 class=\"w3-jumbo w3-animate-top\"><pEAX-1></h1>
    <hr class=\"w3-border-grey\" style=\"margin:auto;width:40%\">
    <p class=\"w3-large w3-center\"><pEAX-2></p>
  </div>
  <div class=\"w3-display-bottomleft w3-padding-large\">
    Powered by <a href=\"https://www.w3schools.com/w3css/default.asp\" target=\"_blank\">w3.css</a>
  </div>
</div>
</body>
</html>"
```
### Example

![Input Example](https://files.eax.ro/img/gen/1614094726464.png)

- Example Generated EAX WebSite 1
![Image EAX WebSite 1](https://files.eax.ro/img/gen/1614083465643.png)
[Live Demo Example EAX WebSite 1](https://code.eax.ro/generator/ex/test1.html)

- Example Generated EAX WebSite 2
![Image EAX WebSite 2](https://files.eax.ro/img/gen/1614083488336.png)
[Live Demo Example EAX WebSite 2](https://code.eax.ro/generator/ex/test2.html)

- Example Generated EAX WebSite 3
![Image EAX WebSite 3](https://files.eax.ro/img/gen/1614083508363.png)
[Live Demo Example EAX WebSite 3](https://code.eax.ro/generator/ex/test3.html)
