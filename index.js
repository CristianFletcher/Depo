import React from "react"

export default function Home() {
  return <div>Hello world!</div>
}
add_img() { 
	var img = document.createElement('img'); 
    img.src = ‘C:\Users\Andrei\Desktop’; 
	document.getElementById('body').appendChild(img);
