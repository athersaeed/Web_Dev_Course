import React from 'react'
import Script from 'next/script'

const Contact = () => {
  return (
    <div>
      <Script>
        {`
          alert("Welcome to Contact Page");
        `}
      </Script>
      I am contact
    </div>
  )
}

export default Contact


export const metadata = {
  title: "Contact Zingerburger",
  description: "This is facebook and we can connect with the world with facebook",
};