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
TO MORE UNDERSTAND TAKE REFFERENCE OF 🗃️🗃️transform.js file in this folder.


🥊-------------)NEW)-------------------🥊
-------------)HEADING)---------------

@TITLE: WHAT IS VIRTUAL DOM !!
@ABOUT: 

@OVERVIEW
TO MORE UNDERSTAND TAKE REFFERENCE OF 🗃️🗃️transform.js file in this folder.

if we've this above HTML Struture ...Consisder this is DOM in tree formate where all head,body,parent,siblings all stuff.....

- 🎗️VIRTUAL DOM is not consept just of React this virtual Dom it's Software engineer concept it just not limit for react it use in multiple places but react has something know as VIRTUAL Dom.
- 🎗️it just REPRESENTATION OF VIRTUAL DOM!! KEEP a reapresentation of DOM with us !! Is know as virtual dom(tree like REPRESENTATION)

-So, Why do we need VIRTUAL Dom 🧐🤔??
 -🎗️we need VIRTUAL Dom for something know as RECONSCILIATION IN REACT that we already discussed in PROPS if you remember !
 -🎗️when react does RECONSCILIATION Why React is Fast ??
  first🤔🧐 what is RECONSCILIATION?
  -🎗️The algorithm React uses to diff one tree with another to determine which parts need to be changed.
  -🎗️it is an Algorithm that react use to "diff" one tree from other 
  -🎗️it determined what needs to be change in UI or what does'nt change 
  -🎗️@CONCLUDE:React uses algorithm "Diff" Algorithm to find out the defference Between your trees by the term trees mean (You'r Actual Dom & VIRTUAL Dom trees) it finds out what needs to be UPADATED that deff Algorithm & base on that it just UPADATED small portion of React.
  -🎗️It will only re-render specific portion of you'r app which is found by ""Diff"" Algorithm!!
  -🎗️It Does not re-render the Whole App it UPADATED small portion what you need to UPADATED base on that render!
  -🎗️LETS You'r having NODE LIST(HTML Element LIST LIKE TREE) & want to UPADATED targeted COMPONENT 9 No. line Div it shoot that COMPONENT div first updated & render on our Webpage!! 😱Given the fact it not load the Whole page it just load targeted one!!
  -🎗️TREEs is basically VIRTUAL REPRESENTATION of YOU'r DOM!!
  -🎗️This Diff Algorithm react uses & it finds out the defference Between the tress this PROCESS is know as RECONSCILIATION;
   
  -🎗️Fact: whenever you'v multiple childrean with same attributes like div inside parent one that's where KEYS plays a vital Role Need to pass ""key"" & it suppose to be "Unique" on partucular attributes base on that it shoot!!
  -🎗️All this proccess is gonna happednd via ""Diff"" Algorithm!!

  -😱Given the fact DON't Need mention key's if you'r having defferent defferent Attributes like img,body,div,Ul key's only for same Attributes

  @CONCLUDION:
  🤔React Uses VIRTUAL DOM - It REPRESENTATION of ACTUAl DOM - thus Process uses know as RECONSCILIATION - Handle By Diff Algorithm - Diff find out what Needs to be UPADATED Ui What Not - to get rid of complex use "KEY"

  REF: ✈️🔗 https://legacy.reactjs.org/docs/reconciliation.html

   UPADATED INFO: react fiber !!
  -🎗️it's an new RECONSCILIATION engine!
  -🎗️it's responsible for "Diff"
  -🎗️React Fiber is an internal engine change geared to make React faster and smarter. The Fiber reconciler, which became the default reconciler for React 16 and above, is a complete rewrite of React's reconciliation algorithm to solve some long-standing issues in React.
  REF: ✈️🔗 https://github.com/acdlite/react-fiber-architecture


  H.W: react why not use index as key ??
  -🎗️You may wonder, why don't we just use indexes as keys when looping through an array. Although, many developers have done that in their code it is not necessarily ideal. React recommends that you do not use indexes as keys, since it could impact performance negatively and could lead to some unstable component behaviour.
  REF: ✈️🔗 https://legacy.reactjs.org/docs/lists-and-keys.html
  REF: ✈️🔗 https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/



  🥊-------------)NEW)-------------------🥊
-------------)HEADING)---------------

@TITLE: IMPORT & EXPORT !!
@ABOUT: How react work behind the sence 

