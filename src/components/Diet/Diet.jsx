import React from 'react'
import dietImg from '../../img/dietbg.png'

const Diet = () => {
  return (
    <div className='bg-sky-50 pb-10'>
      <div className='w-full md:h-96 h-80 flex flex-col items-center justify-center' style={{ backgroundImage: `url(${dietImg})` }}>
        <h1 className='text-white text-3xl'>What to put on your plate?</h1>
        <div className='text-center pt-5 px-5 max-w-2xl text-gray-100'>
          {/* list of what to put on your plate */}
          You probably know a healthy diet benefits you physically, mentally and socially. Without good food and drink choices, you're at greater risk of chronic diseases, such as cardiovascular disease, type 2 diabetes, some cancers, and even mental health issues, such as anxiety and depression. A healthy diet helps socially too - regularly connecting with other people may stave off loneliness and isolation.
        </div>
      </div>


      <h1 className='text-center text-3xl text-green-600 pt-10'>Here are some tips for healthy Diet</h1>

      <ul className='px-8 md:px-80 mt-5 text-gray-800 list-disc'>
        <li>
          Eat a wide variety of foods from the five food groups plenty of colourful vegetables, legumes/beans; fruit; grain (cereal)foods, mostly wholegrain and high fibre varieties; lean
          meats and poultry, fish,eggs, tofu, nuts and seeds; milk, yoghurt, cheese or their alternatives, mostly reduced fat.
        </li>
        <li>Drink plenty of water - six to eight cups of fluid per day.</li>
        <li>
          Limit foods high in saturated fat, such as biscuits, cakes, pastries,
          pies, processed meats, commercial burgers, pizza, fried foods, potato
          chips, crisps and other savoury snacks.
        </li>
        <li>
          Replace high fat foods containing mostly saturated fat with foods
          containing mostly polyunsaturated and monounsaturated fats. Swap butter,
          cream, cooking margarine, coconut and palm oil with unsaturated fats
          from oils, spreads, nut butters and pastes, and avocado.
        </li>
        <li>
          Limit foods and drinks containing added salt, and don't add salt to
          foods in cooking or at the table.
        </li>
        <li>
          Limit foods and drinks containing added sugars, such as confectionery,
          sugar-sweetened soft drinks and cordials, fruit drinks, vitamin waters,
          energy and sports drinks.
        </li>
        <li>
          Keep 'extras' or 'sometimes foods' to a minimum - they're not a regular
          part of a healthy diet. Extras are the high sugar, high fat, high salt
          foods listed above, such as commercial burgers, pizza, alcohol, lollies,
          cakes and biscuits, fried foods, and fruit juices and cordials.
        </li>
        <li>
          Be physically active. (Aim for at least 30 minutes of moderate intensity
          physical activity, such as walking, every day.)
        </li>
      </ul>
      {/* list of what to put on your plate */}


      {/* Cards */}
      <h1 className='text-center text-3xl text-green-600 pt-20'>Example Menu for you</h1>
      <div className="text-gray-600 h-full body-font">
        <div className="container px-5 pt-4 md:w-3/5 mx-auto">
          <div className="flex flex-wrap">
            <div className="p-4 md:w-1/2 ">
              <div
                className="h-full shadow-sm shadow-green-100 border-2 border-gray-200 border-opacity-60 rounded-xl overflow-hidden bg-white">
                <div className="p-8">
                  <h1 className="title-font text-2xl font-medium text-center text-green-700 mb-3">Breakfast</h1>
                  <ul className='list-disc'>
                    <li> Smoothie with spinach, fruit, and yogurt</li>
                    <li> Vegetable omelet with whole-grain toast</li>
                    <li> Avocado breakfast bruschetta</li>
                    <li> Banana split oatmeal</li>
                    <li> Eggs over kale and sweet potato grits</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2 ">
              <div
                className="h-full shadow-sm shadow-green-100 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-white">
                <div className="p-8">
                  <h1 className="title-font text-2xl font-medium text-center text-green-700 mb-3">Lunch</h1>
                  <ul className='list-disc'>
                    <li>Chicken, tomato, avocado sandwich on whole-grain bread</li>
                    <li>Quinoa with stir-fried vegetables</li>
                    <li>Apple coleslaw</li>
                    <li>Black bean and sweet potato quesadillas</li>
                    <li>Sanchico tuna salad</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2 ">
              <div
                className="h-full shadow-sm shadow-green-100 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-white">
                <div className="p-8">
                  <h1 className="title-font text-2xl font-medium text-center text-green-700 mb-3">Dinner</h1>
                  <ul className='list-disc'>
                    <li>Chicken breast, roasted vegetables, hummus</li>
                    <li>Roasted salmon, zucchini, and sweet potato</li>
                    <li>Whole-wheat pasta, ground turkey, and tomato sauce</li>
                    <li>Argentinean grilled steak with salsa criolla</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2 ">
              <div
                className="h-full shadow-sm shadow-green-100 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-white">
                <div className="p-8">
                  <h1 className="title-font text-2xl font-medium text-center text-green-700 mb-3">Snack</h1>
                  <ul className='list-disc'>
                    <li>Baby carrots and hummus</li>
                    <li>Celery with natural peanut butter</li>
                    <li>Fruit and yogurt</li>
                    <li>Banana cocoa yogurt pops</li>
                    <li>Chili popcorn</li>
                    <li>Yummy bean dip</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cards */}

      {/* Remember */}
      <h1 className='text-center text-3xl text-green-600 pt-20 pb-5'>Remember Sunita...</h1>
      <ul className='px-8 md:px-80 mt-2 text-gray-800 list-disc'>
        <li>As you become older, the foods and drinks that make up a healthy diet for you may be slightly different from when you were younger.</li>
        <li>Know serving sizes and amounts for your age.</li>
        <li>If you need help choosing or preparing a healthy diet, chat to a family member, your healthcare professional, carer or an accredited practising dietitian.</li>
        <li>Talk to your doctor about your specific health needs.</li>
      </ul>
      {/* Remember */}

    </div>
  )
}

export default Diet