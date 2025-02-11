import React from 'react'
import DestinationAutocomplete from './DestinationAutocomplete'
import TripPlanner from './TripPlanner'
function CreateTrip() {
  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
      <h2 className='font-bold text-3xl'>Tell us your travel preferences</h2>
      <p className='mt-3 text-gray-500 text-xl'>
        We'll create a customized itinerary tailored to your preferences and interests.
        Please share your preferences, we will work together to create a memorable and enjoyable trip!
      </p>

      <div className='mt-10'>
        <div>
          <TripPlanner />
        </div>
      </div>

    </div>
  )
}

export default CreateTrip
