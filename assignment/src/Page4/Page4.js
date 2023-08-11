import React from 'react'
import './Page4.css'

const Page4 = () => {
  return (
    <div className='container'>
      <h2>Account Settings</h2>
      <div className='photo-container'>
        <img src={require('../Images/Avatar-PNG-Photo.png')} alt='profile photo'/>
        <div className='image-text'>
            <p style={{fontWeight:"600"}}>Marry Doe</p>
            <p>Marry@gmail.com</p>
        </div>
      </div>
      <p>Lorem ipsum dolor sit amet. Et laboriosam provident eos ipsum voluptas sed saepe optio ut obcaecati unde vel doloribus dolor ab Quis magnam? Aut doloribus mollitia aut distinctio dolores et quisquam fugiat. Sit sint doloremque est officiis sapiente nam facilis corrupti.</p>
    </div>
  )
}

export default Page4