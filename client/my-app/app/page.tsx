'use client'

import googleButton from '/btn_google_signin_dark_pressed_web.png'
import '/App.css'

function navigate(url: string){
  window.location.href = url;
}

async function auth(){
  const response =await fetch('https://traderhub-1.onrender.com/request',{method:'post'});

  const data = await response.json();
  console.log(data);
  navigate(data.url);

}
function App() {


  return (
    <div className='mainContainer'>
<h1 className='header'><strong>Welcome!</strong></h1>

<button className="button-34" role="button" type="button" onClick={()=> auth()}>
  Login
            
            </button>
    </div>
  )
}

export default App


