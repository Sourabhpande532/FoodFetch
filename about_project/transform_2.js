/*@ABOUT: 
 -@ALL ABOUT EXPORT IMPORT
 -@HOW REACT WORK BEHIND THE SENCE HOW REACT IMPORT & EXPORT STUFF LIKE REACT.FRAGMENTS,createElement INSIDE ONE { .. }.
*/
/*
export const Title = () => {
  return (
    // JSX
    <a href='/'>
      <img
        className='logo'
        alt='logo'
        src='https://pbs.twimg.com/profile_images/1472170906625716233/wyw6zyp4_400x400.jpg'></img>
    </a>
  );
};

/*Let suppose if you'r export with by name you need to import like that import {Title} from "./component/Header/" 
@Given the fact this is not object distructuring O.w it will work in this case E.g 
😗@TalkAbout_app.js How to import stuff from component
🔺const obj from "./component/Header"; 
obj.Title or const {Title} = obj this won't work 👎
But if you'v to export everything in this one then generally we use like that 
🔺"const * as obj from "./component/Header";"
 obj.Title
[😗Understand why react use React.Fragment]
 This will work 👍

 Let's you want import this thing into app.js How would you do that

 @TITLE:"Default Import && Named Import"
 🔺import Header,{Title} from "./component/Header";
 But Let's suppose ther ther two named export then use something like this.

 @TITLE:"Named Import"
🔺import {Header,Title} from "./component/Header";
   [😗Understand Why React use {createRoot}]

🔺"const * as XYZ from "./component/Header";" 
   [😗Understand why react use React.Fragment]

   @KEEP_N: Always preffer export Default it just for side information for you use this one but in rare cases.
  
 
 Is Header.jsx is mandatory to write such file convection🧐🤔??
 No, it's not mandatory How came into display let's discuss that whenever you use external library it keeps on track base on Extention! so sometimes it breck whe you use external library that's why but it's not mandatory it's completely ok to use Header.js or Header.jsx both preffer



//CODE
export const Header = () => {
    return (
      <div className='header'>
        <Title/>
        <div className='nav-items'>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };
  


*/
