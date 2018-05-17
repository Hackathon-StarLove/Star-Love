import React from 'react'

const LoginForm = () => { return (
<form method="post" action="index.html">
<div class="box">
<h1>Dashboard</h1>

<input type="email" name="email" value="email" onFocus="field_focus(this, 'email');" onblur="field_blur(this, 'email');" class="email" />
  
<input type="password" name="email" value="email" onFocus="field_focus(this, 'email');" onblur="field_blur(this, 'email');" class="email" />
  
<a href="#"><div class="btn">Sign In</div></a> 

<a href="#"><div id="btn2">Sign Up</div></a> 
  

  </div> 
</form>
)
}

export default LoginForm