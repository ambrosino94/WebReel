# Macaron

###### Development Project Report.

#### `Authors`

> `🦐 Fanny Lisbeth Hau Qiu`			 —————— `Report Writer` & `Coding Assistant`
> `🦔 Sarah Cristina Pineda Avila`   —————— `Main Coder` & `Debugger`
> `🐀 Stephanie Nicole Yau Barria`  —————— `Main Coder` & `Debugger`
> `🐑 Valeria Halit Carreño Pastor` —————— `Coding Assistant` & `Stress Manager`.
>
> `Group 10 - 1`



#### `Description`

This project is inspired by the internet browser game named `Cookie Clicker`. This game is an incremental game (a game whose gameplay consists of the player performing a simple action such as clicking on the screen continuously). The objective of a Cookie Clicker is to bake cookies as fast as possible by clicking the starter cookie that appears when you freshly open the game on your web browser. As you click, the number of cookies produced increases. The currency of this game is macarons, as you get macarons, upgrades on the side will be available for you to purchase. These upgrades help to increase your macaron production per second. (We've made some changes while coding the game to personalize it according to our likings, still
making it true and very similar to the actual game.) 



These are the features of this project:

```
The background layout is divided in three sections.
There is a main button, that increases your currency everytime you click on it.
Said button shows an animation when clicked.
An indicator on the screen that shows the amount of currency collected in the game.
3 upgrades that can be bought, that give you a specific amount of macarons per time.
3 items that can be bought, that allow you automatic currency production.
```



#### `Error Debugging`

> Error debugging is not necessary for our report but we did like to include this two small and
> annoying errors that came along our way.
>
> - Macaron Team



###### ERROR N°1

This is not a syntax error. However, when the mouse cursor was being clicked on over the image, instead of "+1" showing up, it showed a fading "undefined".

To fix our mistake, we realized that in a specific line of our code, we were supposed to write "txt" instead of "text" so we instantly changed it.

```javascript
// CODE BEFORE THE FIX
text ("+" + this.text, this.x, this.y)
// CODE AFTER THE FIX
text ("+" + this.txt, this.x, this.y)
```



###### ERROR N°2

This is not a syntax error, again. But, when adding the "+1" feature to our code, we were expecting for it to only happen when the mouse cursor is strictly on the surface of the cookie nonetheless we realized after clicking in the area around the image, that the "+1" also appeared when it shouldn't have.

To fix the the error we changed the number the value of the diameter in the click.

```javascript
// CODE BEFORE THE FIX
if( dist(mouseX, mouseY, this.x, this.y) < this.d/2){
// CODE AFTER THE FIX
if( dist(mouseX, mouseY, this.x, this.y) < this.d/3.2){
```