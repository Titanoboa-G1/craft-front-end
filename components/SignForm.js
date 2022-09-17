import React from "react";


export default function SignForm() {
    return (
<>

  <div class="flex flex-col justify-center items-center bg-gray-100" >
     
    <form class=" flex-auto px-4 my -32 max -w -3xl mx -auto space-y-6 " action="/send-data-here" method="post">
    <label for="first">First name:</label>
  
    <input class="border border - gray - 400 block py - 2 px - 4 w - full rounded focus : outline - none" type="text" id="first" name="first" />
    <br/>
    <label for="last">Last name:</label>
    <input class="border border - gray - 400 block py - 2 px - 4 w - full rounded focus : outline - none" type="text" id="last" name="last" />
    <br/>
    <label for="name">Username:</label>
    <input class="border border - gray - 400 block py - 2 px - 4 w - full rounded focus : outline - none" type="text" id="name" name="name" required />
    <br/>
    <label for="email">email</label>
    <input class="border border - gray - 400 block py - 2 px - 4 w - full rounded focus : outline - none" type="email" placeholder="Write Email" required=""></input>
    <br/>
    <label for="pswrd">Password:</label>
    <input
    class="border border - gray - 400 block py - 2 px - 4 w - full rounded focus : outline - none"
    type="password"
    id="pswrd"
    name="pswrd"
    pattern="[a-z0-9]{1,15}"
    title="Password should be digits (0 to 9) or alphabets (a to z)."
    />
    <br/>
    <label for="pswrd">Retype Password:</label>
    <input
    class="border border - gray - 400 block py - 2 px - 4 w - full rounded focus : outline - none"
    type="password"
    id="pswrd"
    name="pswrd"
    pattern="[a-z0-9]{1,15}"
    title="Password should be digits (0 to 9) or alphabets (a to z)."
    />
    <br/>

    <label for="Description"> Description</label>
    <textarea class="border border - gray - 400 block py - 2 px - 4 w - full rounded focus : outline - none" id="myTextarea"></textarea>
    <div class="flex flex-col">

        <div class="basis-1/2">
        <input  type="checkbox" name="As a user" value="User" checked=""/>
        <label for="User"> As a user</label>
        </div>
        
        <div class="basis-1/2">
        <input  type="checkbox" name="As a craftsmen" value="craftmen" checked=""/>
        <label for="craftsmen"> As a craftsmen</label>

        </div>
    </div>

    <label for="image">Choose a profile picture:</label>

    <input type="file"
       id="avatar" name="avatar"
       accept="image/png, image/jpeg"></input>
    
    <div class="relative h-32 w-32 ...">
    <button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 w-full p-2 font-medium text-white uppercase bg-gradient-to-b from-gray-700 to-green-600 md:p-4 rounded-3xl hover:bg-white">Sigin</button>
    </div>
    
  
</form> 
</div>
</>
    );
  };