## Website Performance Optimization portfolio

The objective of this project is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques I learned in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

### How to get started with gulp?
1. Download the project.
 ```bash
  $> install -g gulp
  $> cd /path/to/your-project-folder
  $> npm install --save-dev gulp
  $> gulp
  ```
### Run index.html:
1. Download the project.
2. Open Terminal, then enter the following commands.
  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8800
  ```
3. Open a new Terminal window, then enter the following commands.
  ```bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8800
  ```
  4. Copy the public URL ngrok gives you and try running it through PageSpeed Insights(screenshots included in dist file).


#### Steps to optimize PageSpeed Insights score for index.html
*  Add async to JavaScript to allow the code to be executed asynchronously while the page continues the parsing process.
*  Add media="print" to print.css link.
*  Inline style in index.html to reduce the number of requests.
*  Remove web fonts, since it's only taking so much time and doesn't add anything unique.
*  Optimize images:
1. Online Tools:
* https://www.reduceimages.com/final_image.php?image=d8612e5961
* http://compressjpeg.com/
2. Using Gulp (gulp-imagemin).
*  Use gulp to minify HTML, JavaScript and CSS files.

#### Part 2: Optimize Frames per Second in pizza.html
* In general, I reduce the amount of work that needs to be calculated inside the loop, by declaring a new variables outside the loops.
* Move DOM queries outside the loops, because it takes too much time when rendering the page layout.(line 572, 507, 361, 362, 363, 452, 480)
* Add if condition to changePizzaSizes since all pizzas will have the same width, then no need to be calculated more than once.
* Declare array length outside the loops.(line 546, 482)
* Replace all querySelector with getElementById (lines: 410, 430, 487, 552, 407).
* Replace querySelectorAll with getElementsByClassName (lines: 543, 480)
* Add will-change: transform to randomPizzaContainer and mover in css file to tell the browser about an upcoming transformation.

#### Resources
* https://www.reddit.com/r/learnjavascript/comments/356k1v/confused_on_queryselector_and_getelementbyid/?st=j81tqjqk&sh=6c47b5a4
* https://www.youtube.com/watch?v=wNlEK8qrb0M&list=PLLnpHn493BHE2RsdyUNpbiVn-cfuV7Fos
* https://semaphoreci.com/community/tutorials/getting-started-with-gulp-js
