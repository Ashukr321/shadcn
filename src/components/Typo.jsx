import React from 'react'

const Typo = () => {
  return (
    <div className='mt-4 sm:text-center'>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
      To learn more about "shadcn" and its similarities or differences with Tailwind CSS, Radix, or other UI component frameworks, I recommend checking the latest online sources such as official documentation, community forums, or the project's website. Look for comparisons, features, and user reviews to get a better understanding of how "shadcn" fits into the landscape of UI component frameworks.
    </p>

    <h1  className='mt-2 text-xl font-bold'>list in the shadcn/ui components</h1>
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
      <li>accordian</li>
      <li>aleart</li>
      <li>aleart Dialog</li>
      <li>avatar</li>
      <li>Button</li>
      <li>calender</li>
      <li>card</li>
      <li>badge ...</li>
    </ul>
    </div>
  )
}

export default Typo