@OVERVIEW
Take a REFFERENCE of transform_2.js file to UNDERSTAND More 
@LOCATION: 🗃️about_project/transform_2.js


What should we put inside config or constant file 🤨🧐?

-🎗️desired to put all hard coded file inside/into config file that's a good convection!
-🎗️why Use because to get rid of copy & pest URL same stuff again & again!
-🎗️is it another replecment of config.js yes it is some company use constant.js

@ABOUT:REACT Folder structure: // 🥊https://legacy.reactjs.org/docs/faq-structure.html



@ABOUT:SEARCH FUNCTIONALITY
@😱Given The fact search <input type="text"/> working in index.html file but not work in react Jsx while returning.

  what if happednd if I write something inside value={} outside variable:
      🧑‍💻-------------
      code:
      const searchTxt = "KFC"
      return <input value={searchTxt}/>
      ---------------🧑‍💻
      but not able to edited why a'm not able to edited.
      -🎗️because it's hard coded value that's why!
      -🎗️and react uses one way data binding something why mean ?
      -🎗️let'you've variable like above it's OK but but you need modify somehow this variable As a'm when i writing 
      -🎗️you need to modify anyhow to make it work this is one way data binding. see above e.g 
      -🎗️but still we won't be able to edited serch field not work yet.
      -🎗️so we need to change this searchTxt somehow how will do that.
      🧑‍💻-------------
      Code: 
      nChange={(e)=>onChangeInput} OR 
      onChange{(e)=>console.log("xyz")}OR 
      onChange{(e)=>console.log(e.target.value)} output:KFC+(search type value)
       onChange{(e)=>{searchTxt=e.target.value}} output:NOT WORK! 
      (POW)
      ---------------🧑‍💻
      -🎗️so it takes a function & it basically callback function which has e event need to pass mandatory event inside (e) one what is e mean "event" provided by react & e.taret.value avail in JS
      🔺-So whenever input search field chage(while typing x word) this function will be called "onChange/onChangeInput" let's console.log("cdfd") inside callback;
      -😱Given the fact react rerender its COMPONENT when input change
      -Stil Not Edited So how it will work to make this work local variable just like "let searchTxt = "KFC" Not preffer in React whenever you'change in react;
      ---
      So How will you'invite chage in react You need something know as React Variable! what is React variable it's Like State Variable!


@REACT STATE VARIABLE
-🎗️somehow you need to maintain variable that is react kind of variable by the term it mean state kind of variable.
-🎗️every COMPONENT in react maintain a State & need to inject all the variable into state & everytime you'v to create local variable you use state inside react.
-🎗️What is state(e.g useState)🧐🤔?
  🔺Let suppose you've to create like local variable E.g 
  let searchTxt = "KFC" i'll use something know as useState inside react.
  
  what is Hooks 🧐🤔?
  -🎗️Hooks is nothing but an JS Normal Function 
  -🎗️EveryHooks has a specefic function for it.
  -🎗️this function written by facebook Develope & provide FUNCTIONALITY.
  -🎗️what is function of useState() Hooks;
[to create state variable,local state variable]

-🎗️somehow it control by react so how will it work 🤔?
-🎗️somehow you need to maintain variable that is react kind of variable by the term it mean state kind of variable.
-🎗️every COMPONENT in react maintain a State & need to inject all the variable into state & everytime you'v to create local variable you use state inside react.

   🧑‍💻-------------
      @ABOUT: To create Local State Variable 
      Code: 
      IN Normal Js: const searchText = "XYZ";
      In React  Js: const [searchText] = useState("XYZ")
      ---------------🧑‍💻

