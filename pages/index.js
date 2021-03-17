
import Image from 'next/image'
import Link from 'next/link'

 

function Home() { 

return (
   
 <body>  

<div id="home">

   <h1>Marcos Trajano</h1>

   <Image
     src="/fotoperfil.png"
     alt="Picture of the author"
     width="500"
     height="500"
    />

   <p>Welcome to my homepage!</p>
  
   </div>

   <div id="email">
      <p><b>Contact me:</b> colunaditrajano@gmail.com</p>
   </div>

   <div id="midias">
      <p><b>Follow me</b></p>

      <Link href="https://www.instagram.com/marcostrajano7/">
      <Image
         src="/instagram.png"
         alt="instagram"
         width="50"
         height="50"
      />
    </Link>

    <Link href="https://twitter.com/Marcos_Trajano">
<Image
     src="/twitter.png"
     alt="twitter"
     width="50"
     height="50"
    />
</Link>


<Link href="https://www.facebook.com/marcos.trajano7">
<Image
     src="/facebook.png"
     alt="facebook"
     width="50"
     height="50"
    />
</Link>

   <br></br>

   <Link href="https://www.youtube.com/channel/UC57iySgSUcGBA0-7YenZzcw">
<Image
     src="/youtube.png"
     alt="youtube"
     width="50"
     height="50"
    />
</Link>


<Link href="https://www.linkedin.com/in/marcos-trajano-a0849164/">
<Image
     src="/linkedin.png"
     alt="linkedin"
     width="50"
     height="50"
    />
</Link>

<Link href="https://github.com/trojano">
<Image
     src="/github.png"
     alt="github"
     width="50"
     height="50"
    />
</Link>

   </div>

   </body>
   
   );  
}


  export default Home