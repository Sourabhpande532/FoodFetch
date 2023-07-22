/* 
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
      -🎯So when the react Tracking COMPONENT it takes this props & attach to this keyword;
      -🎯Props it's an object at end of the it play a key role 
      --How do I Create STATE in Class Base COMPONENT !! 
-🎯Take REFFERENCE of 🗃️Profile.js & 🗃️ProfileClass.js  
-🎯In function we use STATE But,In class base We've Constructor to create STATE !
-H.W: ❓Why do use super(props) inside Constructor(props){super(props);}
-> Ans: 
✈️🔗https://www.geeksforgeeks.org/what-is-the-purpose-of-using-super-constructor-with-props-argument-in-reactjs/
✈️🔗https://www.geeksforgeeks.org/whats-the-difference-between-super-and-superprops-in-react/

Role of Constructor: ->it is place use for initialization; when a instance of class is created/invoke while RENDERING a Constructor is called ! & this is best place to create STATEs;
-whenever you load card Constructor is called it's first Step!
-To create STATE Here Called something Know as "This.state" just similar like react gives access of this.props.name 
Q)❓ -> Then How do I updated state By using "This.setState({count:1})"
   -> Always REMEMBER according To LifeCycle Methode First Constructor Then Render Called in Class BASE COMPONENT But In function Base COMPONENT it called after every each time render;
Q)❓ -> How to call API Call In Function & class Base COMPONENT & what is best method ?? 
   ->🎯In function we use useEffect(()=>{}) after every reder it call("First render + Then 2nd Call API(useEffect)") But in Class base Same process we apply First render & Then we'll update something So react Provide use some functionality Know as "componentDidMount" it work under lifeCycle like ["Constructor",render,componentDidMount] it render the array sequence what we mention here...  
   ->🎯it is best way to call API in "componentDidMount"

   @CLASS_BASE_COMPONENT_RENDER_PROCESS@
   -@WHERE DO We INITIALIZED STATE, in At Constructor whenever you'r class is INITIALIZED You'r constructor is by default Called

 -------------------------------------NEW!!  
 @How_it_STEP_BY_STEP_RenderedOrCalled@ 

 *Parent Constructor
 *Parent Render 
 *First child - Constructor
 *first Child - Render 
 *second child -Constructor
 *second child -Render 
 *First Child  -ComponentDidMount 
 *Second Child  -ComponentDidMount 
 *Parent - componentDidMount
 
❓How & Why ??
 When react is Rendering the stuff first it goes in Two phase when reconcialation is happening 
-* Render Phase &  *Commit phase 
 Diagram Ref: 🔗✈️ https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

 -🎯In the Render React first finished the render phase it include first "constructor"& then "Render" methods called & fact It's very fast as compared to Commit;
 -🎯Commit Phase is the phase WHERE React Atually Modify you'r Dom Then after INITIALIZED render Then componentDidMount Updated 

 @NOTE: Who help us to convert JSX To HTML It's Obivious "BABAl" As per process First called "Constructor" Then Called "Render" here inside one it Generate the Core HTML That BABAl convert JSX To HTML it plays Key Role!!

 https://api.github.com/users/Sourabhpande532

 H.w: We can use async componentDidMount But why not we use async operation with useEffect(async) !!
-useEffect runs asynchronously after a render is painted to the screen, unblocking the browser paint process.
-Why? Because React's useEffect hook expects a cleanup function returned from it which is called when the component unmounts. Using an async function here will cause a bug as the cleanup function will never get called.
Ref: 🔗✈️https://www.designcise.com/web/tutorial/why-cant-react-useeffect-callback-be-async

How we can disply Api Data on UI ??
-for that Need to create STATE inside constructor !! 
-STATE is Nothing but an big Object
-How do i STATE Data into state use this.state on componentDidMount

-😱Given:Fact Parent - componentDidMount it call befour API first first Parent-componentDidMount call then API because API take certain time to load so it FOLLOW the sequence see below 
/***
 * call.....
 * child constructor
 * child render
 * child componentDidMount 
 * 
 * Then'll Make API Call
 * set State 
 * begain to start with Updata see Diagram render.png secode Coloum 'Updata'(ComponentDidUpdate) @hint first is "Mounting" & 3rd one "Unmounting"
 * 
 * <Updata CYCLEES>
 * render component
 * 
 *NOTE:As soon as You make an API Call inside 🔻("componentDidMoun")t you'r component Already mounted then Goes in 2nd phase 🔻("ComponentDidUpdate")
 *NOTE: MOUNT'll be called when ""after first render"" & Updata called be when "after every next render" & 😱Given fact then 3rd stage came 🔻("CompoundWillUnmount") it'll called when you go to next page Or leaving Page ...as soon as &&  in function base component you can use something know as""return () => {clearInterval(timer);console.log("useEffect return");"" REPLACE(CompoundWillUnmount) it atually cleanup the the page Take Refference of 🗃️Profile.js &  🗃️ProfileClass.js see useEffect function clearly!!};
 *
 *
 * 
 * How'll useEffect call without dependencies array after every render & in class base after first render componentDidMount "Called" & after every subsequent result it is updated "componentDidUpdate" called;
 * How useEffect call with dependencies it called  only one time render not every time;
 * 
 * 
 * 
 * What if with we pass some info in dependencies array like inside useEffect(()=>{},[count]) it called after every count updated! 
 * Now How i do with class Base component as we know one life CYCLEES methods runs after every render that lifecycles methods is "ComponentDidUpdate" it will call every Update
 * 
 * 
 * 
 * 

 ----------------------------SECTION


@TITLE : CREATE OUR OWN CUSTOM HOOK  
@LOCATION: [🔺app.js, 🔺,🔺,🔺]
@OVERVIEW:

!Q) Why should we build hooks >??
->  reusability & readibility,SOP(separation of conrcern), maintainability, teastable, & modulirity(we've broken down code into meaningful peaces)
-> at end of the day it's an HOOK @@!!

Now,let's us create on our Hook of 🗃️RestrauntMenu.js
-🎯it is doing two thing Fatching Data & disply Data 
-🎯1st it find "id" 2nd is get the details from "Server" then 3rd is come to disply data on UI 
-🎯so let's create Own Hook that'll help us get RestrauntMenu details 
-🎯Make sure create an hook with "use" prefix name initially like 🗃️"useRestrauntMenu.js"

Surly you can use named export but Generally when we created 1 file for 1 component/hook ultimately we'r designed hook so it should be rafce type not named export!

it usually fetch the data for us 🗃️useRestrauntMenuHook(has triggers own RECONSCILIATION PROCESS going on) 
-🎯so where this id come from come from URL i'll fetch data from this MENU with respect this id 
-🎯im putting the data into restaurant see observerly in 🗃️RestrauntMenu.js  it's a state variable what if if i'm have useRestrauntMenuHook & don't care about data from where attually it's coming from literally in that wake we create own Hook; 
-🎯I literally don't care from where it's coming weather it's hard coded or any...

@DEFFINATION@ of Functional Component@@!! 
-🎯it is functiion that return JSX 
-🎯So hooks does not return JSX it is a peace of JAVASCRIPT code that extract peace of LOGIC out of it! 

 
 
----------------------------SECTION

@NEXT : When INTERNET GOES OFF 🥱
@BUILD_FUCTIONALITY: When INTERNET Goes OFF
@LOCATION: [utils/useOnline]; 

!! How should we create New Hook from scratch means CUSTOM HOOK feature is know as are !online or onffline 

-🎯How a'm get to know whether am online or offline there is something know window event online 

🔗✈️https://developer.mozilla.org/en-US/docs/Web/API/Window/online_event

-🎯so how many times i need to set event listener "just one" whenever page is load eventListner track it "ONCE" so for that we need useEffect at one time only;
if you've to write senior developer code Need to clean "addEventListener" cleaining the cache because we want only for our body component Not other like 'contact' o.w it create mess 
-🎯it is Always a good idea to clean the eventListner when you go other component like "about,contact" o.w you'r browser holds keep eventListner & create mess & blown up !
-🎯so how do we that use "return" The process is unmounts || CompoundWillUnmount



-----------------------------@SECTION 
@ABOUT: INDIVIDUAL SPLITING,CHUNKING,ON DEMAND LOADING 
@LOCATION: 🗃️component/Instamart, 🗃️app.js 


   Using thing INTO large scale application!
   As i know BUNDLERS(parsel) store all this thing into index.js (check network tab(js)) But what if there is 1000 component still it store or create mess ??
   it obivious create an mess & it would make our app very slow 🤔🥱??

   -🎯So instead what should i do just
    use 🔺Chunking,🔺Code Spliting,🔺Dyanmic 🔺Bundling,🔺Lazy Loading is BUNDLEING Always Good for large production!

 Q) So How do we large scale application like makeMytrip Bundles/split all those things How they compress thousand(1000) component?

     first discuss 👁️SEANARIO if use visit makeMytrip
     ref: ✈️🔗https://www.makemytrip.com/

     & want to go to flight anywhere So do you literally open train section/component it's less chance or no chance So that's way Chunking/Spliting code! Base on use cases we Bundles thing for good dev Experience!
    😵For INTERVIEW_PERSPECTIVE 
    Tell above 👁️SEANARIO what they ask Although you designed makeMytrip app So how it Build & how do you BUNDLEING stuff or what is need of BUNDLEING??
    -🎯while Building this makeMytrip app i'll use code Spliting/Chunking for all of them 
    -🎯when i'm doing BUNDLEING or using some webpack,parsel i'll make sure mybunderlers doe'nt INCLUDES random code !
    -🎯to be honest doesn't make any sence to be loaded train component into my flights component as i visit flights on makeMytrip
    -🎯How do we do that so whenever our home page loads it should only loads component for flights it make genuine sence! & whenever visit train it only load train section not others @NOTE: not run on same time both component o.w crate mess and delay the process!
    -🎯Make my trip its image heavy side so i put all those images on to CDN or compress it
    
    All this know as 
   🔺On Demand Loading(separate component individual load), 🔺Chunking,🔺code Spliting, 🔺dyanamic BUNDLEING,🔺Lazy Loading, 🔺Dyanmic import

   LET"s Build a BUNDLERS for Instamart 
   -🎯feature for instant delevery 
   -🎯Quick response
   -🎯if you go /instamart & check Network tab while inspect you'll still get inside index.js file why🤔?
   -🎯Let's us try to do Chunking on import see 🗃️app.js where we import instamart let's do separately! 
   -🎯Need to perform lazy loading or 🔺Dyanmic import separately so don't import instamart as usually instead create a separate method for it called "lazy()"
   -🎯lazy() comes form "React library"! as an nameed import
   -🎯expect one function to perform 🔺Dyanmic import/loading And it's and Promise consept of JAVASCRIPT(H.w! explore)

    ------------CODE 👨‍💻
    const Instamart = lazy(() => import("./component/Instamart"))
    ------------CODE 👨‍💻
  
   🤩Now,check the Network tab again And see As soon as you visit /instamart route you'll get to know instamart.add separate BUNDLEING it won't be in index.js it specially load This is know all above on Demand loading

   All this know as 
   🔺On Demand Loading(separate component individual load), 🔺Chunking,🔺code Spliting, 🔺dyanamic BUNDLEING,🔺Lazy Loading, 🔺Dyanmic import

   Might be you'r facing one error Oops went wrong Why 
   -🎯because it's ultimately separate BUNDLERS So it takes time to load script in this process react "suspend" the thing/ 🎗️Operation so what should we show in the midtime/intermidet time Show Shimmer inside "fallback" it's props which react takes us while Suspense 
   -🎯At the end of the day it's SPA
   -🎯In order to overcoem react library provide use "Suspense" & wrapped up instamart into <Suspense/> rest of the thing react take care 

   -😵NOTE: NEVER EVER CHUNKING inside another Component It Always on Top

-----------------------------@SECTION 
@ABOUT: TAILWIND CSS  
@LOCATION: 🗃️component/header, 🗃️app.js

    H.W read about pros and conse of all  
   -🎯1st)scss & Normal Native css 
   -🎯2nd way INLINE inside object 

   -🎯3rd Component Libraries 
   ![Base UI(company use)]🔗✈️https://baseweb.design/
   [Meterial UI]-ref:🔗✈️https://mui.com/material-ui/getting-started/
   [Ant Design]-ref:🔗✈️https://ant.design/components/layout
   [Chakra UI]-ref: 🔗✈️https://chakra-ui.com/getting-started
   [styled Component UI]-ref: 🔗✈️ https://styled-components.com/docs
   @OVERVIEW:_style component use inside JSX {..here..} for designing the component it's kind of apply css on JSX 

   -🎯4th Tailwind CSS Framwork 
   -🎯it came with mix of thing 
   -🎯it work on the go(in the same file)
   -🎯reusability 
   -🎯come with prebuild classes 
   -🎯less Bundles size As compare others 
   -🎯flexible UI (Customize Easily)
   -🎯really good DOCUMENTATION for begginar 
   -🎯use CDN Go 4th option CDN & inject into our index.html [😗OPTIONALLY]
   -🎯But not recommended way 
   -🎯Best way 3rd option "FRAMWORK & GUIDE" LOOK FOR ...what you'r project using like parsel,create-react-app 
   -🎯what is postcss? it is a tool for transforming css into JAVASCRIPT 
   -🎯we need to tell the parsel project that we'r using tailwindcss 
   -🎯it's compilation process that browser easy to understand we'r using tailwindcss
   -🎯what is .postcssrc Need to tell this one compiled tailwindcss into normal css 
   -🎯it change the default behaviour of our browser,change size,font;

   Ref: ✈️🔗https://tailwindcss.com/docs/installation
   Ref: ✈️🔗https://postcss.org/ H.w 


   PROS AND CONSE OF TAILWIND CSS !!
   @PROS-
   -🎯it is easy to debugg and reusable 
   -🎯less code & save times 
   -🎯no duplicate css,less Bundles size small, faster development
   -🎯much Customize 
   @COMSE 
   -🎯too much className, much complicate see the code 
   -🎯there is initial learning curver associated with new begginar not understand at one go 
   -🎯it not too much readiable



-----------------------------@SECTION
@TITLE: DATA IS THE NEW OIL  
@ABOUT: redux OVERVIEW  
@LOCATION: 

@OVERVIEW:
Handling data for webapp most challenges task weather it is any application angular Js,react application, any!
Always you'll get to see two layer on you'r frontend
🔻1)UI Layer 🔻2) Data Layer 
Let's overview an JSX first turn it into Big OBJECT in react & big object structure know as Virtual DOM RECONSCILIATION proccess came in picture which has diff Algorithm what it does it compare previous dom and new dom(defference calculate of two object) & it kept sync with ACTUAL HTML dom 

whole UI Layer is powered by data layer !! what does data layer consist of in UI ? how the UI is rendered with data ? how it used 🤔?
NOT json,rest API, am i saying How you'r data within the application is maintain 🤔??
-::->
-🎯With the help of "STATE And PROPS" not only with that maintain there are more thing of it!

Q)Basic defference between PROPS AND STATE 😗
 ➕STATE-> let's you'v container you want a variable which has scope just within that container/component Know as STATE !!

 ➕PROPS->sending inforamtion from one component to another
 ➕It is like local state for our parent which stored no. of information end of the day it's an function call pass argumen()t while calling function & receive as an Parameters! 

Q) How would pass the data from root app.js to Restaurant Cart data Below rating  🤔?? if give someone task! 🤔
 simple using props first need to find body route 
 E.g of PROPS ↙️
 SEE {User} inforamtion in 🗃️+app.js 🗃️+component/body 🗃️+component/RestaurantCart

 /**
  * AppLayout Which is having local state variable "user"(top level pass it to children proccess)
  * it's like an chain it's come from AppLayout to +body then to you'r +RestaurantCart see below e.g how it pass information via prop
  * When you pass the data from parent to child then it's child know as 🔴"PROPS Drilling" in chain formate
  * 
  * 
  * Chain(props DRILLING)
  * AppLayout(user-Local state variable; it's an parent & owner)
  *   -🔺<Body user = {user}/>(Child)
  *      -🔺RestrauntContainer user={user}
  *      -🔺RestaurantCart user={user}
  *        -🔺<h4>{user}</h4>
  *          🔺xyz
  *  
  * this chain continuous ...............
  * 
  * ALL PROCESS KNOW AS PROPS DRILLING from Parent to child pass info But what if Need to send info from child to parent it's very less chance but for info So how would do that ?? 
  * 
  * 
  * use localStorage but not good way  Then we can build our "CustomHook" or use anywhere it's not also recommended way 
  * 
  * !So this props DRILLING makes our code messy/CLUTTER it's ok to send info from 2 or 3 times via chain(parent to child) but what if there is huge hierchey where need to send info 200 times from parent to child & it rendered again and again it's an DISADVANTAGE... Then How would you Build! 
  * 
  * => we use "Redux" to solve this proble but later discust  
  * see demo in 🗃️component/instamart 👇
  * 
 ----------------------------NEW-----------------------------

  @LOCATION: 🗃️component/instamart
  @TITLE:BUILDING A FEATURES ABOUT COLLPSING ACCORDIAN

  EVERY COMPONENT has it's own state if you'r gonna notice there is 3 section each section has it's own separate PROPS & STATE 
  and everytime it's sibling Change true to false && false to true open react developer tools and look at! so we need to modify our state of sibling which is work under parent "Instamart" So how would i Colaps ?? first we can't Directly modify a state of another sibling from component
  Ans:->

  -🎯maintain state in "parent" instead sibling(as had been control to individual component(<Section/>) now pass to parent(instamart))
  -🎯parent has its control on it's children to manage all stuff 
  -🎯will take a control of show/hide from this Section children to parent  
  -🎯concept know as "lifting the state up" 

  Now, create a state inside Instamart & pass object into it!
  & base on section No. How many is as of now 3 three so pass three KEYs inside it! showAbout,showTeam,showCareers! 
  -🎯Now, how can i show at one time one all others automatically Colaps while clicking on button 
  -🎯Now the button is inside children component Now If I click on to this button & want to change my parent State How would i perform ??
  => setIsVisible(false/true) i will pass this as a parent this control will pass as a "props" previous we passed it in via state Not now! when the setIsVisible there just setSectionConfig my config show about 3 keys as per 👁️SEANARIO

  this type of code not work in production it's not maintainable,teastable,readiable it's sheets  
  if you think logically what is CONDITION of this features the CONDITION is we need only one at a time we need to only one that we need to show either you create a keys for defferent section or create a state only one "state" that you you want to demonstrate "visibleSection" & don't mention OBJECT now with key's

 ----------------------------NEW-----------------------------

 @TITLE: USE React CONTAX API 
 @ABOUT: Moreover now about props Drilling & contax Api 
 @LOCATION:

 @OVERVIEW:
 -Let's suppose you've user login Info & want to share this info into component that we did in PROPS Drilling How would do that Go app.js & look at AppLayout we pass it into OBJECT
 -So, how do we build login type of flow what do we use Obivious useEffect to call an API
 -Now let Assume supossed you logged in & you want share this info to cart component or any other...componet like header,footer.. How can i do thay Obivious using PROP DRILLING from parent to children .. like  
 -But It's not recommended! When the 👁️SEANARIO came like you'need to store somewhere or central place Know as "React Contax" or big company usees "Redux" store one more "MOb X && NgRx"
 -accept localStorage: bcz updating it's very heavy and costly operation fo users 
 -after that any component will use this data from anywhere!

 Let Assumes Contax is a big Object or peace of Data ]
 -create file Name as UserContext.js 
 -import {createContext} Named import from react
 -createContext At end of the It's an Function 
 -it takes some data that you use across whole application 
 -want to show this info into header so there firstly import as a import {useContext} & UserContext 
 -Then call this like below that...
  e.g 🔴 const {name} = useContext(UserContext)
  -then use as like  
  e.g 🔴 <h3>{user.name}-{user.email}</h3> 

 -KEEP_NOTE:useContext is an HOOK! & class Component doesn't Have this Hook it uses as a Component & for Fetching inforamtion You need wrapped Like that <UserContext.Consumer></UserContext.Consumer> Take Ref:🗃️component/About/
 

 


  Then why🤔 Do we need props ??
  Can you I put everything inside Contax No. you cannot do like that
  -Contax has it's own separate thing & it's separate place like storeHouse only use for share info across whole application
  -it's like useState for you'r whole application
  -State and Props are tight to the component  
 







  










   

     H.W
     😏-How do we handles error inside useEffect 
     -https://youtu.be/tcLW5d0KAYE (cors)
     -OPTIONAL CHANING(.?)
      😏?-Let's suppose .data not there my code will breack
      😏?-it almost like figuring out my cards with proper path
      😏?-What is JS EXPRESSION & STATEMENT 
      😏?- first check for allRestaurants & show the SHIMMER Then need to show weather filteredRestaurants there or NOT 
      😏?-https://postcss.org/  read about it 




*/
