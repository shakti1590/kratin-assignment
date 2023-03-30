import React from 'react'
import sunita from '../../img/old-lady.jpg'
import nature from '../../img/mountain.jpg'

const Hero = () => {
    return (
        <div>
            <div className='absolute top-16 bg-sky-50'>
                <div style={{ backgroundImage: `url(${nature})` }}>
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 ">
                        <h1 className="text-4xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-green-700">Hey Sunita! let's enjoy life to it's fullest!</h1>
                        <p className="mt-6 mb-8 text-md  sm:mb-12 xl:max-w-2xl text-gray-700">Here is mantra for you to stay heathy and happy. Start with some light exercise and yoga, follow your diet and enjoy with music and movies. </p>
                    </div>
                </div>
                {/* 480x320 */}
                <img src={sunita} alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-3xl shadow-md lg:-mt-40 dark:bg-gray-500" />
                <div className='h-60 -mt-32 -z-50 '>
                    <p className='w-full pb-4 absolute text-green-600 text-center bottom-0 bg-green-100'>
                        <a href="https://github.com/shakti1590">Made by @shakti  </a>
                    </p>
                </div>

                <div className=" -mt-48 mb-10 py-4 px-4 pt-16 bg-green-100 flex flex-col items-center text-center">
                    <div className='max-w-4xl text-lg px-4'>
                        <h1 className='w-full text-center text-3xl py-4 font-semibold mb-2 text-gray-700'><span className='text-green-600'>Healthify</span>  is your guide to Stay Healthy and happy 😊</h1>
                        <p className='text-gray-700'>No matter your age, it's important to take care of your body and prevent illness.</p>

                        <p className='text-gray-700'>But if you're 65 or older, something as simple as the flu or a common cold can progress and lead to complications. This includes secondary infections like pneumonia, bronchitis, an ear infection, or a sinus infection. If you have a chronic condition such as asthma or diabetes, a respiratory illness can make these worse.</p>

                        <p className='text-gray-700'>Because of this, it's important to make healthy choices to strengthen your immune system and reduce the likelihood of illness.</p>

                        <p className='py-10 text-3xl text-gray-700 font-semibold'> Remember these <span className='text-green-600'>nine tips</span> to stay healthy year-round</p>
                        <ul className='list-decimal text-gray-700'>
                            <li className='hover:text-green-600'>Get active</li>
                            <li className='hover:text-green-600'>Take supplements as necessary</li>
                            <li className='hover:text-green-600'>Eat a healthy diet</li>
                            <li className='hover:text-green-600'>Wash your hands frequently</li>
                            <li className='hover:text-green-600'>Learn how to manage stress</li>
                            <li className='hover:text-green-600'>Get plenty of rest</li>
                            <li className='hover:text-green-600'>Take steps to prevent infections</li>
                            <li className='hover:text-green-600'>Schedule annual physicals</li>
                            <li className='hover:text-green-600'>Avoid contact with people who are sick</li>
                        </ul>
                    </div>
                    <br className='bg-red-500 h-2' />
                    {/* checkbox table */}
                    {/* <p className='w-full text-center text-2xl my-2 mt-10 text-gray-700'> Check following boxes to track daily report</p>
                    <div className='flex justify-center'>
                        <table class="table-auto justify-start">
                            <tbody className='text-xl'>
                                <tr className='flex space-x-4'>
                                    <td>
                                        <label>
                                            <input type="checkbox" className='accent-green-600' />
                                        </label>
                                    </td>
                                    <td>Exercise and Yoga</td>
                                </tr>
                                <tr className='flex space-x-4'>
                                    <td>
                                        <label>
                                            <input type="checkbox" className='accent-green-600' />
                                        </label>
                                    </td>
                                    <td>Healthy Diet</td>
                                </tr>
                                <tr className='flex space-x-4'>
                                    <td>
                                        <label>
                                            <input type="checkbox" className='accent-green-600' />
                                        </label>
                                    </td>
                                    <td>Feeling Happy Happy! 😄</td>
                                </tr>
                            </tbody>
                        </table>
                    </div> */}
                    {/* checkbox table */}
                </div>
            </div>
        </div>
    )
}

export default Hero