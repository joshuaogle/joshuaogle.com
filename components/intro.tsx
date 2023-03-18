import React from 'react';

type Props = {
  className: 'intro'
}

const Intro = ({ children }: Props) => {
  return (
    <header className="intro intro-content">
      {children}
    </header>
  )
}

export default Intro;