-What is state(e.g useState)🧐🤔?
 -🎗️Let suppose you've to create like local variable E.g 
  let searchTxt = "KFC" i'll use something know as useState HOOK inside react whenever when desired to create local variable I preffer useState() inside react!
 -🎗️it's coming from React 
 
 
  what is Hooks 🤔🧐?
  -🎗️Hooks is nothing but an JS Normal Function 
  -🎗️Every Hooks has a specefic/individual function for it.
  -🎗️this function written by facebook Develope & provide FUNCTIONALITY.
  -🎗️GREAT & very IMP hooks is e.g useState() use for to create Local state variable in Js we use E.g const searchTxt = "xyz" for creting but in react Need to use useState to create Local variable!


  -🎗️that it's why I create like this useState()//call function recall it.
  -🎗️what is function of useState() Hooks & where it Come 🤔🧐?
   -🎗️to create state variable,local state variable
   -🎗️it came from react library & fb dev written use named export;

   So How do I use this useState🤔🧐();
   so this useState() function return an array the firstName of array is an "variableName" & it's "local state Variable" been discussed till now!
   E.g const [firstName,setFirstName] = useState();


   ------------------(NEW)------------------
   @ABOUT:REACT useState Hook work!!


        -When we did on onChange we were modifying my searchText => like e.target.value(input field) react tell that you cannot directly modify your searchText like that 
          🎯e.g const[searchText]=useState("kfc")  
         how I can modify this varaible ??
         I can only modifying this varaible(searchText) by using "function" where from will I get from this useState. useState give this function & we call it as "setSet,setSearch"
         🎯E.G const [searchText,setSearchText]=useState("KFC");   
          How will get to know a'm writing something into {searchText} put it anywhere 
         🎯E.g 
         <button className="search-btn">Search-{searchText}</button>

         @REAPEAT:How useState Hook Work!!
         -🎗️So input field does not work in react for sake When you write input you need data binding to it!
         -🎗️Why it is good thing varaible won't update in search field it's an extra advantage of react ok let me clear let suppose you use this same variable at other place it's nightmare for react Dev & it not also good for optimization so for sake of that reack first ask for in syntax function to update value like
         🎯E.G const [searchText,setSearchText]=useState("KFC");
          by taking advantage of this useState it return an array that's why we set value in array
          if you'r confusing you can also Distructure like this.
          🧑‍💻-------------
          @ABOUT: 
          Code: 
          const searchValue = useState();
          const [searchText,setSearchText]=searchValue;
          ---------------🧑‍💻
          -🎗️Need onChange to update state - Need callback function & need to pass "event" inside it this event for read whatsoever you type in searchText field inside setSearchText(...).
          -🎗️This is how we update/modify;
          -🎗️This is know as Two way binding because you can use this variable now whenever you want!!

------------------(NEW)------------------
@ABOUT: TURN ON TO OFF TOGGLE & INTERVIEW Process!!

---INTERVIEW PERSPECTIVE---
Why Do I need this State Variable 🧐??
-So as for know React has one way binding;
React dos's have idea from where this variable came Let suppose there is 1000 variables like one it all mess arround;
-react can't keep tracking each variable;
-to want some updation in UI You need use Hook useState hook Does make any sence i keeps on contunuous tracking That's Why!!

@TURN FALSE TO TURE-WHILE ON ONCLICK@
🧑‍💻-------------
@ABOUT: @TURN FALSE TO TURE
Code: 
IN JS - CONST SEARCH_CLICKED = FALSE;
IN REACT
CODE:
const [searchClicked,setSearchClicked] = useState("false");
<button className='search-btn' onClick={()=>{
setSearchClicked("true")}}>

OR:Want in TOGGLE FORMATE 
CODE:
<button className='search-btn' onClick={()=>{
searchClicked === "true"?setSearchClicked("false"):setSearchClicked("true")}}>
------------------🧑‍💻

So How do I my UI get UPADATED 🧐??
because of RECONSCILIATION Diff Algorithm work behind the sence it update selected one this is react is false if you want "Toggle" on/off

------------------🧑‍💻

------------------(NEW)------------------
@ABOUT: SEARCH
@OVER_ALL: View an BODY.js 


