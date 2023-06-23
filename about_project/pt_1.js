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


@SEARCH_FUNCTIOALITY@
-For Searching any element Need to filter Data on onClick method 
-which Data restrauntList data Need to filter
-for sake creete function filterData() after that next one 
-update restrauntList with stats(@REM: Can't update Directly accept state & create variable with one)
-to maintain the list of restrauntList Need to maintain local Variable
-create Local State Variable with default value restaurant dummy data 
        
      

*/
