import React from 'react'

const Footer = () => {
  return (
    <footer className="text-center pb-12  bg-blue">
        <hr />
        <div className="text-xl flex lg:flex-row flex-col justify-center items-center lg:gap-x-8 gap-y-4 pt-4 text-white">
          <p>Made by <a href="https://github.com/jacob-s-codes" className=" hover:text-red" target="_blank">@jacob-s-codes</a></p>
          <p>All credit for the idea goes to <a href="https://www.youtube.com/shorts/b-CaKFaefAM" className=" hover:text-red" target="_blank">@Mewtru</a></p>

        </div>
      </footer>
  )
}

export default Footer