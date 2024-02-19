import React from 'react'

const WelcomeSection = () => {
  return (
    <>
    <div className='welcome'>
        <h2>Welcome <span>-Fullname-</span></h2><hr />
        <h3 id='rank'>You have Earned -rank- </h3>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam tenetur quis, laborum cumque fugiat? 
            Incidunt suscipit dignissimos qui! Maiores voluptatum accusantium nobis eligendi quas, asperiores eaque omnis quaerat itaque voluptate ipsum 
            reiciendis architecto officiis eius, expedita, veritatis dolor? Nobis quaerat magni corporis a eaque perspiciatis voluptates iure rerum incidunt?
        </p>
        <div className="challenge">
            <h2>Ready For A New Challenge?</h2>
            <p>Select your subject from below and Attend for the Test ! </p>
            <select name="sub" id="sub">
                <option value="1">MongoDB</option>
            </select>
        </div>
    </div>
    </>
  )
}

export default WelcomeSection
