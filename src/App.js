import logo from './logo.svg';
import './App.css';
import React from 'react';






function App() {
  return (
    <div>
      <h1>Login</h1>
 <form>
   <table align="center">
     <tr>
       <td>
<label for="uname">Username </label></td>
<td><input className="input1" type="text" id="uname" placeholder="kunjan"  /></td>
</tr>
<tr>
       <td>
<label for="pno."> Password</label></td>
<td><input className="input1" type="text" id="pno." placeholder="12345678"  /></td>
</tr>
<tr>
<td colSpan="2"><input id="btn1" type="submit" value="Submit" /></td>




</tr>
   </table>
 </form>
    
    </div>
  );
}

export default App;
