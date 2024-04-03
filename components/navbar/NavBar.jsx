import Link from 'next/link'
import styles from "./navbar.module.css"
import React from 'react'
const links=[{
  id:1,title:"Home",
  url:"/"
},
{
  id:2,
  title:"About",
  url:"/about"
},
{
  id:3,
  title:"Contact",
  url:"/contact"
},
{
  id:4,
  title:"Master Plan",
  url:"masterplan"
}]
export default function NavBar() {
  return (
    <div className={`${styles.nvaBar} bg-white  sticky`}>
      <Link href="/" className={styles.logo}>Home</Link>
<div className={styles.links}>
  
  {links.map(link=>(
   <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>) )}
  
  </div>    </div>
  )
}
