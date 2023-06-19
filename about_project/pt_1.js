/* 
-------------)NEW)-------------------
-------------)HEADING)---------------

@TITLE: WHAT IS REACT COMPONENT?
@ABOUT: All about React COMPONENT  
@LOCATION: App.js

@OVERVIEW@
->

REACT COMPONENT TYPES
-🔺Functional COMPONENT - (New way)
-🔺class based COMPONENT- (Old way)

--@Functional COMPONENT@--
-🎗️it is nothing but an javascript function that written some peace of JSX(it's end of the JSX is What Behind the sence it's an react elements go babel & check) or a react elements a comnent in itself;
-🎗️it's an normal function

function returning as react elements is know as functional COMPONENT.

E.g 👇

@👨‍💻CODE..............
const HeaderComponent = ()=>{
return <h1>Hello,This is Saurabh</h1>
}
---------------------@👨‍💻CODE

@😗KEEP_NOTE: Functional COMPONENT Alway Start with "Capital Letter" E.g HeaderComponent.

Q) It is mandatory or not ? No, it's not mandatory you can start with small letter as well but then Why in Caps first🤔🧐??

:-> it's nothing more than that it's good convection in industroy or Cosider "Good Practice"

-🎗️single line code don't need to mention parenthesis or return word
-🎗️want to use multiple lines or don't want to use return keyword use only this () parenthesis it's arrow function thing probably use in production build app.

Q) @Clear@ first Defference between react-element & react-COMPONENT 🤔🧐??

:-> When we called react-COMPONENT need to call like that 🥊""roots.render(<HeaderComponent/> "");
-🎗️in other term react-COMPONENT know as functional COMPONENT.
:->or when we called simply react-element need to call like that 🥊""roots.render(heading)"";
-🎗️react-element at the end of day it's an "Object"

🤔🧐Suppose want to use React-element inside my Functional COMPONENT Then How do I use ?? 
@hint: it just consider as a Normal Variable.

Use {heading} curly braces inside Functional COMPONENT Need to inject code of your react-element code or JSX or want to write whole html inject into in. those whole JSX Code Quickly render inside one.
@👁️SEANARIO: when reactElement(Normal Variable) inside Functional COMPONENT then called like {heading} 

What if i use insid Functional COMPONENT {{}} two curly inside 🤔🧐?
first is for as we know it for JSX & 2nd for Js object;

@😗KEEP_NOTE: When you've to injected JSX Code just put it all one inside this curly braces {} talked about inside functional COMPONENT; 
@😱Given the fact you can write any peace of javascript code.

@interviewPerspective@
🤔If instead react-element if it is functional COMPONENT still it work? 
@👁️SEANARIO: when Functional COMPONENT inside Functional COMPONENT firstly know as ""COMPONENT composition"" then called like {heading()} this or <Heading/>
Yes! it work But if you call this {heading} then No work 👎👎;

Then when it work 🧐 ??
Need To call like this {heading()};👍👍 because at the end of the day it's function or instead if you don't want to use like that use <Heading/> use tags instead one.  Optionally you can also wrapped into {<Heading/>} if...o.w not forcefully 
KEEP_NOTE: while calling this name convection should be "Caps" O.w error.

@😑SIDE_NOTE: you can write whole javascript code inside Functional COMPONENT by using {addition,console.log,calculation,Jsx code, HTML code whatever} curly braces

let me tell you cool thing of "JSX"😍😍
@🥊!IMP: JSX Protect you or provide an security that no any hacker can hack you'r system;
E.G : const Data = API.getData();
@🥊 Let 🤔🧐Suppose we've API call & i got some data from API let's assume a situation & accendentaly you'r API hack & it return malacious code by the term malacious mens hacker inject some invalid to you'r machines & fact whatever {writtening here} it executed on server. 
so what is this attack know as ??
-this cross side scripting attack(xss) it gives whole system access of our system & customize according to wish. so if you use JSX it Protect you from such kind several attacks it take care all of your code.

How does it happednd 🤔🧐?
whenever you write some peact of Js code inside JSX meand in this one {..}
it apply one process know as sanitize. 


E.g 👇
@👨‍💻CODE....................................
"Functional COMPONENT"

const Heading = () => (
<h1 id='titlee' key='namastehead'>Nameaste React, Functional COMPONENT E.g
</h1>);
"NORMAl CODE & "JSX""
const normalVar = (<p id="title" key="normalkey">This is Normal Variable Example</p>)
"JS CODE"
const x = 10; const y = 11; const z = x+y;
"REACT COMPONENT"
const HeaderComponent = () => {
  return (
    <div>{<Heading/>}{Heading()}{{key: "this is javascript object"}}
      {normalVar}
      {<p>javascript JSX Code of addition{console.log(z)} {1+2}</p>}
      {<h3>Manually inject HTML code E.g </h3>}<h1>Hello,This is Saurabh</h1></div>);};
roots.render(<HeaderComponent/>);Or
roots.render(HeaderComponent()); 

What is sanitization in JS 🤔🧐?
The sanitize() method of the Sanitizer interface is used to sanitize a tree of DOM nodes, ""removing any unwanted elements ""or attributes. It should be used when the data to be sanitized is already available as DOM nodes. 

What is Defference between clean code & tree shaking 🤔🧐 ?
tree shaking: "removing un-use folder" 
clean code : take you'r code & make it more pricies & do minimize as well read in docs of parcel.

what is Defference between polyfil & babel🤔🧐?;
polyfil: polyfil is a old peace of code & filtering new peace of code via babel that will be new replacable code for us.
babel: So babel is a compiler which create polyfil for you
what is Defference between REACT & JSX🤔🧐?;
:->JSX it uses React.createElement to create the objects
   React mean that you do 

-----------------------------------@👨‍💻CODE


-------------)NEW)-------------------
-------------)HEADING)---------------

@TITLE: WHAT IS REACT FRAGMENTS?
@ABOUT: All about React COMPONENT,Header COMPONENT  
@LOCATION: App.js

Does JSX🤔,Typescript,Es6 mandatory in react 🤔??
React it is a library it already gives you a lot more thing,it doesn't force you to inject any other peace of code.it doesn't ristict you do to extra thing.

Let's beggin with Header portion know ""AppLayout"".
@➡️FOLLOWBELOW_STRUCTURE@ via building this App.
{/* 
@🤔What We Discuss on it As we discussed in Diagram those thing🤔@
  HEADER
    -LOGO
    -Nav Items(Right Side)
    -Cart 
  BODY
    -Search braces
    -RestrauranCart
      -Image
      -Nameaste
      -Rating
      -Cusines
  FOOTER
    - links
    - Copyright      
*}

What is React fragment ?
it just a COMPONENT which is exported by above React.
-🎗️JSX - has only expect one parent & is know/consider for empty tag(<></>) additionaly root element as well!
-🎗️Protect you from ugly code or repeaded code see and inspect sometimes.
-🎗️Don't use div it consume extra space if inspect & check Element! if you want to use inline CSS then use
-🎗️How do you give style in React style expect one "Object" itself to colorize so turn it <div style={{color: "red"}}> like that inside "JSX🤔"
By the term "Object" Means it's nothing but an JAVASCRIPT;

@👨‍💻CODE....................................
const styleObj = {
backgroundColor: "red"}
 NORMAl JSX CODE
const JSX = (
<div style={styleObj}><h1>JSX</h1></div>);
root.render(JSX)
-----------------------------------@👨‍💻CODE


-------------)NEW)-------------------
-------------)HEADING)---------------

@TITLE: CONFIG DRIVEN UI?
@ABOUT: CARD & COMPONENT  
@LOCATION:

@ABOUT:CONFIG DRIVEN UI

 @OVERVIEW@
 in the real world, the data is not coming like this it atually in Array of Object does make sence. e.g const list = [{},{},{}]
 if you visit any website & inspect & surfing on preview of Network Tab you'll find Array of Data 
 & additionaly you would get defferent name with defferent type e.g 
 -🔺cardType:"carousel"
 -🔺cardType: "seeAllRestaurantslist"
 Why 🤔🤨 this is defferent type ??

 @OVERVIEW@
 Lets Suppose i've to designed whole page i want to build this carousel,i want to build this restaurant card library as well let each and every city having some swiggy offer accept one pune city it doe's not have any offer for pune city then What🤔?
 so our browser don't show any offer in "carousel list" it look like normal website it'll deleted automatically. 

 Q )- But we've to make our UI Dyanamics Then How 🤔?
 This type of UI is know as 😍"CONFIG DRIVEN UI" which is combo of carousel & seeAllRestaurantslist....GOOD PRACTIC FOWLLOW INDUSTROY PREFFERENCE!!

 @BIG_COMPANAY_USE_SOMETHING_KNOW_AS: 😍"CONFIG DRIVEN UI" 

 @KEEP_NOTE :All this UI IS DRIVEN CONFIG which is send via backend
 @CONCLUSSION@: when you build real world application OR large scale -Application should we want defferent defferent website for defferent city like for nagpur defferent,pune defferent: obivious NO. so for we controll our fronted via "CONFIG DRIVEN UI"

 Q )- Who is DRIVEN this CONFIG 🤔??
 obivious Backend, & the data which is coming for API.

thus, So in this one we'r Build a website in a such way it'll be build via CONFIG base on inforamtion it'will show data like so backend controll what type UI/OFFER in kolkata,what look in delhi base on city we Do that. & everything is done by this 😍"CONFIG DRIVEN UI" @NOTE: everything is run on backend base on city it take action. All this process Depend on "CONFIG" Array.

🐪----@interviewPerspective@----🐪
If you tell to you'r interviewer I'm Building this API, A'm Desingning this data via using ""CONFIG DRIVEN UI"" it will be + point for you


---------------

-------------)NEW)-------------------
-------------)HEADING)---------------

@TITLE: UNDERSTANDING THE ARCHITECTUERS CONFIG DRIVEN UI?
@ABOUT: CARD & COMPONENT  
@LOCATION:

@OVERVIEW
Building Via CONFIG DRIVEN UI(Coming from Backend)

-🎗️Let Suppose i want to designed my website like having one carousel(has list of carousel,has own cards & each card have some list of offers{},{}),after carousel i can have my list of restaurant restrauntList(1st Need type restraunt then i want list of burger items) then i want some offer 3 section How would we do ?
-🎗️Let Suppose delhi is having this 1st offer of carousel 50% & so in kolkata having Another offer only backend will change this offer & website will accordinly. it will show defferent offer. 
-🎗️& let Suppose in baglore there is no offer it won't show backend it just send empty list of cards
so this peace of archetechers is know as 🔺""CONFIG DRIVEN UI""
config = [
  {
    type: "carousel",
    cards: [
      {offerName: "50% off",},
      {offerName: "No delivery charges",},],
  },
  List of RestrauntCart
  {
    type: "restraunt",
    cards: [
      {
        name: "Burgar King",
        image:
          "https://c.ndtvimg.com/2022-06/gp4k2jro_burgers_625x300_20_June_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350?im=FaceCrop,algorithm=dnn,width=1200,height=886",
        cusines: ["Burgar", "American"],
        rating: "4.5",
      },{
        name: "KFC",
        image:
          "https://c.ndtvimg.com/2022-06/gp4k2jro_burgers_625x300_20_June_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350?im=FaceCrop,algorithm=dnn,width=1200,height=886",
        cusines: ["Burgar", "American"],
        rating: "4.4",
      },],},];
   
      @😗KEEP_NOTE
      While fetching some data from cloudnary use optional chaining(?.) something like that if data doesn't exit in API 
      e.g {restaurant[0].data?.name}

      What is PROPS 🤔🤨- Properties
      -🎗️This is the way of pass inforamtion inside COMPONENT e.g 
      "<RestrauntCart restaurant = {restrauntList[1]}/>"
      -🎗️Passing some Data into COMPONENT is know as props? this is the way of Passing data inside COMPONENT know as props. Lets Supposeif I've to pass some data from parent COMPONENT to child COMPONENT i need something know as "Props" this is the way

      🔺E.g <RestrauntCard restraunt={restrauntList[0]}
      -🎗️if you console.log(props) at reciving end mean Parameters term you'll get function call like object in easy term it just function call

      -🎗️So How do we pass data inside function(Functional COMPONENT) so how do we'll get data inside function ??
      :-> OF Course in Parameters, At the end of the day Props is just Normal function in React which is work under Arguments & Parameters. OR you can name it function call;
       -🎗️Props it just an Object; 
       -🎗️we can pass multiple props E.g hello: "World"
       -🎗️you can use this Props as a variable while Receive as an Parameters.
       -🎗️some cool developer they do Distructure on the Fly while reciving Data in Parameters like ({restaurant})

      😗KEEP_NOTE:PROPS WORK under the instuction of Arguments & Parameters The data we get in the form of Arguments(pass Info) & Parameters(Receive Info) This E.g is an Arguments we need pass in Parameters.


-------------)NEW)-------------------
-------------)HEADING)---------------

@TITLE: 
-@ALL ABOUT TRANSFORM CODE PROPS TO RENDER CONFIG DRIVEN UI
-@HOW WE CAN PASS PROPS TAKE ADVANTAGE OF SPREAD OPERATOR & ALL STUFF.
-@PROPS DRILING
@ABOUT: PROPS,CONFIG DRIVEN UI,CARD RENDERING VIA API 

@OVERVIEW
TO MORE UNDERSTAND TAKE REFFERENCE OF transform.js file in this folder.


*/