@SEARCH_FUNCTIOALITY@
-For Searching any element Need to filter Data on onClick method 
-which Data restrauntList data Need to filter
-for sake creete function filterData() after that next one 
-update restrauntList with stats(@REM: Can't update Directly accept state & create variable with one)
-to maintain the list of restrauntList Need to maintain local Variable
-create Local State Variable with default value restaurant dummy data

/*-create Local State Variable with default value restaurant dummy data
🧑‍💻-------------
Syntax
array.filter(function(currentValue, index, arr), thisValue)
""use filter to filterout selective Data""
-------------🧑‍💻

-Now,Let's I pass filterData() function in restaurant.map here.. -
-By the sence it mean Let suppose i updated this restaurant.map.. array with filterData() function will the list change yes ofCourse 🤣🤣
-Let's first Modify this restaurant array 

@@FOLLW_PROCESS@@
"Inside onClick() Pass inforamtion this one "

-🔺Need To filter Data 
-🔺update the State 
-🔺pass function filterData()
@@FOLLW_PROCESS@@

-create separate filterData()function outside of Functional component
-Need to filter this restrauntList/restaurant using the input whatever am typing over there talked about search field.
-How will get input(search field) using searchText(isDiD) State local variable
-pass searchText & restaurant inside filterData(searchText,restaurant)
  🔺searchText-responsible for this is text that you want to exactly search
  🔺restaurant- & where you've to search this text obivious it from list of restaurant array(isDiD) in that wake use one
  @CONCLUDE@: I will search my text inside my restaurant & give me the filterData.
  -Let's suppose I get "data" here while calling this filterData(s..,r...) function here Let's first stored into variable named "data"
  -will update this one into my restaurant So how do I do that by using setSearchText LOCAL STATE VARIABLE

  🧑‍💻-------------
  CODE:
  const data = filterData(searchText,restaurants);
  setRestaurants(data);
  Inside call onClick()
🧑‍💻-------------

-pass above this option into Parameters while calling filterData() & filter out 
IF INSIDE ARRAY IT INCLUDES SEARCHTEXT JUST FILTEROUT 
👍👍👍

H.W Once after search why search button not work because the state got updated!! because it loss the original state 
        
@SEARCH_FUNCTIOALITY WHY NOT Work:
@LOCATION:🗃️component/Body.js    
Why my search FUNCTIONALITY Not working Properly Once after search if you do  
  console.log(restaurants); you'll get multiple array on each press Key it triggers reconsiliation process it rernder on each key press 
  -🎗️once after search you get only one restaurants Why? By the term it mean you'll get Updated Value beacuse it sync with UI card;
  -🎗️Why it not re-render it got empty list []Why ?
  -🎗️beacuse we modify(search) our restaurants with one data as we saw with Pizza & it is trying to find out "Chaska" inside one how would it be possible that's why you get []
  -🎗️if you'r search data match pizza to izza it give same one data.

  ---

  -🎗️LET's Explore that world our Application Doesn't KNOW which is know as MICROSERVECES 
  -🎗️What is MICROSERVECES It is a combination of mulatiple services at one HUB use by one website like UI for deffernt,backend for deffernt,notification for deffernt with deffernt PORT..
  To More INFO FOLLOW ONE 
  @REF: 🔗✈️ about-project/micor-&-mono.js 

  So How do I Make API Call IN JAVASCRIPT??
  -🎗️what is Fetch API??
   it is available to us throught JS Engine window object it is prebuild it's an browser API it's tree having superPowers with us!
  -🎗️Where I NEED This Api shoot on restrauntList over there
  -@KEEP_NOTE:-> don't call this Fetch() api Near the searchText LOCAL STATE O.w it'll re-render again and again on every press KEY take E.g of console.log("render"); Let's try it.
  -🎗️the best way to called it API is let me tell you feature that I'm going to Build; 
  As we our Body/Page COMPONENT Loads it used to call api & fill the DATA  Make sence 👍 
  🔺E.g Load browser + call API = fill the DATA 
  
  Let's use discuss there is Two Way of loading & API Calling 
  path: ✈️🔗assets\render-quick-via-useEffect.png
  🔺-1ST_APPROACH: As soon as loads Page =>Then call API(300Ms) =>Then render the Page(500Ms) TT:800Ms
  🔺-2ND_APPROACH: As soon as Page Loads disply/render(100Ms) info on Page => then call the API(300Ms) => then Upadate the UI(500Ms) 
  
  So The CONCLUSSION is that 2nd 2ND_APPROACH Alway Better for User Experience beacuse it has having superPowers with us that is RECONSCILIATION it Quickly Refresh & loads 
  -It Quickly find & Update the DOM
  -as compared 1ST_APPROACH it takes less time while first one takes too time to render.

  🤔😗😵SO This All process Happend only & only Via ""useEffect"" Hook !! which copowered by react & give this fancy FUNCTIONALITY with us 

   So What is useEffect HOOK ??
   -  @Befour Start take REFFERENCE of png of render-quick
      -🎗️It is JAVASCRIPT Normal Fuction at endly
      -🎗️It expect One callback function & optionally 2nd_one dependecies array like after callback ,[];
      -🎗️what is callback function This will not called immediately it will be called whenever useEffect want 
      -🎗️it will call at specefic Time let's know which time ??
      -🎗️WhenEver my body(x) COMPONENT keep on continuous re-render our code of this body(x) COMPONENT func called & after every render it will call the function whatever you pass inside useEffect know as "callback". 
      -🎗️When will my component render 🤔?? inside useEffect(()=>console.log("render"));
      Obivious On State Change isn't it So
      -🎗️See Two Way to my COMPONENT Re-render either my STATE Change Or PROPS Changes
      -After every re-render each time this useEffect Hook Call !! 
      -👎 not good way to call every render so if you don't want after every re-render it call pass it dependecies array inside useEffect hook after callback + [xyz]
      -🎗️Let's suppose Want to call this useEffect only when searchText change - it simple call it inside dependecies array like [searchText] it call every time search or everytime you press key;
      -🎗️it mean useEffect Depende on searchText
      -🎗️if you don't pass anything inside dependecies array it one time render only or whenever it render next time
      -🎗️Let's suppose Want to call this useEffect only when restrauntList(restaurants) change - it simple call it inside dependecies array like [restaurants] it call every time when updated. 😱@given the fact it will only work after search it mean restrauntList updated.
      🧑‍💻---------------------
      @CODE@: ==
      useEffect(() => {console.log("useEffect call only when restaurants change");},[restaurants]);
      console.log("Render");
      ----------------------🧑‍💻

      Q) will it call useEffect after or befour page load 🤔😵?? - of couse it render after, it will call only one time after initial render!!
      :: try it via console.log("render") + call useEffect = in body component; or don't UNDERSTAND see above code ==;
      🔺-Empty dependecies Array = once after render 
      🔺-dep arry [searchText,restaurants] = once after initial render + everytime when search & restaurants got updated;

      Q) What if we don't have dependecies Array in useEffect hook, Will it work??
      -> it will be called after every render whenever you UI first page load with one e.g  useEffect(()=>{console.log("useEffect call");}); console.log(render);
      ->if it dependant [] it will call after initial render 
      ->if anything pass [xyz], then it called upadated one
      ->while one Need to Remove <Body/> & <footer/> for more understand in 🗃️app
      @LOCATION: 🗃️component/Header.js

      NOTE: 😵YOU CAN CREATE AS MANY AS useEffect HOOK A/C TO CASE !!

  
      🎯Now, want to make API Call As soon as Page Load & just one So where should i make API Call - Of Course in useEffect Make sence 👍
      -🎗️because it load/render page first then call api 
      -🎗️by using fetch()
      -🎗️fetch from swiggy public api
       ref:https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING 

       -🎗️Operation perform by asynchronously so for that use async/await for fetch API 
       -🎗️call api inside function,create function & fetch
       -🎗️then turn into json Data
       -🎗️then it'll return a readiable stream,it needs to be converted in json object that we can read it;
       -🎗️then log data for Proof;
       -🎗️Might be face this error unhandled Rejection because browser block this one so to get rid of we need add extention CORS in chrome 
       -🎗️NEED TO TOGGLE ON Of extention

       THIS IS HOW WE EXPLORED WORLD 
       you get some data in console So let's demonstrate this data on to our website!! or should we insert this data on UI yes 😍 & take test of Live dat on to our UI 
       -🎗️So How? do we Need restrauntList Now: NO 
       -🎗️Push New data from our JSON Into my State restaurants which is setRestaurants it is setRestaurants(...Path...);
       e.g: setRestaurants(json?.data?.cards)

       -Might be you 😗amaze first render old data that you passed in STATS (@hint:restrauntList)then call api data with updated one(@hint:setRestaurants) as per Diagram(render-quick.png) so there RECONSCILIATION proccess treking & quckly refresh the page!! this is only happend by useEffect HOOK!
       🥊🥊@FOLLOW_UP
       -Do inspect - go Source - ctrl+o - put debugger on useEffect content & next one into card render section

      -@REMEMBER: FIRST Render The Use useEffect
      -Now, Remove restrauntList INTO STATES DON"T Want OLD DATA Want New/Updated one ⤵️⤵️
      🧑‍💻---------------------
      OLD:
      const [restaurants, setRestaurants] = useState(restrauntList);
      NEW:
      const [restaurants, setRestaurants] = useState([]);
      ------------------------🧑‍💻


      ------------------NEW--------------------
      @SECTION:SHIMMER DESIGN 
      @OPTIONAL_NPM: Ref:✈️🔗https://www.npmjs.com/package/is-odd
      Don't use it's for an study!!

      -🎗️🎯LET's Move On Shimmer Design 
      -🎗️🎯When our website load sometimes it take times too fetch data from API so in the midtime we need to show something this is know as @search:"shimmer effect in UI" Or may PWA(Progressive web application)
      Q) SO,where will we put SHIMMER UI ??
       -you've to render it so How do we render it ??
       -when the Data is not called !!
       -so how do show loading by using CONDITIONAL RENDERING

       @NEW_TOPIC: CONDITIONAL RENDERING
       When we render it Either need to call SHIMMER UI or a Normal UI Mean API UI 
       @SUDO_CODE:
       🔺if restrauntList is empty = SHIMMER UI 
       🔺if restrauntList has data = ACTUAL DATA UI (API)

       -CREATE SHIMMER UI COMPONENT 
       -By the name ShimmerUi
       -Then call it after return


       -By Using Ternary OPERATOR

       ----------------------NEW
       @ABOUT:BODY.js      

       -🎯Our search functionlity still not work fine it show shimmer UI over there while searching any food;
       -🎯if you mispelaed anything in Search Bar still show Shimmer UI 

       Why is not working/happening?
       -🎯we change Layout of DATA it won't work we'll have to update a List so WHY not work our STATEs "restaurants"(restrauntList) get filter out.
       -🎯everytime we don't have to upadate this "restaurants"(restrauntList)
       - we'll have to maintain two Variable In STATEs 
         🔺1st : want restrauntList of all restaurant for browser Ui 
         🔺2nd : want my filtered restaurants on search 

       Q) while filtering Should i filter from all restaurant Or filter restaurant ??
       -of Course, From all restaurant so we'll maintain two copies of my restaurant So REPLACE "restaurants to FILTERRESTAURANT" & setFilteredRestaurants in STATEs !!
       -🎯Now keep a copy of all restaurants above on FILTERRESTAURANT So how do i do that 
       -🎯CREATE A STATE 
        const [allRestaurants,setAllRestaurants] = useState([]);
       -🎯Now what I Do is I'll POPULATE My all restaurant specially when I Make an API Call over there instead of "setFilteredRestaurants use setAllRestaurant"s
       THIS Is how all my restaurant fill;

       Now Go➡️ to ONCLICK EVENT 
       REMEMBER When I Click I Do Filter you'll get filterData over so what should we passed inside "FILTERRESTAURANT Or All restaurant"
       -🎯I want to Always filter from All restaurant 
       Then, 
       Comes to SHIMMER want to demonstrate this is it allRestaurants or filteredRestaurants !! 
       Of Course From filteredRestaurants!! 
       -🎯But Why ?? filteredRestaurants tell me what you'r RENDERING while .map is it filteredRestaurants Yes so if any time this time is not there show a shimmer UI.
       -🎯if Let Assume If i've allRestaurants.length shimmer is shown or either filterData show it's not good way 

       🤨@CONCLUSSION:🤨 ON our first Webapage you've to show "ALL_RESTAURANT" And as soon as you search something Then you've to show any cost "FILTER_RESTAURANT" any given Cost!! that's convection. 

       WHY allRestaurant Is required🤔 & which one we'r RENDERING On UI??
       Restaurant:-is for only Search & filter 
       RENDERING:-felterRestaurant we'r RENDERING in return function;

       


       ➡️##How we do Avoid RENDERING PROBLEM(@Hint:.length(ND))
       -you can use either optional chaining when you RENDERING or use CONDITIONAL RENDERING 

       🔺#code: if(!allRestaurants) return null;
          Know as: "Early return" when don't have restaurant Don't return anything;
          -Not Render COMPONENT

       🔺#code: if(filteredRestaurants?.length === 0) return <h1>No Restaurant Match Your Filter</h1>
       😏H.W: first check for allRestaurants & show the SHIMMER Then need to show weather filteredRestaurants there or NOT 

      -----------------------------NEW 
      LET's WRITE CODE FOR LOWER CASE & UPPER CASE Match case while SEARCHING🔎 !!

       "Moti" === "moth" 
       -🎯output: false ❌(NOT WORK IN JS)
       -🎯"Moti".toLowerCase() === "moti".toLowerCase()
       -🎯output: true 💹 (WORK IN JS)

      So change in Filter Restaurant above Body COMPONENT Need to Explicetely mention OPTIONAL chaining O.W show 🥊🥊error LIKE xyz UNDEFINED 

      -----------------------------NEW 
      @LOCATION: 🗃️Header.js 

      LOGIN/SIGNUP
      -🎯create authentication user function
      -🎯Call Authenticate API & check weather it is is exit or not if exit return true & if not false;
      -🎯Use Ternary OPERATOR 
      -🎯Let's FUNCTIONALITY work on Click of LOGIN/Logout
      -🎯So for CREATE STATEs Like above function 
      -🎯TOGGLE it(RECONSCILIATION PROCESS trigring)

      Where Diff & firber Algorithm return in which library??
      -🎯It's an core of an React 
      -🎯It's written in the React Code 
      -🎯DOM Updates via React-dom 
      -🎯Use Ternary OPERATOR 

      REF: ✈️🔗 https://react.dev/learn/javascript-in-jsx-with-curly-braces



      -------------------------NEW-----------------------------
      @ABOUT:::::-> ROUTING (react-router-dom)
      @AUTHER: remix not fb developer
      @LOCATION::->
      @SWITCH: Create COMPONENT + app.js + Navbar/Header (Link)
      
      Q) Why CDN IMAGES Always 🎗️GREAT choise to host Images ??
         -🎯when you build an app or x website 
         -🎯because it's faster as compared other it cached you'r image 
         -🎯100% up time & optimize way 
         -🎯preOptimize our images over on CDN 
      
      Q) which library is best for Desingning Form with validation !!   
      ref: 🔗✈️https://formik.org/

      
      ref: 🔗✈️https://reactrouter.com/en/main (v6)
        
     we'r exploring finding the path know as ROUTING !!
     -🎯npm i react-router-dom 
     -🎯create step-by-step COMPONENT(about,contact,home,Cart)
     -🎯Then comes to 🗃️app.js file 
     -🎯Here import createBrowserRouter from react-router-dom AS PER DOCUMENTATION take REFFERENCE of above LINK 
     -🎯createBrowserRouter Takes a configuration this configuration is an array is a list of path & each path it's an OBJECT
     -🎯Inside Object pass "path" & 'element' to migrates stuff!!
     -🎯pass this 'appRouter' to root.render it's because want to render this according to path "configuration";
     -🎯for that we'll use "RouterProvider" As Per DOCUMENTATION
     -🎯pass component 
     -🎯then use 'useRouteError' hook for identify route error 

     Now, if i want to click on "About" want to go on his page!
     So,How?? 
     So,Basically we'r building 'SINGLE PAGE APPLICATION' Mojorily There is Two type of routing 
     🔺1st : client side routing 
     🔺2nd : server side routing 
           All gonna pages comes from server side Let say want to go on "/about","/contact Us" page ; 
     
     🤔But, our in this React Application we'r focusing on "client side routing" because everything is already available Just randomly Click on any route & go t o Tab e.g "/Home", "/Logout" !!
     😗OPTIONALLY You can do like that also E.g <a href='/about'>
     <li>About</li> dont' use anchor tag "<a/>"
     But not a good Practice it loads a whole browser page like refresh it is an drawback for us!! 

     -🎯So in order to Resolve that react-router-dom provide us {Link} to navigate from one to another in 🗃️Header.js 

     🤔@NOTE: Link uses Anchor tag behind the sence knowgly & unknowlinly & ultimately we'r at the end of the day we need to convert this into browser readiable formate.

    ----------------------------SECTION

    Q) What is Neasted Routing 🤔?? 
    -> one PROBLEM that we'r dealing With As we hit on "/about" "/childrean" the Header & footer disappear Why 🤔??
    -> So we need to fix this out first we want header & footer everywhere! 
    -> create a children of your all route By them term it mean if i've this "/" home(AppLayout) create an children of it
    ->create as many as children as you needed 
    -> it'll take [...] exactly configuration inside it form of Object  
    ->Now Let's create "/about" Now this "/about" is the children of AppLayout: 

    -> 🤔But How we configured it Do you know yes react-router-dom give a FUNCTIONALITY Know As "OUTLET" 
    -> OUTLET is what it's an COMPONENT
    -> OUTLET filled by All children configuration 
    -> OUTLET suppose to be render A/c to config
    -> When we use Outlet when perform CONDITIONAL RENDERING 
    -> OUTLET is like an container
    ->All the children go into "outlet" e.g "/about","/contact"
    ->NOTE: children Always render on inside OUTLET But where should i create an OUTLET it should Always be in Parent so in this Case our <About/> so it supossed to be Always inject over there OUTLET!!
    Either use OUTLET OR Profile both are correct on way;


    ----------------------------SECTION

    Now, we'r focusing on Dyanamics Routing ?? 
    ref: 🔗✈️https://reactrouter.com/en/main/start/overview#dynamic-segments

    Let say if you want go Dyanamically from one page to another which click on Any "x" Cart Then this ROUTING Came into Play 
    -🎯 create COMPONENT (RestrauntMenu.js)
    -🎯 Demo of Dyanamics Routing {path:"/restaurant/:id" element:<x/>};
    -🎯 /:id suppose to be Dyanamics :id can be anything e.g 123,456,xyz on search bar note it down;
    -🎯 Demo: 🔗✈️http://localhost:1234/restaurant/124
    -🎯 Now let's use now Read this Id(123,xyz) But How let's use one Hook That 🔻react-router-dom provide us "useParams" At end of the it's an Normal Function;  
    -🎯 Now let's make an API CALL
        🔗✈️:https://www.swiggy.com/
        Do inspect & go Network Tab fetch API 
    -🎯 to make an API Call use useEffect() once after one click 
    -🎯 So how do we render First Create STATS 
    -🎯 Create an default Empty Object {} inside stats & fill all api Data
    
    
    While Fetching API 
    -If you notice No. of Object List anywhere then How will you loop loop through 🤔?? 
    -🎯Need to use Object.values;
    -🎯Turn The Object list into Array is know know Object.values;
    -🎯Ref: ✈️🔗https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
    


    ----------------------------SECTION


    @TITLE : CLASS BASE COMPONENT 
    @LOCATION: [🔺app.js, 🔺profile.js,🔺profileClass.js,🔺About.js]
    @OVERVIEW:

    -🎯When you use class base COMPONENT Think use to get messay code was not very clean 
    -🎯it is used to be very big as compared function COMPONENT & less maintainable 

    LET's Reacap 
    Let's want to make Profile section inside About So how'll you Make like 
    :✈️🔗http://localhost:1234/about/profile
    Make a childrean of childrea take REFFERENCE of 🗃️app.js

    NOTE: but don't use "slash" "/profile" Always use "profile" o.w it consider as localhost:1234/profile.
    ->🎯All the children go into "outlet" e.g "/about","/contact"
    ->🎯NOTE: children Always render on inside OUTLET But where should i create an OUTLET it should Always be in Parent so in this Case our <About/> so it supossed to be Always inject over there OUTLET!!
    Either use OUTLET OR Profile both are correct on way;


    @CLASS_BASE_COMPONENT@
    AT the end of the Day it's an JAVASCRIPT class!
    React.Component comes from React
      -🎯Can't create class base Component Without render() Methode
      -🎯in function COMPONENT return JSX But inside Class base COMPONENT "render" method return "JSX"
      -🎯whatever you return it inject on our DOM 
   Q) What is extends 🤔?
      => it is a class that needs to be inherit some properties in This react do such thing this is how react know this is class base COMPONENT
   Q) So How do i pass props inside Class base COMPONENT 🤔??
      => Use simply {this.props.name} 
      -So when the react Tracking COMPONENT it takes this props & attach to this keyword;
      -Props it's an object at end of the it play a key role 



















    




      

     H.W
     😏-How do we handles error inside useEffect 
     -https://youtu.be/tcLW5d0KAYE (cors)
     -OPTIONAL CHANING(.?)
      😏?-Let's suppose .data not there my code will breack
      😏?-it almost like figuring out my cards with proper path
      😏?-What is JS EXPRESSION & STATEMENT 
      😏?- first check for allRestaurants & show the SHIMMER Then need to show weather filteredRestaurants there or NOT  

*/
