## Website Performance Optimization portfolio

The objective of this project is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques I learned in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

### How I get started with gulp?
 ```bash
  $> cd /path/to/your-project-folder
  $> npm init
  $> See `npm help json` for definitive documentation on these fields and exactly what they do
  $> install packages npm install --save-dev gulp-uglify
  $> install npm install --save-dev gulp-concat
  $> install npm install --save-dev gulp-imagemin
  $> install npm install --save-dev gulp-csso
  $> install npm install --save-dev gulp-htmlmin
  $> Run gulp
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
* Replace all querySelector with getElementById (lines: 410, 430, 487, 552, 407).
* Replace querySelectorAll with getElementsByClassName (lines: 543, 480)
* Declare a new variables outside the loops that holds the DOM queries, because loops are taking too much time when rendering the page and some elements only need to be declared one time.(line 572, 507, 361, 362, 363, 452, 480)
* Declare array length outside the loops.(line 546, 482)
* Since changePizzaSizes will apply the same pizza width for all pizzas, I added an if condition to calculate the dx and new width one time.
* Add will-change: transform to randomPizzaContainer and mover in css file to tell the browser about an upcoming transformation.

#### Resources
* https://www.reddit.com/r/learnjavascript/comments/356k1v/confused_on_queryselector_and_getelementbyid/?st=j81tqjqk&sh=6c47b5a4
* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link
