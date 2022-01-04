import logo from './logo.svg';
import './App.css';
import Post from './Components/Posts/post';
import {useEffect, useState} from 'react';


function App() {


const [posts, setPost]=useState([ 
  {  /*Post will have below 3 props*/
    username:"Nobi",
    caption:"Will it work",
    imageUrl:"https://outlookzen.files.wordpress.com/2020/01/meditation-and-karma.jpg"
  },
  { username:"Sujuka",
  caption:"Yes it has to work",
  imageUrl:"https://outlookzen.files.wordpress.com/2020/01/meditation-and-karma.jpg"

  }
]);

// useEffect will run a piece of code on specific condition

useEffect(()=>{

},[])


  return (
    <div className="App">
      
     <div className="App_header">
     <img className="App_headerImage" src="https://freepngimg.com/thumb/logo/70011-instagram-script-typeface-myfonts-user-logo-font.png"/>

     </div>

{/*Post with props */}
{/* <Post  username="Sunbun" caption="failure is a new opportunity" imageUrl="https://media.glamour.com/photos/5695f66b16d0dc3747eece9f/1:1/w_354%2Cc_limit/sex-love-life-2015-03-hot-dudes-with-dogs-main.jpg"/>
<Post username="Suzujeun" caption="Grow grow and grow" imageUrl="https://miro.medium.com/max/1073/1*H5hgAK3xty7dlsj6mdNNSQ.png"/>
<Post username="Matasaki" caption="Peace of state" imageUrl="https://outlookzen.files.wordpress.com/2020/01/meditation-and-karma.jpg"/> */}
     Hello lets make something interesting

     {posts.map(post=>( <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>))}  /*looping through each post */
    </div>
  );
}

export default App;
