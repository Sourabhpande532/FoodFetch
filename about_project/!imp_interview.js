/*
🔺COMPONENT COMPOSITION
 -Functional COMPONENT inside Functional COMPONENT:

🔺TRANSITIVE DEPENDENCIES
 -Cycle of DEPENDENCIES one Depend on Another(E.g Npm):

🔺CONFIG DRIVEN UI
 -INDUSTROY PREFFERENCE Build via Backend API to make our UI convenient/compatible for Users:

🔺Functional COMPONENT & PROPS
-This is JAVASCRIPT function At the end of day 😱Given the Fact of PROPS work under the instuction of function Arguments(while calling end) & Parameters(receive end).

🔺REACONCILIATION USE DIFF Algorithm know the process know as Virtual Dom it finds out which portion needs to be updated UI

🔺WHY REACT IS FAST & WHAT IS STATE
when we build large scale Application we need keep our UI Needs to be continuous Updated for the it's necessory to synch our UI To STATE HOOK that's how useState Hook came into play
-🎗️we need keep UI SYNC with state & DATA
-🎗️for that synching we use STAT VARIABLE

🔺WHY REACT Is FAST & WHAT IS ONE THING??
-🎗️it is because FAST DOM MANUPULATION 
-🎗️the most expensive Operation in the UI STATE Change is DOM MANUPULATION
-🎗️Why react has FAST DOM-MANUPULATION because of the superPower of Diff Algorithm & REACT FIBER This is the core of REACT!
-🎗️It has something know as Virtual Dom  
-🎗️It has something know as RECONCILITION
-🎗️It has something know as Diff Algorithm


🔺DID IT RERENDER THE WHOLE COMPONENT while RECONCILITION,Diff process in VIRTUAL_DOM 😵🤔??
      😱Yes It Re-render;
       -🎗️Whenever You change STATE VARIABLE React Kind of Like Refresh this COMPONENT
       -🎗️it will re-render the Whole COMPONENT it quickly trigger the RECONCILITION process very fast
       -🎗️Why it RERENDER WHOLE COMPONENT?
        you might use this title So many time it keeps on track WHOLE COMPONENT!

🔺@VIRTUAL_DOM
Whenever ther is some change in the state this tree MODIFIED
      -🎗️REACT ONLY Updated those PORTION which you want to UPDATE INSTEAD of Rendering Whole Tree!!

🔺@DIFF_ALGORITHM 
       -🎗️TWO VIRTUAL_DOM Object is Compared:
       -🎗️When we've Diff_ALorithm it compared Current Tree(DOM) with Updated Tree(VIRTUAL_DOM) ti finds out targeted one which you'want to Updated & reflected on DOM.
       -🎗️At the end of the Day It's an JAVASCRIP BIG OBJECT all process VIRTUAL_DOM,RECONCILITION,Diff & all

       E.G 
       🧑‍💻-------------------- 
       CODE:
       const [title, setTitle] = useState("FOOD VILL");
       --
       return 
       <h1>{title}</h1>
       <button onClick={() => setTitle("NEW FOOD APP")}>CHANGE</button>
       --------------------🧑‍💻

🔺Q) Can we write inside jsx like this 
      🔺{a =10; console.log(a)}
      -NO. You cannot write like this it expect EXPRESSION Not STATEMENT
      -At Above Example there 2 statement in order to make it work you need either converted into EXPRESSION So how Do?? wrapped like 
      🔺{(a = 10, console.log(a))}


*/
